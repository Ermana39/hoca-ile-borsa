import assert from "node:assert/strict";
import test from "node:test";
import { checkSite, createClient, createPlan, expectedShaFromEvent, listAll, POLICY, runRetention } from "./vercel-retention.mjs";

const day = 86_400_000;
const now = Date.UTC(2026, 8, 10, 20);
const sha = "a".repeat(40);

test("accepts both Vercel commit statuses and production deployment events", () => {
  assert.equal(expectedShaFromEvent("status", { context: "Vercel", state: "success", sha }), sha);
  assert.equal(expectedShaFromEvent("deployment_status", { deployment_status: { state: "success" }, deployment: { environment: "Production", sha } }), sha);
  assert.equal(expectedShaFromEvent("workflow_dispatch", {}), undefined);
});

test("rejects failed, unrelated and malformed automatic notifications", () => {
  assert.throws(() => expectedShaFromEvent("status", { context: "Vercel", state: "failure", sha }), /Vercel bildirimi/);
  assert.throws(() => expectedShaFromEvent("status", { context: "Other", state: "success", sha }), /Vercel bildirimi/);
  assert.throws(() => expectedShaFromEvent("status", { context: "Vercel", state: "success", sha: "invalid" }), /commit kimligi/);
  assert.throws(() => expectedShaFromEvent("deployment_status", { deployment_status: { state: "success" }, deployment: { environment: "Preview", sha } }), /production/);
});

function deployment(id, age, extra = {}) {
  return {
    id: `dpl_${id}`, projectId: POLICY.projectId, createdAt: now - age * day,
    readyState: "READY", target: "production", aliasAssigned: true,
    meta: { githubCommitSha: sha }, ...extra,
  };
}

function fixture() {
  return {
    currentId: "dpl_live", now,
    deployments: [deployment("live", 0.1), deployment("backup1", 0.2), deployment("backup2", 0.3),
      deployment("old1", 0.4), deployment("old2", 5)],
    aliases: [{ alias: POLICY.hostname, projectId: POLICY.projectId, deploymentId: "dpl_live" }],
  };
}

function mockApi(data = fixture(), intercept = () => undefined) {
  const calls = [];
  const api = async (path, options = {}) => {
    calls.push({ path, method: options.method ?? "GET" });
    const overridden = intercept(path, options, calls);
    if (overridden !== undefined) return overridden;
    if (path.startsWith("/v9/projects/")) return { id: POLICY.projectId, accountId: POLICY.teamId, name: POLICY.projectName };
    if (path.startsWith("/v4/aliases/")) return data.aliases[0];
    if (path === "/v7/deployments") return { deployments: data.deployments, pagination: { next: null } };
    if (path === "/v4/aliases") return { aliases: data.aliases, pagination: { next: null } };
    if (path.startsWith("/v2/deployments/")) return { aliases: [] };
    if (path.startsWith("/v13/deployments/")) {
      const id = path.split("/").at(-1);
      if (options.method === "DELETE") return { uid: id, state: "DELETED" };
      return data.deployments.find((item) => item.id === id);
    }
    throw new Error(`Unexpected path: ${path}`);
  };
  return { api, calls, deleted: () => calls.filter((call) => call.method === "DELETE") };
}

test("retains live and two backups, even with several releases on the same day", () => {
  const plan = createPlan(fixture());
  assert.deepEqual(plan.keep.map((item) => item.id), ["dpl_live", "dpl_backup1", "dpl_backup2"]);
  assert.deepEqual(plan.remove.map((item) => item.id), ["dpl_old2", "dpl_old1"]);
});

test("a rollback keeps the actual live release and two earlier successful backups", () => {
  const data = fixture();
  data.deployments.unshift(deployment("newer", 0.01));
  const plan = createPlan(data);
  assert.ok(plan.keep.some((item) => item.id === "dpl_newer"));
  assert.ok(plan.keep.some((item) => item.id === "dpl_live"));
  assert.equal(plan.keep.filter((item) => item.reason === "production yedegi").length, 2);
});

test("protects aliased releases, in-progress builds, unknown states and environments", () => {
  const data = fixture();
  data.aliases.push({ projectId: POLICY.projectId, deploymentId: "dpl_old2", alias: "test.example.com" });
  data.deployments.push(deployment("building", 6, { readyState: "BUILDING" }),
    deployment("queued", 6, { readyState: "QUEUED" }), deployment("unknown", 6, { readyState: "UNKNOWN" }),
    deployment("staging", 6, { target: "staging" }));
  const plan = createPlan(data);
  assert.deepEqual(plan.remove.map((item) => item.id), ["dpl_old1"]);
});

test("keeps two previews and recent error logs but removes old eligible previews/errors", () => {
  const data = fixture();
  data.deployments.push(deployment("preview1", 0.2, { target: null }), deployment("preview2", 0.3, { target: null }),
    deployment("preview3", 0.4, { target: null }), deployment("errorRecent", 0.5, { readyState: "ERROR" }),
    deployment("errorOld", 5, { readyState: "ERROR" }), deployment("cancelOld", 5, { readyState: "CANCELED" }));
  const plan = createPlan(data);
  for (const id of ["preview1", "preview2", "errorRecent"]) assert.ok(plan.keep.some((item) => item.id === `dpl_${id}`));
  for (const id of ["preview3", "errorOld", "cancelOld"]) assert.ok(plan.remove.some((item) => item.id === `dpl_${id}`));
});

test("insufficient successful backups aborts instead of choosing failed releases", () => {
  const data = fixture();
  data.deployments = data.deployments.slice(0, 3);
  data.deployments[2].aliasError = { code: "ALIAS_FAILED" };
  assert.throws(() => createPlan(data), /Iki basarili/);
});

test("foreign projects, malformed records and missing current deployment fail closed", () => {
  const foreign = fixture();
  foreign.deployments[4].projectId = "prj_other";
  assert.throws(() => createPlan(foreign), /projeye ait/);
  const invalid = fixture();
  invalid.deployments[4].createdAt = null;
  assert.throws(() => createPlan(invalid), /tarihi/);
  assert.throws(() => createPlan({ ...fixture(), currentId: "dpl_missing" }), /Canli yayin/);
  const unknownAlias = fixture();
  unknownAlias.aliases.push({ projectId: POLICY.projectId, alias: "unknown.example.com" });
  assert.throws(() => createPlan(unknownAlias), /hedefi/);
});

test("pagination reads the whole inventory with the same project filter", async () => {
  let page = 0;
  const rows = await listAll(async (_path, { query }) => {
    assert.equal(query.projectId, POLICY.projectId);
    if (page++ === 0) return { deployments: [1], pagination: { next: 123 } };
    assert.equal(query.until, "123");
    return { deployments: [2], pagination: { next: null } };
  }, "/v7/deployments", "deployments");
  assert.deepEqual(rows, [1, 2]);
});

test("incomplete and looping pagination cannot produce a partial deletion plan", async () => {
  await assert.rejects(listAll(async () => ({ deployments: [] }), "/v7/deployments", "deployments"), /eksik/);
  await assert.rejects(listAll(async () => ({ deployments: [], pagination: { next: 123 } }), "/v7/deployments", "deployments"), /sayfalama/);
});

test("default run is dry-run and never issues DELETE", async () => {
  const mock = mockApi();
  const result = await runRetention({ api: mock.api, check: async () => {}, log: () => {}, now });
  assert.equal(result.remove.length, 2);
  assert.equal(mock.deleted().length, 0);
});

test("apply only deletes the planned old releases after checking the live site", async () => {
  let checked = false;
  const mock = mockApi(fixture(), (_path, options) => {
    if (options.method === "DELETE") assert.equal(checked, true);
  });
  const result = await runRetention({ api: mock.api, apply: true, check: async () => { checked = true; }, log: () => {}, now });
  assert.deepEqual(result.deleted, ["dpl_old2", "dpl_old1"]);
  assert.equal(mock.deleted().length, 2);
});

test("failed live health check prevents every deletion", async () => {
  const mock = mockApi();
  await assert.rejects(runRetention({ api: mock.api, apply: true, check: async () => { throw new Error("health failed"); }, log: () => {}, now }), /health failed/);
  assert.equal(mock.deleted().length, 0);
});

test("a stale deployment event cannot clean a newer or rolled-back production", async () => {
  const mock = mockApi();
  const result = await runRetention({ api: mock.api, apply: true, expectedSha: "b".repeat(40), log: () => {}, now });
  assert.equal(result.skipped, true);
  assert.equal(mock.deleted().length, 0);
});

test("a changed live alias immediately stops deletions", async () => {
  let reads = 0;
  const data = fixture();
  const mock = mockApi(data, (path) => {
    if (path.startsWith("/v4/aliases/") && ++reads > 1) return { ...data.aliases[0], deploymentId: "dpl_backup1" };
  });
  await assert.rejects(runRetention({ api: mock.api, apply: true, check: async () => {}, log: () => {}, now }), /Canli yayin degisti/);
  assert.equal(mock.deleted().length, 0);
});

test("an alias assigned after planning protects that deployment", async () => {
  const mock = mockApi(fixture(), (path) => {
    if (path === "/v2/deployments/dpl_old2/aliases") return { aliases: [{ alias: "new.example.com" }] };
  });
  const result = await runRetention({ api: mock.api, apply: true, check: async () => {}, log: () => {}, now });
  assert.deepEqual(result.deleted, ["dpl_old1"]);
});

test("account mismatch and changed candidate stop all deletions", async () => {
  const account = mockApi(fixture(), (path) => {
    if (path.startsWith("/v9/projects/")) return { id: POLICY.projectId, accountId: "team_other", name: POLICY.projectName };
  });
  await assert.rejects(runRetention({ api: account.api, apply: true, log: () => {}, now }), /hesap kimligi/);
  assert.equal(account.deleted().length, 0);
  const candidate = mockApi(fixture(), (path) => {
    if (path === "/v13/deployments/dpl_old2") return deployment("old2", 5, { readyState: "BUILDING" });
  });
  await assert.rejects(runRetention({ api: candidate.api, apply: true, check: async () => {}, log: () => {}, now }), /Silinecek yayin degisti/);
  assert.equal(candidate.deleted().length, 0);
});

test("uncertain DELETE result stops instead of continuing the batch", async () => {
  const mock = mockApi(fixture(), (_path, options) => options.method === "DELETE" ? { state: "UNKNOWN" } : undefined);
  await assert.rejects(runRetention({ api: mock.api, apply: true, check: async () => {}, log: () => {}, now }), /Silme sonucu/);
  assert.equal(mock.deleted().length, 1);
});

test("API authentication stays on the official origin and errors cannot leak response bodies", async () => {
  let called = false;
  const api = createClient("test-secret", async (url, options) => {
    called = true;
    assert.equal(url.origin, "https://api.vercel.com");
    assert.equal(url.searchParams.get("teamId"), POLICY.teamId);
    assert.equal(options.redirect, "error");
    assert.equal(options.headers.Authorization, "Bearer test-secret");
    return new Response("private response test-secret", { status: 403 });
  });
  await assert.rejects(api("https://other.example/test"), /Gecersiz API/);
  assert.equal(called, false);
  await assert.rejects(api("/v7/deployments"), (error) => error.message.includes("403") && !error.message.includes("test-secret"));
  assert.throws(() => createClient(""), /VERCEL_TOKEN eksik/);
});

test("health check covers pages and sitemap without sending credentials", async () => {
  const paths = [];
  await checkSite(async (url, options) => {
    assert.equal(url.hostname, POLICY.hostname);
    assert.equal(options.headers, undefined);
    paths.push(url.pathname);
    return new Response(url.pathname === "/sitemap.xml" ? '<urlset><loc>https://www.hocaileborsa.com/</loc></urlset>' : '<html>Hoca ile Borsa</html>');
  });
  assert.deepEqual(paths, ["/", "/haberler", "/fonlar", "/sitemap.xml"]);
  await assert.rejects(checkSite(async () => new Response("maintenance", { status: 503 })), /503/);
  await assert.rejects(checkSite(async () => new Response("wrong site")), /icerigi/);
  await assert.rejects(checkSite(async () => new Response(null, { status: 302, headers: { location: "https://other.example" } })), /baska adrese/);
});

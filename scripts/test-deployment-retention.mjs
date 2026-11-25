import assert from "node:assert/strict";
import { test } from "node:test";
import { planDeploymentCleanup, deploymentApiArguments } from "./lib/deployment-retention.mjs";
import { cleanupDeployments } from "./cleanup-deployments.mjs";

const projectId = "prj_test";
const orgId = "team_test";
const deployment = (number, state = "READY", overrides = {}) => ({
  uid: `dpl_${number}`, state, projectId, target: "production", created: number,
  url: `deployment-${number}.vercel.app`, ...overrides,
});
const plan = (deployments, productionId = "dpl_5") => planDeploymentCleanup({ projectId, productionId, deployments });

test("non-interactive deletion permission is restricted to a single deployment ID", () => {
  assert.ok(!deploymentApiArguments("/v9/projects/prj_test").includes("--dangerously-skip-permissions"));
  assert.ok(deploymentApiArguments("/v13/deployments/dpl_1", "DELETE").includes("--dangerously-skip-permissions"));
  for (const endpoint of ["/v9/projects/prj_test", "/v13/deployments", "/v13/deployments/dpl_1?force=true"]) {
    assert.throws(() => deploymentApiArguments(endpoint, "DELETE"), /tek bir doğrulanmış/);
  }
  assert.throws(() => deploymentApiArguments("/v9/projects/prj_test", "PATCH"));
});

test("keeps the three newest successful deployments and removes old/error/canceled records", () => {
  const result = plan([deployment(1), deployment(5), deployment(3), deployment(2), deployment(4), deployment(6, "ERROR"), deployment(7, "CANCELED")]);
  assert.deepEqual(new Set(result.keep.map((item) => item.uid)), new Set(["dpl_5", "dpl_4", "dpl_3"]));
  assert.deepEqual(new Set(result.remove.map((item) => item.uid)), new Set(["dpl_1", "dpl_2", "dpl_6", "dpl_7"]));
});

test("protects an older live rollback, pending builds, unknown states and other projects/environments", () => {
  const result = plan([deployment(1), deployment(5), deployment(3), deployment(4), deployment(6, "BUILDING"),
    deployment(7, "QUEUED"), deployment(8, "INITIALIZING"), deployment(9, "BLOCKED"),
    deployment(10, "READY", { projectId: "prj_other" }), deployment(11, "READY", { target: "preview" })], "dpl_1");
  assert.equal(result.keep.length, 4);
  assert.equal(result.remove.length, 0);
  assert.equal(result.pending.length, 4);
});

test("retains every success when fewer than three exist; rejects missing live IDs and malformed data", () => {
  assert.equal(plan([deployment(1), deployment(5)]).remove.length, 0);
  assert.throws(() => plan([deployment(1)]), /Canlı yayın/);
  assert.throws(() => plan([deployment(5), deployment(5)]), /geçersiz/);
  assert.throws(() => plan([deployment(5, "READY", { created: NaN })]), /geçersiz/);
});

function fakeContext({ paginated = false, wrongProject = false, promoteCandidate = false } = {}) {
  let rows = [deployment(5), deployment(4), deployment(3), deployment(2), deployment(1, "ERROR")];
  const deleted = [];
  let projectReads = 0;
  let listReads = 0;
  const api = (endpoint, method = "GET") => {
    if (endpoint.startsWith("/v9/projects/")) {
      projectReads++;
      return { id: wrongProject ? "prj_other" : projectId, name: "hoca-ile-borsa", accountId: orgId,
        targets: { production: { id: promoteCandidate && projectReads > 1 ? "dpl_2" : "dpl_5" } } };
    }
    if (endpoint.startsWith("/v7/deployments?")) {
      listReads++;
      const query = new URL(endpoint, "https://api.vercel.com").searchParams;
      assert.equal(query.get("projectId"), projectId);
      assert.equal(query.get("target"), "production");
      if (paginated && !query.has("until")) return { deployments: rows.slice(0, 2), pagination: { next: 4 } };
      return { deployments: paginated ? rows.slice(2) : rows, pagination: { next: null } };
    }
    const id = endpoint.split("/").at(-1);
    const row = rows.find((item) => item.uid === id);
    assert.ok(row);
    if (method === "DELETE") {
      deleted.push(id);
      rows = rows.filter((item) => item.uid !== id);
      return { uid: id, state: "DELETED" };
    }
    return { id, projectId, target: row.target, readyState: row.state };
  };
  return { context: { linked: { id: projectId, orgId }, api }, deleted, listReads: () => listReads };
}

test("default dry-run follows every page and never sends DELETE", () => {
  const fixture = fakeContext({ paginated: true });
  const result = cleanupDeployments({ context: fixture.context });
  assert.equal(result.keep.length, 3);
  assert.equal(result.remove.length, 2);
  assert.equal(fixture.listReads(), 2);
  assert.deepEqual(fixture.deleted, []);
});

test("apply rechecks each deletion and verifies the final retained set", () => {
  const fixture = fakeContext();
  const result = cleanupDeployments({ context: fixture.context, apply: true });
  assert.deepEqual(fixture.deleted, ["dpl_2", "dpl_1"]);
  assert.equal(result.keep.length, 3);
  assert.equal(result.remove.length, 0);
  assert.equal(fixture.listReads(), 4);
});

test("a concurrent rollback protects its new live target; wrong project identity fails closed", () => {
  const fixture = fakeContext({ promoteCandidate: true });
  const result = cleanupDeployments({ context: fixture.context, apply: true });
  assert.deepEqual(fixture.deleted, ["dpl_1"]);
  assert.equal(result.keep.length, 4);
  const wrong = fakeContext({ wrongProject: true });
  assert.throws(() => cleanupDeployments({ context: wrong.context, apply: true }), /kimliği uyuşmuyor/);
  assert.deepEqual(wrong.deleted, []);
});

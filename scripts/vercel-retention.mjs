import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export const POLICY = Object.freeze({
  projectId: "prj_yTcoMzIYcrOYf99oGIwa2lzS8QiP",
  teamId: "team_7rKxGL54A2iKpsexQzJt1A4P",
  projectName: "hoca-ile-borsa",
  repository: "Ermana39/hoca-ile-borsa",
  hostname: "www.hocaileborsa.com",
  productionBackups: 2,
  previews: 2,
  graceMs: 24 * 60 * 60 * 1000,
});

const terminalStates = new Set(["READY", "ERROR", "CANCELED"]);
const failedChecks = new Set(["failure", "failed", "canceled", "cancelled", "timed_out", "action_required"]);

function requireValue(condition, message) {
  if (!condition) throw new Error(message);
}

function deploymentId(value) {
  const id = value?.id ?? value?.uid;
  requireValue(typeof id === "string" && /^dpl_[a-zA-Z0-9]+$/.test(id), "Gecersiz yayin kimligi; temizlik durduruldu.");
  return id;
}

function normalizeDeployment(value) {
  requireValue(value?.projectId === POLICY.projectId, "Yayin bu projeye ait degil; temizlik durduruldu.");
  const createdAt = Number(value.createdAt ?? value.created);
  requireValue(Number.isSafeInteger(createdAt) && createdAt > 0, "Yayin tarihi dogrulanamadi.");
  return { ...value, id: deploymentId(value), createdAt, state: value.readyState ?? value.state };
}

function healthyProduction(value) {
  return value.target === "production" && value.state === "READY" &&
    Boolean(value.aliasAssigned) && !value.aliasError && !failedChecks.has(value.checksConclusion);
}

export function createPlan({ deployments, aliases, currentId, now = Date.now() }) {
  const sorted = deployments.map(normalizeDeployment).sort((a, b) => b.createdAt - a.createdAt || b.id.localeCompare(a.id));
  requireValue(new Set(sorted.map((item) => item.id)).size === sorted.length, "Tekrarlanan yayin kaydi var.");
  const current = sorted.find((item) => item.id === currentId);
  requireValue(current && healthyProduction(current), "Canli yayin basarili production olarak dogrulanamadi.");
  const backups = sorted.filter((item) => item.id !== currentId && item.createdAt <= current.createdAt && healthyProduction(item))
    .slice(0, POLICY.productionBackups);
  requireValue(backups.length === POLICY.productionBackups, "Iki basarili production yedegi bulunamadi; hicbir yayin silinmedi.");

  const protectedIds = new Map([[currentId, "canli yayin"], ...backups.map((item) => [item.id, "production yedegi"])]);
  for (const alias of aliases) {
    requireValue(alias.projectId === POLICY.projectId, "Alan adi baska projeye ait; temizlik durduruldu.");
    const id = alias.deploymentId ?? alias.deployment?.id;
    if (id) protectedIds.set(id, protectedIds.get(id) ?? "bagli alan adi");
    else requireValue(Boolean(alias.redirect), "Alan adinin hedefi dogrulanamadi.");
  }
  sorted.filter((item) => (item.target === null || item.target === "preview") && item.state === "READY")
    .slice(0, POLICY.previews).forEach((item) => protectedIds.set(item.id, "son test yayini"));

  const keep = [];
  const remove = [];
  for (const item of sorted) {
    let reason = protectedIds.get(item.id);
    if (!reason && (item.deleted || item.softDeletedByRetention)) reason = "zaten silinmis yayin";
    if (!reason && !terminalStates.has(item.state)) reason = "devam eden veya bilinmeyen durum";
    if (!reason && ![null, "preview", "production"].includes(item.target)) reason = "ozel veya bilinmeyen ortam";
    if (!reason && item.createdAt >= current.createdAt) reason = "canli yayindan daha yeni";
    if (!reason && item.state !== "READY" && now - item.createdAt < POLICY.graceMs) reason = "24 saatlik hata kaydi korumasi";
    if (reason) keep.push({ id: item.id, reason });
    else remove.push({ id: item.id, createdAt: item.createdAt, state: item.state, target: item.target });
  }
  return { currentId, keep, remove: remove.reverse() };
}

export function createClient(token, fetchImpl = fetch) {
  requireValue(typeof token === "string" && token.trim(), "VERCEL_TOKEN eksik. GitHub Actions repository secret olarak eklenmeli.");
  return async function api(path, { method = "GET", query = {} } = {}) {
    const url = new URL(path, "https://api.vercel.com");
    requireValue(url.origin === "https://api.vercel.com", "Gecersiz API adresi.");
    url.search = new URLSearchParams({ ...query, teamId: POLICY.teamId }).toString();
    const response = await fetchImpl(url, {
      method,
      redirect: "error",
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      signal: AbortSignal.timeout(30_000),
    });
    // API error bodies can contain private account or deployment details.
    requireValue(response.ok, `Vercel API ${method} ${url.pathname}: HTTP ${response.status}. Temizlik durduruldu.`);
    return response.json();
  };
}

export async function listAll(api, path, key) {
  const rows = [];
  const seen = new Set();
  let until;
  for (let page = 0; page < 100; page++) {
    const payload = await api(path, { query: { projectId: POLICY.projectId, limit: "100", ...(until ? { until } : {}) } });
    requireValue(Array.isArray(payload[key]) && payload.pagination && "next" in payload.pagination, "Vercel liste yaniti eksik; temizlik durduruldu.");
    rows.push(...payload[key]);
    const next = payload.pagination.next;
    if (next === null) return rows;
    requireValue(Number.isSafeInteger(Number(next)) && Number(next) > 0 && !seen.has(String(next)), "Vercel sayfalama bilgisi gecersiz.");
    seen.add(String(next));
    until = String(next);
  }
  throw new Error("Liste siniri asildi; eksik listeyle temizlik yapilmadi.");
}

async function readCurrent(api) {
  const project = await api(`/v9/projects/${POLICY.projectId}`);
  requireValue(project.id === POLICY.projectId && project.accountId === POLICY.teamId && project.name === POLICY.projectName,
    "Vercel proje/hesap kimligi eslesmiyor.");
  const alias = await api(`/v4/aliases/${POLICY.hostname}`);
  requireValue(alias.projectId === POLICY.projectId && alias.alias === POLICY.hostname, "Canli alan adi dogrulanamadi.");
  const id = deploymentId({ id: alias.deploymentId ?? alias.deployment?.id });
  const current = normalizeDeployment(await api(`/v13/deployments/${id}`));
  requireValue(current.id === id && healthyProduction(current), "Canli yayin hazir veya basarili degil.");
  return current;
}

export async function checkSite(fetchImpl = fetch) {
  for (const path of ["/", "/haberler", "/fonlar", "/sitemap.xml"]) {
    let url = new URL(path, `https://${POLICY.hostname}`);
    let checked = false;
    for (let redirects = 0; redirects < 4; redirects++) {
      const response = await fetchImpl(url, { redirect: "manual", cache: "no-store", signal: AbortSignal.timeout(20_000) });
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        const location = response.headers.get("location");
        requireValue(location, "Canli site yonlendirmesi eksik.");
        url = new URL(location, url);
        requireValue(url.origin === `https://${POLICY.hostname}`, "Canli site baska adrese yonlendiriyor.");
        continue;
      }
      requireValue(response.status === 200, `Canli sayfa kontrolu basarisiz: ${path} (HTTP ${response.status}).`);
      const body = await response.text();
      requireValue(path === "/sitemap.xml" ? /<(urlset|sitemapindex)\b/.test(body) && body.includes("hocaileborsa.com") : /<html\b/i.test(body) && /Hoca/i.test(body),
        `Canli sayfa icerigi dogrulanamadi: ${path}`);
      checked = true;
      break;
    }
    requireValue(checked, `Canli sayfa yonlendirme siniri asildi: ${path}`);
  }
}

export async function runRetention({ api, apply = false, expectedSha, check = checkSite, log = console.log, now = Date.now() }) {
  const current = await readCurrent(api);
  if (expectedSha && current.meta?.githubCommitSha !== expectedSha) {
    log("Bu bildirim mevcut canli yayina ait degil; temizlik yapilmadi.");
    return { skipped: true, deleted: [] };
  }
  const deployments = await listAll(api, "/v7/deployments", "deployments");
  const aliases = await listAll(api, "/v4/aliases", "aliases");
  const plan = createPlan({ deployments, aliases, currentId: current.id, now });
  await check();
  log(`Proje: ${POLICY.projectName}. Canli: ${plan.currentId}. Korunan: ${plan.keep.length}. Temizlenebilir: ${plan.remove.length}.`);
  for (const item of plan.keep) log(`KORU ${item.id}: ${item.reason}`);
  const deleted = [];
  if (!apply) {
    for (const item of plan.remove) log(`PLAN ${item.id}: ${item.state}, ${new Date(item.createdAt).toISOString()}`);
    log("Rapor modu: hicbir yayin silinmedi.");
    return { ...plan, deleted };
  }

  for (const item of plan.remove) {
    // Recheck both the live alias and each candidate immediately before deletion.
    const freshCurrent = await readCurrent(api);
    requireValue(freshCurrent.id === current.id, "Canli yayin degisti; kalan temizlik durduruldu.");
    const fresh = normalizeDeployment(await api(`/v13/deployments/${item.id}`));
    requireValue(fresh.id === item.id && fresh.createdAt === item.createdAt && fresh.target === item.target && fresh.state === item.state,
      "Silinecek yayin degisti; kalan temizlik durduruldu.");
    const candidateAliases = await api(`/v2/deployments/${item.id}/aliases`);
    requireValue(Array.isArray(candidateAliases.aliases), "Yayin alan adlari dogrulanamadi.");
    if (candidateAliases.aliases.length > 0) {
      log(`KORU ${item.id}: sonradan alan adi baglanmis.`);
      continue;
    }
    const result = await api(`/v13/deployments/${item.id}`, { method: "DELETE" });
    requireValue(result.uid === item.id && result.state === "DELETED", "Silme sonucu dogrulanamadi; kalan temizlik durduruldu.");
    deleted.push(item.id);
    log(`SILINDI ${item.id}`);
  }
  log(`Temizlik tamamlandi: ${deleted.length} eski yayin silindi.`);
  return { ...plan, deleted };
}

async function main() {
  const args = process.argv.slice(2);
  requireValue(args.every((arg) => ["--apply", "--dry-run"].includes(arg)) && !(args.includes("--apply") && args.includes("--dry-run")), "Gecersiz temizlik secenegi.");
  let expectedSha;
  if (process.env.GITHUB_ACTIONS === "true") {
    requireValue(process.env.GITHUB_REPOSITORY === POLICY.repository, "GitHub deposu eslesmiyor.");
    const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, "utf8"));
    if (process.env.GITHUB_EVENT_NAME === "deployment_status") {
      requireValue(event.deployment_status?.state === "success" && event.deployment?.environment?.toLowerCase() === "production", "Basarili production bildirimi bekleniyor.");
      expectedSha = event.deployment.sha;
      requireValue(typeof expectedSha === "string" && /^[a-f0-9]{40}$/i.test(expectedSha), "Yayin commit kimligi eksik.");
    } else {
      requireValue(process.env.GITHUB_EVENT_NAME === "workflow_dispatch", "Desteklenmeyen GitHub olayi.");
    }
  }
  await runRetention({ api: createClient(process.env.VERCEL_TOKEN), apply: args.includes("--apply"), expectedSha });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

import fs from "node:fs";
import path from "node:path";
import { homedir } from "node:os";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { planDeploymentCleanup, deploymentApiArguments } from "./lib/deployment-retention.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const projectName = "hoca-ile-borsa";
const globalConfig = path.join(homedir(), ".vercel-hesaplar", "hocaileborsa-hobby");
const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));

function getContext() {
  const projectFile = path.join(root, ".vercel", "project.json");
  let linked;
  if (fs.existsSync(projectFile)) {
    const project = readJson(projectFile);
    if (project.projectName !== projectName) throw new Error("Yanlış Vercel projesi.");
    linked = { id: project.projectId, orgId: project.orgId };
  } else {
    const projects = readJson(path.join(root, ".vercel", "repo.json")).projects ?? [];
    const matches = projects.filter((item) => item.name === projectName && item.directory === ".");
    if (matches.length !== 1) throw new Error("Vercel proje bağlantısı belirsiz.");
    [linked] = matches;
  }
  if (!linked.id || !linked.orgId || readJson(path.join(globalConfig, "config.json")).currentTeam !== linked.orgId) {
    throw new Error("Proje ve Vercel hesabı uyuşmuyor.");
  }
  const candidates = [
    process.env.npm_execpath ? path.join(path.dirname(process.env.npm_execpath), "npx-cli.js") : null,
    path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npx-cli.js"),
  ];
  const npx = candidates.find((file) => file && fs.existsSync(file));
  if (!npx) throw new Error("npm/npx bulunamadı.");
  const env = { ...process.env };
  for (const key of ["VERCEL_TOKEN", "VERCEL_ORG_ID", "VERCEL_PROJECT_ID"]) delete env[key];
  const api = (endpoint, method = "GET") => {
    const result = spawnSync(process.execPath, [npx, "vercel", "--global-config", globalConfig,
      "--scope", projectName, ...deploymentApiArguments(endpoint, method)], {
      cwd: root, env, encoding: "utf8", shell: false, windowsHide: true, maxBuffer: 20 * 1024 * 1024,
    });
    if (result.error || result.status !== 0) throw result.error ?? new Error(result.stderr?.trim() || "Vercel API başarısız.");
    return result.stdout.trim() ? JSON.parse(result.stdout) : null;
  };
  return { linked, api };
}

export function cleanupDeployments({ apply = false, context } = {}) {
  const { linked, api } = context ?? getContext();
  function inventory() {
    const project = api(`/v9/projects/${encodeURIComponent(linked.id)}`);
    if (project.id !== linked.id || project.name !== projectName || project.accountId !== linked.orgId) {
      throw new Error("Uzak proje kimliği uyuşmuyor; silme yapılmadı.");
    }
    const deployments = [];
    const cursors = new Set();
    let until;
    do {
      const query = new URLSearchParams({ projectId: linked.id, target: "production", limit: "100" });
      if (until !== undefined) query.set("until", String(until));
      const response = api(`/v7/deployments?${query}`);
      if (!Array.isArray(response?.deployments)) throw new Error("Dağıtım listesi okunamadı.");
      deployments.push(...response.deployments);
      until = response.pagination?.next ?? undefined;
      if (until !== undefined) {
        if (cursors.has(until)) throw new Error("Dağıtım sayfalaması tekrarlanıyor; silme yapılmadı.");
        cursors.add(until);
      }
    } while (until !== undefined);
    return planDeploymentCleanup({ projectId: linked.id, productionId: project.targets?.production?.id, deployments });
  }
  const plan = inventory();
  console.log(`Dağıtım temizliği: ${plan.keep.length} başarılı yayın korunacak, ${plan.remove.length} eski/hatalı yayın kaldırılacak, ${plan.pending.length} devam eden/bilinmeyen kayıt korunacak.`);
  for (const item of plan.keep) console.log(`KORU ${item.uid} ${item.url}`);
  for (const item of plan.remove) console.log(`${apply ? "HEDEF" : "SİLİNECEK"} ${item.uid} ${item.state} ${item.url}`);
  if (!apply) return { ...plan, deleted: [] };

  const auditDir = path.join(root, ".tmp", "deployment-cleanup");
  fs.mkdirSync(auditDir, { recursive: true });
  const auditFile = path.join(auditDir, `${Date.now()}-${process.pid}.json`);
  const deleted = [];
  const saveAudit = () => fs.writeFileSync(auditFile, JSON.stringify({ projectId: linked.id, keep: plan.keep, deleted }, null, 2));
  saveAudit();
  for (const candidate of plan.remove) {
    // Her silmede güncel listeyi ve canlı hedefi yeniden oku (eşzamanlı yayın/rollback koruması).
    if (!inventory().remove.some((item) => item.uid === candidate.uid)) continue;
    const detail = api(`/v13/deployments/${candidate.uid}`);
    if (detail.id !== candidate.uid || detail.projectId !== linked.id || detail.target !== "production" ||
        !["READY", "ERROR", "CANCELED"].includes(detail.readyState)) {
      throw new Error(`Dağıtım yeniden doğrulanamadı: ${candidate.uid}; işlem durduruldu.`);
    }
    const project = api(`/v9/projects/${encodeURIComponent(linked.id)}`);
    if (project.targets?.production?.id === candidate.uid) continue;
    api(`/v13/deployments/${candidate.uid}`, "DELETE");
    deleted.push(candidate);
    saveAudit();
    console.log(`SİLİNDİ ${candidate.uid}`);
  }
  const remaining = inventory();
  if (remaining.remove.length) throw new Error("Temizlik sonrası kaldırılabilir kayıtlar kaldı; yeniden kontrol edin.");
  console.log(`Temizlik doğrulandı: ${remaining.keep.length} başarılı yayın kaldı; ${deleted.length} kayıt kaldırıldı.`);
  return { ...remaining, deleted };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv.slice(2).some((arg) => arg !== "--apply")) throw new Error("Yalnızca --apply seçeneği desteklenir; varsayılan işlem salt okunur önizlemedir.");
    cleanupDeployments({ apply: process.argv.includes("--apply") });
  } catch (error) {
    console.error(`Dağıtım temizliği durduruldu: ${error.message}`);
    process.exitCode = 1;
  }
}

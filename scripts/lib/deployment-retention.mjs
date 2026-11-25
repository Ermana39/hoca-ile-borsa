export const SUCCESSFUL_DEPLOYMENTS_TO_KEEP = 3;

export function deploymentApiArguments(endpoint, method = "GET") {
  if (!["GET", "DELETE"].includes(method)) throw new Error("Yalnızca okuma ve dağıtım silme desteklenir.");
  if (method === "DELETE" && !/^\/v13\/deployments\/dpl_[a-zA-Z0-9]+$/.test(endpoint)) {
    throw new Error("Silme yalnızca tek bir doğrulanmış dağıtım kimliğiyle yapılabilir.");
  }
  return ["api", endpoint, "--method", method,
    // Kullanıcının --apply ile yetkilendirdiği otomatik silme; GET çağrıları bu izni almaz.
    ...(method === "DELETE" ? ["--dangerously-skip-permissions"] : [])];
}

export function planDeploymentCleanup({ projectId, productionId, deployments }) {
  if (!projectId || !productionId || !Array.isArray(deployments)) {
    throw new Error("Proje veya canlı yayın bilgisi eksik; silme yapılmadı.");
  }
  const eligible = deployments.filter((item) => item.projectId === projectId && item.target === "production");
  const ids = new Set();
  for (const item of eligible) {
    if (!/^dpl_[a-zA-Z0-9]+$/.test(item.uid) || ids.has(item.uid) || !Number.isFinite(item.created)) {
      throw new Error("Dağıtım listesi geçersiz; silme yapılmadı.");
    }
    ids.add(item.uid);
  }
  if (!eligible.some((item) => item.uid === productionId && item.state === "READY")) {
    throw new Error("Canlı yayın listede doğrulanamadı; silme yapılmadı.");
  }
  const successful = eligible.filter((item) => item.state === "READY")
    .sort((a, b) => b.created - a.created || b.uid.localeCompare(a.uid));
  const keepIds = new Set(successful.slice(0, SUCCESSFUL_DEPLOYMENTS_TO_KEEP).map((item) => item.uid));
  // Daha eski bir sürüme rollback yapılmışsa canlı sürümü de ayrıca koru.
  keepIds.add(productionId);
  const keep = eligible.filter((item) => keepIds.has(item.uid));
  const remove = eligible.filter((item) =>
    !keepIds.has(item.uid) && ["READY", "ERROR", "CANCELED"].includes(item.state));
  const pending = eligible.filter((item) => !keepIds.has(item.uid) && !remove.includes(item));
  return { keep, remove, pending };
}

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const planPath = path.join(root, ".hib-build-plan.json");
const planVersion = 1;

function run(command, args, label, { allowFailure = false } = {}) {
  console.log(`\n[build] ${label}`);
  const result = spawnSync(command, args, {
    cwd: root,
    env: process.env,
    stdio: "inherit",
    shell: false,
  });

  if (result.error) throw result.error;
  if (result.status !== 0 && !allowFailure) {
    throw new Error(`${label} basarisiz oldu (kod: ${result.status ?? 1}).`);
  }
  return result.status ?? 1;
}

function git(args, { allowFailure = false } = {}) {
  const result = spawnSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    shell: false,
  });
  if (result.error || result.status !== 0) {
    if (allowFailure) return null;
    throw result.error ?? new Error(result.stderr.trim() || `git ${args.join(" ")} basarisiz oldu.`);
  }
  return result.stdout.trim();
}

function lines(value) {
  return String(value ?? "").split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
}

function normalizeFiles(files) {
  return [...new Set(files.map((file) => file.replaceAll("\\", "/")).filter(Boolean))].sort();
}

function workingTreeFiles() {
  return normalizeFiles([
    ...lines(git(["diff", "--name-only", "HEAD"], { allowFailure: true })),
    ...lines(git(["ls-files", "--others", "--exclude-standard"], { allowFailure: true })),
  ]).filter((file) => file !== ".hib-build-plan.json");
}

function commitFiles() {
  const previous = process.env.VERCEL_GIT_PREVIOUS_SHA?.trim();
  const current = process.env.VERCEL_GIT_COMMIT_SHA?.trim() || "HEAD";
  const ranges = previous
    ? [["diff", "--name-only", `${previous}..${current}`]]
    : [["diff", "--name-only", "HEAD^", "HEAD"]];

  for (const args of ranges) {
    const output = git(args, { allowFailure: true });
    if (output !== null) return normalizeFiles(lines(output));
  }
  return null;
}

function classify(files, forceFull = false) {
  const changed = normalizeFiles(files);
  const has = (test) => changed.some((file) => test(file));
  const excelFiles = changed.filter((file) => /\.(xlsx|xls|xlsm)$/i.test(file));
  const effectExcel = "app/fonlar/etki-analizi/_data/fon-etki-verileri.xlsx";
  const fundExcel = [
    "app/fonlar/getiri/menkul-kiymet-yatirim-fonlari/data/menkul-kiymet-yatirim-fonlari-getiri.xlsx",
    "app/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari/data/menkul-kiymet-yatirim-fonlari-tarihsel.xlsx",
    "app/fonlar/data/tefas_fon_kurucu_yonetici_eslesmeleri.xlsx",
  ];
  const buildInfrastructureChanged = has((file) =>
    file === "scripts/smart-build.mjs" ||
    file === "scripts/build-static-export.mjs" ||
    file.startsWith("scripts/lib/") ||
    [
      "scripts/import-fon-etki-verileri.mjs",
      "scripts/excel-to-json.mjs",
      "scripts/update-funds.mjs",
      "scripts/test-fund-platform.mjs",
      "scripts/sync-bist-company-profiles.mjs",
      "scripts/sync-hisse-hak-kullanimlari.mjs",
      "scripts/check-temel-oranlar.mjs",
      "scripts/generate-news-dates.mjs",
      "scripts/generate-hisse-profile-metadata.mjs",
      "scripts/generate-page-updates.mjs",
      "scripts/check-hisse-quality.mjs",
      "scripts/archive-ipo-draft.mjs",
    ].includes(file)
  );
  const full = forceFull || buildInfrastructureChanged;
  const excel = full || excelFiles.some((file) => file !== effectExcel);
  const effect = full || changed.includes(effectExcel);
  const funds = full || effect || fundExcel.some((file) => changed.includes(file));
  const companySync = full || has((file) =>
    /\.(xlsx|xls|xlsm)$/i.test(file) &&
    (file.startsWith("app/borsa/") || file.includes("oran-analizi"))
  );
  const news = full || has((file) =>
    file === "app/data/news.ts" ||
    file.startsWith("data/haberler/") ||
    file.startsWith("app/haber/")
  );
  const company = full || companySync || has((file) => file.startsWith("data/hisseler/"));
  const ipo = full || has((file) =>
    file.startsWith("data/halka-arz/") ||
    file.startsWith("app/halka-arz/")
  );
  const pageUpdates = full || has((file) =>
    file.startsWith("app/") ||
    file.startsWith("data/") ||
    file.startsWith("public/data/")
  );

  return {
    full,
    effect,
    excel,
    funds,
    news,
    companySync,
    company,
    ipo,
    pageUpdates,
    changedCount: changed.length,
  };
}

function readPreparedPlan() {
  try {
    const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
    if (plan.version !== planVersion || plan.prepared !== true || !plan.baseSha) return null;

    const parent = git(["rev-parse", "HEAD^"], { allowFailure: true });
    const previous = process.env.VERCEL_GIT_PREVIOUS_SHA?.trim();
    const expectedBase = parent || previous;
    if (!expectedBase || expectedBase !== plan.baseSha) return null;
    return plan;
  } catch {
    return null;
  }
}

function describe(groups) {
  return Object.entries(groups)
    .filter(([key, value]) => value === true && key !== "full")
    .map(([key]) => key)
    .join(", ") || "yalniz uygulama build'i";
}

function prepare(groups) {
  if (groups.effect) run(process.execPath, ["scripts/import-fon-etki-verileri.mjs"], "Fon etki verisini hazirla");
  if (groups.excel) {
    run(process.execPath, ["scripts/excel-to-json.mjs"], "Degisen Excel verilerini JSON'a cevir");
  }
  if (groups.companySync) {
    run(process.execPath, ["scripts/sync-bist-company-profiles.mjs", "--from-ratio-analysis", "--missing-only", "--write"], "Hisse kunyelerini eslestir");
    run(process.execPath, ["scripts/sync-hisse-hak-kullanimlari.mjs", "--from-ratio-analysis", "--missing-only", "--write"], "Hak kullanimlarini eslestir");
    run(process.execPath, ["scripts/check-temel-oranlar.mjs"], "Temel oranlari dogrula");
  }
  if (groups.funds) {
    run(process.execPath, ["scripts/update-funds.mjs"], "Fon verilerini guncelle");
    run(process.execPath, ["scripts/test-fund-platform.mjs"], "Fon verilerini dogrula");
  }
  if (groups.news) run(process.execPath, ["scripts/generate-news-dates.mjs"], "Haber tarihlerini guncelle");
  if (groups.company) run(process.execPath, ["scripts/generate-hisse-profile-metadata.mjs"], "Hisse metadata verisini guncelle");
  if (groups.pageUpdates) run(process.execPath, ["scripts/generate-page-updates.mjs"], "Sayfa guncelleme tarihlerini guncelle");
  if (groups.company) run(process.execPath, ["scripts/check-hisse-quality.mjs"], "Hisse verilerini dogrula");
  if (groups.ipo) run(process.execPath, ["scripts/archive-ipo-draft.mjs", "--check-approved"], "Halka arz arsivini dogrula");
}

function fullGroups(changedCount = 0) {
  return classify([], true, changedCount);
}

function writePlan(groups) {
  const baseSha = git(["rev-parse", "HEAD"]);
  const plan = {
    version: planVersion,
    prepared: true,
    baseSha,
    createdAt: new Date().toISOString(),
    groups,
  };
  fs.writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`, "utf8");
}

function runChecks() {
  run(process.execPath, ["scripts/check-vercel-usage-guards.mjs"], "Vercel kullanim korumalarini dogrula");
  run(process.execPath, ["scripts/check-index-quality.mjs"], "SEO ve index yapisini dogrula");
}

const prepareOnly = process.argv.includes("--prepare-only");
const showPlanOnly = process.argv.includes("--show-plan");

if (prepareOnly || showPlanOnly) {
  const files = workingTreeFiles();
  let groups = classify(files, files.length === 0 && !showPlanOnly);
  console.log(`[build] ${files.length} degisen dosya algilandi: ${describe(groups)}.`);
  if (showPlanOnly) process.exit(0);

  try {
    prepare(groups);
  } catch (error) {
    if (groups.full) throw error;
    console.warn(`[build] Hizli hazirlik basarisiz: ${error.message}`);
    console.warn("[build] Guvenli tam hazirliga geciliyor.");
    groups = fullGroups(files.length);
    prepare(groups);
  }
  writePlan(groups);
  process.exit(0);
}

runChecks();

const preparedPlan = readPreparedPlan();
const detectedFiles = commitFiles();
const detectionFailed = detectedFiles === null;
let groups = preparedPlan?.groups ?? classify(detectedFiles ?? [], detectionFailed);
const alreadyPrepared = Boolean(preparedPlan);

console.log(
  alreadyPrepared
    ? `[build] Yerelde hazirlanan plan kullaniliyor: ${describe(groups)}.`
    : `[build] Otomatik plan: ${describe(groups)}${groups.full ? " (tam hazirlik)" : ""}.`,
);

if (!alreadyPrepared) {
  try {
    prepare(groups);
  } catch (error) {
    if (groups.full) throw error;
    console.warn(`[build] Hizli hazirlik basarisiz: ${error.message}`);
    console.warn("[build] Guvenli tam hazirliga geciliyor.");
    groups = fullGroups(detectedFiles?.length ?? 0);
    prepare(groups);
  }
}

let status = run(process.execPath, ["scripts/build-static-export.mjs"], "Statik siteyi olustur", { allowFailure: true });
if (status !== 0 && !groups.full) {
  console.warn("[build] Hizli build basarisiz. Tam hazirlikla bir kez daha deneniyor.");
  groups = fullGroups(detectedFiles?.length ?? 0);
  prepare(groups);
  status = run(process.execPath, ["scripts/build-static-export.mjs"], "Tam statik siteyi olustur", { allowFailure: true });
}
if (status !== 0) process.exit(status);

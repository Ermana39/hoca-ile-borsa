import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicRoot = path.join(root, "public");
const supportedNewsVersions = new Set([1, 2]);

function run(command, args, { capture = false, allowFailure = false } = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: capture ? "utf8" : undefined,
    stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    shell: false,
  });
  if (result.error || result.status !== 0) {
    if (allowFailure) return result;
    throw result.error ?? new Error(result.stderr?.trim() || `${command} basarisiz oldu.`);
  }
  return result;
}

function hasRunningGitProcess() {
  const command = process.platform === "win32" ? "tasklist" : "ps";
  const args =
    process.platform === "win32"
      ? ["/FI", "IMAGENAME eq git.exe", "/FO", "CSV", "/NH"]
      : ["-A", "-o", "comm="];
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    shell: false,
    windowsHide: true,
  });

  if (result.error || result.status !== 0) return null;

  if (process.platform === "win32") {
    return result.stdout.toLowerCase().includes('"git.exe"');
  }

  return outputLines(result.stdout).some((processName) => path.basename(processName) === "git");
}

function recoverStaleGitIndexLock() {
  const lockPath = path.join(root, ".git", "index.lock");
  if (!fs.existsSync(lockPath)) return;

  // Codex, editör veya antivirüs kısa süreli bir `git.exe` işlemi açabilir.
  // Bilgisayardaki herhangi bir Git sürecini bu repodaki kilidin sahibi sayıp
  // hemen hata vermek yanlış pozitife yol açar. Önce sürecin bitmesini ve kilit
  // dosyasının sabit kalmasını bekle; yalnızca sessiz kalan kilidi temizle.
  const deadline = Date.now() + 15_000;
  let stableSince = Date.now();
  let previous = fs.statSync(lockPath);

  while (Date.now() < deadline) {
    wait(500);
    if (!fs.existsSync(lockPath)) return;

    const current = fs.statSync(lockPath);
    if (current.size !== previous.size || current.mtimeMs !== previous.mtimeMs) {
      previous = current;
      stableSince = Date.now();
      continue;
    }

    const gitRunning = hasRunningGitProcess();
    const quietFor = Date.now() - stableSince;
    const requiredQuietTime = gitRunning === null ? 5_000 : 1_500;
    if (gitRunning === true || quietFor < requiredQuietTime) continue;

    try {
      fs.rmSync(lockPath);
      console.log("Yarim kalan Git isleminden kalan index kilidi otomatik temizlendi.");
      return;
    } catch (error) {
      if (!error || !["EPERM", "EACCES", "EBUSY"].includes(error.code)) throw error;
    }
  }

  throw new Error(
    "Git index kilidi 15 saniye boyunca aktif kaldi. Acik Git islemi tamamlandiktan sonra yayin komutunu yeniden calistirin.",
  );
}

function outputLines(value) {
  return String(value ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function gitPath(filePath) {
  return path.relative(root, filePath).replaceAll("\\", "/");
}

function isInGitIndex(filePath) {
  return run("git", ["ls-files", "--error-unmatch", "--cached", "--", filePath], {
    capture: true,
    allowFailure: true,
  }).status === 0;
}

function verifyChangedNews() {
  const changedNewsFiles = outputLines(
    run(
      "git",
      ["diff", "--cached", "--name-only", "--diff-filter=ACMR", "--", "data/haberler"],
      { capture: true },
    ).stdout,
  ).filter((file) => file.endsWith(".json") && !path.basename(file).startsWith("_"));

  const verified = [];
  for (const newsFile of changedNewsFiles) {
    const absoluteNewsFile = path.join(root, newsFile);
    const record = JSON.parse(fs.readFileSync(absoluteNewsFile, "utf8"));
    if (record?.durum !== "yayinda") continue;

    if (!supportedNewsVersions.has(record?.surum)) {
      throw new Error(
        `Yayindaki haberin surumu desteklenmiyor: ${newsFile} (surum: ${record?.surum ?? "yok"})`,
      );
    }

    if (!isInGitIndex(newsFile)) {
      throw new Error(`Yayindaki haber Git'e eklenmedi: ${newsFile}`);
    }

    const imageSource = record?.gorsel?.src;
    if (typeof imageSource !== "string" || !imageSource.startsWith("/")) {
      throw new Error(`Yayindaki haberin yerel gorsel yolu gecersiz: ${newsFile}`);
    }

    const imageFile = path.resolve(publicRoot, imageSource.replace(/^\/+/, ""));
    if (imageFile !== publicRoot && !imageFile.startsWith(`${publicRoot}${path.sep}`)) {
      throw new Error(`Yayindaki haberin gorsel yolu public dizini disinda: ${newsFile}`);
    }
    if (!fs.existsSync(imageFile)) {
      throw new Error(`Yayindaki haberin gorseli bulunamadi: ${gitPath(imageFile)}`);
    }

    const indexedImage = gitPath(imageFile);
    if (!isInGitIndex(indexedImage)) {
      throw new Error(`Yayindaki haberin gorseli Git'e eklenmedi: ${indexedImage}`);
    }

    verified.push(`${record.slug} (${indexedImage})`);
  }

  if (verified.length > 0) {
    console.log(`Yayina hazir ${verified.length} haber ve gorseli dogrulandi:`);
    for (const item of verified) console.log(`- ${item}`);
  }
}

function omittedFiles() {
  const unstaged = outputLines(run("git", ["diff", "--name-only"], { capture: true }).stdout);
  const untracked = outputLines(
    run("git", ["ls-files", "--others", "--exclude-standard"], { capture: true }).stdout,
  );
  return [...new Set([...unstaged, ...untracked])];
}

function wait(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function resolveNpxCli() {
  const candidates = [
    process.env.npm_execpath
      ? path.join(path.dirname(process.env.npm_execpath), "npx-cli.js")
      : null,
    path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npx-cli.js"),
  ].filter(Boolean);

  const npxCli = candidates.find((candidate) => fs.existsSync(candidate));
  if (!npxCli) {
    throw new Error("npm/npx calistiricisi bulunamadi. Node.js kurulumu kontrol edilmeli.");
  }
  return npxCli;
}

function runVercel(args, options) {
  return run(process.execPath, [resolveNpxCli(), "vercel", ...args], options);
}

function linkedProjectName() {
  const projectFile = path.join(root, ".vercel", "project.json");
  if (!fs.existsSync(projectFile)) {
    throw new Error("Vercel proje baglantisi bulunamadi. Once `npx vercel link` calistirilmali.");
  }

  const project = JSON.parse(fs.readFileSync(projectFile, "utf8"));
  if (typeof project?.projectName !== "string" || !project.projectName.trim()) {
    throw new Error(".vercel/project.json icinde projectName bulunamadi.");
  }
  return project.projectName.trim();
}

function deploymentsForCommit(projectName, commitSha) {
  const result = runVercel(
    [
      "list",
      projectName,
      "--meta",
      `publishCommitSha=${commitSha}`,
      "--limit",
      "5",
      "--json",
    ],
    { capture: true },
  );

  let payload;
  try {
    payload = JSON.parse(result.stdout);
  } catch {
    throw new Error("Vercel dagitim listesi okunamadi.");
  }

  return Array.isArray(payload?.deployments)
    ? payload.deployments.sort((left, right) => Number(right.createdAt) - Number(left.createdAt))
    : [];
}

function deploymentUrl(deployment) {
  return deployment?.url ? `https://${deployment.url}` : null;
}

function waitForProduction(projectName, commitSha, maxMinutes = 25) {
  const deadline = Date.now() + maxMinutes * 60_000;
  let lastState = "";

  while (Date.now() < deadline) {
    const deployment = deploymentsForCommit(projectName, commitSha)[0];
    const state = String(deployment?.state ?? "").toUpperCase();
    const url = deploymentUrl(deployment);

    if (state === "READY") return deployment;
    if (["ERROR", "CANCELED"].includes(state)) {
      throw new Error(`Vercel production dagitimi ${state} durumunda sonlandi${url ? `: ${url}` : "."}`);
    }

    const stateLabel = state || "KAYIT BEKLENIYOR";
    if (stateLabel !== lastState) {
      console.log(`Vercel durumu: ${stateLabel}${url ? ` (${url})` : ""}`);
      lastState = stateLabel;
    }
    wait(10_000);
  }

  throw new Error(`Vercel production dagitimi ${maxMinutes} dakika icinde tamamlanmadi.`);
}

function deployCurrentCommit() {
  const projectName = linkedProjectName();
  const commitSha = run("git", ["rev-parse", "HEAD"], { capture: true }).stdout.trim();
  const parentSha = run("git", ["rev-parse", "HEAD^"], { capture: true }).stdout.trim();
  let buildPlanBase = null;
  try {
    const plan = JSON.parse(fs.readFileSync(path.join(root, ".hib-build-plan.json"), "utf8"));
    if (plan.version === 1 && plan.prepared === true && plan.baseSha === parentSha) {
      buildPlanBase = parentSha;
    }
  } catch {
    // Missing or invalid plan keeps the build's full preparation fallback.
  }
  const existing = deploymentsForCommit(projectName, commitSha)[0];
  const existingState = String(existing?.state ?? "").toUpperCase();

  if (existingState === "READY") {
    console.log(`Bu commit zaten production ortaminda: ${deploymentUrl(existing)}`);
    return;
  }

  if (existing && !["ERROR", "CANCELED"].includes(existingState)) {
    console.log(`Bu commit icin devam eden Vercel dagitimi bulundu: ${deploymentUrl(existing)}`);
  } else {
    console.log("Vercel production dagitimi baslatiliyor...");
    runVercel([
      "deploy",
      "--prod",
      "--yes",
      "--archive=tgz",
      "--logs",
      "--force",
      "--with-cache",
      ...(buildPlanBase ? ["--build-env", `HIB_BUILD_PLAN_BASE_SHA=${buildPlanBase}`] : []),
      "--meta",
      `publishCommitSha=${commitSha}`,
      "--meta",
      "publishSource=single-command",
    ]);
  }

  const deployment = waitForProduction(projectName, commitSha);
  console.log(`Vercel production yayini hazir: ${deploymentUrl(deployment)}`);
}

function stageStableChanges(maxAttempts = 4) {
  let omitted = [];

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    recoverStaleGitIndexLock();
    run("git", ["add", "-A"], { capture: true });
    wait(300);
    omitted = omittedFiles();
    if (omitted.length === 0) return;

    if (attempt < maxAttempts) {
      console.log(
        `Yayin sirasinda degisen ${omitted.length} dosya yeniden hazirlaniyor (${attempt}/${maxAttempts})...`,
      );
    }
  }

  throw new Error(
    `Yayin sirasinda degismeye devam eden dosyalar var:\n${omitted.map((file) => `- ${file}`).join("\n")}`,
  );
}

function verifyNothingWasLeftOut() {
  const omitted = omittedFiles();
  if (omitted.length > 0) {
    throw new Error(`Yayin disinda kalan dosyalar var:\n${omitted.map((file) => `- ${file}`).join("\n")}`);
  }
}

function preparePublishChanges() {
  run(process.execPath, ["scripts/smart-build.mjs", "--prepare-only"]);
  stageStableChanges();
  verifyNothingWasLeftOut();
  verifyChangedNews();
  stageStableChanges();
  verifyNothingWasLeftOut();
  verifyChangedNews();

  const staged = run("git", ["diff", "--cached", "--quiet"], { allowFailure: true });
  if (staged.status !== 0 && staged.status !== 1) {
    throw new Error("Hazirlanan degisiklikler kontrol edilemedi.");
  }
  return staged.status === 1;
}

function runPublishPreflight() {
  const temporaryRoot = path.join(root, ".codex-tmp");
  const sourceIndex = path.join(root, ".git", "index");
  const temporaryIndex = path.join(temporaryRoot, `publish-preflight-${process.pid}.index`);
  const temporaryLock = `${temporaryIndex}.lock`;
  const previousIndex = process.env.GIT_INDEX_FILE;

  fs.mkdirSync(temporaryRoot, { recursive: true });
  fs.copyFileSync(sourceIndex, temporaryIndex);
  process.env.GIT_INDEX_FILE = temporaryIndex;

  try {
    const initialStatus = run("git", ["status", "--porcelain"], { capture: true }).stdout.trim();
    if (!initialStatus) {
      console.log("On kontrolde hazirlanacak dosya degisikligi bulunmadi.");
      return;
    }

    const hasStagedChanges = preparePublishChanges();
    if (!hasStagedChanges) {
      console.log("On kontrolde commit gerektiren degisiklik bulunmadi.");
      return;
    }

    const stagedCount = outputLines(
      run("git", ["diff", "--cached", "--name-only"], { capture: true }).stdout,
    ).length;
    console.log(
      `Yayin on kontrolu basarili: ${stagedCount} dosya gecici Git indexinde dogrulandi. Commit, push ve deploy yapilmadi.`,
    );
  } finally {
    if (previousIndex === undefined) delete process.env.GIT_INDEX_FILE;
    else process.env.GIT_INDEX_FILE = previousIndex;
    fs.rmSync(temporaryIndex, { force: true });
    fs.rmSync(temporaryLock, { force: true });
  }
}

if (process.argv.includes("--recover-git-lock-only")) {
  recoverStaleGitIndexLock();
  console.log("Git index kilidi kontrolu tamamlandi; yayin baslatilmadi.");
  process.exit(0);
}

if (process.argv.includes("--preflight")) {
  runPublishPreflight();
  process.exit(0);
}

const initialStatus = run("git", ["status", "--porcelain"], { capture: true }).stdout.trim();
if (initialStatus) {
  if (preparePublishChanges()) {
    const now = new Intl.DateTimeFormat("tr-TR", {
      timeZone: "Europe/Istanbul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    run("git", ["commit", "-m", `Site guncellemesi - ${now}`]);
    run("git", ["push"]);
    console.log("Degisiklikler GitHub'a gonderildi.");
  }
} else {
  console.log("Yeni dosya degisikligi yok; mevcut commit'in production durumu kontrol ediliyor.");
}

deployCurrentCommit();

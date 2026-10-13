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

  const gitRunning = hasRunningGitProcess();
  if (gitRunning === null) {
    const first = fs.statSync(lockPath);
    wait(1_500);
    if (!fs.existsSync(lockPath)) return;
    const second = fs.statSync(lockPath);
    if (first.size !== second.size || first.mtimeMs !== second.mtimeMs) {
      throw new Error(
        "Git index kilidi halen degisiyor. Aktif Git islemi tamamlandiktan sonra yayin komutunu yeniden calistirin.",
      );
    }
  }
  if (gitRunning) {
    throw new Error(
      "Git index kilidi bulundu ve bir Git islemi calisiyor. Islem tamamlandiktan sonra yayin komutunu yeniden calistirin.",
    );
  }

  fs.rmSync(lockPath);
  console.log("Yarim kalan Git isleminden kalan index kilidi otomatik temizlendi.");
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

const initialStatus = run("git", ["status", "--porcelain"], { capture: true }).stdout.trim();
if (initialStatus) {
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

  if (staged.status === 1) {
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

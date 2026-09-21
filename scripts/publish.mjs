import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicRoot = path.join(root, "public");

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

function stageStableChanges(maxAttempts = 4) {
  let omitted = [];

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    run("git", ["add", "-A"]);
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
if (!initialStatus) {
  console.log("Yayinlanacak yeni degisiklik bulunamadi.");
  process.exit(0);
}

run(process.execPath, ["scripts/smart-build.mjs", "--prepare-only"]);
stageStableChanges();
verifyNothingWasLeftOut();
verifyChangedNews();
stageStableChanges();
verifyNothingWasLeftOut();
verifyChangedNews();

const staged = run("git", ["diff", "--cached", "--quiet"], { allowFailure: true });
if (staged.status === 0) {
  console.log("Yayinlanacak yeni degisiklik bulunamadi.");
  process.exit(0);
}
if (staged.status !== 1) throw new Error("Hazirlanan degisiklikler kontrol edilemedi.");

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
console.log("Degisiklikler gonderildi. Vercel production yayini otomatik basladi.");

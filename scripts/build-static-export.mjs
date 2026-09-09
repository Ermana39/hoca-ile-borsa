import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiRoot = path.join(root, "app", "api");
const backupRoot = path.join(root, ".next-dynamic-api-backup");

// Static export GET route'larini build icinde tutuyoruz. POST ve canli saglik
// route'lari Vercel Functions olarak /api klasorunden yayinlaniyor.
const dynamicApiDirectories = [
  "admin-login",
  "admin-logout",
  "admin-messages",
  "contact",
  "health",
  "revalidate",
  "auth",
];

const moved = [];

function renameDirectory(source, target) {
  let lastError;
  for (let attempt = 0; attempt < 12; attempt += 1) {
    try {
      fs.renameSync(source, target);
      return;
    } catch (error) {
      lastError = error;
      if (!error || !["EPERM", "EACCES", "EBUSY"].includes(error.code)) throw error;
      // Windows/antivirus taramaları yeni oluşturulan rota klasörlerini kısa süreli
      // kilitleyebiliyor. Statik derleme taşımasını sınırlı süreyle yeniden dene.
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 125);
    }
  }
  throw lastError;
}

function moveDirectoryOut(source, target) {
  try {
    renameDirectory(source, target);
    return "renamed";
  } catch (error) {
    if (!error || !["EPERM", "EACCES", "EBUSY"].includes(error.code)) throw error;
  }

  // Bir süreç klasörü açık tuttuğunda Windows klasörü yeniden adlandıramaz.
  // Dosyaları yedekleyip kaynak klasörleri boş bırakmak Next rota keşfini aynı
  // şekilde engeller; finally bloğu dosyaları geri koyar.
  fs.cpSync(source, target, { recursive: true });
  const removeFiles = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) removeFiles(fullPath);
      else fs.rmSync(fullPath, { force: true });
    }
  };
  removeFiles(source);
  return "copied";
}

function restoreDirectory(source, target, mode = "renamed") {
  if (!fs.existsSync(target)) return;
  if (mode === "copied" || fs.existsSync(source)) {
    fs.mkdirSync(source, { recursive: true });
    fs.cpSync(target, source, { recursive: true });
    fs.rmSync(target, { recursive: true, force: true });
    return;
  }
  renameDirectory(target, source);
}

function restoreInterruptedBackup() {
  if (!fs.existsSync(backupRoot)) return;

  for (const directory of dynamicApiDirectories) {
    const source = path.join(apiRoot, directory);
    const target = path.join(backupRoot, directory);
    if (fs.existsSync(target)) restoreDirectory(source, target);
  }

  const remaining = fs.existsSync(backupRoot)
    ? fs.readdirSync(backupRoot)
    : [];
  if (remaining.length === 0) {
    fs.rmSync(backupRoot, { recursive: true, force: true });
  }
}

function isPublicTxtFile(outRoot, filePath) {
  const relative = path.relative(outRoot, filePath);
  const publicPath = path.join(root, "public", relative);
  return fs.existsSync(publicPath);
}

function pruneNextTextPayloads(outRoot) {
  let removedCount = 0;
  let removedBytes = 0;

  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }

      if (!entry.name.endsWith(".txt")) continue;
      if (isPublicTxtFile(outRoot, fullPath)) continue;

      const size = fs.statSync(fullPath).size;
      fs.rmSync(fullPath, { force: true });
      removedCount += 1;
      removedBytes += size;
    }
  };

  walk(outRoot);

  if (removedCount > 0) {
    console.log(
      `Next gecis payloadlari temizlendi: ${removedCount} .txt dosyasi, ${Math.round(removedBytes / 1024 / 1024)} MB.`
    );
  }
}

const FUND_HISTORY_BUNDLE_COUNT = 64;

function fundHistoryBucket(slug) {
  let hash = 0;
  for (const character of slug) {
    hash = (Math.imul(hash, 31) + character.charCodeAt(0)) >>> 0;
  }
  return String(hash % FUND_HISTORY_BUNDLE_COUNT).padStart(2, "0");
}

function bundleFundHistory(outRoot) {
  const historyRoot = path.join(outRoot, "data", "fonlar", "history");
  if (!fs.existsSync(historyRoot)) return;

  const bundleRoot = path.join(outRoot, "data", "fonlar", "history-bundles");
  fs.rmSync(bundleRoot, { recursive: true, force: true });
  fs.mkdirSync(bundleRoot, { recursive: true });

  const bundles = new Map();
  let removedCount = 0;
  let removedBytes = 0;
  for (const entry of fs.readdirSync(historyRoot, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
    const filePath = path.join(historyRoot, entry.name);
    const slug = entry.name.slice(0, -5);
    const payload = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const bucket = fundHistoryBucket(slug);
    const funds = bundles.get(bucket) ?? {};
    funds[slug] = Array.isArray(payload.rows) ? payload.rows : [];
    bundles.set(bucket, funds);
    removedBytes += fs.statSync(filePath).size;
    fs.rmSync(filePath, { force: true });
    removedCount += 1;
  }

  fs.rmSync(historyRoot, { recursive: true, force: true });
  let bundleBytes = 0;
  for (const [bucket, funds] of bundles) {
    const bundlePath = path.join(bundleRoot, `${bucket}.json`);
    fs.writeFileSync(bundlePath, JSON.stringify({ version: 1, funds }));
    bundleBytes += fs.statSync(bundlePath).size;
  }
  console.log(
    `Fon grafik verileri paketlendi: ${removedCount} dosya -> ${bundles.size} dosya, ${Math.round(removedBytes / 1024 / 1024)} MB -> ${Math.round(bundleBytes / 1024 / 1024)} MB.`
  );
}

function moveDynamicRoutesOut() {
  restoreInterruptedBackup();
  fs.rmSync(backupRoot, { recursive: true, force: true });
  fs.mkdirSync(backupRoot, { recursive: true });

  for (const directory of dynamicApiDirectories) {
    const source = path.join(apiRoot, directory);
    if (!fs.existsSync(source)) continue;

    const target = path.join(backupRoot, directory);
    const mode = moveDirectoryOut(source, target);
    moved.push({ source, target, mode });
  }
}

function restoreDynamicRoutes() {
  for (const { source, target, mode } of moved.reverse()) {
    restoreDirectory(source, target, mode);
  }

  fs.rmSync(backupRoot, { recursive: true, force: true });
}

if (process.argv.includes("--restore-only")) {
  restoreInterruptedBackup();
  process.exit(0);
}

moveDynamicRoutesOut();

try {
  // Acik kalan yerel `next dev`, eski rota tiplerini .next/dev altinda
  // birakabiliyor. Bunlar uretim tip kontrolune ait degildir.
  fs.rmSync(path.join(root, ".next", "dev"), {
    recursive: true,
    force: true,
  });

  const nextBin = path.join(
    root,
    "node_modules",
    "next",
    "dist",
    "bin",
    "next",
  );
  const result = spawnSync(process.execPath, [nextBin, "build"], {
    cwd: root,
    env: { ...process.env, HIB_STATIC_EXPORT_BUILD: "1" },
    stdio: "inherit",
    shell: false,
  });

  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;

  if (result.status === 0) {
    const outRoot = path.join(root, "out");
    if (!fs.existsSync(path.join(outRoot, "index.html"))) {
      throw new Error("Statik cikti dogrulanamadi: out/index.html bulunamadi.");
    }

    pruneNextTextPayloads(outRoot);
    bundleFundHistory(outRoot);

    let htmlCount = 0;
    const countHtml = (directory) => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) countHtml(fullPath);
        else if (entry.name.endsWith(".html")) htmlCount += 1;
      }
    };
    countHtml(outRoot);
    console.log(`Statik yayin dogrulandi: ${htmlCount} HTML dosyasi, sayfa ISR ciktisi yok.`);
  }
} finally {
  restoreDynamicRoutes();
}

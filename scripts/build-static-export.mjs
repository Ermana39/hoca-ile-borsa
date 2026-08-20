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
  "contact",
  "health",
  "revalidate",
];

const moved = [];

function moveDynamicRoutesOut() {
  fs.rmSync(backupRoot, { recursive: true, force: true });
  fs.mkdirSync(backupRoot, { recursive: true });

  for (const directory of dynamicApiDirectories) {
    const source = path.join(apiRoot, directory);
    if (!fs.existsSync(source)) continue;

    const target = path.join(backupRoot, directory);
    fs.renameSync(source, target);
    moved.push({ source, target });
  }
}

function restoreDynamicRoutes() {
  for (const { source, target } of moved.reverse()) {
    if (fs.existsSync(target) && !fs.existsSync(source)) {
      fs.renameSync(target, source);
    }
  }

  fs.rmSync(backupRoot, { recursive: true, force: true });
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

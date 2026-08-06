import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoots = ["app", "components"];
const allowedNextLinkFile = path.normalize(
  path.join(root, "components", "NoPrefetchLink.tsx"),
);
const violations = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!/\.[cm]?[jt]sx?$/.test(entry.name) || fullPath === allowedNextLinkFile) {
      continue;
    }

    const source = fs.readFileSync(fullPath, "utf8");
    if (/from\s+["']next\/link["']/.test(source)) {
      violations.push(path.relative(root, fullPath));
    }
  }
}

for (const sourceRoot of sourceRoots) {
  walk(path.join(root, sourceRoot));
}

if (violations.length > 0) {
  console.error(
    "Otomatik rota ön yüklemesi yeniden açılmış. NoPrefetchLink kullanın:\n" +
      violations.map((file) => `- ${file}`).join("\n"),
  );
  process.exit(1);
}

const proxySource = fs.readFileSync(path.join(root, "proxy.ts"), "utf8");
if (!proxySource.includes("COSTLY_CRAWLER_DENYLIST")) {
  console.error("Maliyet üreten tarayıcı koruması proxy.ts içinde bulunamadı.");
  process.exit(1);
}

console.log(
  "Vercel kullanım korumaları doğrulandı: otomatik prefetch kapalı, tarayıcı filtresi etkin.",
);

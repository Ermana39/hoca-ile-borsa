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

const proxyPath = path.join(root, "proxy.ts");
if (fs.existsSync(proxyPath)) {
  const proxySource = fs.readFileSync(proxyPath, "utf8");
  const htmlGenelindeCalisiyor =
    proxySource.includes("/((?!_next/static") ||
    !proxySource.includes("matcher:");

  if (htmlGenelindeCalisiyor) {
    console.error(
      "Proxy tum HTML isteklerinde calisiyor. Bu yapi Fast Origin Transfer tuketimini arttirir.",
    );
    process.exit(1);
  }
}

console.log(
  "Vercel kullanim korumalari dogrulandi: otomatik prefetch kapali, genel HTML proxy'si yok.",
);

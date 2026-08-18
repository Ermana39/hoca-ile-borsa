import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const root = process.cwd();
const sourceRoots = ["app", "components"];
const allowedNextLinkFile = path.normalize(
  path.join(root, "components", "NoPrefetchLink.tsx"),
);
const violations = [];
const require = createRequire(import.meta.url);
const nextConfig = require(path.join(root, "next.config.js"));

if (nextConfig.output !== "export") {
  violations.push("next.config.js: output='export' olmali");
}
if (nextConfig.images?.unoptimized !== true) {
  violations.push("next.config.js: images.unoptimized=true olmali");
}
const vercelConfigPath = path.join(root, "vercel.mjs");
if (!fs.existsSync(vercelConfigPath)) {
  violations.push("vercel.mjs: statik yayin yapilandirmasi eksik");
} else {
  const vercelConfigSource = fs.readFileSync(vercelConfigPath, "utf8");
  if (!/framework\s*:\s*null/.test(vercelConfigSource)) {
    violations.push("vercel.mjs: framework null olmali; Vercel Next manifest aramamali");
  }
  if (!/outputDirectory\s*:\s*["']out["']/.test(vercelConfigSource)) {
    violations.push("vercel.mjs: outputDirectory 'out' olmali");
  }
  if (!/buildCommand\s*:\s*["']npm run build["']/.test(vercelConfigSource)) {
    violations.push("vercel.mjs: buildCommand 'npm run build' olmali");
  }
}

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

for (const sourceRoot of sourceRoots) {
  const source = fs
    .readdirSync(path.join(root, sourceRoot), { recursive: true })
    .filter((entry) => typeof entry === "string" && /\.[cm]?[jt]sx?$/.test(entry))
    .map((entry) => fs.readFileSync(path.join(root, sourceRoot, entry), "utf8"))
    .join("\n");
  if (/revalidate\s*:\s*[1-9]\d*/.test(source)) {
    violations.push(`${sourceRoot}: zaman tabanli ISR yeniden acilmis`);
  }
}

if (violations.length > 0) {
  console.error(
    "Vercel kullanim korumalari ihlal edildi:\n" +
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
  "Vercel kullanim korumalari dogrulandi: sayfalar statik, gorsel donusumu ve otomatik prefetch kapali, genel HTML proxy'si yok.",
);

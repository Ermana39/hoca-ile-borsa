import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const rootDir = process.cwd();
const appDir = path.join(rootDir, "app");
const outputDir = path.join(rootDir, "lib");
const outputFile = path.join(outputDir, "page-updates.generated.json");

const pageFileNames = new Set([
  "page.tsx",
  "page.ts",
  "page.jsx",
  "page.js",
  "page.mdx",
]);

function toPosixPath(value) {
  return value.split(path.sep).join("/");
}

function getRouteFromPageFile(filePath) {
  const relative = toPosixPath(path.relative(appDir, filePath));
  const routePart = relative.replace(/\/?page\.(tsx|ts|jsx|js|mdx)$/i, "");

  if (!routePart) return "/";

  const cleaned = routePart
    .split("/")
    .filter(
      (segment) =>
        segment &&
        !segment.startsWith("(") &&
        !segment.startsWith("@")
    )
    .join("/");

  return cleaned ? `/${cleaned}` : "/";
}

function getGitUpdatedAt(filePath) {
  try {
    const relative = toPosixPath(path.relative(rootDir, filePath));
    const result = execSync(`git log -1 --format=%cI -- "${relative}"`, {
      cwd: rootDir,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();

    if (result) return result;
  } catch {
    return null;
  }

  return null;
}

function getFileUpdatedAt(filePath) {
  const stat = fs.statSync(filePath);
  return stat.mtime.toISOString();
}

function walk(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, results);
      continue;
    }

    if (entry.isFile() && pageFileNames.has(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

const pageFiles = walk(appDir);

const pages = pageFiles
  .map((filePath) => {
    const route = getRouteFromPageFile(filePath);
    const gitUpdatedAt = getGitUpdatedAt(filePath);
    const updatedAt = gitUpdatedAt || getFileUpdatedAt(filePath);

    return {
      route,
      updatedAt,
      file: toPosixPath(path.relative(rootDir, filePath)),
    };
  })
  .sort((a, b) => a.route.localeCompare(b.route, "tr"));

const output = {
  generatedAt: new Date().toISOString(),
  pages,
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`, "utf8");

console.log(`Sayfa güncelleme bilgileri oluşturuldu: ${pages.length} sayfa`);
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

const takipEdilecekVeriUzantilari = new Set([
  ".xlsx",
  ".xls",
  ".xlsm",
  ".csv",
  ".json",
  ".ts",
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

    return result || "";
  } catch {
    return "";
  }
}

function getFileUpdatedAt(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.mtime.toISOString();
  } catch {
    return "";
  }
}

function getBestUpdatedAt(filePath) {
  const gitUpdatedAt = getGitUpdatedAt(filePath);
  const fileUpdatedAt = getFileUpdatedAt(filePath);

  const dates = [gitUpdatedAt, fileUpdatedAt]
    .filter(Boolean)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return dates[0] || "";
}

function walkPages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkPages(fullPath, results);
      continue;
    }

    if (entry.isFile() && pageFileNames.has(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

function walkDataFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkDataFiles(fullPath, results);
      continue;
    }

    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).toLowerCase();

    if (takipEdilecekVeriUzantilari.has(ext)) {
      results.push(fullPath);
    }
  }

  return results;
}

function getRelatedFilesForPage(pageFilePath) {
  const pageDir = path.dirname(pageFilePath);
  const relatedFiles = [pageFilePath];

  const dataDir = path.join(pageDir, "data");

  if (fs.existsSync(dataDir)) {
    relatedFiles.push(...walkDataFiles(dataDir));
  }

  const directEntries = fs.readdirSync(pageDir, { withFileTypes: true });

  for (const entry of directEntries) {
    if (!entry.isFile()) continue;

    const fullPath = path.join(pageDir, entry.name);
    const ext = path.extname(entry.name).toLowerCase();

    if (takipEdilecekVeriUzantilari.has(ext)) {
      relatedFiles.push(fullPath);
    }
  }

  return [...new Set(relatedFiles)];
}

function getNewestUpdatedAt(files) {
  let newest = "";

  for (const file of files) {
    const updatedAt = getBestUpdatedAt(file);

    if (!updatedAt) continue;

    if (!newest || new Date(updatedAt).getTime() > new Date(newest).getTime()) {
      newest = updatedAt;
    }
  }

  return newest || new Date().toISOString();
}

const pageFiles = walkPages(appDir);

const pages = pageFiles
  .map((filePath) => {
    const route = getRouteFromPageFile(filePath);
    const relatedFiles = getRelatedFilesForPage(filePath);
    const updatedAt = getNewestUpdatedAt(relatedFiles);

    return {
      route,
      updatedAt,
      file: toPosixPath(path.relative(rootDir, filePath)),
      trackedFiles: relatedFiles.map((item) =>
        toPosixPath(path.relative(rootDir, item))
      ),
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
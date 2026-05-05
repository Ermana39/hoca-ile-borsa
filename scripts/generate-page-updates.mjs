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

const yokSayilacakDosyalar = new Set([
  "page-updates.generated.json",
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

function isInsideApp(filePath) {
  const relative = path.relative(appDir, filePath);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function isGitTracked(filePath) {
  try {
    const relative = toPosixPath(path.relative(rootDir, filePath));

    execSync(`git ls-files --error-unmatch -- "${relative}"`, {
      cwd: rootDir,
      stdio: ["ignore", "ignore", "ignore"],
    });

    return true;
  } catch {
    return false;
  }
}

function isGitDirty(filePath) {
  try {
    const relative = toPosixPath(path.relative(rootDir, filePath));

    const result = execSync(`git status --porcelain -- "${relative}"`, {
      cwd: rootDir,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();

    return Boolean(result);
  } catch {
    return false;
  }
}

function getGitUpdatedAt(filePath) {
  try {
    if (!isGitTracked(filePath)) return "";

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
  if (!fs.existsSync(filePath)) return "";

  const tracked = isGitTracked(filePath);
  const dirty = isGitDirty(filePath);

  if (tracked && dirty) {
    return getFileUpdatedAt(filePath);
  }

  if (tracked) {
    return getGitUpdatedAt(filePath);
  }

  return "";
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
    if (yokSayilacakDosyalar.has(entry.name)) continue;

    const ext = path.extname(entry.name).toLowerCase();

    if (takipEdilecekVeriUzantilari.has(ext)) {
      results.push(fullPath);
    }
  }

  return results;
}

function getAncestorDataDirs(pageFilePath) {
  const dirs = [];
  let currentDir = path.dirname(pageFilePath);

  while (isInsideApp(currentDir) || currentDir === appDir) {
    const dataDir = path.join(currentDir, "data");

    if (fs.existsSync(dataDir)) {
      dirs.push(dataDir);
    }

    if (currentDir === appDir) break;

    currentDir = path.dirname(currentDir);
  }

  return dirs;
}

function getImportedDataFiles(pageFilePath) {
  const relatedFiles = [];

  try {
    const content = fs.readFileSync(pageFilePath, "utf8");
    const pageDir = path.dirname(pageFilePath);

    const importMatches = [...content.matchAll(/from\s+["']([^"']+)["']/g)];

    for (const match of importMatches) {
      const importPath = match[1];

      if (!importPath.startsWith(".")) continue;

      const resolvedBase = path.resolve(pageDir, importPath);
      const ext = path.extname(resolvedBase).toLowerCase();

      if (fs.existsSync(resolvedBase) && fs.statSync(resolvedBase).isFile()) {
        if (
          takipEdilecekVeriUzantilari.has(ext) &&
          !yokSayilacakDosyalar.has(path.basename(resolvedBase))
        ) {
          relatedFiles.push(resolvedBase);
        }
        continue;
      }

      for (const possibleExt of takipEdilecekVeriUzantilari) {
        const possibleFile = `${resolvedBase}${possibleExt}`;

        if (
          fs.existsSync(possibleFile) &&
          fs.statSync(possibleFile).isFile() &&
          !yokSayilacakDosyalar.has(path.basename(possibleFile))
        ) {
          relatedFiles.push(possibleFile);
        }
      }
    }
  } catch {
    return relatedFiles;
  }

  return relatedFiles;
}

function getRelatedFilesForPage(pageFilePath) {
  const pageDir = path.dirname(pageFilePath);
  const relatedFiles = [pageFilePath];

  for (const dataDir of getAncestorDataDirs(pageFilePath)) {
    relatedFiles.push(...walkDataFiles(dataDir));
  }

  const directEntries = fs.readdirSync(pageDir, { withFileTypes: true });

  for (const entry of directEntries) {
    if (!entry.isFile()) continue;
    if (yokSayilacakDosyalar.has(entry.name)) continue;

    const fullPath = path.join(pageDir, entry.name);
    const ext = path.extname(entry.name).toLowerCase();

    if (takipEdilecekVeriUzantilari.has(ext)) {
      relatedFiles.push(fullPath);
    }
  }

  relatedFiles.push(...getImportedDataFiles(pageFilePath));

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

  return newest;
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
  .filter((item) => item.updatedAt)
  .sort((a, b) => a.route.localeCompare(b.route, "tr"));

const output = {
  generatedAt: new Date().toISOString(),
  pages,
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`, "utf8");

console.log(`Sayfa güncelleme bilgileri oluşturuldu: ${pages.length} sayfa`);
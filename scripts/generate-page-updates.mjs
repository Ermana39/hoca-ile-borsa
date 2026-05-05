import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";

const VERSION = 3;

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

function hashValue(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

function stableJson(value) {
  if (Array.isArray(value)) {
    return value.map(stableJson);
  }

  if (value && typeof value === "object") {
    const temiz = {};

    for (const key of Object.keys(value).sort()) {
      const normalizedKey = normalizeText(key);

      if (
        normalizedKey === "generatedat" ||
        normalizedKey === "updatedat" ||
        normalizedKey === "guncellemetarihi" ||
        normalizedKey === "lastupdated" ||
        normalizedKey === "createdat" ||
        normalizedKey === "olusturmatarihi"
      ) {
        continue;
      }

      temiz[key] = stableJson(value[key]);
    }

    return temiz;
  }

  return value;
}

function readPreviousOutput() {
  try {
    if (!fs.existsSync(outputFile)) {
      return { version: 0, pages: [] };
    }

    const parsed = JSON.parse(fs.readFileSync(outputFile, "utf8"));

    return {
      version: Number(parsed.version || 0),
      pages: Array.isArray(parsed.pages) ? parsed.pages : [],
    };
  } catch {
    return { version: 0, pages: [] };
  }
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
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return "";
  }
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

function getImportedDataFiles(pageFilePath) {
  const relatedFiles = [];

  try {
    const content = fs.readFileSync(pageFilePath, "utf8");
    const pageDir = path.dirname(pageFilePath);

    const importMatches = [
      ...content.matchAll(/from\s+["']([^"']+)["']/g),
      ...content.matchAll(/import\s*\(\s*["']([^"']+)["']\s*\)/g),
      ...content.matchAll(/require\s*\(\s*["']([^"']+)["']\s*\)/g),
    ];

    for (const match of importMatches) {
      const importPath = match[1];

      let resolvedBase = "";

      if (importPath.startsWith(".")) {
        resolvedBase = path.resolve(pageDir, importPath);
      } else if (importPath.startsWith("@/")) {
        resolvedBase = path.resolve(rootDir, importPath.replace("@/", ""));
      } else {
        continue;
      }

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

  const ownDataDir = path.join(pageDir, "data");

  if (fs.existsSync(ownDataDir)) {
    relatedFiles.push(...walkDataFiles(ownDataDir));
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

function getFaizSheetNamesForRoute(route) {
  const normalizedRoute = normalizeText(route);

  if (!normalizedRoute.includes("mevduat-kredi-faizleri")) return [];

  if (normalizedRoute.includes("mevduat")) {
    return ["mevduat"];
  }

  if (normalizedRoute.includes("konut")) {
    return ["konut kredisi"];
  }

  if (normalizedRoute.includes("tasit")) {
    return ["tasit kredisi", "taşıt kredisi"];
  }

  if (
    normalizedRoute.includes("tuketici") ||
    normalizedRoute.includes("ihtiyac")
  ) {
    return ["ihtiyac kredisi", "ihtiyaç kredisi"];
  }

  return [];
}

function getRelevantJsonPayloadForRoute(filePath, route) {
  const raw = fs.readFileSync(filePath, "utf8");
  const ext = path.extname(filePath).toLowerCase();

  if (ext !== ".json") {
    return raw;
  }

  try {
    const parsed = JSON.parse(raw);
    const wantedSheets = getFaizSheetNamesForRoute(route);

    if (
      wantedSheets.length > 0 &&
      parsed &&
      typeof parsed === "object" &&
      parsed.sheets &&
      typeof parsed.sheets === "object"
    ) {
      const sheetKeys = Object.keys(parsed.sheets);
      const targetKey = sheetKeys.find((key) =>
        wantedSheets.includes(normalizeText(key))
      );

      if (targetKey) {
        const sheet = parsed.sheets[targetKey];
        const payload = sheet?.rawRows ?? sheet?.rows ?? sheet;

        return JSON.stringify(
          stableJson({
            route,
            sheet: targetKey,
            payload,
          })
        );
      }
    }

    return JSON.stringify(stableJson(parsed));
  } catch {
    return raw;
  }
}

function getFileSignature(filePath, route) {
  try {
    if (!fs.existsSync(filePath)) return "";

    const content = getRelevantJsonPayloadForRoute(filePath, route);

    return hashValue(
      `${toPosixPath(path.relative(rootDir, filePath))}:${content}`
    );
  } catch {
    return "";
  }
}

function getPageSignature(route, files) {
  const parts = files
    .map((file) => getFileSignature(file, route))
    .filter(Boolean)
    .sort();

  return hashValue(parts.join("|"));
}

function getNewestGitUpdatedAt(files) {
  let newest = "";

  for (const file of files) {
    const updatedAt = getGitUpdatedAt(file);

    if (!updatedAt) continue;

    if (!newest || new Date(updatedAt).getTime() > new Date(newest).getTime()) {
      newest = updatedAt;
    }
  }

  return newest;
}

function getNewestFileUpdatedAt(files) {
  let newest = "";

  for (const file of files) {
    const updatedAt = getFileUpdatedAt(file);

    if (!updatedAt) continue;

    if (!newest || new Date(updatedAt).getTime() > new Date(newest).getTime()) {
      newest = updatedAt;
    }
  }

  return newest;
}

const previousOutput = readPreviousOutput();
const previousByRoute = new Map(
  previousOutput.pages.map((item) => [item.route, item])
);

const eskiSistemdenGecis = previousOutput.version !== VERSION;

const pageFiles = walkPages(appDir);

const pages = pageFiles
  .map((filePath) => {
    const route = getRouteFromPageFile(filePath);
    const relatedFiles = getRelatedFilesForPage(filePath);
    const signature = getPageSignature(route, relatedFiles);
    const previous = previousByRoute.get(route);

    let updatedAt = "";

    if (!eskiSistemdenGecis && previous?.signature) {
      updatedAt =
        previous.signature === signature
          ? previous.updatedAt
          : getNewestFileUpdatedAt(relatedFiles) ||
            getNewestGitUpdatedAt(relatedFiles) ||
            new Date().toISOString();
    } else {
      updatedAt =
        getNewestGitUpdatedAt(relatedFiles) ||
        previous?.updatedAt ||
        getNewestFileUpdatedAt(relatedFiles) ||
        new Date().toISOString();
    }

    return {
      route,
      updatedAt,
      signature,
      file: toPosixPath(path.relative(rootDir, filePath)),
      trackedFiles: relatedFiles.map((item) =>
        toPosixPath(path.relative(rootDir, item))
      ),
    };
  })
  .filter((item) => item.updatedAt)
  .sort((a, b) => a.route.localeCompare(b.route, "tr"));

const output = {
  version: VERSION,
  generatedAt: new Date().toISOString(),
  pages,
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`, "utf8");

console.log(`Sayfa güncelleme bilgileri oluşturuldu: ${pages.length} sayfa`);
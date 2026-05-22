import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execFileSync } from "child_process";

const XLSX_MODULE = await import("xlsx").catch(() => null);
const XLSX = XLSX_MODULE?.default || XLSX_MODULE;

const VERSION = 10;

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

const excelUzantilari = new Set([".xlsx", ".xls", ".xlsm"]);

const yokSayilacakDosyalar = new Set(["page-updates.generated.json"]);

function toPosixPath(value) {
  if (typeof value !== "string") return "";
  return value.split(path.sep).join("/");
}

function hashValue(value) {
  return crypto.createHash("sha256").update(String(value ?? "")).digest("hex");
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

function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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

function getRouteFromPageFile(filePath) {
  if (typeof filePath !== "string") return "/";

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
  if (typeof filePath !== "string") return false;

  try {
    const relative = toPosixPath(path.relative(rootDir, filePath));

    execFileSync("git", ["ls-files", "--error-unmatch", "--", relative], {
      cwd: rootDir,
      stdio: ["ignore", "ignore", "ignore"],
    });

    return true;
  } catch {
    return false;
  }
}

function isGitDirty(filePath) {
  if (typeof filePath !== "string") return false;

  try {
    const relative = toPosixPath(path.relative(rootDir, filePath));

    const result = execFileSync("git", ["status", "--porcelain", "--", relative], {
      cwd: rootDir,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();

    return Boolean(result);
  } catch {
    return false;
  }
}

function getGitLog(filePath) {
  if (typeof filePath !== "string") return [];

  try {
    const relative = toPosixPath(path.relative(rootDir, filePath));

    const result = execFileSync(
      "git",
      ["log", "--format=%H|%cI", "--", relative],
      {
        cwd: rootDir,
        stdio: ["ignore", "pipe", "ignore"],
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 80,
      }
    ).trim();

    if (!result) return [];

    return result
      .split("\n")
      .map((line) => {
        const [hash, date] = line.split("|");
        return { hash, date };
      })
      .filter((item) => item.hash && item.date);
  } catch {
    return [];
  }
}

function getGitFileBuffer(ref, filePath) {
  if (!ref || typeof filePath !== "string") return null;

  try {
    const relative = toPosixPath(path.relative(rootDir, filePath));

    return execFileSync("git", ["show", `${ref}:${relative}`], {
      cwd: rootDir,
      stdio: ["ignore", "pipe", "ignore"],
      maxBuffer: 1024 * 1024 * 120,
    });
  } catch {
    return null;
  }
}

function getFileUpdatedAt(filePath) {
  if (typeof filePath !== "string") return "";

  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return "";
  }
}

function walkPages(dir, results = []) {
  if (typeof dir !== "string" || !fs.existsSync(dir)) return results;

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
  if (typeof dir !== "string" || !fs.existsSync(dir)) return results;

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

function getFaizSheetNamesForRoute(route) {
  const normalizedRoute = normalizeText(route);

  if (!normalizedRoute.includes("mevduat-kredi-faizleri")) return [];

  if (normalizedRoute.includes("mevduat-faizi")) {
    return ["mevduat"];
  }

  if (normalizedRoute.includes("konut-kredisi")) {
    return ["konut kredisi"];
  }

  if (normalizedRoute.includes("tasit-kredisi")) {
    return ["tasit kredisi", "taşıt kredisi"];
  }

  if (
    normalizedRoute.includes("tuketici-faizi") ||
    normalizedRoute.includes("ihtiyac-kredisi")
  ) {
    return ["ihtiyac kredisi", "ihtiyaç kredisi"];
  }

  return [];
}

function getJsonPayload(buffer, route) {
  const raw = buffer.toString("utf8");

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

function getExcelPayload(buffer, route) {
  if (!XLSX?.read || !XLSX?.utils?.sheet_to_json) {
    return buffer.toString("base64");
  }

  try {
    const workbook = XLSX.read(buffer, {
      type: "buffer",
      cellDates: false,
    });

    const wantedSheets = getFaizSheetNamesForRoute(route);
    let sheetNames = workbook.SheetNames || [];

    if (wantedSheets.length > 0) {
      const targetSheet = sheetNames.find((name) =>
        wantedSheets.includes(normalizeText(name))
      );

      sheetNames = targetSheet ? [targetSheet] : [];
    }

    const payload = {};

    for (const sheetName of sheetNames) {
      const worksheet = workbook.Sheets[sheetName];

      payload[sheetName] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        raw: false,
        defval: "",
      });
    }

    return JSON.stringify(stableJson(payload));
  } catch {
    return buffer.toString("base64");
  }
}

function getRouteAwarePayloadFromBuffer(buffer, filePath, route) {
  if (!buffer || typeof filePath !== "string") return "";

  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".json") {
    return getJsonPayload(buffer, route);
  }

  if (excelUzantilari.has(ext)) {
    return getExcelPayload(buffer, route);
  }

  return buffer.toString("utf8");
}

function getRouteAwarePayloadFromFile(filePath, route) {
  if (typeof filePath !== "string") return "";

  try {
    if (!fs.existsSync(filePath)) return "";

    const buffer = fs.readFileSync(filePath);
    return getRouteAwarePayloadFromBuffer(buffer, filePath, route);
  } catch {
    return "";
  }
}

function getRouteAwarePayloadFromGit(ref, filePath, route) {
  const buffer = getGitFileBuffer(ref, filePath);

  if (!buffer) return "";

  return getRouteAwarePayloadFromBuffer(buffer, filePath, route);
}

function getRouteAwareGitUpdatedAt(filePath, route) {
  if (typeof filePath !== "string") return "";
  if (!isGitTracked(filePath)) return "";

  const commits = getGitLog(filePath);

  for (const commit of commits) {
    const currentPayload = getRouteAwarePayloadFromGit(
      commit.hash,
      filePath,
      route
    );

    if (!currentPayload) continue;

    const previousPayload = getRouteAwarePayloadFromGit(
      `${commit.hash}^`,
      filePath,
      route
    );

    if (!previousPayload || currentPayload !== previousPayload) {
      return commit.date;
    }
  }

  return commits[0]?.date || "";
}

function getRouteAwareUpdatedAt(filePath, route) {
  if (typeof filePath !== "string") return "";
  if (!fs.existsSync(filePath)) return "";

  const ext = path.extname(filePath).toLowerCase();
  const tracked = isGitTracked(filePath);

  if (!tracked && ext === ".json") {
    return "";
  }

  if (!tracked) {
    return getFileUpdatedAt(filePath);
  }

  if (isGitDirty(filePath)) {
    const currentPayload = getRouteAwarePayloadFromFile(filePath, route);
    const headPayload = getRouteAwarePayloadFromGit("HEAD", filePath, route);

    if (!headPayload || currentPayload !== headPayload) {
      return getFileUpdatedAt(filePath);
    }

    return getRouteAwareGitUpdatedAt(filePath, route);
  }

  return getRouteAwareGitUpdatedAt(filePath, route);
}

function getImportedDataFiles(pageFilePath) {
  const relatedFiles = [];

  if (typeof pageFilePath !== "string") return relatedFiles;

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

function getStringReferencedDataFiles(pageFilePath) {
  const relatedFiles = [];

  if (typeof pageFilePath !== "string") return relatedFiles;

  try {
    const content = fs.readFileSync(pageFilePath, "utf8");
    const pageDir = path.dirname(pageFilePath);

    const matches = [
      ...content.matchAll(/["'`]([^"'`]+?\.(xlsx|xls|xlsm|csv|json|ts))["'`]/gi),
    ];

    for (const match of matches) {
      const ref = match[1];

      let resolved = "";

      if (ref.startsWith(".")) {
        resolved = path.resolve(pageDir, ref);
      } else if (ref.startsWith("@/")) {
        resolved = path.resolve(rootDir, ref.replace("@/", ""));
      } else if (ref.startsWith("/")) {
        resolved = path.resolve(rootDir, ref.replace(/^\/+/, ""));
      } else if (ref.includes("data/")) {
        resolved = path.resolve(pageDir, ref);
      } else {
        continue;
      }

      if (
        fs.existsSync(resolved) &&
        fs.statSync(resolved).isFile() &&
        !yokSayilacakDosyalar.has(path.basename(resolved))
      ) {
        relatedFiles.push(resolved);
      }
    }
  } catch {
    return relatedFiles;
  }

  return relatedFiles;
}

function getRouteSpecificSharedDataFiles(route) {
  const relatedFiles = [];
  const normalizedRoute = normalizeText(route);
  const routeParts = String(route || "").split("/").filter(Boolean);
  const lastSlug = routeParts[routeParts.length - 1] || "";
  const lastSlugNormalized = slugify(lastSlug);

  const sharedDataDirs = [];

  if (normalizedRoute.startsWith("/mevduat-kredi-faizleri")) {
    sharedDataDirs.push(path.join(appDir, "mevduat-kredi-faizleri", "data"));
  }

  if (normalizedRoute.startsWith("/borsa/gosterge-taramalari/")) {
    sharedDataDirs.push(path.join(appDir, "borsa", "gosterge-taramalari", "data"));
  }

  if (normalizedRoute.startsWith("/borsa/hacim-artisi-analizi/")) {
    sharedDataDirs.push(path.join(appDir, "borsa", "hacim-artisi-analizi", "data"));
  }

  if (normalizedRoute.startsWith("/fonlar/getiri/")) {
    sharedDataDirs.push(path.join(appDir, "fonlar", "getiri", "data"));
  }

  if (normalizedRoute.startsWith("/fonlar/tarihsel-veriler/")) {
    sharedDataDirs.push(path.join(appDir, "fonlar", "tarihsel-veriler", "data"));
  }

  for (const dataDir of sharedDataDirs) {
    if (!dataDir || !fs.existsSync(dataDir)) continue;

    const files = walkDataFiles(dataDir);

    for (const file of files) {
      if (typeof file !== "string") continue;

      const ext = path.extname(file).toLowerCase();
      const fileBase = slugify(path.basename(file, ext));

      if (normalizedRoute.startsWith("/mevduat-kredi-faizleri")) {
        relatedFiles.push(file);
        continue;
      }

      if (
        fileBase === lastSlugNormalized ||
        fileBase.includes(lastSlugNormalized) ||
        lastSlugNormalized.includes(fileBase)
      ) {
        relatedFiles.push(file);
      }
    }
  }

  return relatedFiles;
}

function filtreleUretilmisJsonDosyalari(files) {
  const uniqueFiles = [...new Set(files)].filter(
    (file) => typeof file === "string" && file
  );

  const excelFiles = uniqueFiles.filter((file) =>
    excelUzantilari.has(path.extname(file).toLowerCase())
  );

  return uniqueFiles.filter((file) => {
    const ext = path.extname(file).toLowerCase();

    if (ext !== ".json") {
      return true;
    }

    const fileDir = path.dirname(file);

    const ayniKlasordeExcelVar = excelFiles.some(
      (excelFile) => path.dirname(excelFile) === fileDir
    );

    if (!ayniKlasordeExcelVar) {
      return true;
    }

    return false;
  });
}

function getRelatedFilesForPage(pageFilePath) {
  const relatedFiles = [];

  if (typeof pageFilePath !== "string") {
    return relatedFiles;
  }

  const pageDir = path.dirname(pageFilePath);
  const route = getRouteFromPageFile(pageFilePath);

  relatedFiles.push(pageFilePath);

  const ownDataDir = path.join(pageDir, "data");

  if (fs.existsSync(ownDataDir)) {
    relatedFiles.push(...walkDataFiles(ownDataDir));
  }

  try {
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
  } catch {}

  relatedFiles.push(...getImportedDataFiles(pageFilePath));
  relatedFiles.push(...getStringReferencedDataFiles(pageFilePath));
  relatedFiles.push(...getRouteSpecificSharedDataFiles(route));

  return filtreleUretilmisJsonDosyalari(relatedFiles);
}

function getFileSignature(filePath, route) {
  if (typeof filePath !== "string") return "";

  const payload = getRouteAwarePayloadFromFile(filePath, route);

  if (!payload) return "";

  return hashValue(
    `${toPosixPath(path.relative(rootDir, filePath))}:${payload}`
  );
}

function getPageSignature(route, files) {
  const parts = files
    .filter((file) => typeof file === "string" && file)
    .map((file) => getFileSignature(file, route))
    .filter(Boolean)
    .sort();

  return hashValue(parts.join("|"));
}

function getNewestRouteAwareUpdatedAt(route, files) {
  let newest = "";

  for (const file of files) {
    if (typeof file !== "string" || !file) continue;

    const updatedAt = getRouteAwareUpdatedAt(file, route);

    if (!updatedAt) continue;

    if (!newest || new Date(updatedAt).getTime() > new Date(newest).getTime()) {
      newest = updatedAt;
    }
  }

  return newest;
}

const pageFiles = walkPages(appDir);

const pages = pageFiles
  .filter((filePath) => typeof filePath === "string" && filePath)
  .map((filePath) => {
    const route = getRouteFromPageFile(filePath);
    const relatedFiles = getRelatedFilesForPage(filePath);
    const updatedAt = getNewestRouteAwareUpdatedAt(route, relatedFiles);

    return {
      route,
      updatedAt,
      signature: getPageSignature(route, relatedFiles),
      file: toPosixPath(path.relative(rootDir, filePath)),
      trackedFiles: relatedFiles
        .filter((item) => typeof item === "string" && item)
        .map((item) => toPosixPath(path.relative(rootDir, item))),
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
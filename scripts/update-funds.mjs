import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";

const XLSX_MODULE = await import("xlsx");
const XLSX = XLSX_MODULE?.default || XLSX_MODULE;

const rootDir = process.cwd();

const sourcePaths = {
  getiri: path.join(
    rootDir,
    "app",
    "fonlar",
    "getiri",
    "menkul-kiymet-yatirim-fonlari",
    "data",
    "menkul-kiymet-yatirim-fonlari-getiri.xlsx"
  ),
  tarihsel: path.join(
    rootDir,
    "app",
    "fonlar",
    "tarihsel-veriler",
    "menkul-kiymet-yatirim-fonlari",
    "data",
    "menkul-kiymet-yatirim-fonlari-tarihsel.xlsx"
  ),
  yoneticiler: path.join(
    rootDir,
    "app",
    "fonlar",
    "data",
    "tefas_fon_kurucu_yonetici_eslesmeleri.xlsx"
  ),
};

const legacyJsonPaths = {
  getiri: sourcePaths.getiri.replace(/\.xlsx$/i, ".json"),
  tarihsel: sourcePaths.tarihsel.replace(/\.xlsx$/i, ".json"),
};

const outputDir = path.join(rootDir, "data", "fonlar");
const detailDir = path.join(outputDir, "fund-details");
const historyPath = path.join(outputDir, "fund-history.json");
const currentPath = path.join(outputDir, "fund-current.json");
const dashboardPath = path.join(outputDir, "fund-dashboard.json");
const managersPath = path.join(outputDir, "fund-managers.json");
const updateLogPath = path.join(outputDir, "fund-update-log.json");

const version = 1;
const maxAbsoluteDailyReturn = 1;

function normalizeText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function normalizeKey(value) {
  return normalizeText(value)
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function normalizeCode(value) {
  return normalizeText(value).toLocaleUpperCase("tr-TR").replace(/\s+/g, "");
}

function slugify(value) {
  return normalizeKey(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanCell(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (value instanceof Date) return value;
  const text = String(value).trim();
  return text === "" ? null : text;
}

function parseNumber(value) {
  const cleaned = cleanCell(value);
  if (cleaned === null) return null;
  if (typeof cleaned === "number") return Number.isFinite(cleaned) ? cleaned : null;

  let text = String(cleaned)
    .trim()
    .replace(/%/g, "")
    .replace(/\s+/g, "");

  if (!text) return null;

  if (text.includes(",")) {
    text = text.replace(/\./g, "").replace(",", ".");
  } else if (/^-?\d{1,3}(\.\d{3})+$/.test(text)) {
    text = text.replace(/\./g, "");
  }

  text = text.replace(/[^\d.-]/g, "");

  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function parsePercent(value) {
  const parsed = parseNumber(value);
  if (parsed === null) return null;

  return typeof value === "string" && value.includes("%") ? parsed / 100 : parsed;
}

function round(value, digits = 6) {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function excelSerialToIso(serial) {
  const millis = Math.round((serial - 25569) * 86400 * 1000);
  const date = new Date(millis);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

function parseDate(value) {
  const cleaned = cleanCell(value);
  if (cleaned === null) return null;

  if (cleaned instanceof Date && !Number.isNaN(cleaned.getTime())) {
    return [
      cleaned.getUTCFullYear(),
      pad2(cleaned.getUTCMonth() + 1),
      pad2(cleaned.getUTCDate()),
    ].join("-");
  }

  if (typeof cleaned === "number") {
    return excelSerialToIso(cleaned);
  }

  const text = normalizeText(cleaned);

  const iso = text.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (iso) return validIsoDate(Number(iso[1]), Number(iso[2]), Number(iso[3]));

  const tr = text.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/);
  if (tr) return validIsoDate(Number(tr[3]), Number(tr[2]), Number(tr[1]));

  const date = new Date(text);
  if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);

  return null;
}

function validIsoDate(year, month, day) {
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return `${year}-${pad2(month)}-${pad2(day)}`;
}

function addMonths(isoDate, months) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const targetMonth = new Date(Date.UTC(year, month - 1 + months, 1));
  const lastDay = new Date(
    Date.UTC(targetMonth.getUTCFullYear(), targetMonth.getUTCMonth() + 1, 0)
  ).getUTCDate();

  return validIsoDate(
    targetMonth.getUTCFullYear(),
    targetMonth.getUTCMonth() + 1,
    Math.min(day, lastDay)
  );
}

function readWorkbook(filePath) {
  if (!fsSync.existsSync(filePath)) {
    throw new Error(`Excel dosyası bulunamadı: ${path.relative(rootDir, filePath)}`);
  }

  return XLSX.readFile(filePath, {
    cellDates: false,
    raw: true,
  });
}

function getFirstSheetRows(filePath) {
  const workbook = readWorkbook(filePath);
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) throw new Error(`Excel sayfası bulunamadı: ${filePath}`);

  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
    header: 1,
    defval: null,
    raw: true,
  });

  return rows.map((row) => row.map((cell) => cleanCell(cell)));
}

function findHeaderRow(rows, requiredHeaders) {
  for (let i = 0; i < Math.min(rows.length, 40); i += 1) {
    const normalized = rows[i].map((cell) => normalizeKey(cell));
    const found = requiredHeaders.every((header) =>
      normalized.some((cell) => cell.includes(normalizeKey(header)))
    );

    if (found) return i;
  }

  return -1;
}

function findColumn(headers, candidates) {
  const normalizedCandidates = candidates.map((candidate) => normalizeKey(candidate));

  const exactIndex = headers.findIndex((header) => {
    const key = normalizeKey(header);
    return normalizedCandidates.some((candidate) => key === candidate);
  });

  if (exactIndex >= 0) return exactIndex;

  return headers.findIndex((header) => {
    const key = normalizeKey(header);
    return normalizedCandidates.some((candidate) => key.includes(candidate));
  });
}

function assertRequiredColumns(indexes, sourceLabel) {
  const missing = Object.entries(indexes)
    .filter(([, index]) => index < 0)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `${sourceLabel} dosyasında zorunlu sütunlar bulunamadı: ${missing.join(", ")}`
    );
  }
}

function readCell(row, index) {
  if (index < 0) return null;
  return row[index] ?? null;
}

function convertSheetToData(sheet) {
  const rawRows = XLSX.utils
    .sheet_to_json(sheet, {
      header: 1,
      defval: null,
      raw: true,
    })
    .map((row) => row.map((cell) => cleanCell(cell)));

  const objectRows = XLSX.utils.sheet_to_json(sheet, {
    defval: null,
    raw: true,
  });

  const columns =
    objectRows.length > 0
      ? Object.keys(objectRows[0]).filter((item) => item && item.trim() !== "")
      : [];

  const rows = objectRows.map((row) => {
    const normalized = {};

    for (const column of columns) {
      normalized[column] = cleanCell(row[column]);
    }

    return normalized;
  });

  return { columns, rows, rawRows };
}

async function writeLegacyExcelJson(filePath) {
  const workbook = readWorkbook(filePath);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheetData = convertSheetToData(workbook.Sheets[firstSheetName]);
  const sheets = {};

  for (const sheetName of workbook.SheetNames) {
    sheets[sheetName] = convertSheetToData(workbook.Sheets[sheetName]);
  }

  const stat = await fs.stat(filePath);
  const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(stat.mtime);

  await writeJson(filePath.replace(/\.xlsx$/i, ".json"), {
    ...firstSheetData,
    sheets,
    guncellemeTarihi,
  });
}

function parseGetiriRows(rawRows) {
  const headerIndex = findHeaderRow(rawRows, ["fon kodu", "fon adı"]);
  if (headerIndex < 0) {
    throw new Error("Getiri Excel dosyasında fon başlık satırı bulunamadı.");
  }

  const headers = rawRows[headerIndex].map((cell) => normalizeText(cell));
  const indexes = {
    kod: findColumn(headers, ["Fon Kodu"]),
    ad: findColumn(headers, ["Fon Adı"]),
    kategori: findColumn(headers, ["Şemsiye Fon Türü", "Şemsiye Türü"]),
    risk: findColumn(headers, ["Fonun Risk Değeri", "Risk Değeri"]),
    birAy: findColumn(headers, ["1 Ay"]),
    ucAy: findColumn(headers, ["3 Ay"]),
    altiAy: findColumn(headers, ["6 Ay"]),
    yilbasi: findColumn(headers, ["Yılbaşından İtibaren", "Yılbaşı"]),
    birYil: findColumn(headers, ["1 Yıl"]),
    ucYil: findColumn(headers, ["3 Yıl"]),
    besYil: findColumn(headers, ["5 Yıl"]),
  };
  assertRequiredColumns(indexes, "Getiri Excel");

  const map = new Map();

  for (const row of rawRows.slice(headerIndex + 1)) {
    const fonKodu = normalizeCode(readCell(row, indexes.kod));
    if (!fonKodu || normalizeKey(fonKodu).includes("toplam kayit")) continue;

    if (map.has(fonKodu)) {
      throw new Error(`Getiri Excel dosyasında tekrar eden fon kodu: ${fonKodu}`);
    }

    map.set(fonKodu, {
      fonKodu,
      fonAdi: normalizeText(readCell(row, indexes.ad)),
      kategori: normalizeText(readCell(row, indexes.kategori)) || "Bilinmiyor",
      riskDegeri: parseNumber(readCell(row, indexes.risk)),
      getiriler: {
        birAy: parsePercent(readCell(row, indexes.birAy)),
        ucAy: parsePercent(readCell(row, indexes.ucAy)),
        altiAy: parsePercent(readCell(row, indexes.altiAy)),
        yilbasi: parsePercent(readCell(row, indexes.yilbasi)),
        birYil: parsePercent(readCell(row, indexes.birYil)),
        ucYil: parsePercent(readCell(row, indexes.ucYil)),
        besYil: parsePercent(readCell(row, indexes.besYil)),
      },
    });
  }

  return map;
}

function parseTarihselRows(rawRows) {
  const headerIndex = findHeaderRow(rawRows, ["fon kodu", "fon adı", "tarih"]);
  if (headerIndex < 0) {
    throw new Error("Tarihsel Excel dosyasında fon başlık satırı bulunamadı.");
  }

  const headers = rawRows[headerIndex].map((cell) => normalizeText(cell));
  const indexes = {
    kod: findColumn(headers, ["Fon Kodu"]),
    ad: findColumn(headers, ["Fon Adı"]),
    tarih: findColumn(headers, ["Tarih"]),
    fiyat: findColumn(headers, ["Fiyat"]),
    pay: findColumn(headers, ["Tedavüldeki Pay Sayısı", "Tedavuldeki Pay Sayisi"]),
    kisi: findColumn(headers, ["Kişi Sayısı", "Kisi Sayisi"]),
    toplamDeger: findColumn(headers, ["Fon Toplam Değer", "Fon Toplam Deger"]),
  };
  assertRequiredColumns(indexes, "Tarihsel veri Excel");

  const snapshots = [];
  const seen = new Set();

  for (const row of rawRows.slice(headerIndex + 1)) {
    const fonKodu = normalizeCode(readCell(row, indexes.kod));
    const tarih = parseDate(readCell(row, indexes.tarih));

    if (!fonKodu || !tarih) continue;

    const key = `${fonKodu}|${tarih}`;
    if (seen.has(key)) {
      throw new Error(`Tarihsel veri Excel dosyasında tekrar eden kayıt: ${key}`);
    }
    seen.add(key);

    const fiyat = parseNumber(readCell(row, indexes.fiyat));
    const tedavuldekiPaySayisi = parseNumber(readCell(row, indexes.pay));
    const kisiSayisi = parseNumber(readCell(row, indexes.kisi));
    const fonToplamDeger = parseNumber(readCell(row, indexes.toplamDeger));

    if (
      fiyat === null &&
      tedavuldekiPaySayisi === null &&
      kisiSayisi === null &&
      fonToplamDeger === null
    ) {
      continue;
    }

    snapshots.push({
      fonKodu,
      fonAdi: normalizeText(readCell(row, indexes.ad)),
      tarih,
      fiyat: round(fiyat, 8),
      tedavuldekiPaySayisi: round(tedavuldekiPaySayisi, 2),
      kisiSayisi: kisiSayisi === null ? null : Math.round(kisiSayisi),
      fonToplamDeger: round(fonToplamDeger, 2),
    });
  }

  return snapshots;
}

function parseManagerRows(rawRows) {
  const headerIndex = findHeaderRow(rawRows, ["fon kodu", "kurucu"]);
  if (headerIndex < 0) {
    throw new Error("Yönetici eşleşme Excel dosyasında başlık satırı bulunamadı.");
  }

  const headers = rawRows[headerIndex].map((cell) => normalizeText(cell));
  const indexes = {
    kod: findColumn(headers, ["Fon Kodu"]),
    ad: findColumn(headers, ["Fon Adı"]),
    kapKodu: findColumn(headers, ["KAP Yönetici Kodu"]),
    yonetici: findColumn(headers, ["Kurucu / Yönetim Şirketi", "Kurucu"]),
    kaynak: findColumn(headers, ["Kaynak"]),
  };
  assertRequiredColumns(indexes, "Yönetici eşleşme Excel");

  const map = new Map();

  for (const row of rawRows.slice(headerIndex + 1)) {
    const fonKodu = normalizeCode(readCell(row, indexes.kod));
    if (!fonKodu) continue;

    if (map.has(fonKodu)) {
      throw new Error(`Yönetici eşleşme Excel dosyasında tekrar eden fon kodu: ${fonKodu}`);
    }

    const yonetici = normalizeText(readCell(row, indexes.yonetici));

    map.set(fonKodu, {
      fonKodu,
      fonAdi: normalizeText(readCell(row, indexes.ad)),
      kapYoneticiKodu: normalizeText(readCell(row, indexes.kapKodu)),
      yonetici: yonetici || "Bilinmiyor",
      kaynak: normalizeText(readCell(row, indexes.kaynak)),
    });
  }

  return map;
}

async function readJson(filePath, fallback) {
  try {
    const file = await fs.readFile(filePath, "utf8");
    return JSON.parse(file);
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const content = `${JSON.stringify(value, null, 2)}\n`;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await fs.writeFile(filePath, content, "utf8");
      return;
    } catch (error) {
      const retryable = ["EBUSY", "EPERM", "EACCES", "UNKNOWN"].includes(error?.code);
      if (!retryable || attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, 100 * 2 ** attempt));
    }
  }
}

async function loadLegacyTarihselSnapshots() {
  const legacy = await readJson(legacyJsonPaths.tarihsel, null);
  if (!legacy?.rawRows?.length) return [];

  return parseTarihselRows(legacy.rawRows);
}

function snapshotKey(snapshot) {
  return `${snapshot.fonKodu}|${snapshot.tarih}`;
}

function stableSnapshot(snapshot) {
  return JSON.stringify({
    fonKodu: snapshot.fonKodu,
    fonAdi: snapshot.fonAdi,
    tarih: snapshot.tarih,
    fiyat: snapshot.fiyat,
    tedavuldekiPaySayisi: snapshot.tedavuldekiPaySayisi,
    kisiSayisi: snapshot.kisiSayisi,
    fonToplamDeger: snapshot.fonToplamDeger,
  });
}

function mergeSnapshots(existingSnapshots, incomingSnapshots) {
  const map = new Map();

  for (const snapshot of existingSnapshots) {
    map.set(snapshotKey(snapshot), snapshot);
  }

  const stats = {
    added: 0,
    updated: 0,
    skipped: 0,
  };

  for (const snapshot of incomingSnapshots) {
    const key = snapshotKey(snapshot);
    const previous = map.get(key);

    if (!previous) {
      map.set(key, snapshot);
      stats.added += 1;
      continue;
    }

    if (stableSnapshot(previous) === stableSnapshot(snapshot)) {
      stats.skipped += 1;
      continue;
    }

    map.set(key, { ...previous, ...snapshot });
    stats.updated += 1;
  }

  const snapshots = Array.from(map.values()).sort((a, b) => {
    const dateCompare = a.tarih.localeCompare(b.tarih);
    if (dateCompare !== 0) return dateCompare;
    return a.fonKodu.localeCompare(b.fonKodu, "tr");
  });

  return { snapshots, stats };
}

function groupSnapshotsByCode(snapshots) {
  const map = new Map();

  for (const snapshot of snapshots) {
    if (!map.has(snapshot.fonKodu)) map.set(snapshot.fonKodu, []);
    map.get(snapshot.fonKodu).push(snapshot);
  }

  for (const rows of map.values()) {
    rows.sort((a, b) => a.tarih.localeCompare(b.tarih));
  }

  return map;
}

function isPositiveFinite(value) {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

function hasValidFinancialSnapshot(row) {
  return (
    row !== null &&
    row !== undefined &&
    isPositiveFinite(row.fiyat) &&
    isPositiveFinite(row.tedavuldekiPaySayisi) &&
    isPositiveFinite(row.fonToplamDeger)
  );
}

function validateSourceData({ currentSnapshots, getiriMap, managerMap, existingSnapshots }) {
  if (currentSnapshots.length === 0) {
    throw new Error("Tarihsel veri Excel dosyasında işlenebilir fon kaydı bulunamadı.");
  }
  if (getiriMap.size < 100) {
    throw new Error(`Getiri Excel kapsamı beklenenden düşük: ${getiriMap.size} fon.`);
  }
  if (managerMap.size < 100) {
    throw new Error(`Yönetici eşleşme kapsamı beklenenden düşük: ${managerMap.size} fon.`);
  }

  const latestSourceDate = currentSnapshots.map((row) => row.tarih).sort().at(-1);
  const latestRows = currentSnapshots.filter((row) => row.tarih === latestSourceDate);
  const validRows = latestRows.filter(hasValidFinancialSnapshot);

  if (latestRows.length < 100) {
    throw new Error(
      `${latestSourceDate} tarihli fon verisi beklenenden düşük: ${latestRows.length} kayıt.`
    );
  }
  if (validRows.length / latestRows.length < 0.95) {
    throw new Error(
      `${latestSourceDate} tarihli fon verilerinin %95'inden azı geçerli fiyat, pay ve toplam değer içeriyor.`
    );
  }

  const managerCoverage = latestRows.filter((row) => managerMap.has(row.fonKodu)).length;
  if (managerCoverage / latestRows.length < 0.98) {
    throw new Error(
      `Güncel fonların yönetici eşleşme oranı %98'in altında: ${managerCoverage}/${latestRows.length}.`
    );
  }

  const previousLatestDate = existingSnapshots.map((row) => row.tarih).sort().at(-1);
  const previousLatestCount = previousLatestDate
    ? existingSnapshots.filter((row) => row.tarih === previousLatestDate).length
    : 0;

  if (previousLatestCount >= 100 && latestRows.length < previousLatestCount * 0.9) {
    throw new Error(
      `Güncel kaynak eksik görünüyor: ${latestRows.length} kayıt, önceki son günde ${previousLatestCount} kayıt vardı.`
    );
  }

  const sourceCodes = new Set(latestRows.map((row) => row.fonKodu));
  const orphanReturns = Array.from(getiriMap.keys()).filter((code) => !sourceCodes.has(code));
  if (orphanReturns.length > 0) {
    throw new Error(
      `Getiri Excel dosyasında güncel fon listesinde bulunmayan kodlar var: ${orphanReturns
        .slice(0, 10)
        .join(", ")}`
    );
  }
}

function enrichHistory(rows) {
  return rows.map((row, index) => {
    const previous = rows[index - 1] ?? null;
    const canCompareFinancials =
      hasValidFinancialSnapshot(previous) && hasValidFinancialSnapshot(row);
    const rawDailyReturn = canCompareFinancials ? row.fiyat / previous.fiyat - 1 : null;
    const dailyReturn =
      rawDailyReturn !== null && Math.abs(rawDailyReturn) <= maxAbsoluteDailyReturn
        ? rawDailyReturn
        : null;
    const paraGirisiCikisi = canCompareFinancials
      ? (row.tedavuldekiPaySayisi - previous.tedavuldekiPaySayisi) * row.fiyat
      : null;
    const yatirimciDegisimi =
      previous?.kisiSayisi !== null &&
      previous?.kisiSayisi !== undefined &&
      row.kisiSayisi !== null
        ? row.kisiSayisi - previous.kisiSayisi
        : null;

    return {
      ...row,
      gunlukGetiri: round(dailyReturn, 8),
      paraGirisiCikisi: round(paraGirisiCikisi, 2),
      yatirimciDegisimi,
    };
  });
}

function sumValues(values) {
  const valid = values.filter((value) => typeof value === "number" && Number.isFinite(value));
  if (valid.length === 0) return null;
  return round(
    valid.reduce((total, value) => total + value, 0),
    2
  );
}

function sumCompleteValues(values) {
  if (
    values.length === 0 ||
    values.some((value) => typeof value !== "number" || !Number.isFinite(value))
  ) {
    return null;
  }

  return sumValues(values);
}

function sumCompleteLastTradingRows(rows, key, count) {
  const periodRows = rows.slice(-count);
  if (
    periodRows.length < count ||
    periodRows.some((row) => typeof row[key] !== "number" || !Number.isFinite(row[key]))
  ) {
    return null;
  }

  return sumValues(periodRows.map((row) => row[key]));
}

function sumCompleteSince(rows, key, cutoffDate) {
  if (rows.length === 0 || rows[0].tarih > cutoffDate) return null;

  const periodRows = rows.filter((row) => row.tarih >= cutoffDate);
  if (
    periodRows.length === 0 ||
    periodRows.some((row) => typeof row[key] !== "number" || !Number.isFinite(row[key]))
  ) {
    return null;
  }

  return sumValues(periodRows.map((row) => row[key]));
}

function computeFundFlows(enrichedRows, latestDate) {
  if (enrichedRows.length === 0) {
    return { gunluk: null, besGun: null, birAy: null, ucAy: null };
  }

  const latest = enrichedRows[enrichedRows.length - 1];

  return {
    gunluk: latest.paraGirisiCikisi,
    besGun: sumCompleteLastTradingRows(enrichedRows, "paraGirisiCikisi", 5),
    birAy: sumCompleteSince(enrichedRows, "paraGirisiCikisi", addMonths(latestDate, -1)),
    ucAy: sumCompleteSince(enrichedRows, "paraGirisiCikisi", addMonths(latestDate, -3)),
  };
}

function computeInvestorChanges(enrichedRows, latestDate) {
  if (enrichedRows.length === 0) {
    return { gunluk: null, besGun: null, birAy: null, ucAy: null };
  }

  const latest = enrichedRows[enrichedRows.length - 1];

  return {
    gunluk: latest.yatirimciDegisimi,
    besGun: sumCompleteLastTradingRows(enrichedRows, "yatirimciDegisimi", 5),
    birAy: sumCompleteSince(enrichedRows, "yatirimciDegisimi", addMonths(latestDate, -1)),
    ucAy: sumCompleteSince(enrichedRows, "yatirimciDegisimi", addMonths(latestDate, -3)),
  };
}

function standardDeviation(values) {
  if (values.length < 2) return null;
  const mean = values.reduce((total, value) => total + value, 0) / values.length;
  const variance =
    values.reduce((total, value) => total + (value - mean) ** 2, 0) /
    (values.length - 1);
  return Math.sqrt(variance);
}

function computeMaxDrawdown(rows) {
  let peak = -Infinity;
  let peakIndex = 0;
  let deepest = 0;
  let deepestPeakIndex = 0;
  let deepestTroughIndex = 0;
  let maxRecoveryDays = null;

  for (let i = 0; i < rows.length; i += 1) {
    const price = rows[i].fiyat;
    if (price === null || price === undefined) continue;

    if (price >= peak) {
      if (deepest < 0 && i > peakIndex) {
        const recoveredDays = i - peakIndex;
        maxRecoveryDays =
          maxRecoveryDays === null ? recoveredDays : Math.max(maxRecoveryDays, recoveredDays);
      }
      peak = price;
      peakIndex = i;
    }

    const drawdown = peak > 0 ? price / peak - 1 : 0;
    if (drawdown < deepest) {
      deepest = drawdown;
      deepestPeakIndex = peakIndex;
      deepestTroughIndex = i;
    }
  }

  if (deepest < 0 && maxRecoveryDays === null) {
    maxRecoveryDays = rows.length - 1 - deepestPeakIndex;
  }

  return {
    maxDrawdown: round(deepest, 8),
    recoveryDays: maxRecoveryDays,
    peakDate: rows[deepestPeakIndex]?.tarih ?? null,
    troughDate: rows[deepestTroughIndex]?.tarih ?? null,
  };
}

function computeRiskMetrics(enrichedRows, returns) {
  const dailyReturns = enrichedRows
    .map((row) => row.gunlukGetiri)
    .filter((value) => typeof value === "number" && Number.isFinite(value));

  if (dailyReturns.length < 30) {
    return {
      status: "insufficient",
      requiredDays: 30,
      observedDays: dailyReturns.length,
      metrics: null,
      comparisons: [],
      comment:
        "Yeterli tarihsel fiyat verisi birikmediği için risk metrikleri güvenli şekilde hesaplanmıyor.",
    };
  }

  const positives = dailyReturns.filter((value) => value > 0);
  const negatives = dailyReturns.filter((value) => value < 0);
  const bestValue = Math.max(...dailyReturns);
  const worstValue = Math.min(...dailyReturns);
  const bestIndex = enrichedRows.findIndex((row) => row.gunlukGetiri === bestValue);
  const worstIndex = enrichedRows.findIndex((row) => row.gunlukGetiri === worstValue);
  const stdev = standardDeviation(dailyReturns);
  const drawdown = computeMaxDrawdown(enrichedRows);

  return {
    status: "ok",
    requiredDays: 30,
    observedDays: dailyReturns.length,
    metrics: {
      positiveDayRatio: round(positives.length / dailyReturns.length, 8),
      negativeDayRatio: round(negatives.length / dailyReturns.length, 8),
      totalDays: dailyReturns.length,
      averagePositiveReturn: round(
        positives.length
          ? positives.reduce((total, value) => total + value, 0) / positives.length
          : null,
        8
      ),
      averageNegativeReturn: round(
        negatives.length
          ? negatives.reduce((total, value) => total + value, 0) / negatives.length
          : null,
        8
      ),
      bestDay: {
        date: enrichedRows[bestIndex]?.tarih ?? null,
        value: round(bestValue, 8),
      },
      worstDay: {
        date: enrichedRows[worstIndex]?.tarih ?? null,
        value: round(worstValue, 8),
      },
      annualizedVolatility: round(stdev === null ? null : stdev * Math.sqrt(252), 8),
      maxDrawdown: drawdown.maxDrawdown,
      recoveryDays: drawdown.recoveryDays,
      oneYearReturn: returns?.birYil ?? null,
    },
    comparisons: [],
    comment: "",
  };
}

function median(values) {
  const sorted = values
    .filter((value) => typeof value === "number" && Number.isFinite(value))
    .sort((a, b) => a - b);

  if (sorted.length === 0) return null;

  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[middle];
  return (sorted[middle - 1] + sorted[middle]) / 2;
}

function assessmentFromPercentile(percentile) {
  if (percentile === null) return "Yeterli veri yok";
  if (percentile >= 80) return "Çok iyi";
  if (percentile >= 60) return "İyi";
  if (percentile >= 35) return "Orta";
  return "Zayıf";
}

function buildRiskComparisons(funds) {
  const metricConfig = [
    {
      key: "annualizedVolatility",
      label: "Volatilite",
      better: "lower",
    },
    {
      key: "maxDrawdown",
      label: "Maksimum Drawdown",
      better: "higher",
    },
    {
      key: "positiveDayRatio",
      label: "Pozitif Gün Oranı",
      better: "higher",
    },
    {
      key: "oneYearReturn",
      label: "1 Yıllık Getiri",
      better: "higher",
    },
  ];

  const fundsByCategory = new Map();
  for (const fund of funds) {
    if (!fund.riskAnalizi?.metrics) continue;
    const key = fund.kategori || "Bilinmiyor";
    if (!fundsByCategory.has(key)) fundsByCategory.set(key, []);
    fundsByCategory.get(key).push(fund);
  }

  for (const fund of funds) {
    const categoryFunds = fundsByCategory.get(fund.kategori || "Bilinmiyor") ?? [];
    const metrics = fund.riskAnalizi?.metrics;

    if (!metrics || categoryFunds.length < 5) {
      fund.riskAnalizi.comparisons = [];
      if (fund.riskAnalizi?.status === "ok") {
        fund.riskAnalizi.comment =
          "Şemsiye türü içinde karşılaştırma için yeterli fon verisi birikmedi.";
      }
      continue;
    }

    const comparisons = metricConfig
      .map((config) => {
        const value = metrics[config.key];
        const peers = categoryFunds
          .map((peer) => peer.riskAnalizi?.metrics?.[config.key])
          .filter((item) => typeof item === "number" && Number.isFinite(item));

        if (typeof value !== "number" || peers.length < 5) return null;

        const sorted = [...peers].sort((a, b) =>
          config.better === "lower" ? a - b : b - a
        );
        const rank = sorted.findIndex((item) => item === value) + 1;
        const percentile = round(((sorted.length - rank + 1) / sorted.length) * 100, 2);

        return {
          key: config.key,
          label: config.label,
          value: round(value, 8),
          median: round(median(peers), 8),
          rank,
          peerCount: sorted.length,
          percentile,
          assessment: assessmentFromPercentile(percentile),
        };
      })
      .filter(Boolean);

    fund.riskAnalizi.comparisons = comparisons;

    const returnComparison = comparisons.find((item) => item.key === "oneYearReturn");
    const volatilityComparison = comparisons.find(
      (item) => item.key === "annualizedVolatility"
    );
    const drawdownComparison = comparisons.find((item) => item.key === "maxDrawdown");

    if (returnComparison && volatilityComparison && drawdownComparison) {
      const returnStrong = returnComparison.percentile >= 60;
      const riskHigh =
        volatilityComparison.percentile < 40 || drawdownComparison.percentile < 40;

      fund.riskAnalizi.comment = returnStrong
        ? riskHigh
          ? "Getiri şemsiye içinde güçlü, ancak dalgalanma ve drawdown tarafında risk daha yüksek seyrediyor."
          : "Getiri ve risk dengesi şemsiye türü içinde görece güçlü görünüyor."
        : riskHigh
          ? "Getiri şemsiye medyanının gerisinde kalırken risk göstergeleri daha dikkatli izlenmeli."
          : "Risk tarafı kontrollü, getiri tarafında ise şemsiye içinde daha orta bir görünüm var.";
    }
  }
}

function compactFund(fund, value = null) {
  return {
    kod: fund.kod,
    slug: fund.slug,
    ad: fund.ad,
    yonetici: fund.yonetici,
    yoneticiSlug: fund.yoneticiSlug,
    kategori: fund.kategori,
    value,
    fonToplamDeger: fund.fonToplamDeger,
    gunlukGetiri: fund.gunlukGetiri,
    yatirimciDegisimi: fund.yatirimciDegisimi.gunluk,
  };
}

function topFunds(funds, selector, direction = "desc", limit = 10, predicate = null) {
  return funds
    .filter((fund) => (predicate ? predicate(fund) : true))
    .map((fund) => ({ fund, value: selector(fund) }))
    .filter(({ value }) => typeof value === "number" && Number.isFinite(value))
    .sort((a, b) => (direction === "asc" ? a.value - b.value : b.value - a.value))
    .slice(0, limit)
    .map(({ fund, value }) => compactFund(fund, round(value, 8)));
}

function average(values) {
  const valid = values.filter((value) => typeof value === "number" && Number.isFinite(value));
  if (valid.length === 0) return null;
  return round(valid.reduce((total, value) => total + value, 0) / valid.length, 8);
}

function buildManagers(funds) {
  const map = new Map();

  for (const fund of funds) {
    const key = fund.yonetici || "Bilinmiyor";
    if (!map.has(key)) {
      map.set(key, {
        slug: fund.yoneticiSlug,
        yonetici: key,
        kapYoneticiKodlari: new Set(),
        fonlar: [],
      });
    }

    const manager = map.get(key);
    if (fund.kapYoneticiKodu) manager.kapYoneticiKodlari.add(fund.kapYoneticiKodu);
    manager.fonlar.push(fund);
  }

  return Array.from(map.values())
    .map((manager) => {
      const fundsOfManager = manager.fonlar;
      const returnPeriods = [
        { key: "birYil", label: "1 Yıl", value: (fund) => fund.getiriler.birYil },
        { key: "ucAy", label: "3 Ay", value: (fund) => fund.getiriler.ucAy },
        { key: "birAy", label: "1 Ay", value: (fund) => fund.getiriler.birAy },
        { key: "gunluk", label: "Günlük", value: (fund) => fund.gunlukGetiri },
      ];
      const bestReturnPeriod = returnPeriods.find((period) =>
        fundsOfManager.some((fund) => Number.isFinite(period.value(fund)))
      );
      const bestReturn = bestReturnPeriod
        ? [...fundsOfManager]
            .map((fund) => ({ fund, value: bestReturnPeriod.value(fund) }))
            .filter(({ value }) => typeof value === "number" && Number.isFinite(value))
            .sort((a, b) => b.value - a.value)[0] ?? null
        : null;

      const topFlowFund = [...fundsOfManager]
        .filter((fund) => Number.isFinite(fund.paraAkisi.gunluk) && fund.paraAkisi.gunluk > 0)
        .sort((a, b) => b.paraAkisi.gunluk - a.paraAkisi.gunluk)[0];

      const largestFund = [...fundsOfManager]
        .filter((fund) => typeof fund.fonToplamDeger === "number")
        .sort((a, b) => b.fonToplamDeger - a.fonToplamDeger)[0];

      return {
        slug: manager.slug,
        yonetici: manager.yonetici,
        kapYoneticiKodlari: Array.from(manager.kapYoneticiKodlari).sort(),
        yonetilenFonSayisi: fundsOfManager.length,
        toplamFonBuyuklugu: round(
          fundsOfManager.reduce((total, fund) => total + (fund.fonToplamDeger ?? 0), 0),
          2
        ),
        toplamYatirimciSayisi: fundsOfManager.reduce(
          (total, fund) => total + (fund.kisiSayisi ?? 0),
          0
        ),
        paraAkisi: {
          gunluk: sumCompleteValues(fundsOfManager.map((fund) => fund.paraAkisi.gunluk)),
          besGun: sumCompleteValues(fundsOfManager.map((fund) => fund.paraAkisi.besGun)),
          birAy: sumCompleteValues(fundsOfManager.map((fund) => fund.paraAkisi.birAy)),
          ucAy: sumCompleteValues(fundsOfManager.map((fund) => fund.paraAkisi.ucAy)),
        },
        ortalamaGetiri: {
          birAy: average(fundsOfManager.map((fund) => fund.getiriler.birAy)),
          ucAy: average(fundsOfManager.map((fund) => fund.getiriler.ucAy)),
          altiAy: average(fundsOfManager.map((fund) => fund.getiriler.altiAy)),
          birYil: average(fundsOfManager.map((fund) => fund.getiriler.birYil)),
        },
        enIyiPerformansDonemi: bestReturnPeriod?.label ?? null,
        enIyiPerformansGosterenFon: bestReturn
          ? compactFund(bestReturn.fund, bestReturn.value)
          : null,
        enYuksekParaGirisiAlanFon: topFlowFund
          ? compactFund(topFlowFund, topFlowFund.paraAkisi.gunluk)
          : null,
        enBuyukFon: largestFund ? compactFund(largestFund, largestFund.fonToplamDeger) : null,
        fonlar: fundsOfManager
          .sort((a, b) => (b.fonToplamDeger ?? 0) - (a.fonToplamDeger ?? 0))
          .map((fund) => compactFund(fund, fund.paraAkisi.gunluk)),
      };
    })
    .sort((a, b) => b.toplamFonBuyuklugu - a.toplamFonBuyuklugu);
}

function buildFundData(snapshots, getiriMap, managerMap) {
  const latestDate = snapshots.map((snapshot) => snapshot.tarih).sort().at(-1) ?? null;
  const histories = groupSnapshotsByCode(snapshots);
  const funds = [];
  const dataWarnings = [];

  for (const [fonKodu, historyRows] of histories.entries()) {
    const enrichedRows = enrichHistory(historyRows);
    for (let index = 1; index < historyRows.length; index += 1) {
      const previous = historyRows[index - 1];
      const row = historyRows[index];
      if (!hasValidFinancialSnapshot(previous) || !hasValidFinancialSnapshot(row)) continue;
      const rawReturn = row.fiyat / previous.fiyat - 1;
      if (Math.abs(rawReturn) > maxAbsoluteDailyReturn) {
        dataWarnings.push({
          fonKodu,
          tarih: row.tarih,
          tur: "gunluk-getiri-fiyat-kopmasi",
          hamGetiri: round(rawReturn, 8),
        });
      }
    }
    const latest = enrichedRows[enrichedRows.length - 1];
    const getiri = getiriMap.get(fonKodu) ?? null;
    const manager = managerMap.get(fonKodu) ?? null;
    const yonetici = manager?.yonetici || "Bilinmiyor";
    const yoneticiSlug = slugify(yonetici) || "bilinmiyor";

    const getiriler = getiri?.getiriler ?? {
      birAy: null,
      ucAy: null,
      altiAy: null,
      yilbasi: null,
      birYil: null,
      ucYil: null,
      besYil: null,
    };

    const fund = {
      kod: fonKodu,
      slug: fonKodu.toLowerCase(),
      ad: latest.fonAdi || getiri?.fonAdi || manager?.fonAdi || fonKodu,
      kategori: getiri?.kategori || "Bilinmiyor",
      riskDegeri: getiri?.riskDegeri ?? null,
      kapYoneticiKodu: manager?.kapYoneticiKodu || "",
      yonetici,
      yoneticiSlug,
      yoneticiKaynak: manager?.kaynak || "",
      tarih: latest.tarih,
      aktifMi: latestDate
        ? latest.tarih === latestDate && hasValidFinancialSnapshot(latest)
        : hasValidFinancialSnapshot(latest),
      fiyat: latest.fiyat,
      tedavuldekiPaySayisi: latest.tedavuldekiPaySayisi,
      kisiSayisi: latest.kisiSayisi,
      fonToplamDeger: latest.fonToplamDeger,
      gunlukGetiri: latest.gunlukGetiri,
      getiriler,
      paraAkisi: computeFundFlows(enrichedRows, latest.tarih),
      yatirimciDegisimi: computeInvestorChanges(enrichedRows, latest.tarih),
      tarihselGunSayisi: enrichedRows.length,
      riskAnalizi: computeRiskMetrics(enrichedRows, getiriler),
      sonOtuzIslemGunu: enrichedRows.slice(-30).reverse(),
      history: enrichedRows,
    };

    funds.push(fund);
  }

  const activeFunds = funds.filter((fund) => fund.aktifMi);
  buildRiskComparisons(activeFunds);
  const unknownManagers = activeFunds
    .filter((fund) => !managerMap.has(fund.kod) || fund.yonetici === "Bilinmiyor")
    .map((fund) => ({ fonKodu: fund.kod, fonAdi: fund.ad }));
  const leaderboards = {
    bugunEnCokKazandiran: topFunds(activeFunds, (fund) => fund.gunlukGetiri, "desc", 10, (fund) => (fund.gunlukGetiri ?? 0) > 0),
    bugunEnCokKaybettiren: topFunds(activeFunds, (fund) => fund.gunlukGetiri, "asc", 10, (fund) => (fund.gunlukGetiri ?? 0) < 0),
    birAydaEnCokKazandiran: topFunds(activeFunds, (fund) => fund.getiriler.birAy, "desc", 10, (fund) => (fund.getiriler.birAy ?? 0) > 0),
    ucAydaEnCokKazandiran: topFunds(activeFunds, (fund) => fund.getiriler.ucAy, "desc", 10, (fund) => (fund.getiriler.ucAy ?? 0) > 0),
    birYildaEnCokKazandiran: topFunds(activeFunds, (fund) => fund.getiriler.birYil, "desc", 10, (fund) => (fund.getiriler.birYil ?? 0) > 0),
    enCokParaGirisi: topFunds(
      activeFunds,
      (fund) => fund.paraAkisi.gunluk,
      "desc",
      10,
      (fund) => (fund.paraAkisi.gunluk ?? 0) > 0
    ),
    enCokParaCikisi: topFunds(
      activeFunds,
      (fund) => fund.paraAkisi.gunluk,
      "asc",
      10,
      (fund) => (fund.paraAkisi.gunluk ?? 0) < 0
    ),
    enCokYatirimciKazanan: topFunds(
      activeFunds,
      (fund) => fund.yatirimciDegisimi.gunluk,
      "desc",
      10,
      (fund) => (fund.yatirimciDegisimi.gunluk ?? 0) > 0
    ),
    enCokYatirimciKaybeden: topFunds(
      activeFunds,
      (fund) => fund.yatirimciDegisimi.gunluk,
      "asc",
      10,
      (fund) => (fund.yatirimciDegisimi.gunluk ?? 0) < 0
    ),
    enBuyukFonlar: topFunds(activeFunds, (fund) => fund.fonToplamDeger, "desc", 10),
  };

  const managers = buildManagers(activeFunds);

  const currentFunds = funds
    .map((fund) => {
      const currentFund = { ...fund };
      delete currentFund.history;
      return currentFund;
    })
    .sort((a, b) => a.kod.localeCompare(b.kod, "tr"));

  const details = funds.map((fund) => ({
    fund: currentFunds.find((item) => item.kod === fund.kod),
    history: fund.history,
    sonOtuzIslemGunu: fund.sonOtuzIslemGunu,
    riskAnalizi: fund.riskAnalizi,
  }));

  return {
    latestDate,
    funds: currentFunds,
    activeFunds,
    details,
    leaderboards,
    managers,
    unknownManagers,
    dataWarnings,
  };
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const resolvedDetailDir = path.resolve(detailDir);
  const resolvedOutputDir = path.resolve(outputDir);
  if (
    resolvedDetailDir.startsWith(`${resolvedOutputDir}${path.sep}`) &&
    path.basename(resolvedDetailDir) === "fund-details"
  ) {
    await fs.rm(resolvedDetailDir, { recursive: true, force: true });
  }
  await fs.mkdir(detailDir, { recursive: true });

  const existingHistory = await readJson(historyPath, { snapshots: [] });
  const legacySnapshots = await loadLegacyTarihselSnapshots();
  const currentSnapshots = parseTarihselRows(getFirstSheetRows(sourcePaths.tarihsel));
  const getiriMap = parseGetiriRows(getFirstSheetRows(sourcePaths.getiri));
  const managerMap = parseManagerRows(getFirstSheetRows(sourcePaths.yoneticiler));

  validateSourceData({
    currentSnapshots,
    getiriMap,
    managerMap,
    existingSnapshots: existingHistory.snapshots ?? [],
  });

  const incomingSnapshots = [...legacySnapshots, ...currentSnapshots];
  const { snapshots, stats } = mergeSnapshots(
    existingHistory.snapshots ?? [],
    incomingSnapshots
  );
  const generatedAt = new Date().toISOString();

  const fundData = buildFundData(snapshots, getiriMap, managerMap);
  const activeFunds = fundData.activeFunds;

  await writeJson(historyPath, {
    version,
    generatedAt,
    kaynaklar: {
      getiri: path.relative(rootDir, sourcePaths.getiri).split(path.sep).join("/"),
      tarihsel: path.relative(rootDir, sourcePaths.tarihsel).split(path.sep).join("/"),
      yoneticiler: path.relative(rootDir, sourcePaths.yoneticiler).split(path.sep).join("/"),
    },
    snapshots,
  });

  await writeJson(currentPath, {
    version,
    generatedAt,
    sonIslemTarihi: fundData.latestDate,
    fonSayisi: activeFunds.length,
    toplamFonBuyuklugu: round(
      activeFunds.reduce((total, fund) => total + (fund.fonToplamDeger ?? 0), 0),
      2
    ),
    fonlar: fundData.funds,
  });

  await writeJson(dashboardPath, {
    version,
    generatedAt,
    sonIslemTarihi: fundData.latestDate,
    ozet: {
      toplamTakipEdilenFonSayisi: activeFunds.length,
      toplamFonBuyuklugu: round(
        activeFunds.reduce((total, fund) => total + (fund.fonToplamDeger ?? 0), 0),
        2
      ),
      bugunEnYuksekParaGirisi: fundData.leaderboards.enCokParaGirisi[0] ?? null,
      bugunEnYuksekParaCikisi: fundData.leaderboards.enCokParaCikisi[0] ?? null,
      enCokYatirimciKazanan: fundData.leaderboards.enCokYatirimciKazanan[0] ?? null,
      enCokYatirimciKaybeden: fundData.leaderboards.enCokYatirimciKaybeden[0] ?? null,
    },
    liderTablolari: fundData.leaderboards,
    yoneticiSayisi: fundData.managers.length,
  });

  await writeJson(managersPath, {
    version,
    generatedAt,
    sonIslemTarihi: fundData.latestDate,
    yoneticiler: fundData.managers,
  });

  for (const detail of fundData.details) {
    await writeJson(path.join(detailDir, `${detail.fund.slug}.json`), {
      version,
      generatedAt,
      sonIslemTarihi: fundData.latestDate,
      ...detail,
    });
  }

  await writeJson(updateLogPath, {
    version,
    generatedAt,
    duplicateKontrolu: stats,
    islenenFonSayisi: getiriMap.size,
    islenenSnapshotSayisi: currentSnapshots.length,
    kaliciSnapshotSayisi: snapshots.length,
    yoneticiyleEslesenFonSayisi: activeFunds.length - fundData.unknownManagers.length,
    bilinmeyenYoneticiSayisi: fundData.unknownManagers.length,
    bilinmeyenYoneticiFonlari: fundData.unknownManagers,
    veriUyarisiSayisi: fundData.dataWarnings.length,
    veriUyarilari: fundData.dataWarnings,
  });

  await writeLegacyExcelJson(sourcePaths.getiri);
  await writeLegacyExcelJson(sourcePaths.tarihsel);

  console.log(`${getiriMap.size} fon getirisi işlendi`);
  console.log(`${currentSnapshots.length} güncel snapshot işlendi`);
  console.log(`${stats.added} yeni kalıcı snapshot eklendi`);
  console.log(`${stats.updated} mevcut snapshot güncellendi`);
  console.log(`${stats.skipped} duplicate snapshot atlandı`);
  console.log(`${activeFunds.length - fundData.unknownManagers.length} fon yöneticiyle eşleşti`);
  console.log(`${fundData.unknownManagers.length} fon Bilinmiyor olarak işaretlendi`);
  console.log(`${fundData.dataWarnings.length} uç fiyat hareketi getiri sıralamasından çıkarıldı`);
  console.log("Para akışları, yatırımcı değişimleri ve lider tabloları hazırlandı");
}

main().catch((error) => {
  console.error("Fon güncelleme hatası:", error);
  process.exit(1);
});

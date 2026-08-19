import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const XLSX_MODULE = await import("xlsx");
const XLSX = XLSX_MODULE?.default || XLSX_MODULE;

const rootDir = process.cwd();
const historyPath = path.join(rootDir, "data", "fonlar", "fund-history.json");
const maxFundValueRelativeDifference = 0.005;

const columnCandidates = {
  kod: ["Fon Kodu", "FONKODU", "FonKod", "fonKod", "fonKodu", "Kod"],
  ad: ["Fon Adı", "Fon Adi", "FONUNVAN", "Fon Unvan", "fonUnvan", "fonAdi", "Unvan"],
  tarih: ["Tarih", "TARIH", "İşlem Tarihi", "Islem Tarihi", "Veri Tarihi", "date"],
  fiyat: ["Fiyat", "FIYAT", "Birim Pay Değeri", "Birim Pay Degeri", "Pay Fiyatı", "sonFiyat"],
  pay: [
    "Tedavüldeki Pay Sayısı",
    "Tedavuldeki Pay Sayisi",
    "tedavuldekiPaySayisi",
    "TEDPAYSAYISI",
    "Pay Sayısı",
    "Dolaşımdaki Pay Sayısı",
    "numberOfShares",
  ],
  kisi: [
    "Kişi Sayısı",
    "Kisi Sayisi",
    "kisiSayisi",
    "KISISAYISI",
    "Yatırımcı Sayısı",
    "Yatirimci Sayisi",
    "numberOfInvestors",
  ],
  toplamDeger: [
    "Fon Toplam Değer",
    "Fon Toplam Değeri",
    "Fon Toplam Deger",
    "fonToplamDeger",
    "PORTFOYBUYUKLUK",
    "Portföy Büyüklüğü",
    "Portfoy Buyuklugu",
    "marketCap",
  ],
};

function usage() {
  console.log(`
Kullanim:
  npm run fonlar:gecmis-aktar -- --from "C:\\path\\tefas-gecmis.xlsx"

Secenekler:
  --from <dosya>        Excel veya JSON kaynak dosya yolu
  --codes TLY,PHE      Sadece belirli fon kodlarini ice aktar
  --start YYYY-MM-DD   Baslangic tarihi
  --end YYYY-MM-DD     Bitis tarihi
  --dry-run            Dosyaya yazmadan sonucu goster
  --no-rebuild         Ice aktarimdan sonra fon ciktilarini yeniden uretme
`);
}

function getArg(name) {
  const prefixed = process.argv.find((arg) => arg.startsWith(`${name}=`));
  if (prefixed) return prefixed.slice(name.length + 1);
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function hasFlag(name) {
  return process.argv.includes(name);
}

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

  let text = String(cleaned).trim();
  const key = normalizeKey(text);
  let multiplier = 1;
  if (/\b(milyar|bn|billion)\b/.test(key)) multiplier = 1_000_000_000;
  else if (/\b(milyon|mn|million)\b/.test(key)) multiplier = 1_000_000;
  else if (/\b(bin|thousand)\b/.test(key)) multiplier = 1_000;

  text = text.replace(/%/g, "").replace(/\s+/g, "");
  if (text.includes(",")) {
    text = text.replace(/\./g, "").replace(",", ".");
  } else if (/^-?\d{1,3}(\.\d{3})+$/.test(text)) {
    text = text.replace(/\./g, "");
  }

  const parsed = Number(text.replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed * multiplier : null;
}

function round(value, digits = 6) {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function pad2(value) {
  return String(value).padStart(2, "0");
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
    return validIsoDate(cleaned.getUTCFullYear(), cleaned.getUTCMonth() + 1, cleaned.getUTCDate());
  }
  if (typeof cleaned === "number") return excelSerialToIso(cleaned);

  const text = normalizeText(cleaned);
  const iso = text.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (iso) return validIsoDate(Number(iso[1]), Number(iso[2]), Number(iso[3]));
  const tr = text.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/);
  if (tr) return validIsoDate(Number(tr[3]), Number(tr[2]), Number(tr[1]));

  const date = new Date(text);
  if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
  return null;
}

function isPositiveFinite(value) {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

function hasValidFinancialSnapshot(row) {
  return (
    row &&
    isPositiveFinite(row.fiyat) &&
    isPositiveFinite(row.tedavuldekiPaySayisi) &&
    isPositiveFinite(row.fonToplamDeger)
  );
}

function findColumn(headers, candidates) {
  const normalizedCandidates = candidates.map(normalizeKey);
  const exactIndex = headers.findIndex((header) => {
    const key = normalizeKey(header);
    return normalizedCandidates.includes(key);
  });
  if (exactIndex >= 0) return exactIndex;
  return headers.findIndex((header) => {
    const key = normalizeKey(header);
    return normalizedCandidates.some((candidate) => key.includes(candidate));
  });
}

function findHeaderRow(rows) {
  for (let index = 0; index < Math.min(rows.length, 60); index += 1) {
    const headers = rows[index] ?? [];
    const indexes = {
      kod: findColumn(headers, columnCandidates.kod),
      tarih: findColumn(headers, columnCandidates.tarih),
      fiyat: findColumn(headers, columnCandidates.fiyat),
      pay: findColumn(headers, columnCandidates.pay),
      kisi: findColumn(headers, columnCandidates.kisi),
      toplamDeger: findColumn(headers, columnCandidates.toplamDeger),
    };
    if (
      indexes.kod >= 0 &&
      indexes.tarih >= 0 &&
      [indexes.fiyat, indexes.pay, indexes.kisi, indexes.toplamDeger].filter((value) => value >= 0)
        .length >= 2
    ) {
      return index;
    }
  }
  return -1;
}

function parseObjectRows(rows, sourceLabel) {
  const snapshots = [];
  const seen = new Set();

  for (const row of rows) {
    const read = (candidates) => {
      for (const [key, value] of Object.entries(row)) {
        const normalized = normalizeKey(key);
        if (candidates.some((candidate) => normalized === normalizeKey(candidate))) return value;
      }
      for (const [key, value] of Object.entries(row)) {
        const normalized = normalizeKey(key);
        if (candidates.some((candidate) => normalized.includes(normalizeKey(candidate)))) return value;
      }
      return null;
    };

    const snapshot = buildSnapshot({
      fonKodu: read(columnCandidates.kod),
      fonAdi: read(columnCandidates.ad),
      tarih: read(columnCandidates.tarih),
      fiyat: read(columnCandidates.fiyat),
      tedavuldekiPaySayisi: read(columnCandidates.pay),
      kisiSayisi: read(columnCandidates.kisi),
      fonToplamDeger: read(columnCandidates.toplamDeger),
    });

    if (!snapshot) continue;
    const key = `${snapshot.fonKodu}|${snapshot.tarih}`;
    if (seen.has(key)) throw new Error(`${sourceLabel} icinde tekrarlanan kayit: ${key}`);
    seen.add(key);
    snapshots.push(snapshot);
  }

  return snapshots;
}

function parseRawRows(rows, sourceLabel) {
  const headerIndex = findHeaderRow(rows);
  if (headerIndex < 0) {
    throw new Error(`${sourceLabel} icinde fon kodu, tarih ve finansal veri basliklari bulunamadi.`);
  }

  const headers = rows[headerIndex].map((cell) => normalizeText(cell));
  const indexes = {
    kod: findColumn(headers, columnCandidates.kod),
    ad: findColumn(headers, columnCandidates.ad),
    tarih: findColumn(headers, columnCandidates.tarih),
    fiyat: findColumn(headers, columnCandidates.fiyat),
    pay: findColumn(headers, columnCandidates.pay),
    kisi: findColumn(headers, columnCandidates.kisi),
    toplamDeger: findColumn(headers, columnCandidates.toplamDeger),
  };

  const snapshots = [];
  const seen = new Set();

  for (const row of rows.slice(headerIndex + 1)) {
    const snapshot = buildSnapshot({
      fonKodu: row[indexes.kod],
      fonAdi: indexes.ad >= 0 ? row[indexes.ad] : null,
      tarih: row[indexes.tarih],
      fiyat: indexes.fiyat >= 0 ? row[indexes.fiyat] : null,
      tedavuldekiPaySayisi: indexes.pay >= 0 ? row[indexes.pay] : null,
      kisiSayisi: indexes.kisi >= 0 ? row[indexes.kisi] : null,
      fonToplamDeger: indexes.toplamDeger >= 0 ? row[indexes.toplamDeger] : null,
    });

    if (!snapshot) continue;
    const key = `${snapshot.fonKodu}|${snapshot.tarih}`;
    if (seen.has(key)) throw new Error(`${sourceLabel} icinde tekrarlanan kayit: ${key}`);
    seen.add(key);
    snapshots.push(snapshot);
  }

  return snapshots;
}

function buildSnapshot(values) {
  const fonKodu = normalizeCode(values.fonKodu);
  const tarih = parseDate(values.tarih);
  if (!fonKodu || !tarih) return null;

  const fiyat = parseNumber(values.fiyat);
  const tedavuldekiPaySayisi = parseNumber(values.tedavuldekiPaySayisi);
  const kisiSayisi = parseNumber(values.kisiSayisi);
  const kaynakFonToplamDeger = parseNumber(values.fonToplamDeger);
  if (
    fiyat === null &&
    tedavuldekiPaySayisi === null &&
    kisiSayisi === null &&
    kaynakFonToplamDeger === null
  ) {
    return null;
  }

  const hesaplananFonToplamDeger =
    isPositiveFinite(fiyat) && isPositiveFinite(tedavuldekiPaySayisi)
      ? round(fiyat * tedavuldekiPaySayisi, 2)
      : null;
  const toplamDegerFarkOrani =
    isPositiveFinite(kaynakFonToplamDeger) && isPositiveFinite(hesaplananFonToplamDeger)
      ? Math.abs(hesaplananFonToplamDeger - kaynakFonToplamDeger) / kaynakFonToplamDeger
      : null;
  const toplamDegerDuzeltildi =
    toplamDegerFarkOrani !== null && toplamDegerFarkOrani > maxFundValueRelativeDifference;

  return {
    fonKodu,
    fonAdi: normalizeText(values.fonAdi),
    tarih,
    fiyat: round(fiyat, 8),
    tedavuldekiPaySayisi: round(tedavuldekiPaySayisi, 2),
    kisiSayisi: kisiSayisi === null ? null : Math.round(kisiSayisi),
    fonToplamDeger: toplamDegerDuzeltildi
      ? hesaplananFonToplamDeger
      : round(kaynakFonToplamDeger ?? hesaplananFonToplamDeger, 2),
    ...(toplamDegerDuzeltildi
      ? {
          kaynakFonToplamDeger: round(kaynakFonToplamDeger, 2),
          toplamDegerFarkOrani: round(toplamDegerFarkOrani, 8),
        }
      : {}),
  };
}

async function readSourceSnapshots(sourceFile) {
  const extension = path.extname(sourceFile).toLocaleLowerCase("tr-TR");
  if (!fsSync.existsSync(sourceFile)) throw new Error(`Kaynak dosya bulunamadi: ${sourceFile}`);

  if ([".xlsx", ".xls", ".xlsm"].includes(extension)) {
    const workbook = XLSX.readFile(sourceFile, { cellDates: false, raw: true });
    const sheetName = workbook.SheetNames[0];
    if (!sheetName) throw new Error(`Excel sayfasi bulunamadi: ${sourceFile}`);
    const rows = XLSX.utils
      .sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: null, raw: true })
      .map((row) => row.map((cell) => cleanCell(cell)));
    return parseRawRows(rows, path.basename(sourceFile));
  }

  if (extension === ".json") {
    const json = JSON.parse(await fs.readFile(sourceFile, "utf8"));
    if (Array.isArray(json)) {
      return Array.isArray(json[0])
        ? parseRawRows(json, path.basename(sourceFile))
        : parseObjectRows(json, path.basename(sourceFile));
    }
    if (Array.isArray(json.snapshots)) return parseObjectRows(json.snapshots, path.basename(sourceFile));
    if (Array.isArray(json.rawRows)) return parseRawRows(json.rawRows, path.basename(sourceFile));
    if (Array.isArray(json.rows)) return parseObjectRows(json.rows, path.basename(sourceFile));
    if (json.sheets && typeof json.sheets === "object") {
      for (const sheet of Object.values(json.sheets)) {
        if (Array.isArray(sheet?.rawRows)) return parseRawRows(sheet.rawRows, path.basename(sourceFile));
        if (Array.isArray(sheet?.rows)) return parseObjectRows(sheet.rows, path.basename(sourceFile));
      }
    }
  }

  throw new Error("Sadece Excel (.xlsx/.xls/.xlsm) veya JSON gecmis veri dosyasi destekleniyor.");
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
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
    kaynakFonToplamDeger: snapshot.kaynakFonToplamDeger,
    toplamDegerFarkOrani: snapshot.toplamDegerFarkOrani,
  });
}

function mergeSnapshots(existingSnapshots, importedSnapshots) {
  const map = new Map(existingSnapshots.map((snapshot) => [snapshotKey(snapshot), snapshot]));
  const stats = { added: 0, updated: 0, skipped: 0 };

  for (const snapshot of importedSnapshots) {
    const key = snapshotKey(snapshot);
    const previous = map.get(key);
    if (!previous) {
      map.set(key, snapshot);
      stats.added += 1;
    } else if (stableSnapshot(previous) === stableSnapshot(snapshot)) {
      stats.skipped += 1;
    } else {
      map.set(key, { ...previous, ...snapshot });
      stats.updated += 1;
    }
  }

  return {
    stats,
    snapshots: Array.from(map.values()).sort((a, b) => {
      const dateCompare = a.tarih.localeCompare(b.tarih);
      return dateCompare !== 0 ? dateCompare : a.fonKodu.localeCompare(b.fonKodu, "tr");
    }),
  };
}

function filterSnapshots(snapshots, { codes, start, end }) {
  return snapshots.filter((snapshot) => {
    if (codes.size > 0 && !codes.has(snapshot.fonKodu)) return false;
    if (start && snapshot.tarih < start) return false;
    if (end && snapshot.tarih > end) return false;
    return true;
  });
}

function validateImportedSnapshots(snapshots) {
  if (snapshots.length === 0) {
    throw new Error("Ice aktarilacak uygun fon gecmis kaydi bulunamadi.");
  }

  const byDate = new Map();
  const codes = new Set();
  for (const snapshot of snapshots) {
    codes.add(snapshot.fonKodu);
    if (!byDate.has(snapshot.tarih)) byDate.set(snapshot.tarih, []);
    byDate.get(snapshot.tarih).push(snapshot);
  }

  const allowSmallCoverage = codes.size <= 20;
  const weakDates = [];
  const invalidDates = [];
  for (const [date, rows] of byDate) {
    const validRows = rows.filter(hasValidFinancialSnapshot);
    const validRatio = rows.length > 0 ? validRows.length / rows.length : 0;
    if (!allowSmallCoverage && rows.length < 100) weakDates.push(`${date} (${rows.length} kayit)`);
    if (validRatio < 0.95) invalidDates.push(`${date} (${validRows.length}/${rows.length} gecerli)`);
  }

  if (weakDates.length > 0) {
    throw new Error(
      `Kaynak gecmis veri eksik gorunuyor. Zayif tarihler: ${weakDates.slice(0, 20).join(", ")}`
    );
  }
  if (invalidDates.length > 0) {
    throw new Error(
      `Kaynak gecmis veride fiyat/pay/toplam deger eksikleri var: ${invalidDates
        .slice(0, 20)
        .join(", ")}`
    );
  }
}

async function main() {
  if (hasFlag("--help") || hasFlag("-h")) {
    usage();
    return;
  }

  const from = getArg("--from");
  if (!from) {
    usage();
    throw new Error("--from ile resmi Excel/JSON kaynak dosyasini verin.");
  }

  const sourceFile = path.resolve(rootDir, from);
  const codes = new Set(
    normalizeText(getArg("--codes"))
      .split(",")
      .map(normalizeCode)
      .filter(Boolean)
  );
  const start = parseDate(getArg("--start"));
  const end = parseDate(getArg("--end"));
  const dryRun = hasFlag("--dry-run");
  const rebuild = !hasFlag("--no-rebuild") && !dryRun;

  const sourceSnapshots = await readSourceSnapshots(sourceFile);
  const importedSnapshots = filterSnapshots(sourceSnapshots, { codes, start, end });
  validateImportedSnapshots(importedSnapshots);

  const existingHistory = await readJson(historyPath, { version: 1, snapshots: [] });
  const imports = Array.isArray(existingHistory.gecmisIceAktarimlari)
    ? existingHistory.gecmisIceAktarimlari
    : [];
  const { snapshots, stats } = mergeSnapshots(existingHistory.snapshots ?? [], importedSnapshots);

  const dates = Array.from(new Set(importedSnapshots.map((row) => row.tarih))).sort();
  const importRecord = {
    tarih: new Date().toISOString(),
    kaynakDosya: path.relative(rootDir, sourceFile).split(path.sep).join("/"),
    ilkTarih: dates[0],
    sonTarih: dates.at(-1),
    fonSayisi: new Set(importedSnapshots.map((row) => row.fonKodu)).size,
    snapshotSayisi: importedSnapshots.length,
    eklenenSnapshotSayisi: stats.added,
    guncellenenSnapshotSayisi: stats.updated,
    atlananSnapshotSayisi: stats.skipped,
  };

  console.log(
    `Fon gecmis aktarimi: ${importRecord.snapshotSayisi} kayit, ${importRecord.fonSayisi} fon, ${importRecord.ilkTarih} - ${importRecord.sonTarih}`
  );
  console.log(
    `Kalici arsiv sonucu: ${stats.added} eklendi, ${stats.updated} guncellendi, ${stats.skipped} ayni kayit atlandi.`
  );

  if (dryRun) return;

  await writeJson(historyPath, {
    version: existingHistory.version ?? 1,
    generatedAt: existingHistory.generatedAt ?? new Date().toISOString(),
    kaynaklar: existingHistory.kaynaklar ?? {},
    gecmisIceAktarimlari: [...imports, importRecord].slice(-50),
    snapshots,
  });

  if (rebuild) {
    execFileSync("node", ["scripts/update-funds.mjs"], {
      cwd: rootDir,
      stdio: "inherit",
      windowsHide: true,
    });
    execFileSync("node", ["scripts/test-fund-platform.mjs"], {
      cwd: rootDir,
      stdio: "inherit",
      windowsHide: true,
    });
  }
}

main().catch((error) => {
  console.error(`Fon gecmis aktarim hatasi: ${error.message}`);
  process.exit(1);
});

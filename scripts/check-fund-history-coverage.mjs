import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const historyPath = path.join(rootDir, "data", "fonlar", "fund-history.json");
const recurringMarketClosedDays = new Set([
  "01-01",
  "04-23",
  "05-01",
  "05-19",
  "07-15",
  "08-30",
  "10-29",
]);
const datedMarketClosedDays = new Set([
  "2025-03-31",
  "2025-04-01",
  "2025-06-06",
  "2025-06-09",
  "2026-03-20",
  "2026-05-27",
  "2026-05-28",
  "2026-05-29",
]);

function normalizeText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function normalizeCode(value) {
  return normalizeText(value).toLocaleUpperCase("tr-TR").replace(/\s+/g, "");
}

function getArg(name) {
  const prefixed = process.argv.find((arg) => arg.startsWith(`${name}=`));
  if (prefixed) return prefixed.slice(name.length + 1);
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function isExpectedFundTradingDay(isoDate) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  const day = date.getUTCDay();
  if (day === 0 || day === 6) return false;
  if (recurringMarketClosedDays.has(isoDate.slice(5))) return false;
  return !datedMarketClosedDays.has(isoDate);
}

function listTradingDates(start, end) {
  const dates = [];
  const cursor = new Date(`${start}T00:00:00Z`);
  const last = new Date(`${end}T00:00:00Z`);
  while (cursor <= last) {
    const iso = cursor.toISOString().slice(0, 10);
    if (isExpectedFundTradingDay(iso)) dates.push(iso);
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return dates;
}

const history = JSON.parse(fs.readFileSync(historyPath, "utf8"));
const snapshots = history.snapshots ?? [];
const allDates = Array.from(new Set(snapshots.map((row) => row.tarih))).sort();
const start = getArg("--start") || allDates[0];
const end = getArg("--end") || allDates.at(-1);
const requestedCodes = new Set(
  normalizeText(getArg("--codes"))
    .split(",")
    .map(normalizeCode)
    .filter(Boolean)
);

const byCode = new Map();
const byDate = new Map();
for (const snapshot of snapshots) {
  if (snapshot.tarih < start || snapshot.tarih > end) continue;
  if (requestedCodes.size > 0 && !requestedCodes.has(snapshot.fonKodu)) continue;
  if (!byCode.has(snapshot.fonKodu)) byCode.set(snapshot.fonKodu, new Set());
  byCode.get(snapshot.fonKodu).add(snapshot.tarih);
  if (!byDate.has(snapshot.tarih)) byDate.set(snapshot.tarih, 0);
  byDate.set(snapshot.tarih, byDate.get(snapshot.tarih) + 1);
}

const officialDates = Array.isArray(history.resmiKaynakTarihleri)
  ? Array.from(new Set(history.resmiKaynakTarihleri)).sort()
  : [];
const officialRangeCoversRequest =
  officialDates.length > 0 && officialDates[0] <= start && officialDates.at(-1) >= end;
const expectedDates = officialRangeCoversRequest
  ? officialDates.filter((date) => date >= start && date <= end)
  : listTradingDates(start, end);
const missingGlobalDates = expectedDates.filter((date) => !byDate.has(date));
const codeMissingSummary = [];
for (const [code, dates] of byCode) {
  const firstDate = Array.from(dates).sort()[0];
  const lastDate = Array.from(dates).sort().at(-1);
  const missing = expectedDates.filter(
    (date) => date >= firstDate && date <= lastDate && !dates.has(date)
  );
  if (missing.length > 0) codeMissingSummary.push({ code, missing });
}

console.log(`Fon gecmis kapsami: ${start} - ${end}`);
console.log(`Kontrol edilen fon: ${byCode.size}`);
console.log(`Arsivdeki islem gunu: ${byDate.size}/${expectedDates.length}`);
console.log(
  `Islem gunu kaynagi: ${officialRangeCoversRequest ? "Resmi TEFAS tarih listesi" : "Takvim kurallari"}`
);
if (missingGlobalDates.length > 0) {
  console.log(`Tum arsivde eksik gunler: ${missingGlobalDates.join(", ")}`);
}
if (codeMissingSummary.length > 0) {
  console.log(
    officialRangeCoversRequest
      ? `Resmi kaynakta gecersiz veya yayimlanmamis satiri bulunan fon sayisi: ${codeMissingSummary.length}`
      : `Fon bazli eksigi olan kod sayisi: ${codeMissingSummary.length}`
  );
  for (const item of codeMissingSummary.slice(0, 30)) {
    console.log(`${item.code}: ${item.missing.slice(0, 20).join(", ")}`);
  }
  if (officialRangeCoversRequest) {
    console.log("Bu tarihler yapay degerle doldurulmadi; yalnizca gecerli resmi kayitlar kullanildi.");
  }
} else {
  console.log("Fon bazli eksik islem gunu bulunmadi.");
}

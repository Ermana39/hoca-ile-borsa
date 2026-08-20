import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const rootDir = process.cwd();
const historyPath = path.join(rootDir, "data", "fonlar", "fund-history.json");
const endpoint = "https://www.tefas.gov.tr/api/funds/fonGnlBlgSiraliGetirDosya";
const sourceUrl = "https://www.tefas.gov.tr/tr/fon-verileri";
const maxFundValueRelativeDifference = 0.005;

function usage() {
  console.log(`
Kullanim:
  npm run fonlar:tefas-gecmis -- --start 2025-08-20 --end 2026-08-20

Secenekler:
  --start YYYY-MM-DD   Baslangic tarihi (varsayilan: bitis tarihi)
  --end YYYY-MM-DD     Bitis tarihi (varsayilan: bugun)
  --codes TLY,PHE      Yalnizca belirtilen fon kodlarini arsive al
  --chunk-days 28      Her resmi servis istegindeki azami gun sayisi
  --delay-ms 5000      Istekler arasindaki bekleme
  --dry-run            Arsive yazmadan indirip dogrula
  --no-rebuild         Aktarimdan sonra fon sayfalarini yeniden uretme
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

function normalizeCode(value) {
  return normalizeText(value).toLocaleUpperCase("tr-TR").replace(/\s+/g, "");
}

function parseIsoDate(value, label) {
  const text = normalizeText(value);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    throw new Error(`${label} YYYY-MM-DD biciminde olmalidir.`);
  }
  const date = new Date(`${text}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== text) {
    throw new Error(`${label} gecersiz tarih: ${text}`);
  }
  return text;
}

function todayInIstanbul() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function addDays(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function toTefasDate(isoDate) {
  return isoDate.replace(/-/g, "");
}

function round(value, digits = 6) {
  if (!Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function positiveNumber(value) {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function buildSnapshot(row) {
  const fonKodu = normalizeCode(row?.fonKodu ?? row?.fonKod);
  const tarih = normalizeText(row?.tarih).slice(0, 10);
  const fiyat = positiveNumber(row?.fiyat);
  const tedavuldekiPaySayisi = positiveNumber(row?.tedPaySayisi);
  const kisiSayisiRaw = row?.kisiSayisi;
  const kisiSayisi = Number.isFinite(Number(kisiSayisiRaw))
    ? Math.max(0, Math.round(Number(kisiSayisiRaw)))
    : null;
  const kaynakFonToplamDeger = positiveNumber(row?.portfoyBuyukluk);

  if (!fonKodu || !/^\d{4}-\d{2}-\d{2}$/.test(tarih)) return null;
  if (!fiyat || !tedavuldekiPaySayisi || !kaynakFonToplamDeger) return null;

  const hesaplananFonToplamDeger = round(fiyat * tedavuldekiPaySayisi, 2);
  const toplamDegerFarkOrani =
    Math.abs(hesaplananFonToplamDeger - kaynakFonToplamDeger) / kaynakFonToplamDeger;
  const toplamDegerDuzeltildi = toplamDegerFarkOrani > maxFundValueRelativeDifference;

  return {
    fonKodu,
    fonAdi: normalizeText(row?.fonUnvan),
    tarih,
    fiyat: round(fiyat, 8),
    tedavuldekiPaySayisi: round(tedavuldekiPaySayisi, 2),
    kisiSayisi,
    fonToplamDeger: toplamDegerDuzeltildi
      ? hesaplananFonToplamDeger
      : round(kaynakFonToplamDeger, 2),
    ...(toplamDegerDuzeltildi
      ? {
          kaynakFonToplamDeger: round(kaynakFonToplamDeger, 2),
          toplamDegerFarkOrani: round(toplamDegerFarkOrani, 8),
        }
      : {}),
  };
}

function splitIntoChunks(start, end, chunkDays) {
  const chunks = [];
  let cursor = start;
  while (cursor <= end) {
    const chunkEnd = [addDays(cursor, chunkDays - 1), end].sort()[0];
    chunks.push({ start: cursor, end: chunkEnd });
    cursor = addDays(chunkEnd, 1);
  }
  return chunks;
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function responseRows(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.resultList)) return payload.resultList;
  return null;
}

function faultMessage(payload) {
  const fault = payload?.fault;
  return (
    fault?.faultString ||
    payload?.errorMessage ||
    payload?.message ||
    "Resmi TEFAS servisi beklenmeyen yanit verdi."
  );
}

async function fetchChunk(chunk, delayMs) {
  const body = {
    dil: "TR",
    fonTipi: "YAT",
    fonKod: null,
    fonGrup: null,
    basTarih: toTefasDate(chunk.start),
    bitTarih: toTefasDate(chunk.end),
    fonTurKod: null,
    fonUnvanTip: null,
    kurucuKod: null,
    fonTurAciklama: null,
    sfonTurKod: null,
  };

  for (let attempt = 1; attempt <= 5; attempt += 1) {
    if (attempt > 1) await wait(delayMs * attempt);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Referer: sourceUrl,
        "User-Agent": "HocaIleBorsa-FundArchive/1.0",
      },
      body: JSON.stringify(body),
    });
    const text = await response.text();
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }

    const rows = responseRows(payload);
    if (response.ok && rows) return rows;

    const status = Number(payload?.fault?.faultStatusCode ?? response.status);
    if (status !== 429 || attempt === 5) {
      throw new Error(`${chunk.start} - ${chunk.end}: ${faultMessage(payload)}`);
    }
  }

  throw new Error(`${chunk.start} - ${chunk.end}: TEFAS istek siniri asilamadi.`);
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
      return dateCompare || a.fonKodu.localeCompare(b.fonKodu, "tr");
    }),
  };
}

async function readHistory() {
  try {
    return JSON.parse(await fs.readFile(historyPath, "utf8"));
  } catch {
    return { version: 1, snapshots: [] };
  }
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value)}\n`, "utf8");
}

function validateDownloadedRows(rawRows, snapshots, start, end, minimumValidRows) {
  if (rawRows.length === 0 || snapshots.length === 0) {
    throw new Error(`${start} - ${end} icin gecerli TEFAS verisi bulunamadi.`);
  }

  const rawByDate = new Map();
  const validByDate = new Map();
  for (const row of rawRows) {
    const date = normalizeText(row?.tarih).slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    rawByDate.set(date, (rawByDate.get(date) ?? 0) + 1);
  }
  for (const row of snapshots) {
    validByDate.set(row.tarih, (validByDate.get(row.tarih) ?? 0) + 1);
  }

  const weakDates = Array.from(rawByDate.keys())
    .sort()
    .filter((date) => (validByDate.get(date) ?? 0) < minimumValidRows)
    .map((date) => `${date} (${validByDate.get(date) ?? 0}/${rawByDate.get(date)} gecerli)`);
  if (weakDates.length > 0) {
    throw new Error(`Resmi kaynakta zayif gunler var: ${weakDates.slice(0, 20).join(", ")}`);
  }

  return {
    dates: Array.from(validByDate.keys()).sort(),
    invalidCount: rawRows.length - snapshots.length,
    rawCount: rawRows.length,
  };
}

async function main() {
  if (hasFlag("--help") || hasFlag("-h")) {
    usage();
    return;
  }

  const end = parseIsoDate(getArg("--end") || todayInIstanbul(), "--end");
  const start = parseIsoDate(getArg("--start") || end, "--start");
  if (start > end) throw new Error("--start, --end tarihinden sonra olamaz.");

  const chunkDays = Number(getArg("--chunk-days") || 28);
  const delayMs = Number(getArg("--delay-ms") || 5000);
  if (!Number.isInteger(chunkDays) || chunkDays < 1 || chunkDays > 28) {
    throw new Error("--chunk-days 1 ile 28 arasinda tam sayi olmalidir.");
  }
  if (!Number.isFinite(delayMs) || delayMs < 1000) {
    throw new Error("--delay-ms en az 1000 olmalidir.");
  }

  const requestedCodes = new Set(
    normalizeText(getArg("--codes"))
      .split(",")
      .map(normalizeCode)
      .filter(Boolean)
  );
  const chunks = splitIntoChunks(start, end, chunkDays);
  const rawRows = [];

  for (let index = 0; index < chunks.length; index += 1) {
    const chunk = chunks[index];
    const rows = await fetchChunk(chunk, delayMs);
    rawRows.push(...rows);
    console.log(
      `TEFAS ${index + 1}/${chunks.length}: ${chunk.start} - ${chunk.end}, ${rows.length} kayit`
    );
    if (index < chunks.length - 1) await wait(delayMs);
  }

  const importedSnapshots = rawRows
    .map(buildSnapshot)
    .filter(Boolean)
    .filter((snapshot) => requestedCodes.size === 0 || requestedCodes.has(snapshot.fonKodu));
  const validation = validateDownloadedRows(
    requestedCodes.size === 0
      ? rawRows
      : rawRows.filter((row) => requestedCodes.has(normalizeCode(row?.fonKodu ?? row?.fonKod))),
    importedSnapshots,
    start,
    end,
    requestedCodes.size > 0 ? 1 : 100
  );

  const history = await readHistory();
  const { snapshots, stats } = mergeSnapshots(history.snapshots ?? [], importedSnapshots);
  const record = {
    tarih: new Date().toISOString(),
    kaynak: sourceUrl,
    ilkTarih: validation.dates[0],
    sonTarih: validation.dates.at(-1),
    kaynakTarihSayisi: validation.dates.length,
    fonSayisi: new Set(importedSnapshots.map((row) => row.fonKodu)).size,
    kaynakKayitSayisi: validation.rawCount,
    gecerliSnapshotSayisi: importedSnapshots.length,
    gecersizKayitSayisi: validation.invalidCount,
    eklenenSnapshotSayisi: stats.added,
    guncellenenSnapshotSayisi: stats.updated,
    atlananSnapshotSayisi: stats.skipped,
  };

  console.log(
    `Resmi TEFAS aktarimi: ${record.gecerliSnapshotSayisi} gecerli kayit, ${record.fonSayisi} fon, ${record.ilkTarih} - ${record.sonTarih}`
  );
  console.log(
    `Arsiv sonucu: ${stats.added} eklendi, ${stats.updated} guncellendi, ${stats.skipped} ayni kayit atlandi, ${record.gecersizKayitSayisi} gecersiz satir dislandi.`
  );

  if (hasFlag("--dry-run")) return;

  const officialDates = Array.from(
    new Set([...(history.resmiKaynakTarihleri ?? []), ...validation.dates])
  ).sort();
  await writeJson(historyPath, {
    ...history,
    resmiKaynak: sourceUrl,
    resmiKaynakTarihleri: officialDates,
    resmiKaynakAktarimlari: [...(history.resmiKaynakAktarimlari ?? []), record].slice(-50),
    snapshots,
  });

  if (!hasFlag("--no-rebuild")) {
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
  console.error(`Resmi TEFAS gecmis aktarim hatasi: ${error.message}`);
  process.exit(1);
});

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const snapshotFile = path.join(
  rootDir,
  "data",
  "bist-tum-sirketleri.generated.json"
);
const outputFile = path.join(
  rootDir,
  "data",
  "hisse-hak-kullanimlari.generated.json"
);
const profilesDir = path.join(rootDir, "data", "hisseler");
const ratioAnalysisFile = path.join(
  rootDir,
  "app",
  "borsa",
  "oran-analizi",
  "data",
  "oran-analizi.json"
);
const generatedAt = new Date().toISOString().slice(0, 10);
const periodEnd = Math.floor(Date.now() / 1_000) + 86_400;
const writeChanges = process.argv.includes("--write");
const fromRatioAnalysis = process.argv.includes("--from-ratio-analysis");
const missingOnly = process.argv.includes("--missing-only");
const requestedCodes = new Set(
  process.argv
    .find((argument) => argument.startsWith("--codes="))
    ?.slice("--codes=".length)
    .split(",")
    .map((code) => code.trim().toUpperCase())
    .filter(Boolean) ?? []
);
const limit = Number(
  process.argv
    .find((argument) => argument.startsWith("--limit="))
    ?.slice("--limit=".length) ?? 0
);
const concurrency = Math.max(
  1,
  Math.min(
    6,
    Number(
      process.argv
        .find((argument) => argument.startsWith("--concurrency="))
        ?.slice("--concurrency=".length) ?? 4
    ) || 4
  )
);
const minRequestIntervalMs = Math.max(
  250,
  Number(
    process.argv
      .find((argument) => argument.startsWith("--request-interval="))
      ?.slice("--request-interval=".length) ?? 350
  ) || 350
);

let nextRequestAt = 0;

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJsonIfChanged(filePath, value) {
  const next = `${JSON.stringify(value, null, 2)}\n`;
  const current = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "";
  if (current === next) return false;

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, next, "utf8");
  return true;
}

function isoDateFromUnix(seconds) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Europe/Istanbul",
  }).formatToParts(new Date(Number(seconds) * 1_000));
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function decimalText(value, maximumFractionDigits = 8) {
  return Number(value)
    .toFixed(maximumFractionDigits)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

function splitRatioText(numerator, denominator) {
  const ratio = Number(numerator) / Number(denominator);
  return `${decimalText(ratio, 8)}:1`;
}

function uniqueSorted(records, keyOf) {
  const unique = new Map();
  for (const record of records) unique.set(keyOf(record), record);
  return [...unique.values()].sort((a, b) =>
    b.isoTarih.localeCompare(a.isoTarih)
  );
}

const turkishMonths = new Map([
  ["oca", "01"],
  ["şub", "02"],
  ["sub", "02"],
  ["mar", "03"],
  ["nis", "04"],
  ["may", "05"],
  ["haz", "06"],
  ["tem", "07"],
  ["ağu", "08"],
  ["agu", "08"],
  ["eyl", "09"],
  ["eki", "10"],
  ["kas", "11"],
  ["ara", "12"],
]);

function parseProfileDate(value) {
  const match = String(value ?? "")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .match(/^(\d{1,2})\s+([^\s]+)\s+(\d{4})$/);
  if (!match) return "";

  const month = turkishMonths.get(match[2].slice(0, 3));
  if (!month) return "";
  return `${match[3]}-${month}-${match[1].padStart(2, "0")}`;
}

function parseProfileRatio(value) {
  const number = Number(
    String(value ?? "")
      .split(":")[0]
      .replace(",", ".")
      .trim()
  );
  return Number.isFinite(number) && number > 0 ? number : null;
}

function existingSplits(code) {
  const profile = readJson(
    path.join(profilesDir, `${code.toLowerCase()}.json`),
    null
  );
  const rows = Array.isArray(profile?.temettuSermayeGecmisi)
    ? profile.temettuSermayeGecmisi
    : [];

  return rows
    .filter((row) =>
      /bölünme/i.test(`${row?.tur ?? row?.islem ?? ""} ${row?.aciklama ?? ""}`)
    )
    .map((row) => {
      const isoTarih = parseProfileDate(row?.yil ?? row?.tarih);
      const ratio = parseProfileRatio(row?.tutarOran ?? row?.oran);
      return {
        isoTarih,
        oran: ratio ? `${decimalText(ratio, 8)}:1` : "",
        katsayi: ratio,
        kaynak: "kunye-arsivi",
      };
    })
    .filter(
      (row) =>
        /^\d{4}-\d{2}-\d{2}$/.test(row.isoTarih) &&
        Number.isFinite(row.katsayi) &&
        row.katsayi > 0
    );
}

function daysBetween(first, second) {
  return (
    Math.abs(
      Date.parse(`${first}T00:00:00Z`) -
        Date.parse(`${second}T00:00:00Z`)
    ) / 86_400_000
  );
}

function sameSplit(first, second) {
  if (first.isoTarih === second.isoTarih) return true;
  const ratioDifference =
    Math.abs(first.katsayi - second.katsayi) /
    Math.max(first.katsayi, second.katsayi);
  return (
    daysBetween(first.isoTarih, second.isoTarih) <= 5 &&
    ratioDifference <= 0.01
  );
}

function mergeSplits(providerSplits, profileSplits) {
  const merged = [...profileSplits];
  for (const split of providerSplits) {
    if (!merged.some((existing) => sameSplit(existing, split))) {
      merged.push(split);
    }
  }
  return uniqueSorted(
    merged,
    (record) => `${record.isoTarih}|${record.oran}`
  );
}

async function waitForRequestSlot() {
  const now = Date.now();
  const wait = Math.max(0, nextRequestAt - now);
  nextRequestAt = Math.max(now, nextRequestAt) + minRequestIntervalMs;
  if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
}

async function fetchJson(url, attempts = 4) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    await waitForRequestSlot();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          accept: "application/json",
          "accept-language": "tr-TR,tr;q=0.9,en;q=0.8",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/134.0.0.0 Safari/537.36",
        },
      });
      const body = await response.text();

      if (response.status === 404) {
        return { status: "unavailable", body };
      }
      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}`);
        error.status = response.status;
        throw error;
      }

      return { status: "ok", body: JSON.parse(body) };
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        const rateLimited = error?.status === 429;
        const delay = rateLimited ? attempt * 8_000 : attempt * 1_500;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}

async function mapLimit(items, limitValue, mapper) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limitValue, items.length) }, () => worker())
  );
  return results;
}

async function fetchHistory(code) {
  const sourceSymbol = `${code}.IS`;
  const sourceUrl = `https://finance.yahoo.com/quote/${encodeURIComponent(sourceSymbol)}/history/`;
  const apiUrl =
    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sourceSymbol)}` +
    `?period1=0&period2=${periodEnd}&interval=1mo&events=div%2Csplits&includeAdjustedClose=false`;

  try {
    const response = await fetchJson(apiUrl);
    if (response.status === "unavailable") {
      return {
        code,
        record: {
          durum: "unavailable",
          kaynakSembol: sourceSymbol,
          kaynakUrl: sourceUrl,
          temettuler: [],
          bolunmeler: existingSplits(code),
        },
      };
    }

    const chart = response.body?.chart;
    const result = chart?.result?.[0];
    if (!result || chart?.error) {
      return {
        code,
        record: {
          durum: "unavailable",
          kaynakSembol: sourceSymbol,
          kaynakUrl: sourceUrl,
          temettuler: [],
          bolunmeler: existingSplits(code),
        },
      };
    }

    const currency = String(result.meta?.currency ?? "TRY").toUpperCase();
    const dividends = uniqueSorted(
      Object.values(result.events?.dividends ?? {})
        .map((event) => ({
          isoTarih: isoDateFromUnix(event.date),
          brut: Number(event.amount),
          paraBirimi: currency,
        }))
        .filter(
          (event) =>
            /^\d{4}-\d{2}-\d{2}$/.test(event.isoTarih) &&
            Number.isFinite(event.brut) &&
            event.brut > 0
        ),
      (event) => `${event.isoTarih}|${event.brut}`
    );
    const providerSplits = uniqueSorted(
      Object.values(result.events?.splits ?? {})
        .map((event) => {
          const numerator = Number(event.numerator);
          const denominator = Number(event.denominator);
          const ratio = numerator / denominator;
          return {
            isoTarih: isoDateFromUnix(event.date),
            oran: splitRatioText(numerator, denominator),
            katsayi: Number(decimalText(ratio, 8)),
            kaynak: "piyasa-verisi",
          };
        })
        .filter(
          (event) =>
            /^\d{4}-\d{2}-\d{2}$/.test(event.isoTarih) &&
            Number.isFinite(event.katsayi) &&
            event.katsayi > 0
        ),
      (event) => `${event.isoTarih}|${event.oran}`
    );
    const splits = mergeSplits(providerSplits, existingSplits(code));

    return {
      code,
      record: {
        durum: "ok",
        kaynakSembol: sourceSymbol,
        kaynakUrl: sourceUrl,
        temettuler: dividends,
        bolunmeler: splits,
      },
    };
  } catch (error) {
    return {
      code,
      record: {
        durum: "error",
        kaynakSembol: sourceSymbol,
        kaynakUrl: sourceUrl,
        hata: error?.message ?? String(error),
        temettuler: [],
        bolunmeler: existingSplits(code),
      },
    };
  }
}

async function main() {
  const source = fromRatioAnalysis
    ? readJson(ratioAnalysisFile, null)
    : readJson(snapshotFile, null);
  const sourceRows = fromRatioAnalysis ? source?.rows : source?.companies;
  if (!Array.isArray(sourceRows) || sourceRows.length === 0) {
    throw new Error(
      fromRatioAnalysis
        ? "Oran analizi verisi bulunamadi."
        : "BIST TUM sirket anlik goruntusu bulunamadi."
    );
  }

  const allCodes = [...new Set(
    sourceRows
      .filter((item) =>
        fromRatioAnalysis
          ? /^\d{2,4}-\d{2}$/.test(String(item?.["Dönem"] ?? "").trim())
          : true
      )
      .map((item) =>
        String(fromRatioAnalysis ? item?.Senet : item?.kod ?? "")
          .trim()
          .toUpperCase()
      )
      .filter((code) => /^[A-Z0-9]{2,6}$/.test(code))
  )].sort((a, b) => a.localeCompare(b, "tr"));
  const existing = readJson(outputFile, { profiles: {} });
  let targets = allCodes.filter(
    (code) => requestedCodes.size === 0 || requestedCodes.has(code)
  );
  if (missingOnly) {
    targets = targets.filter((code) => !existing?.profiles?.[code]);
  }
  if (limit > 0) targets = targets.slice(0, limit);

  console.log(
    `${fromRatioAnalysis ? "Oran analizi" : "BIST TUM"} pay kodu: ${allCodes.length}`
  );
  console.log(`Sorgulanacak pay kodu: ${targets.length}`);
  console.log(`Eszamanlilik: ${concurrency}`);
  console.log(`Asgari istek araligi: ${minRequestIntervalMs} ms`);

  const results = await mapLimit(targets, concurrency, async (code, index) => {
    const result = await fetchHistory(code);
    const dividendCount = result.record.temettuler.length;
    const splitCount = result.record.bolunmeler.length;
    console.log(
      `[${index + 1}/${targets.length}] ${code}: ${result.record.durum}, ` +
        `${dividendCount} temettu, ${splitCount} bolunme`
    );
    return result;
  });

  const profiles = { ...(existing?.profiles ?? {}) };
  for (const result of results) profiles[result.code] = result.record;

  const available = Object.values(profiles).filter(
    (profile) => profile?.durum === "ok"
  ).length;
  const unavailable = Object.values(profiles).filter(
    (profile) => profile?.durum === "unavailable"
  ).length;
  const errors = Object.values(profiles).filter(
    (profile) => profile?.durum === "error"
  ).length;
  const dividendRecords = Object.values(profiles).reduce(
    (sum, profile) => sum + (profile?.temettuler?.length ?? 0),
    0
  );
  const splitRecords = Object.values(profiles).reduce(
    (sum, profile) => sum + (profile?.bolunmeler?.length ?? 0),
    0
  );

  const document = {
    version: 1,
    generatedAt,
    source: {
      name: "Yahoo Finance Chart API",
      url: "https://finance.yahoo.com/",
      note:
        "Temettu ve guncel bolunme olaylari piyasa veri saglayicisindan alinir; eski kunye bolunme arsivi korunur. Kesin hak kullanimi bilgisi KAP bildirimleriyle kontrol edilmelidir.",
    },
    summary: {
      shareCodes: Object.keys(profiles).length,
      available,
      unavailable,
      errors,
      dividendRecords,
      splitRecords,
    },
    profiles: Object.fromEntries(
      Object.entries(profiles).sort(([a], [b]) => a.localeCompare(b, "tr"))
    ),
  };

  console.log(
    `Sonuc: ${available} erisilebilir, ${unavailable} bulunamadi, ${errors} hata`
  );
  console.log(`Kayit: ${dividendRecords} temettu, ${splitRecords} bolunme`);

  if (!writeChanges) {
    console.log("Degisiklik yapilmadi. Kaydetmek icin --write kullanin.");
    return;
  }

  const changed = writeJsonIfChanged(outputFile, document);
  console.log(changed ? `Yazildi: ${path.relative(rootDir, outputFile)}` : "Veri degismedi.");
  if (errors > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

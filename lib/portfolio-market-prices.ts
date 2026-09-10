import { kv } from "./kv";

export type PortfolioMarketCode = "USD" | "EUR" | "XAU_GR";

export type PortfolioMarketPrice = {
  code: PortfolioMarketCode;
  label: string;
  price: number;
  date: string;
  dailyReturn: number | null;
  source: string;
  sourceDetail: string;
  frequency: "workday";
};

type MarketPriceBundle = {
  fetchedAt: string;
  prices: Partial<Record<PortfolioMarketCode, PortfolioMarketPrice>>;
  warnings: string[];
};

type EvdsDiscovery = {
  groupCode: string;
  seriesCode: string;
  seriesName: string;
  discoveredAt: string;
};

const PRICE_CACHE_KEY = "hib:portfolio:market-prices:v2";
const EVDS_DISCOVERY_CACHE_KEY = "hib:portfolio:evds-gold-series:v1";
const PRICE_CACHE_MS = 30 * 60 * 1000;
const EVDS_DISCOVERY_TTL_SECONDS = 30 * 24 * 60 * 60;
const TCMB_DAILY_URL = "https://www.tcmb.gov.tr/kurlar/today.xml";
const EVDS_BASE = "https://evds3.tcmb.gov.tr/igmevdsms-dis";

let memoryCache: MarketPriceBundle | null = null;
let memoryEvdsDiscovery: EvdsDiscovery | null = null;

function parseFiniteNumber(value: unknown): number | null {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value !== "string") return null;
  const raw = value.trim();
  if (!raw || raw === "-" || raw.toLowerCase() === "null") return null;
  const normalized = raw.includes(",") && !raw.includes(".") ? raw.replace(",", ".") : raw.replace(/,/g, "");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function percentChange(current: number, previous: number | null) {
  if (!previous || previous <= 0) return null;
  return ((current - previous) / previous) * 100;
}

function normalizeText(value: unknown) {
  return String(value ?? "")
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/\s+/g, " ")
    .trim();
}

function formatIsoDateFromTcmb(value: string) {
  const match = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!match) return value;
  return `${match[3]}-${match[2]}-${match[1]}`;
}

function parseTcmbXml(xml: string) {
  const dateMatch = xml.match(/\bTarih="([^"]+)"/i);
  const date = dateMatch ? formatIsoDateFromTcmb(dateMatch[1]) : new Date().toISOString().slice(0, 10);

  function currency(code: "USD" | "EUR") {
    const blockMatch = xml.match(new RegExp(`<Currency[^>]*CurrencyCode="${code}"[\\s\\S]*?<\\/Currency>`, "i"));
    if (!blockMatch) return null;
    const block = blockMatch[0];
    const buyingMatch = block.match(/<ForexBuying>([^<]+)<\/ForexBuying>/i);
    const value = buyingMatch ? parseFiniteNumber(buyingMatch[1]) : null;
    return value;
  }

  return { date, USD: currency("USD"), EUR: currency("EUR") };
}

async function fetchText(url: string) {
  const response = await fetch(url, {
    cache: "no-store",
    headers: { "User-Agent": "HocaIleBorsa/1.0" },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

function archiveUrl(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  return `https://www.tcmb.gov.tr/kurlar/${year}${month}/${day}${month}${year}.xml`;
}

function previousIsoDate(isoDate: string, days: number) {
  const date = new Date(`${isoDate}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().slice(0, 10);
}

async function fetchPreviousTcmbRates(currentDate: string) {
  for (let offset = 1; offset <= 8; offset += 1) {
    const candidate = previousIsoDate(currentDate, offset);
    try {
      const parsed = parseTcmbXml(await fetchText(archiveUrl(candidate)));
      if (parsed.USD || parsed.EUR) return parsed;
    } catch {
      // Resmi tatil/hafta sonu dosyası bulunmayabilir; önceki güne geç.
    }
  }
  return null;
}

async function fetchTcmbCurrencyPrices(): Promise<PortfolioMarketPrice[]> {
  const current = parseTcmbXml(await fetchText(TCMB_DAILY_URL));
  if (!current.USD || !current.EUR) throw new Error("TCMB döviz kurları okunamadı.");
  const previous = await fetchPreviousTcmbRates(current.date);
  return [
    {
      code: "USD",
      label: "Dolar",
      price: current.USD,
      date: current.date,
      dailyReturn: percentChange(current.USD, previous?.USD ?? null),
      source: "TCMB",
      sourceDetail: "TCMB resmi döviz alış kuru",
      frequency: "workday",
    },
    {
      code: "EUR",
      label: "Euro",
      price: current.EUR,
      date: current.date,
      dailyReturn: percentChange(current.EUR, previous?.EUR ?? null),
      source: "TCMB",
      sourceDetail: "TCMB resmi döviz alış kuru",
      frequency: "workday",
    },
  ];
}

function evdsApiKey() {
  return process.env.EVDS_API_KEY || process.env.TCMB_EVDS_API_KEY || "";
}

async function fetchEvds(path: string) {
  const key = evdsApiKey();
  if (!key) throw new Error("EVDS_API_KEY tanımlı değil.");
  const response = await fetch(`${EVDS_BASE}/${path}`, {
    cache: "no-store",
    headers: { key, "User-Agent": "HocaIleBorsa/1.0" },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`EVDS HTTP ${response.status}`);
  return response.json() as Promise<unknown>;
}

function collectRows(value: unknown, depth = 0): Array<Record<string, unknown>> {
  if (depth > 4 || value === null || value === undefined) return [];
  if (Array.isArray(value)) {
    return value.flatMap((item) => collectRows(item, depth + 1));
  }
  if (typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  const values = Object.values(record);
  const looksLikeRow = values.some((item) => typeof item === "string" || typeof item === "number");
  const nestedRows = values.flatMap((item) => collectRows(item, depth + 1));
  return looksLikeRow ? [record, ...nestedRows] : nestedRows;
}

function field(row: Record<string, unknown>, ...names: string[]) {
  const entries = Object.entries(row);
  for (const name of names) {
    const found = entries.find(([key]) => key.toLowerCase() === name.toLowerCase());
    if (found) return found[1];
  }
  return undefined;
}

function scoreGoldGroup(row: Record<string, unknown>) {
  const tr = normalizeText(field(row, "DATAGROUP_NAME", "datagroupName"));
  const en = normalizeText(field(row, "DATAGROUP_NAME_ENG", "datagroupNameEng"));
  const source = normalizeText(field(row, "DATASOURCE", "SOURCE", "source"));
  const text = `${tr} ${en}`;
  if (!text.includes("altin") && !text.includes("gold")) return -1;
  if (text.includes("arsiv") || text.includes("archive")) return -1;
  let score = 0;
  if (text.includes("altin piyasasi") || text.includes("gold market")) score += 10;
  if (text.includes("bist") || source.includes("borsa")) score += 8;
  if (text.includes("fiyat") || text.includes("price")) score += 2;
  return score;
}

function scoreGoldSeries(row: Record<string, unknown>) {
  const tr = normalizeText(field(row, "SERIE_NAME", "serieName"));
  const en = normalizeText(field(row, "SERIE_NAME_ENG", "serieNameEng"));
  const text = `${tr} ${en}`;
  let score = 0;
  if (text.includes("kapan") || text.includes("closing") || text.includes("close")) score += 10;
  if (text.includes("tl/kg") || text.includes("try/kg") || text.includes("tl kg") || text.includes("try kg")) score += 10;
  if (text.includes("turk") && text.includes("kg")) score += 5;
  if (text.includes("agirlikli") || text.includes("weighted")) score -= 4;
  if (text.includes("hacim") || text.includes("volume") || text.includes("miktar") || text.includes("amount")) score -= 10;
  if (text.includes("usd") || text.includes("ons") || text.includes("ounce")) score -= 8;
  return score;
}

async function discoverGoldSeries(): Promise<EvdsDiscovery> {
  if (memoryEvdsDiscovery) return memoryEvdsDiscovery;
  if (kv) {
    const cached = await kv.get<EvdsDiscovery>(EVDS_DISCOVERY_CACHE_KEY);
    if (cached?.groupCode && cached?.seriesCode) {
      memoryEvdsDiscovery = cached;
      return cached;
    }
  }

  const groupsPayload = await fetchEvds("datagroups/mode=0&type=json");
  const groups = collectRows(groupsPayload)
    .map((row) => ({ row, score: scoreGoldGroup(row) }))
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score);
  const group = groups[0]?.row;
  const groupCode = String(field(group ?? {}, "DATAGROUP_CODE", "datagroupCode") ?? "").trim();
  if (!groupCode) throw new Error("EVDS Borsa İstanbul altın veri grubu bulunamadı.");

  const seriesPayload = await fetchEvds(`serieList/type=json&code=${encodeURIComponent(groupCode)}`);
  const series = collectRows(seriesPayload)
    .filter((row) => String(field(row, "SERIE_CODE", "serieCode") ?? "").trim())
    .map((row) => ({ row, score: scoreGoldSeries(row) }))
    .sort((a, b) => b.score - a.score);
  const selected = series[0];
  if (!selected || selected.score < 8) throw new Error("EVDS altın kapanış serisi bulunamadı.");
  const seriesCode = String(field(selected.row, "SERIE_CODE", "serieCode") ?? "").trim();
  const seriesName = String(field(selected.row, "SERIE_NAME", "SERIE_NAME_ENG", "serieName") ?? seriesCode).trim();
  if (!seriesCode) throw new Error("EVDS altın seri kodu bulunamadı.");

  const discovery = { groupCode, seriesCode, seriesName, discoveredAt: new Date().toISOString() };
  memoryEvdsDiscovery = discovery;
  if (kv) await kv.set(EVDS_DISCOVERY_CACHE_KEY, discovery, { ex: EVDS_DISCOVERY_TTL_SECONDS });
  return discovery;
}

function ddMmYyyy(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  return `${day}-${month}-${year}`;
}

function parseEvdsDate(row: Record<string, unknown>) {
  const raw = String(field(row, "Tarih", "DATE", "Date", "tarih") ?? "").trim();
  const match = raw.match(/^(\d{2})[-./](\d{2})[-./](\d{4})$/);
  if (match) return `${match[3]}-${match[2]}-${match[1]}`;
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  return "";
}

function extractEvdsSeriesValue(row: Record<string, unknown>, seriesCode: string) {
  const normalizedSeriesKey = seriesCode.replace(/\./g, "_").toLowerCase();
  for (const [key, value] of Object.entries(row)) {
    const normalizedKey = key.replace(/\./g, "_").toLowerCase();
    if (normalizedKey === normalizedSeriesKey || normalizedKey.startsWith(`${normalizedSeriesKey}_`)) {
      const number = parseFiniteNumber(value);
      if (number !== null) return number;
    }
  }
  for (const [key, value] of Object.entries(row)) {
    if (/tarih|date|unix|yearweek|frequency/i.test(key)) continue;
    const number = parseFiniteNumber(value);
    if (number !== null) return number;
  }
  return null;
}

async function fetchGoldPrice(): Promise<PortfolioMarketPrice> {
  const discovery = await discoverGoldSeries();
  const today = new Date().toISOString().slice(0, 10);
  const start = previousIsoDate(today, 20);
  const payload = await fetchEvds(
    `series=${encodeURIComponent(discovery.seriesCode)}&startDate=${ddMmYyyy(start)}&endDate=${ddMmYyyy(today)}&type=json`,
  );
  const observations = collectRows(payload)
    .map((row) => ({ date: parseEvdsDate(row), value: extractEvdsSeriesValue(row, discovery.seriesCode) }))
    .filter((row): row is { date: string; value: number } => Boolean(row.date) && row.value !== null)
    .sort((a, b) => a.date.localeCompare(b.date));
  if (!observations.length) throw new Error("EVDS gram altın kapanış verisi alınamadı.");
  const latest = observations[observations.length - 1];
  const previous = observations.length > 1 ? observations[observations.length - 2] : null;
  const pricePerGram = latest.value / 1000;
  const previousPerGram = previous ? previous.value / 1000 : null;
  if (!Number.isFinite(pricePerGram) || pricePerGram <= 0) throw new Error("EVDS altın fiyatı geçersiz.");
  return {
    code: "XAU_GR",
    label: "Gram Altın",
    price: pricePerGram,
    date: latest.date,
    dailyReturn: percentChange(pricePerGram, previousPerGram),
    source: "TCMB EVDS / Borsa İstanbul",
    sourceDetail: "Borsa İstanbul Altın Piyasası TRY/KG kapanışından TL/gram",
    frequency: "workday",
  };
}

function isFresh(bundle: MarketPriceBundle | null) {
  if (!bundle?.fetchedAt) return false;
  const time = Date.parse(bundle.fetchedAt);
  return Number.isFinite(time) && Date.now() - time < PRICE_CACHE_MS;
}

async function readCachedBundle() {
  if (isFresh(memoryCache)) return memoryCache;
  if (!kv) return memoryCache;
  const cached = await kv.get<MarketPriceBundle>(PRICE_CACHE_KEY);
  if (cached) memoryCache = cached;
  return cached;
}

async function writeCachedBundle(bundle: MarketPriceBundle) {
  memoryCache = bundle;
  if (kv) await kv.set(PRICE_CACHE_KEY, bundle);
}

export async function getPortfolioMarketPrices(): Promise<MarketPriceBundle> {
  const cached = await readCachedBundle();
  if (isFresh(cached)) return cached as MarketPriceBundle;

  const warnings: string[] = [];
  const nextPrices: Partial<Record<PortfolioMarketCode, PortfolioMarketPrice>> = {
    ...(cached?.prices ?? {}),
  };

  const [currencies, gold] = await Promise.allSettled([fetchTcmbCurrencyPrices(), fetchGoldPrice()]);
  if (currencies.status === "fulfilled") {
    for (const item of currencies.value) nextPrices[item.code] = item;
  } else {
    warnings.push(`Dolar/Euro: ${currencies.reason instanceof Error ? currencies.reason.message : "veri alınamadı"}`);
  }
  if (gold.status === "fulfilled") {
    nextPrices.XAU_GR = gold.value;
  } else {
    warnings.push(`Gram Altın: ${gold.reason instanceof Error ? gold.reason.message : "veri alınamadı"}`);
  }

  const bundle: MarketPriceBundle = {
    fetchedAt: new Date().toISOString(),
    prices: nextPrices,
    warnings,
  };
  await writeCachedBundle(bundle);
  return bundle;
}

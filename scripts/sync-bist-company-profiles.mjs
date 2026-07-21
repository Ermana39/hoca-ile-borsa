import fs from "node:fs";
import path from "node:path";

const KAP_INDEX_URL =
  "https://www.kap.org.tr/tr/Endeksler?indice=BIST%20T%C3%9CM";
const KAP_PROFILE_BASE = "https://www.kap.org.tr/tr/sirket-bilgileri/genel";
const PROFILES_DIR = path.join(process.cwd(), "data", "hisseler");

const inspectCode = process.argv
  .find((argument) => argument.startsWith("--inspect="))
  ?.slice("--inspect=".length)
  .trim()
  .toUpperCase();

function decodeFlightText(html) {
  const chunks = [];
  const pattern =
    /self\.__next_f\.push\(\[1,("(?:\\.|[^"\\])*")\]\)/g;
  let match;

  while ((match = pattern.exec(html))) {
    try {
      chunks.push(JSON.parse(match[1]));
    } catch {
      // Bir bozuk parça diğer sunucu verilerinin okunmasını engellemesin.
    }
  }

  return chunks.join("");
}

function readJsonValue(text, initialOffset) {
  let offset = initialOffset;
  while (/\s/.test(text[offset] ?? "")) offset += 1;

  const opening = text[offset];
  if (opening !== "{" && opening !== "[") return null;

  const closing = opening === "{" ? "}" : "]";
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = offset; index < text.length; index += 1) {
    const character = text[index];

    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }

    if (character === '"') {
      inString = true;
      continue;
    }

    if (character === opening) depth += 1;
    else if (character === closing) depth -= 1;

    if (depth === 0) {
      const raw = text.slice(offset, index + 1);
      try {
        return { value: JSON.parse(raw), end: index + 1 };
      } catch {
        return null;
      }
    }
  }

  return null;
}

function findObjectByMarker(text, marker, predicate = () => true) {
  let searchFrom = 0;

  while (searchFrom < text.length) {
    const markerIndex = text.indexOf(marker, searchFrom);
    if (markerIndex === -1) return null;

    const objectStart = text.lastIndexOf("{", markerIndex);
    const parsed = objectStart >= 0 ? readJsonValue(text, objectStart) : null;
    if (parsed && predicate(parsed.value)) return parsed.value;

    searchFrom = markerIndex + marker.length;
  }

  return null;
}

function extractItemObjects(flightText) {
  const marker = '"itemObject":';
  const items = new Map();
  let searchFrom = 0;

  while (searchFrom < flightText.length) {
    const markerIndex = flightText.indexOf(marker, searchFrom);
    if (markerIndex === -1) break;

    const parsed = readJsonValue(flightText, markerIndex + marker.length);
    if (parsed?.value?.itemKey) items.set(parsed.value.itemKey, parsed.value);

    searchFrom = parsed?.end ?? markerIndex + marker.length;
  }

  return Array.from(items.values());
}

async function fetchText(url, attempts = 3) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45_000);

    try {
      const response = await fetch(url, {
        redirect: "follow",
        signal: controller.signal,
        headers: {
          accept: "text/html,application/xhtml+xml",
          "user-agent":
            "Mozilla/5.0 (compatible; HocaIleBorsaProfileSync/1.0; +https://www.hocaileborsa.com)",
        },
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 750));
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}

async function getBistTumCompanies() {
  const html = await fetchText(KAP_INDEX_URL);
  const flightText = decodeFlightText(html);
  const index = findObjectByMarker(
    flightText,
    '"code":"XUTUM"',
    (value) => value?.code === "XUTUM" && Array.isArray(value.content)
  );

  if (!index) throw new Error("KAP BIST TÜM listesi ayrıştırılamadı.");

  return index.content
    .filter(
      (company) =>
        /^[A-Z0-9]{2,6}$/.test(company.stockCode ?? "") &&
        company.title &&
        company.mkkMemberOid
    )
    .sort((a, b) => a.stockCode.localeCompare(b.stockCode, "tr"));
}

async function main() {
  const companies = await getBistTumCompanies();
  const existingCodes = new Set(
    fs
      .readdirSync(PROFILES_DIR)
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(/\.json$/i, "").toUpperCase())
  );
  const missing = companies.filter(
    (company) => !existingCodes.has(company.stockCode)
  );

  console.log(`BIST TÜM: ${companies.length}`);
  console.log(`Mevcut künye: ${existingCodes.size}`);
  console.log(`Eksik künye: ${missing.length}`);

  if (!inspectCode) return;

  const company = companies.find((item) => item.stockCode === inspectCode);
  if (!company) throw new Error(`${inspectCode} BIST TÜM listesinde bulunamadı.`);

  const profileUrl = `${KAP_PROFILE_BASE}/${company.mkkMemberOid}`;
  const profileHtml = await fetchText(profileUrl);
  const items = extractItemObjects(decodeFlightText(profileHtml));

  console.log(`\n${company.stockCode} | ${company.title}`);
  console.log(profileUrl);
  for (const item of items) {
    console.log(`\n[${item.itemKey}] ${item.itemName}`);
    console.log(JSON.stringify(item.value, null, 2));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const newsFile = path.join(root, "app", "data", "news.ts");
const datesFile = path.join(root, "app", "data", "haber-tarihleri.generated.json");
const timeZone = "Europe/Istanbul";
const offset = "+03:00";

function getParts(date) {
  const parts = new Intl.DateTimeFormat("tr-TR", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function toSiteIso(date) {
  const parts = getParts(date);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}${offset}`;
}

function getFileTime(href) {
  const segments = href.split("/").filter(Boolean).slice(1);
  const filePath = path.join(root, "app", "haber", ...segments, "page.tsx");
  const stat = statSync(filePath);
  return toSiteIso(stat.birthtimeMs > 0 ? stat.birthtime : stat.mtime);
}

function readDates() {
  try {
    return JSON.parse(readFileSync(datesFile, "utf8"));
  } catch {
    return {};
  }
}

const source = readFileSync(newsFile, "utf8");
const matches = source.matchAll(
  /href:\s*"(?<href>\/haber\/[^"]+)"[\s\S]*?publishedAt:\s*"auto"/g
);

const dates = readDates();
let changed = false;
const missing = [];

for (const match of matches) {
  const href = match.groups?.href;
  if (!href || dates[href]) continue;

  if (process.env.CI || process.env.VERCEL) {
    missing.push(href);
    continue;
  }

  dates[href] = getFileTime(href);
  changed = true;
}

if (missing.length > 0) {
  throw new Error(
    [
      "Eksik otomatik haber tarihi var.",
      "Deploy'dan once yerelde `npm run news-dates` calistirip app/data/haber-tarihleri.generated.json dosyasini commit edin.",
      ...missing.map((href) => `- ${href}`),
    ].join("\n")
  );
}

if (changed) {
  const sorted = Object.fromEntries(
    Object.entries(dates).sort(([a], [b]) => a.localeCompare(b))
  );
  writeFileSync(datesFile, `${JSON.stringify(sorted, null, 2)}\n`);
}

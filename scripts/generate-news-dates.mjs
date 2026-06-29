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
function getNewsBlocks(value) {
  const blocks = [];
  const lines = value.slice(value.indexOf("export const newsItems")).split(/\r?\n/);
  let current = [];

  for (const line of lines) {
    if (/^\s{2}\{\s*$/.test(line)) {
      current = [line];
      continue;
    }

    if (current.length === 0) continue;

    current.push(line);

    if (/^\s{2}\},\s*$/.test(line)) {
      blocks.push(current.join("\n"));
      current = [];
    }
  }

  return blocks;
}

const blocks = getNewsBlocks(source);

const dates = readDates();
let changed = false;
const autoHrefs = new Set();

for (const block of blocks) {
  if (!/publishedAt:\s*"auto"/.test(block)) continue;

  const href = block.match(/href:\s*"(?<href>\/haber\/[^"]+)"/)?.groups?.href;
  if (!href) continue;

  autoHrefs.add(href);
  if (dates[href]) continue;

  dates[href] = getFileTime(href);
  changed = true;
}

for (const href of Object.keys(dates)) {
  if (autoHrefs.has(href)) continue;
  delete dates[href];
  changed = true;
}

if (changed) {
  const sorted = Object.fromEntries(
    Object.entries(dates).sort(([a], [b]) => a.localeCompare(b))
  );
  writeFileSync(datesFile, `${JSON.stringify(sorted, null, 2)}\n`);
}

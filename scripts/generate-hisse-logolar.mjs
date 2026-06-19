// Hisse logolarını şirket domaininden (kurumsalBilgiler.web) Google favicon
// servisiyle indirir, base64 data URI olarak data/hisse-logolar.generated.json
// dosyasına yazar. Çalışma anında dış istek YOK: logolar sayfanın veri yüküne
// gömülür (kenar isteği değil veri aktarımı). Yeni hisse eklenince yeniden çalıştır:
//   node scripts/generate-hisse-logolar.mjs            (hepsi)
//   node scripts/generate-hisse-logolar.mjs --limit 8  (örnek)
import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data", "hisseler");
const OUT = path.join(process.cwd(), "data", "hisse-logolar.generated.json");

const limitArg = process.argv.indexOf("--limit");
const LIMIT = limitArg !== -1 ? Number(process.argv[limitArg + 1]) : Infinity;
const SAMPLE = process.argv.includes("--sample-out");

function domainFromWeb(web) {
  if (!web || typeof web !== "string") return null;
  let s = web.trim();
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  try {
    return new URL(s).hostname.replace(/^www\./i, "");
  } catch {
    return null;
  }
}

const files = readdirSync(DIR)
  .filter((f) => f.toLowerCase().endsWith(".json"))
  .slice(0, LIMIT);

const map = {};
let ok = 0;
let fail = 0;
const sample = [];

for (const f of files) {
  let veri;
  try {
    veri = JSON.parse(readFileSync(path.join(DIR, f), "utf-8"));
  } catch {
    fail++;
    continue;
  }
  const kod = (veri.kod || f.replace(/\.json$/i, "")).toUpperCase();
  const domain = domainFromWeb(veri?.kurumsalBilgiler?.web);
  if (!domain) {
    fail++;
    console.log(`SKIP ${kod}: domain yok`);
    continue;
  }
  const url = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      fail++;
      console.log(`FAIL ${kod} (${domain}): http ${res.status}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 100) {
      fail++;
      console.log(`FAIL ${kod} (${domain}): boş/çok küçük (${buf.length}b)`);
      continue;
    }
    const ct = res.headers.get("content-type") || "image/png";
    const dataUri = `data:${ct};base64,${buf.toString("base64")}`;
    map[kod] = dataUri;
    if (sample.length < 24) sample.push({ kod, domain, bytes: buf.length, dataUri });
    ok++;
    console.log(`OK   ${kod} (${domain}): ${buf.length}b`);
  } catch (e) {
    fail++;
    console.log(`ERR  ${kod} (${domain}): ${e.message}`);
  }
}

const json = JSON.stringify(map);
if (!SAMPLE) {
  writeFileSync(OUT, json);
}
if (SAMPLE) {
  writeFileSync(
    path.join(process.cwd(), "tmp-logo-sample.json"),
    JSON.stringify(sample)
  );
}
console.log(
  `\nok=${ok} fail=${fail} total=${files.length} jsonBytes=${json.length}`
);

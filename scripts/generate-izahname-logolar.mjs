// İzahname (halka arz) logolarını üretir. Logolar base64 data URI olarak
// data/izahname-logolar.generated.json'a yazılır; çalışma anında dış istek YOK.
//
// KAYNAK ÖNCELİĞİ (her şirket için):
//   1) halkarz.com — şirket adına göre eşleşen gerçek logo (sharp ile 96px webp'e
//      küçültülür). Türk halka arzlarının logo arşivi olduğu için birincil kaynak.
//   2) data/izahname-logo-domainleri.json seed'inde domain varsa favicon (yedek).
// Eşleşme/logo bulunamayan şirket SirketLogo'da baş-harf avatar'ına düşer.
//
// Çalıştır:  node scripts/generate-izahname-logolar.mjs
import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";
import sharp from "sharp";

const HALKA_ARZ_DIR = path.join(process.cwd(), "data", "halka-arz");
const SEED = path.join(process.cwd(), "data", "izahname-logo-domainleri.json");
const OUT = path.join(process.cwd(), "data", "izahname-logolar.generated.json");

// Onaylı izahnameler JSON değil, sayfada elle tutuluyor; logo eşleşmesi için burada.
const ONAYLI = [
  { slug: "beta-enerji-teknoloji-betae", ad: "Beta Enerji ve Teknoloji A.Ş." },
  { slug: "ekinciler-demir-celik-ekdmr", ad: "Ekinciler Demir ve Çelik Sanayi A.Ş." },
];

const UA = { "User-Agent": "Mozilla/5.0" };

function norm(s) {
  return (s || "")
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ç/g, "c").replace(/ö/g, "o").replace(/i̇/g, "i")
    .replace(/\b(a\.?s\.?|anonim|sirketi|sti|san|sanayi|sanayii|tic|ticaret|ve|gida|holding|limited|ltd|dis|enerji|elektrik|gayrimenkul|yatirim|ortakligi)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}
const keyOf = (s) => norm(s).split(" ").slice(0, 2).join(" ");

function domainNormalize(web) {
  if (!web || typeof web !== "string") return null;
  let s = web.trim();
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  try { return new URL(s).hostname.replace(/^www\./i, ""); } catch { return null; }
}

// --- halkarz.com logo arşivini çek ---
async function halkarzIndex() {
  const r = await fetch("https://halkarz.com/", { headers: UA });
  const html = await r.text();
  const re = /<a href="(https:\/\/halkarz\.com\/[^"]+)" title="([^"]+)"><img src="([^"]+)" class="slogo">/g;
  const exact = new Map();
  const byKey = new Map();
  let n = 0;
  for (const m of html.matchAll(re)) {
    const ad = m[2], logo = m[3];
    if (!exact.has(norm(ad))) exact.set(norm(ad), logo);
    const k = keyOf(ad);
    if (!byKey.has(k)) byKey.set(k, logo);
    n++;
  }
  console.log(`halkarz giriş: ${n}`);
  return { exact, byKey };
}

function halkarzLogoUrl(idx, ad) {
  return idx.exact.get(norm(ad)) || idx.byKey.get(keyOf(ad)) || null;
}

// 96px webp'e küçült, base64 data URI döndür
async function kucultBase64(buf) {
  const out = await sharp(buf)
    .resize(96, 96, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  return `data:image/webp;base64,${out.toString("base64")}`;
}

// favicon yedeği (yalnızca halkarz eşleşmesi yoksa)
async function faviconBase64(domain) {
  for (const url of [
    `https://www.google.com/s2/favicons?sz=64&domain=${domain}`,
    `https://${domain}/favicon.ico`,
  ]) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      if (!res.ok) continue;
      const ct = res.headers.get("content-type") || "";
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 100) continue;
      if (url.endsWith("/favicon.ico") && !ct.includes("image")) continue;
      return `data:${ct.includes("image") ? ct : "image/png"};base64,${buf.toString("base64")}`;
    } catch { /* dene sıradakini */ }
  }
  return null;
}

// --- şirket listesi: taslak JSON'lar + onaylı ---
const sirketler = [];
for (const f of readdirSync(HALKA_ARZ_DIR)) {
  if (!f.endsWith(".json") || f.startsWith("_")) continue;
  const slug = f.replace(/\.json$/i, "");
  try {
    const v = JSON.parse(readFileSync(path.join(HALKA_ARZ_DIR, f), "utf-8"));
    sirketler.push({ slug, ad: v.sirketAdi || slug, web: v.web });
  } catch { /* bozuk dosya atla */ }
}
sirketler.push(...ONAYLI);

const seed = existsSync(SEED) ? JSON.parse(readFileSync(SEED, "utf-8")) : {};
const idx = await halkarzIndex();

const map = {};
let halk = 0, fav = 0, yok = 0;
const eslesmeyen = [];

for (const s of sirketler) {
  const logoUrl = halkarzLogoUrl(idx, s.ad);
  if (logoUrl) {
    try {
      const ir = await fetch(logoUrl, { headers: UA });
      if (ir.ok) {
        const buf = Buffer.from(await ir.arrayBuffer());
        if (buf.length >= 100) {
          map[s.slug] = await kucultBase64(buf);
          halk++;
          continue;
        }
      }
    } catch { /* favicon'a düş */ }
  }
  // yedek: seed domaini ya da JSON web
  const domain = domainNormalize(seed[s.slug]) || domainNormalize(s.web);
  if (domain) {
    const fb = await faviconBase64(domain);
    if (fb) { map[s.slug] = fb; fav++; continue; }
  }
  yok++;
  if (eslesmeyen.length < 30) eslesmeyen.push(s.ad);
}

writeFileSync(OUT, JSON.stringify(map));
console.log(`\nhalkarz=${halk} favicon=${fav} yok=${yok} toplam=${sirketler.length} jsonBytes=${JSON.stringify(map).length}`);
if (eslesmeyen.length) {
  console.log("--- logosuz (avatar'a düşecek) ---");
  eslesmeyen.forEach((a) => console.log("  -", a));
}

// İzahname (halka arz) logolarını üretir. Hisse sisteminin aynısı: logolar
// base64 data URI olarak data/izahname-logolar.generated.json'a yazılır; çalışma
// anında dış istek YOK (kenar isteği değil veri aktarımı).
//
// Domain kaynakları (slug -> domain):
//   1) data/izahname-logo-domainleri.json  (elle eklenen seed; onaylı + taslak)
//   2) data/halka-arz/<slug>.json içindeki "web" alanı (varsa)
// Yeni logo eklemek için seed dosyasına bir satır ekle (veya taslak JSON'una
// "web" alanı koy) ve yeniden çalıştır:
//   node scripts/generate-izahname-logolar.mjs
import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";

const HALKA_ARZ_DIR = path.join(process.cwd(), "data", "halka-arz");
const SEED = path.join(process.cwd(), "data", "izahname-logo-domainleri.json");
const OUT = path.join(process.cwd(), "data", "izahname-logolar.generated.json");

function domainNormalize(web) {
  if (!web || typeof web !== "string") return null;
  let s = web.trim();
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  try {
    return new URL(s).hostname.replace(/^www\./i, "");
  } catch {
    return null;
  }
}

// slug -> domain haritasını birleştir
const domainler = {};

// 1) seed
if (existsSync(SEED)) {
  const seed = JSON.parse(readFileSync(SEED, "utf-8"));
  for (const [slug, web] of Object.entries(seed)) {
    const d = domainNormalize(web);
    if (d) domainler[slug] = d;
  }
}

// 2) taslak JSON "web" alanı (seed'i ezmez; seed önceliklidir)
try {
  for (const f of readdirSync(HALKA_ARZ_DIR)) {
    if (!f.endsWith(".json") || f.startsWith("_")) continue;
    const slug = f.replace(/\.json$/i, "");
    if (domainler[slug]) continue;
    try {
      const veri = JSON.parse(readFileSync(path.join(HALKA_ARZ_DIR, f), "utf-8"));
      const d = domainNormalize(veri?.web);
      if (d) domainler[slug] = d;
    } catch {
      /* bozuk dosyayı atla */
    }
  }
} catch {
  /* dizin yoksa atla */
}

const map = {};
let ok = 0;
let fail = 0;

// Bir görseli dener; geçerli (image, >100b) ise {ct, buf} döner yoksa null.
async function denele(url) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") || "";
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 100) return null;
    if (url.endsWith("/favicon.ico") && !ct.includes("image")) return null;
    return { ct: ct.includes("image") ? ct : "image/png", buf };
  } catch {
    return null;
  }
}

for (const [slug, domain] of Object.entries(domainler)) {
  // 1) Google favicon servisi, 2) doğrudan sitenin /favicon.ico'su
  const sonuc =
    (await denele(`https://www.google.com/s2/favicons?sz=64&domain=${domain}`)) ||
    (await denele(`https://${domain}/favicon.ico`));
  if (!sonuc) {
    fail++;
    console.log(`FAIL ${slug} (${domain})`);
    continue;
  }
  map[slug] = `data:${sonuc.ct};base64,${sonuc.buf.toString("base64")}`;
  ok++;
  console.log(`OK   ${slug} (${domain}): ${sonuc.buf.length}b`);
}

writeFileSync(OUT, JSON.stringify(map));
console.log(`\nok=${ok} fail=${fail} jsonBytes=${JSON.stringify(map).length}`);

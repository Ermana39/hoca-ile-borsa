import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const hisseDir = path.join(root, "data", "hisseler");
const halkaArzDir = path.join(root, "data", "halka-arz");
const haberDir = path.join(root, "data", "haberler");

function jsonDosyalari(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json") && !file.startsWith("_"));
}

function readJson(dir, file) {
  return JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
}

function doluListe(value) {
  return (
    Array.isArray(value) &&
    value.filter((item) => typeof item === "string" && item.trim()).length >= 3
  );
}

function hisseIndexlenebilir(profile) {
  const analiz = profile.ozgunAnaliz ?? {};
  const paragraflar = (profile.hakkinda ?? []).filter(
    (item) => typeof item === "string" && item.trim().length >= 80
  );

  return Boolean(
    paragraflar.length >= 2 &&
      analiz.isModeli?.trim().length >= 180 &&
      doluListe(analiz.gelirKaynaklari) &&
      doluListe(analiz.gucluYanlar) &&
      doluListe(analiz.riskler)
  );
}

const hisseler = jsonDosyalari(hisseDir).map((file) => readJson(hisseDir, file));
let ikincilPaySinifi = 0;
let indexlenebilirHisse = 0;

for (const hisse of hisseler) {
  const canonical = hisse.borsaBilgileri?.anaHisseKodu;
  if (canonical && canonical.toUpperCase() !== hisse.kod.toUpperCase()) {
    ikincilPaySinifi += 1;
    continue;
  }
  if (hisseIndexlenebilir(hisse)) indexlenebilirHisse += 1;
}

const halkaArzlar = jsonDosyalari(halkaArzDir).map((file) =>
  readJson(halkaArzDir, file)
);
const onayli = halkaArzlar.filter(
  (kayit) => kayit.seo?.contentStatus === "onayli"
).length;
const taslak = halkaArzlar.length - onayli;

function haberIndexlenebilir(kayit) {
  return kayit.durum === "yayinda";
}

const yayinlanmisHaberler = jsonDosyalari(haberDir)
  .map((file) => readJson(haberDir, file))
  .filter((kayit) => kayit.durum === "yayinda");
const indexlenebilirHaber = yayinlanmisHaberler.filter(
  haberIndexlenebilir
).length;

const politika = fs.readFileSync(
  path.join(root, "lib", "indexleme-politikasi.ts"),
  "utf8"
);
const taslakMetadata = fs.readFileSync(
  path.join(root, "app", "halka-arz", "taslak-izahnameler", "[slug]", "page.tsx"),
  "utf8"
);
const surecHaberiMetadata = fs.readFileSync(
  path.join(root, "components", "HalkaArzSurecHaberi.tsx"),
  "utf8"
);
const sitemap = fs.readFileSync(path.join(root, "app", "sitemap.ts"), "utf8");
const anaSayfa = fs.readFileSync(path.join(root, "app", "page.tsx"), "utf8");
const kokLayout = fs.readFileSync(path.join(root, "app", "layout.tsx"), "utf8");
const nextConfig = fs.readFileSync(path.join(root, "next.config.js"), "utf8");

function kaynakDosyalariniBul(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const tamYol = path.join(dir, entry.name);
    if (entry.isDirectory()) return kaynakDosyalariniBul(tamYol);
    return /\.(?:js|mjs|ts|tsx)$/.test(entry.name) ? [tamYol] : [];
  });
}

const siteKaynakDosyalari = ["app", "components", "lib"].flatMap((dir) =>
  kaynakDosyalariniBul(path.join(root, dir))
);

const wwwOlmayanSiteUrlDosyalari = [];
const tutarsizMarkaAdiDosyalari = [];

for (const file of siteKaynakDosyalari) {
  const kaynak = fs.readFileSync(file, "utf8");
  const goreliYol = path.relative(root, file);
  if (/https?:\/\/hocaileborsa\.com/i.test(kaynak)) {
    wwwOlmayanSiteUrlDosyalari.push(goreliYol);
  }
  if (kaynak.includes("Hoca ile Borsa")) {
    tutarsizMarkaAdiDosyalari.push(goreliYol);
  }
}

const hatalar = [];
if (indexlenebilirHaber !== yayinlanmisHaberler.length) {
  hatalar.push("Yayındaki JSON haberlerinden biri noindex olarak işaretleniyor.");
}
if (!politika.includes("HALKA_ARZ_TASLAK_DETAY_DESENI")) {
  hatalar.push("Taslak izahname noindex yolu tanımlı değil.");
}
if (!taslakMetadata.includes("index: false")) {
  hatalar.push("Taslak izahname sayfalarında noindex metadata koruması yok.");
}
if (!surecHaberiMetadata.includes("index: false")) {
  hatalar.push("Halka arz süreç haberlerinde noindex metadata koruması yok.");
}
if (!sitemap.includes("getSitemapTaslakIzahnameSluglari")) {
  hatalar.push("Sitemap taslak filtreleme kaynağını kullanmıyor.");
}
if (
  !anaSayfa.includes('"@type": "WebSite"') ||
  !anaSayfa.includes('name: "Hoca İle Borsa"') ||
  !anaSayfa.includes('url: "https://www.hocaileborsa.com/"')
) {
  hatalar.push("Ana sayfadaki WebSite marka kimliği eksik veya tutarsız.");
}
if (
  !kokLayout.includes('metadataBase: new URL("https://www.hocaileborsa.com")') ||
  !kokLayout.includes('siteName: "Hoca İle Borsa"')
) {
  hatalar.push("Kök metadata site adresi veya marka adı standarda uymuyor.");
}
if (
  !nextConfig.includes('value: "hocaileborsa.com"') ||
  !nextConfig.includes('destination: "https://www.hocaileborsa.com/:path*"')
) {
  hatalar.push("www olmayan alan adının kalıcı yönlendirmesi eksik.");
}
if (wwwOlmayanSiteUrlDosyalari.length > 0) {
  hatalar.push(
    `www olmayan site URL'si bulundu: ${wwwOlmayanSiteUrlDosyalari.join(", ")}`
  );
}
if (tutarsizMarkaAdiDosyalari.length > 0) {
  hatalar.push(
    `Tutarsız marka adı bulundu: ${tutarsizMarkaAdiDosyalari.join(", ")}`
  );
}

console.log(`Şirket künyesi: ${hisseler.length}`);
console.log(`Dizine uygun şirket künyesi: ${indexlenebilirHisse}`);
console.log(
  `Noindex şirket künyesi: ${hisseler.length - indexlenebilirHisse} (${ikincilPaySinifi} ikincil pay sınıfı dahil)`
);
console.log(`Onaylı izahname: ${onayli}`);
console.log(`Noindex taslak izahname: ${taslak}`);
console.log(`Dizine uygun yeni haber: ${indexlenebilirHaber}`);
console.log(
  `Noindex yeni haber: ${yayinlanmisHaberler.length - indexlenebilirHaber}`
);

if (hatalar.length > 0) {
  for (const hata of hatalar) console.error(`HATA ${hata}`);
  process.exit(1);
}

console.log("Dizin kalite korumaları etkin.");

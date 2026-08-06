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

function metinUzunlugu(value) {
  return typeof value === "string" ? value.trim().length : 0;
}

function bolumMetinUzunlugu(bolum = {}) {
  return (
    metinUzunlugu(bolum.giris) +
    (bolum.paragraflar ?? []).reduce(
      (toplam, metin) => toplam + metinUzunlugu(metin),
      0
    ) +
    (bolum.maddeler ?? []).reduce(
      (toplam, metin) => toplam + metinUzunlugu(metin),
      0
    ) +
    (bolum.kartlar ?? []).reduce(
      (toplam, kart) =>
        toplam + metinUzunlugu(kart.baslik) + metinUzunlugu(kart.aciklama),
      0
    )
  );
}

function haberIndexlenebilir(kayit) {
  if (kayit.durum !== "yayinda") return false;
  const kaynakGirisi = (kayit.kaynakOzeti?.giris ?? []).reduce(
    (toplam, metin) => toplam + metinUzunlugu(metin),
    0
  );
  const kaynakBolumleri = (kayit.kaynakOzeti?.bolumler ?? []).reduce(
    (toplam, bolum) => toplam + bolumMetinUzunlugu(bolum),
    0
  );
  const editorGirisi = metinUzunlugu(kayit.editorDegerlendirmesi?.giris);
  const editorKapsami = (kayit.editorDegerlendirmesi?.bolumler ?? []).reduce(
    (toplam, bolum) => toplam + bolumMetinUzunlugu(bolum),
    editorGirisi
  );
  const disKaynakVar = (kayit.kaynaklar ?? []).some(
    (kaynak) =>
      /^https?:\/\//i.test(kaynak.url ?? "") &&
      !/hocaileborsa\.com/i.test(kaynak.url ?? "")
  );

  return Boolean(
    kaynakGirisi >= 250 &&
      (kayit.kaynakOzeti?.ozetKartlari ?? []).length >= 2 &&
      (kayit.kaynakOzeti?.temelBilgiler ?? []).length >= 4 &&
      kaynakBolumleri >= 300 &&
      editorGirisi >= 100 &&
      editorKapsami >= 450 &&
      disKaynakVar
  );
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
const proxy = fs.readFileSync(path.join(root, "proxy.ts"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "app", "sitemap.ts"), "utf8");

const hatalar = [];
if (!politika.includes("HALKA_ARZ_TASLAK_DETAY_DESENI")) {
  hatalar.push("Taslak izahname noindex yolu tanımlı değil.");
}
if (!proxy.includes('"X-Robots-Tag", "noindex, follow"')) {
  hatalar.push("Sunucu yanıtında X-Robots-Tag koruması yok.");
}
if (!sitemap.includes("getSitemapTaslakIzahnameSluglari")) {
  hatalar.push("Sitemap taslak filtreleme kaynağını kullanmıyor.");
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

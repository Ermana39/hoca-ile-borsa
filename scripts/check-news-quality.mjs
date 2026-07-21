import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const HABER_DIZINI = path.join(ROOT, "data", "haberler");
const PUBLIC_DIZINI = path.join(ROOT, "public");
const HABER_SAYFA_DIZINI = path.join(ROOT, "app", "haber");
const KATEGORILER = new Set([
  "halka-arz",
  "temettu",
  "kap-bildirimleri",
  "sermaye-artirimi",
  "piyasa-gundemi",
  "sirket-haberleri",
]);
const HISSE_ZORUNLU_KATEGORILER = new Set([
  "kap-bildirimleri",
  "sermaye-artirimi",
  "sirket-haberleri",
]);

const slugArgIndex = process.argv.findIndex((arg) => arg === "--slug");
const hedefSlug =
  process.argv.find((arg) => arg.startsWith("--slug="))?.slice(7) ||
  (slugArgIndex >= 0 ? process.argv[slugArgIndex + 1] : undefined);

const hatalar = [];
const uyarilar = [];

function hata(dosya, mesaj) {
  hatalar.push(`${dosya}: ${mesaj}`);
}

function uyari(dosya, mesaj) {
  uyarilar.push(`${dosya}: ${mesaj}`);
}

function bosOlmayanMetin(deger) {
  return typeof deger === "string" && deger.trim().length > 0;
}

function gecerliIso(deger) {
  return (
    typeof deger === "string" &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(deger) &&
    !Number.isNaN(new Date(deger).getTime())
  );
}

function normalize(deger) {
  return String(deger ?? "")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function metinleriTopla(deger, sonuc = []) {
  if (typeof deger === "string") {
    sonuc.push(deger);
  } else if (Array.isArray(deger)) {
    for (const item of deger) metinleriTopla(item, sonuc);
  } else if (deger && typeof deger === "object") {
    for (const item of Object.values(deger)) metinleriTopla(item, sonuc);
  }
  return sonuc;
}

function bolumIcerigiVar(bolum) {
  return (
    bosOlmayanMetin(bolum?.giris) ||
    (Array.isArray(bolum?.paragraflar) && bolum.paragraflar.some(bosOlmayanMetin)) ||
    (Array.isArray(bolum?.maddeler) && bolum.maddeler.some(bosOlmayanMetin)) ||
    (Array.isArray(bolum?.kartlar) &&
      bolum.kartlar.some(
        (kart) => bosOlmayanMetin(kart?.baslik) && bosOlmayanMetin(kart?.aciklama)
      ))
  );
}

function yazarSluglari() {
  try {
    const icerik = fs.readFileSync(
      path.join(ROOT, "app", "data", "yazarlar.ts"),
      "utf8"
    );
    return new Set(
      Array.from(icerik.matchAll(/\bslug:\s*"([^"]+)"/g), (eslesme) => eslesme[1])
    );
  } catch {
    return new Set(["erman-hoca"]);
  }
}

function eskiHaberleriOku() {
  const dosya = path.join(ROOT, "app", "data", "news.ts");
  const icerik = fs.readFileSync(dosya, "utf8");
  const kayitlar = [];
  const bloklar = icerik.matchAll(/\{\s*id:\s*(\d+),([\s\S]*?)\n\s*\},/g);

  for (const eslesme of bloklar) {
    const blok = eslesme[0];
    const alan = (ad) => blok.match(new RegExp(`\\b${ad}:\\s*"([^"]*)"`))?.[1];
    const href = alan("href");
    if (!href) continue;
    kayitlar.push({
      id: Number(eslesme[1]),
      title: alan("title") || "",
      href,
      image: alan("image") || "",
    });
  }
  return kayitlar;
}

const jsonDosyalari = fs.existsSync(HABER_DIZINI)
  ? fs
      .readdirSync(HABER_DIZINI)
      .filter((dosya) => dosya.endsWith(".json") && !dosya.startsWith("_"))
      .sort((a, b) => a.localeCompare(b, "tr"))
  : [];

const kayitlar = [];
for (const dosya of jsonDosyalari) {
  const goreliDosya = `data/haberler/${dosya}`;
  try {
    const veri = JSON.parse(fs.readFileSync(path.join(HABER_DIZINI, dosya), "utf8"));
    kayitlar.push({ dosya, goreliDosya, veri });
  } catch (error) {
    hata(goreliDosya, `JSON okunamadı: ${error.message}`);
  }
}

if (hedefSlug && !kayitlar.some(({ veri }) => veri?.slug === hedefSlug)) {
  hata("--slug", `Kontrol edilecek kayıt bulunamadı: ${hedefSlug}`);
}

const yazarlar = yazarSluglari();
const kaynakUrlSahibi = new Map();
const yeniBaslikSahibi = new Map();
const yeniHrefSahibi = new Map();

for (const { dosya, goreliDosya, veri } of kayitlar) {
  if (!veri || typeof veri !== "object" || Array.isArray(veri)) {
    hata(goreliDosya, "Kök JSON değeri bir nesne olmalı.");
    continue;
  }

  const dosyaSlug = dosya.replace(/\.json$/, "");
  const katiKontrol = veri.durum === "yayinda" || veri.slug === hedefSlug;

  if (veri.surum !== 1) hata(goreliDosya, "surum alanı 1 olmalı.");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(veri.slug || "")) {
    hata(goreliDosya, "slug yalnızca küçük harf, rakam ve tire içermeli.");
  }
  if (veri.slug !== dosyaSlug) {
    hata(goreliDosya, `Dosya adı ile slug aynı olmalı (${dosyaSlug}).`);
  }
  if (veri.durum !== "taslak" && veri.durum !== "yayinda") {
    hata(goreliDosya, "durum yalnızca taslak veya yayinda olabilir.");
  }

  const href = `/haber/${veri.slug}`;
  if (yeniHrefSahibi.has(href)) {
    hata(goreliDosya, `Aynı haber adresi başka kayıtta da var: ${yeniHrefSahibi.get(href)}`);
  }
  yeniHrefSahibi.set(href, goreliDosya);

  if (!katiKontrol) continue;

  if (!bosOlmayanMetin(veri.baslik) || veri.baslik.trim().length < 20) {
    hata(goreliDosya, "baslik açıklayıcı ve en az 20 karakter olmalı.");
  } else if (veri.baslik.length > 75) {
    uyari(goreliDosya, "Başlık 75 karakterden uzun; arama sonucunda kesilebilir.");
  }

  if (!bosOlmayanMetin(veri.aciklama) || veri.aciklama.trim().length < 100) {
    hata(goreliDosya, "aciklama en az 100 karakterlik özgün bir özet olmalı.");
  } else if (veri.aciklama.length > 180) {
    uyari(goreliDosya, "Açıklama 180 karakterden uzun; arama sonucunda kesilebilir.");
  }

  if (!KATEGORILER.has(veri.kategori)) {
    hata(goreliDosya, `Geçersiz kategori: ${veri.kategori ?? "boş"}`);
  }
  if (!bosOlmayanMetin(veri.etiket)) hata(goreliDosya, "etiket boş bırakılamaz.");

  if (!gecerliIso(veri.yayinTarihi)) {
    hata(goreliDosya, "yayinTarihi saat dilimi içeren tam ISO tarih olmalı.");
  }
  if (!gecerliIso(veri.guncellemeTarihi)) {
    hata(goreliDosya, "guncellemeTarihi saat dilimi içeren tam ISO tarih olmalı.");
  }
  if (gecerliIso(veri.yayinTarihi) && gecerliIso(veri.guncellemeTarihi)) {
    if (new Date(veri.guncellemeTarihi) < new Date(veri.yayinTarihi)) {
      hata(goreliDosya, "guncellemeTarihi, yayinTarihi değerinden önce olamaz.");
    }
    if (veri.durum === "yayinda" && new Date(veri.yayinTarihi).getTime() > Date.now() + 15 * 60 * 1000) {
      hata(goreliDosya, "Yayındaki haberin tarihi gelecekte olamaz.");
    }
  }

  if (!yazarlar.has(veri.yazarSlug)) {
    hata(goreliDosya, `Tanımsız yazarSlug: ${veri.yazarSlug ?? "boş"}`);
  }

  if (!veri.gorsel || typeof veri.gorsel !== "object") {
    hata(goreliDosya, "gorsel nesnesi zorunludur.");
  } else {
    const beklenenGorsel = `/${veri.slug}.webp`;
    if (veri.gorsel.src !== beklenenGorsel) {
      hata(goreliDosya, `Görsel adı ${beklenenGorsel} olmalı.`);
    }
    if (!bosOlmayanMetin(veri.gorsel.alt) || veri.gorsel.alt.length < 20) {
      hata(goreliDosya, "Görsel alt metni en az 20 karakter ve açıklayıcı olmalı.");
    }

    const gorselYolu = path.join(PUBLIC_DIZINI, String(veri.gorsel.src || "").replace(/^\/+/, ""));
    if (!fs.existsSync(gorselYolu)) {
      hata(goreliDosya, `Görsel bulunamadı: public${veri.gorsel.src || ""}`);
    } else {
      try {
        const meta = await sharp(gorselYolu).metadata();
        if (meta.format !== "webp") hata(goreliDosya, "Haber görseli WebP biçiminde olmalı.");
        if (!meta.width || meta.width < 1200) {
          hata(goreliDosya, `Görsel genişliği en az 1200 px olmalı (mevcut: ${meta.width ?? "bilinmiyor"}).`);
        }
        if (!meta.height || meta.height < 675) {
          hata(goreliDosya, `Görsel yüksekliği en az 675 px olmalı (mevcut: ${meta.height ?? "bilinmiyor"}).`);
        }
        if (meta.width && meta.height) {
          const oran = meta.width / meta.height;
          if (oran < 1.72 || oran > 1.82) {
            hata(goreliDosya, `Görsel oranı 16:9'a yakın olmalı (mevcut: ${oran.toFixed(2)}).`);
          }
          if (veri.gorsel.genislik !== meta.width || veri.gorsel.yukseklik !== meta.height) {
            hata(
              goreliDosya,
              `JSON görsel ölçüleri gerçek dosyayla eşleşmeli (${meta.width}x${meta.height}).`
            );
          }
        }
      } catch (error) {
        hata(goreliDosya, `Görsel okunamadı: ${error.message}`);
      }
    }
  }

  if (!Array.isArray(veri.ilgiliHisseler)) {
    hata(goreliDosya, "ilgiliHisseler bir dizi olmalı.");
  } else {
    if (HISSE_ZORUNLU_KATEGORILER.has(veri.kategori) && veri.ilgiliHisseler.length === 0) {
      hata(goreliDosya, "Bu kategoride en az bir ilgili hisse kodu zorunludur.");
    }
    const hisseler = new Set();
    for (const kod of veri.ilgiliHisseler) {
      if (typeof kod !== "string" || !/^[A-Z0-9]{3,10}$/.test(kod)) {
        hata(goreliDosya, `Geçersiz hisse kodu: ${String(kod)}`);
      }
      if (hisseler.has(kod)) hata(goreliDosya, `Tekrarlanan hisse kodu: ${kod}`);
      hisseler.add(kod);
    }
  }

  const ozet = veri.kaynakOzeti;
  if (!ozet || typeof ozet !== "object") {
    hata(goreliDosya, "kaynakOzeti nesnesi zorunludur.");
  } else {
    if (!Array.isArray(ozet.giris) || ozet.giris.length === 0 || !ozet.giris.every(bosOlmayanMetin)) {
      hata(goreliDosya, "kaynakOzeti.giris en az bir dolu paragraf içermeli.");
    }
    if (!Array.isArray(ozet.ozetKartlari) || ozet.ozetKartlari.length < 2) {
      hata(goreliDosya, "En az iki özet kartı bulunmalı.");
    }
    if (!Array.isArray(ozet.temelBilgiler) || ozet.temelBilgiler.length < 4) {
      hata(goreliDosya, "Kaynağa dayalı en az dört temel bilgi satırı bulunmalı.");
    }
    if (!Array.isArray(ozet.bolumler)) {
      hata(goreliDosya, "kaynakOzeti.bolumler bir dizi olmalı.");
    } else {
      for (const bolum of ozet.bolumler) {
        if (!bosOlmayanMetin(bolum?.baslik) || !bolumIcerigiVar(bolum)) {
          hata(goreliDosya, "Kaynak bölümünde başlık ve görünür içerik zorunludur.");
        }
      }
    }
  }

  const degerlendirme = veri.editorDegerlendirmesi;
  if (!degerlendirme || typeof degerlendirme !== "object") {
    hata(goreliDosya, "editorDegerlendirmesi nesnesi zorunludur.");
  } else {
    if (!bosOlmayanMetin(degerlendirme.giris) || degerlendirme.giris.length < 80) {
      hata(goreliDosya, "Editoryal değerlendirmenin kapsamını açıklayan bir giriş yazılmalı.");
    }
    if (!Array.isArray(degerlendirme.bolumler) || degerlendirme.bolumler.length < 3) {
      hata(goreliDosya, "Editoryal değerlendirmede en az üç bölüm bulunmalı.");
    } else {
      const basliklar = degerlendirme.bolumler.map((bolum) => normalize(bolum.baslik));
      if (!basliklar.some((baslik) => baslik.includes("neden onemli") || baslik.includes("etki"))) {
        hata(goreliDosya, "Değerlendirmede 'neden önemli' veya 'etki' bölümü bulunmalı.");
      }
      if (!basliklar.some((baslik) => baslik.includes("risk") || baslik.includes("dikkat"))) {
        hata(goreliDosya, "Değerlendirmede risk veya dikkat bölümü bulunmalı.");
      }
      if (!basliklar.some((baslik) => baslik.includes("takip") || baslik.includes("izlenecek"))) {
        hata(goreliDosya, "Değerlendirmede takip edilecek başlıklar bulunmalı.");
      }
      for (const bolum of degerlendirme.bolumler) {
        if (!bosOlmayanMetin(bolum?.baslik) || !bolumIcerigiVar(bolum)) {
          hata(goreliDosya, "Editoryal bölümde başlık ve görünür içerik zorunludur.");
        }
      }
    }
  }

  if (!Array.isArray(veri.kaynaklar) || veri.kaynaklar.length === 0) {
    hata(goreliDosya, "En az bir doğrudan kaynak bağlantısı zorunludur.");
  } else {
    for (const kaynak of veri.kaynaklar) {
      if (!bosOlmayanMetin(kaynak?.ad)) hata(goreliDosya, "Kaynak adı boş olamaz.");
      let url;
      try {
        url = new URL(kaynak?.url);
        if (url.protocol !== "https:") throw new Error("HTTPS değil");
      } catch {
        hata(goreliDosya, `Geçersiz kaynak URL'si: ${kaynak?.url ?? "boş"}`);
        continue;
      }
      if (kaynak.tur === "KAP") {
        if (!url.hostname.endsWith("kap.org.tr") || !/\/Bildirim\/\d+/i.test(url.pathname)) {
          hata(goreliDosya, "KAP kaynağı doğrudan /Bildirim/<numara> bağlantısı olmalı.");
        }
      }
      if (kaynak.yayinTarihi && !gecerliIso(kaynak.yayinTarihi)) {
        hata(goreliDosya, "Kaynak tarihi saat dilimi içeren tam ISO tarih olmalı.");
      }
      const onceki = kaynakUrlSahibi.get(kaynak.url);
      if (onceki && onceki !== goreliDosya) {
        hata(goreliDosya, `Kaynak URL'si başka haberde kullanılmış: ${onceki}`);
      } else {
        kaynakUrlSahibi.set(kaynak.url, goreliDosya);
      }
    }
  }

  const tumMetin = metinleriTopla(veri).join(" ");
  if (/\b(?:TODO|TBD|Lorem ipsum|BURAYA YAZ)\b/i.test(tumMetin)) {
    hata(goreliDosya, "Yayın metninde yer tutucu ifade bulundu.");
  }
  if (/<\/?[a-z][^>]*>/i.test(tumMetin)) {
    hata(goreliDosya, "JSON metin alanlarında HTML etiketi kullanılmamalı.");
  }
  if (/kesin yükselecek|garantili getiri|kesin kazandır|alım fırsatıdır|satın alın/i.test(tumMetin)) {
    hata(goreliDosya, "Yatırım tavsiyesi veya kesin getiri vaadi niteliğinde ifade bulundu.");
  }

  const icerikKarakteri = metinleriTopla({
    kaynakOzeti: veri.kaynakOzeti,
    editorDegerlendirmesi: veri.editorDegerlendirmesi,
    sorular: veri.sorular,
  }).join(" ").length;
  if (icerikKarakteri < 1200) {
    uyari(
      goreliDosya,
      "Görünür içerik kısa. Kaynakta gerçekten bulunan önemli ayrıntılar eksik mi kontrol edin; dolgu metin eklemeyin."
    );
  }

  const baslikAnahtari = normalize(veri.baslik);
  const oncekiBaslik = yeniBaslikSahibi.get(baslikAnahtari);
  if (oncekiBaslik && oncekiBaslik !== goreliDosya) {
    hata(goreliDosya, `Aynı başlık başka haberde kullanılmış: ${oncekiBaslik}`);
  } else {
    yeniBaslikSahibi.set(baslikAnahtari, goreliDosya);
  }
}

const eskiHaberler = eskiHaberleriOku();
const eskiHrefler = new Map();
const eskiIdler = new Map();
const eskiBasliklar = new Map();

for (const haber of eskiHaberler) {
  if (eskiHrefler.has(haber.href)) {
    uyari("app/data/news.ts", `Tekrarlanan eski haber adresi: ${haber.href}`);
  }
  eskiHrefler.set(haber.href, haber);

  if (eskiIdler.has(haber.id)) {
    uyari("app/data/news.ts", `Tekrarlanan eski haber id'si: ${haber.id}`);
  }
  eskiIdler.set(haber.id, haber.href);
  eskiBasliklar.set(normalize(haber.title), haber.href);

  if (haber.image && !fs.existsSync(path.join(PUBLIC_DIZINI, haber.image.replace(/^\/+/, "")))) {
    uyari("app/data/news.ts", `Eski haber görseli bulunamadı: ${haber.image}`);
  }

  const slug = haber.href.startsWith("/haber/") ? haber.href.slice(7) : "";
  const statikSayfa = slug && fs.existsSync(path.join(HABER_SAYFA_DIZINI, slug, "page.tsx"));
  const yeniSayfa = kayitlar.some(
    ({ veri }) => veri?.durum === "yayinda" && `/haber/${veri.slug}` === haber.href
  );
  if (slug && !statikSayfa && !yeniSayfa) {
    uyari("app/data/news.ts", `Listede var ancak sayfası bulunamadı: ${haber.href}`);
  }
}

for (const { goreliDosya, veri } of kayitlar) {
  if (!veri || (veri.durum !== "yayinda" && veri.slug !== hedefSlug)) continue;
  const href = `/haber/${veri.slug}`;
  if (eskiHrefler.has(href)) {
    hata(goreliDosya, "Bu adres app/data/news.ts içinde de var; yeni sistem tek kaynak olmalı.");
  }
  const eskiBaslikHref = eskiBasliklar.get(normalize(veri.baslik));
  if (eskiBaslikHref && eskiBaslikHref !== href) {
    hata(goreliDosya, `Aynı başlık eski bir haberde kullanılmış: ${eskiBaslikHref}`);
  }
}

if (fs.existsSync(HABER_SAYFA_DIZINI)) {
  for (const klasor of fs.readdirSync(HABER_SAYFA_DIZINI, { withFileTypes: true })) {
    if (!klasor.isDirectory() || klasor.name.startsWith("[")) continue;
    const page = path.join(HABER_SAYFA_DIZINI, klasor.name, "page.tsx");
    if (!fs.existsSync(page)) continue;
    const href = `/haber/${klasor.name}`;
    const yeniKayitVar = kayitlar.some(({ veri }) => veri?.durum === "yayinda" && veri.slug === klasor.name);
    if (!eskiHrefler.has(href) && !yeniKayitVar) {
      uyari("app/haber", `Sayfası var ancak haber listesinde kayıtlı değil: ${href}`);
    }
  }
}

console.log("\nHaber yayın öncesi kalite kontrolü");
console.log(`Yeni sistem: ${kayitlar.filter(({ veri }) => veri?.durum === "yayinda").length} yayında, ${kayitlar.filter(({ veri }) => veri?.durum === "taslak").length} taslak`);
console.log(`Eski sistem denetimi: ${eskiHaberler.length} kayıt`);

for (const mesaj of uyarilar) console.warn(`UYARI  ${mesaj}`);
for (const mesaj of hatalar) console.error(`HATA   ${mesaj}`);

if (hatalar.length > 0) {
  console.error(`\nKontrol başarısız: ${hatalar.length} hata, ${uyarilar.length} uyarı.`);
  process.exit(1);
}

console.log(`\nKontrol başarılı: hata yok, ${uyarilar.length} uyarı.`);

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
const KAP_PARA_BIRIMLERI = new Set(["TRY", "USD", "EUR", "GBP"]);

const slugArgIndex = process.argv.findIndex((arg) => arg === "--slug");
const hedefSlug =
  process.argv.find((arg) => arg.startsWith("--slug="))?.slice(7) ||
  (slugArgIndex >= 0 ? process.argv[slugArgIndex + 1] : undefined);
const yayinaAl = process.argv.includes("--publish");
const sikiInceleme = process.argv.includes("--strict");

if ((yayinaAl || sikiInceleme) && !hedefSlug) {
  console.error(
    yayinaAl
      ? "Yayınlanacak haber belirtilmeli: npm run news:publish -- --slug=<haber-slug>"
      : "İncelenecek haber belirtilmeli: npm run news:review -- --slug=<haber-slug>"
  );
  process.exit(1);
}

const hatalar = [];
const uyarilar = [];

function hata(dosya, mesaj) {
  hatalar.push(`${dosya}: ${mesaj}`);
}

function uyari(dosya, mesaj) {
  uyarilar.push(`${dosya}: ${mesaj}`);
}

function yayindaSayiliyorMu(veri) {
  return (
    veri?.durum === "yayinda" ||
    (yayinaAl && veri?.slug === hedefSlug)
  );
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

function pozitifSayi(deger) {
  return typeof deger === "number" && Number.isFinite(deger) && deger > 0;
}

function gecerliGun(deger) {
  return (
    typeof deger === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(deger) &&
    !Number.isNaN(new Date(`${deger}T00:00:00Z`).getTime())
  );
}

function doluMetinDizisi(deger, enAz) {
  return (
    Array.isArray(deger) &&
    deger.length >= enAz &&
    deger.every((item) => bosOlmayanMetin(item))
  );
}

function kaliteMesaji(dosya, mesaj, zorunlu) {
  if (zorunlu) hata(dosya, mesaj);
  else uyari(dosya, mesaj);
}

function cumlelereAyir(metinler) {
  return metinler
    .flatMap((metin) => String(metin ?? "").split(/[.!?]\s+/))
    .map((cumle) => cumle.trim())
    .filter((cumle) => cumle.length >= 55);
}

function tekrarAnahtari(metin) {
  return normalize(metin)
    .replace(/\b\d[\d.,]*\b/g, "#")
    .replace(/\s+/g, " ")
    .trim();
}

function haberTekrarlariniKontrolEt(dosya, veri, zorunlu) {
  const metinler = metinleriTopla({
    kaynakOzeti: veri.kaynakOzeti,
    editorDegerlendirmesi: veri.editorDegerlendirmesi,
    sorular: veri.sorular,
  });

  const tekrarlar = new Map();
  for (const cumle of cumlelereAyir(metinler)) {
    const anahtar = tekrarAnahtari(cumle);
    if (anahtar.length < 45) continue;
    tekrarlar.set(anahtar, (tekrarlar.get(anahtar) ?? 0) + 1);
  }

  const cokTekrarlananCumle = [...tekrarlar.values()].some((adet) => adet >= 3);
  if (cokTekrarlananCumle) {
    kaliteMesaji(
      dosya,
      "Haber metninde aynı cümle/fikir çok sık tekrar ediyor; tekrar yerine etki, risk veya farklı bakış açısı ekleyin.",
      zorunlu
    );
  }

  const sayisalTekrarlar = new Map();
  const tumMetin = metinler.join(" ");
  for (const eslesme of tumMetin.matchAll(
    /\b\d[\d.,]*(?:\s*(?:milyon|milyar|bin|mn|tl|euro|dolar|usd|ay|yıl|%))?/gi
  )) {
    const hamDeger = eslesme[0].trim();
    const birimVar = /[a-zçğıöşü%]/i.test(hamDeger);
    const rakamSayisi = hamDeger.replace(/\D/g, "").length;
    if (!birimVar && rakamSayisi < 4) continue;

    const anahtar = normalize(eslesme[0]);
    if (anahtar.length < 2) continue;
    sayisalTekrarlar.set(anahtar, (sayisalTekrarlar.get(anahtar) ?? 0) + 1);
  }

  const cokTekrarlananSayi = [...sayisalTekrarlar.entries()].find(
    ([anahtar, adet]) => adet >= 6 && !/202\d/.test(anahtar)
  );
  if (cokTekrarlananSayi) {
    kaliteMesaji(
      dosya,
      `"${cokTekrarlananSayi[0]}" bilgisi haberde çok fazla tekrar ediyor; aynı veriyi yeniden yazmak yerine neyi etkilediğini açıklayın.`,
      zorunlu
    );
  }
}

function haberBakisAcisiniKontrolEt(dosya, veri, zorunlu) {
  const editorBolumleri = Array.isArray(veri.editorDegerlendirmesi?.bolumler)
    ? veri.editorDegerlendirmesi.bolumler
    : [];
  const basliklar = editorBolumleri.map((bolum) => normalize(bolum?.baslik));
  const tumEditorMetni = normalize(
    metinleriTopla({
      editorDegerlendirmesi: veri.editorDegerlendirmesi,
      kapEtkiAnalizi: veri.kapEtkiAnalizi,
    }).join(" ")
  );

  const olumluVar =
    basliklar.some((baslik) => /olumlu|pozitif|guclu|destek|firsat/.test(baslik)) ||
    /olumlu|pozitif|guclu|destekleyici|katki/.test(tumEditorMetni);
  const olumsuzVar =
    basliklar.some((baslik) => /olumsuz|negatif|risk|dikkat|sinirlayici|baski/.test(baslik)) ||
    /olumsuz|negatif|risk|dikkat|sinirlayici|baski/.test(tumEditorMetni);
  const etkiVar =
    basliklar.some((baslik) => /etki|neden onemli|nasil okunmali|finansal|operasyonel|sektor/.test(baslik)) ||
    /finansal|operasyonel|ciro|karlilik|nakit|borc|marj|sektor|rekabet/.test(tumEditorMetni);
  const takipVar =
    basliklar.some((baslik) => /takip|izlenecek|sonraki/.test(baslik)) ||
    /takip|izlenecek|sonraki aciklama|finansal tablo/.test(tumEditorMetni);

  if (!olumluVar) {
    kaliteMesaji(
      dosya,
      "Editoryal analizde haberin olumlu/destekleyici tarafı somut biçimde yazılmalı.",
      zorunlu
    );
  }
  if (!olumsuzVar) {
    kaliteMesaji(
      dosya,
      "Editoryal analizde haberin olumsuz/riskli veya sınırlayıcı tarafı somut biçimde yazılmalı.",
      zorunlu
    );
  }
  if (!etkiVar) {
    kaliteMesaji(
      dosya,
      "Editoryal analizde gelişmenin finansal, operasyonel, sektörel veya yatırımcı algısı etkisi açıklanmalı.",
      zorunlu
    );
  }
  if (!takipVar) {
    kaliteMesaji(
      dosya,
      "Editoryal analizde sonraki açıklamalarda izlenecek başlıklar bulunmalı.",
      zorunlu
    );
  }
}

function haberEditorDerinliginiKontrolEt(dosya, veri, zorunlu) {
  const degerlendirme = veri.editorDegerlendirmesi;
  const editorMetni = metinleriTopla(degerlendirme)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (editorMetni.length < 700) {
    kaliteMesaji(
      dosya,
      "Editoryal değerlendirme kısa kalmış; kaynağı tekrar etmeden olumlu tarafı, sınırlayıcı unsuru, etki alanını ve izlenecek gelişmeleri gerekçeleriyle açıklayın.",
      zorunlu
    );
  }

  const editorBolumleri = Array.isArray(degerlendirme?.bolumler)
    ? degerlendirme.bolumler
    : [];
  const dolguBaslikliBolum = editorBolumleri.find((bolum) =>
    /veri bekleniyor|bilgi yok|hesaplanamıyor|henüz açıklanmadı|henüz paylaşılmadı/i.test(
      String(bolum?.baslik ?? "")
    )
  );

  if (dolguBaslikliBolum) {
    kaliteMesaji(
      dosya,
      `"${dolguBaslikliBolum.baslik}" bağımsız bir analiz bölümü olmamalı; açıklanmayan bilgiyi yalnızca yorumun sınırını göstermek için ilgili etki paragrafında bir kez belirtin.`,
      zorunlu
    );
  }
}

function kapEtkiAnaliziKontrolEt(dosya, analiz) {
  if (!analiz || typeof analiz !== "object" || Array.isArray(analiz)) {
    hata(dosya, "KAP kaynaklı şirket haberinde kapEtkiAnalizi nesnesi zorunludur.");
    return;
  }

  if (
    !bosOlmayanMetin(analiz.olayTuru) ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(analiz.olayTuru)
  ) {
    hata(dosya, `Geçersiz KAP olay türü: ${analiz.olayTuru ?? "boş"}`);
  }
  if (!bosOlmayanMetin(analiz.ozet) || analiz.ozet.trim().length < 80) {
    hata(dosya, "KAP etki analizi özeti en az 80 karakter ve açıklayıcı olmalı.");
  }
  if (!Array.isArray(analiz.metrikler) || analiz.metrikler.length === 0) {
    hata(dosya, "KAP etki analizinde en az bir hesap veya hesaplanamama gerekçesi bulunmalı.");
  } else {
    let hesaplananMetrikSayisi = 0;

    for (const [index, metrik] of analiz.metrikler.entries()) {
      const alan = `kapEtkiAnalizi.metrikler[${index}]`;
      if (!metrik || typeof metrik !== "object" || Array.isArray(metrik)) {
        hata(dosya, `${alan} bir nesne olmalı.`);
        continue;
      }
      if (
        !bosOlmayanMetin(metrik.tur) ||
        !/^[a-z0-9çğıöşü]+(?:-[a-z0-9çğıöşü]+)*$/i.test(metrik.tur)
      ) {
        hata(dosya, `${alan} için geçersiz metrik türü: ${metrik.tur ?? "boş"}`);
        continue;
      }
      if (!bosOlmayanMetin(metrik.baslik)) {
        hata(dosya, `${alan}.baslik boş bırakılamaz.`);
      }

      if (metrik.tur === "hesaplanamadi") {
        if (!bosOlmayanMetin(metrik.neden) || metrik.neden.trim().length < 40) {
          hata(dosya, `${alan}.neden en az 40 karakterle açıklanmalı.`);
        }
        if (!doluMetinDizisi(metrik.gerekliVeriler, 1)) {
          hata(dosya, `${alan}.gerekliVeriler en az bir dolu madde içermeli.`);
        }
        continue;
      }

      hesaplananMetrikSayisi += 1;

      if (metrik.tur === "kapasite-artisi") {
        if (!pozitifSayi(metrik.mevcutKapasite)) {
          hata(dosya, `${alan}.mevcutKapasite pozitif sayı olmalı.`);
        }
        if (!pozitifSayi(metrik.ekKapasite)) {
          hata(dosya, `${alan}.ekKapasite pozitif sayı olmalı.`);
        }
        if (!bosOlmayanMetin(metrik.birim)) {
          hata(dosya, `${alan}.birim boş bırakılamaz.`);
        }
        continue;
      }

      if (metrik.tur === "bedelsiz") {
        if (!pozitifSayi(metrik.eskiSermaye)) {
          hata(dosya, `${alan}.eskiSermaye pozitif sayı olmalı.`);
        }
        if (!pozitifSayi(metrik.yeniSermaye)) {
          hata(dosya, `${alan}.yeniSermaye pozitif sayı olmalı.`);
        }
        if (
          pozitifSayi(metrik.eskiSermaye) &&
          pozitifSayi(metrik.yeniSermaye) &&
          metrik.yeniSermaye <= metrik.eskiSermaye
        ) {
          hata(dosya, `${alan}.yeniSermaye eski sermayeden büyük olmalı.`);
        }
        if (!KAP_PARA_BIRIMLERI.has(metrik.paraBirimi)) {
          hata(dosya, `${alan}.paraBirimi TRY, USD, EUR veya GBP olmalı.`);
        }
        if (metrik.referansFiyat !== undefined && !pozitifSayi(metrik.referansFiyat)) {
          hata(dosya, `${alan}.referansFiyat verildiyse pozitif sayı olmalı.`);
        }
        continue;
      }

      if (metrik.tur !== "tutar-orani") {
        const metinDegeriGecerli =
          bosOlmayanMetin(metrik.deger) &&
          !/veri bekleniyor|bilgi yok|veri yok|henüz (?:açıklanmadı|paylaşılmadı)|açıklanmadı|paylaşılmadı|hesaplanamıyor|belirtilmedi/i.test(
            metrik.deger
          );
        const gorunurDegerVar =
          pozitifSayi(metrik.olayTutari) ||
          Number.isFinite(metrik.oran) ||
          Number.isFinite(metrik.deger) ||
          metinDegeriGecerli;
        if (!gorunurDegerVar) {
          hesaplananMetrikSayisi -= 1;
          uyari(
            dosya,
            `${alan} görünür ve sonlu bir sayısal değer içermediği için sayfada gösterilmeyecek.`
          );
        }
        continue;
      }

      if (!bosOlmayanMetin(metrik.olayEtiketi)) {
        hata(dosya, `${alan}.olayEtiketi boş bırakılamaz.`);
      }
      if (!pozitifSayi(metrik.olayTutari)) {
        hata(dosya, `${alan}.olayTutari pozitif sayı olmalı.`);
      }
      if (!KAP_PARA_BIRIMLERI.has(metrik.olayParaBirimi)) {
        hata(dosya, `${alan}.olayParaBirimi geçerli değil.`);
      }
      if (!bosOlmayanMetin(metrik.referansEtiketi)) {
        hata(dosya, `${alan}.referansEtiketi boş bırakılamaz.`);
      }
      if (!pozitifSayi(metrik.referansTutari)) {
        hata(dosya, `${alan}.referansTutari pozitif sayı olmalı.`);
      }
      if (!KAP_PARA_BIRIMLERI.has(metrik.referansParaBirimi)) {
        hata(dosya, `${alan}.referansParaBirimi geçerli değil.`);
      }
      if (!bosOlmayanMetin(metrik.referansDonemi)) {
        hata(dosya, `${alan}.referansDonemi boş bırakılamaz.`);
      }

      const farkliParaBirimi =
        metrik.olayParaBirimi !== metrik.referansParaBirimi;
      let kur = 1;
      if (farkliParaBirimi) {
        if (!metrik.kurDonusumu || typeof metrik.kurDonusumu !== "object") {
          hata(dosya, `${alan} farklı para birimleri için kurDonusumu içermeli.`);
          kur = Number.NaN;
        } else {
          if (!pozitifSayi(metrik.kurDonusumu.birimBasina)) {
            hata(dosya, `${alan}.kurDonusumu.birimBasina pozitif sayı olmalı.`);
          } else {
            kur = metrik.kurDonusumu.birimBasina;
          }
          if (!gecerliGun(metrik.kurDonusumu.tarih)) {
            hata(dosya, `${alan}.kurDonusumu.tarih YYYY-AA-GG biçiminde olmalı.`);
          }
          if (!bosOlmayanMetin(metrik.kurDonusumu.tur)) {
            hata(dosya, `${alan}.kurDonusumu.tur kullanılan kuru açıklamalı.`);
          }
        }
      } else if (metrik.kurDonusumu) {
        uyari(dosya, `${alan} aynı para biriminde olduğu için kurDonusumu gereksiz.`);
      }

      if (
        pozitifSayi(metrik.olayTutari) &&
        pozitifSayi(metrik.referansTutari) &&
        Number.isFinite(kur)
      ) {
        const hesaplananOran =
          ((metrik.olayTutari * kur) / metrik.referansTutari) * 100;
        if (metrik.kaynakOran !== undefined) {
          if (!pozitifSayi(metrik.kaynakOran)) {
            hata(dosya, `${alan}.kaynakOran verildiyse pozitif sayı olmalı.`);
          } else {
            const tolerans = Math.max(0.05, metrik.kaynakOran * 0.02);
            if (Math.abs(hesaplananOran - metrik.kaynakOran) > tolerans) {
              hata(
                dosya,
                `${alan} hesaplanan oranı (%${hesaplananOran.toFixed(2)}) kaynak oranıyla (%${metrik.kaynakOran}) uyuşmuyor.`
              );
            }
          }
        }
      }
    }

    if (hesaplananMetrikSayisi === 0) {
      uyari(
        dosya,
        "KAP etki analizindeki tüm metrikler hesaplanamamış; gerekli veriler geldiğinde kayıt güncellenmeli."
      );
    }
  }

  if (!doluMetinDizisi(analiz.riskler, 2)) {
    hata(dosya, "KAP etki analizinde en az iki somut risk bulunmalı.");
  }
  if (!doluMetinDizisi(analiz.takipEdilecekler, 2)) {
    hata(dosya, "KAP etki analizinde en az iki takip maddesi bulunmalı.");
  }
  if (
    analiz.metodolojiNotu !== undefined &&
    (!bosOlmayanMetin(analiz.metodolojiNotu) ||
      analiz.metodolojiNotu.trim().length < 40)
  ) {
    hata(dosya, "kapEtkiAnalizi.metodolojiNotu verildiyse en az 40 karakter olmalı.");
  }
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
  const hedefKayit = veri.slug === hedefSlug;
  if (sikiInceleme && !hedefKayit) continue;
  const yayinAdayi = (yayinaAl || sikiInceleme) && hedefKayit;
  const katiKontrol = sikiInceleme
    ? hedefKayit
    : veri.durum === "yayinda" || hedefKayit;

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
  if (hedefKayit && veri.durum === "taslak" && !yayinaAl && !sikiInceleme) {
    hata(
      goreliDosya,
      `Haber hâlâ taslak. Yayınlamak için: npm run news:publish -- --slug=${veri.slug}`
    );
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
    if ((veri.durum === "yayinda" || yayinAdayi) && new Date(veri.yayinTarihi).getTime() > Date.now() + 15 * 60 * 1000) {
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
        const kapHostu =
          url.hostname === "kap.org.tr" ||
          url.hostname.endsWith(".kap.org.tr");
        const kapBildirimi = /\/Bildirim\/\d+/i.test(url.pathname);
        const kapFinansalBilgisi = /\/sirket-finansal-bilgileri\//i.test(
          url.pathname
        );
        if (!kapHostu || (!kapBildirimi && !kapFinansalBilgisi)) {
          hata(
            goreliDosya,
            "KAP kaynağı doğrudan bildirim veya şirket finansal bilgileri bağlantısı olmalı."
          );
        }
      }
      if (kaynak.yayinTarihi && !gecerliIso(kaynak.yayinTarihi)) {
        hata(goreliDosya, "Kaynak tarihi saat dilimi içeren tam ISO tarih olmalı.");
      }
      if (kaynak.tur === "KAP" && /\/Bildirim\/\d+/i.test(url.pathname)) {
        const onceki = kaynakUrlSahibi.get(kaynak.url);
        if (onceki && onceki !== goreliDosya) {
          hata(goreliDosya, `KAP bildirimi başka haberde kullanılmış: ${onceki}`);
        } else {
          kaynakUrlSahibi.set(kaynak.url, goreliDosya);
        }
      }
    }
  }

  const kapKaynakliSirketHaberi =
    HISSE_ZORUNLU_KATEGORILER.has(veri.kategori) &&
    Array.isArray(veri.kaynaklar) &&
    veri.kaynaklar.some((kaynak) => kaynak?.tur === "KAP");
  if (kapKaynakliSirketHaberi || veri.kapEtkiAnalizi !== undefined) {
    kapEtkiAnaliziKontrolEt(goreliDosya, veri.kapEtkiAnalizi);
  }

  const tumMetin = metinleriTopla(veri).join(" ");
  if (/\b(?:TODO|TBD|Lorem ipsum|BURAYA YAZ)\b/i.test(tumMetin)) {
    hata(goreliDosya, "Yayın metninde yer tutucu ifade bulundu.");
  }
  if (/\b(?:NaN|undefined|null)\b/i.test(tumMetin)) {
    hata(goreliDosya, "Yayın metninde geçersiz veya hesaplanamamış bir değer bulundu.");
  }
  if (/<\/?[a-z][^>]*>/i.test(tumMetin)) {
    hata(goreliDosya, "JSON metin alanlarında HTML etiketi kullanılmamalı.");
  }
  if (/kesin yükselecek|garantili getiri|kesin kazandır|alım fırsatıdır|satın alın/i.test(tumMetin)) {
    hata(goreliDosya, "Yatırım tavsiyesi veya kesin getiri vaadi niteliğinde ifade bulundu.");
  }

  haberTekrarlariniKontrolEt(goreliDosya, veri, yayinAdayi);
  haberBakisAcisiniKontrolEt(goreliDosya, veri, yayinAdayi);
  haberEditorDerinliginiKontrolEt(goreliDosya, veri, yayinAdayi);

  const icerikKarakteri = metinleriTopla({
    kaynakOzeti: veri.kaynakOzeti,
    editorDegerlendirmesi: veri.editorDegerlendirmesi,
    kapEtkiAnalizi: veri.kapEtkiAnalizi,
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
  if (!sikiInceleme && eskiHrefler.has(haber.href)) {
    uyari("app/data/news.ts", `Tekrarlanan eski haber adresi: ${haber.href}`);
  }
  eskiHrefler.set(haber.href, haber);

  if (!sikiInceleme && eskiIdler.has(haber.id)) {
    uyari("app/data/news.ts", `Tekrarlanan eski haber id'si: ${haber.id}`);
  }
  eskiIdler.set(haber.id, haber.href);
  eskiBasliklar.set(normalize(haber.title), haber.href);

  if (
    !sikiInceleme &&
    haber.image &&
    !fs.existsSync(path.join(PUBLIC_DIZINI, haber.image.replace(/^\/+/, "")))
  ) {
    uyari("app/data/news.ts", `Eski haber görseli bulunamadı: ${haber.image}`);
  }

  const slug = haber.href.startsWith("/haber/") ? haber.href.slice(7) : "";
  const statikSayfa = slug && fs.existsSync(path.join(HABER_SAYFA_DIZINI, slug, "page.tsx"));
  const yeniSayfa = kayitlar.some(
    ({ veri }) =>
      yayindaSayiliyorMu(veri) &&
      `/haber/${veri.slug}` === haber.href
  );
  if (!sikiInceleme && slug && !statikSayfa && !yeniSayfa) {
    hata("app/data/news.ts", `Listede var ancak sayfası bulunamadı: ${haber.href}`);
  }
}

for (const { goreliDosya, veri } of kayitlar) {
  if (!veri || (veri.durum !== "yayinda" && veri.slug !== hedefSlug)) continue;
  if (sikiInceleme && veri.slug !== hedefSlug) continue;
  const href = `/haber/${veri.slug}`;
  if (eskiHrefler.has(href)) {
    hata(goreliDosya, "Bu adres app/data/news.ts içinde de var; yeni sistem tek kaynak olmalı.");
  }
  const eskiBaslikHref = eskiBasliklar.get(normalize(veri.baslik));
  if (eskiBaslikHref && eskiBaslikHref !== href) {
    hata(goreliDosya, `Aynı başlık eski bir haberde kullanılmış: ${eskiBaslikHref}`);
  }
}

if (!sikiInceleme && fs.existsSync(HABER_SAYFA_DIZINI)) {
  for (const klasor of fs.readdirSync(HABER_SAYFA_DIZINI, { withFileTypes: true })) {
    if (!klasor.isDirectory() || klasor.name.startsWith("[")) continue;
    const page = path.join(HABER_SAYFA_DIZINI, klasor.name, "page.tsx");
    if (!fs.existsSync(page)) continue;
    const href = `/haber/${klasor.name}`;
    const yeniKayitVar = kayitlar.some(
      ({ veri }) =>
        yayindaSayiliyorMu(veri) &&
        veri.slug === klasor.name
    );
    if (!eskiHrefler.has(href) && !yeniKayitVar) {
      hata("app/haber", `Sayfası var ancak haber listesinde kayıtlı değil: ${href}`);
    }
  }
}

console.log("\nHaber yayın öncesi kalite kontrolü");
console.log(
  `Yeni sistem: ${kayitlar.filter(({ veri }) => yayindaSayiliyorMu(veri)).length} yayında, ${kayitlar.filter(({ veri }) => veri?.durum === "taslak" && !yayindaSayiliyorMu(veri)).length} taslak`
);
console.log(`Eski sistem denetimi: ${eskiHaberler.length} kayıt`);

for (const mesaj of uyarilar) console.warn(`UYARI  ${mesaj}`);
for (const mesaj of hatalar) console.error(`HATA   ${mesaj}`);

if (hatalar.length > 0) {
  console.error(`\nKontrol başarısız: ${hatalar.length} hata, ${uyarilar.length} uyarı.`);
  process.exit(1);
}

if (yayinaAl) {
  const hedefKayit = kayitlar.find(({ veri }) => veri?.slug === hedefSlug);
  if (hedefKayit.veri.durum === "yayinda") {
    console.log(`\nHaber zaten yayında: /haber/${hedefSlug}`);
  } else {
    hedefKayit.veri.durum = "yayinda";
    fs.writeFileSync(
      path.join(HABER_DIZINI, hedefKayit.dosya),
      `${JSON.stringify(hedefKayit.veri, null, 2)}\n`,
      "utf8"
    );
    console.log(`\nHaber yayına alındı: /haber/${hedefSlug}`);
  }
}

console.log(`\nKontrol başarılı: hata yok, ${uyarilar.length} uyarı.`);

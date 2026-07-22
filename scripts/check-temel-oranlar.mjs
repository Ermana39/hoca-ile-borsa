import fs from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(
  process.cwd(),
  "app",
  "borsa",
  "oran-analizi",
  "data",
);
const EXCEL_PATH = path.join(DATA_DIR, "oran-analizi.xlsx");
const JSON_PATH = path.join(DATA_DIR, "oran-analizi.json");
const PROFILES_DIR = path.join(process.cwd(), "data", "hisseler");
const OFFICIAL_SOURCES_PATH = path.join(
  process.cwd(),
  "data",
  "hisse-resmi-kaynaklar.json",
);
const CORPORATE_ACTIONS_PATH = path.join(
  process.cwd(),
  "data",
  "hisse-hak-kullanimlari.generated.json",
);

const ZORUNLU_SUTUNLAR = [
  "Senet",
  "Dönem",
  "F/K",
  "PD/DD",
  "PEG Oranı",
  "NetKar/ Özsermaye",
  "NetKar/ NetSatış",
  "PD/ NetSatış",
  "Cari Oran",
  "Net Kar Değ%",
  "Net Satış Değ%",
];

const ORAN_SUTUNLARI = ZORUNLU_SUTUNLAR.slice(2);

function trTarih(date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function hata(mesaj) {
  throw new Error(`Oran analizi doğrulama hatası: ${mesaj}`);
}

function doluMetin(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function doluListe(value) {
  return Array.isArray(value) && value.some(doluMetin);
}

async function main() {
  const [excelStat, jsonMetni] = await Promise.all([
    fs.stat(EXCEL_PATH),
    fs.readFile(JSON_PATH, "utf-8"),
  ]);
  const veri = JSON.parse(jsonMetni);

  if (!Array.isArray(veri.columns) || !Array.isArray(veri.rows)) {
    hata("JSON içinde columns ve rows dizileri bulunamadı.");
  }

  const eksikSutunlar = ZORUNLU_SUTUNLAR.filter(
    (sutun) => !veri.columns.includes(sutun),
  );
  if (eksikSutunlar.length > 0) {
    hata(`Excel'de zorunlu sütunlar eksik: ${eksikSutunlar.join(", ")}`);
  }

  const beklenenTarih = trTarih(excelStat.mtime);
  if (veri.guncellemeTarihi !== beklenenTarih) {
    hata(
      `JSON güncel değil. Excel tarihi ${beklenenTarih}, JSON tarihi ${veri.guncellemeTarihi ?? "yok"}.`,
    );
  }

  const kodlar = new Set();
  const donemler = new Set();
  const oraniOlmayanKodlar = [];

  for (const satir of veri.rows) {
    const kod = String(satir.Senet ?? "")
      .trim()
      .toUpperCase();
    const donem = String(satir["Dönem"] ?? "").trim();

    // Sektör başlıklarının dönem alanı yoktur; yalnız şirket satırlarını doğrula.
    if (!/^\d{2,4}-\d{2}$/.test(donem)) continue;

    if (!/^[A-Z0-9]{2,6}$/.test(kod)) {
      hata(`Geçersiz hisse kodu: ${kod || "boş"}`);
    }
    if (kodlar.has(kod)) {
      hata(`Aynı hisse kodu birden fazla kez bulunuyor: ${kod}`);
    }

    const anlamliOranVar = ORAN_SUTUNLARI.some((sutun) => {
      const deger = satir[sutun];
      return typeof deger === "number" && Number.isFinite(deger) && deger !== 0;
    });
    if (!anlamliOranVar) {
      oraniOlmayanKodlar.push(kod);
    }

    kodlar.add(kod);
    donemler.add(donem);
  }

  if (kodlar.size === 0) {
    hata("Hiçbir şirket satırı bulunamadı.");
  }

  const profileFiles = (await fs.readdir(PROFILES_DIR)).filter((file) =>
    file.toLowerCase().endsWith(".json"),
  );
  const officialSourcesDocument = JSON.parse(
    await fs.readFile(OFFICIAL_SOURCES_PATH, "utf-8"),
  );
  const officialSources = officialSourcesDocument.profiles ?? {};
  const profileCodes = new Set(
    profileFiles.map((file) => path.basename(file, ".json").toUpperCase()),
  );
  const missingProfiles = [...kodlar].filter((code) => !profileCodes.has(code));
  if (missingProfiles.length > 0) {
    hata(
      `Künye sayfası bulunmayan oran analizi kodları: ${missingProfiles.join(", ")}`,
    );
  }

  const profileErrors = [];
  for (const code of kodlar) {
    const profilePath = path.join(PROFILES_DIR, `${code.toLowerCase()}.json`);
    const profile = JSON.parse(await fs.readFile(profilePath, "utf-8"));
    const corporate = profile.kurumsalBilgiler ?? {};
    const officialSource = officialSources[code.toLowerCase()] ?? {};

    if (String(profile.kod ?? "").trim().toUpperCase() !== code) {
      profileErrors.push(`${code}: kod alanı dosya adıyla uyuşmuyor`);
    }
    if (!doluMetin(profile.sirketAdi) || !doluListe(profile.hakkinda)) {
      profileErrors.push(`${code}: şirket adı veya profil açıklaması eksik`);
    }
    if (
      String(profile.borsaBilgileri?.bistKodu ?? "")
        .trim()
        .toUpperCase() !== code ||
      !Array.isArray(profile.borsaBilgileri?.endeksler)
    ) {
      profileErrors.push(`${code}: BIST kodu veya endeks listesi geçersiz`);
    }
    if (
      !Array.isArray(profile.ortaklikYapisi?.ortaklar) ||
      !Array.isArray(profile.temettuSermayeGecmisi)
    ) {
      profileErrors.push(`${code}: ortaklık veya hak kullanımı arşivi geçersiz`);
    }
    if (
      !doluMetin(corporate.faaliyetAlani) ||
      !doluListe(corporate.sektorler) ||
      !doluListe(corporate.islemGorduguPazar)
    ) {
      profileErrors.push(`${code}: faaliyet, sektör veya pazar bilgisi eksik`);
    }
    if (
      !doluMetin(corporate.kapSirketProfili) &&
      !doluMetin(officialSource.kapSirketProfili)
    ) {
      profileErrors.push(`${code}: doğrudan KAP şirket profili bağlantısı eksik`);
    }
    if (!doluMetin(profile.seo?.title) || !doluMetin(profile.seo?.description)) {
      profileErrors.push(`${code}: SEO başlığı veya açıklaması eksik`);
    }
  }

  if (profileErrors.length > 0) {
    hata(`Künye kalite sorunları:\n- ${profileErrors.join("\n- ")}`);
  }

  const corporateActionsDocument = JSON.parse(
    await fs.readFile(CORPORATE_ACTIONS_PATH, "utf-8"),
  );
  const corporateActions = corporateActionsDocument.profiles ?? {};
  const missingCorporateActions = [...kodlar].filter(
    (code) => !corporateActions[code],
  );
  if (missingCorporateActions.length > 0) {
    hata(
      `Temettü/bölünme kaydı bulunmayan oran analizi kodları: ${missingCorporateActions.join(", ")}`,
    );
  }
  const failedCorporateActions = [...kodlar].filter(
    (code) => corporateActions[code]?.durum === "error",
  );
  if (failedCorporateActions.length > 0) {
    hata(
      `Temettü/bölünme sorgusu hatalı oran analizi kodları: ${failedCorporateActions.join(", ")}`,
    );
  }

  console.log(
    `Oran analizi kaynağı doğrulandı: ${kodlar.size} hisse, ${[
      ...donemler,
    ].join(", ")} dönemi, güncelleme ${veri.guncellemeTarihi}. ` +
      `Künye kapsamı ${kodlar.size}/${kodlar.size}. ` +
      `Temettü/bölünme kapsamı ${kodlar.size}/${kodlar.size}. ` +
      `Oranı henüz oluşmayan ${oraniOlmayanKodlar.length} hissede oran bölümü gösterilmeyecek.`,
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

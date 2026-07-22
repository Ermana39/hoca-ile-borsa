import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const profilesDir = path.join(rootDir, "data", "hisseler");
const snapshotFile = path.join(
  rootDir,
  "data",
  "bist-tum-sirketleri.generated.json"
);
const corporateActionsFile = path.join(
  rootDir,
  "data",
  "hisse-hak-kullanimlari.generated.json"
);

const errors = [];
const warnings = [];
const FLIGHT_REFERENCE_RE = /^\$[0-9a-z]+$/i;

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`${path.relative(rootDir, filePath)}: ${error.message}`);
    return null;
  }
}

function hasText(value) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    !FLIGHT_REFERENCE_RE.test(value.trim())
  );
}

function hasList(value) {
  return Array.isArray(value) && value.length > 0;
}

function normalize(value) {
  return String(value ?? "")
    .toLocaleUpperCase("tr-TR")
    .replace(/İ/g, "I")
    .replace(/Ü/g, "U")
    .replace(/Ş/g, "S")
    .replace(/Ö/g, "O")
    .replace(/Ç/g, "C")
    .replace(/Ğ/g, "G");
}

function findFlightReferences(value, currentPath = "") {
  if (typeof value === "string") {
    return FLIGHT_REFERENCE_RE.test(value.trim()) ? [currentPath] : [];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      findFlightReferences(item, `${currentPath}[${index}]`)
    );
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) =>
      findFlightReferences(item, currentPath ? `${currentPath}.${key}` : key)
    );
  }
  return [];
}

const snapshot = readJson(snapshotFile);
const companies = Array.isArray(snapshot?.companies) ? snapshot.companies : [];
const corporateActions = readJson(corporateActionsFile);
const corporateActionProfiles = corporateActions?.profiles ?? {};
let dividendRecordCount = 0;
let splitRecordCount = 0;
let marketSplitRecordCount = 0;
let archiveSplitRecordCount = 0;
let unavailableActionProfileCount = 0;
let detailedAnalysisProfileCount = 0;

const turkishMonths = new Map([
  ["oca", "01"],
  ["şub", "02"],
  ["sub", "02"],
  ["mar", "03"],
  ["nis", "04"],
  ["may", "05"],
  ["haz", "06"],
  ["tem", "07"],
  ["ağu", "08"],
  ["agu", "08"],
  ["eyl", "09"],
  ["eki", "10"],
  ["kas", "11"],
  ["ara", "12"],
]);

function decimalText(value, maximumFractionDigits = 8) {
  return Number(value)
    .toFixed(maximumFractionDigits)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

function archiveSplitKey(record) {
  if (
    !/bölünme/i.test(
      `${record?.tur ?? record?.islem ?? ""} ${record?.aciklama ?? ""}`
    )
  ) {
    return null;
  }

  const dateMatch = String(record?.yil ?? record?.tarih ?? "")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .match(/^(\d{1,2})\s+([^\s]+)\s+(\d{4})$/);
  if (!dateMatch) return "invalid";

  const month = turkishMonths.get(dateMatch[2].slice(0, 3));
  const ratio = Number(
    String(record?.tutarOran ?? record?.oran ?? "")
      .split(":")[0]
      .replace(",", ".")
      .trim()
  );
  if (!month || !Number.isFinite(ratio) || ratio <= 0) return "invalid";

  const isoDate = `${dateMatch[3]}-${month}-${dateMatch[1].padStart(2, "0")}`;
  return `${isoDate}|${decimalText(ratio)}:1`;
}

if (companies.length === 0) {
  errors.push("BIST TÜM şirket anlık görüntüsü boş veya bulunamadı.");
}

const expectedCodes = new Set();
for (const company of companies) {
  const code = String(company?.kod ?? "").toUpperCase();
  if (!/^[A-Z0-9]{2,6}$/.test(code)) {
    errors.push(`BIST TÜM anlık görüntüsünde geçersiz kod: ${code || "(boş)"}`);
    continue;
  }
  if (expectedCodes.has(code)) errors.push(`BIST TÜM listesinde tekrar: ${code}`);
  expectedCodes.add(code);

  const filePath = path.join(profilesDir, `${code.toLowerCase()}.json`);
  if (!fs.existsSync(filePath)) {
    errors.push(`${code}: şirket künye dosyası bulunamadı.`);
    continue;
  }

  const profile = readJson(filePath);
  if (!profile) continue;
  const actionProfile = corporateActionProfiles[code];
  const corporate = profile.kurumsalBilgiler ?? {};
  const market = profile.borsaBilgileri ?? {};
  const shareholders = profile.ortaklikYapisi?.ortaklar;
  const dataNotes = normalize(
    Array.isArray(corporate.veriNotlari)
      ? corporate.veriNotlari.join(" ")
      : ""
  );
  const flightReferences = findFlightReferences(profile);
  for (const referencePath of flightReferences) {
    errors.push(`${code}: teknik veri referansı içerikte kaldı (${referencePath}).`);
  }

  if (String(profile.kod ?? "").toUpperCase() !== code) {
    errors.push(`${code}: JSON içindeki hisse kodu dosya adıyla eşleşmiyor.`);
  }
  if (!hasText(profile.sirketAdi)) errors.push(`${code}: şirket adı eksik.`);

  if (!actionProfile) {
    errors.push(`${code}: geçmiş temettü ve bölünme kapsam kaydı eksik.`);
  } else {
    if (!hasText(actionProfile.kaynakSembol)) {
      errors.push(`${code}: hak kullanımı kaynak sembolü eksik.`);
    }
    if (!hasText(actionProfile.kaynakUrl)) {
      errors.push(`${code}: hak kullanımı kaynak bağlantısı eksik.`);
    }
    if (!Array.isArray(actionProfile.temettuler)) {
      errors.push(`${code}: geçmiş temettü listesi geçersiz.`);
    }
    if (!Array.isArray(actionProfile.bolunmeler)) {
      errors.push(`${code}: geçmiş bölünme listesi geçersiz.`);
    }
    if (actionProfile.durum === "error") {
      errors.push(`${code}: hak kullanımı senkronizasyon hatası: ${actionProfile.hata ?? "bilinmiyor"}`);
    } else if (actionProfile.durum === "unavailable") {
      unavailableActionProfileCount += 1;
    } else if (actionProfile.durum !== "ok") {
      errors.push(`${code}: geçersiz hak kullanımı durumu.`);
    }

    const dividendKeys = new Set();
    for (const record of actionProfile.temettuler ?? []) {
      const key = `${record?.isoTarih}|${record?.brut}`;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(record?.isoTarih ?? "")) {
        errors.push(`${code}: geçersiz temettü tarihi: ${record?.isoTarih ?? "(boş)"}`);
      }
      if (!Number.isFinite(record?.brut) || record.brut <= 0) {
        errors.push(`${code}: geçersiz hisse başı brüt temettü.`);
      }
      if (!hasText(record?.paraBirimi)) {
        errors.push(`${code}: temettü para birimi eksik.`);
      }
      if (dividendKeys.has(key)) {
        errors.push(`${code}: tekrar eden geçmiş temettü kaydı: ${key}`);
      }
      dividendKeys.add(key);
      dividendRecordCount += 1;
    }

    const splitKeys = new Set();
    for (const record of actionProfile.bolunmeler ?? []) {
      const key = `${record?.isoTarih}|${record?.oran}`;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(record?.isoTarih ?? "")) {
        errors.push(`${code}: geçersiz bölünme tarihi: ${record?.isoTarih ?? "(boş)"}`);
      }
      if (!hasText(record?.oran)) {
        errors.push(`${code}: bölünme oranı eksik.`);
      }
      if (!Number.isFinite(record?.katsayi) || record.katsayi <= 0) {
        errors.push(`${code}: geçersiz bölünme katsayısı.`);
      }
      if (!["piyasa-verisi", "kunye-arsivi"].includes(record?.kaynak)) {
        errors.push(`${code}: geçersiz bölünme kaynak etiketi.`);
      }
      if (record?.kaynak === "piyasa-verisi") marketSplitRecordCount += 1;
      if (record?.kaynak === "kunye-arsivi") archiveSplitRecordCount += 1;
      if (splitKeys.has(key)) {
        errors.push(`${code}: tekrar eden geçmiş bölünme kaydı: ${key}`);
      }
      splitKeys.add(key);
      splitRecordCount += 1;
    }

    const archivedSplitKeys = new Set(
      (profile.temettuSermayeGecmisi ?? [])
        .map(archiveSplitKey)
        .filter((key) => key !== null)
    );
    if (archivedSplitKeys.has("invalid")) {
      errors.push(`${code}: künye arşivinde dönüştürülemeyen bölünme kaydı var.`);
    }
    archivedSplitKeys.delete("invalid");
    for (const key of archivedSplitKeys) {
      if (!splitKeys.has(key)) {
        errors.push(`${code}: künye arşivi bölünmesi birleşik veride eksik: ${key}`);
      }
    }
  }
  const about = Array.isArray(profile.hakkinda)
    ? profile.hakkinda.filter(hasText)
    : [];
  if (about.length < 1) {
    errors.push(`${code}: şirkete özgü profil açıklaması eksik.`);
  }
  if (new Set(about.map((item) => normalize(item))).size !== about.length) {
    errors.push(`${code}: şirket profili içinde tekrar eden paragraf var.`);
  }
  if (!hasText(corporate.faaliyetAlani)) errors.push(`${code}: faaliyet alanı eksik.`);
  if (!hasList(corporate.sektorler)) errors.push(`${code}: sektör bilgisi eksik.`);
  if (
    (corporate.sektorler ?? []).some((item) =>
      [
        "BORSA ISTANBUL SIRKETLERI",
        "SERMAYE PIYASASI ARACININ ISLEM GORDUGU PAZAR",
      ].includes(normalize(item))
    )
  ) {
    errors.push(`${code}: sektör alanında yer tutucu değer kullanılmış.`);
  }
  if (!hasList(corporate.islemGorduguPazar)) errors.push(`${code}: pazar bilgisi eksik.`);
  if (
    (corporate.islemGorduguPazar ?? []).some(
      (item) => normalize(item) === "BORSA ISTANBUL PAY PIYASASI"
    )
  ) {
    errors.push(`${code}: pazar alanında yer tutucu değer kullanılmış.`);
  }
  if (!hasList(market.endeksler)) {
    errors.push(`${code}: endeks bilgisi eksik.`);
  } else if (!market.endeksler.some((item) => normalize(item) === "BIST TUM")) {
    errors.push(`${code}: resmi BIST TÜM üyeliği künye verisinde bulunmuyor.`);
  }
  if (!hasText(corporate.kapSirketProfili)) errors.push(`${code}: KAP profil bağlantısı eksik.`);
  if (
    hasText(company.mkkMemberOid) &&
    !String(corporate.kapSirketProfili ?? "").includes(company.mkkMemberOid)
  ) {
    errors.push(`${code}: KAP profil bağlantısı yanlış şirket kimliğine gidiyor.`);
  }
  if (!hasText(profile.veriDogrulama?.sonDogrulamaTarihi)) {
    errors.push(`${code}: son doğrulama tarihi eksik.`);
  }
  if (!hasText(profile.ozgunAnaliz?.isModeli)) errors.push(`${code}: iş modeli metni eksik.`);
  if (
    hasList(profile.ozgunAnaliz?.gelirKaynaklari) &&
    hasList(profile.ozgunAnaliz?.gucluYanlar) &&
    hasList(profile.ozgunAnaliz?.riskler)
  ) {
    detailedAnalysisProfileCount += 1;
  }
  if (!hasText(profile.seo?.title) || !hasText(profile.seo?.description)) {
    errors.push(`${code}: SEO başlığı veya açıklaması eksik.`);
  }
  if (!hasList(shareholders) && !hasText(profile.ortaklikYapisi?.not)) {
    errors.push(`${code}: ortaklık verisi veya resmi kaynak açıklaması eksik.`);
  }

  if (!hasText(corporate.merkez) && !dataNotes.includes("MERKEZ ADRESI")) {
    warnings.push(`${code}: merkez adresi KAP'ta bulunamadı.`);
  }
  if (!hasText(corporate.web) && !dataNotes.includes("INTERNET ADRESI")) {
    warnings.push(`${code}: resmi internet adresi KAP'ta bulunamadı.`);
  }
  if (!hasList(corporate.yonetimKurulu) && !dataNotes.includes("YONETIM KURULU")) {
    warnings.push(`${code}: yönetim kurulu KAP'ta bulunamadı.`);
  }

  const canonicalCode = String(company.anaHisseKodu ?? code).toUpperCase();
  if (canonicalCode !== code && market.anaHisseKodu !== canonicalCode) {
    errors.push(`${code}: çoklu pay sınıfı canonical kodu ${canonicalCode} olmalı.`);
  }
}

console.log(`BIST TÜM pay kodu: ${expectedCodes.size}`);
console.log(`Geçmiş temettü kaydı: ${dividendRecordCount}`);
console.log(`Geçmiş bölünme kaydı: ${splitRecordCount}`);
console.log(`Piyasa kaynağından bölünme: ${marketSplitRecordCount}`);
console.log(`Künye arşivinden korunan bölünme: ${archiveSplitRecordCount}`);
console.log(`Hak kullanımı kaynağında bulunamayan kod: ${unavailableActionProfileCount}`);
console.log(`Özgün gelir/güçlü yan/risk analizi bulunan künye: ${detailedAnalysisProfileCount}`);
console.log(`Kalite uyarısı: ${warnings.length}`);
for (const warning of warnings.slice(0, 30)) console.warn(`UYARI ${warning}`);
if (warnings.length > 30) console.warn(`UYARI +${warnings.length - 30} kayıt daha`);

if (errors.length > 0) {
  for (const error of errors) console.error(`HATA ${error}`);
  console.error(`Hisse künye kalite kontrolü başarısız: ${errors.length} hata`);
  process.exitCode = 1;
} else {
  console.log("Hisse künye kalite kontrolü başarılı.");
}

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const profilesDir = path.join(rootDir, "data", "hisseler");
const snapshotFile = path.join(
  rootDir,
  "data",
  "bist-tum-sirketleri.generated.json"
);

const errors = [];
const warnings = [];

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`${path.relative(rootDir, filePath)}: ${error.message}`);
    return null;
  }
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
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

const snapshot = readJson(snapshotFile);
const companies = Array.isArray(snapshot?.companies) ? snapshot.companies : [];

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
  const corporate = profile.kurumsalBilgiler ?? {};
  const market = profile.borsaBilgileri ?? {};
  const shareholders = profile.ortaklikYapisi?.ortaklar;

  if (String(profile.kod ?? "").toUpperCase() !== code) {
    errors.push(`${code}: JSON içindeki hisse kodu dosya adıyla eşleşmiyor.`);
  }
  if (!hasText(profile.sirketAdi)) errors.push(`${code}: şirket adı eksik.`);
  if (!Array.isArray(profile.hakkinda) || profile.hakkinda.filter(hasText).length < 2) {
    errors.push(`${code}: şirket hakkında en az iki dolu paragraf gerekli.`);
  }
  if (!hasText(corporate.faaliyetAlani)) errors.push(`${code}: faaliyet alanı eksik.`);
  if (!hasList(corporate.sektorler)) errors.push(`${code}: sektör bilgisi eksik.`);
  if (!hasList(corporate.islemGorduguPazar)) errors.push(`${code}: pazar bilgisi eksik.`);
  if (!hasList(market.endeksler)) {
    errors.push(`${code}: endeks bilgisi eksik.`);
  } else if (!market.endeksler.some((item) => normalize(item) === "BIST TUM")) {
    errors.push(`${code}: resmi BIST TÜM üyeliği künye verisinde bulunmuyor.`);
  }
  if (!hasText(corporate.kapSirketProfili)) errors.push(`${code}: KAP profil bağlantısı eksik.`);
  if (!hasText(profile.veriDogrulama?.sonDogrulamaTarihi)) {
    errors.push(`${code}: son doğrulama tarihi eksik.`);
  }
  if (!hasText(profile.ozgunAnaliz?.isModeli)) errors.push(`${code}: iş modeli metni eksik.`);
  if (!hasText(profile.seo?.title) || !hasText(profile.seo?.description)) {
    errors.push(`${code}: SEO başlığı veya açıklaması eksik.`);
  }
  if (!hasList(shareholders) && !hasText(profile.ortaklikYapisi?.not)) {
    errors.push(`${code}: ortaklık verisi veya resmi kaynak açıklaması eksik.`);
  }

  if (!hasText(corporate.merkez)) warnings.push(`${code}: merkez adresi KAP'ta bulunamadı.`);
  if (!hasText(corporate.web)) warnings.push(`${code}: resmi internet adresi KAP'ta bulunamadı.`);
  if (!hasList(corporate.yonetimKurulu)) warnings.push(`${code}: yönetim kurulu KAP'ta bulunamadı.`);

  const canonicalCode = String(company.anaHisseKodu ?? code).toUpperCase();
  if (canonicalCode !== code && market.anaHisseKodu !== canonicalCode) {
    errors.push(`${code}: çoklu pay sınıfı canonical kodu ${canonicalCode} olmalı.`);
  }
}

console.log(`BIST TÜM pay kodu: ${expectedCodes.size}`);
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

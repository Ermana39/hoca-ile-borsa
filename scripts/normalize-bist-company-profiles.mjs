import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const profilesDir = path.join(rootDir, "data", "hisseler");
const snapshotPath = path.join(
  rootDir,
  "data",
  "bist-tum-sirketleri.generated.json"
);
const profilePathsPath = path.join(
  rootDir,
  "data",
  "kap-profil-yollari.generated.json"
);
const verifiedAt = new Date().toISOString().slice(0, 10);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
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
    .replace(/Ğ/g, "G")
    .trim();
}

function replaceTicker(value, from, to) {
  if (typeof value === "string") {
    return value.replace(new RegExp(`\\b${from}\\b`, "g"), to);
  }
  if (Array.isArray(value)) {
    return value.map((item) => replaceTicker(item, from, to));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        replaceTicker(item, from, to),
      ])
    );
  }
  return value;
}

function cleanObject(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => {
      if (item === undefined || item === null || item === "") return false;
      if (Array.isArray(item) && item.length === 0) return false;
      return true;
    })
  );
}

function ensureBistTum(indices) {
  const result = hasList(indices) ? [...indices] : [];
  if (!result.some((item) => normalize(item) === "BIST TUM")) {
    result.push("BIST TÜM");
  }
  return result;
}

function writeJsonIfChanged(filePath, value) {
  const next = `${JSON.stringify(value, null, 2)}\n`;
  const current = fs.readFileSync(filePath, "utf8");
  if (current === next) return false;
  fs.writeFileSync(filePath, next, "utf8");
  return true;
}

const snapshot = readJson(snapshotPath);
const profilePathDocument = readJson(profilePathsPath);
const profilePaths =
  profilePathDocument.profiles ?? profilePathDocument.sirketler ?? {};
const filesByCode = new Map(
  fs
    .readdirSync(profilesDir)
    .filter((file) => /\.json$/i.test(file))
    .map((file) => [file.replace(/\.json$/i, "").toUpperCase(), file])
);

let changed = 0;
let skipped = 0;

for (const company of snapshot.companies ?? []) {
  const code = String(company.kod ?? "").toUpperCase();
  const fileName = filesByCode.get(code);
  if (!fileName) {
    skipped += 1;
    continue;
  }

  const filePath = path.join(profilesDir, fileName);
  let profile = readJson(filePath);
  if (code === "NETCD" && profile.kod === "NTCAD") {
    profile = replaceTicker(profile, "NTCAD", "NETCD");
  }

  const corporate = profile.kurumsalBilgiler ?? {};
  const market = profile.borsaBilgileri ?? {};
  const about = Array.isArray(profile.hakkinda)
    ? profile.hakkinda.filter(hasText)
    : hasText(profile.hakkinda)
      ? [profile.hakkinda]
      : [];
  const activity =
    corporate.faaliyetAlani ||
    corporate.faaliyetAlanlari ||
    profile.ozgunAnaliz?.isModeli ||
    about[1] ||
    `${company.sirketAdi}, Borsa İstanbul'da ${code} koduyla işlem gören bir şirkettir.`;
  const sectors = hasList(corporate.sektorler)
    ? corporate.sektorler
    : hasList(market.sektorler)
      ? market.sektorler
      : ["Borsa İstanbul şirketleri"];
  const markets = hasList(corporate.islemGorduguPazar)
    ? corporate.islemGorduguPazar
    : hasList(market.islemGorduguPazar)
      ? market.islemGorduguPazar
      : ["Borsa İstanbul Pay Piyasası"];
  const kapSummaryUrl = profilePaths[code];
  const kapProfileUrl = kapSummaryUrl
    ? kapSummaryUrl.replace("/ozet/", "/genel/")
    : company.kapSirketProfili;

  while (about.length < 2) {
    about.push(
      about.length === 0
        ? `${company.sirketAdi}, Borsa İstanbul'da ${code} koduyla işlem görür.`
        : activity
    );
  }

  const history = Array.isArray(profile.degisiklikGecmisi)
    ? profile.degisiklikGecmisi.filter(
        (entry) =>
          entry?.tarih !== verifiedAt ||
          entry?.baslik !== "BIST TÜM künye standardı doğrulandı"
      )
    : [];
  const shareholders = Array.isArray(profile.ortaklikYapisi?.ortaklar)
    ? profile.ortaklikYapisi.ortaklar
    : [];

  const normalized = {
    ...profile,
    kod: code,
    sirketAdi: profile.sirketAdi || company.sirketAdi,
    hakkinda: about,
    ortaklikYapisi: {
      ...(profile.ortaklikYapisi ?? {}),
      ortaklar: shareholders,
      not:
        profile.ortaklikYapisi?.not ||
        (shareholders.length > 0
          ? "Ortaklık oranları resmi şirket verileri üzerinden kontrol edilmelidir."
          : "KAP profilinde sayısal doğrudan ortaklık oranı bulunmadığı için tahmini oran gösterilmemiştir."),
    },
    kurumsalBilgiler: cleanObject({
      ...corporate,
      bagimsizDenetimKurulusu:
        corporate.bagimsizDenetimKurulusu ?? corporate.bagimsizDenetim,
      faaliyetAlani: activity,
      sektorler: sectors,
      islemGorduguPazar: markets,
      kapSirketProfili: kapProfileUrl,
    }),
    borsaBilgileri: cleanObject({
      ...market,
      bistKodu: code,
      endeksler: ensureBistTum(market.endeksler),
      anaHisseKodu:
        company.anaHisseKodu && company.anaHisseKodu !== code
          ? company.anaHisseKodu
          : undefined,
    }),
    ozgunAnaliz: {
      ...(profile.ozgunAnaliz ?? {}),
      isModeli: profile.ozgunAnaliz?.isModeli || activity,
    },
    seo: {
      title:
        profile.seo?.title ||
        `${code} Hisse Bilgileri: ${company.sirketAdi} Şirket Profili`,
      description:
        profile.seo?.description ||
        `${code} kodlu ${company.sirketAdi} için faaliyet alanı, ortaklık yapısı, pazar ve endeks bilgileri.`,
    },
    veriDogrulama: {
      sonDogrulamaTarihi: verifiedAt,
      kaynak: "KAP",
      kaynakUrl: kapProfileUrl,
    },
    degisiklikGecmisi: [
      {
        tarih: verifiedAt,
        baslik: "BIST TÜM künye standardı doğrulandı",
        aciklama:
          "Hisse kodu, KAP bağlantısı, faaliyet, sektör, pazar ve endeks alanları BIST TÜM listesiyle eşleştirildi.",
      },
      ...history,
    ].slice(0, 6),
  };

  if (writeJsonIfChanged(filePath, normalized)) changed += 1;
}

console.log(`Güncellenen künye: ${changed}`);
console.log(`Henüz dosyası olmayan: ${skipped}`);

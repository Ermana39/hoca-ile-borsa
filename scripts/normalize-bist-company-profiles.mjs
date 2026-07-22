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
const webSupplementPath = path.join(
  rootDir,
  "data",
  "kap-kunye-web.generated.json"
);
const boardSupplementPath = path.join(
  rootDir,
  "data",
  "kap-kunye-board.generated.json"
);
const KAP_PROFILE_BASE =
  "https://www.kap.org.tr/tr/sirket-bilgileri/genel";
const verifiedAt = new Date().toISOString().slice(0, 10);

const DATA_NOTES = {
  address:
    "Merkez adresi son KAP doğrulamasında yayımlanmış bir değer olarak okunamadı.",
  web: "İnternet adresi son KAP doğrulamasında yayımlanmış bir değer olarak okunamadı.",
  board:
    "Yönetim kurulu tablosu son KAP doğrulamasında okunamadı; güncel liste KAP profilinden kontrol edilmelidir.",
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readOptionalJson(filePath, fallback) {
  return fs.existsSync(filePath) ? readJson(filePath) : fallback;
}

function hasText(value) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    !/^\$[0-9a-z]+$/i.test(value.trim())
  );
}

function isGeneratedAboutParagraph(value) {
  return (
    /Borsa İstanbul'da\s+\S+\s+koduyla işlem gören ve KAP sektör sınıflamasında/i.test(
      value
    ) ||
    /payları .+ kapsamında işlem görür\..+KAP profili üzerinden doğrulanmıştır/i.test(
      value
    )
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

function sanitizeProductionFacilities(values) {
  const invalidLabels = new Set([
    "ELEKTRONIK POSTA ADRESI",
    "INTERNET ADRESI",
    "YATIRIMCI ILISKILERI BOLUMU VEYA BAGLANTI KURULACAK SIRKET YETKILILERI",
    "BILGI MEVCUT DEGIL",
  ]);

  return (Array.isArray(values) ? values : [])
    .filter(hasText)
    .filter((value) => !invalidLabels.has(normalize(value)))
    .filter((value) => !/^[*._–—-]+$/.test(value.trim()));
}

function sanitizeFax(value) {
  if (!hasText(value)) return undefined;
  const trimmed = value.trim();
  return /^(?:\+|0)|[()\s.-]/.test(trimmed) ? trimmed : undefined;
}

function normalizeOfficialWeb(value) {
  if (!hasText(value)) return undefined;

  const matches = value.match(
    /(?:https?:\/\/|www\.)[^\s,;&]+|(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s,;&]*)?/gi
  );

  for (const match of matches ?? []) {
    const cleaned = match.replace(/[\])},.;]+$/g, "");
    const candidate = /^https?:\/\//i.test(cleaned)
      ? cleaned
      : `https://${cleaned}`;

    try {
      const url = new URL(candidate);
      if (
        ["http:", "https:"].includes(url.protocol) &&
        url.hostname.includes(".") &&
        /^[a-z0-9.-]+$/i.test(url.hostname)
      ) {
        return url.toString();
      }
    } catch {
      // KAP alanında açıklama metniyle karışan parçaları atla.
    }
  }

  return undefined;
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
const webSupplement = readOptionalJson(webSupplementPath, {});
const boardSupplement = readOptionalJson(boardSupplementPath, {});
const officialMissingWeb = new Set(webSupplement.officialMissing?.web ?? []);
const officialMissingAddress = new Set(
  webSupplement.officialMissing?.address ?? []
);
const officialMissingBoard = new Set(boardSupplement.officialMissing ?? []);
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
  const about = (Array.isArray(profile.hakkinda)
    ? profile.hakkinda.filter(hasText)
    : hasText(profile.hakkinda)
      ? [profile.hakkinda]
      : []
  ).filter((item) => !isGeneratedAboutParagraph(item));
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
  const activity = [
    corporate.faaliyetAlani,
    corporate.faaliyetAlanlari,
    profile.ozgunAnaliz?.isModeli,
    ...about,
  ].find(hasText) ||
    `${company.sirketAdi}, KAP'ta ${sectors.join(" / ")} altında sınıflandırılan bir şirkettir.`;
  const kapSummaryUrl = profilePaths[code];
  const kapProfileUrl = company.mkkMemberOid
    ? `${KAP_PROFILE_BASE}/${company.mkkMemberOid}`
    : kapSummaryUrl
      ? kapSummaryUrl.replace("/ozet/", "/genel/")
      : company.kapSirketProfili;

  if (about.length === 0) about.push(activity);

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
  const productionFacilities = sanitizeProductionFacilities(
    corporate.uretimTesisleri
  );
  const officialWeb =
    normalizeOfficialWeb(corporate.web) ||
    normalizeOfficialWeb(webSupplement.websites?.[code]);
  const officialAddress =
    corporate.merkez || webSupplement.addresses?.[code];
  const board = hasList(corporate.yonetimKurulu)
    ? corporate.yonetimKurulu
    : boardSupplement.boards?.[code];
  const dataNotes = Array.isArray(corporate.veriNotlari)
    ? corporate.veriNotlari
        .filter(hasText)
        .filter((note) => !Object.values(DATA_NOTES).includes(note))
    : [];

  if (!officialAddress && officialMissingAddress.has(code)) {
    dataNotes.push(DATA_NOTES.address);
  }
  if (!officialWeb && officialMissingWeb.has(code)) {
    dataNotes.push(DATA_NOTES.web);
  }
  if (!hasList(board) && officialMissingBoard.has(code)) {
    dataNotes.push(DATA_NOTES.board);
  }

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
      merkez: officialAddress,
      uretimTesisleri:
        productionFacilities.length > 0 ? productionFacilities : undefined,
      web: officialWeb,
      fax: sanitizeFax(corporate.fax),
      bagimsizDenetimKurulusu:
        corporate.bagimsizDenetimKurulusu ?? corporate.bagimsizDenetim,
      faaliyetAlani: activity,
      sektorler: sectors,
      islemGorduguPazar: markets,
      yonetimKurulu: hasList(board) ? board : undefined,
      veriNotlari: hasList(dataNotes) ? [...new Set(dataNotes)] : undefined,
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
      isModeli: hasText(profile.ozgunAnaliz?.isModeli)
        ? profile.ozgunAnaliz.isModeli
        : activity,
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
          "Hisse kodu, KAP bağlantısı, kurumsal bilgiler, faaliyet, sektör, pazar ve endeks alanları BIST TÜM listesiyle eşleştirildi.",
      },
      ...history,
    ].slice(0, 6),
  };

  if (writeJsonIfChanged(filePath, normalized)) changed += 1;
}

console.log(`Güncellenen künye: ${changed}`);
console.log(`Henüz dosyası olmayan: ${skipped}`);

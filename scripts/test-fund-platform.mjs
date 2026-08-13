import fs from "node:fs";
import path from "node:path";
import * as XLSX_MODULE from "xlsx";

const XLSX = XLSX_MODULE.default || XLSX_MODULE;

const rootDir = process.cwd();
const dataDir = path.join(rootDir, "data", "fonlar");
const detailDir = path.join(dataDir, "fund-details");
const sourcePaths = {
  getiri: path.join(
    rootDir,
    "app/fonlar/getiri/menkul-kiymet-yatirim-fonlari/data/menkul-kiymet-yatirim-fonlari-getiri.xlsx"
  ),
  tarihsel: path.join(
    rootDir,
    "app/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari/data/menkul-kiymet-yatirim-fonlari-tarihsel.xlsx"
  ),
  yoneticiler: path.join(
    rootDir,
    "app/fonlar/data/tefas_fon_kurucu_yonetici_eslesmeleri.xlsx"
  ),
  etki: path.join(
    rootDir,
    "app/fonlar/etki-analizi/_data/fon-etki-verileri.json"
  ),
  tercihExcel: path.join(
    rootDir,
    "app/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler/data/tercih-edilen-hisseler.xlsx"
  ),
  tercihJson: path.join(
    rootDir,
    "app/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler/data/tercih-edilen-hisseler.json"
  ),
};
const maxAbsoluteDailyReturn = 1;
const maxFundValueRelativeDifference = 0.005;

function readJson(fileName) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, fileName), "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function round(value, digits = 2) {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function normalize(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function parseNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  let text = String(value).trim().replace(/%/g, "").replace(/\s+/g, "");
  if (text.includes(",")) text = text.replace(/\./g, "").replace(",", ".");
  const parsed = Number(text.replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function parsePercent(value) {
  const parsed = parseNumber(value);
  if (parsed === null) return null;
  return typeof value === "string" && value.includes("%") ? parsed / 100 : parsed;
}

function parseDate(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return new Date(Math.round((value - 25569) * 86400 * 1000))
      .toISOString()
      .slice(0, 10);
  }
  if (value instanceof Date) return value.toISOString().slice(0, 10);

  const text = String(value ?? "").trim();
  const tr = text.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})/);
  if (tr) return `${tr[3]}-${tr[2].padStart(2, "0")}-${tr[1].padStart(2, "0")}`;
  const iso = text.match(/^(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);
  if (iso) return `${iso[1]}-${iso[2].padStart(2, "0")}-${iso[3].padStart(2, "0")}`;
  return null;
}

function readSourceTable(filePath, requiredHeaders) {
  const workbook = XLSX.readFile(filePath, { raw: true, cellDates: false });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: null,
    raw: true,
  });
  const headerIndex = rows.findIndex((row) => {
    const headers = row.map(normalize);
    return requiredHeaders.every((required) =>
      headers.some((header) => header.includes(normalize(required)))
    );
  });
  assert(headerIndex >= 0, `${path.basename(filePath)} başlık satırı bulunamadı.`);

  const headers = rows[headerIndex].map(normalize);
  const column = (name) => {
    const index = headers.findIndex((header) => header === normalize(name));
    assert(index >= 0, `${path.basename(filePath)} içinde "${name}" sütunu bulunamadı.`);
    return index;
  };

  return { rows: rows.slice(headerIndex + 1), column };
}

function assertSameNumber(actual, expected, message, tolerance = 0.011) {
  if (actual === null || expected === null) {
    assert(actual === expected, `${message}: beklenen ${expected}, gelen ${actual}`);
    return;
  }
  assert(
    Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance,
    `${message}: beklenen ${expected}, gelen ${actual}`
  );
}

function hasValidFinancialSnapshot(row) {
  return (
    row &&
    [row.fiyat, row.tedavuldekiPaySayisi, row.fonToplamDeger].every(
      (value) => typeof value === "number" && Number.isFinite(value) && value > 0
    )
  );
}

function addMonths(isoDate, months) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const target = new Date(Date.UTC(year, month - 1 + months, 1));
  const lastDay = new Date(
    Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)
  ).getUTCDate();
  return [
    target.getUTCFullYear(),
    String(target.getUTCMonth() + 1).padStart(2, "0"),
    String(Math.min(day, lastDay)).padStart(2, "0"),
  ].join("-");
}

function sumComplete(values) {
  if (
    values.length === 0 ||
    values.some((value) => typeof value !== "number" || !Number.isFinite(value))
  ) {
    return null;
  }
  return round(values.reduce((total, value) => total + value, 0), 2);
}

function average(values) {
  const valid = values.filter((value) => typeof value === "number" && Number.isFinite(value));
  if (valid.length === 0) return null;
  return round(valid.reduce((total, value) => total + value, 0) / valid.length, 8);
}

function expectedPeriods(rows, key, latestDate) {
  const lastFive = rows.slice(-5);
  const since = (cutoff) => {
    if (rows.length === 0 || rows[0].tarih > cutoff) return null;
    return sumComplete(rows.filter((row) => row.tarih >= cutoff).map((row) => row[key]));
  };

  return {
    gunluk: rows.at(-1)?.[key] ?? null,
    besGun: lastFive.length === 5 ? sumComplete(lastFive.map((row) => row[key])) : null,
    birAy: since(addMonths(latestDate, -1)),
    ucAy: since(addMonths(latestDate, -3)),
  };
}

function compactRanking(funds, selector, direction, predicate = () => true) {
  return funds
    .filter(predicate)
    .map((fund) => ({ kod: fund.kod, value: selector(fund) }))
    .filter((item) => typeof item.value === "number" && Number.isFinite(item.value))
    .sort((a, b) => (direction === "asc" ? a.value - b.value : b.value - a.value))
    .slice(0, 10);
}

function assertRanking(actual, expected, label) {
  assert(actual.length === expected.length, `${label} satır sayısı uyuşmuyor.`);
  for (let index = 0; index < expected.length; index += 1) {
    assert(actual[index].kod === expected[index].kod, `${label} ${index + 1}. fon kodu yanlış.`);
    assertSameNumber(actual[index].value, expected[index].value, `${label} ${actual[index].kod}`);
  }
}

const history = readJson("fund-history.json");
const current = readJson("fund-current.json");
const dashboard = readJson("fund-dashboard.json");
const managers = readJson("fund-managers.json");
const updateLog = readJson("fund-update-log.json");

assert(current.fonlar.length > 0, "Güncel fon listesi boş.");
assert(history.snapshots.length > 0, "Kalıcı fon geçmişi boş.");
assert(managers.yoneticiler.length > 0, "Yönetici listesi boş.");
assert(
  [current, dashboard, managers, history, updateLog].every(
    (file) => file.generatedAt === current.generatedAt
  ),
  "Üretilen fon JSON dosyalarının zaman damgaları farklı."
);
assert(current.sonIslemTarihi === dashboard.sonIslemTarihi, "Dashboard tarihi güncel veriyle uyuşmuyor.");
assert(current.sonIslemTarihi === managers.sonIslemTarihi, "Yönetici tarihi güncel veriyle uyuşmuyor.");

const historyKeys = new Set();
const historyByCode = new Map();
for (const snapshot of history.snapshots) {
  const key = `${snapshot.fonKodu}|${snapshot.tarih}`;
  assert(!historyKeys.has(key), `Tekrarlanan kalıcı snapshot: ${key}`);
  historyKeys.add(key);
  if (!historyByCode.has(snapshot.fonKodu)) historyByCode.set(snapshot.fonKodu, []);
  historyByCode.get(snapshot.fonKodu).push(snapshot);
}
for (const rows of historyByCode.values()) {
  rows.sort((a, b) => a.tarih.localeCompare(b.tarih));
}

const tarihselTable = readSourceTable(sourcePaths.tarihsel, ["Fon Kodu", "Fon Adı", "Tarih"]);
const tarihselColumns = {
  kod: tarihselTable.column("Fon Kodu"),
  ad: tarihselTable.column("Fon Adı"),
  tarih: tarihselTable.column("Tarih"),
  fiyat: tarihselTable.column("Fiyat"),
  pay: tarihselTable.column("Tedavüldeki Pay Sayısı"),
  kisi: tarihselTable.column("Kişi Sayısı"),
  toplam: tarihselTable.column("Fon Toplam Değer"),
};
const sourceSnapshots = tarihselTable.rows
  .map((row) => {
    const fiyat = round(parseNumber(row[tarihselColumns.fiyat]), 8);
    const tedavuldekiPaySayisi = round(parseNumber(row[tarihselColumns.pay]), 2);
    const kaynakFonToplamDeger = round(
      parseNumber(row[tarihselColumns.toplam]),
      2
    );
    const hesaplananFonToplamDeger =
      typeof fiyat === "number" &&
      fiyat > 0 &&
      typeof tedavuldekiPaySayisi === "number" &&
      tedavuldekiPaySayisi > 0
        ? round(fiyat * tedavuldekiPaySayisi, 2)
        : null;
    const toplamDegerFarkOrani =
      typeof kaynakFonToplamDeger === "number" &&
      kaynakFonToplamDeger > 0 &&
      typeof hesaplananFonToplamDeger === "number"
        ? Math.abs(hesaplananFonToplamDeger - kaynakFonToplamDeger) /
          kaynakFonToplamDeger
        : null;
    const toplamDegerDuzeltildi =
      toplamDegerFarkOrani !== null &&
      toplamDegerFarkOrani > maxFundValueRelativeDifference;

    return {
      fonKodu: String(row[tarihselColumns.kod] ?? "").trim().toUpperCase(),
      fonAdi: String(row[tarihselColumns.ad] ?? "").trim(),
      tarih: parseDate(row[tarihselColumns.tarih]),
      fiyat,
      tedavuldekiPaySayisi,
      kisiSayisi: round(parseNumber(row[tarihselColumns.kisi]), 0),
      fonToplamDeger: toplamDegerDuzeltildi
        ? hesaplananFonToplamDeger
        : kaynakFonToplamDeger,
      ...(toplamDegerDuzeltildi
        ? {
            kaynakFonToplamDeger,
            toplamDegerFarkOrani: round(toplamDegerFarkOrani, 8),
          }
        : {}),
    };
  })
  .filter((row) => row.fonKodu && row.tarih);
const sourceSnapshotKeys = new Set();
for (const row of sourceSnapshots) {
  const key = `${row.fonKodu}|${row.tarih}`;
  assert(!sourceSnapshotKeys.has(key), `Kaynak Excel'de tekrarlanan snapshot: ${key}`);
  sourceSnapshotKeys.add(key);
}
const sourceLatestDate = sourceSnapshots.map((row) => row.tarih).sort().at(-1);
const sourceLatest = sourceSnapshots.filter((row) => row.tarih === sourceLatestDate);
assert(
  sourceLatestDate === current.sonIslemTarihi,
  `Kaynak Excel tarihi (${sourceLatestDate ?? "bulunamadı"}) üretilen son işlem tarihiyle (${current.sonIslemTarihi ?? "bulunamadı"}) uyuşmuyor.`
);
assert(updateLog.islenenSnapshotSayisi === sourceSnapshots.length, "İşlenen snapshot sayısı kaynakla uyuşmuyor.");

const currentByCode = new Map(current.fonlar.map((fund) => [fund.kod, fund]));
assert(currentByCode.size === current.fonlar.length, "Güncel fon listesinde tekrarlanan kod var.");
const activeFunds = current.fonlar.filter((fund) => fund.aktifMi);
const expectedActiveCodes = new Set(
  sourceLatest.filter(hasValidFinancialSnapshot).map((row) => row.fonKodu)
);
assert(current.fonSayisi === activeFunds.length, "Aktif fon sayısı alanı listeyle uyuşmuyor.");
assert(activeFunds.length === expectedActiveCodes.size, "Aktif fon sayısı geçerli kaynak satırlarıyla uyuşmuyor.");
for (const fund of activeFunds) {
  assert(expectedActiveCodes.has(fund.kod), `${fund.kod} geçerli güncel kaynak kaydı olmadan aktif.`);
  assert(fund.tarih === current.sonIslemTarihi, `${fund.kod} aktif ama son işlem tarihinde değil.`);
  const product = fund.fiyat * fund.tedavuldekiPaySayisi;
  const relativeDifference = Math.abs(product - fund.fonToplamDeger) / fund.fonToplamDeger;
  assert(relativeDifference <= 0.005, `${fund.kod} fiyat × pay ile fon toplam değeri uyuşmuyor.`);
  assert(
    fund.gunlukGetiri === null || Math.abs(fund.gunlukGetiri) <= maxAbsoluteDailyReturn,
    `${fund.kod} güvenilir sınırı aşan günlük getiri yayımlıyor.`
  );
}

for (const row of sourceLatest) {
  const fund = currentByCode.get(row.fonKodu);
  assert(fund, `${row.fonKodu} kaynakta var, güncel fon çıktısında yok.`);
  for (const key of ["fiyat", "tedavuldekiPaySayisi", "kisiSayisi", "fonToplamDeger"]) {
    assertSameNumber(fund[key], row[key], `${row.fonKodu} ${key}`);
  }
  assert(fund.aktifMi === hasValidFinancialSnapshot(row), `${row.fonKodu} aktiflik durumu yanlış.`);
  if (typeof row.kaynakFonToplamDeger === "number") {
    assert(
      updateLog.veriUyarilari.some(
        (uyari) =>
          uyari.tur === "fon-toplam-degeri-duzeltildi" &&
          uyari.fonKodu === row.fonKodu &&
          uyari.tarih === row.tarih &&
          uyari.kaynakFonToplamDeger === row.kaynakFonToplamDeger &&
          uyari.hesaplananFonToplamDeger === row.fonToplamDeger
      ),
      `${row.fonKodu} toplam değer düzeltmesi uyarı kaydında yok.`
    );
  }
}

const totalFundSize = round(
  activeFunds.reduce((total, fund) => total + fund.fonToplamDeger, 0),
  2
);
assertSameNumber(current.toplamFonBuyuklugu, totalFundSize, "Güncel toplam fon büyüklüğü");
assertSameNumber(dashboard.ozet.toplamFonBuyuklugu, totalFundSize, "Dashboard toplam fon büyüklüğü");
assert(dashboard.ozet.toplamTakipEdilenFonSayisi === activeFunds.length, "Dashboard aktif fon sayısı yanlış.");

const detailFiles = fs.readdirSync(detailDir).filter((file) => file.endsWith(".json"));
assert(detailFiles.length === current.fonlar.length, "Fon detay dosyası sayısı güncel fon sayısıyla uyuşmuyor.");

for (const fund of current.fonlar) {
  const rawHistory = historyByCode.get(fund.kod) ?? [];
  const detailPath = path.join(detailDir, `${fund.slug}.json`);
  assert(fs.existsSync(detailPath), `Fon detay dosyası bulunamadı: ${fund.kod}`);
  const detail = JSON.parse(fs.readFileSync(detailPath, "utf8"));
  assert(JSON.stringify(detail.fund) === JSON.stringify(fund), `${fund.kod} detay özeti güncel listeyle uyuşmuyor.`);
  assert(detail.history.length === rawHistory.length, `${fund.kod} detay geçmişi eksik.`);
  assert(fund.tarihselGunSayisi === detail.history.length, `${fund.kod} tarihsel gün sayısı yanlış.`);
  assert(detail.sonOtuzIslemGunu.length === Math.min(30, detail.history.length), `${fund.kod} son 30 gün sayısı yanlış.`);

  for (let index = 0; index < detail.history.length; index += 1) {
    const row = detail.history[index];
    const raw = rawHistory[index];
    const previous = detail.history[index - 1] ?? null;
    assert(row.tarih === raw.tarih, `${fund.kod} geçmiş tarih sırası yanlış.`);
    const validFinancials = hasValidFinancialSnapshot(previous) && hasValidFinancialSnapshot(row);
    const rawReturn = validFinancials ? row.fiyat / previous.fiyat - 1 : null;
    const expectedReturn =
      rawReturn !== null && Math.abs(rawReturn) <= maxAbsoluteDailyReturn
        ? round(rawReturn, 8)
        : null;
    const expectedFlow = validFinancials
      ? round((row.tedavuldekiPaySayisi - previous.tedavuldekiPaySayisi) * row.fiyat, 2)
      : null;
    const expectedInvestors =
      Number.isFinite(previous?.kisiSayisi) && Number.isFinite(row.kisiSayisi)
        ? row.kisiSayisi - previous.kisiSayisi
        : null;
    assertSameNumber(row.gunlukGetiri, expectedReturn, `${fund.kod} ${row.tarih} günlük getiri`, 1e-8);
    assertSameNumber(row.paraGirisiCikisi, expectedFlow, `${fund.kod} ${row.tarih} para akışı`);
    assertSameNumber(row.yatirimciDegisimi, expectedInvestors, `${fund.kod} ${row.tarih} yatırımcı değişimi`, 0);
  }

  const expectedFlowPeriods = expectedPeriods(detail.history, "paraGirisiCikisi", fund.tarih);
  const expectedInvestorPeriods = expectedPeriods(detail.history, "yatirimciDegisimi", fund.tarih);
  for (const period of ["gunluk", "besGun", "birAy", "ucAy"]) {
    assertSameNumber(fund.paraAkisi[period], expectedFlowPeriods[period], `${fund.kod} ${period} para akışı`);
    assertSameNumber(
      fund.yatirimciDegisimi[period],
      expectedInvestorPeriods[period],
      `${fund.kod} ${period} yatırımcı değişimi`,
      0
    );
  }
}

const getiriTable = readSourceTable(sourcePaths.getiri, ["Fon Kodu", "Fon Adı"]);
const getiriColumns = {
  kod: getiriTable.column("Fon Kodu"),
  kategori: getiriTable.column("Şemsiye Fon Türü"),
  risk: getiriTable.column("Fonun Risk Değeri"),
  birAy: getiriTable.column("1 Ay (%)"),
  ucAy: getiriTable.column("3 Ay (%)"),
  altiAy: getiriTable.column("6 Ay (%)"),
  yilbasi: getiriTable.column("Yılbaşından İtibaren (%)"),
  birYil: getiriTable.column("1 Yıl (%)"),
  ucYil: getiriTable.column("3 Yıl (%)"),
  besYil: getiriTable.column("5 Yıl (%)"),
};
const returnKeys = ["birAy", "ucAy", "altiAy", "yilbasi", "birYil", "ucYil", "besYil"];
const returnCodes = new Set();
for (const row of getiriTable.rows) {
  const code = String(row[getiriColumns.kod] ?? "").trim().toUpperCase();
  if (!code) continue;
  assert(!returnCodes.has(code), `Getiri Excel'de tekrarlanan fon kodu: ${code}`);
  returnCodes.add(code);
  const fund = currentByCode.get(code);
  assert(fund, `${code} getiri kaynağında var, güncel fon listesinde yok.`);
  assert(fund.kategori === String(row[getiriColumns.kategori] ?? "").trim(), `${code} kategori bilgisi yanlış.`);
  assertSameNumber(fund.riskDegeri, parseNumber(row[getiriColumns.risk]), `${code} risk değeri`, 0);
  for (const key of returnKeys) {
    assertSameNumber(fund.getiriler[key], parsePercent(row[getiriColumns[key]]), `${code} ${key} getirisi`, 1e-10);
  }
}
assert(updateLog.islenenFonSayisi === returnCodes.size, "İşlenen getiri fonu sayısı kaynakla uyuşmuyor.");

const managerTable = readSourceTable(sourcePaths.yoneticiler, ["Fon Kodu", "Kurucu"]);
const managerColumns = {
  kod: managerTable.column("Fon Kodu"),
  yonetici: managerTable.column("Kurucu / Yönetim Şirketi"),
  kap: managerTable.column("KAP Yönetici Kodu"),
};
const sourceManagers = new Map();
for (const row of managerTable.rows) {
  const code = String(row[managerColumns.kod] ?? "").trim().toUpperCase();
  if (!code) continue;
  assert(!sourceManagers.has(code), `Yönetici Excel'de tekrarlanan fon kodu: ${code}`);
  sourceManagers.set(code, {
    yonetici: String(row[managerColumns.yonetici] ?? "").trim(),
    kap: String(row[managerColumns.kap] ?? "").trim(),
  });
}
for (const fund of current.fonlar) {
  const source = sourceManagers.get(fund.kod);
  assert(source, `${fund.kod} için yönetici eşleşmesi yok.`);
  assert(fund.yonetici === source.yonetici, `${fund.kod} yönetici bilgisi yanlış.`);
  assert(fund.kapYoneticiKodu === source.kap, `${fund.kod} KAP yönetici kodu yanlış.`);
}
assert(updateLog.bilinmeyenYoneticiSayisi === 0, "Bilinmeyen yönetici bulunan aktif fon var.");

const rankings = dashboard.liderTablolari;
assertRanking(
  rankings.enCokParaGirisi,
  compactRanking(activeFunds, (fund) => fund.paraAkisi.gunluk, "desc", (fund) => (fund.paraAkisi.gunluk ?? 0) > 0),
  "En çok para girişi"
);
assertRanking(
  rankings.enCokParaCikisi,
  compactRanking(activeFunds, (fund) => fund.paraAkisi.gunluk, "asc", (fund) => (fund.paraAkisi.gunluk ?? 0) < 0),
  "En çok para çıkışı"
);
assertRanking(
  rankings.bugunEnCokKazandiran,
  compactRanking(activeFunds, (fund) => fund.gunlukGetiri, "desc", (fund) => (fund.gunlukGetiri ?? 0) > 0),
  "Günlük kazandıranlar"
);
assertRanking(
  rankings.bugunEnCokKaybettiren,
  compactRanking(activeFunds, (fund) => fund.gunlukGetiri, "asc", (fund) => (fund.gunlukGetiri ?? 0) < 0),
  "Günlük kaybettirenler"
);
assertRanking(
  rankings.enCokYatirimciKazanan,
  compactRanking(
    activeFunds,
    (fund) => fund.yatirimciDegisimi.gunluk,
    "desc",
    (fund) => (fund.yatirimciDegisimi.gunluk ?? 0) > 0
  ),
  "En çok yatırımcı kazananlar"
);
assertRanking(
  rankings.enCokYatirimciKaybeden,
  compactRanking(
    activeFunds,
    (fund) => fund.yatirimciDegisimi.gunluk,
    "asc",
    (fund) => (fund.yatirimciDegisimi.gunluk ?? 0) < 0
  ),
  "En çok yatırımcı kaybedenler"
);
assertRanking(
  rankings.enBuyukFonlar,
  compactRanking(activeFunds, (fund) => fund.fonToplamDeger, "desc"),
  "En büyük fonlar"
);
for (const [key, selector] of [
  ["birAydaEnCokKazandiran", (fund) => fund.getiriler.birAy],
  ["ucAydaEnCokKazandiran", (fund) => fund.getiriler.ucAy],
  ["birYildaEnCokKazandiran", (fund) => fund.getiriler.birYil],
]) {
  assertRanking(rankings[key], compactRanking(activeFunds, selector, "desc", (fund) => (selector(fund) ?? 0) > 0), key);
}

const managerByName = new Map(managers.yoneticiler.map((manager) => [manager.yonetici, manager]));
assert(managerByName.size === managers.yoneticiler.length, "Yönetici listesinde tekrarlanan şirket var.");
const activeByManager = new Map();
for (const fund of activeFunds) {
  if (!activeByManager.has(fund.yonetici)) activeByManager.set(fund.yonetici, []);
  activeByManager.get(fund.yonetici).push(fund);
}
assert(managerByName.size === activeByManager.size, "Yönetici sayısı aktif fon gruplarıyla uyuşmuyor.");
for (const [name, funds] of activeByManager) {
  const manager = managerByName.get(name);
  assert(manager, `${name} yönetici özeti bulunamadı.`);
  assert(manager.yonetilenFonSayisi === funds.length, `${name} fon sayısı yanlış.`);
  assertSameNumber(
    manager.toplamFonBuyuklugu,
    round(funds.reduce((total, fund) => total + fund.fonToplamDeger, 0), 2),
    `${name} toplam büyüklük`
  );
  assert(
    manager.toplamYatirimciSayisi === funds.reduce((total, fund) => total + (fund.kisiSayisi ?? 0), 0),
    `${name} toplam yatırımcı sayısı yanlış.`
  );
  for (const period of ["gunluk", "besGun", "birAy", "ucAy"]) {
    assertSameNumber(
      manager.paraAkisi[period],
      sumComplete(funds.map((fund) => fund.paraAkisi[period])),
      `${name} ${period} toplam akış`
    );
  }
  for (const period of ["birAy", "ucAy", "altiAy", "birYil"]) {
    assertSameNumber(
      manager.ortalamaGetiri[period],
      average(funds.map((fund) => fund.getiriler[period])),
      `${name} ${period} ortalama getiri`,
      1e-8
    );
  }

  const expectedTopFlow = funds
    .filter((fund) => Number.isFinite(fund.paraAkisi.gunluk) && fund.paraAkisi.gunluk > 0)
    .sort((a, b) => b.paraAkisi.gunluk - a.paraAkisi.gunluk)[0] ?? null;
  if (expectedTopFlow) {
    assert(manager.enYuksekParaGirisiAlanFon, `${name} pozitif para girişi lideri eksik.`);
    assert(manager.enYuksekParaGirisiAlanFon.value > 0, `${name} para girişi lideri pozitif değil.`);
    assert(manager.enYuksekParaGirisiAlanFon.kod === expectedTopFlow.kod, `${name} para girişi lideri yanlış.`);
  } else {
    assert(manager.enYuksekParaGirisiAlanFon === null, `${name} pozitif akış olmadan giriş lideri gösteriyor.`);
  }

  const returnPeriods = [
    { label: "1 Yıl", value: (fund) => fund.getiriler.birYil },
    { label: "3 Ay", value: (fund) => fund.getiriler.ucAy },
    { label: "1 Ay", value: (fund) => fund.getiriler.birAy },
    { label: "Günlük", value: (fund) => fund.gunlukGetiri },
  ];
  const expectedBestPeriod = returnPeriods.find((period) =>
    funds.some((fund) => Number.isFinite(period.value(fund)))
  );
  const expectedBestFund = expectedBestPeriod
    ? funds
        .map((fund) => ({ fund, value: expectedBestPeriod.value(fund) }))
        .filter((item) => Number.isFinite(item.value))
        .sort((a, b) => b.value - a.value)[0]
    : null;
  assert(
    manager.enIyiPerformansDonemi === (expectedBestPeriod?.label ?? null),
    `${name} en iyi performans dönemi yanlış.`
  );
  assert(
    (manager.enIyiPerformansGosterenFon?.kod ?? null) === (expectedBestFund?.fund.kod ?? null),
    `${name} en iyi performans gösteren fon yanlış.`
  );
}

assert(
  dashboard.ozet.bugunEnYuksekParaGirisi?.kod === rankings.enCokParaGirisi[0]?.kod,
  "Dashboard en yüksek para girişi özeti yanlış."
);
assert(
  dashboard.ozet.bugunEnYuksekParaCikisi?.kod === rankings.enCokParaCikisi[0]?.kod,
  "Dashboard en yüksek para çıkışı özeti yanlış."
);
assert(
  dashboard.ozet.enCokYatirimciKazanan?.kod === rankings.enCokYatirimciKazanan[0]?.kod,
  "Dashboard yatırımcı kazanan özeti yanlış."
);
assert(
  dashboard.ozet.enCokYatirimciKaybeden?.kod === rankings.enCokYatirimciKaybeden[0]?.kod,
  "Dashboard yatırımcı kaybeden özeti yanlış."
);

const effectData = JSON.parse(fs.readFileSync(sourcePaths.etki, "utf8"));
const expectedEffectFunds = ["DFI", "KHA", "PBR", "PHE", "THF", "TLY"];
assert(
  JSON.stringify(Object.keys(effectData.fonlar).sort()) === JSON.stringify(expectedEffectFunds),
  "Etki analizi fon listesi altı beklenen fondan oluşmuyor."
);
let latestEffectDate = null;
for (const code of expectedEffectFunds) {
  const effectFund = effectData.fonlar[code];
  assert(effectFund.tarihsel.length >= 2, `${code} etki analizi geçmişi yetersiz.`);
  const symbols = new Set();
  let weightTotal = 0;
  let effectTotal = 0;
  for (const row of effectFund.portfoy) {
    assert(!symbols.has(row.sembol), `${code} portföyünde tekrarlanan sembol: ${row.sembol}`);
    symbols.add(row.sembol);
    assertSameNumber(row.etki, round((row.fonOrani * row.kapanisMarji) / 100, 10), `${code} ${row.sembol} etki`, 0.000000001);
    weightTotal += row.fonOrani;
    effectTotal += row.etki;
  }
  assertSameNumber(effectFund.toplamFonOrani, round(weightTotal, 10), `${code} toplam portföy oranı`, 0.000000001);
  assertSameNumber(effectFund.toplamEtki, round(effectTotal, 10), `${code} toplam etki`, 0.000000001);

  const dates = new Set();
  const detail = JSON.parse(fs.readFileSync(path.join(detailDir, `${code.toLowerCase()}.json`), "utf8"));
  const currentHistory = detail.history.filter(
    (row) =>
      row.tarih &&
      Number.isFinite(row.kisiSayisi) &&
      Number.isFinite(row.fonToplamDeger) &&
      row.fonToplamDeger > 0 &&
      Number.isFinite(row.paraGirisiCikisi)
  );
  assert(currentHistory.length >= 2, `${code} güncel değişim verisi yetersiz.`);
  const currentLastRow = currentHistory.at(-1);
  assert(
    currentLastRow.tarih === detail.sonIslemTarihi &&
      currentLastRow.tarih === detail.fund.tarih,
    `${code} güncel değişim verisi son işlem tarihiyle uyuşmuyor.`
  );
  const mainByDate = new Map(detail.history.map((row) => [row.tarih, row]));
  for (const row of effectFund.tarihsel) {
    assert(!dates.has(row.tarih), `${code} etki geçmişinde tekrarlanan tarih: ${row.tarih}`);
    dates.add(row.tarih);
    assert(Number.isInteger(row.yatirimciSayisi) && row.yatirimciSayisi >= 0, `${code} yatırımcı sayısı geçersiz.`);
    assert(Number.isFinite(row.fonToplamDeger) && row.fonToplamDeger > 0, `${code} fon toplam değeri geçersiz.`);
    assert(Number.isFinite(row.paraGirisiCikisi), `${code} para akışı geçersiz.`);
    const main = mainByDate.get(row.tarih);
    if (main) {
      assert(row.yatirimciSayisi === main.kisiSayisi, `${code} ${row.tarih} etki yatırımcı sayısı ana veriyle uyuşmuyor.`);
      assertSameNumber(row.fonToplamDeger, main.fonToplamDeger, `${code} ${row.tarih} etki fon değeri`, 1000);
      if (Number.isFinite(main.paraGirisiCikisi)) {
        assertSameNumber(row.paraGirisiCikisi, main.paraGirisiCikisi, `${code} ${row.tarih} etki para akışı`, 1);
      }
    }
  }
  for (let index = 1; index < effectFund.tarihsel.length; index += 1) {
    const previous = effectFund.tarihsel[index - 1];
    const row = effectFund.tarihsel[index];
    const investorChangeRatio =
      Math.abs(row.yatirimciSayisi - previous.yatirimciSayisi) /
      Math.max(previous.yatirimciSayisi, 1);
    assert(
      investorChangeRatio <= 0.5,
      `${code} ${row.tarih} yatırımcı sayısında %50'yi aşan kaynak kopması var.`
    );
  }
  const datesSorted = effectFund.tarihsel.map((row) => row.tarih).sort();
  assert(
    JSON.stringify(effectFund.tarihsel.map((row) => row.tarih)) === JSON.stringify(datesSorted),
    `${code} etki geçmişi tarih sırasına göre değil.`
  );
  const lastDate = effectFund.tarihsel.at(-1).tarih;
  if (!latestEffectDate || lastDate > latestEffectDate) latestEffectDate = lastDate;
}
assert(effectData.sonGuncelleme === latestEffectDate, "Etki analizi son güncelleme tarihi yanlış.");

const tercihHeaders = [
  "Sembol",
  "Değişim",
  "Son Toplam %",
  "İlk Toplam %",
  "Son Toplam Takas TL",
  "İlk Toplam Takas TL",
  "Takas TL Son(Emeklilik Fon)",
  "% Son (Emeklilik Fon)",
  "Takas TL İlk(Emeklilik Fon)",
  "% İlk (Emeklilik Fon)",
  "Takas TL Son(Yatırım Fon)",
  "% Son (Yatırım Fon)",
  "Takas TL İlk(Yatırım Fon)",
  "% İlk (Yatırım Fon)",
];
const tercihTable = readSourceTable(sourcePaths.tercihExcel, tercihHeaders);
const tercihColumns = Object.fromEntries(
  tercihHeaders.map((header) => [header, tercihTable.column(header)])
);
const tercihSourceRows = tercihTable.rows
  .map((row) => ({
    sembol: String(row[tercihColumns.Sembol] ?? "").trim().toUpperCase(),
    degisim: parseNumber(row[tercihColumns["Değişim"]]),
    sonToplamYuzde: parseNumber(row[tercihColumns["Son Toplam %"]]),
    ilkToplamYuzde: parseNumber(row[tercihColumns["İlk Toplam %"]]),
    sonToplamTakasTl: parseNumber(row[tercihColumns["Son Toplam Takas TL"]]),
    ilkToplamTakasTl: parseNumber(row[tercihColumns["İlk Toplam Takas TL"]]),
    sonEmeklilik: parseNumber(row[tercihColumns["Takas TL Son(Emeklilik Fon)"]]),
    ilkEmeklilik: parseNumber(row[tercihColumns["Takas TL İlk(Emeklilik Fon)"]]),
    sonYatirim: parseNumber(row[tercihColumns["Takas TL Son(Yatırım Fon)"]]),
    ilkYatirim: parseNumber(row[tercihColumns["Takas TL İlk(Yatırım Fon)"]]),
  }))
  .filter(
    (row) =>
      row.sembol &&
      Object.entries(row).every(
        ([key, value]) => key === "sembol" || (typeof value === "number" && Number.isFinite(value))
      )
  );
const tercihSourceByCode = new Map();
for (const row of tercihSourceRows) {
  assert(!tercihSourceByCode.has(row.sembol), `Haftalık fon tercih Excel'inde tekrarlanan sembol: ${row.sembol}`);
  tercihSourceByCode.set(row.sembol, row);
  assertSameNumber(
    row.degisim,
    round(row.sonToplamYuzde - row.ilkToplamYuzde, 2),
    `${row.sembol} haftalık fon payı değişimi`
  );
  assertSameNumber(
    row.sonToplamTakasTl,
    row.sonEmeklilik + row.sonYatirim,
    `${row.sembol} son fon takas toplamı`,
    1
  );
  assertSameNumber(
    row.ilkToplamTakasTl,
    row.ilkEmeklilik + row.ilkYatirim,
    `${row.sembol} ilk fon takas toplamı`,
    1
  );
}
assert(tercihSourceRows.length >= 100, "Haftalık fon tercih Excel'inde yeterli hisse yok.");

const tercihWorkbook = XLSX.readFile(sourcePaths.tercihExcel, { raw: true, cellDates: false });
const tercihSheet = tercihWorkbook.Sheets[tercihWorkbook.SheetNames[0]];
const tercihRawRows = XLSX.utils.sheet_to_json(tercihSheet, {
  header: 1,
  defval: null,
  raw: true,
});
const tercihDates = [...new Set(tercihRawRows.map((row) => parseDate(row[0])).filter(Boolean))].sort();
assert(tercihDates.length >= 2, "Haftalık fon tercih Excel'inde dönem tarihleri bulunamadı.");
const tercihEnd = tercihDates.at(-1);
const tercihDateCandidates = tercihDates
  .slice(0, -1)
  .map((date) => ({
    date,
    daySpan: Math.round(
      (Date.parse(`${tercihEnd}T00:00:00Z`) - Date.parse(`${date}T00:00:00Z`)) /
        86_400_000
    ),
  }))
  .filter((item) => item.daySpan >= 6 && item.daySpan <= 8)
  .sort((a, b) => Math.abs(a.daySpan - 7) - Math.abs(b.daySpan - 7));
assert(
  tercihDateCandidates.length > 0,
  `Haftalık fon tercih dönemi bir haftayı kapsamıyor: ${tercihDates[0]} - ${tercihEnd}`
);
const tercihStart = tercihDateCandidates[0].date;

const tercihJson = JSON.parse(fs.readFileSync(sourcePaths.tercihJson, "utf8"));
assert(tercihJson.rows.length === tercihSourceRows.length, "Haftalık fon tercih JSON satır sayısı Excel ile uyuşmuyor.");
const tercihJsonCodes = new Set();
for (const row of tercihJson.rows) {
  const code = String(row.Sembol ?? "").trim().toUpperCase();
  assert(code && !tercihJsonCodes.has(code), `Haftalık fon tercih JSON'unda geçersiz veya tekrarlanan sembol: ${code}`);
  tercihJsonCodes.add(code);
  const source = tercihSourceByCode.get(code);
  assert(source, `${code} haftalık fon tercih JSON'unda var ancak Excel kaynağında yok.`);
  assertSameNumber(parseNumber(row["Değişim"]), source.degisim, `${code} haftalık değişim`);
  assertSameNumber(parseNumber(row["Son Toplam %"]), source.sonToplamYuzde, `${code} son toplam yüzde`);
  assertSameNumber(parseNumber(row["İlk Toplam %"]), source.ilkToplamYuzde, `${code} ilk toplam yüzde`);
  assertSameNumber(parseNumber(row["Son Toplam Takas TL"]), source.sonToplamTakasTl, `${code} son toplam takas`);
  assertSameNumber(parseNumber(row["İlk Toplam Takas TL"]), source.ilkToplamTakasTl, `${code} ilk toplam takas`);
}
const isoToTr = (value) => value.split("-").reverse().join(".");
assert(tercihJson.donemBaslangici === isoToTr(tercihStart), "Haftalık fon tercih başlangıç tarihi yanlış.");
assert(tercihJson.donemBitisi === isoToTr(tercihEnd), "Haftalık fon tercih bitiş tarihi yanlış.");
assert(tercihJson.guncellemeTarihi === isoToTr(tercihEnd), "Haftalık fon tercih güncelleme tarihi yanlış.");
assert(
  tercihSourceRows.some((row) => row.degisim > 0),
  "Haftalık fon tercihlerinde pozitif değişimli hisse bulunamadı."
);

const pry = currentByCode.get("PRY");
if (pry?.tarih === "2026-08-11") {
  assert(Number.isFinite(pry.paraAkisi.gunluk) && pry.paraAkisi.gunluk < 0, "PRY 11.08.2026 para akışı negatif olmalı.");
}

console.log(`Kaynak snapshot: ${sourceSnapshots.length}`);
console.log(`Kalıcı snapshot: ${history.snapshots.length}`);
console.log(`Güncel / aktif fon: ${current.fonlar.length} / ${activeFunds.length}`);
console.log(`Getiri kaydı: ${returnCodes.size}`);
console.log(`Yönetici: ${managers.yoneticiler.length}`);
console.log(`Kontrol edilen fon detayı: ${detailFiles.length}`);
console.log(`Etki analizi fonu: ${expectedEffectFunds.length}`);
console.log(`Haftalık fon tercih hissesi: ${tercihSourceRows.length} (${isoToTr(tercihStart)} - ${isoToTr(tercihEnd)})`);
console.log("Fon kaynakları, hesaplamaları ve sayfa verileri doğrulandı.");

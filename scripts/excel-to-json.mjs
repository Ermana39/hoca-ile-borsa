import fs from "node:fs/promises";
import path from "node:path";
import * as XLSX from "xlsx";

const PROJE_KOKU = process.cwd();
const OLASI_APP_DIZINLERI = [
  path.join(PROJE_KOKU, "app"),
  path.join(PROJE_KOKU, "src", "app"),
];

const EXCEL_DIZIN_ADLARI = new Set(["data", "_data"]);
const FON_ETKI_EXCEL_ADI = "fon-etki-verileri.xlsx";

function temizHucre(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (value instanceof Date) return value;

  const metin = String(value).trim();
  return metin === "" ? null : metin;
}

function sayiyaCevir(value) {
  const temiz = temizHucre(value);

  if (temiz === null) return null;
  if (typeof temiz === "number") return temiz;

  let metin = String(temiz).trim().replace(/\s+/g, "");

  // Türkçe sayı biçimlerini de destekler: 9,14 veya 1.988.789,35
  if (metin.includes(",")) {
    metin = metin.replace(/\./g, "").replace(",", ".");
  }

  const sayi = Number(metin);
  return Number.isFinite(sayi) ? sayi : null;
}

function yuvarla(value, basamak = 10) {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return null;
  }

  const carpan = 10 ** basamak;
  return Math.round((value + Number.EPSILON) * carpan) / carpan;
}

function ikiHane(value) {
  return String(value).padStart(2, "0");
}

function tarihiIsoYap(value) {
  const temiz = temizHucre(value);
  if (temiz === null) return null;

  if (temiz instanceof Date && !Number.isNaN(temiz.getTime())) {
    return [
      temiz.getUTCFullYear(),
      ikiHane(temiz.getUTCMonth() + 1),
      ikiHane(temiz.getUTCDate()),
    ].join("-");
  }

  if (typeof temiz === "number") {
    const tarih = XLSX.SSF.parse_date_code(temiz);

    if (!tarih) return null;

    return `${tarih.y}-${ikiHane(tarih.m)}-${ikiHane(tarih.d)}`;
  }

  const metin = String(temiz).trim();

  const isoEslesme = metin.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (isoEslesme) {
    return `${isoEslesme[1]}-${ikiHane(isoEslesme[2])}-${ikiHane(isoEslesme[3])}`;
  }

  const trEslesme = metin.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (trEslesme) {
    return `${trEslesme[3]}-${ikiHane(trEslesme[2])}-${ikiHane(trEslesme[1])}`;
  }

  const tarih = new Date(metin);
  if (!Number.isNaN(tarih.getTime())) {
    return tarih.toISOString().slice(0, 10);
  }

  return null;
}

async function dizinVarMi(dir) {
  try {
    const stat = await fs.stat(dir);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

async function findExcelFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findExcelFiles(fullPath)));
      continue;
    }

    if (!entry.isFile()) continue;
    if (entry.name.startsWith("~$")) continue;
    if (!entry.name.toLowerCase().endsWith(".xlsx")) continue;

    const dizinParcalari = path
      .dirname(fullPath)
      .split(path.sep)
      .map((parca) => parca.toLowerCase());

    if (dizinParcalari.some((parca) => EXCEL_DIZIN_ADLARI.has(parca))) {
      files.push(fullPath);
    }
  }

  return files;
}

function convertSheetToData(sheet) {
  const rawRows = XLSX.utils
    .sheet_to_json(sheet, {
      header: 1,
      defval: null,
      raw: true,
    })
    .map((row) => row.map((cell) => temizHucre(cell)));

  const objectRows = XLSX.utils.sheet_to_json(sheet, {
    defval: null,
    raw: true,
  });

  const columns =
    objectRows.length > 0
      ? Object.keys(objectRows[0]).filter(
          (item) => item && item.trim() !== ""
        )
      : [];

  const rows = objectRows.map((row) => {
    const normalized = {};

    for (const column of columns) {
      normalized[column] = temizHucre(row[column]);
    }

    return normalized;
  });

  return { columns, rows, rawRows };
}

function fonSayfasiniDonustur(sheetName, sheet) {
  const kod = String(sheetName).trim().toUpperCase();
  const satirlar = XLSX.utils
    .sheet_to_json(sheet, {
      header: 1,
      defval: null,
      raw: true,
    })
    .map((row) => row.map((cell) => temizHucre(cell)));

  const portfoy = [];
  const tarihsel = [];
  let toplamFonOrani = null;
  let toplamEtki = null;
  let tarihBaslangicSatiri = -1;

  for (let index = 1; index < satirlar.length; index += 1) {
    const satir = satirlar[index] ?? [];
    const ilkHucre = String(satir[0] ?? "").trim();
    const ilkHucreKucuk = ilkHucre.toLocaleLowerCase("tr-TR");

    if (ilkHucreKucuk === "toplam") {
      toplamFonOrani = sayiyaCevir(satir[1]);
      toplamEtki = sayiyaCevir(satir[3]);
      continue;
    }

    if (ilkHucreKucuk === "tarih") {
      tarihBaslangicSatiri = index + 1;
      break;
    }

    if (!ilkHucre) continue;

    const fonOrani = sayiyaCevir(satir[1]);
    const kapanisMarji = sayiyaCevir(satir[2]);
    const etki = sayiyaCevir(satir[3]);

    if (fonOrani === null && kapanisMarji === null && etki === null) continue;

    if (fonOrani === null || kapanisMarji === null || etki === null) {
      throw new Error(
        `${kod} sayfasında eksik portföy verisi var. Excel satırı: ${index + 1}`
      );
    }

    portfoy.push({
      sembol: ilkHucre.toUpperCase(),
      fonOrani: yuvarla(fonOrani),
      kapanisMarji: yuvarla(kapanisMarji),
      etki: yuvarla(etki),
    });
  }

  if (tarihBaslangicSatiri >= 0) {
    for (let index = tarihBaslangicSatiri; index < satirlar.length; index += 1) {
      const satir = satirlar[index] ?? [];
      const tarih = tarihiIsoYap(satir[0]);

      if (!tarih) continue;

      const yatirimciSayisi = sayiyaCevir(satir[1]);
      const fonToplamDeger = sayiyaCevir(satir[3]);
      const paraGirisiCikisi = sayiyaCevir(satir[4]);
      const marjHam = sayiyaCevir(satir[5]);

      if (
        yatirimciSayisi === null ||
        fonToplamDeger === null ||
        paraGirisiCikisi === null ||
        marjHam === null
      ) {
        throw new Error(
          `${kod} sayfasında eksik tarihsel veri var. Excel satırı: ${index + 1}`
        );
      }

      tarihsel.push({
        tarih,
        yatirimciSayisi: Math.round(yatirimciSayisi),
        fonToplamDeger: Math.round(fonToplamDeger),
        paraGirisiCikisi: Math.round(paraGirisiCikisi),
        // Excel hücresi yüzde biçiminde 0,0047 tutuyorsa JSON'a 0,47 yazılır.
        marj: yuvarla(marjHam * 100),
      });
    }
  }

  if (portfoy.length === 0) {
    throw new Error(`${kod} sayfasında portföy satırı bulunamadı.`);
  }

  if (toplamFonOrani === null) {
    toplamFonOrani = portfoy.reduce((toplam, satir) => toplam + satir.fonOrani, 0);
  }

  if (toplamEtki === null) {
    toplamEtki = portfoy.reduce((toplam, satir) => toplam + satir.etki, 0);
  }

  toplamFonOrani = yuvarla(toplamFonOrani);
  toplamEtki = yuvarla(toplamEtki);

  return {
    kod,
    toplamFonOrani,
    toplamEtki,
    kaldiracli: toplamFonOrani > 100,
    portfoy,
    tarihsel,
  };
}

async function fonEtkiExceliniJsonaCevir(filePath, workbook) {
  const fonlar = {};
  const tumTarihler = [];

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const fon = fonSayfasiniDonustur(sheetName, sheet);

    fonlar[fon.kod] = fon;

    for (const satir of fon.tarihsel) {
      tumTarihler.push(satir.tarih);
    }
  }

  if (Object.keys(fonlar).length === 0) {
    throw new Error("Fon etki Excel dosyasında fon sayfası bulunamadı.");
  }

  const stat = await fs.stat(filePath);
  const sonGuncelleme =
    tumTarihler.sort().at(-1) ?? stat.mtime.toISOString().slice(0, 10);

  const jsonPath = filePath.replace(/\.xlsx$/i, ".json");

  await fs.writeFile(
    jsonPath,
    JSON.stringify(
      {
        kaynakDosya: path.basename(filePath),
        sonGuncelleme,
        fonlar,
      },
      null,
      2
    ),
    "utf-8"
  );

  console.log(
    `Fon etki Excel'i JSON'a çevrildi: ${path.relative(PROJE_KOKU, jsonPath)}`
  );
  console.log(`Aktarılan fonlar: ${Object.keys(fonlar).join(", ")}`);
}

async function genelExceliJsonaCevir(filePath, workbook) {
  const stat = await fs.stat(filePath);

  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) {
    throw new Error(`Excel dosyasında çalışma sayfası yok: ${filePath}`);
  }

  const firstSheetData = convertSheetToData(workbook.Sheets[firstSheetName]);
  const sheets = {};

  for (const sheetName of workbook.SheetNames) {
    sheets[sheetName] = convertSheetToData(workbook.Sheets[sheetName]);
  }

  const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(stat.mtime);

  const jsonPath = filePath.replace(/\.xlsx$/i, ".json");

  await fs.writeFile(
    jsonPath,
    JSON.stringify(
      {
        ...firstSheetData,
        sheets,
        guncellemeTarihi,
      },
      null,
      2
    ),
    "utf-8"
  );

  console.log(`Excel JSON'a çevrildi: ${path.relative(PROJE_KOKU, jsonPath)}`);
}

async function convertExcelToJson(filePath) {
  const buffer = await fs.readFile(filePath);
  const workbook = XLSX.read(buffer, {
    type: "buffer",
    raw: true,
    cellDates: false,
  });

  if (path.basename(filePath).toLowerCase() === FON_ETKI_EXCEL_ADI) {
    await fonEtkiExceliniJsonaCevir(filePath, workbook);
    return;
  }

  await genelExceliJsonaCevir(filePath, workbook);
}

async function main() {
  const appDizinleri = [];

  for (const dir of OLASI_APP_DIZINLERI) {
    if (await dizinVarMi(dir)) appDizinleri.push(dir);
  }

  if (appDizinleri.length === 0) {
    throw new Error("app veya src/app dizini bulunamadı.");
  }

  const excelFiles = [];

  for (const appDir of appDizinleri) {
    excelFiles.push(...(await findExcelFiles(appDir)));
  }

  const benzersizDosyalar = [...new Set(excelFiles)].sort();

  if (benzersizDosyalar.length === 0) {
    console.log("data veya _data klasörlerinde Excel dosyası bulunamadı.");
    return;
  }

  for (const filePath of benzersizDosyalar) {
    await convertExcelToJson(filePath);
  }
}

main().catch((error) => {
  console.error("Excel JSON dönüşüm hatası:", error);
  process.exit(1);
});

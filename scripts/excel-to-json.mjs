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
const FON_TERCIH_EXCEL_ADI = "tercih-edilen-hisseler.xlsx";
const FON_TERCIH_SUTUNLARI = [
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
const TR_TARIH_DESENI = /^(\d{2})\.(\d{2})\.(\d{4})$/;

async function jsonDosyasiYaz(filePath, value) {
  const content = JSON.stringify(value, null, 2);

  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await fs.writeFile(filePath, content, "utf-8");
      return;
    } catch (error) {
      const retryable = ["EBUSY", "EPERM", "EACCES", "UNKNOWN"].includes(error?.code);
      if (!retryable || attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, 100 * 2 ** attempt));
    }
  }
}

function temizHucre(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (value instanceof Date) return value;

  const metin = String(value).trim();
  return metin === "" ? null : metin;
}

function sayiyaCevir(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (value === null || value === undefined || value === "") return null;

  let text = String(value).trim().replace(/%/g, "").replace(/\s+/g, "");
  if (!text) return null;
  if (text.includes(",")) text = text.replace(/\./g, "").replace(",", ".");
  const parsed = Number(text.replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function trTarihiIsoYap(value) {
  const match = String(value ?? "").trim().match(TR_TARIH_DESENI);
  if (!match) return null;
  const iso = `${match[3]}-${match[2]}-${match[1]}`;
  const date = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== iso
    ? null
    : iso;
}

function isoTarihiTrYap(value) {
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
}

function gunFarkiniHesapla(baslangicIso, bitisIso) {
  return Math.round(
    (Date.parse(`${bitisIso}T00:00:00Z`) -
      Date.parse(`${baslangicIso}T00:00:00Z`)) /
      86_400_000
  );
}

function haftalikDonemiBul(tarihler, konum) {
  if (tarihler.length < 2) {
    throw new Error(`${konum} haftalık dönem tarihleri bulunamadı.`);
  }

  const donemBitisiIso = tarihler.at(-1);
  const adaylar = tarihler
    .slice(0, -1)
    .map((tarih) => ({
      tarih,
      gunFarki: gunFarkiniHesapla(tarih, donemBitisiIso),
    }))
    .filter((aday) => aday.gunFarki >= 6 && aday.gunFarki <= 8)
    .sort((a, b) => Math.abs(a.gunFarki - 7) - Math.abs(b.gunFarki - 7));

  if (!adaylar.length) {
    throw new Error(
      `${konum} son bir haftayı kapsamıyor: ${tarihler[0]} - ${donemBitisiIso}`
    );
  }

  return {
    donemBaslangiciIso: adaylar[0].tarih,
    donemBitisiIso,
  };
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

async function fonEtkiExceliniJsonaCevir(filePath, workbook) {
  const jsonPath = filePath.replace(/\.xlsx$/i, ".json");
  const output = JSON.parse(await fs.readFile(jsonPath, "utf8"));
  const workbookCodes = workbook.SheetNames.map((name) => name.trim().toUpperCase());

  for (const code of workbookCodes) {
    const fund = output.fonlar?.[code];
    if (!fund?.portfoy?.length || !fund?.tarihsel?.length) {
      throw new Error(
        `${code}: özel fon etki içe aktarıcısının çıktısı eksik. Önce fon-etki:import çalıştırılmalı.`
      );
    }
  }

  console.log(
    `Fon etki JSON'u özel içe aktarıcıdan doğrulandı: ${path.relative(PROJE_KOKU, jsonPath)}`
  );
  console.log(`Doğrulanan fonlar: ${workbookCodes.join(", ")}`);
}

async function fonTercihExceliniJsonaCevir(filePath, workbook) {
  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) {
    throw new Error(`Excel dosyasında çalışma sayfası yok: ${filePath}`);
  }

  const firstSheetData = convertSheetToData(workbook.Sheets[firstSheetName]);
  const eksikSutunlar = FON_TERCIH_SUTUNLARI.filter(
    (column) => !firstSheetData.columns.includes(column)
  );
  if (eksikSutunlar.length > 0) {
    throw new Error(`Fon tercih Excel'inde eksik sütunlar: ${eksikSutunlar.join(", ")}`);
  }

  const gorulenSemboller = new Set();
  const rows = firstSheetData.rows.filter((row) => {
    const sembol = String(row.Sembol ?? "").trim().toUpperCase();
    if (!sembol) return false;

    const sayisalAlanlarTam = FON_TERCIH_SUTUNLARI.slice(1).every(
      (column) => sayiyaCevir(row[column]) !== null
    );
    if (!sayisalAlanlarTam) return false;
    if (gorulenSemboller.has(sembol)) {
      throw new Error(`Fon tercih Excel'inde tekrarlanan sembol: ${sembol}`);
    }
    gorulenSemboller.add(sembol);
    row.Sembol = sembol;
    return true;
  });

  if (rows.length < 100) {
    throw new Error(`Fon tercih Excel'inde yalnızca ${rows.length} geçerli hisse satırı bulundu.`);
  }

  for (const row of rows) {
    const degisim = sayiyaCevir(row["Değişim"]);
    const sonToplamYuzde = sayiyaCevir(row["Son Toplam %"]);
    const ilkToplamYuzde = sayiyaCevir(row["İlk Toplam %"]);
    const sonToplamTakas = sayiyaCevir(row["Son Toplam Takas TL"]);
    const ilkToplamTakas = sayiyaCevir(row["İlk Toplam Takas TL"]);
    const sonEmeklilik = sayiyaCevir(row["Takas TL Son(Emeklilik Fon)"]);
    const ilkEmeklilik = sayiyaCevir(row["Takas TL İlk(Emeklilik Fon)"]);
    const sonYatirim = sayiyaCevir(row["Takas TL Son(Yatırım Fon)"]);
    const ilkYatirim = sayiyaCevir(row["Takas TL İlk(Yatırım Fon)"]);

    if (Math.abs(sonToplamYuzde - ilkToplamYuzde - degisim) > 0.011) {
      throw new Error(`${row.Sembol}: haftalık fon payı değişimi tutarsız.`);
    }
    if (Math.abs(sonEmeklilik + sonYatirim - sonToplamTakas) > 1) {
      throw new Error(`${row.Sembol}: son fon takas toplamı tutarsız.`);
    }
    if (Math.abs(ilkEmeklilik + ilkYatirim - ilkToplamTakas) > 1) {
      throw new Error(`${row.Sembol}: ilk fon takas toplamı tutarsız.`);
    }
  }

  const tarihler = [...new Set(
    firstSheetData.rawRows.map((row) => trTarihiIsoYap(row[0])).filter(Boolean)
  )].sort();
  const { donemBaslangiciIso, donemBitisiIso } = haftalikDonemiBul(
    tarihler,
    "Fon tercih Excel'i"
  );

  const sheets = {};
  for (const sheetName of workbook.SheetNames) {
    sheets[sheetName] = convertSheetToData(workbook.Sheets[sheetName]);
  }

  const donemBaslangici = isoTarihiTrYap(donemBaslangiciIso);
  const donemBitisi = isoTarihiTrYap(donemBitisiIso);
  const jsonPath = filePath.replace(/\.xlsx$/i, ".json");
  await jsonDosyasiYaz(jsonPath, {
    ...firstSheetData,
    rows,
    sheets,
    guncellemeTarihi: donemBitisi,
    donemBaslangici,
    donemBitisi,
  });

  console.log(
    `Haftalık fon tercihleri doğrulandı: ${rows.length} hisse, ${donemBaslangici} - ${donemBitisi}`
  );
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

  await jsonDosyasiYaz(jsonPath, {
    ...firstSheetData,
    sheets,
    guncellemeTarihi,
  });

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

  if (path.basename(filePath).toLowerCase() === FON_TERCIH_EXCEL_ADI) {
    await fonTercihExceliniJsonaCevir(filePath, workbook);
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

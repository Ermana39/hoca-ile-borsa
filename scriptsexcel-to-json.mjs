import fs from "fs/promises";
import path from "path";
import * as XLSX from "xlsx";

const ROOT_DIR = process.cwd();
const APP_DIR = path.join(ROOT_DIR, "app");

function normalizeText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function normalizeKey(value) {
  return normalizeText(value)
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function isEmptyCell(value) {
  return value === null || value === undefined || value === "";
}

function cleanCell(value) {
  if (value === undefined || value === "") return null;
  return value;
}

function isMetaRow(row) {
  const firstCell = normalizeKey(row[0]);

  if (!firstCell) return false;

  return (
    firstCell.includes("disa aktarim tarihi") ||
    firstCell.includes("toplam kayit sayisi") ||
    firstCell.includes("rapor bilgileri")
  );
}

function headerScore(row) {
  const keywords = [
    "fon kodu",
    "fon adi",
    "fon adı",
    "sembol",
    "kod",
    "hisse",
    "risk degeri",
    "risk değeri",
    "1 ay",
    "3 ay",
    "6 ay",
    "yilbasi",
    "yılbaşı",
    "1 yil",
    "1 yıl",
    "tarih",
    "fiyat",
    "degisim",
    "değişim",
  ];

  return row.reduce((score, cell) => {
    const key = normalizeKey(cell);
    if (!key) return score;

    return keywords.some((keyword) => key.includes(normalizeKey(keyword)))
      ? score + 1
      : score;
  }, 0);
}

function findHeaderRowIndex(rawRows) {
  for (let i = 0; i < Math.min(rawRows.length, 40); i++) {
    const row = rawRows[i] || [];

    if (isMetaRow(row)) continue;

    const normalized = row.map((cell) => normalizeKey(cell));

    const hasFonKodu = normalized.some((cell) => cell.includes("fon kodu"));
    const hasFonAdi = normalized.some(
      (cell) => cell.includes("fon adi") || cell.includes("fon adı")
    );

    if (hasFonKodu && hasFonAdi) return i;

    if (headerScore(row) >= 2) return i;
  }

  const firstUsableIndex = rawRows.findIndex((row) => {
    if (!row || isMetaRow(row)) return false;

    const filledCells = row.filter((cell) => !isEmptyCell(cell));
    return filledCells.length >= 2;
  });

  return firstUsableIndex >= 0 ? firstUsableIndex : 0;
}

function makeUniqueColumns(headerRow) {
  const used = new Map();

  return headerRow.map((cell, index) => {
    const base = normalizeText(cell) || `__EMPTY_${index}`;
    const count = used.get(base) || 0;

    used.set(base, count + 1);

    return count === 0 ? base : `${base}_${count}`;
  });
}

function getUsableColumnIndexes(headerRow) {
  return headerRow
    .map((cell, index) => ({
      index,
      value: normalizeText(cell),
      key: normalizeKey(cell),
    }))
    .filter((item) => {
      if (!item.value) return false;
      if (item.key.startsWith("__empty")) return false;
      if (item.key.includes("rapor bilgileri")) return false;
      return true;
    })
    .map((item) => item.index);
}

function excelSerialToDate(serial) {
  if (typeof serial !== "number" || !Number.isFinite(serial)) return null;

  const utcDays = Math.floor(serial - 25569);
  const utcValue = utcDays * 86400;
  const date = new Date(utcValue * 1000);

  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function extractExportDate(rawRows, fileStat) {
  const exportRow = rawRows.find((row) => {
    const firstCell = normalizeKey(row?.[0]);
    return firstCell.includes("disa aktarim tarihi");
  });

  const exportValue = exportRow?.[1] ?? exportRow?.[0];

  if (typeof exportValue === "number") {
    return excelSerialToDate(exportValue) || "-";
  }

  if (exportValue) {
    return normalizeText(exportValue);
  }

  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(fileStat.mtime);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".next" ||
        entry.name === ".git"
      ) {
        continue;
      }

      files.push(...(await walk(fullPath)));
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".xlsx") &&
      !entry.name.startsWith("~$")
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertExcelToJson(excelPath) {
  const buffer = await fs.readFile(excelPath);
  const fileStat = await fs.stat(excelPath);

  const workbook = XLSX.read(buffer, {
    type: "buffer",
    cellDates: false,
    cellNF: false,
    cellText: false,
  });

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const rawRows = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null,
    raw: true,
  });

  const cleanedRawRows = rawRows.map((row) => row.map(cleanCell));

  const headerRowIndex = findHeaderRowIndex(cleanedRawRows);
  const headerRow = cleanedRawRows[headerRowIndex] || [];
  const allColumns = makeUniqueColumns(headerRow);
  const usableIndexes = getUsableColumnIndexes(headerRow);
  const columns = usableIndexes.map((index) => allColumns[index]);

  const rows = cleanedRawRows
    .slice(headerRowIndex + 1)
    .filter((row) => {
      if (!row.some((cell) => !isEmptyCell(cell))) return false;
      if (isMetaRow(row)) return false;

      const firstCell = normalizeKey(row[usableIndexes[0]]);
      const firstHeader = normalizeKey(columns[0]);

      if (firstCell && firstHeader && firstCell === firstHeader) return false;

      return true;
    })
    .map((row) => {
      const item = {};

      usableIndexes.forEach((sourceIndex, columnIndex) => {
        item[columns[columnIndex]] = cleanCell(row[sourceIndex]);
      });

      return item;
    });

  const jsonData = {
    columns,
    rows,
    rawRows: cleanedRawRows,
    guncellemeTarihi: extractExportDate(cleanedRawRows, fileStat),
  };

  const jsonPath = excelPath.replace(/\.xlsx$/i, ".json");

  await fs.writeFile(jsonPath, JSON.stringify(jsonData, null, 2), "utf-8");

  console.log(
    `OK: ${path.relative(ROOT_DIR, excelPath)} -> ${path.relative(
      ROOT_DIR,
      jsonPath
    )}`
  );
}

async function main() {
  const excelFiles = await walk(APP_DIR);

  if (!excelFiles.length) {
    console.log("Excel dosyası bulunamadı.");
    return;
  }

  for (const excelPath of excelFiles) {
    await convertExcelToJson(excelPath);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
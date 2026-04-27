import fs from "node:fs/promises";
import path from "node:path";
import * as XLSX from "xlsx";

const APP_DIR = path.join(process.cwd(), "app");

function temizHucre(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return value;

  const metin = String(value).trim();
  return metin === "" ? null : metin;
}

async function findExcelFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findExcelFiles(fullPath)));
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".xlsx") &&
      fullPath.includes(`${path.sep}data${path.sep}`)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertExcelToJson(filePath) {
  const buffer = await fs.readFile(filePath);
  const stat = await fs.stat(filePath);

  const workbook = XLSX.read(buffer, { type: "buffer" });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

  const rawRows = XLSX.utils.sheet_to_json(firstSheet, {
    defval: null,
  });

  const columns =
    rawRows.length > 0
      ? Object.keys(rawRows[0]).filter((item) => item && item.trim() !== "")
      : [];

  const rows = rawRows.map((row) => {
    const normalized = {};

    for (const column of columns) {
      normalized[column] = temizHucre(row[column]);
    }

    return normalized;
  });

  const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(stat.mtime);

  const jsonPath = filePath.replace(/\.xlsx$/i, ".json");

  await fs.writeFile(
    jsonPath,
    JSON.stringify({ columns, rows, guncellemeTarihi }, null, 2),
    "utf-8"
  );

  console.log(`Excel JSON'a çevrildi: ${path.relative(process.cwd(), jsonPath)}`);
}

async function main() {
  const excelFiles = await findExcelFiles(APP_DIR);

  if (excelFiles.length === 0) {
    console.log("Excel dosyası bulunamadı.");
    return;
  }

  for (const filePath of excelFiles) {
    await convertExcelToJson(filePath);
  }
}

main().catch((error) => {
  console.error("Excel JSON dönüşüm hatası:", error);
  process.exit(1);
});
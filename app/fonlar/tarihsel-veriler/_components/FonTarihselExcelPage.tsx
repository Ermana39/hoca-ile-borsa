import fs from "fs/promises";
import path from "path";
import { Suspense } from "react";
import Link from "@/components/NoPrefetchLink";
import FonTarihselSearchClient from "./FonTarihselSearchClient";

type CellValue = string | number | null;

type JsonRow = Record<string, string | number | null>;

type JsonData = {
  columns?: string[];
  rows?: JsonRow[];
  rawRows?: (string | number | null)[][];
  guncellemeTarihi?: string;
};

type Props = {
  title: string;
  description: string;
  pageBasePath: string;
  backHref?: string;
};

function normalizeText(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function normalizeKey(value: unknown) {
  return normalizeText(value)
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function parseCell(value: unknown): CellValue {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return value;
  return normalizeText(value);
}

function excelSerialToDate(serial: number) {
  const utcDays = Math.floor(serial - 25569);
  const utcValue = utcDays * 86400;
  const dateInfo = new Date(utcValue * 1000);
  return dateInfo.toLocaleDateString("tr-TR");
}

function formatDateCell(value: CellValue) {
  if (value === null || value === "") return null;

  if (typeof value === "number" && Number.isFinite(value)) {
    return excelSerialToDate(value);
  }

  const text = normalizeText(value);

  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(text)) return text;

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    const [y, m, d] = text.split("-");
    return `${d}.${m}.${y}`;
  }

  return text;
}

function findHeaderRow(rows: CellValue[][]) {
  for (let i = 0; i < Math.min(rows.length, 30); i++) {
    const normalized = rows[i].map((cell) => normalizeKey(cell));

    const hasFonKodu = normalized.some((cell) => cell.includes("fon kodu"));
    const hasFonAdi = normalized.some(
      (cell) => cell.includes("fon adi") || cell.includes("fon ad")
    );

    if (hasFonKodu && hasFonAdi) return i;
  }

  return 0;
}

function isMetaRow(row: CellValue[]) {
  const firstCell = normalizeKey(row[0]);

  if (!firstCell) return false;

  if (firstCell.includes("disa aktarim tarihi")) return true;
  if (firstCell.includes("toplam kayit sayisi")) return true;
  if (firstCell.includes("rapor bilgileri")) return true;
  if (firstCell === "fon kodu") return true;

  return false;
}

function isDateHeader(header: string) {
  return normalizeKey(header).includes("tarih");
}

async function getJsonData() {
  const filePath = path.join(
    process.cwd(),
    "app",
    "fonlar",
    "tarihsel-veriler",
    "menkul-kiymet-yatirim-fonlari",
    "data",
    "menkul-kiymet-yatirim-fonlari-tarihsel.json"
  );

  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file) as JsonData;

  const rawRows = (data.rawRows || []).map((row) =>
    row.map((cell) => parseCell(cell))
  );

  if (!rawRows.length) {
    return {
      headers: [] as string[],
      rows: [] as CellValue[][],
      guncellemeTarihi: "-",
    };
  }

  const headerRowIndex = findHeaderRow(rawRows);
  const headerRow = rawRows[headerRowIndex] || [];

  const columnIndexes = headerRow
    .map((header, index) => ({
      header: normalizeText(header),
      index,
    }))
    .filter((item) => {
      const key = normalizeKey(item.header);
      if (!key) return false;
      if (key.startsWith("__empty")) return false;
      if (key.includes("rapor bilgileri")) return false;
      return true;
    })
    .map((item) => item.index);

  const headers = columnIndexes.map((index, order) => {
    const header = normalizeText(headerRow[index]);
    return header || `Sütun ${order + 1}`;
  });

  const rows = rawRows
    .slice(headerRowIndex + 1)
    .map((row) =>
      columnIndexes.map((sourceIndex, colIndex) => {
        const value = parseCell(row[sourceIndex]);
        const header = headers[colIndex];

        if (isDateHeader(header)) {
          return formatDateCell(value);
        }

        return value;
      })
    )
    .filter((row) => {
      if (!row.some((cell) => cell !== null && cell !== "")) return false;
      if (isMetaRow(row)) return false;
      return true;
    });

  const exportRow = rawRows.find((row) =>
    normalizeKey(row[0]).includes("disa aktarim tarihi")
  );

  const guncellemeTarihi = String(exportRow?.[1] || data.guncellemeTarihi || "-");

  return {
    headers,
    rows,
    guncellemeTarihi,
  };
}

export default async function FonTarihselExcelPage({
  title,
  description,
  backHref = "/fonlar/tarihsel-veriler",
}: Props) {
  const { headers, rows, guncellemeTarihi } = await getJsonData();

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href={backHref}
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">{title}</h1>
        <p className="mb-3 max-w-3xl text-base text-zinc-600">{description}</p>

        <p className="mb-6 text-sm text-zinc-500">
          Son güncelleme: {guncellemeTarihi}
        </p>

        <Suspense fallback={<p className="text-sm text-zinc-500">Veriler hazırlanıyor...</p>}>
          <FonTarihselSearchClient headers={headers} rows={rows} />
        </Suspense>
      </div>
    </main>
  );
}

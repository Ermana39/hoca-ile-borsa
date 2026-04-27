import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import FonTarihselTableClient from "./FonTarihselTableClient";

type SearchParams = Promise<{
  q?: string;
  sort?: string;
  dir?: string;
}>;

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
  excelRelativePath: string;
  pageBasePath: string;
  backHref?: string;
  searchParams: SearchParams;
};

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

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

function parseDateForSort(value: CellValue) {
  const text = normalizeText(value);
  const match = text.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);

  if (!match) return null;

  const [, day, month, year] = match;

  return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
}

function parseNumberForSort(value: CellValue) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const text = normalizeText(value);
  if (!text) return null;

  const cleaned = text
    .replace(/%/g, "")
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  if (!cleaned) return null;

  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function compareCells(a: CellValue, b: CellValue, dir: "asc" | "desc") {
  const aDate = parseDateForSort(a);
  const bDate = parseDateForSort(b);

  if (aDate !== null && bDate !== null) {
    return dir === "asc" ? aDate - bDate : bDate - aDate;
  }

  const aNum = parseNumberForSort(a);
  const bNum = parseNumberForSort(b);

  if (aNum !== null && bNum !== null) {
    return dir === "asc" ? aNum - bNum : bNum - aNum;
  }

  const aText = normalizeText(a);
  const bText = normalizeText(b);

  return dir === "asc"
    ? aText.localeCompare(bText, "tr")
    : bText.localeCompare(aText, "tr");
}

async function getJsonData(excelRelativePath: string) {
  const jsonRelativePath = excelRelativePath.replace(/\.xlsx$/i, ".json");
  const filePath = path.join(process.cwd(), jsonRelativePath);

  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file) as JsonData;

  const rawRows = (data.rawRows || []).map((row) =>
    row.map((cell) => parseCell(cell))
  );

  if (!rawRows.length) {
    return {
      headers: [] as string[],
      rows: [] as CellValue[][],
      guncellemeTarihi: data.guncellemeTarihi || "-",
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

  return {
    headers,
    rows,
    guncellemeTarihi: data.guncellemeTarihi || "-",
  };
}

export default async function FonTarihselExcelPage({
  title,
  description,
  excelRelativePath,
  pageBasePath,
  backHref = "/fonlar/tarihsel-veriler",
  searchParams,
}: Props) {
  const params = await searchParams;
  const q = (params.q ?? "").toLocaleLowerCase("tr-TR").trim();

  const { headers, rows, guncellemeTarihi } = await getJsonData(excelRelativePath);

  const filteredRows = rows.filter((row) => {
    if (!q) return true;

    const text = row
      .map((cell) => String(cell ?? ""))
      .join(" ")
      .toLocaleLowerCase("tr-TR");

    return text.includes(q);
  });

  const sortIndexRaw = Number(params.sort);
  const sortIndex =
    Number.isInteger(sortIndexRaw) &&
    sortIndexRaw >= 0 &&
    sortIndexRaw < headers.length
      ? sortIndexRaw
      : -1;

  const dir: "asc" | "desc" = params.dir === "desc" ? "desc" : "asc";

  const sortedRows =
    sortIndex >= 0
      ? [...filteredRows].sort((a, b) =>
          compareCells(a[sortIndex], b[sortIndex], dir)
        )
      : filteredRows;

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl pb-24">
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

        <div className="mb-6 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4">
          <form action={pageBasePath} method="get">
            <input
              type="text"
              name="q"
              defaultValue={params.q ?? ""}
              placeholder="Tabloda ara"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-500"
            />
          </form>
        </section>

        <FonTarihselTableClient
          headers={headers}
          rows={sortedRows}
          pageBasePath={pageBasePath}
          q={q}
          sort={sortIndex >= 0 ? String(sortIndex) : ""}
          dir={dir}
        />
      </div>
    </main>
  );
}
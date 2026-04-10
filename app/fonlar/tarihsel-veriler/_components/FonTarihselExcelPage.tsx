import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import * as XLSX from "xlsx";
import FonTarihselTableClient from "./FonTarihselTableClient";

type SearchParams = Promise<{
  q?: string;
}>;

type CellValue = string | number | null;

type Props = {
  title: string;
  description: string;
  excelRelativePath: string;
  pageBasePath: string;
  backHref?: string;
  searchParams: SearchParams;
};

function ReklamAlani({ height = "h-[90px]" }: { height?: string }) {
  return (
    <div
      className={`w-full rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 ${height}`}
      aria-label="Reklam alanı"
    />
  );
}

function normalizeText(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function parseCell(value: unknown): CellValue {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return value;
  return normalizeText(value);
}

function findHeaderRow(rows: CellValue[][]) {
  let bestIndex = 0;
  let bestCount = 0;

  for (let i = 0; i < Math.min(rows.length, 10); i++) {
    const count = rows[i].filter((cell) => cell !== null && cell !== "").length;
    if (count > bestCount) {
      bestCount = count;
      bestIndex = i;
    }
  }

  return bestIndex;
}

async function getExcelData(excelRelativePath: string) {
  const filePath = path.join(process.cwd(), excelRelativePath);
  const buffer = await fs.readFile(filePath);
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const firstSheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[firstSheetName];

  const rawRows = XLSX.utils.sheet_to_json<(string | number | null)[]>(sheet, {
    header: 1,
    defval: "",
    raw: true,
  });

  const rows = rawRows.map((row) => row.map((cell) => parseCell(cell)));
  if (rows.length === 0) {
    return { headers: [] as string[], rows: [] as CellValue[][] };
  }

  const headerRowIndex = findHeaderRow(rows);
  const headers = rows[headerRowIndex].map((cell, index) =>
    normalizeText(cell) || `Sütun ${index + 1}`
  );

  const dataRows = rows
    .slice(headerRowIndex + 1)
    .filter((row) => row.some((cell) => cell !== null && cell !== ""));

  return { headers, rows: dataRows };
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

  const { headers, rows } = await getExcelData(excelRelativePath);

  const filteredRows = rows.filter((row) => {
    if (!q) return true;
    const text = row.map((cell) => String(cell ?? "")).join(" ").toLocaleLowerCase("tr-TR");
    return text.includes(q);
  });

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl pb-24">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href={backHref}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">{title}</h1>
        <p className="mb-6 max-w-3xl text-base text-zinc-600">{description}</p>

        <section className="mb-6">
          <ReklamAlani />
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

        <FonTarihselTableClient headers={headers} rows={filteredRows} />

        <section className="mt-6">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}
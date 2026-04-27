import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import FonTarihselTableClient from "./FonTarihselTableClient";

type SearchParams = Promise<{
  q?: string;
}>;

type CellValue = string | number | null;

type JsonRow = Record<string, string | number | null>;

type JsonData = {
  columns?: string[];
  rows?: JsonRow[];
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

function parseCell(value: unknown): CellValue {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return value;
  return normalizeText(value);
}

async function getJsonData(excelRelativePath: string) {
  const jsonRelativePath = excelRelativePath.replace(/\.xlsx$/i, ".json");
  const filePath = path.join(process.cwd(), jsonRelativePath);

  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file) as JsonData;

  const headers =
    Array.isArray(data.columns) && data.columns.length > 0
      ? data.columns.map((item, index) => normalizeText(item) || `Sütun ${index + 1}`)
      : [];

  const rows = (data.rows || [])
    .map((row) => headers.map((header) => parseCell(row[header])))
    .filter((row) => row.some((cell) => cell !== null && cell !== ""));

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

        <FonTarihselTableClient headers={headers} rows={filteredRows} />
      </div>
    </main>
  );
}
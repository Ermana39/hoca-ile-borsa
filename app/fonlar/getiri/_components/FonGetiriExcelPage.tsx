import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import * as XLSX from "xlsx";
import FonGetiriTableClient from "./FonGetiriTableClient";

type SearchParams = Promise<{
  q?: string;
  sort?: string;
  dir?: string;
}>;

type FonRow = {
  kod: string;
  ad: string;
  kategori: string;
  birAy: number | null;
  ucAy: number | null;
  altiAy: number | null;
  yilbasi: number | null;
  birYil: number | null;
  ucYil: number | null;
  besYil: number | null;
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

function parseNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const raw = String(value).trim();
  if (!raw) return null;

  const cleaned = raw
    .replace(/%/g, "")
    .replace(/\./g, "")
    .replace(/,/g, ".")
    .replace(/[^\d.-]/g, "");

  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function sortArrow(active: boolean, direction: "asc" | "desc") {
  if (!active) return "↕";
  return direction === "asc" ? "↑" : "↓";
}

function toSortableNumber(value: unknown) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : -999999999;
  }

  if (value === null || value === undefined || value === "") {
    return -999999999;
  }

  const normalized = Number(
    String(value).trim().replace(/\./g, "").replace(",", ".")
  );

  return Number.isFinite(normalized) ? normalized : -999999999;
}

async function getExcelData(excelRelativePath: string): Promise<FonRow[]> {
  const filePath = path.join(process.cwd(), excelRelativePath);

  const buffer = await fs.readFile(filePath);
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const firstSheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[firstSheetName];

  const rows = XLSX.utils.sheet_to_json<(string | number | null)[]>(sheet, {
    header: 1,
    defval: "",
    raw: true,
  });

  if (rows.length < 3) return [];

  const dataRows = rows.slice(2);

  return dataRows
    .map((row) => ({
      kod: normalizeText(row[0]),
      ad: normalizeText(row[1]),
      kategori: normalizeText(row[2]),
      birAy: parseNumber(row[3]),
      ucAy: parseNumber(row[4]),
      altiAy: parseNumber(row[5]),
      yilbasi: parseNumber(row[6]),
      birYil: parseNumber(row[7]),
      ucYil: parseNumber(row[8]),
      besYil: parseNumber(row[9]),
    }))
    .filter((item) => item.kod || item.ad);
}

export default async function FonGetiriExcelPage({
  title,
  description,
  excelRelativePath,
  pageBasePath,
  backHref = "/fonlar/getiri",
  searchParams,
}: Props) {
  const params = await searchParams;
  const q = (params.q ?? "").toLocaleLowerCase("tr-TR").trim();

  const allowedSorts = [
    "kod",
    "ad",
    "kategori",
    "birAy",
    "ucAy",
    "altiAy",
    "yilbasi",
    "birYil",
    "ucYil",
    "besYil",
  ] as const;

  const sort = allowedSorts.includes((params.sort ?? "birAy") as never)
    ? (params.sort as (typeof allowedSorts)[number])
    : "birAy";

  const dir: "asc" | "desc" = params.dir === "asc" ? "asc" : "desc";

  const data = await getExcelData(excelRelativePath);

  const filtered = data.filter((item) => {
    if (!q) return true;
    const text = `${item.kod} ${item.ad} ${item.kategori}`.toLocaleLowerCase("tr-TR");
    return text.includes(q);
  });

  const sorted = [...filtered].sort((a, b) => {
    const aValue = a[sort];
    const bValue = b[sort];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return dir === "asc"
        ? aValue.localeCompare(bValue, "tr")
        : bValue.localeCompare(aValue, "tr");
    }

    const aNum = toSortableNumber(aValue);
    const bNum = toSortableNumber(bValue);

    return dir === "asc" ? aNum - bNum : bNum - aNum;
  });

  const nextDir = (column: string) => {
    if (sort === column) return dir === "asc" ? "desc" : "asc";
    return column === "kod" || column === "ad" || column === "kategori"
      ? "asc"
      : "desc";
  };

  const sortLink = (column: string) => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    sp.set("sort", column);
    sp.set("dir", nextDir(column));
    return `${pageBasePath}?${sp.toString()}`;
  };

  const headers = (
    <tr>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("kod")}>
          Fon Kodu {sortArrow(sort === "kod", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("ad")}>
          Fon Adı {sortArrow(sort === "ad", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("kategori")}>
          Şemsiye Fon Türü {sortArrow(sort === "kategori", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("birAy")}>
          1 Ay % {sortArrow(sort === "birAy", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("ucAy")}>
          3 Ay % {sortArrow(sort === "ucAy", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("altiAy")}>
          6 Ay % {sortArrow(sort === "altiAy", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("yilbasi")}>
          Yılbaşı % {sortArrow(sort === "yilbasi", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("birYil")}>
          1 Yıl % {sortArrow(sort === "birYil", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("ucYil")}>
          3 Yıl % {sortArrow(sort === "ucYil", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("besYil")}>
          5 Yıl % {sortArrow(sort === "besYil", dir)}
        </Link>
      </th>
    </tr>
  );

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
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4">
          <form action={pageBasePath} method="get">
            <input
              type="text"
              name="q"
              defaultValue={params.q ?? ""}
              placeholder="Fon kodu, fon adı veya kategori ara"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-500"
            />
          </form>
        </section>

        <FonGetiriTableClient rows={sorted} headers={headers} />

        <section className="mt-6">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}
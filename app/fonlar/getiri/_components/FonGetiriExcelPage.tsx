import fs from "fs/promises";
import path from "path";
import Link from "next/link";
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

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeKey(header);
      return adaylar.some((aday) => h.includes(normalizeKey(aday)));
    }) || ""
  );
}

function getValue(row: JsonRow, column: string, fallbackIndex: number) {
  if (column && row[column] !== undefined) return row[column];

  const values = Object.values(row);
  return values[fallbackIndex] ?? null;
}

async function getJsonData(excelRelativePath: string): Promise<{
  rows: FonRow[];
  guncellemeTarihi: string;
}> {
  const jsonRelativePath = excelRelativePath.replace(/\.xlsx$/i, ".json");
  const filePath = path.join(process.cwd(), jsonRelativePath);

  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file) as JsonData;

  const rows = data.rows || [];

  if (!rows.length) {
    return {
      rows: [],
      guncellemeTarihi: data.guncellemeTarihi || "-",
    };
  }

  const headers =
    Array.isArray(data.columns) && data.columns.length > 0
      ? data.columns
      : Object.keys(rows[0] || {});

  const kodKolonu = kolonBul(headers, ["fon kodu", "kod"]);
  const adKolonu = kolonBul(headers, ["fon adi", "fon adı", "ad"]);
  const kategoriKolonu = kolonBul(headers, [
    "semsiye fon turu",
    "şemsiye fon türü",
    "kategori",
  ]);
  const birAyKolonu = kolonBul(headers, ["1 ay", "bir ay"]);
  const ucAyKolonu = kolonBul(headers, ["3 ay", "uc ay", "üç ay"]);
  const altiAyKolonu = kolonBul(headers, ["6 ay", "alti ay", "altı ay"]);
  const yilbasiKolonu = kolonBul(headers, ["yilbasi", "yılbaşı"]);
  const birYilKolonu = kolonBul(headers, ["1 yil", "1 yıl", "bir yil"]);
  const ucYilKolonu = kolonBul(headers, ["3 yil", "3 yıl", "uc yil", "üç yıl"]);
  const besYilKolonu = kolonBul(headers, ["5 yil", "5 yıl", "bes yil", "beş yıl"]);

  const parsedRows = rows
    .map((row) => ({
      kod: normalizeText(getValue(row, kodKolonu, 0)),
      ad: normalizeText(getValue(row, adKolonu, 1)),
      kategori: normalizeText(getValue(row, kategoriKolonu, 2)),
      birAy: parseNumber(getValue(row, birAyKolonu, 3)),
      ucAy: parseNumber(getValue(row, ucAyKolonu, 4)),
      altiAy: parseNumber(getValue(row, altiAyKolonu, 5)),
      yilbasi: parseNumber(getValue(row, yilbasiKolonu, 6)),
      birYil: parseNumber(getValue(row, birYilKolonu, 7)),
      ucYil: parseNumber(getValue(row, ucYilKolonu, 8)),
      besYil: parseNumber(getValue(row, besYilKolonu, 9)),
    }))
    .filter((item) => {
  const kod = normalizeKey(item.kod);
  const ad = normalizeKey(item.ad);

  if (!item.kod && !item.ad) return false;

  if (kod === "fon kodu" || ad === "fon adi") return false;

  if (kod.includes("disa aktarim tarihi")) return false;
  if (kod.includes("toplam kayit sayisi")) return false;

  return true;
});

  return {
    rows: parsedRows,
    guncellemeTarihi: data.guncellemeTarihi || "-",
  };
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

  const { rows: data, guncellemeTarihi } = await getJsonData(excelRelativePath);

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
        <Link href={sortLink("kod")} prefetch={false}>
          Fon Kodu {sortArrow(sort === "kod", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("ad")} prefetch={false}>
          Fon Adı {sortArrow(sort === "ad", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("kategori")} prefetch={false}>
          Şemsiye Fon Türü {sortArrow(sort === "kategori", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("birAy")} prefetch={false}>
          1 Ay % {sortArrow(sort === "birAy", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("ucAy")} prefetch={false}>
          3 Ay % {sortArrow(sort === "ucAy", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("altiAy")} prefetch={false}>
          6 Ay % {sortArrow(sort === "altiAy", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("yilbasi")} prefetch={false}>
          Yılbaşı % {sortArrow(sort === "yilbasi", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("birYil")} prefetch={false}>
          1 Yıl % {sortArrow(sort === "birYil", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("ucYil")} prefetch={false}>
          3 Yıl % {sortArrow(sort === "ucYil", dir)}
        </Link>
      </th>
      <th className="px-4 py-4 text-left font-semibold">
        <Link href={sortLink("besYil")} prefetch={false}>
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
              placeholder="Fon kodu, fon adı veya kategori ara"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-500"
            />
          </form>
        </section>

        <FonGetiriTableClient rows={sorted} headers={headers} />
      </div>
    </main>
  );
}
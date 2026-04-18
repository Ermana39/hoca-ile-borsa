import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import * as XLSX from "xlsx";

type SearchParams = {
  sort?: string;
  order?: "asc" | "desc";
};

type RowData = Record<string, string | number | null>;

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

function temizHucreDegeri(value: unknown): string | number | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return null;
    return trimmed;
  }
  return String(value);
}

function sayisalDeger(value: string | number | null): number | null {
  if (value === null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const normalized = value
    .replace(/\s/g, "")
    .replace(/₺|\$|€|£|%/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatDeger(value: string | number | null) {
  if (value === null) return "-";
  if (typeof value === "number") {
    return new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
      maximumFractionDigits: 4,
    }).format(value);
  }
  return value;
}

function siraliVeri(
  rows: RowData[],
  sortKey: string | undefined,
  order: "asc" | "desc"
) {
  if (!sortKey) return rows;

  return [...rows].sort((a, b) => {
    const aVal = a[sortKey] ?? null;
    const bVal = b[sortKey] ?? null;

    const aNum = sayisalDeger(aVal);
    const bNum = sayisalDeger(bVal);

    if (aNum !== null && bNum !== null) {
      return order === "asc" ? aNum - bNum : bNum - aNum;
    }

    const aStr = String(aVal ?? "").toLocaleLowerCase("tr");
    const bStr = String(bVal ?? "").toLocaleLowerCase("tr");

    return order === "asc"
      ? aStr.localeCompare(bStr, "tr")
      : bStr.localeCompare(aStr, "tr");
  });
}

async function excelVerisiniOku() {
  const filePath = path.join(
    process.cwd(),
    "app",
    "borsa",
    "oran-analizi",
    "data",
    "oran-analizi.xlsx"
  );

  const buffer = await fs.readFile(filePath);
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const firstSheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[firstSheetName];

  const rawRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
    defval: null,
  });

  const columns =
    rawRows.length > 0
      ? Object.keys(rawRows[0]).filter((key) => key && key.trim() !== "")
      : [];

  const rows: RowData[] = rawRows.map((row) => {
    const normalized: RowData = {};
    for (const col of columns) {
      normalized[col] = temizHucreDegeri(row[col]);
    }
    return normalized;
  });

  return { columns, rows };
}

function SiralamaLinki({
  label,
  sortKey,
  activeSort,
  activeOrder,
}: {
  label: string;
  sortKey: string;
  activeSort?: string;
  activeOrder: "asc" | "desc";
}) {
  const isActive = activeSort === sortKey;
  const nextOrder: "asc" | "desc" =
    isActive && activeOrder === "asc" ? "desc" : "asc";

  return (
    <div className="flex items-center justify-between gap-2">
      <span>{label}</span>
      <Link
        href={`/borsa/oran-analizi?sort=${encodeURIComponent(sortKey)}&order=${nextOrder}`}
        className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
          isActive
            ? "bg-emerald-100 text-emerald-700"
            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
        }`}
      >
        {isActive ? (activeOrder === "asc" ? "Artan" : "Azalan") : "Sırala"}
      </Link>
    </div>
  );
}

export default async function OranAnaliziPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const aktifSort = resolvedSearchParams.sort;
  const aktifOrder: "asc" | "desc" =
    resolvedSearchParams.order === "asc" ? "asc" : "desc";

  const { columns, rows } = await excelVerisiniOku();
  const sortedRows = siraliVeri(rows, aktifSort, aktifOrder);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Oran Analizi</h1>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mb-8 rounded-2xl border border-zinc-200 bg-white p-4 md:p-5">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="rounded-xl bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-700">
              Sıralama: {aktifSort ? `${aktifSort} / ${aktifOrder === "asc" ? "Artan" : "Azalan"}` : "Yok"}
            </div>

            {(aktifSort || resolvedSearchParams.order) && (
              <Link
                href="/borsa/oran-analizi"
                className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
              >
                Sıralamayı Temizle
              </Link>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200">
            <div className="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
              Başlıklardaki butonlarla sütunları artan veya azalan şekilde sıralayabilirsiniz.
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[1200px] w-full bg-white text-sm">
                <thead className="bg-zinc-100 text-zinc-700">
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        className="border-b border-zinc-200 px-4 py-3 text-left font-bold whitespace-nowrap"
                      >
                        <SiralamaLinki
                          label={column}
                          sortKey={column}
                          activeSort={aktifSort}
                          activeOrder={aktifOrder}
                        />
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {sortedRows.map((row, rowIndex) => (
                    <tr
                      key={`row-${rowIndex}`}
                      className={rowIndex % 2 === 1 ? "bg-sky-50" : "bg-white"}
                    >
                      {columns.map((column) => (
                        <td
                          key={`${rowIndex}-${column}`}
                          className="border-b border-zinc-100 px-4 py-3 whitespace-nowrap text-zinc-700"
                        >
                          {formatDeger(row[column] ?? null)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sticky bottom-0 overflow-x-auto border-t border-zinc-200 bg-zinc-50">
              <div className="h-6 min-w-[1200px]" />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Oran Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Oran analizi sayfası, Borsa İstanbul&apos;da işlem gören şirketlerin finansal
            verilerini daha hızlı karşılaştırmak isteyen yatırımcılar için hazırlanmıştır.
            Bu sayfada şirketlerin değerleme, kârlılık, borçluluk, likidite ve faaliyet
            verimliliği gibi temel oranlarını tek tablo üzerinde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Finansal oranlar, şirketlerin bilanço ve gelir tablosu performansını sayısal
            olarak değerlendirmek için en çok kullanılan analiz araçları arasında yer alır.
            Özellikle F/K, PD/DD, cari oran, net kâr marjı, özsermaye kârlılığı ve benzeri
            göstergeler şirket karşılaştırmalarında yatırımcılara önemli bir bakış açısı sağlar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan oran analizi tablosu sayesinde sütunları artan veya azalan
            şekilde sıralayabilir, farklı şirketleri aynı ekranda karşılaştırabilir ve
            dikkat çeken finansal görünümleri daha hızlı tespit edebilirsiniz. Bu yapı hem
            temel analiz yapan kullanıcılar hem de hisse seçim sürecinde finansal filtreleri
            kullanan yatırımcılar için pratik bir takip ekranı sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel oran analizi verileri, BIST şirket karşılaştırmaları, temel analiz
            metrikleri, finansal oranlar ve şirket bazlı değerleme göstergeleri için bu
            sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
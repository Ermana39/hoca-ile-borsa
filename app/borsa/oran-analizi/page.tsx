import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Script from "next/script";
import * as XLSX from "xlsx";

export const metadata = {
  title: "Oran Analizi | Hoca İle Borsa",
  description:
    "Borsa İstanbul şirketlerini finansal oran verilerine göre artan ve azalan şekilde sıralayarak karşılaştırın.",
};

type SearchParamValue = string | string[] | undefined;
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

function getParam(value: SearchParamValue) {
  return Array.isArray(value) ? value[0] : value;
}

function temizHucre(value: unknown): string | number | null {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return value;
  const metin = String(value).trim();
  return metin === "" ? null : metin;
}

function parseNumeric(value: string | number | null) {
  if (value === null) return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;

  const temiz = value
    .replace(/\s/g, "")
    .replace(/₺|\$|€|£|%/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");

  const sayi = Number(temiz);
  return Number.isFinite(sayi) ? sayi : null;
}

function formatValue(value: string | number | null) {
  if (value === null) return "-";

  if (typeof value === "number") {
    return new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
      maximumFractionDigits: 4,
    }).format(value);
  }

  return value;
}

function getSektorAdi(row: RowData, columns: string[]) {
  const doluHucreler = columns
    .map((column) => row[column])
    .filter((value) => value !== null && value !== "");

  if (doluHucreler.length !== 1) return null;

  const ilkDeger = String(doluHucreler[0] ?? "").trim();
  if (!ilkDeger) return null;

  const sayisalMi = parseNumeric(ilkDeger);
  if (sayisalMi !== null) return null;

  return ilkDeger;
}

function sortRows(rows: RowData[], sortKey: string | undefined, dir: "asc" | "desc", columns: string[]) {
  if (!sortKey) return rows;

  const sektorSatirlari: { index: number; row: RowData }[] = [];
  const normalSatirlar: RowData[] = [];

  rows.forEach((row, index) => {
    if (getSektorAdi(row, columns)) {
      sektorSatirlari.push({ index, row });
    } else {
      normalSatirlar.push(row);
    }
  });

  const sortedNormalRows = [...normalSatirlar].sort((a, b) => {
    const aVal = a[sortKey] ?? null;
    const bVal = b[sortKey] ?? null;

    const aNum = parseNumeric(aVal);
    const bNum = parseNumeric(bVal);

    if (aNum !== null && bNum !== null) {
      return dir === "asc" ? aNum - bNum : bNum - aNum;
    }

    const aStr = String(aVal ?? "").toLocaleLowerCase("tr");
    const bStr = String(bVal ?? "").toLocaleLowerCase("tr");

    return dir === "asc"
      ? aStr.localeCompare(bStr, "tr")
      : bStr.localeCompare(aStr, "tr");
  });

  const result: RowData[] = [];
  let normalIndex = 0;
  let sektorIndex = 0;

  for (let i = 0; i < rows.length; i += 1) {
    if (sektorIndex < sektorSatirlari.length && sektorSatirlari[sektorIndex].index === i) {
      result.push(sektorSatirlari[sektorIndex].row);
      sektorIndex += 1;
    } else {
      result.push(sortedNormalRows[normalIndex]);
      normalIndex += 1;
    }
  }

  return result;
}

function SortButtons({
  basePath,
  column,
  activeSort,
  activeDir,
}: {
  basePath: string;
  column: string;
  activeSort?: string;
  activeDir: "asc" | "desc";
}) {
  const aktifArtan = activeSort === column && activeDir === "asc";
  const aktifAzalan = activeSort === column && activeDir === "desc";

  return (
    <div className="ml-2 flex items-center gap-1">
      <Link
        href={`${basePath}?sort=${encodeURIComponent(column)}&dir=asc`}
        className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
          aktifArtan
            ? "bg-emerald-100 text-emerald-700"
            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
        }`}
      >
        Artan
      </Link>
      <Link
        href={`${basePath}?sort=${encodeURIComponent(column)}&dir=desc`}
        className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
          aktifAzalan
            ? "bg-emerald-100 text-emerald-700"
            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
        }`}
      >
        Azalan
      </Link>
    </div>
  );
}

async function getExcelData() {
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
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

  const rawRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(firstSheet, {
    defval: null,
  });

  const columns =
    rawRows.length > 0
      ? Object.keys(rawRows[0]).filter((item) => item && item.trim() !== "")
      : [];

  const rows: RowData[] = rawRows.map((row) => {
    const normalized: RowData = {};
    for (const column of columns) {
      normalized[column] = temizHucre(row[column]);
    }
    return normalized;
  });

  return { columns, rows };
}

export default async function OranAnaliziPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: SearchParamValue; dir?: SearchParamValue }>;
}) {
  const params = await searchParams;
  const aktifSort = getParam(params.sort);
  const aktifDir = getParam(params.dir) === "asc" ? "asc" : "desc";

  const { columns, rows } = await getExcelData();
  const sortedRows = sortRows(rows, aktifSort, aktifDir, columns);

  const tableOuterId = "oran-analizi-table-outer";
  const tableWidthId = "oran-analizi-table-width";
  const bottomScrollId = "oran-analizi-bottom-scroll";
  const bottomContentId = "oran-analizi-bottom-content";

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

        <section className="rounded-2xl bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-zinc-900 md:text-4xl">
            Oran Analizi
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">
            Oran analizi sayfası üzerinden şirketlerin finansal oran verilerini
            toplu şekilde inceleyebilir, sütunları artan ve azalan olarak
            sıralayarak farklı şirketleri daha hızlı karşılaştırabilirsiniz.
          </p>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
              Sütun başlıklarındaki artan ve azalan butonları ile verileri
              sıralayabilirsiniz.
            </div>

            <div id={tableOuterId} className="overflow-x-auto">
              <div id={tableWidthId} className="min-w-max">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-zinc-100 text-zinc-700">
                    <tr>
                      {columns.map((column) => (
                        <th
                          key={column}
                          className="border-b border-zinc-200 px-4 py-3 text-left font-bold whitespace-nowrap"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span>{column}</span>
                            <SortButtons
                              basePath="/borsa/oran-analizi"
                              column={column}
                              activeSort={aktifSort}
                              activeDir={aktifDir}
                            />
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {sortedRows.map((row, index) => {
                      const sektorAdi = getSektorAdi(row, columns);

                      if (sektorAdi) {
                        return (
                          <tr key={`row-${index}`} className="bg-red-50">
                            <td
                              colSpan={columns.length}
                              className="border-b border-red-100 px-4 py-3 font-semibold text-red-700 whitespace-nowrap"
                            >
                              {sektorAdi}
                            </td>
                          </tr>
                        );
                      }

                      return (
                        <tr
                          key={`row-${index}`}
                          className={index % 2 === 1 ? "bg-sky-50" : "bg-white"}
                        >
                          {columns.map((column) => (
                            <td
                              key={`${index}-${column}`}
                              className="border-b border-zinc-100 px-4 py-3 whitespace-nowrap text-zinc-700"
                            >
                              {formatValue(row[column] ?? null)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="sticky bottom-0 z-20 border-t border-zinc-200 bg-white">
              <div id={bottomScrollId} className="overflow-x-auto">
                <div id={bottomContentId} className="h-5 min-w-max" />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Oran Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Oran analizi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            finansal oran verilerini daha detaylı karşılaştırmak isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada şirketlerin değerleme,
            kârlılık, borçluluk, likidite ve verimlilik göstergelerini tek tablo
            üzerinde takip edebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Finansal oranlar, şirketlerin bilanço yapısını ve faaliyet
            performansını daha sağlıklı değerlendirmek için kullanılan temel
            analiz araçları arasında yer alır. Özellikle F/K, PD/DD, cari oran,
            özsermaye kârlılığı ve net kâr marjı gibi veriler hisse seçiminde
            önemli bir referans sağlar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan oran analizi tablosu sayesinde sütunları artan veya
            azalan şekilde sıralayabilir, şirketleri aynı ekranda karşılaştırabilir
            ve dikkat çeken finansal görünümleri daha hızlı fark edebilirsiniz.
            Açık kırmızı ile gösterilen sektör satırları ise tablo içinde bölümleri
            daha kolay ayırt etmenize yardımcı olur.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel oran analizi verileri, BIST şirket karşılaştırmaları, temel
            analiz metrikleri, finansal oranlar ve sektör bazlı şirket değerlendirmeleri
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>

      <Script id="oran-analizi-scroll-sync" strategy="afterInteractive">
        {`
          (function () {
            const outer = document.getElementById("${tableOuterId}");
            const widthBox = document.getElementById("${tableWidthId}");
            const bottom = document.getElementById("${bottomScrollId}");
            const bottomContent = document.getElementById("${bottomContentId}");
            if (!outer || !widthBox || !bottom || !bottomContent) return;

            let syncingTop = false;
            let syncingBottom = false;

            function syncWidths() {
              bottomContent.style.width = widthBox.scrollWidth + "px";
            }

            function syncFromTop() {
              if (syncingBottom) {
                syncingBottom = false;
                return;
              }
              syncingTop = true;
              bottom.scrollLeft = outer.scrollLeft;
            }

            function syncFromBottom() {
              if (syncingTop) {
                syncingTop = false;
                return;
              }
              syncingBottom = true;
              outer.scrollLeft = bottom.scrollLeft;
            }

            outer.addEventListener("scroll", syncFromTop, { passive: true });
            bottom.addEventListener("scroll", syncFromBottom, { passive: true });

            syncWidths();
            bottom.scrollLeft = outer.scrollLeft;

            if (typeof ResizeObserver !== "undefined") {
              const observer = new ResizeObserver(syncWidths);
              observer.observe(widthBox);
            }

            window.addEventListener("resize", syncWidths);
          })();
        `}
      </Script>
    </main>
  );
}
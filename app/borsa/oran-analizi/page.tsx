import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Script from "next/script";
import * as XLSX from "xlsx";

export const metadata = {
  title: "Oran Analizi | Hoca İle Borsa",
  description:
    "Borsa İstanbul şirketlerini finansal oran verilerine göre karşılaştırın.",
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

function getRowType(row: RowData, columns: string[]) {
  const doluHucreler = columns
    .map((column) => row[column])
    .filter((value) => value !== null && value !== "");

  if (doluHucreler.length !== 1) return "normal";

  const ilkDeger = String(doluHucreler[0] ?? "").trim();
  if (!ilkDeger) return "normal";
  if (parseNumeric(ilkDeger) !== null) return "normal";

  const normalized = ilkDeger.toLocaleLowerCase("tr");
  if (normalized === "sektör" || normalized === "sektor") return "remove";

  return "sector_header";
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

  const [buffer, stat] = await Promise.all([
    fs.readFile(filePath),
    fs.stat(filePath),
  ]);

  const workbook = XLSX.read(buffer, { type: "buffer" });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

  const rawRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(firstSheet, {
    defval: null,
  });

  const columns =
    rawRows.length > 0
      ? Object.keys(rawRows[0]).filter((item) => item && item.trim() !== "")
      : [];

  const rows: RowData[] = rawRows
    .map((row) => {
      const normalized: RowData = {};
      for (const column of columns) {
        normalized[column] = temizHucre(row[column]);
      }
      return normalized;
    })
    .filter((row) => getRowType(row, columns) !== "remove");

  const guncellemeTarihi = new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(stat.mtime);

  return { columns, rows, guncellemeTarihi };
}

export default async function OranAnaliziPage() {
  const { columns, rows, guncellemeTarihi } = await getExcelData();

  const tableOuterId = "oran-analizi-table-outer";
  const tableWidthId = "oran-analizi-table-width";
  const bottomScrollId = "oran-analizi-bottom-scroll";
  const bottomContentId = "oran-analizi-bottom-content";

  return (
    <main className="min-h-screen bg-white px-4 py-6 pb-24 md:px-6">
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
            toplu şekilde inceleyebilir ve farklı şirketleri daha hızlı
            karşılaştırabilirsiniz. Ekranı sağa kaydırarak diğer sütunları inceleyebilirsiniz.
          </p>

          <div className="mt-4 text-sm font-semibold text-zinc-700">
            Güncelleme Tarihi: {guncellemeTarihi}
          </div>
        </section>

        <section className="pt-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="py-6">
          <div className="rounded-2xl border border-zinc-200 bg-white">
            <div id={tableOuterId} className="overflow-x-auto rounded-2xl">
              <div id={tableWidthId} className="min-w-max">
                <table className="w-full border-collapse text-sm">
                  <thead className="text-zinc-700">
                    <tr>
                      {columns.map((column, columnIndex) => (
                        <th
                          key={column}
                          className={`border-b border-zinc-200 px-4 py-3 text-left font-bold whitespace-nowrap sticky top-0 z-30 ${
                            columnIndex === 0
                              ? "left-0 z-40 bg-zinc-100 shadow-[8px_0_12px_-12px_rgba(0,0,0,0.25)]"
                              : "bg-zinc-100"
                          }`}
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((row, index) => {
                      const rowType = getRowType(row, columns);

                      if (rowType === "sector_header") {
                        const sektorAdi = String(
                          columns
                            .map((column) => row[column])
                            .find((value) => value !== null && value !== "") ?? ""
                        );

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

                      const satirArkaPlan = index % 2 === 1 ? "bg-sky-50" : "bg-white";
                      const stickyArkaPlan = index % 2 === 1 ? "bg-sky-50" : "bg-white";

                      return (
                        <tr key={`row-${index}`} className={satirArkaPlan}>
                          {columns.map((column, columnIndex) => (
                            <td
                              key={`${index}-${column}`}
                              className={`border-b border-zinc-100 px-4 py-3 whitespace-nowrap text-zinc-700 ${
                                columnIndex === 0
                                  ? `sticky left-0 z-10 ${stickyArkaPlan} font-semibold text-zinc-900 shadow-[8px_0_12px_-12px_rgba(0,0,0,0.25)]`
                                  : ""
                              }`}
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
            Sayfada yer alan oran analizi tablosu sayesinde şirketleri aynı
            ekranda karşılaştırabilir ve dikkat çeken finansal görünümleri daha
            hızlı fark edebilirsiniz. Sektör başlıklarının ayrı satırlarda
            gösterilmesi ise tablo içinde bölümleri daha kolay ayırt etmenize
            yardımcı olur.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel oran analizi verileri, BIST şirket karşılaştırmaları, temel
            analiz metrikleri, finansal oranlar ve şirket bazlı değerleme
            göstergeleri için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div id={bottomScrollId} className="overflow-x-auto">
            <div id={bottomContentId} className="h-5 min-w-max" />
          </div>
        </div>
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
              bottom.scrollLeft = outer.scrollLeft;
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

            if (typeof ResizeObserver !== "undefined") {
              const observer = new ResizeObserver(syncWidths);
              observer.observe(widthBox);
            }

            window.addEventListener("resize", syncWidths);

            const thead = outer.querySelector("thead");
            if (thead) {
              const handleScroll = () => {
                const rect = outer.getBoundingClientRect();
                if (rect.top <= 0) {
                  thead.style.transform = "translateY(" + Math.abs(rect.top) + "px)";
                } else {
                  thead.style.transform = "translateY(0px)";
                }
              };

              window.addEventListener("scroll", handleScroll, { passive: true });
              handleScroll();
            }
          })();
        `}
      </Script>
    </main>
  );
}
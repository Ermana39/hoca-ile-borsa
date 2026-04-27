import Link from "next/link";
import Script from "next/script";
import geriAlimData from "./data/geri-alim.json";

export const metadata = {
  title: "Geri Alım Programları | Hoca İle Borsa",
  description:
    "Borsa İstanbul şirketlerinin geri alım programlarını ve pay geri alım verilerini takip edin.",
};

export const revalidate = 3600;

type GeriAlimSatiri = {
  sembol: string;
  ykkTarihi: string;
  geriAlinanAdet: number | null;
  alinacakAdet: number | null;
  ayrilanFon: number | null;
  geriAlinanHacim: number | null;
  alinacakOran: number | null;
  alinanOran: number | null;
  sonFiyat: number | null;
  alisOrtFiyat: number | null;
  sonIslemTarihi: string;
};

type JsonRow = Record<string, string | number | null>;

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

function normalizeText(metin: string) {
  return metin
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

function sayiCevir(deger: unknown): number | null {
  if (deger === null || deger === undefined || deger === "") return null;
  if (typeof deger === "number") return Number.isNaN(deger) ? null : deger;

  const metin = String(deger).trim();
  if (!metin) return null;

  const temiz = metin.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
  const sayi = Number(temiz);

  return Number.isNaN(sayi) ? null : sayi;
}

function metinCevir(deger: unknown): string {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function formatNumber(deger: number | null, fractionDigits = 2) {
  if (deger === null || Number.isNaN(deger)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  }).format(deger);
}

function formatPrice(deger: number | null) {
  return formatNumber(deger, 2);
}

function formatPercent(deger: number | null) {
  if (deger === null || Number.isNaN(deger)) return "-";

  return `%${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(deger)}`;
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): GeriAlimSatiri[] {
  const rows = (geriAlimData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const headers =
    Array.isArray(geriAlimData.columns) && geriAlimData.columns.length > 0
      ? geriAlimData.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    kolonBul(headers, ["sembol", "kod", "hisse", "ticker", "symbol"]) ||
    headers[0];

  const ykkTarihiKolonu =
    kolonBul(headers, ["ykk tarihi", "karar tarihi", "tarih"]) ||
    headers[1] ||
    "";

  const geriAlinanAdetKolonu =
    kolonBul(headers, [
      "geri alinan adet",
      "geri alınan adet",
      "alinan adet",
      "geri alım adet",
    ]) ||
    headers[2] ||
    "";

  const alinacakAdetKolonu =
    kolonBul(headers, [
      "alinacak adet",
      "alınacak adet",
      "program adet",
      "hedef adet",
    ]) ||
    headers[3] ||
    "";

  const ayrilanFonKolonu =
    kolonBul(headers, ["ayrilan fon", "ayrılan fon", "fon", "ayrilan tutar"]) ||
    headers[4] ||
    "";

  const geriAlinanHacimKolonu =
    kolonBul(headers, [
      "geri alinan hacim",
      "geri alınan hacim",
      "alinan hacim",
      "tutar",
    ]) ||
    headers[5] ||
    "";

  const alinacakOranKolonu =
    kolonBul(headers, [
      "alinacak oran",
      "alınacak oran",
      "hedef oran",
      "program oran",
    ]) ||
    headers[6] ||
    "";

  const alinanOranKolonu =
    kolonBul(headers, [
      "alinan oran",
      "alınan oran",
      "geri alinan oran",
      "geri alınan oran",
    ]) ||
    headers[7] ||
    "";

  const sonFiyatKolonu =
    kolonBul(headers, ["son fiyat", "fiyat", "son kapanis", "son kapanış"]) ||
    headers[8] ||
    "";

  const alisOrtFiyatKolonu =
    kolonBul(headers, [
      "alis ort fiyat",
      "alış ort fiyat",
      "ortalama fiyat",
      "alis ort. fiyat",
    ]) ||
    headers[9] ||
    "";

  const sonIslemTarihiKolonu =
    kolonBul(headers, [
      "son islem tarihi",
      "son işlem tarihi",
      "islem tarihi",
      "işlem tarihi",
    ]) ||
    headers[10] ||
    "";

  return rows
    .map((row) => ({
      sembol: metinCevir(row[sembolKolonu]),
      ykkTarihi: metinCevir(row[ykkTarihiKolonu]),
      geriAlinanAdet: sayiCevir(row[geriAlinanAdetKolonu]),
      alinacakAdet: sayiCevir(row[alinacakAdetKolonu]),
      ayrilanFon: sayiCevir(row[ayrilanFonKolonu]),
      geriAlinanHacim: sayiCevir(row[geriAlinanHacimKolonu]),
      alinacakOran: sayiCevir(row[alinacakOranKolonu]),
      alinanOran: sayiCevir(row[alinanOranKolonu]),
      sonFiyat: sayiCevir(row[sonFiyatKolonu]),
      alisOrtFiyat: sayiCevir(row[alisOrtFiyatKolonu]),
      sonIslemTarihi: metinCevir(row[sonIslemTarihiKolonu]),
    }))
    .filter((item) => item.sembol);
}

const columns = [
  {
    key: "sembol",
    label: "Sembol",
    align: "left" as const,
    width: "min-w-[140px]",
  },
  {
    key: "ykkTarihi",
    label: "YKK Tarihi",
    align: "left" as const,
    width: "min-w-[160px]",
  },
  {
    key: "geriAlinanAdet",
    label: "Geri Alınan Adet",
    align: "right" as const,
    width: "min-w-[170px]",
  },
  {
    key: "alinacakAdet",
    label: "Alınacak Adet",
    align: "right" as const,
    width: "min-w-[160px]",
  },
  {
    key: "ayrilanFon",
    label: "Ayrılan Fon",
    align: "right" as const,
    width: "min-w-[170px]",
  },
  {
    key: "geriAlinanHacim",
    label: "Geri Alınan Hacim",
    align: "right" as const,
    width: "min-w-[180px]",
  },
  {
    key: "alinacakOran",
    label: "Alınacak Oran",
    align: "right" as const,
    width: "min-w-[150px]",
  },
  {
    key: "alinanOran",
    label: "Alınan Oran",
    align: "right" as const,
    width: "min-w-[150px]",
  },
  {
    key: "sonFiyat",
    label: "Son Fiyat",
    align: "right" as const,
    width: "min-w-[130px]",
  },
  {
    key: "alisOrtFiyat",
    label: "Alış Ort. Fiyat",
    align: "right" as const,
    width: "min-w-[150px]",
  },
  {
    key: "sonIslemTarihi",
    label: "Son İşlem Tarihi",
    align: "left" as const,
    width: "min-w-[170px]",
  },
];

export default function GeriAlimProgramlariPage() {
  const geriAlimVerileri = verileriOku();
  const guncellemeTarihi = geriAlimData.guncellemeTarihi || "-";

  const headerScrollId = "geri-alim-header-scroll";
  const headerWidthId = "geri-alim-header-width";
  const bodyScrollId = "geri-alim-body-scroll";
  const bodyWidthId = "geri-alim-body-width";
  const bottomScrollId = "geri-alim-bottom-scroll";
  const bottomContentId = "geri-alim-bottom-content";

  return (
    <main className="min-h-screen bg-white px-4 py-6 pb-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
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

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Geri Alım Programları
        </h1>

        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Şirketlerin Geri Alım Programları
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white">
          <div className="sticky top-0 z-30 rounded-t-2xl border-b border-zinc-200 bg-white">
            <div
              id={headerScrollId}
              className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div id={headerWidthId} className="min-w-max">
                <table className="w-full min-w-[1500px] border-collapse text-sm">
                  <thead className="bg-zinc-100 text-zinc-800">
                    <tr>
                      {columns.map((column, index) => (
                        <th
                          key={column.key}
                          className={`${column.width} px-4 py-4 font-semibold whitespace-nowrap ${
                            column.align === "right" ? "text-right" : "text-left"
                          } ${
                            index === 0
                              ? "sticky left-0 z-40 bg-zinc-100 shadow-[8px_0_12px_-12px_rgba(0,0,0,0.25)]"
                              : ""
                          }`}
                        >
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>

          <div id={bodyScrollId} className="overflow-x-auto rounded-b-2xl">
            <div id={bodyWidthId} className="min-w-max">
              <table className="w-full min-w-[1500px] border-collapse text-sm">
                <tbody>
                  {geriAlimVerileri.length > 0 ? (
                    geriAlimVerileri.map((item, index) => {
                      const satirArkaPlan =
                        index % 2 === 0 ? "bg-white" : "bg-sky-50/60";
                      const stickyArkaPlan =
                        index % 2 === 0 ? "bg-white" : "bg-sky-50/60";

                      return (
                        <tr
                          key={`${item.sembol}-${item.ykkTarihi}-${index}`}
                          className={satirArkaPlan}
                        >
                          <td
                            className={`min-w-[140px] px-4 py-3 font-semibold text-zinc-900 whitespace-nowrap sticky left-0 z-10 ${stickyArkaPlan} shadow-[8px_0_12px_-12px_rgba(0,0,0,0.25)]`}
                          >
                            {item.sembol}
                          </td>
                          <td className="min-w-[160px] px-4 py-3 text-zinc-700 whitespace-nowrap">
                            {item.ykkTarihi || "-"}
                          </td>
                          <td className="min-w-[170px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatNumber(item.geriAlinanAdet, 0)}
                          </td>
                          <td className="min-w-[160px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatNumber(item.alinacakAdet, 0)}
                          </td>
                          <td className="min-w-[170px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatNumber(item.ayrilanFon, 0)}
                          </td>
                          <td className="min-w-[180px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatNumber(item.geriAlinanHacim, 0)}
                          </td>
                          <td className="min-w-[150px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatPercent(item.alinacakOran)}
                          </td>
                          <td className="min-w-[150px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatPercent(item.alinanOran)}
                          </td>
                          <td className="min-w-[130px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatPrice(item.sonFiyat)}
                          </td>
                          <td className="min-w-[150px] px-4 py-3 text-right text-zinc-700 whitespace-nowrap">
                            {formatPrice(item.alisOrtFiyat)}
                          </td>
                          <td className="min-w-[170px] px-4 py-3 text-zinc-700 whitespace-nowrap">
                            {item.sonIslemTarihi || "-"}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan={11}
                        className="px-4 py-8 text-center text-sm text-zinc-500"
                      >
                        Veri bulunamadı.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Geri Alım Programları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Geri alım programları sayfası, Borsa İstanbul’da işlem gören
            şirketlerin pay geri alım kararlarını ve uygulama süreçlerini takip
            etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada şirketlerin
            geri alınan pay adetleri, ayrılan fon tutarları, hedef oranları ve son
            işlem tarihleri gibi önemli verileri toplu şekilde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse geri alım programları, şirketlerin kendi paylarını piyasadan
            toplaması anlamına gelir ve çoğu zaman yatırımcılar tarafından olumlu
            bir sinyal olarak değerlendirilir. Geri alım kararları, şirketin kendi
            hisselerini ucuz bulduğuna dair algı oluşturabilir ve piyasa güveni
            açısından dikkat çekici olabilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Bu sayfadaki veriler sayesinde hangi şirketlerin aktif geri alım
            programı yürüttüğünü, geri alım oranlarının ne seviyede olduğunu ve
            ayrılan fon büyüklüklerini detaylı şekilde karşılaştırabilirsiniz.
            Özellikle sermaye yapısı, piyasa değeri ve hisse performansı açısından
            geri alım programları yatırımcılar için önemli bir takip alanıdır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel geri alım programları, şirket pay geri alım verileri, ayrılan
            fon tutarları, alınan oranlar ve detaylı borsa şirket analizleri için
            bu sayfayı düzenli olarak takip edebilirsiniz.
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

      <Script id="geri-alim-scroll-sync" strategy="afterInteractive">
        {`
          (function () {
            const header = document.getElementById("${headerScrollId}");
            const headerWidth = document.getElementById("${headerWidthId}");
            const body = document.getElementById("${bodyScrollId}");
            const bodyWidth = document.getElementById("${bodyWidthId}");
            const bottom = document.getElementById("${bottomScrollId}");
            const bottomContent = document.getElementById("${bottomContentId}");

            if (!header || !headerWidth || !body || !bodyWidth || !bottom || !bottomContent) return;

            let source = "";

            function syncWidths() {
              const width = Math.max(headerWidth.scrollWidth, bodyWidth.scrollWidth);
              bottomContent.style.width = width + "px";
              header.scrollLeft = body.scrollLeft;
              bottom.scrollLeft = body.scrollLeft;
            }

            header.addEventListener("scroll", function () {
              if (source === "body" || source === "bottom") {
                source = "";
                return;
              }
              source = "header";
              body.scrollLeft = header.scrollLeft;
              bottom.scrollLeft = header.scrollLeft;
            }, { passive: true });

            body.addEventListener("scroll", function () {
              if (source === "header" || source === "bottom") {
                source = "";
                return;
              }
              source = "body";
              header.scrollLeft = body.scrollLeft;
              bottom.scrollLeft = body.scrollLeft;
            }, { passive: true });

            bottom.addEventListener("scroll", function () {
              if (source === "header" || source === "body") {
                source = "";
                return;
              }
              source = "bottom";
              header.scrollLeft = bottom.scrollLeft;
              body.scrollLeft = bottom.scrollLeft;
            }, { passive: true });

            syncWidths();

            if (typeof ResizeObserver !== "undefined") {
              const observer = new ResizeObserver(syncWidths);
              observer.observe(headerWidth);
              observer.observe(bodyWidth);
            }

            window.addEventListener("resize", syncWidths);
          })();
        `}
      </Script>
    </main>
  );
}
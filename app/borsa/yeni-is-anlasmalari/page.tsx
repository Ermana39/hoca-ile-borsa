import Link from "next/link";
import Script from "next/script";
import yeniIsData from "./data/yeni-is-anlasmalari.json";

export const metadata = {
  title: "Yeni İş Anlaşmaları | Hoca İle Borsa",
  description:
    "Borsa İstanbul şirketlerinin yeni iş anlaşmalarını, sözleşme tutarlarını ve yıllık satışlara oranlarını takip edin.",
};

export const revalidate = 3600;

type YeniIsSatiri = {
  sembol: string;
  tarih: string;
  tutar: number | null;
  paraBirimi: string;
  bilanco: string;
  yillikSatislar: number | null;
  oran: number | null;
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

function formatOran(deger: number | null) {
  if (deger === null || Number.isNaN(deger)) return "-";

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(deger);
}

function kolonBul(headers: string[], adaylar: string[]) {
  return (
    headers.find((header) => {
      const h = normalizeText(header);
      return adaylar.some((aday) => h.includes(normalizeText(aday)));
    }) || ""
  );
}

function verileriOku(): YeniIsSatiri[] {
  const rows = (yeniIsData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const headers =
    Array.isArray(yeniIsData.columns) && yeniIsData.columns.length > 0
      ? yeniIsData.columns
      : Object.keys(rows[0] || {});

  const sembolKolonu =
    kolonBul(headers, ["sembol", "kod", "hisse", "ticker", "symbol"]) ||
    headers[0];

  const tarihKolonu =
    kolonBul(headers, ["tarih", "is iliskisi tarihi", "iş ilişkisi tarihi"]) ||
    headers[1] ||
    "";

  const tutarKolonu =
    kolonBul(headers, [
      "yeni is iliskisi tutari",
      "yeni iş ilişkisi tutarı",
      "tutar",
      "is iliskisi tutari",
    ]) ||
    headers[2] ||
    "";

  const paraBirimiKolonu =
    kolonBul(headers, ["para birimi", "doviz", "döviz", "pb"]) ||
    headers[3] ||
    "";

  const bilancoKolonu =
    kolonBul(headers, [
      "bilanco donemi",
      "bilanço dönemi",
      "bilanco",
      "bilanço",
    ]) ||
    headers[4] ||
    "";

  const yillikSatislarKolonu =
    kolonBul(headers, [
      "yillik satislar",
      "yıllık satışlar",
      "satislar",
      "satışlar",
    ]) ||
    headers[5] ||
    "";

  const oranKolonu =
    kolonBul(headers, [
      "yeni is iliskisi / yillik satislar",
      "yeni iş ilişkisi / yıllık satışlar",
      "oran",
    ]) ||
    headers[6] ||
    "";

  return rows
    .map((row) => ({
      sembol: metinCevir(row[sembolKolonu]),
      tarih: metinCevir(row[tarihKolonu]),
      tutar: sayiCevir(row[tutarKolonu]),
      paraBirimi: metinCevir(row[paraBirimiKolonu]),
      bilanco: metinCevir(row[bilancoKolonu]),
      yillikSatislar: sayiCevir(row[yillikSatislarKolonu]),
      oran: sayiCevir(row[oranKolonu]),
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
    key: "tarih",
    label: "Tarih",
    align: "left" as const,
    width: "min-w-[150px]",
  },
  {
    key: "tutar",
    label: "Yeni İş İlişkisi Tutarı",
    align: "right" as const,
    width: "min-w-[220px]",
  },
  {
    key: "paraBirimi",
    label: "Para Birimi",
    align: "left" as const,
    width: "min-w-[140px]",
  },
  {
    key: "bilanco",
    label: "Bilanço Dönemi",
    align: "left" as const,
    width: "min-w-[170px]",
  },
  {
    key: "yillikSatislar",
    label: "Yıllık Satışlar",
    align: "right" as const,
    width: "min-w-[170px]",
  },
  {
    key: "oran",
    label: "Yeni İş İlişkisi / Yıllık Satışlar",
    align: "right" as const,
    width: "min-w-[250px]",
  },
];

export default function YeniIsAnlasmalariPage() {
  const satirlar = verileriOku();
  const guncellemeTarihi = yeniIsData.guncellemeTarihi || "-";

  const headerScrollId = "yeni-is-header-scroll";
  const headerWidthId = "yeni-is-header-width";
  const bodyScrollId = "yeni-is-body-scroll";
  const bodyWidthId = "yeni-is-body-width";

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
            href="/borsa"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Yeni İş Anlaşmaları
        </h1>

        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Yeni İş Anlaşması Yapan Şirketler
        </p>

        <div className="mb-8 text-sm font-semibold text-zinc-700">
          Güncelleme Tarihi: {guncellemeTarihi}
        </div>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="rounded-xl border border-zinc-200 bg-white">
            <div className="sticky top-0 z-30 rounded-t-xl border-b border-zinc-200 bg-white">
              <div
                id={headerScrollId}
                className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div id={headerWidthId} className="min-w-max">
                  <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-zinc-100 text-zinc-700">
                      <tr>
                        {columns.map((column) => (
                          <th
                            key={column.key}
                            className={`${column.width} px-4 py-3 ${
                              column.align === "right" ? "text-right" : "text-left"
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

            <div id={bodyScrollId} className="overflow-x-auto rounded-b-xl">
              <div id={bodyWidthId} className="min-w-max">
                <table className="min-w-full border-collapse bg-white text-sm">
                  <tbody>
                    {satirlar.length > 0 ? (
                      satirlar.map((item, index) => (
                        <tr
                          key={`${item.sembol}-${item.tarih}-${index}`}
                          className={
                            index % 2 === 0
                              ? "border-t border-zinc-100 bg-white"
                              : "border-t border-zinc-100 bg-sky-50/60"
                          }
                        >
                          <td className="min-w-[140px] px-4 py-3 font-semibold text-zinc-900">
                            {item.sembol}
                          </td>
                          <td className="min-w-[150px] px-4 py-3 text-zinc-700">
                            {item.tarih || "-"}
                          </td>
                          <td className="min-w-[220px] px-4 py-3 text-right font-semibold text-zinc-900">
                            {formatNumber(item.tutar, 0)}
                          </td>
                          <td className="min-w-[140px] px-4 py-3 text-zinc-700">
                            {item.paraBirimi || "-"}
                          </td>
                          <td className="min-w-[170px] px-4 py-3 text-zinc-700">
                            {item.bilanco || "-"}
                          </td>
                          <td className="min-w-[170px] px-4 py-3 text-right text-zinc-700">
                            {formatNumber(item.yillikSatislar, 0)}
                          </td>
                          <td className="min-w-[250px] px-4 py-3 text-right text-zinc-700">
                            {formatOran(item.oran)}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={7}
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
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Yeni İş Anlaşmaları Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Yeni iş anlaşmaları sayfası, Borsa İstanbul’da işlem gören şirketlerin
            duyurduğu yeni sözleşmeleri, iş ilişkilerini ve ticari anlaşmaları
            takip etmek isteyen yatırımcılar için hazırlanmıştır. Bu sayfada
            şirketlerin açıkladığı yeni iş tutarları, bilanço dönemleri, yıllık
            satışlara oranları ve anlaşma tarihleri detaylı şekilde incelenebilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Şirketlerin yaptığı yeni iş anlaşmaları, gelecekteki gelir beklentileri
            açısından yatırımcılar tarafından yakından takip edilir. Özellikle büyük
            tutarlı sözleşmeler, ihracat bağlantıları, kamu ihaleleri ve uzun vadeli
            projeler şirket değerlemeleri üzerinde etkili olabilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Bu sayfadaki veriler sayesinde hangi şirketlerin yeni iş anlaşması
            açıkladığını, anlaşma büyüklüğünü ve yıllık satışlara etkisini kolayca
            karşılaştırabilirsiniz. Böylece büyüme potansiyeli taşıyan şirketleri
            daha yakından izlemek mümkün hale gelir.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel yeni iş anlaşmaları, şirket KAP bildirimleri, sözleşme tutarları,
            gelir etkisi analizleri ve borsa şirket haberleri için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>

      <Script id="yeni-is-header-scroll-sync" strategy="afterInteractive">
        {`
          (function () {
            const header = document.getElementById("${headerScrollId}");
            const body = document.getElementById("${bodyScrollId}");
            const headerWidth = document.getElementById("${headerWidthId}");
            const bodyWidth = document.getElementById("${bodyWidthId}");

            if (!header || !body || !headerWidth || !bodyWidth) return;

            let source = "";

            function syncWidths() {
              const width = Math.max(headerWidth.scrollWidth, bodyWidth.scrollWidth);
              headerWidth.style.width = width + "px";
              bodyWidth.style.width = width + "px";
              header.scrollLeft = body.scrollLeft;
            }

            header.addEventListener(
              "scroll",
              function () {
                if (source === "body") {
                  source = "";
                  return;
                }
                source = "header";
                body.scrollLeft = header.scrollLeft;
              },
              { passive: true }
            );

            body.addEventListener(
              "scroll",
              function () {
                if (source === "header") {
                  source = "";
                  return;
                }
                source = "body";
                header.scrollLeft = body.scrollLeft;
              },
              { passive: true }
            );

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
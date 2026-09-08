import type { Metadata } from "next";
import AdsenseResponsiveUnit from "@/components/AdsenseResponsiveUnit";
import { FundLogo } from "@/components/MarketLogo";
import Link from "@/components/NoPrefetchLink";
import tahminVerisi from "./_data/fon-acilis-tahminleri.json";

const siteUrl = "https://www.hocaileborsa.com";
const canonical = `${siteUrl}/fonlar/etki-analizi`;
const title = "Popüler Fonların Açılış Tahminleri";

const fonSirasi = ["TLY", "THF", "TMV", "DOH", "KHA", "DFI"] as const;
type FonKodu = (typeof fonSirasi)[number];

type TahminKaydi = {
  tahmin: number;
  gerceklesen: number | null;
};

type TahminVerisi = {
  kaynakTarihi: string;
  tahminTarihi: string;
  fonlar: Record<FonKodu, TahminKaydi>;
};

const veri = tahminVerisi as TahminVerisi;
const tahminTarihiUzun = tarihYazUzun(veri.tahminTarihi);
const seoTitle = "Fon Açılış Tahminleri: TLY, THF, TMV, DOH, KHA ve DFI";
const description = `${tahminTarihiUzun} için TLY, THF, TMV, DOH, KHA ve DFI fon açılış tahminlerini açıklanan gerçek getirilerle karşılaştırın. Günlük güncellenen tablo.`;

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: seoTitle,
    description,
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description,
  },
};

function tarihYaz(isoTarih: string) {
  const [yil, ay, gun] = isoTarih.split("-");
  return `${gun}.${ay}.${yil}`;
}

function tarihYazUzun(isoTarih: string) {
  const [yil, ay, gun] = isoTarih.split("-").map(Number);
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(yil, ay - 1, gun)));
}

function yuzdeYaz(deger: number) {
  const isaret = deger > 0 ? "+" : deger < 0 ? "-" : "";
  const sayi = new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(deger));
  return `${isaret}%${sayi}`;
}

function degerRengi(deger: number | null) {
  if (deger === null) return "text-slate-400";
  if (deger > 0) return "text-emerald-700";
  if (deger < 0) return "text-red-700";
  return "text-slate-700";
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: seoTitle,
    headline: title,
    description,
    inLanguage: "tr-TR",
    dateModified: veri.kaynakTarihi,
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${canonical}#dataset` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fonlar",
        item: `${siteUrl}/fonlar`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fon Açılış Tahminleri",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${canonical}#dataset`,
    name: `${tahminTarihiUzun} Popüler Fon Açılış Tahminleri`,
    alternateName: [
      "Günlük fon tahminleri",
      "TLY THF TMV DOH KHA DFI fon tahminleri",
    ],
    description,
    url: canonical,
    inLanguage: "tr-TR",
    dateModified: veri.kaynakTarihi,
    temporalCoverage: `${veri.kaynakTarihi}/${veri.tahminTarihi}`,
    creator: { "@id": `${siteUrl}/#organization` },
    variableMeasured: ["Fon kodu", "Günlük tahmin", "Gerçekleşen fon getirisi"],
    hasPart: fonSirasi.map((kod) => ({
      "@type": "Dataset",
      name: `${kod} fonunun ${tahminTarihiUzun} açılış tahmini`,
      url: `${siteUrl}/fonlar/${kod.toLowerCase()}`,
    })),
  },
];

export default function FonEtkiAnaliziPage() {
  const tahminTarihi = tarihYaz(veri.tahminTarihi);

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-700">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/fonlar" prefetch={false} className="transition hover:text-blue-700">
            Fonlar
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Açılış Tahminleri</span>
        </nav>

        <header className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-700">Günlük fon takibi</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-950 md:text-4xl">
            Popüler Fonların Açılış Tahminleri
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {tahminTarihiUzun} için TLY, THF, TMV, DOH, KHA ve DFI fon
            tahminlerini tek tabloda inceleyin. Tahmin sütunu bir sonraki işlem
            gününe yönelik hesaplanan değişimi, gerçekleşen sütunu ise açıklanan
            günlük fon getirisini gösterir.
          </p>
          <p className="mt-3 text-xs font-medium text-slate-500 md:text-sm">
            Son veri tarihi: {" "}
            <time dateTime={veri.kaynakTarihi}>{tarihYazUzun(veri.kaynakTarihi)}</time>
          </p>
        </header>

        <section className="mt-8" aria-labelledby="fon-tahmin-tablosu">
          <h2 id="fon-tahmin-tablosu" className="sr-only">
            {tahminTarihi} fon açılış tahminleri
          </h2>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-3 py-3 text-left font-semibold sm:px-5">Fon</th>
                  <th className="px-3 py-3 text-right font-semibold sm:px-5">
                    {tahminTarihi} Tahmin
                  </th>
                  <th className="px-3 py-3 text-right font-semibold sm:px-5">
                    Gerçekleşen
                  </th>
                </tr>
              </thead>
              <tbody>
                {fonSirasi.map((kod, index) => {
                  const kayit = veri.fonlar[kod];
                  return (
                    <tr
                      key={kod}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border-t border-slate-200 px-3 py-4 sm:px-5">
                        <Link
                          href={`/fonlar/${kod.toLowerCase()}`}
                          prefetch={false}
                          className="inline-flex items-center gap-2.5 font-bold text-blue-800 transition hover:text-blue-600 hover:underline"
                          aria-label={`${kod} fon sayfasını aç`}
                        >
                          <FundLogo fundCode={kod} size="sm" />
                          {kod}
                        </Link>
                      </td>
                      <td
                        className={`border-t border-slate-200 px-3 py-4 text-right font-bold tabular-nums sm:px-5 ${degerRengi(kayit.tahmin)}`}
                      >
                        {yuzdeYaz(kayit.tahmin)}
                      </td>
                      <td
                        className={`border-t border-slate-200 px-3 py-4 text-right font-bold tabular-nums sm:px-5 ${degerRengi(kayit.gerceklesen)}`}
                      >
                        {kayit.gerceklesen === null ? "—" : yuzdeYaz(kayit.gerceklesen)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs leading-6 text-slate-500 md:text-sm">
            Tahminler {tarihYaz(veri.kaynakTarihi)} kapanış verileriyle hesaplanmıştır.
            Gerçekleşen değerler fon fiyatları açıklandığında otomatik olarak eklenir.
          </p>

          <AdsenseResponsiveUnit
            className="mt-6"
            slot={
              process.env.NEXT_PUBLIC_ADSENSE_FUND_EFFECT_TABLE_SLOT ??
              "6755240879"
            }
          />
        </section>

        <section className="mt-10 border-t border-slate-200 pt-7">
          <h2 className="text-xl font-bold text-slate-950 md:text-2xl">
            Fon açılış tahmini nedir?
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              Fon açılış tahmini, fonun henüz açıklanmamış bir sonraki fiyatındaki
              günlük değişime yönelik hesaplanan yaklaşık değerdir. Borsada işlem
              gören bir hissenin anlık açılış fiyatı anlamına gelmez.
            </p>
            <p>
              Tablodaki artı değerler tahmini yükselişi, eksi değerler tahmini
              düşüşü ifade eder. “Gerçekleşen” alanındaki değer, ilgili güne ait fon
              fiyatı açıklandıktan sonra eklenir; açıklama yapılmadıysa çizgi olarak
              görünür.
            </p>
          </div>
        </section>

        <section className="mt-9 border-t border-slate-200 pt-7">
          <h2 className="text-xl font-bold text-slate-950 md:text-2xl">
            Günlük fon tahminleri ne zaman güncellenir?
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              Yeni gün sonu verisi işlendiğinde TLY, THF, TMV, DOH, KHA ve DFI için
              tahminler bir sonraki Borsa İstanbul işlem gününe geçirilir. Cuma
              akşamı hazırlanan tablo normal koşullarda pazartesi gününü gösterir;
              işlem yapılmayan resmî tatiller de tarih hesabında atlanır.
            </p>
            <p>
              Ertesi gün fon fiyatları açıklandığında tahmin değeri korunur ve aynı
              satırdaki gerçekleşen getiri tamamlanır. Böylece tahmin ile sonuç
              doğrudan karşılaştırılabilir. Fonların fiyat, dönemsel getiri ve diğer
              güncel bilgileri için tablodaki fon kodlarına tıklayabilirsiniz.
            </p>
          </div>
        </section>

        <section className="mt-9 border-t border-slate-200 pt-7">
          <h2 className="text-xl font-bold text-slate-950 md:text-2xl">
            Fon tahminleri hakkında kısa cevaplar
          </h2>
          <dl className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            <div className="py-4">
              <dt className="font-bold text-slate-900">Bugünkü tahmin hangi güne aittir?</dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                Güncel tablo {tahminTarihiUzun} tarihine aittir. Sütun başlığındaki
                tarih, tahminin hedeflediği işlem gününü gösterir.
              </dd>
            </div>
            <div className="py-4">
              <dt className="font-bold text-slate-900">Gerçekleşen değer neden boş görünür?</dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                İlgili işlem gününün fon fiyatı henüz açıklanmadığında gerçekleşen
                alanı çizgi olarak kalır. Fiyat verisi işlendiğinde otomatik olarak
                doldurulur.
              </dd>
            </div>
            <div className="py-4">
              <dt className="font-bold text-slate-900">Tahmin kesin fon getirisi midir?</dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                Hayır. Tahmin yaklaşık bir günlük değişim göstergesidir. Kesin getiri,
                fonun resmî olarak açıklanan birim pay fiyatıyla belirlenir.
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            Daha geniş bir değerlendirme yapmak için {" "}
            <Link
              href="/fonlar/fon-karsilastirma"
              prefetch={false}
              className="font-semibold text-blue-700 hover:underline"
            >
              fon karşılaştırma aracını
            </Link>{" "}
            kullanabilir veya {" "}
            <Link
              href="/fonlar"
              prefetch={false}
              className="font-semibold text-blue-700 hover:underline"
            >
              güncel fon verilerine
            </Link>{" "}
            dönebilirsiniz.
          </p>
        </section>

        <p
          className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500 md:text-sm"
          data-nosnippet="true"
        >
          Hesaplamalar bilgilendirme amacı taşır ve yatırım danışmanlığı kapsamında
          değildir. Kesin değer için fonun resmî fiyat açıklaması esas alınmalıdır.
        </p>
      </div>
    </main>
  );
}

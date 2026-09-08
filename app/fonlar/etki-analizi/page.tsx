import type { Metadata } from "next";
import AdsenseResponsiveUnit from "@/components/AdsenseResponsiveUnit";
import { FundLogo } from "@/components/MarketLogo";
import Link from "@/components/NoPrefetchLink";
import tahminVerisi from "./_data/fon-acilis-tahminleri.json";

const siteUrl = "https://www.hocaileborsa.com";
const canonical = `${siteUrl}/fonlar/etki-analizi`;
const title = "Popüler Fonların Açılış Tahminleri";
const description =
  "TLY, THF, TMV, DOH, KHA ve DFI fonlarının günlük açılış tahminlerini açıklanan gerçek fon getirileriyle karşılaştırın.";

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

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

function tarihYaz(isoTarih: string) {
  const [yil, ay, gun] = isoTarih.split("-");
  return `${gun}.${ay}.${yil}`;
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": `${canonical}#dataset`,
  name: title,
  description,
  url: canonical,
  inLanguage: "tr-TR",
  dateModified: veri.kaynakTarihi,
  creator: { "@id": `${siteUrl}/#organization` },
  variableMeasured: ["Fon kodu", "Günlük tahmin", "Gerçekleşen fon getirisi"],
  hasPart: fonSirasi.map((kod) => ({
    "@type": "Dataset",
    name: `${kod} açılış tahmini`,
    url: `${siteUrl}/fonlar/${kod.toLowerCase()}`,
  })),
};

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
            Takip edilen altı fonun bir sonraki işlem günü için hesaplanan tahmini
            değişimi ile açıklanan gerçek getirisi aynı tabloda karşılaştırılır.
            Tahminler kesin fon getirisi değildir.
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

        <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500 md:text-sm">
          Hesaplamalar bilgilendirme amacı taşır ve yatırım danışmanlığı kapsamında
          değildir. Kesin değer için fonun resmî fiyat açıklaması esas alınmalıdır.
        </p>
      </div>
    </main>
  );
}

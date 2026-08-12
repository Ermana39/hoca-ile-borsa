import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import type { Metadata } from "next";
import { formasyonData } from "./data";

const siteUrl = "https://www.hocaileborsa.com";
const sayfaUrl = `${siteUrl}/borsa/formasyonlar/${formasyonData.slug}`;

export const metadata: Metadata = {
  title: `${formasyonData.kod} ${formasyonData.tur} | Günlük Grafik Teknik Analizi`,
  description: seoAciklamasi(`${formasyonData.kod} günlük grafikte ${formasyonData.tur} görünümüyle takip ediliyor. İlk direnç ${formasyonData.ilkDirenc}, hedef ${formasyonData.hedef}, bozulma seviyesi ${formasyonData.bozulma}.`, "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical: sayfaUrl,
  },
  openGraph: {
    title: `${formasyonData.kod} ${formasyonData.tur}`,
    description: formasyonData.ozet,
    url: sayfaUrl,
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${siteUrl}${formasyonData.gorsel}`,
        width: 1200,
        height: 675,
        alt: formasyonData.gorselAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${formasyonData.kod} ${formasyonData.tur}`,
    description: formasyonData.ozet,
    images: [`${siteUrl}${formasyonData.gorsel}`],
  },
};

const seviyeler = [
  {
    baslik: "İlk Direnç",
    deger: formasyonData.ilkDirenc,
    aciklama:
      "Formasyon sonrası fiyatın ilk etapta karşılaşabileceği direnç bölgesi olarak izlenebilir.",
  },
  {
    baslik: "Formasyon Hedefi",
    deger: formasyonData.hedef,
    aciklama:
      "Üçlü dip yapısının çalışmaya devam etmesi halinde teknik olarak takip edilebilecek hedef bölgedir.",
  },
  {
    baslik: "Bozulma Seviyesi",
    deger: formasyonData.bozulma,
    aciklama:
      "Bu seviyenin altında formasyon yapısı zayıflayabilir ve teknik görünüm yeniden değerlendirilmelidir.",
  },
];

export default function TrenjUcluDipFormasyonuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${formasyonData.kod} ${formasyonData.tur}`,
    description: formasyonData.ozet,
    image: `${siteUrl}${formasyonData.gorsel}`,
    author: {
      "@type": "Organization",
      name: "Hoca İle Borsa",
    },
    publisher: {
      "@type": "Organization",
      name: "Hoca İle Borsa",
    },
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    mainEntityOfPage: sayfaUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: formasyonData.seoSorular.map((item) => ({
      "@type": "Question",
      name: item.soru,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.cevap,
      },
    })),
  };

  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema]),
        }}
      />

      <article className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={formasyonData.gorsel}
            alt={formasyonData.gorselAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="p-5 sm:p-7 lg:p-9">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              Teknik Analiz
            </span>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              {formasyonData.durum}
            </span>

            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
              {formasyonData.periyot} Periyot
            </span>

            <span className="text-sm text-slate-500">{formasyonData.tarih}</span>
          </div>

          <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {formasyonData.kod} Günlük Grafikte {formasyonData.tur}
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
            {formasyonData.ozet}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {seviyeler.map((item) => (
              <div
                key={item.baslik}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-medium text-slate-500">
                  {item.baslik}
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-950">
                  {item.deger}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.aciklama}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-950">
                {formasyonData.kod} Formasyon Görünümü
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {formasyonData.anaYorum}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">
                Teknik Seviyeler Nasıl Okunmalı?
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {formasyonData.teknikYorum}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">
                Formasyonun Bozulma Seviyesi
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {formasyonData.riskYorumu}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">
                Olası Teknik Senaryolar
              </h2>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-900">
                    Pozitif Senaryo
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-emerald-900 sm:text-base">
                    {formasyonData.pozitifSenaryo}
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
                  <h3 className="font-bold text-rose-900">Negatif Senaryo</h3>
                  <p className="mt-2 text-sm leading-7 text-rose-900 sm:text-base">
                    {formasyonData.negatifSenaryo}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950">
                Genel Değerlendirme
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {formasyonData.sonuc}
              </p>
            </section>

            <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-bold text-slate-950">
                Sıkça Sorulan Sorular
              </h2>

              <div className="mt-4 space-y-4">
                {formasyonData.seoSorular.map((item) => (
                  <div
                    key={item.soru}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <h3 className="font-semibold text-slate-950">
                      {item.soru}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                      {item.cevap}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
              {formasyonData.yasalUyari}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

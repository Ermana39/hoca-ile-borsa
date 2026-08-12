import { seoAciklamasi } from "@/lib/seo-metadata";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import { getTumGunlukOzetler } from "@/lib/gunluk-ozet";

const SITE = "https://www.hocaileborsa.com";

export const metadata: Metadata = {
    title: "Günlük Borsa Özeti Arşivi",
  description:
    seoAciklamasi("BIST 100 kapanışı, en çok yükselen ve düşen hisseler, para girişi-çıkışı, kurum dağılımı ve ekonomik takvim içeren günlük borsa özetleri.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical: `${SITE}/borsa/gunluk-borsa-ozeti`,
  },
  openGraph: {
    title: "Günlük Borsa Özeti Arşivi",
    description:
      "Günlük borsa özetlerini tarih sırasına göre inceleyin; BIST kapanışı, para akışı, hacim ve kurum verilerini takip edin.",
    url: `${SITE}/borsa/gunluk-borsa-ozeti`,
    siteName: "Hoca İle Borsa",
    type: "website",
  },
};

function yuzdeSinifi(degisim: number) {
  if (degisim > 0) return "text-emerald-700 bg-emerald-50 border-emerald-200";
  if (degisim < 0) return "text-rose-700 bg-rose-50 border-rose-200";
  return "text-slate-700 bg-slate-50 border-slate-200";
}

export default function GunlukBorsaOzetiIndex() {
  const ozetler = getTumGunlukOzetler();
  const enGuncel = ozetler[0];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Günlük Borsa Özeti Arşivi",
    description:
      "BIST günlük kapanış özetleri, para girişi-çıkışı, yükselenler, düşenler ve kurum dağılımı arşivi.",
    url: `${SITE}/borsa/gunluk-borsa-ozeti`,
    hasPart: ozetler.slice(0, 20).map((ozet) => ({
      "@type": "Article",
      headline: ozet.baslik,
      datePublished: ozet.isoTarih,
      url: `${SITE}/borsa/gunluk-borsa-ozeti/${ozet.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/borsa"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            Borsa Analiz
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Günlük Borsa Özeti</span>
        </nav>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            BIST günlük arşiv
          </p>
          <div className="mt-2 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">
                Günlük Borsa Özeti
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                BIST kapanışı, günün yükselen ve düşen hisseleri, para
                girişi-çıkışı, hacim sıralaması, kurum dağılımı ve ekonomik
                takvim notlarını tarih bazında takip edin.
              </p>
            </div>

            {enGuncel && (
              <Link
                href={`/borsa/gunluk-borsa-ozeti/${enGuncel.slug}`}
                prefetch={false}
                className="inline-flex items-center justify-center rounded-xl border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                En güncel özeti aç
              </Link>
            )}
          </div>
        </section>

        {ozetler.length > 0 ? (
          <section className="grid gap-4">
            {ozetler.map((ozet) => (
              <Link
                key={ozet.slug}
                href={`/borsa/gunluk-borsa-ozeti/${ozet.slug}`}
                prefetch={false}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {ozet.tarihGosterim}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-950 transition group-hover:text-blue-700">
                      {ozet.baslik}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      BIST 100 kapanışı {ozet.bist.kapanis}, toplam hacim{" "}
                      {ozet.bist.toplamHacim}. Yükselenler, düşenler, para
                      akışı ve kurum verileri bu özette yer alır.
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">
                    <span
                      className={`rounded-full border px-3 py-1.5 text-sm font-bold ${yuzdeSinifi(
                        ozet.bist.degisimYuzde
                      )}`}
                    >
                      %{ozet.bist.degisimYuzde.toFixed(2)}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
                      {ozet.bist.kapanis}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Henüz günlük özet bulunmuyor
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Günlük borsa özetleri eklendiğinde bu sayfada listelenecek.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

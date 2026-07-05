import type { Metadata } from "next";
import Link from "next/link";
import { sozlukTerimleri, terimHref } from "@/data/sozluk";

const canonical = "https://www.hocaileborsa.com/sozluk";
const title = "Borsa Terimleri Sözlüğü | VBTS, Lot, Tavan Serisi ve Daha Fazlası";
const description =
  "Borsa İstanbul terimleri sözlüğü: VBTS, tavan serisi, lot, halka açıklık oranı, fiyat istikrarı, satmama taahhüdü, brüt takas ve daha fazlası — sade tanımlar ve yatırımcı için pratik notlar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  keywords: [
    "borsa terimleri",
    "borsa terimleri sözlüğü",
    "borsa sözlüğü",
    "bist terimleri",
    "vbts nedir",
  ],
  openGraph: { title, description, url: canonical, type: "website" },
};

export default function SozlukPage() {
  const terimler = [...sozlukTerimleri].sort((a, b) =>
    a.terim.localeCompare(b.terim, "tr")
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Borsa Terimleri Sözlüğü",
    description,
    url: canonical,
    hasDefinedTerm: terimler.map((t) => ({
      "@type": "DefinedTerm",
      name: t.terim,
      description: t.kisaTanim,
      url: `https://www.hocaileborsa.com${terimHref(t)}`,
    })),
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700">Borsa Sözlüğü</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
            Borsa Terimleri Sözlüğü
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Haberlerde, izahnamelerde ve KAP bildirimlerinde sık karşılaşılan
            borsa terimlerinin sade tanımları. Her terimde yatırımcı için
            pratik notlar ve ilgili rehber bağlantıları yer alır; kapsamlı
            konular ilgili rehber sayfasına yönlendirilir.
          </p>
        </header>

        <section className="grid gap-3 sm:grid-cols-2">
          {terimler.map((t) => (
            <Link
              key={t.slug}
              href={terimHref(t)}
              prefetch={false}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow"
            >
              <h2 className="text-base font-bold text-slate-900 transition group-hover:text-blue-700 md:text-lg">
                {t.terim}
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {t.kisaTanim}
              </p>
            </Link>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="mb-2 text-sm font-semibold text-zinc-900 md:text-base">
            Daha kapsamlı öğrenmek için:
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/rehberler"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
            >
              Tüm Rehberler <span aria-hidden>→</span>
            </Link>
            <Link
              href="/halka-arz/takvim"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
            >
              Halka Arz Takvimi <span aria-hidden>→</span>
            </Link>
            <Link
              href="/haberler"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 md:text-sm"
            >
              Güncel Haberler <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import HisseListesi from "@/components/HisseListesi";
import { getTumHisseler } from "@/lib/hisseler";

export const revalidate = 86400;

const siteUrl = "https://www.hocaileborsa.com";

export const metadata: Metadata = {
  title: "Hisse Künyeleri — BIST Şirketleri | Hoca İle Borsa",
  description:
    "Borsa İstanbul şirketlerinin künye sayfaları: şirket hakkında, ortaklık yapısı, iştirakler, borsa bilgileri, temettü geçmişi ve önemli KAP gelişmeleri.",
  alternates: { canonical: `${siteUrl}/hisseler` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/hisseler`,
    title: "Hisse Künyeleri — BIST Şirketleri | Hoca İle Borsa",
    description:
      "Borsa İstanbul şirketlerinin künye sayfaları: ortaklık yapısı, iştirakler, borsa bilgileri, temettü geçmişi ve KAP gelişmeleri.",
    images: [{ url: `${siteUrl}/banner.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisse Künyeleri — BIST Şirketleri | Hoca İle Borsa",
    description:
      "Borsa İstanbul şirketlerinin künye sayfaları: ortaklık yapısı, iştirakler, borsa bilgileri, temettü geçmişi ve KAP gelişmeleri.",
    images: [`${siteUrl}/banner.png`],
  },
};

export default function HisselerPage() {
  const hisseler = getTumHisseler();

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Hisseler</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Hisse Künyeleri
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Borsa İstanbul şirketlerinin künye sayfaları. Her hisse için şirket
            hakkında bilgiler, ortaklık yapısı, iştirakler, borsa bilgileri,
            temettü geçmişi ve önemli KAP gelişmelerini bulabilirsiniz. Aramak
            istediğiniz hissenin kodunu veya şirket adını yazın.
          </p>
        </header>

        <HisseListesi hisseler={hisseler} />

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Hisse Künyeleri Hakkında
          </h2>
          <p className="mb-4 leading-7 text-slate-700">
            Hisse künye sayfaları, Borsa İstanbul’da işlem gören şirketleri
            tanımak isteyen yatırımcılar için hazırlanmış kalıcı bilgi
            sayfalarıdır. Her künyede şirketin faaliyet alanları, ortaklık
            yapısı, iştirak ve bağlı ortaklıkları, yer aldığı endeksler ve
            kurumsal bilgileri yer alır.
          </p>
          <p className="leading-7 text-slate-700">
            Temettü geçmişi ve önemli KAP gelişmeleri bölümleri, ilgili
            takvim ve haber verilerinden otomatik olarak beslenir; böylece her
            şirketin güncel gelişmelerine tek sayfadan ulaşabilirsiniz. Bu
            sayfalar genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
          </p>
        </section>
      </div>
    </main>
  );
}

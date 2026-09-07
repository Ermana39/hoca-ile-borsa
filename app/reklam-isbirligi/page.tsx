import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import {
  SocialPlatformCards,
  sosyalMedyaHesaplari,
} from "@/components/SocialLinks";
import { serializeJsonLd } from "@/lib/json-ld";

const siteUrl = "https://www.hocaileborsa.com";
const pageUrl = `${siteUrl}/reklam-isbirligi`;
const destekEmail = "destekhocaileborsa@gmail.com";

const isBirligiFormatlari = [
  "YouTube Video Entegrasyonu",
  "Instagram Reels",
  "TikTok Video",
  "X Paylaşımı",
  "Web Sitesi Reklam / Sponsorlu İçerik",
];

export const metadata: Metadata = {
  title: "Hoca İle Borsa’yı Takip Edin | Reklam ve İş Birliği",
  description:
    "Hoca İle Borsa’nın YouTube, X, Instagram, TikTok ve Telegram hesaplarını takip edin. Reklam, sponsorluk ve marka iş birlikleri için iletişime geçin.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Hoca İle Borsa’yı Takip Edin | Reklam ve İş Birliği",
    description:
      "Hoca İle Borsa’nın sosyal medya hesaplarını takip edin; reklam, sponsorluk ve marka iş birlikleri için iletişime geçin.",
    images: [{ url: `${siteUrl}/banner.webp` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoca İle Borsa’yı Takip Edin | Reklam ve İş Birliği",
    description:
      "YouTube, X, Instagram, TikTok ve Telegram hesaplarımızı takip edin; reklam ve iş birliği için iletişime geçin.",
    images: [`${siteUrl}/banner.webp`],
  },
};

export default function ReklamIsBirligiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Hoca İle Borsa’yı Takip Edin | Reklam ve İş Birliği",
    description: metadata.description,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    about: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Hoca İle Borsa",
      url: siteUrl,
      email: destekEmail,
      sameAs: sosyalMedyaHesaplari.map((hesap) => hesap.href),
      contactPoint: {
        "@type": "ContactPoint",
        email: destekEmail,
        contactType: "advertising and partnerships",
        areaServed: "TR",
        availableLanguage: "tr",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="İçerik yolu"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-700">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Reklam ve İş Birliği</span>
        </nav>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
            Sosyal medya
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Hoca İle Borsa’yı Takip Edin
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Borsa İstanbul, yatırım fonları, halka arzlar ve piyasa gelişmelerini
            sosyal medya hesaplarımızdan da takip edebilirsiniz.
          </p>

          <div className="mt-7">
            <SocialPlatformCards />
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Marka iletişimi
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Reklam ve Marka İş Birliği
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
              <p>
                Hoca İle Borsa; finans, teknoloji, yatırım, eğitim, dijital
                hizmetler ve içerik üreticilerine yönelik ürün veya hizmet sunan
                markalarla reklam ve içerik iş birliklerine açıktır.
              </p>
              <p>
                YouTube video entegrasyonları, Instagram Reels, TikTok videoları,
                X paylaşımları ve uygun web sitesi reklam çalışmaları için bizimle
                iletişime geçebilirsiniz.
              </p>
            </div>

            <a
              href={`mailto:${destekEmail}`}
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              {destekEmail}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              İş birliği formatları
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Uygun Çalışma Alanları
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {isBirligiFormatlari.map((format) => (
                <div
                  key={format}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800"
                >
                  {format}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

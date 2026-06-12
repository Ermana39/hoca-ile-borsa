import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getYazar, yazarlar } from "@/app/data/yazarlar";
import { newsItems } from "@/app/data/news";

const siteUrl = "https://www.hocaileborsa.com";

export function generateStaticParams() {
  return yazarlar.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const yazar = getYazar(slug);
  if (!yazar) return {};

  return {
    title: `${yazar.isim} | Yazar Profili`,
    description: yazar.bioKisa,
    alternates: {
      canonical: `${siteUrl}/yazar/${yazar.slug}`,
    },
    openGraph: {
      type: "profile",
      url: `${siteUrl}/yazar/${yazar.slug}`,
      title: `${yazar.isim} | Hoca İle Borsa`,
      description: yazar.bioKisa,
      images: [{ url: `${siteUrl}${yazar.avatar}` }],
    },
  };
}

export default async function YazarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const yazar = getYazar(slug);
  if (!yazar) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-06-12",
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/yazar/${yazar.slug}#person`,
      name: yazar.isim,
      url: `${siteUrl}/yazar/${yazar.slug}`,
      image: `${siteUrl}${yazar.avatar}`,
      jobTitle: yazar.unvan,
      description:
        "2002'den bu yana Borsa İstanbul'u takip eden, halka arz, temettü ve finans piyasaları üzerine içerik üreten yazar.",
      knowsAbout: [
        "Borsa İstanbul",
        "Halka Arz",
        "Temettü",
        "Yatırım Fonları",
        "KAP Bildirimleri",
        "Mevduat ve Kredi Faizleri",
        "Teknik Analiz",
        "Temel Analiz",
      ],
      sameAs: [
        yazar.sosyal.x,
        yazar.sosyal.instagram,
        yazar.sosyal.telegram,
        yazar.sosyal.youtube,
        yazar.sosyal.youtubeGlobal,
      ],
      worksFor: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hoca İle Borsa",
        url: siteUrl,
      },
    },
  };

  const sonYazilar = [...newsItems]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 12);

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Yazarlar</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">{yazar.isim}</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="p-6 md:p-10">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <img
                src={yazar.avatar}
                alt={yazar.isim}
                width={88}
                height={88}
                className="h-22 w-22 rounded-full border border-slate-200 bg-slate-100 object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                  {yazar.isim}
                </h1>
                <p className="mt-1 text-sm font-semibold text-blue-700 md:text-base">
                  {yazar.unvan}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={yazar.sosyal.x}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                X (Twitter)
              </a>
              <a
                href={yazar.sosyal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Instagram
              </a>
              <a
                href={yazar.sosyal.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Telegram
              </a>
              <a
                href={yazar.sosyal.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                YouTube (Yurt İçi Piyasalar)
              </a>
              <a
                href={yazar.sosyal.youtubeGlobal}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                YouTube (Yurt Dışı Piyasalar)
              </a>
              <a
                href={`mailto:${yazar.email}`}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {yazar.email}
              </a>
            </div>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700 md:text-lg">
              {yazar.bioUzun.map((paragraf, i) => (
                <p key={i}>{paragraf}</p>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Odaklandığı Alanlar
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {yazar.odaklandigiAlanlar.map((alan) => (
                  <li
                    key={alan}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    {alan}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
              ⚠️ Yasal Uyarı: {yazar.isim} yatırım danışmanı değildir. Bu
              sitede yer alan tüm içerikler genel bilgilendirme amaçlıdır;
              yatırım danışmanlığı kapsamında değildir ve kişiye özel
              alım-satım önerisi niteliği taşımaz.
            </div>
          </div>
        </article>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-5 w-1 rounded-full bg-blue-600" />
              <h2 className="text-base font-bold tracking-tight text-slate-900 md:text-lg">
                {yazar.isim} İmzalı Son Yazılar
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 md:p-5">
            {sonYazilar.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                prefetch={false}
                className="group flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                    {item.title}
                  </h3>
                  <time
                    dateTime={item.publishedAt}
                    className="mt-1 block text-xs font-medium text-slate-400"
                  >
                    {new Date(item.publishedAt).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <span className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

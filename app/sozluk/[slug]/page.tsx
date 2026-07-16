import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ozgunTerimler,
  sozlukYayinTarihi,
  sozlukTerimleri,
  terimGetir,
  terimGuncellemeTarihi,
  terimHref,
} from "@/data/sozluk";

const siteUrl = "https://www.hocaileborsa.com";

// Yalnızca data/sozluk.ts'te tanımlı özgün terimler üretilir; bilinmeyen
// slug'lar 404 döner (catch-all/soft-404 oluşmasın).
export const dynamicParams = false;

export function generateStaticParams() {
  return ozgunTerimler().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const terim = terimGetir(slug);
  if (!terim) return {};
  const title = `${terim.terim} Nedir?`;
  return {
    title,
    description: terim.kisaTanim,
    authors: [{ name: "Erman Hoca", url: `${siteUrl}/yazar/erman-hoca` }],
    alternates: { canonical: `${siteUrl}/sozluk/${slug}` },
    openGraph: {
      title,
      description: terim.kisaTanim,
      url: `${siteUrl}/sozluk/${slug}`,
      type: "article",
    },
  };
}

export default async function SozlukTerimPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const terim = terimGetir(slug);
  if (!terim) notFound();

  const url = `${siteUrl}/sozluk/${slug}`;
  const dateModified = terimGuncellemeTarihi(terim);
  const iliskiler = (terim.iliskiliTerimler ?? [])
    .map((s) => sozlukTerimleri.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: terim.terim,
      description: terim.kisaTanim,
      image: `${siteUrl}/banner.webp`,
      url,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Borsa Terimleri Sözlüğü",
        url: `${siteUrl}/sozluk`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${terim.terim} Nedir?`,
      description: terim.kisaTanim,
      url,
      mainEntityOfPage: url,
      datePublished: terim.publishedAt ?? sozlukYayinTarihi,
      dateModified,
      author: {
        "@type": "Person",
        "@id": `${siteUrl}/yazar/erman-hoca#person`,
        name: "Erman Hoca",
        url: `${siteUrl}/yazar/erman-hoca`,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hoca İle Borsa",
        url: siteUrl,
      },
    },
  ];
  if (terim.sorular && terim.sorular.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: terim.sorular.map((s) => ({
        "@type": "Question",
        name: s.soru,
        acceptedAnswer: { "@type": "Answer", text: s.cevap },
      })),
    });
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/sozluk"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            Borsa Sözlüğü
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700">{terim.terim}</span>
        </nav>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
              {terim.terim} Nedir?
            </h1>
            <p className="mt-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium leading-7 text-blue-900 md:text-base">
              {terim.kisaTanim}
            </p>
          </header>

          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
            {terim.tanim?.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {terim.onemliNoktalar && terim.onemliNoktalar.length > 0 && (
            <section className="mt-6">
              <h2 className="mb-2 text-lg font-bold text-slate-900 md:text-xl">
                Öne Çıkan Noktalar
              </h2>
              <ul className="space-y-2">
                {terim.onemliNoktalar.map((n, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-7 text-slate-700 md:text-base"
                  >
                    <span aria-hidden className="mt-0.5 text-blue-600">
                      •
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {terim.sorular && terim.sorular.length > 0 && (
            <section className="mt-6">
              <h2 className="mb-3 text-lg font-bold text-slate-900 md:text-xl">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {terim.sorular.map((s) => (
                  <div key={s.soru}>
                    <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                      {s.soru}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600 md:text-base">
                      {s.cevap}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {(iliskiler.length > 0 ||
            (terim.iliskiliSayfalar && terim.iliskiliSayfalar.length > 0)) && (
            <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
              {iliskiler.length > 0 && (
                <>
                  <p className="mb-2 text-sm font-semibold text-slate-900">
                    İlişkili terimler:
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {iliskiler.map((t) => (
                      <Link
                        key={t.slug}
                        href={terimHref(t)}
                        prefetch={false}
                        className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 md:text-sm"
                      >
                        {t.terim}
                      </Link>
                    ))}
                  </div>
                </>
              )}
              {terim.iliskiliSayfalar && terim.iliskiliSayfalar.length > 0 && (
                <>
                  <p className="mb-2 text-sm font-semibold text-slate-900">
                    İlgili sayfalar:
                  </p>
                  <ul className="space-y-2">
                    {terim.iliskiliSayfalar.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          prefetch={false}
                          className="text-sm font-semibold text-blue-700 hover:underline md:text-base"
                        >
                          {s.title} →
                        </Link>
                        <p className="text-xs leading-6 text-slate-600 md:text-sm">
                          {s.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          )}

          <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-500 md:text-sm">
            Bu sayfa genel bilgilendirme amaçlıdır; yatırım tavsiyesi
            değildir. Kurallar ve eşik değerler Borsa İstanbul ve SPK
            düzenlemeleriyle değişebilir; güncel ve bağlayıcı bilgi için resmî
            kaynaklara başvurunuz.
          </p>

          <section className="mt-5 border-t border-slate-100 pt-4">
            <h2 className="text-sm font-semibold text-slate-800 md:text-base">
              Kaynak ve editoryal kontrol
            </h2>
            <p className="mt-2 text-xs leading-6 text-slate-500 md:text-sm">
              Tanımlar, resmî piyasa terminolojisi ve güncel düzenlemeler esas
              alınarak hazırlanır. Ayrıntılı doğrulama için{" "}
              <a
                href="https://www.borsaistanbul.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 hover:underline"
              >
                Borsa İstanbul
              </a>
              ,{" "}
              <a
                href="https://www.kap.org.tr/tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 hover:underline"
              >
                KAP
              </a>{" "}
              ve{" "}
              <Link
                href="/editoryal-ilkeler"
                className="font-medium text-blue-700 hover:underline"
              >
                editoryal ilkelerimizi
              </Link>{" "}
              inceleyebilirsiniz.
            </p>
          </section>
        </article>

        <div className="mt-6">
          <Link
            href="/sozluk"
            prefetch={false}
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            ← Tüm Borsa Terimleri
          </Link>
        </div>
      </div>
    </main>
  );
}

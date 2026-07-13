import Link from "next/link";
import type { Metadata } from "next";
import { getYazar } from "@/app/data/yazarlar";

const siteUrl = "https://www.hocaileborsa.com";

export const metadata: Metadata = {
  title: "Künye",
  description:
    "Hoca İle Borsa yayın bilgileri, sorumlu editör, iletişim kanalları, yayın ilkeleri ve resmi veri kaynakları.",
  alternates: { canonical: `${siteUrl}/kunye` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/kunye`,
    title: "Künye | Hoca İle Borsa",
    description:
      "Hoca İle Borsa yayın bilgileri, editör bilgisi, iletişim kanalları ve veri kaynakları.",
    images: [{ url: `${siteUrl}/banner.webp` }],
  },
};

export default function KunyePage() {
  const yazar = getYazar("erman-hoca");
  const url = `${siteUrl}/kunye`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: "Künye | Hoca İle Borsa",
    description:
      "Hoca İle Borsa yayın bilgileri, sorumlu editör, iletişim kanalları ve yayın ilkeleri.",
    inLanguage: "tr",
    isPartOf: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Hoca İle Borsa",
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      email: yazar?.email ?? "destekhocaileborsa@gmail.com",
      founder: yazar
        ? {
            "@type": "Person",
            "@id": `${siteUrl}/yazar/${yazar.slug}#person`,
            name: yazar.isim,
            url: `${siteUrl}/yazar/${yazar.slug}`,
          }
        : undefined,
    },
  };

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-zinc-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="font-medium text-zinc-700">Künye</span>
        </nav>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Künye</h1>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">
            Yayın Bilgileri
          </h2>
          <dl className="grid gap-4 text-sm leading-7 text-zinc-700 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-zinc-900">Yayın adı</dt>
              <dd>Hoca İle Borsa</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">Yayın türü</dt>
              <dd>Bağımsız finans içerik platformu</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">
                Kurucu ve sorumlu editör
              </dt>
              <dd>
                {yazar ? (
                  <Link
                    href={`/yazar/${yazar.slug}`}
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    {yazar.isim}
                  </Link>
                ) : (
                  "Erman Hoca"
                )}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">Merkez</dt>
              <dd>Kırklareli, Türkiye</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">E-posta</dt>
              <dd>
                <a
                  href="mailto:destekhocaileborsa@gmail.com"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  destekhocaileborsa@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">Web sitesi</dt>
              <dd>
                <a
                  href={siteUrl}
                  className="font-semibold text-blue-700 hover:underline"
                >
                  www.hocaileborsa.com
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">
            Yayın İlkeleri
          </h2>
          <ul className="space-y-3 text-sm leading-7 text-zinc-700">
            <li>
              Haber, tablo ve rehber içerikleri bilgilendirme amacıyla
              hazırlanır; yatırım danışmanlığı veya alım-satım tavsiyesi
              değildir.
            </li>
            <li>
              KAP, SPK, TCMB, TEFAS, şirket açıklamaları ve kamuya açık resmi
              duyurular temel kaynaklar arasında kullanılır.
            </li>
            <li>
              İçeriklerde hata veya eksik fark edilmesi halinde düzeltme
              talepleri iletişim kanallarından iletilebilir.
            </li>
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-zinc-900">
            İletişim ve Düzeltme Talepleri
          </h2>
          <p className="text-sm leading-7 text-zinc-700">
            Haber düzeltmeleri, veri güncelleme talepleri, reklam ve iş birliği
            başvuruları için iletişim sayfasını kullanabilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            İletişim sayfasına git
          </Link>
        </section>
      </div>
    </main>
  );
}

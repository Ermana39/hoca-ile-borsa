import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import { getYazar } from "@/app/data/yazarlar";

const siteUrl = "https://www.hocaileborsa.com";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Hoca İle Borsa; borsa, halka arz, temettü, fonlar ve faiz oranları üzerine içerik üreten bağımsız bir finans platformu. Kurucusu, yayın ilkeleri ve veri kaynakları hakkında bilgi.",
  alternates: { canonical: `${siteUrl}/hakkimizda` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/hakkimizda`,
    title: "Hakkımızda | Hoca İle Borsa",
    description:
      "Hoca İle Borsa; borsa, halka arz, temettü ve finans içerikleri üreten bağımsız bir platform. Kurucu, yayın ilkeleri ve veri kaynakları.",
    images: [{ url: `${siteUrl}/banner.webp` }],
  },
};

export default function HakkimizdaPage() {
  const yazar = getYazar("erman-hoca");
  const url = `${siteUrl}/hakkimizda`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#aboutpage`,
    url,
    name: "Hakkımızda | Hoca İle Borsa",
    description:
      "Hoca İle Borsa; borsa, halka arz, temettü, fonlar ve faiz oranları üzerine içerik üreten bağımsız bir finans platformudur.",
    inLanguage: "tr",
    isPartOf: { "@id": `${siteUrl}/#organization` },
    about: { "@id": `${siteUrl}/#organization` },
    ...(yazar
      ? {
          mainEntity: {
            "@type": "Person",
            "@id": `${siteUrl}/yazar/${yazar.slug}#person`,
            name: yazar.isim,
            jobTitle: yazar.unvan,
            url: `${siteUrl}/yazar/${yazar.slug}`,
          },
        }
      : {}),
  };

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          <span className="font-medium text-zinc-700">Hakkımızda</span>
        </nav>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Hakkımızda</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Hoca İle Borsa; borsa, halka arz, temettü, fonlar, faiz oranları ve
            piyasa verileri üzerine içerik üreten bağımsız bir finans içerik
            platformudur.
          </p>

          <p>
            Platformun amacı; yatırımcıların ve finansla ilgilenen kullanıcıların
            güncel verileri, temel piyasa başlıklarını ve öne çıkan içerikleri
            daha düzenli, hızlı ve anlaşılır şekilde takip edebilmesini
            sağlamaktır.
          </p>

          <p>
            Sitede yer alan içerikler; haber, eğitim, genel bilgilendirme, veri
            derleme, listeleme ve karşılaştırma amacı taşır. Yayınlanan içerikler
            yatırım danışmanlığı kapsamında değildir ve herhangi bir alım-satım
            tavsiyesi niteliği taşımaz.
          </p>
        </div>

        {/* KURUCU & EDİTÖR */}
        {yazar && (
          <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-zinc-900">
              Kurucu &amp; Editör
            </h2>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={yazar.avatar}
                alt={yazar.isim}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-20 w-20 rounded-full border border-zinc-200 bg-zinc-100 object-cover"
              />
              <div>
                <p className="text-lg font-bold text-zinc-900">{yazar.isim}</p>
                <p className="text-sm font-semibold text-blue-700">
                  {yazar.unvan}
                </p>
                {yazar.deneyimOzeti && (
                  <p className="mt-1 text-sm text-zinc-600">
                    {yazar.deneyimOzeti}
                  </p>
                )}
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-700">
              {yazar.bioKisa}
            </p>
            <Link
              href={`/yazar/${yazar.slug}`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {yazar.isim} — Yazar Profili
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        )}

        {/* YAYIN İLKELERİ */}
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">
            Yayın İlkelerimiz ve Veri Kaynaklarımız
          </h2>
          <ul className="space-y-3 text-sm leading-7 text-zinc-700">
            <li>
              <strong className="text-zinc-900">Resmî kaynaklar:</strong> Tablo,
              liste, oran, takvim ve analiz sayfaları; KAP (Kamuyu Aydınlatma
              Platformu), SPK, TCMB ve TEFAS gibi kamuya açık resmî kaynaklar ile
              site yönetiminin hazırladığı veri dosyaları üzerinden güncellenir.
            </li>
            <li>
              <strong className="text-zinc-900">Doğruluk ve güncellik:</strong>{" "}
              Verilerin doğru ve güncel tutulması hedeflenir; ancak zaman zaman
              gecikme, eksiklik veya teknik hata oluşabilir. Önemli kararlar
              öncesinde resmî kaynaklardan ek kontrol önerilir.
            </li>
            <li>
              <strong className="text-zinc-900">Editöryel bağımsızlık:</strong>{" "}
              Reklam, iş birliği ve sponsorlu içerikler editöryel içeriklerden
              ayrı değerlendirilir ve mümkün olduğunca açık şekilde ayrıştırılır.
            </li>
            <li>
              <strong className="text-zinc-900">Düzeltme politikası:</strong>{" "}
              İçeriklerde hata veya eksik fark edilirse kullanıcılar iletişim
              sayfası üzerinden bildirebilir; uygun görülen içerikler güncellenir.
            </li>
            <li>
              <strong className="text-zinc-900">
                Yatırım tavsiyesi değildir:
              </strong>{" "}
              İçerikler bilgilendirme ve eğitim amaçlıdır; 6362 sayılı Sermaye
              Piyasası Kanunu kapsamında yatırım danışmanlığı veya alım-satım
              tavsiyesi niteliği taşımaz.
            </li>
          </ul>
        </section>

        {/* İLETİŞİM */}
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-zinc-900">İletişim</h2>
          <p className="text-sm leading-7 text-zinc-700">
            Soru, öneri, düzeltme talebi veya iş birliği için bize
            ulaşabilirsiniz.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            {yazar?.email && (
              <a
                href={`mailto:${yazar.email}`}
                className="font-semibold text-blue-700 hover:underline"
              >
                {yazar.email}
              </a>
            )}
            <Link
              href="/iletisim"
              className="rounded-lg border border-zinc-300 bg-white px-4 py-2 font-semibold text-zinc-700 transition hover:bg-zinc-100"
            >
              İletişim Sayfası →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

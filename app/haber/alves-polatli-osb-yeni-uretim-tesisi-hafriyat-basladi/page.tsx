import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "ALVES Polatlı OSB Yeni Üretim Tesisi İçin Saha Hazırlıklarına Başladı",
  description:
    "Alves Kablo, Ankara Polatlı OSB’de yapılacak yeni üretim tesisi yatırımı kapsamında yaklaşık 1 milyon metreküplük hafriyat alımı için iş makinelerinin çalışmaya başladığını açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/alves-polatli-osb-yeni-uretim-tesisi-hafriyat-basladi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/alves-polatli-osb-yeni-uretim-tesisi-hafriyat-basladi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/alves-polatli-osb-yeni-uretim-tesisi-hafriyat-basladi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ALVES Polatlı OSB Yeni Üretim Tesisi İçin Saha Hazırlıklarına Başladı",
  description:
    "Alves Kablo, Ankara Polatlı OSB’de yapılacak yeni üretim tesisi yatırımı kapsamında yaklaşık 1 milyon metreküplük hafriyat alımı için iş makinelerinin çalışmaya başladığını açıkladı.",
  datePublished: "2026-06-24T09:00:00+03:00",
  dateModified: "2026-06-24T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/alves-polatli-osb-yeni-uretim-tesisi-hafriyat-basladi",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/alves-polatli-osb-yeni-uretim-tesisi-hafriyat-basladi.webp",
};

export default function AlvesPolatliOsbYatirimPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/alves-polatli-osb-yeni-uretim-tesisi-hafriyat-basladi.webp"
              alt="ALVES Polatlı OSB yeni üretim tesisi saha hazırlıkları"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                ALVES Polatlı OSB Yeni Üretim Tesisi İçin Saha Hazırlıklarına Başladı
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                24.06.2026 ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Alves Kablo Sanayi ve Ticaret A.Ş. (ALVES), Ankara ili Polatlı
                ilçesi Organize Sanayi Bölgesi’nde yapılacak yeni üretim tesisi
                yatırımına ilişkin saha hazırlık çalışmalarının başladığını
                KAP’a bildirdi.
              </p>

              <p>
                Şirket açıklamasına göre, yeni üretim tesisi yatırımı kapsamında
                yaklaşık 1.000.000 metreküplük hafriyat alımı için iş makineleri
                çalışmaya başladı. Bu adım, tesis inşaatına yönelik altyapı
                hazırlıklarının ilk aşaması olarak açıklandı.
              </p>

              <p>
                ALVES, söz konusu çalışmaların yatırım takvimi doğrultusunda
                sürdürüldüğünü belirtti. Şirket daha önce 9 Eylül 2025 ve 2
                Aralık 2025 tarihlerinde aynı yatırım konusuna ilişkin özel durum
                açıklamaları yapmıştı.
              </p>

              <p>
                Yeni üretim tesisi yatırımı, şirketin üretim kapasitesi ve uzun
                vadeli büyüme planları açısından önem taşıyor. Hafriyat
                çalışmalarının başlaması, yatırımın sahada fiilen ilerlediğini
                göstermesi bakımından yatırımcılar tarafından yakından takip
                edilecek bir gelişme olarak öne çıkıyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Hoca ile Borsa yorumu:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                ALVES haberinde öne çıkan nokta, yeni üretim tesisi yatırımının
                yalnızca planlama aşamasında kalmayıp saha hazırlığına geçmiş
                olmasıdır. Hafriyat çalışmalarının başlaması, yatırım sürecinde
                somut ilerleme anlamına gelir. Ancak yatırımın finansal etkisi,
                tesisin tamamlanma takvimi, devreye alma süreci ve üretim
                kapasitesine katkısı netleştikçe daha sağlıklı değerlendirilebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                ALVES, Polatlı OSB’de yapılacak yeni üretim tesisi yatırımı
                kapsamında yaklaşık 1 milyon metreküplük hafriyat alımı için iş
                makinelerinin çalışmaya başladığını açıkladı. Şirket, sürecin
                yatırım takvimi doğrultusunda sürdüğünü bildirdi.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1620130"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
              >
                KAP Bildirimi - 1620130
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              24.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/alves-polatli-osb-yeni-uretim-tesisi-hafriyat-basladi" />
</article>
</div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "Aksa Enerji’nin Manisa Depolamalı RES Projesine EPDK Onayı",
  description:
    "Aksa Enerji, Manisa’da 82,16 MWe kurulu güce ve 95 MWh depolama kapasitesine sahip Manisa Depolamalı RES Projesi için elektrik üretim lisansı başvurusunun EPDK tarafından onaylandığını açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/aksen-manisa-depolamali-res-epdk-lisans-onayi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/aksen-manisa-depolamali-res-epdk-lisans-onayi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/aksen-manisa-depolamali-res-epdk-lisans-onayi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Aksa Enerji’nin Manisa Depolamalı RES Projesine EPDK Onayı",
  description:
    "Aksa Enerji, Manisa’da 82,16 MWe kurulu güce ve 95 MWh depolama kapasitesine sahip Manisa Depolamalı RES Projesi için elektrik üretim lisansı başvurusunun EPDK tarafından onaylandığını açıkladı.",
  datePublished: "2026-06-24T09:00:00+03:00",
  dateModified: "2026-06-24T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/aksen-manisa-depolamali-res-epdk-lisans-onayi",
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
  image: "https://www.hocaileborsa.com/aksen-manisa-depolamali-res-epdk-lisans-onayi.webp",
};

export default function AksenManisaDepolamaliResPage() {
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
              src="/aksen-manisa-depolamali-res-epdk-lisans-onayi.webp"
              alt="Aksa Enerji Manisa depolamalı RES projesine EPDK lisans onayı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                Aksa Enerji’nin Manisa Depolamalı RES Projesine EPDK Onayı
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
                Aksa Enerji Üretim A.Ş. (AKSEN), Manisa’da yer alan Manisa
                Depolamalı Rüzgar Enerji Santrali Projesi için elektrik üretim
                lisansı başvurusunun Enerji Piyasası Düzenleme Kurumu tarafından
                onaylandığını KAP’a bildirdi.
              </p>

              <p>
                Şirket açıklamasına göre proje, 82,16 MWe ve 88 MWm kurulu güce
                sahip olacak. Projede ayrıca 95 MWh depolama kapasitesi
                bulunacak. Bu yönüyle açıklama, Aksa Enerji’nin yenilenebilir
                enerji ve depolamalı üretim tarafındaki büyüme planları açısından
                önemli bir gelişme olarak öne çıktı.
              </p>

              <p>
                Aksa Enerji, daha önce kamuoyuyla paylaştığı depolamalı güneş ve
                rüzgar enerji santrali yatırımları kapsamında Türkiye’de 10 ilde
                toplam 13 adet projeye sahip olduğunu belirtti. Bu projelerin
                toplam kurulu gücünün 891,41 MW seviyesinde olduğu açıklandı.
              </p>

              <p>
                Şirket ayrıca 50 MW kurulu güce sahip bir müstakil depolama
                tesisi projesinin de portföyde yer aldığını hatırlattı. İlk
                depolamalı GES yatırımının Gaziantep’te, Türkiye’nin ilk müstakil
                elektrik depolama tesisinin ise Şanlıurfa’da yakın zamanda ticari
                işletmeye başladığı belirtildi.
              </p>

              <p>
                Aksa Enerji, açıklamasında “Sürdürülebilir Yüksek Büyüme”
                stratejisi doğrultusunda üretim portföyünde kaynak çeşitliliğine
                önem verdiğini ve 2030 hedefleri kapsamında yenilenebilir enerji
                teknolojilerine yatırımlarını sürdürdüğünü ifade etti.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Hoca ile Borsa yorumu:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                AKSEN haberinde öne çıkan başlık, depolamalı yenilenebilir enerji
                portföyünün büyümesidir. Manisa Depolamalı RES projesi için EPDK
                lisans onayı alınması, projenin yatırım sürecinde önemli bir
                aşamanın geride bırakıldığını gösteriyor. Haber kısa vadede
                doğrudan gelir etkisi yaratmasa da şirketin 2030 yenilenebilir
                enerji hedefleri ve kaynak çeşitliliği açısından pozitif
                değerlendirilebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                Aksa Enerji’nin Manisa’da 82,16 MWe kurulu güce ve 95 MWh
                depolama kapasitesine sahip Manisa Depolamalı RES Projesi için
                elektrik üretim lisansı başvurusu EPDK tarafından onaylandı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Sınırlı Pozitif — Lisans onayı, depolamalı yenilenebilir enerji
                yatırımlarının ilerlemesi açısından destekleyici bir gelişme
                olarak izlenebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1620066"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
              >
                KAP Bildirimi - 1620066
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              24.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="aksen-manisa-depolamali-res-epdk-lisans-onayi"
            baslik="Aksa Enerji Manisa Depolamalı RES Lisans Onayı AKSEN"
          />
        </div>
        <HaberAltKisim href="/haber/aksen-manisa-depolamali-res-epdk-lisans-onayi" />
      </div>
    </main>
  );
}

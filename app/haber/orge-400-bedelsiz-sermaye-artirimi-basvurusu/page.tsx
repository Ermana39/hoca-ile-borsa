import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

const kapLink = "https://www.kap.org.tr/tr/Bildirim/1619472";

export const metadata: Metadata = {
  title: "ORGE’den Yüzde 400 Bedelsiz Sermaye Artırımı Başvurusu",
  description:
    "ORGE, sermayesini 80 milyon TL’den 400 milyon TL’ye çıkarmak için yüzde 400 oranında bedelsiz sermaye artırımı başvurusunda bulundu. Başvuru SPK onayı süreci açısından takip edilecek.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/orge-400-bedelsiz-sermaye-artirimi-basvurusu",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/orge-400-bedelsiz-sermaye-artirimi-basvurusu.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/orge-400-bedelsiz-sermaye-artirimi-basvurusu.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ORGE’den Yüzde 400 Bedelsiz Sermaye Artırımı Başvurusu",
  description:
    "ORGE, sermayesini 80 milyon TL’den 400 milyon TL’ye çıkarmak için yüzde 400 oranında bedelsiz sermaye artırımı başvurusunda bulundu.",
  datePublished: "2026-06-22T09:00:00+03:00",
  dateModified: "2026-06-22T21:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/orge-400-bedelsiz-sermaye-artirimi-basvurusu",
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
  image: "https://www.hocaileborsa.com/orge-400-bedelsiz-sermaye-artirimi-basvurusu.webp",
  inLanguage: "tr",
};

export default function OrgeBedelsizSermayeArtirimiPage() {
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
          <Link href="/" className="hover:text-blue-600 transition">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/orge-400-bedelsiz-sermaye-artirimi-basvurusu.webp"
              alt="ORGE yüzde 400 bedelsiz sermaye artırımı başvurusu"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ORGE’den Yüzde 400 Bedelsiz Sermaye Artırımı Başvurusu
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Sermaye Artırımı
              </span>
              <time dateTime="2026-06-22" className="text-sm text-slate-500">
                22 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                ORGE Enerji Elektrik Taahhüt A.Ş., sermayesinin 80 milyon
                TL’den 400 milyon TL’ye çıkarılması için yüzde 400 oranında
                bedelsiz sermaye artırımı başvurusunda bulunduğunu KAP’a
                açıkladı. Şirketin mevcut sermaye yapısına göre artışın iç
                kaynaklardan karşılanması ve bedelsiz pay olarak yatırımcılara
                yansıtılması planlanıyor.
              </p>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h2 className="text-base font-semibold text-slate-800">
                  ORGE (ORGE)
                </h2>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Açıklamaya göre ORGE, çıkarılmış sermayesini 80 milyon TL’den
                  400 milyon TL’ye yükseltmek için Sermaye Piyasası Kurulu’na
                  başvuruda bulundu. Yüzde 400 oranındaki bedelsiz sermaye
                  artırımı, şirket pay sayısında artış anlamına gelirken,
                  yatırımcı açısından nominal pay adedi tarafında değişim
                  yaratacak. Bu süreçte en kritik nokta, başvurunun henüz nihai
                  onay anlamına gelmemesidir. Bedelsiz sermaye artırımı için
                  SPK onayı ve sonraki hak kullanım takvimi ayrıca takip
                  edilmelidir.
                </p>
                <a
                  href={kapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  KAP bildirimini aç
                </a>
              </section>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                ORGE’nin yüzde 400 bedelsiz sermaye artırımı başvurusu, sermaye
                yapısı ve yatırımcı ilgisi açısından takip edilecek önemli bir
                KAP bildirimi oldu. Ancak bu açıklama şimdilik başvuru
                aşamasındadır; kesin hak kullanım tarihi ve sürecin tamamlanması
                için SPK onayı beklenmelidir.
              </div>

              <HaberIlgiliBolumler
                slug="orge-400-bedelsiz-sermaye-artirimi-basvurusu"
                baslik="ORGE’den Yüzde 400 Bedelsiz Sermaye Artırımı Başvurusu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/orge-400-bedelsiz-sermaye-artirimi-basvurusu" />

          <HaberNavigasyon href="/haber/orge-400-bedelsiz-sermaye-artirimi-basvurusu" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

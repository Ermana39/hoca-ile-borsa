import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "DERHL’de Bedelsiz Sermaye Artırımı ve SPK’dan Suç Duyurusu Kararı",
  description:
    "Derlüks Yatırım Holding, sermayesini yüzde 401 oranında artırarak 989,2 milyon TL’ye çıkarmak için SPK’ya başvurdu. SPK bülteninde ise DERHL pay piyasasındaki işlemler ve sosyal medya paylaşımları nedeniyle suç duyurusu kararı yer aldı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu.webp",
    ],
  },
};

const haberDetaylari = [
  {
    baslik: "DERHL’den Yüzde 401 Bedelsiz Sermaye Artırımı Başvurusu",
    metin:
      "Derlüks Yatırım Holding, sermayesini yüzde 401 oranında artırarak 989,2 milyon TL seviyesine çıkarmak amacıyla Sermaye Piyasası Kurulu’na başvuruda bulundu. Şirketin bedelsiz sermaye artırımı başvurusu DERHL paylarını takip eden yatırımcıların gündemine girdi.",
  },
  {
    baslik: "Sermaye 989,2 Milyon TL’ye Çıkarılmak İsteniyor",
    metin:
      "Şirketin başvurusunda mevcut sermayenin iç kaynaklardan karşılanacak artışla 989,2 milyon TL’ye yükseltilmesi hedefleniyor. Başvurunun SPK tarafından onaylanıp onaylanmayacağı önümüzdeki süreçte takip edilecek.",
  },
  {
    baslik: "SPK Bülteninde Suç Duyurusu Kararı Yer Aldı",
    metin:
      "SPK bültenine göre DERHL pay piyasasındaki bazı işlemler ve sosyal medya paylaşımları nedeniyle bazı kişiler hakkında Cumhuriyet Başsavcılığı’na suç duyurusunda bulunulmasına karar verildi.",
  },
  {
    baslik: "DERHL Hissesi Gündemin Öne Çıkan Başlıklarından Biri Oldu",
    metin:
      "Aynı hisseye ilişkin hem yüksek oranlı bedelsiz sermaye artırımı başvurusu hem de SPK’nın suç duyurusu kararı, DERHL hissesini günün dikkat çeken şirket haberleri arasına taşıdı.",
  },
  {
    baslik: "Yatırımcılar Resmi Açıklamaları Takip Ediyor",
    metin:
      "DERHL paylarını takip eden yatırımcılar için kısa vadede SPK’nın bedelsiz sermaye artırımı başvurusuna vereceği karar ve suç duyurusu sürecine ilişkin gelişmeler önemli başlıklar arasında yer alıyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "DERHL’de Bedelsiz Sermaye Artırımı ve SPK’dan Suç Duyurusu Kararı",
  description:
    "Derlüks Yatırım Holding, sermayesini yüzde 401 oranında artırarak 989,2 milyon TL’ye çıkarmak için SPK’ya başvurdu. SPK bülteninde ise DERHL pay piyasasındaki işlemler ve sosyal medya paylaşımları nedeniyle suç duyurusu kararı yer aldı.",
  datePublished: "2026-06-15T09:00:00+03:00",
  dateModified: "2026-06-15T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu",
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
  image:
    "https://www.hocaileborsa.com/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu.webp",
  inLanguage: "tr",
};

export default function DerhlBedelsizSpkSucDuyurusuPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu.webp"
              alt="DERHL’de bedelsiz sermaye artırımı ve SPK suç duyurusu kararı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              DERHL’de Bedelsiz Sermaye Artırımı ve SPK’dan Suç Duyurusu Kararı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-15" className="text-sm text-slate-500">
                15 Haziran 2026
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
                Derlüks Yatırım Holding (#DERHL), bedelsiz sermaye artırımı
                başvurusu ve SPK bülteninde yer alan suç duyurusu kararıyla
                yatırımcıların gündemine geldi.
              </p>

              <p>
                Şirket, sermayesini yüzde 401 oranında artırarak 989,2 milyon
                TL’ye çıkarmak amacıyla Sermaye Piyasası Kurulu’na başvurdu.
                Aynı süreçte SPK bülteninde DERHL pay piyasasındaki işlemler ve
                sosyal medya paylaşımlarına ilişkin suç duyurusu kararı yer aldı.
              </p>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                DERHL tarafında yüzde 401 bedelsiz sermaye artırımı başvurusu ve
                SPK’nın suç duyurusu kararı, hisseyi günün en çok takip edilen
                şirket haberlerinden biri haline getirdi.
              </div>

              <HaberIlgiliBolumler
                slug="derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu"
                baslik="DERHL’de Bedelsiz Sermaye Artırımı ve SPK’dan Suç Duyurusu Kararı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/derhl-bedelsiz-sermaye-artirimi-spk-suc-duyurusu" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
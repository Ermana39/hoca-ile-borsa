import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title: "THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme",
  description:
    "Türk Hava Yolları’nın Air Europa yatırım sürecinde İspanya tarafından doğrudan yabancı yatırım onayı verildi. Sürecin 2026 yılında tamamlanması bekleniyor.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/haber976-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/haber976-discover.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "İspanya’dan Yatırım Onayı Geldi",
    metin:
      "Türk Hava Yolları, Air Europa’nın azınlık payının alınmasına yönelik süreçte İspanya tarafından doğrudan yabancı yatırım onayının verildiğini açıkladı. Bu gelişme, yatırım sürecinde önemli aşamalardan birinin geride bırakıldığını gösterdi.",
  },
  {
    baslik: "Yaklaşık 300 Milyon Euroluk Yatırım",
    metin:
      "Daha önce yapılan açıklamalarda, söz konusu işlemin büyük ölçüde sermaye artışı şeklinde yaklaşık 300 milyon euro tutarında gerçekleşmesinin planlandığı belirtilmişti. Bu yatırımın ardından THY’nin Air Europa’da azınlık pay sahibi olması bekleniyor.",
  },
  {
    baslik: "Pay Oranı Yüzde 25-27 Aralığında Bekleniyor",
    metin:
      "Kapanış aşamasındaki teknik ve finansal düzeltmelere bağlı olarak Türk Hava Yolları’nın Air Europa’daki payının yüzde 25 ila yüzde 27 aralığında gerçekleşmesi öngörülüyor.",
  },
  {
    baslik: "Süreç 2026 İçinde Tamamlanabilir",
    metin:
      "THY tarafından yapılan açıklamada, ortaklık sürecine ilişkin diğer başvuru ve onay süreçlerinin devam ettiği belirtildi. İlgili işlemin 2026 yılı içinde tamamlanmasının öngörüldüğü ifade edildi.",
  },
  {
    baslik: "Avrupa Pazarında Stratejik Hamle",
    metin:
      "Air Europa yatırımı, Türk Hava Yolları’nın Avrupa pazarındaki büyüme stratejisi açısından dikkat çeken adımlardan biri olarak öne çıkıyor. Sürecin tamamlanması halinde THY’nin uluslararası ortaklık ağı ve bölgesel konumu açısından önemli bir gelişme yaşanmış olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "THY'nin Air Europa Yatırım Sürecinde Yeni Gelişme",
  description:
    "Türk Hava Yolları'nın Air Europa yatırım sürecinde İspanya tarafından doğrudan yabancı yatırım onayı verildi.",
  datePublished: "2026-06-05T09:00:00+03:00",
  dateModified: "2026-06-05T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/haber976-discover.webp",
  inLanguage: "tr",
};

export default function Haber976Page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Haberler</span>
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber976-discover.webp"
              alt="THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-05" className="text-sm text-slate-500">5 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Türk Hava Yolları’nın İspanyol hava yolu şirketi Air Europa’ya
                yönelik yatırım sürecinde önemli bir gelişme yaşandı. Şirket,
                Air Europa’nın azınlık payının alınmasına ilişkin işlem için
                İspanya tarafından doğrudan yabancı yatırım onayının verildiğini
                duyurdu.
              </p>

              <p>
                Açıklamaya göre, ortaklık sürecine ilişkin diğer başvuru
                süreçleri devam ederken, işlemin 2026 yılı içinde tamamlanması
                öngörülüyor. Yatırımın, THY’nin Avrupa pazarındaki büyüme
                stratejisi açısından önemli bir adım olması bekleniyor.
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
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{haber.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                THY’nin Air Europa yatırım sürecinde İspanya’dan doğrudan
                yabancı yatırım onayı alması, işlemin tamamlanmasına yönelik
                önemli aşamalardan biri olarak öne çıktı. Sürecin 2026 yılı
                içinde sonuçlanması bekleniyor.
              </div>
              <HaberIlgiliBolumler slug="thynin-air-europa-yatirim-surecinde-yeni-gelisme" baslik="THY’nin Air Europa Yatırım Sürecinde Yeni Gelişme" />



              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme" />

          <HaberNavigasyon href="/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}
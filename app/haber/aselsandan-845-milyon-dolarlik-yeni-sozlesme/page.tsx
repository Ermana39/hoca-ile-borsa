import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import HaberAltBilgi from "@/components/HaberAltBilgi";

export const metadata: Metadata = {
  title: "ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme",
  description:
    "ASELSAN ile Savunma Sanayii Başkanlığı arasında toplam 845 milyon dolar tutarında yeni sözleşmeler imzalandı. Şirketin savunma sanayii projeleri kapsamındaki sözleşme büyüklüğü artıyor.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme",
  },
};

const haberDetaylari = [
  {
    baslik: "845 Milyon Dolarlık Sözleşme İmzalandı",
    metin:
      "ASELSAN, Cumhurbaşkanlığı Savunma Sanayii Başkanlığı ile toplam 845 milyon ABD doları tutarında yeni sözleşmeler imzaladığını açıkladı. Söz konusu anlaşmalar, şirketin savunma sanayii alanındaki güçlü sipariş portföyünü destekleyen önemli gelişmeler arasında yer aldı.",
  },
  {
    baslik: "Haberleşme, Uydu ve Uzay Sistemleri Öne Çıktı",
    metin:
      "Şirket tarafından yapılan açıklamaya göre sözleşmeler, kamu güvenliği haberleşme sistemleri ile uydu ve uzay sistemlerinin tedarikine yönelik projeleri kapsıyor. Bu alanlar, ASELSAN’ın yüksek teknoloji odaklı faaliyetleri içerisinde stratejik öneme sahip başlıklar arasında bulunuyor.",
  },
  {
    baslik: "Teslimatlar 2026 Yılından İtibaren Başlayacak",
    metin:
      "Açıklamada, imzalanan sözleşmeler kapsamında teslimatların 2026 yılından itibaren gerçekleştirileceği belirtildi. Bu durum, sözleşmelerin şirketin ilerleyen dönem gelirlerine ve iş hacmine katkı sağlayabilecek nitelikte olduğunu gösteriyor.",
  },
  {
    baslik: "Savunma Sanayii Tarafında Güçlü İş Akışı",
    metin:
      "ASELSAN’ın Savunma Sanayii Başkanlığı ile imzaladığı yeni sözleşmeler, savunma elektroniği, haberleşme teknolojileri, uydu sistemleri ve uzay alanındaki faaliyetlerinin desteklenmesi açısından dikkat çekti.",
  },
  {
    baslik: "Yatırımcıların Takip Ettiği Önemli Başlık",
    metin:
      "845 milyon dolarlık sözleşme büyüklüğü, Borsa İstanbul’da işlem gören ASELSAN payları açısından yatırımcıların yakından takip ettiği önemli şirket haberlerinden biri oldu. Bu tür büyük ölçekli sözleşmeler, şirketin uzun vadeli iş görünümü açısından önem taşıyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ASELSAN'dan 845 Milyon Dolarlık Yeni Sözleşme",
  description:
    "ASELSAN ile Savunma Sanayii Başkanlığı arasında toplam 845 milyon dolar tutarında yeni sözleşmeler imzalandı.",
  datePublished: "2026-06-05T09:00:00+03:00",
  dateModified: "2026-06-05T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/haber977.webp",
  inLanguage: "tr",
};

export default function Haber977Page() {
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
              src="/haber977.webp"
              alt="ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme
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
                ASELSAN, Cumhurbaşkanlığı Savunma Sanayii Başkanlığı ile toplam
                845 milyon ABD doları tutarında yeni sözleşmeler imzaladığını
                duyurdu.
              </p>

              <p>
                Kamuyu Aydınlatma Platformu’nda yer alan açıklamaya göre,
                sözleşmeler kamu güvenliği haberleşme sistemleri ile uydu ve
                uzay sistemlerinin tedarikine yönelik projeleri kapsıyor.
                Teslimatların ise 2026 yılından itibaren gerçekleştirilmesi
                planlanıyor.
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
                ASELSAN’ın 845 milyon dolarlık yeni sözleşme açıklaması,
                şirketin savunma, haberleşme, uydu ve uzay teknolojileri
                tarafındaki iş hacmini destekleyen önemli gelişmelerden biri
                olarak öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="aselsandan-845-milyon-dolarlik-yeni-sozlesme" baslik="ASELSAN’dan 845 Milyon Dolarlık Yeni Sözleşme" />



              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi
                değildir.
              </div>
            </div>
          </div>
          <HaberAltBilgi href="/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme" />

          <HaberNavigasyon href="/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}
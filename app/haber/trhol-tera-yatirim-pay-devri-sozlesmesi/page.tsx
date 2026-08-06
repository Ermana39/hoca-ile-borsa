import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "TRHOL, Tera Yatırım Paylarının Devri İçin Sözleşme İmzaladı",
  description:
    "Tera Finansal Yatırımlar Holding A.Ş. (TRHOL), Tera Yatırım Menkul Değerler A.Ş. sermayesinin %6,3'ünü temsil eden B grubu payların devralınmasına ilişkin sözleşme imzalandığını ve pay devrinin önemli bölümünün tamamlandığını açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/trhol-tera-yatirim-pay-devri-sozlesmesi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/trhol-tera-yatirim-pay-devri-sozlesmesi.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/trhol-tera-yatirim-pay-devri-sozlesmesi.webp"],
  },
};

const haberDetaylari = [
  {
    baslik: "Tera Yatırım payları için sözleşme imzalandı",
    metin:
      "Tera Finansal Yatırımlar Holding A.Ş. (TRHOL), Tera Yatırım Menkul Değerler A.Ş. paylarının devralınmasına ilişkin yönetim kurulu kararını ve pay devri sürecini KAP üzerinden duyurdu. Açıklamada, Tera Yatırım sermayesinin %6,3'ünü temsil eden B grubu payların devralınması için sözleşme görüşmelerine başlanmasına, sözleşme imzalanmasına ve payların devralınmasına karar verildiği belirtildi.",
  },
  {
    baslik: "Pay devrinin önemli bölümü tamamlandı",
    metin:
      "Şirket açıklamasına göre, Gül Ayşe Çolak'tan satın alınması planlanan 53.405.999,465 TL nominal değerli B grubu paya ilişkin sözleşme aynı gün akdedildi. Bildirimde, 52.405.999,465 adet B grubu payın devrinin tamamlandığı ifade edildi. Bu gelişme, TRHOL'ün Tera Yatırım üzerindeki pay sahipliği yapısını ve grup içi finansal konumunu ilgilendiren önemli bir adım olarak öne çıkıyor.",
  },
  {
    baslik: "Yatırımcı açısından neden önemli?",
    metin:
      "Aracı kurum ve finansal yatırım şirketleri tarafındaki pay devirleri, grup yapısı, kontrol ilişkileri ve finansal iştiraklerin konsolidasyon etkisi açısından yatırımcılar tarafından yakından takip edilir. TRHOL açısından bu işlem, Tera Yatırım'daki pay sahipliği pozisyonunu güçlendiren ve şirketin finansal iştirak yapısını doğrudan ilgilendiren bir gelişme niteliği taşıyor.",
  },
  {
    baslik: "TERA hissesi de ilgili şirket olarak yer aldı",
    metin:
      "KAP bildiriminde ilgili şirketler bölümünde TERA da yer aldı. Bu nedenle haber yalnızca TRHOL açısından değil, Tera Yatırım Menkul Değerler A.Ş. payları ve Tera grubu şirketleri açısından da yatırımcıların takip edeceği başlıklar arasında değerlendirilebilir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TRHOL, Tera Yatırım Paylarının Devri İçin Sözleşme İmzaladı",
  description:
    "Tera Finansal Yatırımlar Holding A.Ş. (TRHOL), Tera Yatırım Menkul Değerler A.Ş. sermayesinin %6,3'ünü temsil eden B grubu payların devralınmasına ilişkin sözleşme imzalandığını ve pay devrinin önemli bölümünün tamamlandığını açıkladı.",
  datePublished: "2026-06-24T18:46:36+03:00",
  dateModified: "2026-06-24T19:10:00+03:00",
  url: "https://www.hocaileborsa.com/haber/trhol-tera-yatirim-pay-devri-sozlesmesi",
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
  image: "https://www.hocaileborsa.com/trhol-tera-yatirim-pay-devri-sozlesmesi.webp",
  inLanguage: "tr",
};

export default function HaberPage() {
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
              src="/trhol-tera-yatirim-pay-devri-sozlesmesi.webp"
              alt="TRHOL, Tera Yatırım Paylarının Devri İçin Sözleşme İmzaladı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              TRHOL, Tera Yatırım Paylarının Devri İçin Sözleşme İmzaladı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime="2026-06-24" className="text-sm text-slate-500">
                24 Haziran 2026
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
                Tera Finansal Yatırımlar Holding A.Ş. (TRHOL), Tera Yatırım
                Menkul Değerler A.Ş. paylarının devralınmasına ilişkin önemli
                bir açıklama yaptı. Şirket, Tera Yatırım sermayesinin %6,3&apos;ünü
                temsil eden B grubu payların devralınmasına yönelik sözleşmenin
                imzalandığını ve pay devrinin önemli bölümünün tamamlandığını
                duyurdu.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Şirket:
                  </span>{" "}
                  TRHOL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    İlgili Şirket:
                  </span>{" "}
                  TERA
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Pay Oranı:
                  </span>{" "}
                  %6,3
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    İşlem Türü:
                  </span>{" "}
                  Pay devri sözleşmesi
                </div>
              </div>

              <div className="space-y-5">
                {haberDetaylari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Kaynak: TRHOL tarafından 24 Haziran 2026 tarihinde KAP&apos;a yapılan
                özel durum açıklaması.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:text-blue-800"
                >
                  KAP bildirimini aç
                </a>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Hoca ile Borsa yorumu: TRHOL haberinde ana başlık, Tera Yatırım
                paylarının devralınmasıyla grup içi finansal iştirak yapısında
                güçlenme ihtimalidir. İşlem, doğrudan günlük operasyonel ciro
                etkisinden çok ortaklık yapısı ve finansal pozisyon açısından
                takip edilmelidir.
              </div>

              <HaberIlgiliBolumler
                slug="trhol-tera-yatirim-pay-devri-sozlesmesi"
                baslik="TRHOL, Tera Yatırım Paylarının Devri İçin Sözleşme İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/trhol-tera-yatirim-pay-devri-sozlesmesi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

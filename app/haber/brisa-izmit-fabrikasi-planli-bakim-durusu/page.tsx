import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "Brisa İzmit Fabrikasında Üretime Geçici Ara Verecek",
  description:
    "Brisa, İzmit fabrikasında planlı bakım çalışmaları nedeniyle 28 Haziran - 7 Temmuz 2026 tarihleri arasında lastik üretimine geçici süreyle ara verileceğini açıkladı. Aksaray fabrikasında üretim devam edecek.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/brisa-izmit-fabrikasi-planli-bakim-durusu",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/brisa-izmit-fabrikasi-planli-bakim-durusu.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/brisa-izmit-fabrikasi-planli-bakim-durusu.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "Brisa (BRISA)",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619946",
    metin:
      "Brisa Bridgestone Sabancı Lastik Sanayi ve Ticaret A.Ş., İzmit fabrikasında planlı bakım çalışmaları nedeniyle üretime geçici süreyle ara verileceğini KAP'a bildirdi. Açıklamaya göre İzmit fabrikasında lastik üretimi 28 Haziran 2026 Pazar günü saat 00:00'dan 7 Temmuz 2026 Salı günü saat 23:59'a kadar durdurulacak.",
  },
  {
    baslik: "Duruşun Nedeni ve Kapsamı",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619946",
    metin:
      "Şirket, duruşun nedenini İzmit fabrikasında yapılacak planlı bakım çalışmaları olarak açıkladı. Bildirim yalnızca İzmit fabrikasındaki lastik üretimini kapsıyor. KAP açıklamasında Aksaray fabrikasında üretimin devam edeceği özellikle belirtildi. Bu nedenle karar, şirket genelinde tüm üretimin durması anlamına gelmiyor.",
  },
  {
    baslik: "Üretim ve Satışlara Beklenen Etki",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619946",
    metin:
      "Brisa, üretime geçici süreyle ara verilmesinin şirketin toplam üretimine ve toplam satışlarına önemli bir etkisinin olmasının beklenmediğini duyurdu. Bu ifade, planlı bakım duruşunun operasyonel takvim içinde yönetilen geçici bir süreç olduğunu gösteriyor. Buna rağmen üretim duruşu niteliği taşıdığı için yatırımcılar tarafından takip edilmesi gereken önemli bir KAP bildirimi olarak öne çıkıyor.",
  },
  {
    baslik: "Yeniden Üretime Başlama Tarihi",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619946",
    metin:
      "Açıklamaya göre İzmit fabrikasında üretime yeniden başlanması için öngörülen tarih 8 Temmuz 2026 Çarşamba olarak bildirildi. Bakım sürecinin planlandığı şekilde tamamlanması halinde üretim faaliyetlerinin bu tarihten itibaren yeniden devreye alınması bekleniyor.",
  },
  {
    baslik: "Yatırımcı Açısından Önemi",
    kapLink: "https://www.kap.org.tr/tr/Bildirim/1619946",
    metin:
      "Planlı bakım kaynaklı üretim duruşları her zaman doğrudan olumsuz finansal sonuç anlamına gelmez; ancak üretim sürekliliği, stok yönetimi ve teslimat planlaması açısından takip edilir. Brisa'nın toplam üretim ve satışlara önemli etki beklemediğini açıklaması sınırlı negatif algıyı azaltan bir unsur olurken, yatırımcılar sürecin planlandığı tarihte tamamlanıp tamamlanmadığını izlemeli.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Brisa İzmit Fabrikasında Üretime Geçici Ara Verecek",
  description:
    "Brisa, İzmit fabrikasında planlı bakım çalışmaları nedeniyle 28 Haziran - 7 Temmuz 2026 tarihleri arasında lastik üretimine geçici süreyle ara verileceğini açıkladı. Aksaray fabrikasında üretim devam edecek.",
  datePublished: "2026-06-23T19:21:00+03:00",
  dateModified: "2026-06-23T19:21:00+03:00",
  url: "https://www.hocaileborsa.com/haber/brisa-izmit-fabrikasi-planli-bakim-durusu",
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
  image: "https://www.hocaileborsa.com/brisa-izmit-fabrikasi-planli-bakim-durusu.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
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
              src="/brisa-izmit-fabrikasi-planli-bakim-durusu.webp"
              alt="Brisa İzmit Fabrikasında Üretime Geçici Ara Verecek"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Brisa İzmit Fabrikasında Üretime Geçici Ara Verecek
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime="2026-06-23" className="text-sm text-slate-500">
                23 Haziran 2026
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
                Brisa, İzmit fabrikasında planlı bakım çalışmaları nedeniyle
                lastik üretimine geçici süreyle ara verileceğini açıkladı. KAP
                bildirimine göre duruş 28 Haziran 2026 Pazar günü başlayacak ve
                7 Temmuz 2026 Salı günü saat 23:59&apos;a kadar devam edecek.
              </p>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
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
                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-flex text-sm font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                    >
                      Orijinal KAP bildirimi
                    </a>
                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium leading-7 text-rose-900 md:text-base">
                Olası Etki: Sınırlı Negatif. Üretim duruşu operasyonel açıdan
                takip edilmesi gereken bir başlık olsa da şirket, toplam üretim
                ve satışlara önemli bir etki beklemediğini açıkladı.
              </div>

              <HaberIlgiliBolumler
                slug="brisa-izmit-fabrikasi-planli-bakim-durusu"
                baslik="Brisa İzmit Fabrikasında Üretime Geçici Ara Verecek"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/brisa-izmit-fabrikasi-planli-bakim-durusu" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

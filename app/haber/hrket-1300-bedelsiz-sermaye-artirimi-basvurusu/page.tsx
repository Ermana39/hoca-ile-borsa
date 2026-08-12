import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "HRKET’ten %1300 Bedelsiz Sermaye Artırımı Başvurusu",
  description:
    seoAciklamasi("Hareket Proje Taşımacılığı ve Yük Mühendisliği A.Ş. (HRKET), sermayesini 115,2 milyon TL’den 1,61 milyar TL’ye çıkarmak için %1300 oranında bedelsiz sermaye artırımı başvurusu yaptı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/hrket-1300-bedelsiz-sermaye-artirimi-basvurusu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/hrket-1300-bedelsiz-sermaye-artirimi-basvurusu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/hrket-1300-bedelsiz-sermaye-artirimi-basvurusu.webp",
    ],
  },
};

const haberDetaylari = [
  {
    baslik: "HRKET’ten yüksek oranlı bedelsiz sermaye artırımı başvurusu",
    metin:
      "Hareket Proje Taşımacılığı ve Yük Mühendisliği A.Ş. (HRKET), bedelsiz sermaye artırımı sürecine ilişkin SPK başvurusunu KAP üzerinden duyurdu. Şirket, 115.200.000 TL olan mevcut çıkarılmış sermayesini 1.497.600.000 TL artırarak 1.612.800.000 TL’ye yükseltmek için başvuruda bulundu. Toplam bedelsiz pay alma oranı %1300 olarak açıklandı.",
  },
  {
    baslik: "Artırım özkaynak kalemlerinden karşılanacak",
    metin:
      "KAP açıklamasına göre sermaye artırımında özsermaye enflasyon düzeltme farkları ve emisyon primi kullanılacak. İç kaynaklardan karşılanacak 1.497.600.000 TL’lik artırım, şirkete doğrudan nakit girişi sağlamayacak. Bu işlem, mevcut özkaynak kalemlerinin sermayeye eklenmesi yoluyla gerçekleşecek bir bedelsiz sermaye artırımı niteliği taşıyor.",
  },
  {
    baslik: "Kayıtlı sermaye tavanı bir defaya mahsus aşılacak",
    metin:
      "Şirketin kayıtlı sermaye tavanı 480.000.000 TL seviyesinde bulunuyor. Açıklamada, Sermaye Piyasası Kurulu’nun ilgili tebliği kapsamında kayıtlı sermaye tavanının bir defaya mahsus aşılması suretiyle çıkarılmış sermayenin 1.612.800.000 TL’ye yükseltilmesi için SPK’ya başvuru yapıldığı belirtildi. Bu nedenle süreçte SPK onayı ve esas sözleşme tadili yakından takip edilecek.",
  },
  {
    baslik: "Yatırımcı açısından ne anlama geliyor?",
    metin:
      "Bedelsiz sermaye artırımları şirketin toplam piyasa değerini tek başına artırmaz; pay adedi artarken hisse fiyatı teorik olarak bölünme oranına göre düzeltilir. Ancak %1300 gibi yüksek oranlı bedelsiz başvuruları, piyasada yatırımcı ilgisini artırabilen önemli haber akışları arasında yer alır. HRKET özelinde bundan sonraki ana gündem SPK onayı, hak kullanım tarihi ve yeni payların yatırımcı hesaplarına geçiş süreci olacak.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "HRKET’ten %1300 Bedelsiz Sermaye Artırımı Başvurusu",
  description:
    "Hareket Proje Taşımacılığı ve Yük Mühendisliği A.Ş. (HRKET), sermayesini 115,2 milyon TL’den 1,61 milyar TL’ye çıkarmak için %1300 oranında bedelsiz sermaye artırımı başvurusu yaptı.",
  datePublished: "2026-06-24T16:01:00+03:00",
  dateModified: "2026-06-24T16:15:00+03:00",
  url: "https://www.hocaileborsa.com/haber/hrket-1300-bedelsiz-sermaye-artirimi-basvurusu",
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
  image: "https://www.hocaileborsa.com/hrket-1300-bedelsiz-sermaye-artirimi-basvurusu.webp",
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
              src="/hrket-1300-bedelsiz-sermaye-artirimi-basvurusu.webp"
              alt="HRKET’ten %1300 Bedelsiz Sermaye Artırımı Başvurusu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              HRKET’ten %1300 Bedelsiz Sermaye Artırımı Başvurusu
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Sermaye Artırımı
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
                Hareket Proje Taşımacılığı ve Yük Mühendisliği A.Ş. (HRKET),
                %1300 oranındaki bedelsiz sermaye artırımı için Sermaye Piyasası
                Kurulu’na başvuru yaptığını açıkladı. Şirketin mevcut 115,2
                milyon TL olan çıkarılmış sermayesinin, iç kaynaklardan
                karşılanmak üzere 1,61 milyar TL’ye çıkarılması planlanıyor.
              </p>

              <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
                <div>
                  <span className="font-semibold text-slate-900">
                    Mevcut Sermaye:
                  </span>{" "}
                  115.200.000 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Ulaşılacak Sermaye:
                  </span>{" "}
                  1.612.800.000 TL
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    Bedelsiz Oranı:
                  </span>{" "}
                  %1300
                </div>
                <div>
                  <span className="font-semibold text-slate-900">
                    SPK Başvuru Tarihi:
                  </span>{" "}
                  24.06.2026
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
                Kaynak: HRKET tarafından 24 Haziran 2026 tarihinde KAP’a yapılan
                sermaye artırımı bildirimi.
                <br />
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1620241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-500 underline underline-offset-2 transition hover:text-slate-700"
                >
                  Orijinal KAP bildirimi
                </a>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                HRKET haberinde ana başlık, şirketin çok yüksek oranlı bedelsiz
                sermaye artırımı için SPK başvurusu yapmış olmasıdır. Sürecin
                tamamlanması için SPK onayı, hak kullanım tarihi ve sonraki resmi
                duyurular ayrıca izlenmelidir.
              </div>

              <HaberIlgiliBolumler
                slug="hrket-1300-bedelsiz-sermaye-artirimi-basvurusu"
                baslik="HRKET’ten %1300 Bedelsiz Sermaye Artırımı Başvurusu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/hrket-1300-bedelsiz-sermaye-artirimi-basvurusu" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

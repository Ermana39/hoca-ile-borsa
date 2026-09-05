import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "sdttr-bkm-bursa-kalip-1-27-milyon-dolar-siparis-aldi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/sdttr-bkm-bursa-kalip-1-27-milyon-dolar-siparis-aldi.webp";

export const metadata: Metadata = {
  title: "SDTTR Bağlı Ortaklığı 1,27 Milyon Dolarlık Sipariş Aldı",
  description:
    seoAciklamasi("SDTTR, %95 pay sahibi olduğu bağlı ortaklığı BKM Bursa Kalıp A.Ş.’nin yurt içi bir müşteriden üretim alanında 1,27 milyon dolarlık sipariş aldığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "SDTTR Bağlı Ortaklığı 1,27 Milyon Dolarlık Sipariş Aldı",
    description:
      "SDTTR’nin bağlı ortaklığı BKM Bursa Kalıp, yurt içi bir müşteriden 1.271.060 ABD doları tutarında sipariş aldı. Teslimatlar 2026 ve 2027’de yapılacak.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "SDTTR BKM Bursa Kalıp 1,27 milyon dolar sipariş aldı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDTTR Bağlı Ortaklığı 1,27 Milyon Dolarlık Sipariş Aldı",
    description:
      "BKM Bursa Kalıp, üretim alanında 1.271.060 ABD doları tutarında yeni sipariş aldı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Sipariş Tutarı",
    deger: "1,27 Mn $",
    aciklama: "Toplam sipariş büyüklüğü",
  },
  {
    baslik: "Bağlı Ortaklık",
    deger: "BKM Bursa Kalıp",
    aciklama: "SDTTR’nin %95 pay sahibi olduğu şirket",
  },
  {
    baslik: "Müşteri",
    deger: "Yurt İçi",
    aciklama: "Üretim alanında alınan sipariş",
  },
  {
    baslik: "Teslimat",
    deger: "2026-2027",
    aciklama: "Teslimatların bu yıllarda yapılması planlanıyor",
  },
];

const haberDetaylari = [
  {
    etiket: "Şirket",
    deger: "SDT Uzay ve Savunma Teknolojileri A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "SDTTR",
  },
  {
    etiket: "Bağlı Ortaklık",
    deger: "BKM Bursa Kalıp A.Ş.",
  },
  {
    etiket: "SDTTR Pay Oranı",
    deger: "%95",
  },
  {
    etiket: "Sipariş Tutarı",
    deger: "1.271.060 ABD doları",
  },
  {
    etiket: "Müşteri Niteliği",
    deger: "Yurt içi müşteri",
  },
  {
    etiket: "İş İlişkisi Başlangıç Tarihi",
    deger: "09.07.2026",
  },
  {
    etiket: "Teslimat Takvimi",
    deger: "2026 ve 2027 yılları içerisinde planlanıyor",
  },
  {
    etiket: "Faaliyetlere Etki",
    deger: "Şirket cirosunu olumlu etkilemesi bekleniyor",
  },
];

const takipBasliklari = [
  "Siparişin teslimat takvimi",
  "Gelire yansıma dönemleri",
  "BKM Bursa Kalıp’ın yeni sipariş akışı",
  "Üretim kapasitesi ve operasyonel katkı",
  "SDTTR’nin bağlı ortaklık performansı",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "SDTTR Bağlı Ortaklığı 1,27 Milyon Dolarlık Sipariş Aldı",
  description:
    "SDTTR, %95 pay sahibi olduğu bağlı ortaklığı BKM Bursa Kalıp A.Ş.’nin yurt içi bir müşteriden üretim alanında 1,27 milyon dolarlık sipariş aldığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-09T16:19:01+03:00",
  dateModified: "2026-07-09T16:19:01+03:00",
  url: haberUrl,
  inLanguage: "tr",
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
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function SdttrBkmBursaKalipSiparisPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/sdttr-bkm-bursa-kalip-1-27-milyon-dolar-siparis-aldi.webp"
              alt="SDTTR BKM Bursa Kalıp 1,27 milyon dolar sipariş aldı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SDTTR Bağlı Ortaklığı 1,27 Milyon Dolarlık Sipariş Aldı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Yeni İş İlişkisi
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                SDT Uzay ve Savunma Teknolojileri A.Ş. (<strong>SDTTR</strong>),
                bağlı ortaklığı BKM Bursa Kalıp A.Ş. üzerinden yeni sipariş
                aldığını açıkladı. Şirketin sermayesinin <strong>%95</strong>’ine
                sahip olduğu BKM Bursa Kalıp, yurt içi bir müşteriden üretim
                alanında toplam <strong>1.271.060 ABD doları</strong> tutarında
                sipariş aldı.
              </p>

              <p>
                KAP açıklamasında, sipariş kapsamındaki teslimatların{" "}
                <strong>2026 ve 2027 yılları</strong> içerisinde yapılmasının
                planlandığı belirtildi. Şirket, yeni iş ilişkisinin ciroya olumlu
                etki etmesini bekliyor.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SDTTR’nin %95 pay sahibi olduğu BKM Bursa Kalıp A.Ş., 9 Temmuz
                  2026 tarihinde yurt içi bir müşterisinden üretim alanında
                  1.271.060 ABD doları tutarında sipariş aldı. Siparişin teslimat
                  süreci 2026 ve 2027 yıllarına yayılacak.
                </p>
              </Section>

              <Section title="Siparişin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Sipariş tutarı doğrudan SDTTR’nin bağlı ortaklığı üzerinden
                  geldiği için haber, grup faaliyetleri ve üretim tarafındaki iş
                  akışı açısından pozitif okunabilir. KAP açıklamasında müşteri
                  adı paylaşılmadı ancak iş ilişkisinin şirket cirosunu olumlu
                  etkileyeceği belirtildi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Teslimatların 2026 ve 2027 yıllarına yayılacak olması, gelire
                  yansımanın tek seferde değil dönemsel olarak gerçekleşebileceği
                  anlamına geliyor. Bu nedenle sonraki finansal tablolarda bağlı
                  ortaklık katkısı ve yeni sipariş akışı izlenecek.
                </p>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SDTTR, savunma ve ileri teknoloji alanındaki iş modeliyle
                  yakından izlenen şirketlerden biri. Bağlı ortaklık üzerinden
                  gelen döviz bazlı siparişler, üretim tarafındaki devamlılık ve
                  sipariş portföyü açısından önem taşıyor.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1630870"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  SDTTR — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="SDTTR Bağlı Ortaklığı 1,27 Milyon Dolarlık Sipariş Aldı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Siparişin finansal etkisi, teslimat takvimi
                ve şirketin sonraki açıklamalarıyla birlikte takip edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

const kapKaynakLink =
  "https://www.kap.org.tr/tr/bildirim-sorgu-sonuc?member=8acae2c4794d364a017af66863e41bae";

export const metadata: Metadata = {
  title: { absolute: "EUPWR: ABD’den 10,8 Milyon Dolarlık Trafo Siparişi" },
  description:
    seoAciklamasi("Europower World Enerji, ABD’de yerleşik iki ayrı firmadan yüksek mühendislik ürünü güç transformatörlerinin üretimi ve tedarikine yönelik toplam 10,8 milyon dolarlık sipariş aldı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/europower-abd-transformator-siparisi-19-haziran-2026",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/europower-abd-transformator-siparisi-19-06-2026.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/europower-abd-transformator-siparisi-19-06-2026.webp",
    ],
  },
};

const haberBasliklari = [
  {
    baslik: "ABD’den İki Ayrı Firmadan Sipariş Alındı",
    metin:
      "Europower World Enerji A.Ş., Amerika Birleşik Devletleri’nde yerleşik iki ayrı firmadan güç transformatörü siparişi aldı. Siparişlerin, yüksek mühendislik ürünü güç transformatörlerinin üretimi ve tedarikini kapsaması şirketin ihracat odaklı iş hacmi açısından dikkat çekti.",
  },
  {
    baslik: "Sipariş Bedeli 10,8 Milyon Dolar",
    metin:
      "Açıklamada yer alan bilgilere göre söz konusu siparişlerin toplam bedeli 10.800.000 ABD doları oldu. Güncel döviz kuru baz alındığında sipariş tutarının yaklaşık 500,4 milyon TL seviyesine karşılık geldiği belirtildi.",
  },
  {
    baslik: "117 MVA ve 225 MVA Gücünde Transformatörler",
    metin:
      "Sipariş kapsamında 117 MVA ve 225 MVA güçlerinde, 138 kV ve 330 kV primer gerilim seviyelerinde güç transformatörlerinin üretimi ve tedariki yapılacak. Bu ürün grubu, yüksek mühendislik kapasitesi ve teknik uzmanlık gerektiren alanlardan biri olarak öne çıkıyor.",
  },
  {
    baslik: "EUPWR ve GESAN İçin Takip Edilecek Başlık",
    metin:
      "Europower World Enerji, Europower Enerji’nin bağlı ortaklığı konumunda bulunurken, aynı zamanda Girişim Elektrik’in dolaylı bağlı ortaklığı olarak takip ediliyor. Bu nedenle haber hem EUPWR hem de GESAN yatırımcıları açısından dikkat çeken şirket gelişmeleri arasında yer aldı.",
  },
  {
    baslik: "İhracat Odaklı Büyüme Stratejisini Destekliyor",
    metin:
      "ABD pazarından gelen bu sipariş, Europower World Enerji’nin yüksek gerilim güç transformatörleri alanındaki uluslararası rekabet gücünü göstermesi açısından önemli. Şirketin yüksek katma değerli ürün grubunda ihracat odaklı büyüme stratejisini sürdürdüğü değerlendiriliyor.",
  },
];

const kapAciklamasi = [
  "Şirketin bağlı ortaklığı Europower World Enerji A.Ş., aynı zamanda Girişim Elektrik Sanayi Taahhüt ve Ticaret A.Ş.’nin dolaylı bağlı ortaklığıdır.",
  "Europower World Enerji A.Ş., Amerika Birleşik Devletleri’nde yerleşik iki ayrı firmadan, 117 MVA ve 225 MVA güçlerinde, 138 kV ve 330 kV primer gerilim seviyelerinde yüksek mühendislik ürünü güç transformatörlerinin üretimi ve tedariğine yönelik sipariş almıştır.",
  "Söz konusu siparişlerin toplam bedeli 10.800.000 USD olup, güncel döviz kuru baz alındığında yaklaşık 500.356.440 TL tutarındadır.",
  "Açıklamada, alınan siparişlerin Europower World Enerji A.Ş.’nin cirosuna ve kârlılığına olumlu katkı sağlamasının beklendiği ifade edilmiştir.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Europower World Enerji’ye ABD’den 10,8 Milyon Dolarlık Güç Transformatörü Siparişi",
  description:
    "Europower World Enerji, ABD’de yerleşik iki ayrı firmadan yüksek mühendislik ürünü güç transformatörlerinin üretimi ve tedarikine yönelik toplam 10,8 milyon dolarlık sipariş aldı.",
  datePublished: "2026-06-19T09:33:00+03:00",
  dateModified: "2026-06-19T09:33:00+03:00",
  url: "https://www.hocaileborsa.com/haber/europower-abd-transformator-siparisi-19-haziran-2026",
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
    "https://www.hocaileborsa.com/europower-abd-transformator-siparisi-19-06-2026.webp",
  inLanguage: "tr",
};

export default function HaberEuropowerAbdTransformatorPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/europower-abd-transformator-siparisi-19-06-2026.webp"
              alt="Europower World Enerji ABD güç transformatörü siparişi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Europower World Enerji’ye ABD’den 10,8 Milyon Dolarlık Güç
              Transformatörü Siparişi
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Şirket Haberleri
              </span>
              <time dateTime="2026-06-19" className="text-sm text-slate-500">
                19 Haziran 2026
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
                Europower Enerji ve Otomasyon Teknolojileri Sanayi Ticaret A.Ş.
                tarafında dikkat çeken yeni bir sipariş haberi geldi. Şirketin
                bağlı ortaklığı Europower World Enerji A.Ş., Amerika Birleşik
                Devletleri’nde yerleşik iki ayrı firmadan güç transformatörü
                siparişi aldı.
              </p>

              <p>
                Alınan siparişler, yüksek mühendislik ürünü güç
                transformatörlerinin üretimi ve tedarikini kapsıyor. Toplam
                sipariş bedelinin 10.800.000 ABD doları olması, şirketin döviz
                bazlı sipariş portföyü ve ihracat odaklı büyüme stratejisi
                açısından öne çıkan bir gelişme olarak takip ediliyor.
              </p>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-base font-semibold text-slate-800">
                    Resmi KAP Açıklamasında Yer Alan Bilgiler
                  </h2>
                  <a
                    href={kapKaynakLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20 hover:bg-blue-50"
                  >
                    Kaynak: KAP
                  </a>
                </div>

                <div className="space-y-3">
                  {kapAciklamasi.map((metin) => (
                    <p
                      key={metin}
                      className="text-sm leading-relaxed text-slate-600"
                    >
                      {metin}
                    </p>
                  ))}
                </div>
              </section>

              <div className="space-y-5">
                {haberBasliklari.map((haber) => (
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
                Günün dikkat çeken şirket haberlerinden biri Europower World
                Enerji’nin ABD’den aldığı 10,8 milyon dolarlık güç
                transformatörü siparişi oldu. Haber, şirketin yüksek gerilim
                transformatörleri alanındaki mühendislik kapasitesi ve
                uluslararası pazarlardaki konumu açısından pozitif bir başlık
                olarak izlenebilir.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Bu gelişmenin finansallara etkisi; üretim süreci, teslimat
                takvimi, maliyet yapısı ve ödeme koşullarına bağlı olarak
                ilerleyen dönemlerde daha net görülecektir. Bu nedenle siparişin
                ciro ve kârlılık katkısı şirketin sonraki finansal raporlarında
                takip edilmelidir.
              </div>

              <HaberIlgiliBolumler
                slug="europower-abd-transformator-siparisi-19-haziran-2026"
                baslik="Europower ABD Güç Transformatörü Siparişi"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/europower-abd-transformator-siparisi-19-haziran-2026" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

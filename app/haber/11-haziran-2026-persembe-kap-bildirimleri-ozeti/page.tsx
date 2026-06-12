import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "11 Haziran 2026 Perşembe KAP Bildirimleri Özeti",
  description:
    "11 Haziran 2026 Perşembe günü KAP'a düşen öne çıkan bildirimlerin özeti: halka arz onayı, Rekabet Kurulu cezaları, yolcu verileri, kripto saklama izni, şirket satın alma işlemleri, yeni iş ilişkileri ve sermaye artırımları.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/11-haziran-2026-persembe-kap-bildirimleri-ozeti",
  },
};

const kapHaberleri = [
  {
    baslik: "Beta Enerji ve Teknoloji",
    metin:
      "Beta Enerji ve Teknoloji'nin halka arz başvurusu SPK tarafından onaylandı. Halka arz kapsamında 60.750.000 adet payın, pay başına 40,00 TL fiyatla satışa sunulması planlanıyor. Halka arz onayı nedeniyle günün en dikkat çeken başlıklarından biri oldu.",
  },
  {
    baslik: "Brisa (BRISA)",
    metin:
      "Brisa tarafında Rekabet Kurulu tarafından verilen idari para cezası öne çıktı. Şirket ayrıca 6 milyar TL'ye kadar borçlanma aracı ihracı kararı aldığını duyurdu. Rekabet cezası ve finansman adımı birlikte değerlendirildiğinde BRISA, günün en yakından takip edilen şirketlerinden biri oldu.",
  },
  {
    baslik: "Goodyear (GOODY)",
    metin:
      "Goodyear için de Rekabet Kurulu tarafından idari para cezası verildiği açıklandı. Şirket tarafında ayrıca yüksek oranlı bedelsiz sermaye artırımı başvurusunun SPK tarafından onaylandığı bildirildi. Bu nedenle GOODY, hem ceza hem de sermaye artırımı başlığıyla öne çıktı.",
  },
  {
    baslik: "Türk Hava Yolları (THYAO)",
    metin:
      "Türk Hava Yolları, Mayıs ayı trafik verilerini paylaştı. Şirketin Mayıs ayında toplam yolcu sayısı yıllık bazda yüzde 3,7 artarak 7,9 milyona yükseldi. Ocak-Mayıs döneminde ise toplam yolcu sayısı yüzde 7,3 artışla 36,4 milyon oldu. Operasyonel veri tarafında günün en önemli bildirimlerinden biri olarak öne çıktı.",
  },
  {
    baslik: "Yapı Kredi Bankası (YKBNK)",
    metin:
      "Yapı Kredi'nin kripto varlık saklama kuruluşu olarak faaliyet izni talebinin olumlu karşılandığı açıklandı. Bankacılık sektöründe kripto varlık saklama hizmetlerine yönelik gelişmelerin artması nedeniyle bu bildirim dikkat çeken başlıklardan biri oldu.",
  },
  {
    baslik: "Alfa Solar Enerji (ALFAS)",
    metin:
      "Alfa Solar Enerji, Astronergy Yüksek Teknoloji'nin yüzde 50'sini satın aldığını duyurdu. Sermaye artırımında 346,1 milyon TL'lik kısmın şirket tarafından nakden karşılandığı açıklandı. Bu gelişme, şirketin güneş enerjisi ekosistemindeki büyüme adımları açısından takip ediliyor.",
  },
  {
    baslik: "Hareket Proje (HRKET)",
    metin:
      "Hareket Proje, 4,1 milyon dolar tutarında yeni iş aldığını açıkladı. Yeni iş ilişkisi, şirketin proje bazlı gelir görünümü açısından pozitif takip edilebilecek gelişmeler arasında yer aldı.",
  },
  {
    baslik: "Rubenis Tekstil (RUBNS)",
    metin:
      "Rubenis Tekstil, Mayıs-Haziran döneminde yurt içinde toplam 2,7 milyon dolar tutarında satış sözleşmesi imzaladığını açıkladı. Şirket, sevkiyatların devam ettiğini bildirdi. Satış sözleşmesi haberi nedeniyle RUBNS günün öne çıkan şirketleri arasında yer aldı.",
  },
  {
    baslik: "Lider Faktoring / Denge Varlık",
    metin:
      "Denge Varlık'ın, Akbank tarafından gerçekleştirilen 407,7 milyon TL tutarındaki tahsili gecikmiş alacak ihalesini kazandığı açıklandı. Varlık yönetimi ve faktoring tarafında portföy alımları günün önemli finans sektörü başlıklarından biri oldu.",
  },
  {
    baslik: "Zorlu Enerji (ZOREN)",
    metin:
      "Zorlu Enerji'nin bağlı ortaklığına devredilen Tekkehamam II JES projesinin sonlandırıldığı, lisans iptal sürecinin başlatıldığı ve Denizli Büyükşehir Belediyesi ihalelerine yönelik 1 yıllık katılım yasağı getirildiği açıklandı. Bu gelişme, günün olumsuz tarafta izlenen bildirimlerinden biri oldu.",
  },
  {
    baslik: "Sermaye Artırımı Haberleri",
    metin:
      "Sermaye artırımı tarafında MERKO'nun yüzde 100 bedelli, TURSG'nin yüzde 100 bedelsiz, ULUFA'nın yüzde 100 bedelsiz ve GOODY'nin yüksek oranlı bedelsiz sermaye artırımı başlıkları öne çıktı. Bu işlemler şirketlerin sermaye yapısında değişim yaratacağı için yatırımcılar tarafından yakından takip ediliyor.",
  },
  {
    baslik: "Pay Geri Alımları",
    metin:
      "Geri alım tarafında AHGAZ, GLYHO, GOKNR ve NTHOL pay geri alım işlemleriyle öne çıktı. Özellikle GOKNR tarafında 2 milyon adet pay geri alımı dikkat çekti. Geri alımlar piyasa fiyatını destekleyici algılanabilir ancak tek başına operasyonel büyüme göstergesi değildir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "11 Haziran 2026 Perşembe KAP Bildirimleri Özeti",
  description:
    "11 Haziran 2026 Perşembe günü KAP'a düşen öne çıkan bildirimlerin özeti: halka arz onayı, Rekabet Kurulu cezaları, yolcu verileri, kripto saklama izni, şirket satın alma işlemleri, yeni iş ilişkileri ve sermaye artırımları.",
  datePublished: "2026-06-11T09:00:00+03:00",
  dateModified: "2026-06-11T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/11-haziran-2026-persembe-kap-bildirimleri-ozeti",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/kap-ozeti.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
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
              src="/kap-ozeti.webp"
              alt="11 Haziran 2026 Perşembe KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              11 Haziran 2026 Perşembe KAP Bildirimleri Özeti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-11" className="text-sm text-slate-500">11 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 11 Haziran 2026 Perşembe günü KAP’a düşen
                öne çıkan bildirimlerde halka arz onayı, Rekabet Kurulu
                cezaları, yolcu trafik verileri, kripto varlık saklama izni,
                şirket satın alma işlemleri, yeni iş ilişkileri, tahsili
                gecikmiş alacak ihaleleri, sermaye artırımları ve pay geri
                alımları dikkat çekti.
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
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{haber.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en önemli başlıkları arasında Beta Enerji halka arz
                onayı, BRISA ve GOODY tarafındaki Rekabet Kurulu cezaları,
                THYAO’nun yolcu verileri, YKBNK’nin kripto varlık saklama izni,
                ALFAS’ın Astronergy hamlesi, HRKET ve RUBNS yeni iş/satış
                açıklamaları ile GOODY, MERKO, TURSG ve ULUFA tarafındaki
                sermaye artırımı haberleri öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="11-haziran-2026-persembe-kap-bildirimleri-ozeti" baslik="11 Haziran 2026 Perşembe KAP Bildirimleri Özeti" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <AuthorBox />

        </article>
      </div>
    </main>
  );
}

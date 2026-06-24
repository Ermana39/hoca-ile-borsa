import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";

export const metadata: Metadata = {
  title: "12 Haziran 2026 Cuma KAP Bildirimleri Özeti",
  description:
    "12 Haziran 2026 Cuma günü KAP'a düşen öne çıkan bildirimlerin özeti: GESAN yeni iş anlaşmaları, VBTYZ SGK sözleşmesi, HALKB dava ve not gelişmesi, banka sendikasyon kredileri, BALSU yatırımı, PGSUS yolcu verileri ve geri alımlar.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/12-haziran-2026-cuma-kap-bildirimleri-ozeti",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/kap-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/kap-ozeti-discover.webp"],
  },
};

const kapHaberleri = [
  {
    baslik: "Girişim Elektrik (GESAN)",
    metin:
      "Girişim Elektrik, Kayseri Elektrik Perakende Satış A.Ş. tarafından düzenlenen ihalede 79,1 milyon TL + KDV bedelle sözleşmeye davet edildiğini açıkladı. Şirket ayrıca Azerbaycan'da 28,3 milyon dolar tutarındaki Cebrayil GES Projesi için anlaşma sağladığını duyurdu. Hem yurt içi hem yurt dışı yeni iş haberleri nedeniyle GESAN günün en dikkat çeken şirketlerinden biri oldu.",
  },
  {
    baslik: "VBT Yazılım (VBTYZ)",
    metin:
      "VBT Yazılım, Sosyal Güvenlik Kurumu ile Batıkent Veri Merkezi kapsamında 439,9 milyon TL tutarında sözleşme imzaladığını açıkladı. Veri merkezi ve yazılım tarafındaki bu büyük ölçekli sözleşme, şirketin iş hacmi açısından pozitif takip edilebilecek önemli KAP bildirimlerinden biri oldu.",
  },
  {
    baslik: "Halkbank (HALKB)",
    metin:
      "Halkbank tarafında iki önemli gelişme öne çıktı. Fitch, bankanın finansal kapasite notunu yukarı revize etti. Ayrıca banka, ABD'deki dava süreci kapsamında yükümlülüklerin yerine getirildiğini ve davanın düşürülmesi için ortak başvuru yapıldığını açıkladı. Bu gelişmeler HALKB açısından günün en kritik başlıkları arasında yer aldı.",
  },
  {
    baslik: "İş Bankası (ISCTR)",
    metin:
      "İş Bankası, 658,8 milyon dolar ve 520,3 milyon euro tutarında 367 gün vadeli sürdürülebilir sendikasyon kredisi sağladığını duyurdu. Bankacılık tarafında dış finansmana erişim ve sürdürülebilir kaynak temini açısından önemli bir açıklama olarak öne çıktı.",
  },
  {
    baslik: "Garanti BBVA (GARAN)",
    metin:
      "Garanti BBVA, farklı vadelerde dolar ve euro cinsi sendikasyon kredileri sağladığını açıkladı. Bankacılık sektöründe dış kaynak temini ve fonlama maliyetleri yakından takip edildiği için GARAN bildirimi günün önemli finansman başlıklarından biri oldu.",
  },
  {
    baslik: "Balsu Gıda (BALSU)",
    metin:
      "Balsu Gıda, Şili'deki üretim tesisi yatırımının ilk fazının tamamlandığını, üretim ve ihracat sevkiyatlarının başladığını açıkladı. Tesisin tamamının 2026 üçüncü çeyrekte tamamlanması bekleniyor. Bu gelişme, şirketin yurt dışı üretim ve ihracat kapasitesi açısından dikkat çekti.",
  },
  {
    baslik: "Pegasus (PGSUS)",
    metin:
      "Pegasus, Mayıs ayı trafik verilerini paylaştı. Şirketin Mayıs ayında toplam yolcu sayısı yıllık bazda yüzde 3 azalarak 3,5 milyon oldu. Ocak-Mayıs döneminde ise toplam yolcu sayısı yüzde 3 artışla 16,6 milyona ulaştı. Havacılık sektöründe operasyonel veri tarafında günün izlenen başlıklarından biri oldu.",
  },
  {
    baslik: "Varlık Yönetimi Haberleri",
    metin:
      "BRKVY, GLCVY ve ARSAN tarafında tahsili gecikmiş alacak portföy ihaleleri öne çıktı. BRKVY 204,9 milyon TL, GLCVY 203,1 milyon TL, ARSAN ise 327 milyon TL büyüklüğündeki portföy ihalelerini kazandı. Bu tür portföy alımları, varlık yönetimi şirketleri için tahsilat potansiyeli ve büyüme açısından önem taşıyor.",
  },
  {
    baslik: "Global Yatırım Holding (GLYHO)",
    metin:
      "Global Yatırım Holding'in bağlı ortaklığı Global Ports Holding, St. Vincent ve Grenadinler Kruvaziyer Limanı'nın geliştirilmesi ve işletilmesine yönelik ön anlaşma imzaladı. Liman işletmeciliği tarafındaki yurt dışı büyüme adımı nedeniyle GLYHO günün dikkat çeken bildirimleri arasında yer aldı.",
  },
  {
    baslik: "Destek Finans Faktoring (DSTKF)",
    metin:
      "TERA'nın sahip olduğu 2.752.377 adet DSTKF payının Toptan Alış Satış işlemiyle pay başına 2.585 TL fiyattan yatırımcılara satılacağı açıklandı. İşlem, pay sahipliği yapısı ve yüksek tutarlı blok satış niteliği nedeniyle yatırımcılar tarafından takip edildi.",
  },
  {
    baslik: "Pay Geri Alımları",
    metin:
      "Geri alım tarafında AHGAZ, ENERY, LOGO ve NTHOL pay geri alım işlemleriyle öne çıktı. Geri alımlar piyasa fiyatını destekleyici algılanabilir ancak tek başına operasyonel büyüme göstergesi değildir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "12 Haziran 2026 Cuma KAP Bildirimleri Özeti",
  description:
    "12 Haziran 2026 Cuma günü KAP'a düşen öne çıkan bildirimlerin özeti: GESAN yeni iş anlaşmaları, VBTYZ SGK sözleşmesi, HALKB dava ve not gelişmesi, banka sendikasyon kredileri, BALSU yatırımı, PGSUS yolcu verileri ve geri alımlar.",
  datePublished: "2026-06-12T09:00:00+03:00",
  dateModified: "2026-06-12T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/12-haziran-2026-cuma-kap-bildirimleri-ozeti",
  author: { "@type": "Person", "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person", name: "Erman Hoca", url: "https://www.hocaileborsa.com/yazar/erman-hoca" },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/kap-ozeti-discover.webp",
  inLanguage: "tr",
};

export default function HaberKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="12 Haziran 2026 Cuma KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              12 Haziran 2026 Cuma KAP Bildirimleri Özeti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-12" className="text-sm text-slate-500">12 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 12 Haziran 2026 Cuma günü KAP’a düşen öne
                çıkan bildirimlerde yeni iş anlaşmaları, veri merkezi
                sözleşmesi, banka finansman haberleri, kredi derecelendirme ve
                dava süreci açıklamaları, yurt dışı üretim yatırımı, havacılık
                yolcu verileri, tahsili gecikmiş alacak portföy ihaleleri ve
                pay geri alımları dikkat çekti.
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
                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en önemli başlıkları arasında GESAN’ın Azerbaycan ve
                Kayseri Elektrik işleri, VBTYZ’nin 439,9 milyon TL’lik SGK
                sözleşmesi, HALKB’nin ABD davası ve Fitch not gelişmesi, ISCTR
                ile GARAN tarafındaki sendikasyon kredileri, BALSU’nun Şili
                üretim yatırımı ve PGSUS yolcu verileri öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="12-haziran-2026-cuma-kap-bildirimleri-ozeti" baslik="12 Haziran 2026 Cuma KAP Bildirimleri Özeti" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
          <HaberAltKisim href="/haber/12-haziran-2026-cuma-kap-bildirimleri-ozeti" />

          <AuthorBox />

        </article>
      </div>
    </main>
  );
}

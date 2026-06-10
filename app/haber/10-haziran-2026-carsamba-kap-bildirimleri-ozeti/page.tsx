import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "10 Haziran 2026 Çarşamba KAP Bildirimleri Özeti",
  description:
    "10 Haziran 2026 Çarşamba günü KAP'a düşen öne çıkan bildirimlerin özeti: yeni iş ilişkileri, satış sözleşmeleri, yatırım teşvikleri, pay devri görüşmeleri, sermaye artırımları, borçlanma araçları ve pay geri alımları.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/10-haziran-2026-carsamba-kap-bildirimleri-ozeti",
  },
};

const kapHaberleri = [
  {
    baslik: "Astor Enerji (ASTOR)",
    metin:
      "Astor Enerji, toplam 72 milyon dolar tutarında yeni iş aldığını açıkladı. Tutar büyüklüğü nedeniyle günün en dikkat çeken KAP başlıklarından biri oldu. Yeni iş ilişkisi, şirketin sipariş büyüklüğü ve gelecek dönem gelir görünümü açısından yatırımcıların yakın takibine girdi.",
  },
  {
    baslik: "Netaş Telekomünikasyon (NETAS)",
    metin:
      "Netaş, 20,4 milyon dolar tutarında yeni iş aldığını duyurdu. Şirketin faaliyet gösterdiği teknoloji ve iletişim altyapısı alanı dikkate alındığında, açıklanan yeni iş ilişkisi ciro ve sipariş görünümü açısından pozitif haber akışı olarak öne çıktı.",
  },
  {
    baslik: "Alves Kablo (ALVES)",
    metin:
      "Alves Kablo tarafında iki ayrı satış açıklaması dikkat çekti. Şirket, 5,3 milyon dolarlık satış gerçekleştirdiğini ve ayrıca 12,4 milyon dolarlık satış sözleşmesi imzaladığını bildirdi. Açıklamalar, ihracat ve satış hacmi tarafında şirketin iş akışını destekleyen gelişmeler arasında yer aldı.",
  },
  {
    baslik: "Efor Gübre (EFOR)",
    metin:
      "Efor Gübre, ikinci çeyrekte 74.000 ton katı yakıt satışı gerçekleştirdiğini ve bu satışlardan 507,5 milyon TL ciro elde ettiğini açıkladı. Operasyonel satış verisi niteliğindeki bu açıklama, şirketin faaliyet hacmi açısından günün öne çıkan bildirimlerinden biri oldu.",
  },
  {
    baslik: "Türk Traktör (TTRAK)",
    metin:
      "Türk Traktör'ün Sakarya Fabrikası'ndaki dijital dönüşüm yatırımı için 606,6 milyon TL tutarında yatırım teşvik belgesi onaylandı. Yatırım teşviki, üretim süreçlerinin modernizasyonu ve verimlilik artışı beklentisi nedeniyle şirket açısından önemli bir gelişme olarak değerlendiriliyor.",
  },
  {
    baslik: "Tekfen Holding (TKFEN)",
    metin:
      "Tekfen Holding sermayesinin yüzde 42,8'ine sahip Can Kültür Sanat Eğitim Kurumları'nın pay devrine yönelik OYAK ile görüşmelere başladığı açıklandı. Olası pay devri süreci, şirketin ortaklık yapısı açısından günün en kritik KAP başlıkları arasında yer aldı.",
  },
  {
    baslik: "Altınkılıç Gıda (ALKLC)",
    metin:
      "Altınkılıç Gıda, süt ürünleri sektöründe uluslararası faaliyet gösteren bir şirketle potansiyel stratejik iş birliği görüşmelerine başladığını açıkladı. Görüşmelerin kesinleşmesi halinde şirketin büyüme ve pazar erişimi açısından yeni bir başlık oluşabilir.",
  },
  {
    baslik: "Sümer Varlık Yönetim (SMRVA)",
    metin:
      "Sümer Varlık, Beşer Finans Faktoring'in 159,6 milyon TL tutarındaki tahsili gecikmiş alacak portföyü ihalesini kazandığını duyurdu. Varlık yönetim şirketleri için bu tür portföy alımları, tahsilat potansiyeli ve büyüme açısından önem taşıyor.",
  },
  {
    baslik: "Dinamik Isı (DNISI)",
    metin:
      "Dinamik Isı, sermayesini 119,7 milyon TL'den 520 milyon TL'ye yükseltmek için yaklaşık yüzde 334,3 oranında bedelsiz sermaye artırımı kararı aldı. Bedelsiz sermaye artırımı kararı, sermaye yapısında yaratacağı değişim nedeniyle yatırımcıların takip ettiği başlıklardan biri oldu.",
  },
  {
    baslik: "Ulusal Faktoring (ULUFA)",
    metin:
      "Ulusal Faktoring sermayesinin yüzde 100 bedelsiz artırımla 540 milyon TL'den yaklaşık 1,1 milyar TL seviyesine yükseltileceği açıklandı. Sermaye artırımı kararı, finans sektörü hisseleri içinde günün dikkat çeken bildirimlerinden biri oldu.",
  },
  {
    baslik: "Bankacılık Tarafında Borçlanma Araçları",
    metin:
      "HALKB, AKBNK ve YKBNK tarafında borçlanma aracı ihraçları öne çıktı. Halkbank için 5 milyar dolara kadar borçlanma aracı ihracı kapsamında yetki verilirken, Akbank 503 gün vadeli 50 milyon euro, Yapı Kredi ise 370 gün vadeli 29 milyon dolar tutarında borçlanma aracı ihracı açıkladı.",
  },
  {
    baslik: "TAV Havalimanları (TAVHL)",
    metin:
      "TAV Havalimanları, 2026 yılında hizmet verilen toplam yolcu sayısının geçen yılın aynı dönemine göre yüzde 2 arttığını, uluslararası yolcu sayısının ise yüzde 1 azaldığını açıkladı. Yolcu verileri, şirketin operasyonel performansı açısından takip edilen önemli göstergeler arasında yer alıyor.",
  },
  {
    baslik: "Pay Geri Alımları",
    metin:
      "Geri alım tarafında AHGAZ, BOBET ve ENERY öne çıktı. ENERY 600.000 adet, AHGAZ 317.336 adet, BOBET ise 173.353 adet pay geri alımı gerçekleştirdi. Geri alımlar fiyatı destekleyici algılanabilse de tek başına operasyonel büyüme göstergesi olarak değerlendirilmemelidir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "10 Haziran 2026 Çarşamba KAP Bildirimleri Özeti",
  description:
    "10 Haziran 2026 Çarşamba günü KAP'a düşen öne çıkan bildirimlerin özeti: yeni iş ilişkileri, satış sözleşmeleri, yatırım teşvikleri, pay devri görüşmeleri, sermaye artırımları, borçlanma araçları ve pay geri alımları.",
  datePublished: "2026-06-10T09:00:00+03:00",
  dateModified: "2026-06-10T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/10-haziran-2026-carsamba-kap-bildirimleri-ozeti",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
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
              alt="10 Haziran 2026 Çarşamba KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              10 Haziran 2026 Çarşamba KAP Bildirimleri Özeti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-10" className="text-sm text-slate-500">10 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 10 Haziran 2026 Çarşamba günü KAP’a düşen öne
                çıkan bildirimlerde yeni iş ilişkileri, satış sözleşmeleri,
                yatırım teşvikleri, ortaklık yapısına yönelik görüşmeler,
                sermaye artırımı kararları, borçlanma aracı ihraçları,
                operasyonel veriler ve pay geri alım işlemleri dikkat çekti.
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
                Günün en önemli başlıkları arasında ASTOR’un 72 milyon dolarlık
                yeni işi, NETAS’ın 20,4 milyon dolarlık iş açıklaması,
                ALVES’in satış sözleşmeleri, TTRAK’ın 606,6 milyon TL’lik
                yatırım teşviki, TKFEN’de olası pay devri görüşmesi ve DNISI ile
                ULUFA tarafındaki bedelsiz sermaye artırımı kararları öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="10-haziran-2026-carsamba-kap-bildirimleri-ozeti" baslik="10 Haziran 2026 Çarşamba KAP Bildirimleri Özeti" />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

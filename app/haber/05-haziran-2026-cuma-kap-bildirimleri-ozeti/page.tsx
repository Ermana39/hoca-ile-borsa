import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "05 Haziran 2026 Cuma KAP Bildirimleri Özeti",
  description: "05 Haziran 2026 Cuma günü KAP'a düşen öne çıkan bildirimlerin özeti: ihracat haberleri, gayrimenkul yatırımları, sigorta prim üretimleri, temettü kararları ve sermaye artırımları.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/05-haziran-2026-cuma-kap-bildirimleri-ozeti",
  },
};

const kapHaberleri = [
  {
    baslik: "Akhan Un (AKHAN)",
    metin:
      "Akhan Un, Gana’ya makarna ihracatı kapsamında 34,32 milyon dolarlık satış gerçekleştirdiğini açıkladı. Şirket, bu ihracatın ciro, FAVÖK ve kârlılığa olumlu katkı sağlamasını bekliyor. Yurt dışı satış ve ihracat tarafında öne çıkan pozitif haberlerden biri oldu.",
  },
  {
    baslik: "Akiş GYO (AKSGY)",
    metin:
      "Akiş GYO’nun bağlı ortaklığı Akiş Global, Berlin’de yaklaşık 155 konutluk gayrimenkul projesi geliştirecek Edge T82 B.V.’ye sermaye artırımı yoluyla yüzde 50 ortak oldu. Projenin yaklaşık 14,7 milyon euro sermaye ihtiyacı bulunduğu ve ortakların payları oranında finansman sağlayacağı açıklandı. Bu gelişme, şirketin yurt dışı gayrimenkul yatırımları açısından önemli bir adım olarak öne çıkıyor.",
  },
  {
    baslik: "Gelecek Varlık Yönetimi (GLCVY)",
    metin:
      "Gelecek Varlık, İş Bankası’nın tahsili gecikmiş alacak satışında 827,5 milyon TL anapara büyüklüğündeki iki karma portföyün ihalesini en yüksek teklifi vererek kazandı. Varlık yönetim şirketleri açısından bu tür portföy alımları büyüme ve tahsilat potansiyeli nedeniyle önemli görülüyor.",
  },
  {
    baslik: "Birikim Varlık Yönetimi (BRKVY)",
    metin:
      "Birikim Varlık, İş Bankası’nın gerçekleştirdiği tahsili gecikmiş alacak satışında 380,7 milyon TL anaparaya sahip bireysel nitelikli portföyün ihalesini kazandı. GLCVY ile birlikte varlık yönetim şirketleri günün dikkat çeken başlıkları arasında yer aldı.",
  },
  {
    baslik: "Anadolu Hayat / Anadolu Sigorta / Agesa",
    metin:
      "Sigorta ve emeklilik şirketleri tarafında prim üretim verileri öne çıktı. Anadolu Hayat’ın mayıs ayı brüt prim üretimi 9,63 milyar TL oldu. Anadolu Sigorta’nın ilk beş aylık brüt prim üretimi 45,95 milyar TL’ye ulaşırken geçen yılın aynı dönemine göre yüzde 24,9 artış kaydetti. Agesa’nın ilk beş aylık toplam prim üretimi ise 12,7 milyar TL oldu ve yıllık bazda yüzde 46 arttı.",
  },
  {
    baslik: "Zeray GYO (ZERGY)",
    metin:
      "Zeray GYO, Kocaeli Başiskele’deki parseller üzerinde proje geliştirilmesi amacıyla prensip anlaşmasına vardığını açıkladı. Şirket, rezidans, ticari alan ve karma kullanımlı projelerin değerlendirildiği yatırımda kendi payına düşen büyüklüğün yaklaşık 2,5 milyar TL seviyesinde olmasını hedefliyor. Nihai sözleşme sonrası detayların paylaşılacağı belirtildi.",
  },
  {
    baslik: "CW Enerji (CWENE)",
    metin:
      "CW Enerji, ABD’de faaliyet gösteren bir firma ile iki yıllık lisans anlaşması imzaladı. Anlaşma kapsamında CW Enerji markası altında yıllık yaklaşık 100 MW güneş paneli üretimi yapılması ve ürünlerin ABD ile Kanada pazarlarında kullanılması planlanıyor. Bu haber, şirketin Kuzey Amerika pazarına açılımı açısından önemli bir gelişme olarak öne çıktı.",
  },
  {
    baslik: "Ebebek (EBEBK)",
    metin:
      "Ebebek, Mayıs 2026’da mağaza ve e-ticaret kanallarında toplam 11,28 milyon adet ürün satışı gerçekleştirdi. Geçen yılın aynı ayında bu rakam 8,89 milyon adet seviyesindeydi. Yılın ilk beş ayında toplam satış adedi 50 milyon seviyesini aşarken, yıllık bazda yaklaşık yüzde 22 artış kaydedildi. Perakende tarafında olumlu operasyonel veri olarak değerlendirilebilir.",
  },
  {
    baslik: "Türk Hava Yolları (THYAO)",
    metin:
      "Türk Hava Yolları, Air Europa yatırım sürecinin 2026 yılında tamamlanmasının beklendiğini açıkladı. Bu gelişme, THYAO’nun uluslararası büyüme ve stratejik yatırım planları açısından takip edilmesi gereken başlıklardan biri oldu.",
  },
  {
    baslik: "Yapı Kredi / QNB Finansbank",
    metin:
      "Bankacılık tarafında fonlama ve borçlanma haberleri öne çıktı. Yapı Kredi farklı vadelerde dolar ve euro cinsi sendikasyon kredileri sağladı. QNBTR tarafında ise yurt dışında 371 gün vadeli 25,6 milyon euro tutarında borçlanma aracı ihracı ve 4 milyar dolara kadar borçlanma aracı ihracı başvurusunun SPK tarafından onaylanması dikkat çekti.",
  },
  {
    baslik: "Sermaye Artırımı Haberleri",
    metin:
      "Sermaye işlemleri tarafında BLCYT’nin yüzde 900 bedelsiz sermaye artırımı başvurusu yapıldı. IHLAS’ın yüzde 100 bedelli sermaye artırımı başvurusu SPK tarafından onaylandı. SASA’nın tahsisli sermaye artırımı başvurusu onaylanırken, ULUFA’nın yüzde 100 bedelsiz sermaye artırımı başvurusu da SPK tarafından onaylandı.",
  },
  {
    baslik: "Kontrolmatik (KONTR)",
    metin:
      "Kontrolmatik’in nitelikli yatırımcılara ihraç ettiği iki borçlanma aracına ilişkin 05 Haziran 2026 tarihli kupon ödemeleri gerçekleştirilemedi. Bu nedenle ilgili borçlanma araçlarının Borçlanma Araçları Piyasası Gözaltı Pazarı’na alınmasına karar verildi. Günün en dikkat çeken olumsuz haberlerinden biri olarak öne çıktı.",
  },
  {
    baslik: "Temettü Kararları",
    metin:
      "Temettü kararlarında OZSUB, BASGZ ve FORTE öne çıktı. OZSUB pay başına brüt 0,6167 TL, BASGZ pay başına brüt 2,00 TL, FORTE ise pay başına brüt 0,52 TL temettü dağıtımı yönünde karar aldı. Ayrıca bazı şirketler kâr payı dağıtmama kararı açıkladı.",
  },
  {
    baslik: "Pay Geri Alımları",
    metin:
      "Geri alım tarafında NTHOL, ENERY, AHGAZ ve GLYHO öne çıktı. NTHOL 200.000 adet, ENERY 200.000 adet, AHGAZ 200.000 adet ve GLYHO 500.000 adet pay geri alımı gerçekleştirdi. Geri alımlar fiyatı destekleyici algılanabilir ancak tek başına operasyonel büyüme haberi değildir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "05 Haziran 2026 Cuma KAP Bildirimleri Özeti",
  description:
    "05 Haziran 2026 Cuma günü KAP'a düşen öne çıkan bildirimlerin özeti: ihracat haberleri, gayrimenkul yatırımları, sigorta prim üretimleri, temettü kararları ve sermaye artırımları.",
  datePublished: "2026-06-05T09:00:00+03:00",
  dateModified: "2026-06-05T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/05-haziran-2026-cuma-kap-bildirimleri-ozeti",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/haber950.png",
  inLanguage: "tr",
};

export default function Haber950Page() {
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
              src="/haber950.webp"
              alt="05 Haziran 2026 Cuma KAP Bildirimleri Özeti"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              05 Haziran 2026 Cuma KAP Bildirimleri Özeti
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Finans
              </span>
              <time dateTime="2026-06-05" className="text-sm text-slate-500">5 Haziran 2026</time>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">Hoca İle Borsa</span>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Borsa İstanbul’da 05 Haziran 2026 Cuma günü KAP’a düşen öne
                çıkan bildirimlerde ihracat haberleri, yurt dışı gayrimenkul
                yatırımı, tahsili gecikmiş alacak portföy ihaleleri, sigorta
                prim üretimleri, lisans anlaşmaları, sermaye artırımı
                başvuruları, borçlanma aracı gelişmeleri, temettü kararları ve
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
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün en önemli başlıkları arasında AKHAN’ın 34,32 milyon
                dolarlık ihracatı, AKSGY’nin Berlin projesi ortaklığı, GLCVY ve
                BRKVY’nin tahsili gecikmiş alacak portföy ihaleleri, CWENE’nin
                Kuzey Amerika lisans anlaşması, EBEBK’in satış hacmindeki artış,
                BLCYT, IHLAS, SASA ve ULUFA tarafındaki sermaye artırımı
                haberleri ile KONTR borçlanma araçlarının Gözaltı Pazarı süreci
                öne çıktı.
              </div>
              <HaberIlgiliBolumler slug="05-haziran-2026-cuma-kap-bildirimleri-ozeti" baslik="05 Haziran 2026 Cuma KAP Bildirimleri Özeti" />



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
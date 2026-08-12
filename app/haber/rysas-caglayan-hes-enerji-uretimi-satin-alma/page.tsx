import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "RYSAS Çağlayan HES Enerji Üretim A.Ş.’nin Tamamını Satın Aldı",
  description:
    seoAciklamasi("Reysaş Taşımacılık ve Lojistik, Çağlayan HES Enerji Üretim A.Ş.’nin %100 hissesini 6,93 milyon dolar bedelle satın aldığını açıkladı. Şirket, enerji maliyetlerini azaltmayı ve karbon ayak izini düşürmeyi hedefliyor.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/rysas-caglayan-hes-enerji-uretimi-satin-alma",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/rysas-caglayan-hes-enerji-uretimi-satin-alma.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/rysas-caglayan-hes-enerji-uretimi-satin-alma.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "RYSAS Çağlayan HES Enerji Üretim A.Ş.’nin Tamamını Satın Aldı",
  description:
    "Reysaş Taşımacılık ve Lojistik, Çağlayan HES Enerji Üretim A.Ş.’nin %100 hissesini 6,93 milyon dolar bedelle satın aldığını açıkladı. Şirket, enerji maliyetlerini azaltmayı ve karbon ayak izini düşürmeyi hedefliyor.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/rysas-caglayan-hes-enerji-uretimi-satin-alma",
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
  image: "https://www.hocaileborsa.com/rysas-caglayan-hes-enerji-uretimi-satin-alma.webp",
};

export default function RysasCaglayanHesEnerjiUretimiSatinAlmaPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/rysas-caglayan-hes-enerji-uretimi-satin-alma.webp"
              alt="RYSAS Çağlayan HES Enerji Üretim satın alma haberi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                RYSAS Çağlayan HES Enerji Üretim A.Ş.’nin Tamamını Satın Aldı
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                <time dateTime={haberSaati}>{haberTarihi}</time> ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Reysaş Taşımacılık ve Lojistik Ticaret A.Ş. (RYSAS), enerji
                alanındaki yatırımlarına ilişkin önemli bir KAP açıklaması yaptı.
                Şirket, Çağlayan HES Enerji Üretim A.Ş.’nin %100 hissesini
                6.925.450 ABD Doları bedelle satın aldığını duyurdu.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  RYSAS, Trabzon ili Hayrat ilçesi Sarmaşık mevkiinde bulunan
                  6,2 MW kurulu güce sahip Çağlayan HES Enerji Üretim A.Ş.’nin
                  tamamını satın aldı. Satın alma işlemi 1 Temmuz 2026 tarihinde
                  tamamlandı.
                </p>
                <p>
                  KAP açıklamasında, edinilen finansal duran varlığın faaliyet
                  konusu elektrik enerjisi üretimi olarak belirtildi. Satın alma
                  bedelinin tamamının şirket özkaynaklarından ve peşin olarak
                  karşılandığı açıklandı.
                </p>
                <p>
                  İşlem sonrasında RYSAS’ın Çağlayan HES Enerji Üretim A.Ş.’deki
                  pay ve oy hakkı oranı %100 seviyesine ulaştı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Satın alma bedeli ve kapsamı
                </h2>
                <p>
                  KAP bildirimine göre satın alınan payların nominal tutarı
                  9.985.800 TL, beher pay alış fiyatı ise 0,65 ABD Doları olarak
                  açıklandı. Toplam satın alma bedeli 6.925.450 ABD Doları oldu.
                </p>
                <p>
                  Şirket, işlem değerinin son yıllık finansal tablolara göre oluşan
                  hasılat tutarına oranını %9,6; edinilen finansal duran varlığın
                  son finansal tablodaki aktif toplamına oranını ise %0,65 olarak
                  duyurdu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  RYSAS bu satın almayı neden yaptı?
                </h2>
                <p>
                  Şirket açıklamasında satın alma gerekçesi, enerji maliyetlerini
                  mahsuplaşma yöntemiyle azaltmak, elektrik fiyat artışlarının
                  etkisini sınırlandırmak, karbon ayak izini düşürmek ve
                  sürdürülebilirlik prensipleri doğrultusunda çevrenin korunmasına
                  katkı sağlamak olarak ifade edildi.
                </p>
                <p>
                  Bu yönüyle işlem, yalnızca finansal duran varlık edinimi değil;
                  aynı zamanda şirketin lojistik faaliyetlerinde önemli maliyet
                  kalemlerinden biri olan enerji giderlerini daha yönetilebilir
                  hale getirme hamlesi olarak da okunabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  RYSAS yatırımcıları için neden önemli?
                </h2>
                <p>
                  Lojistik şirketlerinde enerji giderleri operasyonel maliyetler
                  üzerinde doğrudan etkili olabilir. RYSAS’ın HES varlığı edinmesi,
                  ilerleyen dönemde enerji maliyetlerini dengeleme ve yenilenebilir
                  enerji tarafında varlık tabanını güçlendirme potansiyeli taşıyor.
                </p>
                <p>
                  Buna karşılık yatırımcıların satın alınan tesisin üretim
                  performansını, bakım maliyetlerini, mahsuplaşma etkisini ve
                  finansallara yansıma hızını takip etmesi gerekir. KAP açıklamasında
                  şirketin faaliyetlerine etkisi “olumlu” olarak belirtilse de
                  gerçek katkı zaman içinde finansal sonuçlarda görülecektir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Reysaş Taşımacılık ve Lojistik, depolama, taşımacılık ve lojistik
                  hizmetleri alanında faaliyet gösteren köklü bir şirkettir.
                  Şirketin faaliyetlerinde operasyonel verimlilik, depo ağı,
                  taşıma kapasitesi ve maliyet yönetimi önemli başlıklar arasında
                  yer alır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  RYSAS’ın Çağlayan HES Enerji Üretim A.Ş.’nin tamamını satın alması,
                  şirketin enerji maliyetlerini kontrol altına alma stratejisi
                  açısından pozitif değerlendirilebilir. Özellikle elektrik
                  maliyetlerinin lojistik operasyonlarda etkili olduğu dikkate
                  alındığında, yenilenebilir enerji varlığı edinimi orta vadeli
                  maliyet yönetimi açısından önem taşıyor.
                </p>
                <p>
                  İşlemin şirket özkaynaklarından karşılanması ve peşin yapılması,
                  finansman yapısı açısından ayrıca izlenmeli. Satın alma bedeli
                  şirket ölçeğine göre yönetilebilir görünse de, yatırımın gerçek
                  katkısı tesisin üretim performansı ve enerji mahsuplaşmasıyla
                  netleşecektir.
                </p>
                <p>
                  Bu nedenle haber kısa vadede pozitif algı yaratabilecek nitelikte
                  olsa da yatırımcılar için esas takip başlığı, bu satın almanın
                  ilerleyen dönemlerde maliyetlere ve kârlılığa ne ölçüde katkı
                  sağlayacağı olacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Şirket, enerji alanındaki yeni yatırım fırsatlarını değerlendirmeye
                  devam edeceğini ve oluşabilecek gelişmeleri kamuoyuyla paylaşacağını
                  açıkladı. Bu nedenle RYSAS’ın enerji yatırımları tarafındaki yeni
                  adımları ve finansal tablolara yansıyacak katkı yakından izlenecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                RYSAS, 6,2 MW kurulu güce sahip Çağlayan HES Enerji Üretim A.Ş.’nin
                %100 hissesini 6.925.450 ABD Doları bedelle satın aldı. Şirket,
                işlemle enerji maliyetlerini azaltmayı ve karbon ayak izini düşürmeyi
                hedefliyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Yenilenebilir enerji varlığı edinimi, enerji maliyetlerini
                dengeleme ve sürdürülebilirlik stratejisini güçlendirme açısından
                destekleyici. Finansal katkı, üretim performansı ve mahsuplaşma
                etkisiyle zaman içinde netleşecek.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Satın alma bedeli peşin ve özkaynaklardan karşılandı. Bu nedenle
                yatırımın kısa vadeli nakit çıkışı ile orta vadeli enerji maliyeti
                avantajı birlikte değerlendirilmelidir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622437"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              01.07.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/rysas-caglayan-hes-enerji-uretimi-satin-alma" />
</article>
</div>
    </main>
  );
}

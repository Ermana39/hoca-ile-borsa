import { serializeJsonLd } from "@/lib/json-ld";
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
  title: "BETAE İlk İşlem Gününü Tavan Fiyatla Kapattı",
  description:
    seoAciklamasi("Beta Enerji ve Teknoloji (BETAE), ilk işlem gününü 44,00 TL tavan fiyattan kapattı. Gün içi el değiştiren lot oranı %0,12 seviyesinde gerçekleşti.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/beta-enerji-ve-teknoloji-ilk-islem-gununu-tavan-fiyatla-kapatti",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/beta-enerji-ve-teknoloji-ilk-islem-gununu-tavan-fiyatla-kapatti.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/beta-enerji-ve-teknoloji-ilk-islem-gununu-tavan-fiyatla-kapatti.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "BETAE İlk İşlem Gününü Tavan Fiyatla Kapattı",
  description:
    "Beta Enerji ve Teknoloji (BETAE), ilk işlem gününü 44,00 TL tavan fiyattan kapattı. Gün içi el değiştiren lot oranı %0,12 seviyesinde gerçekleşti.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/beta-enerji-ve-teknoloji-ilk-islem-gununu-tavan-fiyatla-kapatti",
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
  image: "https://www.hocaileborsa.com/beta-enerji-ve-teknoloji-ilk-islem-gununu-tavan-fiyatla-kapatti.webp",
};

export default function BetaEnerjiVeTeknolojiIlkIslemGununuTavanFiyatlaKapattiPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
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
              src="/beta-enerji-ve-teknoloji-ilk-islem-gununu-tavan-fiyatla-kapatti.webp"
              alt="Beta Enerji ve Teknoloji ilk işlem gününü tavan fiyatla kapattı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                BETA Enerji ve Teknoloji İlk İşlem Gününü Tavan Fiyatla Kapattı
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
                Beta Enerji ve Teknoloji A.Ş. (BETAE), Borsa İstanbul’daki ilk
                işlem gününü 44,00 TL tavan fiyatla tamamladı. Halka arz fiyatı
                40,00 TL olan pay, ilk günden %10 prim yaparken 28 lot alan bir
                yatırımcı için teorik kazanç 112,00 TL seviyesinde oluştu.
              </p>

              <p>
                Görselde yer alan ilk gün verileri, hissede güçlü talebin devam
                ettiğini gösteriyor. Gün içi el değiştiren lot sayısı 70.412 olurken,
                gün içi el değiştiren lot oranı %0,12 seviyesinde kaldı. Gün sonunda
                tavan-tabanda bekleyen lot miktarı 56.041.104 olarak görülürken bu
                rakamın toplama oranı %92,25 seviyesinde gerçekleşti.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  BETAE, ilk işlem gününde halka arz fiyatı olan 40,00 TL’nin üzerine
                  çıkarak seansı 44,00 TL tavan fiyatla kapattı. Böylece hisse ilk
                  gün yatırımcısına %10 oranında getiri sağladı.
                </p>
                <p>
                  Halka açık payların toplam piyasa değeri 2.673.000.000 TL olarak
                  hesaplanırken, tavandaki emir başına düşen lot miktarı 5.160 oldu.
                  Tavandaki emir sayısı ise 13.058 olarak ekrana yansıdı.
                </p>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:p-5">
                  <h3 className="text-base font-bold text-zinc-900 md:text-lg">
                    İlk işlem gününün öne çıkan verileri
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
                    <li>
                      <strong>Hisse:</strong> BETAE
                    </li>
                    <li>
                      <strong>Halka arz fiyatı:</strong> 40,00 TL
                    </li>
                    <li>
                      <strong>Kapanış fiyatı:</strong> 44,00 TL
                    </li>
                    <li>
                      <strong>Kazanç (28 lot):</strong> 112,00 TL
                    </li>
                    <li>
                      <strong>Kazanç oranı:</strong> %10,00
                    </li>
                    <li>
                      <strong>Gün içi el değiştiren lot:</strong> 70.412
                    </li>
                    <li>
                      <strong>Gün içi el değiştiren lot oranı:</strong> %0,12
                    </li>
                    <li>
                      <strong>Toplam el değiştiren lot oranı:</strong> %0,12
                    </li>
                    <li>
                      <strong>Tavan/Taban lot:</strong> 56.041.104
                    </li>
                    <li>
                      <strong>Tavan/Taban lotun toplama oranı:</strong> %92,25
                    </li>
                    <li>
                      <strong>Tavan/Taban lotun piyasa değeri:</strong> 2.465.808.576,00 TL
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  İlk işlem gününde tavan kapanış görülmesi, hissede arz sonrası
                  talebin güçlü kaldığına işaret eder. Özellikle gün içi el değiştiren
                  lot oranının yalnızca %0,12 seviyesinde kalması, ilk gün dağıtılan
                  lotların büyük kısmının satışa konu olmadığını ve çözülmenin oldukça
                  sınırlı kaldığını gösteriyor.
                </p>
                <p>
                  Gün sonunda 56.041.104 lotluk tavan-tabanda bekleyen miktar ve bu
                  miktarın toplama oranının %92,25 olması da alım iştahının yüksek
                  kaldığını gösteren önemli veriler arasında yer alıyor. Yani ilk
                  günde yalnızca fiyat hareketi değil, emir derinliği tarafında da
                  güçlü bir tablo oluşmuş durumda.
                </p>
                <p>
                  Halka arz yatırımcıları açısından 40,00 TL’den 44,00 TL’ye gelen
                  fiyat, ilk gün için olumlu bir başlangıç anlamı taşıyor. Ancak ilk
                  gün tavan kapanış tek başına kalıcı yönün garantisi değildir.
                  Sonraki seanslarda emir çözülmesi, hacim ve lot devir hızı daha da
                  önemli hale gelir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Aracı kurum dağılımında hangi taraf öne çıktı?
                </h2>
                <p>
                  İlk işlem gününe ilişkin aracı kurum dağılımında alıcı tarafında
                  İnfo 22.501 lot ile ilk sırada yer aldı. Onu 21.559 lot ile
                  Colendi ve 19.559 lot ile Deniz izledi. Alıcı tarafındaki “Diğer”
                  kurumların toplamı ise 3.298 lot oldu.
                </p>
                <p>
                  Satıcı tarafında ise İş Yatırım 18.173 lot ile öne çıkarken,
                  Ziraat 17.302 lot ve Garanti 7.278 lot ile takip etti. Satıcı
                  tarafında “Diğer” kurumların toplamı 24.164 lot olarak gerçekleşti.
                </p>
                <p>
                  Bu dağılım, ilk gün işlemlerinin sınırlı bir çözülmeyle gerçekleştiğini
                  ve asıl ağırlığın tavan taraftaki bekleyen talepte toplandığını
                  gösteriyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Beta Enerji ve Teknoloji A.Ş., halka arz sonrası Borsa İstanbul’da
                  <strong> BETAE </strong>
                  koduyla işlem görmeye başlayan yeni şirketlerden biri olarak öne
                  çıkıyor. Halka arz sonrası ilk işlem günündeki performans, yatırımcı
                  ilgisinin ve kısa vadeli piyasa beklentisinin en yakından izlendiği
                  başlıklardan biri kabul ediliyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  BETAE’nin ilk işlem gününü tavan fiyatla kapatması, halka arz
                  sonrası fiyatlamanın güçlü başladığını gösteriyor. %10’luk ilk gün
                  getirisi, özellikle kısa vadeli halka arz performansını izleyen
                  yatırımcılar açısından dikkat çekici bir başlangıç niteliğinde.
                </p>
                <p>
                  Burada en önemli veri sadece fiyatın 44,00 TL’ye yükselmesi değil;
                  aynı zamanda gün içi devir oranının düşük, tavan-tabanda bekleyen
                  lot miktarının ise oldukça yüksek olmasıdır. Bu yapı, ilk gün
                  satış baskısının sınırlı kaldığını ve talebin büyük ölçüde korunduğunu
                  düşündürüyor.
                </p>
                <p>
                  Yine de ilk işlem günü verileri tek başına yeterli değildir.
                  Halka arz sonrası sağlıklı yorum yapabilmek için takip eden
                  seanslardaki hacim, tavan emirlerinin çözülme hızı, günlük lot
                  devri ve yatırımcı davranışı birlikte değerlendirilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte yatırımcıların en çok takip edeceği başlıklar;
                  tavan emirlerinin devam edip etmeyeceği, günlük el değiştiren lot
                  oranının yükselip yükselmeyeceği ve fiyatın sonraki seanslarda nasıl
                  dengeleneceği olacak.
                </p>
                <p>
                  Özellikle ilk birkaç işlem gününde aracı kurum dağılımı, tavan
                  bekleyen lot miktarı ve toplam işlem hacmi, BETAE’de kısa vadeli
                  görünümün şekillenmesinde belirleyici olmaya devam edecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                Beta Enerji ve Teknoloji (BETAE), Borsa İstanbul’daki ilk işlem
                gününü 44,00 TL tavan fiyatla tamamladı. Gün içi el değiştiren lot
                oranı %0,12 olurken, tavan-tabanda bekleyen lot miktarı 56.041.104
                seviyesinde gerçekleşti.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — İlk işlem gününde tavan kapanış, düşük lot çözülmesi ve
                yüksek tavan bekleyen emir miktarı hissede güçlü talebe işaret ediyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                İlk işlem günündeki güçlü görünüm önemli olsa da tek başına kalıcı
                eğilimi göstermez. Sonraki seanslarda tavan emir çözülmesi, hacim ve
                günlük lot devir oranı ayrıca takip edilmelidir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                İlk işlem gününe ait piyasa ekranı verileri, halka arz fiyat bilgisi,
                tavan emir istatistikleri ve aracı kurum dağılımı.
              </p>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/beta-enerji-ve-teknoloji-ilk-islem-gununu-tavan-fiyatla-kapatti" />
</article>
</div>
    </main>
  );
}
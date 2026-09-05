import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: {
    absolute: "SpaceX Halka Arzı: Nasdaq, S&P 500 ve Dow Jones Yükseldi",
  },
  description:
    seoAciklamasi("SpaceX halka arzı sonrası New York borsasında yükseliş görüldü. Nasdaq, S&P 500 ve Dow Jones endekslerinde haftanın son işlem gününde pozitif kapanış gerçekleşti.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/spacex-halka-arzi-abd-borsalari-yukseldi",
  },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.hocaileborsa.com/gunluk-abd-borsalari-ozeti-discover.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/gunluk-abd-borsalari-ozeti-discover.webp"],
  },
};

const piyasaBasliklari = [
  {
    baslik: "ABD Borsalarında Pozitif Kapanış",
    metin:
      "New York borsasında haftanın son işlem gününde alıcılı bir seyir öne çıktı. Kapanışta Dow Jones endeksi yüzde 0,70 yükselerek 51.202,26 puana ulaştı. S&P 500 endeksi yüzde 0,50 artışla 7.431,46 puana, Nasdaq endeksi ise yüzde 0,31 kazançla 25.888,84 puana çıktı.",
  },
  {
    baslik: "SpaceX Halka Arzı Piyasa Moralini Destekledi",
    metin:
      "Elon Musk'ın uzay şirketi SpaceX, hisse başına 135 dolardan halka arz edildi. Nasdaq’ta 150 dolardan işlem görmeye başlayan SpaceX hisseleri, gün içinde 176,52 dolara kadar yükseldi. Hisse günü yüzde 19,2 primle 160,95 dolardan tamamladı.",
  },
  {
    baslik: "Uzay Sektörü Hisselerinde Ayrışma Dikkat Çekti",
    metin:
      "SpaceX’in güçlü başlangıcına karşın uzay ve uydu sektöründeki bazı şirketlerde satış baskısı görüldü. EchoStar Corp ve Rocket Lab hisseleri yaklaşık yüzde 11 düşerken, Redwire yüzde 11,5, AST SpaceMobile ise yüzde 15,5 değer kaybetti.",
  },
  {
    baslik: "Orta Doğu İyimserliği Risk İştahını Artırdı",
    metin:
      "Piyasalarda Orta Doğu kaynaklı gerilimlerin anlaşmayla azalabileceğine yönelik beklentiler de fiyatlamaları destekledi. ABD tarafında yapılan açıklamalarda, İran ile anlaşmanın kısa süre içinde imzalanabileceğine yönelik mesajlar risk iştahını artırdı.",
  },
  {
    baslik: "Petrol Fiyatlarında Sert Geri Çekilme",
    metin:
      "Anlaşma beklentilerinin piyasalardaki en önemli etkilerinden biri petrol tarafında görüldü. Hürmüz Boğazı’na ilişkin olumlu beklentiler ve jeopolitik risklerin azalabileceği düşüncesiyle Brent petrolün vadeli varil fiyatı yaklaşık yüzde 4 düşüşle 86,78 dolara geriledi.",
  },
  {
    baslik: "Petrol Düşüşü Enflasyon Beklentileri İçin Olumlu Algılandı",
    metin:
      "Petrol fiyatlarındaki geri çekilme, küresel enflasyon görünümü açısından piyasalar tarafından olumlu karşılandı. Enerji fiyatlarında yaşanacak düşüşün, özellikle ABD’de enflasyon baskılarını sınırlayabileceği değerlendiriliyor.",
  },
  {
    baslik: "Tüketici Güveni Beklentileri Aştı",
    metin:
      "ABD’de Michigan Üniversitesi tarafından açıklanan tüketici güven endeksi haziran ayında 48,9 seviyesine yükselerek beklentilerin üzerinde gerçekleşti. Veri, tüketici tarafında zayıf görünümün sürdüğünü gösterse de beklentilerin aşılması piyasalar açısından destekleyici oldu.",
  },
  {
    baslik: "Enflasyon Beklentileri Geriledi",
    metin:
      "Tüketicilerin kısa vadeli enflasyon beklentisi haziran ayında yüzde 4,8’den yüzde 4,6’ya geriledi. Ancak beklentilerin, jeopolitik gerilimler öncesindeki seviyelerin üzerinde kalmaya devam etmesi dikkat çekti.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "SpaceX Halka Arzı Sonrası ABD Borsaları Yükseldi: Nasdaq, S&P 500 ve Dow Jones Haftayı Artıda Kapattı",
  description:
    "SpaceX halka arzı sonrası New York borsasında yükseliş görüldü. Nasdaq, S&P 500 ve Dow Jones endekslerinde haftanın son işlem gününde pozitif kapanış gerçekleşti.",
  datePublished: "2026-06-13T00:30:00+03:00",
  dateModified: "2026-06-13T00:30:00+03:00",
  url: "https://www.hocaileborsa.com/haber/spacex-halka-arzi-abd-borsalari-yukseldi",
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
  image: "https://www.hocaileborsa.com/gunluk-abd-borsalari-ozeti-discover.webp",
  inLanguage: "tr",
};

export default function HaberSpacexHalkaArziAbdBorsalariPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <Image
              src="/gunluk-abd-borsalari-ozeti-discover.webp"
              alt="Günlük ABD borsaları özeti"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
priority
              className="object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SpaceX Halka Arzı Sonrası ABD Borsaları Yükseldi: Nasdaq, S&P 500
              ve Dow Jones Haftayı Artıda Kapattı
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Küresel Piyasalar
              </span>
              <time dateTime="2026-06-13" className="text-sm text-slate-500">
                13 Haziran 2026
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
                New York borsasında haftanın son işlem gününde pozitif bir
                kapanış gerçekleşti. SpaceX’in halka arz sonrası Nasdaq’ta işlem
                görmeye başlaması ve Orta Doğu kaynaklı jeopolitik risklerin
                azalabileceğine yönelik beklentiler, ABD pay piyasalarında
                alımları destekledi.
              </p>

              <p>
                Kapanışta Dow Jones endeksi yüzde 0,70 artışla 51.202,26 puana
                yükseldi. S&P 500 endeksi yüzde 0,50 değer kazanarak 7.431,46
                puana, Nasdaq endeksi ise yüzde 0,31 artışla 25.888,84 puana
                çıktı. Böylece Wall Street’te haftanın son işlem günü teknoloji,
                büyüme ve risk iştahı odaklı fiyatlamalarla tamamlandı.
              </p>

              <div className="space-y-5">
                {piyasaBasliklari.map((haber) => (
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
                Günün ana mesajı; SpaceX’in halka arz sonrası güçlü başlangıcı,
                ABD borsalarında risk iştahını desteklerken, Orta Doğu’da anlaşma
                beklentileri petrol fiyatlarını aşağı çekti. Bu tablo, haftanın
                son işlem gününde Wall Street tarafında pozitif kapanışı
                beraberinde getirdi.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Kısa vadede piyasalar için en kritik başlıklar; SpaceX
                hisselerinin halka arz sonrası performansı, petrol fiyatlarındaki
                düşüşün enflasyon beklentilerine etkisi, ABD tahvil faizlerinin
                yönü ve Fed’den gelecek mesajlar olacak.
              </div>

              <HaberIlgiliBolumler
                slug="spacex-halka-arzi-abd-borsalari-yukseldi"
                baslik="SpaceX Halka Arzı Sonrası ABD Borsaları Yükseldi"
              />

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Hoca ile Global Piyasalar
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      ABD borsaları, küresel piyasalar ve günlük piyasa özetleri
                      için YouTube kanalımızı takip edebilirsiniz.
                    </p>
                  </div>

                  <a
                    href="https://www.youtube.com/@HocaileGlobalPiyasalar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
                  >
                    YouTube Kanalı
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/spacex-halka-arzi-abd-borsalari-yukseldi" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

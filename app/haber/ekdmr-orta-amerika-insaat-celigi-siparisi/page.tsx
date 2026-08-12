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
  title: { absolute: "EKDMR: 4,97 Milyon Dolarlık İnşaat Çeliği Siparişi" },
  description:
    seoAciklamasi("Ekinciler Demir ve Çelik, Orta Amerika Bölgesi’ne sevk edilmek üzere 4,97 milyon dolar tutarında inşaat çeliği siparişi aldığını açıkladı. Bölgeden yıl içinde alınan sipariş toplamı 26,08 milyon dolara ulaştı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ekdmr-orta-amerika-insaat-celigi-siparisi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ekdmr-orta-amerika-insaat-celigi-siparisi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ekdmr-orta-amerika-insaat-celigi-siparisi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "EKDMR Orta Amerika’dan 4,97 Milyon Dolarlık İnşaat Çeliği Siparişi Aldı",
  description:
    "Ekinciler Demir ve Çelik, Orta Amerika Bölgesi’ne sevk edilmek üzere 4,97 milyon dolar tutarında inşaat çeliği siparişi aldığını açıkladı. Bölgeden yıl içinde alınan sipariş toplamı 26,08 milyon dolara ulaştı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/ekdmr-orta-amerika-insaat-celigi-siparisi",
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
  image: "https://www.hocaileborsa.com/ekdmr-orta-amerika-insaat-celigi-siparisi.webp",
};

export default function EkdmrOrtaAmerikaInsaatCeligiSiparisiPage() {
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
              src="/ekdmr-orta-amerika-insaat-celigi-siparisi.webp"
              alt="EKDMR Orta Amerika inşaat çeliği siparişi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                EKDMR Orta Amerika’dan 4,97 Milyon Dolarlık İnşaat Çeliği Siparişi Aldı
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
                Ekinciler Demir ve Çelik Sanayi A.Ş. (EKDMR), Orta Amerika Bölgesi’ne
                yönelik yeni inşaat çeliği siparişini KAP üzerinden duyurdu. Şirket,
                bölgeye sevk edilmek üzere 4.974.750 ABD Doları tutarında yeni
                sipariş aldığını açıkladı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  EKDMR, ihracat politikaları çerçevesinde Orta Amerika Bölgesi’ne
                  inşaat çeliği satışlarının artarak devam ettiğini bildirdi.
                  Açıklamaya göre bugün alınan yeni siparişin tutarı 4.974.750 ABD
                  Doları oldu.
                </p>
                <p>
                  Şirket, yıl içinde aynı bölgeden alınan inşaat çeliği sipariş
                  toplamının 26.075.023 ABD Doları seviyesine ulaştığını açıkladı.
                </p>
                <p>
                  Sipariş kapsamındaki üretim ve sevkiyatların, taraflar arasında
                  mutabık kalınan teslimat programı doğrultusunda gerçekleştirileceği
                  belirtildi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Rakamlar neden önemli?
                </h2>
                <p>
                  4,97 milyon dolarlık yeni sipariş tek başına sınırlı bir büyüklük
                  gibi görünse de, yıl içinde Orta Amerika’dan alınan siparişlerin
                  26,08 milyon dolara ulaşması şirketin bölgedeki ihracat
                  ivmesinin devam ettiğini gösteriyor.
                </p>
                <p>
                  Demir çelik sektöründe ihracat siparişleri; üretim kapasitesi,
                  döviz bazlı gelir, sevkiyat temposu ve bölgesel pazar çeşitliliği
                  açısından önemli göstergeler arasında yer alır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  EKDMR yatırımcıları için neden önemli?
                </h2>
                <p>
                  EKDMR’nin Orta Amerika pazarında sipariş toplamını artırması,
                  şirketin ihracat kanallarındaki görünürlüğü açısından pozitif
                  değerlendirilebilir. Döviz bazlı siparişler, gelir çeşitliliği ve
                  dış pazar performansı açısından yatırımcılar tarafından yakından
                  takip edilir.
                </p>
                <p>
                  Bununla birlikte siparişlerin kârlılığa etkisi; üretim maliyetleri,
                  hammadde fiyatları, navlun giderleri, kur seviyesi ve teslimat
                  takvimine göre değişebilir. Bu nedenle yalnızca sipariş tutarı
                  üzerinden net kâr etkisi konusunda kesin yorum yapmak doğru olmaz.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Ekinciler Demir ve Çelik, demir çelik üretimi ve inşaat çeliği
                  satışı alanında faaliyet gösteren bir sanayi şirketidir. Şirketin
                  performansında ihracat siparişleri, çelik fiyatları, üretim
                  maliyetleri ve global talep koşulları belirleyici başlıklar
                  arasında yer alır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  EKDMR’nin Orta Amerika Bölgesi’nden aldığı yeni sipariş, şirketin
                  ihracat tarafındaki satış temposunu destekleyen pozitif bir gelişme
                  olarak öne çıkıyor. Yıl içinde bölgeden alınan sipariş toplamının
                  26 milyon doların üzerine çıkması, pazar sürekliliği açısından
                  dikkat çekici.
                </p>
                <p>
                  Ancak demir çelik sektöründe ciro büyüklüğü kadar marj yapısı da
                  önemlidir. Hammadde ve enerji maliyetleri, uluslararası çelik
                  fiyatları ve lojistik giderler nihai kârlılık üzerinde belirleyici
                  olmaya devam edecektir.
                </p>
                <p>
                  Bu nedenle haber pozitif algılanabilecek bir ihracat siparişi
                  gelişmesi olsa da, finansal tablolara etkisi üretim ve sevkiyat
                  takvimiyle birlikte izlenmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte siparişlerin üretim ve sevkiyat takvimi,
                  yeni ihracat siparişleri ve satışların finansal sonuçlara etkisi
                  takip edilecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                EKDMR, Orta Amerika Bölgesi’ne sevk edilmek üzere 4.974.750 ABD
                Doları tutarında inşaat çeliği siparişi aldı. Bölgeden yıl içinde
                alınan sipariş toplamı 26.075.023 ABD Doları’na ulaştı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Döviz bazlı ihracat siparişi ve Orta Amerika pazarındaki
                sipariş toplamının artması şirketin satış görünümü açısından
                destekleyici.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Sipariş tutarı ciro açısından pozitif olsa da nihai kârlılık;
                çelik fiyatları, hammadde maliyetleri, kur ve lojistik giderleriyle
                birlikte değerlendirilmelidir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622695"
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
                  <HaberAltKisim href="/haber/ekdmr-orta-amerika-insaat-celigi-siparisi" />
</article>
</div>
    </main>
  );
}

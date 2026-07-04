import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "SASA Haziran 2026 Satış Performansını Açıkladı",
  description:
    "SASA, 2026 Haziran ayında satış miktarının 148 kiloton, satış tutarının 200 milyon dolar, ihracatın ise 82 milyon dolar olduğunu açıkladı. Şirketin toplam cirosu yıllık bazda %52 arttı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/sasa-haziran-2026-satis-performansi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/sasa-haziran-2026-satis-performansi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/sasa-haziran-2026-satis-performansi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "SASA Haziran 2026 Satış Performansını Açıkladı",
  description:
    "SASA, 2026 Haziran ayında satış miktarının 148 kiloton, satış tutarının 200 milyon dolar, ihracatın ise 82 milyon dolar olduğunu açıkladı. Şirketin toplam cirosu yıllık bazda %52 arttı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/sasa-haziran-2026-satis-performansi",
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
  image: "https://www.hocaileborsa.com/sasa-haziran-2026-satis-performansi.webp",
};

export default function SasaHaziranIkiBinYirmiAltiSatisPerformansiPage() {
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
              src="/sasa-haziran-2026-satis-performansi.webp"
              alt="SASA Haziran 2026 satış performansı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                SASA Haziran 2026 Satış Performansını Açıkladı
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
                SASA Polyester Sanayi A.Ş. (SASA), 2026 yılı Haziran ayına ilişkin
                satış performansını KAP üzerinden açıkladı. Şirketin Haziran
                ayında satış miktarı 148 kiloton, satış tutarı ise 200 milyon ABD
                doları olarak gerçekleşti.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  SASA, Haziran 2026 döneminde satış miktarının 148 kiloton olduğunu
                  duyurdu. Aynı dönemde satış tutarı 200 milyon ABD doları seviyesine
                  ulaştı.
                </p>
                <p>
                  Şirket açıklamasına göre bu satışların içinde ihracatın payı
                  82 milyon ABD doları oldu. Böylece şirketin satış performansında
                  hem toplam ciro hem de ihracat tarafında yıllık bazda güçlü artış
                  kaydedildi.
                </p>
                <p>
                  SASA’nın açıklaması, aylık operasyonel performans verisi niteliği
                  taşıdığı için yatırımcıların şirketin üretim ve satış temposunu
                  izlemesi açısından ayrı önem taşıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Geçen yılın aynı dönemine göre değişim
                </h2>
                <p>
                  2025 yılı Haziran ayında SASA’nın satış miktarı 116 kiloton,
                  satış tutarı ise 132 milyon ABD doları olarak gerçekleşmişti.
                  Aynı dönemde ihracat tutarı 52 milyon ABD dolarıydı.
                </p>
                <p>
                  Buna göre 2026 Haziran ayında 2025 yılının aynı dönemine göre
                  toplam ciroda %52, ihracat tutarında ise %58 artış kaydedildi.
                  Satış miktarındaki artış da hacim tarafında daha güçlü bir
                  operasyonel görünüm oluştuğunu gösteriyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  SASA yatırımcıları için neden önemli?
                </h2>
                <p>
                  SASA gibi yüksek kapasite yatırımları ve ihracat odaklı faaliyet
                  yapısıyla takip edilen şirketlerde aylık satış performansı, dönemsel
                  finansal sonuçlara ilişkin beklentileri şekillendiren önemli
                  göstergelerden biridir.
                </p>
                <p>
                  Haziran ayında hem satış tutarının hem de ihracat gelirinin yıllık
                  bazda güçlü artış göstermesi, şirketin operasyonel ivmesi açısından
                  pozitif bir sinyal olarak değerlendirilebilir. Özellikle ihracat
                  tarafındaki artış, döviz bazlı gelir görünümü açısından ayrıca
                  dikkat çekiyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  İhracat tarafı ne söylüyor?
                </h2>
                <p>
                  Şirketin Haziran 2026 ihracat tutarı 82 milyon ABD doları olarak
                  açıklandı. Geçen yıl aynı ayda ihracat 52 milyon ABD doları
                  seviyesindeydi.
                </p>
                <p>
                  Bu tablo, SASA’nın dış pazarlardaki satış gücünün Haziran ayında
                  belirgin şekilde arttığını gösteriyor. Ancak ihracat gelirlerinin
                  kârlılığa etkisi, ürün karması, hammadde maliyetleri, kur seviyesi
                  ve marj görünümüyle birlikte değerlendirilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  SASA Polyester, polyester elyaf, filament, polyester bazlı ürünler
                  ve petrokimya değer zincirine yönelik üretim faaliyetleriyle öne
                  çıkan büyük ölçekli bir sanayi şirketidir. Şirket, kapasite
                  yatırımları ve ihracat odaklı yapısıyla Borsa İstanbul’da yakından
                  takip edilen sanayi şirketleri arasında yer alır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  SASA’nın Haziran 2026 satış performansı, yıllık karşılaştırmada
                  oldukça güçlü bir tabloya işaret ediyor. Satış tutarının 132
                  milyon dolardan 200 milyon dolara yükselmesi ve ihracatın 52
                  milyon dolardan 82 milyon dolara çıkması, şirketin gelir üretim
                  kapasitesi açısından pozitif bir görünüm oluşturuyor.
                </p>
                <p>
                  Buna rağmen yalnızca ciro artışı üzerinden kârlılık konusunda
                  kesin yorum yapmak doğru olmaz. Hammadde maliyetleri, enerji
                  giderleri, kur hareketleri, finansman giderleri ve ürün marjları
                  şirketin nihai kârlılığında belirleyici olmaya devam edecektir.
                </p>
                <p>
                  Bu nedenle haber kısa vadede pozitif algılanabilecek güçlü bir
                  satış performansı verisi olarak öne çıksa da, kalıcı etki için
                  çeyreklik finansal sonuçlarda satış büyümesinin kâr marjlarına
                  nasıl yansıdığı takip edilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte SASA’nın aylık satış performansının devamı,
                  ihracat gelirlerinin seyri ve açıklanacak finansal tablolar yakından
                  izlenecek. Satış büyümesinin operasyonel kârlılığa dönüşüp
                  dönüşmediği, yatırımcıların ana takip başlığı olacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                SASA, Haziran 2026’da 148 kiloton satış miktarı ve 200 milyon ABD
                doları satış tutarı açıkladı. İhracat tutarı 82 milyon ABD doları
                olurken, toplam ciro yıllık bazda %52, ihracat ise %58 arttı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Satış tutarı ve ihracat gelirindeki yıllık güçlü artış,
                şirketin operasyonel görünümü açısından destekleyici. Kârlılık
                etkisi için finansal sonuçlar takip edilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Açıklanan veri satış performansını gösterir. Ciro artışının net
                kâra etkisi; maliyetler, kur, ürün marjları ve finansman giderleriyle
                birlikte değerlendirilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622718"
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
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="sasa-haziran-2026-satis-performansi"
            baslik="SASA Haziran 2026 satış performansı"
          />
        </div>

        <HaberNavigasyon
          href="/haber/sasa-haziran-2026-satis-performansi"
          className="mt-8"
        />
      </div>
    </main>
  );
}

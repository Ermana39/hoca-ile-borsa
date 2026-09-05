import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "IHLAS Kazarman HES Projesinde Temel Atıldı",
  description:
    seoAciklamasi("IHLAS iştiraki Orta Asya Investment Holding'in Kırgızistan'da geliştirdiği 912 MW Kazarman HES projesinde temel atma töreni yapıldı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ihlas-kazarman-hes-projesinde-temel-atildi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ihlas-kazarman-hes-projesinde-temel-atildi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ihlas-kazarman-hes-projesinde-temel-atildi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "IHLAS Kazarman HES Projesinde Temel Atıldı",
  description:
    "IHLAS iştiraki Orta Asya Investment Holding'in Kırgızistan'da geliştirdiği 912 MW Kazarman HES projesinde temel atma töreni yapıldı.",
  datePublished: "2026-06-26T09:00:00+03:00",
  dateModified: "2026-06-26T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/ihlas-kazarman-hes-projesinde-temel-atildi",
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
  image: "https://www.hocaileborsa.com/ihlas-kazarman-hes-projesinde-temel-atildi.webp",
};

export default function IhlasKazarmanHesTemelAtmaPage() {
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
              src="/ihlas-kazarman-hes-projesinde-temel-atildi.webp"
              alt="IHLAS Kazarman Hidroelektrik Santralleri Projesi temel atma töreni"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                IHLAS Kazarman HES Projesinde Temel Atma Töreni Gerçekleştirildi
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                26.06.2026 · 
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
                İhlas Holding A.Ş. (IHLAS), iştiraki Orta Asya Investment Holding
                tarafından Kırgızistan Cumhuriyeti’nde geliştirilen Kazarman
                Hidroelektrik Santralleri Projesi kapsamında temel atma töreninin
                gerçekleştirildiğini KAP’ta açıkladı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  IHLAS’ın açıklamasına göre Kazarman HES projesi için kapsül,
                  yani temel atma töreni yapıldı. Törene Kırgızistan Cumhurbaşkanı
                  Sadır Caparov, İhlas Holding Yönetim Kurulu Başkanı Ahmet Mücahid
                  Ören, Türkiye Cumhuriyeti Bişkek Büyükelçisi Mekin Mustafa Kemal
                  Ökem, Kırgızistan Enerji Bakanı Altınbek Rısbekov ve çok sayıda
                  üst düzey kamu yetkilisi katıldı.
                </p>
                <p>
                  Şirket, Kazarman Hidroelektrik Santralleri Projesi’nin toplam
                  yaklaşık 912 MW kurulu güce sahip olduğunu ve yatırım tutarının
                  yaklaşık 3 milyar ABD Doları olarak öngörüldüğünü bildirdi.
                  Projenin yıllık ortalama 3,75 milyar kWh elektrik üretim
                  kapasitesine sahip olmasının planlandığı açıklandı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  Temel atma töreni, büyük ölçekli altyapı ve enerji projelerinde
                  projenin sahada ilerleme aşamasına geçtiğini gösteren önemli bir
                  eşiktir. Bu aşama, lisans, hazırlık, planlama ve resmi temasların
                  ardından yatırımın görünür hale geldiği noktayı ifade eder. Ancak
                  temel atma tek başına projenin tamamlandığı ya da gelir üretmeye
                  başladığı anlamına gelmez.
                </p>
                <p>
                  Hidroelektrik santral projelerinde gerçek finansal etki,
                  inşaatın ilerlemesi, finansman yapısı, devreye alma takvimi,
                  üretim kapasitesinin faaliyete geçmesi ve elektrik satış gelirleri
                  ile ortaya çıkar. Bu nedenle haber, IHLAS açısından stratejik ve
                  uzun vadeli bir gelişme olarak okunmalı; kısa vadeli gelir etkisi
                  beklentisiyle değerlendirilmemelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Proje neden önemli?
                </h2>
                <p>
                  KAP açıklamasında Kazarman HES’in Kırgızistan’ın bugüne kadar
                  gerçekleştirilecek en büyük enerji yatırımları arasında yer aldığı
                  vurgulandı. 912 MW kurulu güç ve 3,75 milyar kWh yıllık ortalama
                  üretim hedefi, projenin yalnızca IHLAS açısından değil,
                  Kırgızistan enerji arzı açısından da büyük ölçekli bir yatırım
                  niteliği taşıdığını gösteriyor.
                </p>
                <p>
                  Büyük hidroelektrik projeleri; enerji üretimi, bölgesel kalkınma,
                  altyapı yatırımları ve uzun vadeli nakit akışı potansiyeli
                  açısından önemlidir. Buna karşın bu projelerde inşaat süresi,
                  finansman ihtiyacı, çevresel ve teknik süreçler, ülke riski,
                  döviz bazlı maliyetler ve kamu otoriteleriyle koordinasyon gibi
                  başlıklar yatırımcı tarafından dikkatle izlenmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  İhlas Holding; medya, inşaat, gayrimenkul, üretim, hizmet ve
                  çeşitli yatırım alanlarında faaliyet gösteren bir holding
                  şirketidir. Bu haber, IHLAS’ın iştirak yapısı üzerinden Orta Asya
                  bölgesindeki enerji yatırımıyla ilişkilidir. Holding şirketlerinde
                  bu tür büyük ölçekli projeler, doğrudan ana faaliyet gelirinden
                  çok iştirak değeri, uzun vadeli yatırım potansiyeli ve stratejik
                  varlık yapısı üzerinden değerlendirilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  IHLAS haberinin güçlü tarafı, projenin ölçeğidir. Yaklaşık 3
                  milyar ABD Doları yatırım tutarı, 912 MW kurulu güç ve yıllık
                  ortalama 3,75 milyar kWh üretim kapasitesi hedefi, Kazarman HES’in
                  şirket portföyü açısından dikkat çekici bir uzun vadeli yatırım
                  başlığı olduğunu gösteriyor.
                </p>
                <p>
                  Bununla birlikte yatırımcıların haberi değerlendirirken projenin
                  henüz üretim aşamasında olmadığını unutmaması gerekir. Temel atma
                  töreni önemli bir ilerleme sinyalidir; ancak finansal tablolara
                  katkı için inşaatın tamamlanması, santrallerin devreye alınması,
                  üretim ve satış süreçlerinin başlaması gerekir. Bu nedenle haber
                  pozitif algılanabilir; fakat etkisi zamana yayılacak bir proje
                  haberi olarak izlenmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Şirket, projeye ilişkin gelişmelerin ilgili mevzuat çerçevesinde
                  kamuoyu ve yatırımcılarla paylaşılmaya devam edileceğini duyurdu.
                  Bundan sonraki süreçte yatırımcıların takip edeceği başlıklar;
                  inşaat ilerleme durumu, finansman yapısı, proje takvimi, devreye
                  alma aşamaları ve elektrik üretim gelirlerinin ne zaman
                  başlayacağı olacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                IHLAS iştiraki Orta Asya Investment Holding tarafından Kırgızistan’da
                geliştirilen yaklaşık 912 MW kurulu güce sahip Kazarman HES
                projesinde temel atma töreni gerçekleştirildi.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Büyük ölçekli enerji yatırımında temel atma aşamasına
                geçilmesi stratejik açıdan destekleyici; finansal etki ise projenin
                tamamlanma ve devreye alma sürecine bağlı olacak.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Temel atma, projenin tamamlandığı anlamına gelmez. Hidroelektrik
                yatırımlarında finansal katkı; inşaat, devreye alma, üretim ve
                satış süreçleri tamamlandıkça netleşir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621133"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-zinc-700 underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              26.06.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/ihlas-kazarman-hes-projesinde-temel-atildi" />
</article>
</div>
    </main>
  );
}

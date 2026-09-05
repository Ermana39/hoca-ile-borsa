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
  title: "KAREL 5,86 Milyon Dolarlık Askeri Elektronik Sözleşmesi İmzaladı",
  description:
    seoAciklamasi("KAREL, Türkiye’de faaliyet gösteren yerli bir müşteriyle savunma sanayinde kullanılacak askeri elektronik teçhizat için 5,86 milyon dolarlık sözleşme imzaladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/karel-586-milyon-dolar-askeri-elektronik-sozlesmesi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/karel-586-milyon-dolar-askeri-elektronik-sozlesmesi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/karel-586-milyon-dolar-askeri-elektronik-sozlesmesi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "KAREL 5,86 Milyon Dolarlık Askeri Elektronik Sözleşmesi İmzaladı",
  description:
    "KAREL, Türkiye’de faaliyet gösteren yerli bir müşteriyle savunma sanayinde kullanılacak askeri elektronik teçhizat için 5,86 milyon dolarlık sözleşme imzaladı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/karel-586-milyon-dolar-askeri-elektronik-sozlesmesi",
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
  image: "https://www.hocaileborsa.com/karel-586-milyon-dolar-askeri-elektronik-sozlesmesi.webp",
};

export default function KarelAskeriElektronikSozlesmesiPage() {
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
              src="/karel-586-milyon-dolar-askeri-elektronik-sozlesmesi.webp"
              alt="KAREL 5,86 milyon dolarlık askeri elektronik sözleşmesi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                KAREL 5,86 Milyon Dolarlık Askeri Elektronik Sözleşmesi İmzaladı
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
                Karel Elektronik Sanayi ve Ticaret A.Ş. (KAREL), savunma sanayinde
                kullanılmak üzere askeri elektronik teçhizat üretimi ve teslimatına
                yönelik yeni bir sözleşme imzaladığını KAP üzerinden açıkladı.
                Sözleşmenin tutarı 5.862.100 ABD Doları olarak duyuruldu.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  KAREL ile Türkiye’de faaliyet gösteren yerli bir müşteri arasında
                  yeni iş ilişkisi kuruldu. KAP açıklamasına göre sözleşme,
                  savunma sanayinde kullanılacak askeri elektronik teçhizatın üretimi
                  ve teslimatını kapsıyor.
                </p>
                <p>
                  Şirket, sözleşme büyüklüğünü 5.862.100 ABD Doları olarak bildirdi.
                  Açıklamada müşteri adı paylaşılmazken, karşı tarafın Türkiye’de
                  faaliyet gösteren yerli bir müşteri olduğu belirtildi.
                </p>
                <p>
                  KAP formunda yeni iş ilişkisinin şirket faaliyetlerine etkisi
                  “Olumlu” olarak ifade edildi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Neden önemli?
                </h2>
                <p>
                  Savunma sanayi projeleri, elektronik üretim kabiliyeti yüksek
                  şirketler için hem teknik yetkinlik hem de sipariş sürekliliği
                  açısından yakından takip edilir. KAREL’in askeri elektronik
                  teçhizat alanında aldığı yeni sözleşme, şirketin savunma sanayi
                  tarafındaki iş hacmini destekleyen bir gelişme olarak öne çıkıyor.
                </p>
                <p>
                  Sözleşmenin dolar bazlı olması, gelir tarafında kur etkisinin de
                  izleneceği anlamına gelir. Ancak nihai kârlılık etkisi; üretim
                  maliyetleri, teslimat takvimi, proje giderleri ve sözleşme
                  kapsamındaki operasyonel koşullara bağlı olarak şekillenecektir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Karel Elektronik; haberleşme sistemleri, elektronik çözümler,
                  savunma sanayi elektroniği ve teknoloji odaklı üretim alanlarında
                  faaliyet gösteren bir şirkettir. Şirketin performansında yeni proje
                  kazanımları, üretim kapasitesi, elektronik komponent maliyetleri ve
                  savunma sanayi tarafındaki talep koşulları önemli rol oynar.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  KAREL’in 5,86 milyon dolarlık sözleşmesi, tutar açısından tekil bir
                  proje olsa da savunma sanayi elektroniği alanında yeni iş ilişkisi
                  kurulması nedeniyle yatırımcı ilgisi açısından önemli görülebilir.
                  Özellikle askeri elektronik teçhizat gibi uzmanlık gerektiren
                  alanlarda alınan siparişler, şirketin teknik kabiliyetinin ve pazar
                  konumunun izlenmesi açısından anlam taşır.
                </p>
                <p>
                  Buna karşın sözleşme açıklamasında teslimat takvimi, kâr marjı,
                  ödeme planı ve müşteri unvanı gibi detaylar paylaşılmadı. Bu nedenle
                  haberin finansal tablolara etkisi konusunda yalnızca sözleşme tutarı
                  üzerinden kesin bir kâr yorumu yapmak doğru olmaz.
                </p>
                <p>
                  Genel çerçevede bildirim, şirketin faaliyetleri açısından olumlu
                  bir gelişme olarak değerlendirilebilir. Ancak etkisinin büyüklüğü,
                  projenin hangi dönemlerde gelir yazılacağı ve maliyet yapısıyla
                  birlikte daha net görülecektir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte sözleşme kapsamındaki üretim ve teslimat
                  takvimi, benzer yeni savunma sanayi siparişleri ve projenin dönemsel
                  finansal sonuçlara katkısı takip edilecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                KAREL, Türkiye’de faaliyet gösteren yerli bir müşteriyle savunma
                sanayinde kullanılacak askeri elektronik teçhizat üretimi ve
                teslimatı için 5.862.100 ABD Doları tutarında sözleşme imzaladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Dolar bazlı yeni sözleşme, savunma sanayi elektroniği
                alanında iş hacmini destekleyen olumlu bir gelişme olarak izlenebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                KAP açıklamasında teslimat takvimi, müşteri unvanı, ödeme planı ve
                kârlılık detayları paylaşılmadığı için finansal etki sözleşme
                ilerledikçe daha net görülecektir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622941"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              02.07.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/karel-586-milyon-dolar-askeri-elektronik-sozlesmesi" />
</article>
</div>
    </main>
  );
}

import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "EKGYO Halkalı Batı 1. Etap İhalesinde En Yüksek Teklif Açıklandı",
  description:
    "Emlak Konut GYO, İstanbul Küçükçekmece Halkalı Batı 1. Etap ihalesinin 2. oturum sonucunu açıkladı. En yüksek teklif 7,789 milyar TL arsa satışı karşılığı satış toplam geliri üzerinden oluştu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ekgyo-halkali-bati-1-etap-ihalesi-2-oturum-sonucu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ekgyo-halkali-bati-1-etap-ihalesi-2-oturum-sonucu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ekgyo-halkali-bati-1-etap-ihalesi-2-oturum-sonucu.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "EKGYO Halkalı Batı 1. Etap İhalesinde En Yüksek Teklif Açıklandı",
  description:
    "Emlak Konut GYO, İstanbul Küçükçekmece Halkalı Batı 1. Etap ihalesinin 2. oturum sonucunu açıkladı. En yüksek teklif 7,789 milyar TL arsa satışı karşılığı satış toplam geliri üzerinden oluştu.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/ekgyo-halkali-bati-1-etap-ihalesi-2-oturum-sonucu",
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
  image: "https://www.hocaileborsa.com/ekgyo-halkali-bati-1-etap-ihalesi-2-oturum-sonucu.webp",
};

export default function EkgyoHalkaliBatiIhalesiPage() {
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
              src="/ekgyo-halkali-bati-1-etap-ihalesi-2-oturum-sonucu.webp"
              alt="EKGYO Halkalı Batı 1. Etap ihalesi 2. oturum sonucu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                EKGYO Halkalı Batı 1. Etap İhalesinde En Yüksek Teklif Açıklandı
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
                Emlak Konut Gayrimenkul Yatırım Ortaklığı A.Ş. (EKGYO),
                İstanbul Küçükçekmece Halkalı Batı 1. Etap ihalesinin 2.
                oturum sonucunu KAP üzerinden duyurdu. Açıklamaya göre ihalede
                en yüksek teklif, 7,789 milyar TL arsa satışı karşılığı satış
                toplam geliri üzerinden oluştu.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  EKGYO, İstanbul Küçükçekmece Halkalı Batı 1. Etap Arsa Satışı
                  Karşılığı Gelir Paylaşımı İşi ihalesinin 2. oturumunun
                  tamamlandığını açıkladı. İhale sonucunda en yüksek teklif,
                  arsa satışı karşılığı satış toplam geliri için 7,789 milyar TL
                  olarak bildirildi.
                </p>
                <p>
                  Şirket payı gelir oranı %35, şirket payı toplam geliri ise
                  2,726 milyar TL olarak açıklandı. Bu rakamlar, projenin EKGYO
                  portföyü ve gelir paylaşımı modeli açısından dikkat çeken bir
                  büyüklüğe sahip olduğunu gösteriyor.
                </p>
                <p>
                  Bildirim, ihale sürecinde oluşan en yüksek teklifi ortaya
                  koyuyor. Nihai değerlendirme ve sözleşme süreci tamamlandıkça
                  proje takvimi ve finansal etkiler daha net izlenebilecek.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Rakamlar neden önemli?
                </h2>
                <p>
                  Arsa satışı karşılığı gelir paylaşımı modeli, EKGYO&apos;nun proje
                  geliştirme stratejisinde önemli bir yer tutuyor. Bu modelde
                  toplam satış geliri, şirket payı oranı ve şirket payı toplam
                  geliri yatırımcıların yakından takip ettiği ana göstergeler
                  arasında bulunuyor.
                </p>
                <p>
                  Halkalı Batı 1. Etap ihalesinde açıklanan 2,726 milyar TL
                  şirket payı toplam geliri, projenin ölçeği nedeniyle EKGYO
                  gelir görünürlüğü açısından pozitif değerlendirilebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Yatırımcı açısından neden takip edilmeli?
                </h2>
                <p>
                  EKGYO gibi büyük gayrimenkul yatırım ortaklıklarında ihale
                  sonuçları, portföy büyüklüğü, gelecekteki nakit akışı ve proje
                  kârlılığı beklentileri açısından önemlidir. Özellikle yüksek
                  tutarlı gelir paylaşımı ihaleleri, şirketin önümüzdeki dönem
                  proje gelirlerine ilişkin beklentileri güçlendirebilir.
                </p>
                <p>
                  Buna karşın ihale sonucu tek başına hemen finansal tablolara
                  tam etki yaratmaz. Sözleşme süreci, proje takvimi, satış
                  performansı, maliyetler ve gayrimenkul piyasasındaki talep
                  koşulları nihai etkiyi belirleyecek başlıklar olarak izlenmeli.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Emlak Konut GYO, Türkiye&apos;nin en büyük gayrimenkul yatırım
                  ortaklıklarından biridir. Şirket, konut ve karma kullanım
                  projelerinde arsa geliştirme, gelir paylaşımı ve proje yönetimi
                  modeliyle faaliyet göstermektedir. Gayrimenkul sektöründeki
                  faiz, talep, maliyet ve kampanya koşulları şirket performansı
                  açısından yakından takip edilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  EKGYO&apos;nun Halkalı Batı 1. Etap ihalesinde yüksek teklif
                  açıklaması, proje büyüklüğü ve şirket payı toplam geliri
                  nedeniyle pozitif tarafta okunabilecek bir gelişme. 2,726
                  milyar TL seviyesindeki şirket payı toplam geliri, portföyün
                  gelir üretme potansiyeli açısından güçlü bir sinyal veriyor.
                </p>
                <p>
                  Yine de yatırımcıların haberi nihai proje geliri olarak değil,
                  ihale sürecindeki önemli bir aşama olarak değerlendirmesi daha
                  doğru olur. Bundan sonraki adımlarda sözleşme, proje
                  geliştirme takvimi ve satış performansı belirleyici olacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte ihalenin kesinleşmesi, sözleşme
                  aşaması, proje takvimi ve satış sürecine ilişkin gelişmeler
                  takip edilecek. EKGYO&apos;nun yeni KAP bildirimleri, ihale
                  sonucunun finansal görünüm üzerindeki etkisini daha net hale
                  getirebilir.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                EKGYO, İstanbul Küçükçekmece Halkalı Batı 1. Etap ihalesinin 2.
                oturumunda en yüksek teklifin 7,789 milyar TL arsa satışı
                karşılığı satış toplam geliri üzerinden oluştuğunu açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — İhale büyüklüğü ve 2,726 milyar TL şirket payı toplam
                geliri, EKGYO&apos;nun gelir görünürlüğü açısından olumlu
                değerlendirilebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Açıklama ihale sürecinin 2. oturum sonucunu gösteriyor. Nihai
                finansal etki için sözleşme süreci, proje takvimi ve satış
                performansı takip edilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621643"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              29.06.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/ekgyo-halkali-bati-1-etap-ihalesi-2-oturum-sonucu" />
</article>
</div>
    </main>
  );
}

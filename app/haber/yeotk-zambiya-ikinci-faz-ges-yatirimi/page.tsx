import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);
const haberKisaTarihi = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date(haberSaati));

export const metadata: Metadata = {
  title: "YEOTK Zambiya’da İkinci Faz GES Yatırımı İçin Ön Anlaşma İmzaladı",
  description:
    "YEO Teknoloji bağlı ortaklığı CALL Energy, Zambiya’da 60 MWdc kapasiteli ikinci faz güneş enerjisi yatırımı için bağlayıcı ön anlaşmalar imzaladı. Proje tamamlandığında CALL Energy’nin Zambiya’daki güneş enerjisi portföyünün 120 MWdc seviyesine ulaşması hedefleniyor.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/yeotk-zambiya-ikinci-faz-ges-yatirimi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/yeotk-zambiya-ikinci-faz-ges-yatirimi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/yeotk-zambiya-ikinci-faz-ges-yatirimi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "YEOTK Zambiya’da İkinci Faz GES Yatırımı İçin Ön Anlaşma İmzaladı",
  description:
    "YEO Teknoloji bağlı ortaklığı CALL Energy, Zambiya’da 60 MWdc kapasiteli ikinci faz güneş enerjisi yatırımı için bağlayıcı ön anlaşmalar imzaladı. Proje tamamlandığında CALL Energy’nin Zambiya’daki güneş enerjisi portföyünün 120 MWdc seviyesine ulaşması hedefleniyor.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/yeotk-zambiya-ikinci-faz-ges-yatirimi",
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
  image: "https://www.hocaileborsa.com/yeotk-zambiya-ikinci-faz-ges-yatirimi.webp",
};

export default function YeotkZambiyaIkinciFazGesYatirimiPage() {
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
              src="/yeotk-zambiya-ikinci-faz-ges-yatirimi.webp"
              alt="YEOTK Zambiya ikinci faz güneş enerjisi yatırımı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                YEOTK Zambiya’da İkinci Faz GES Yatırımı İçin Ön Anlaşma İmzaladı
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
                YEO Teknoloji Enerji ve Endüstri A.Ş. (YEOTK), yenilenebilir
                enerji yatırımları alanında faaliyet gösteren bağlı ortaklığı
                CALL Energy üzerinden Zambiya’da yeni bir yatırım kararını daha
                hayata geçirdiğini açıkladı. Şirketin KAP açıklamasına göre,
                mevcut proje sahasında 60 MWdc kapasiteli ikinci faz güneş enerjisi
                yatırımı için bağlayıcı ön anlaşmalar imzalandı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  YEOTK’nin açıklamasında, daha önce finansmanı tamamlanarak
                  inşaatına başlanan 60 MWp Güneş Enerjisi Santrali ve 20 MWh
                  Batarya Enerji Depolama Sistemi projesinin bulunduğu sahada,
                  ikinci faz için yeni bir yatırım adımı atıldığı belirtildi.
                </p>
                <p>
                  Yeni fazın 60 MWdc kapasiteye sahip olması planlanıyor. Şirket,
                  bu ikinci faz kapsamında üretilecek elektriğin Petrodex Energy
                  Trading Zambia Limited ile imzalanacak 20 yıl vadeli uzun dönemli
                  Enerji Satış Anlaşması kapsamında değerlendirilmesinin
                  planlandığını duyurdu.
                </p>
                <p>
                  Projenin finansmanı tarafında ise Afrika’nın önde gelen finans
                  kuruluşlarından Standard Bank tarafından projeye ilişkin
                  Indicative Term Sheet düzenlendiği ve finansman sürecine yönelik
                  çalışmaların ilgili taraflarla devam ettiği açıklandı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu yatırım neden önemli?
                </h2>
                <p>
                  Haberin ayrı haber değeri taşımasının temel nedeni, açıklamanın
                  sadece niyet beyanı seviyesinde kalmaması ve mevcut sahada ikinci
                  faz için bağlayıcı ön anlaşmaların imzalanmış olmasıdır. Şirket
                  daha önce aynı bölgede 60 MWp GES ve 20 MWh batarya depolama
                  projesinde finansmanın tamamlandığını ve inşaat çalışmalarının
                  başladığını duyurmuştu.
                </p>
                <p>
                  İkinci fazın da tamamlanması halinde CALL Energy’nin Zambiya’daki
                  güneş enerjisi portföyünün toplam 120 MWdc seviyesine ulaşması
                  hedefleniyor. Bu ölçek, YEOTK’nin yalnızca mühendislik ve EPC
                  tarafında değil, uluslararası yenilenebilir enerji yatırımcısı
                  kimliğiyle de büyüme hedefini destekleyen önemli bir adım olarak
                  okunabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  20 yıllık enerji satış anlaşması ne anlama geliyor?
                </h2>
                <p>
                  Şirket açıklamasında ikinci fazda üretilecek elektriğin 20 yıl
                  vadeli uzun dönemli PPA kapsamında değerlendirilmesinin
                  planlandığı belirtildi. PPA, yani uzun vadeli enerji satış
                  anlaşmaları, yenilenebilir enerji projelerinde gelir
                  öngörülebilirliği açısından kritik önemdedir.
                </p>
                <p>
                  Bu yapı, projenin sadece kapasite artışı olarak değil, aynı
                  zamanda uzun vadeli gelir modeli oluşturma açısından da
                  izlenmesini gerektiriyor. Elektrik satış anlaşmasının nihai
                  şartları, fiyatlama yapısı ve finansman koşulları ilerleyen
                  dönemde projenin finansal etkisini belirleyecek ana başlıklar
                  olacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  YEOTK açısından stratejik anlamı
                </h2>
                <p>
                  YEO Teknoloji Grubu, enerji teknolojileri, proje geliştirme,
                  finansman, EPC, enerji depolama ve uzun dönemli işletme
                  kabiliyetlerini aynı iş modeli içinde birleştirmeye çalışıyor.
                  Zambiya’daki bu yatırım, şirketin sadece Türkiye’de değil,
                  yüksek büyüme potansiyeline sahip uluslararası pazarlarda da
                  proje geliştirme kapasitesini artırma hedefiyle uyumlu görünüyor.
                </p>
                <p>
                  Afrika pazarı, elektrik erişimi, yenilenebilir enerji yatırımları
                  ve özel sektör enerji projeleri açısından büyüme potansiyeli
                  taşıyan bölgelerden biri. Bu nedenle YEOTK’nin Zambiya’da ikinci
                  faz yatırımı için adım atması, şirketin uluslararası portföyünü
                  genişletme stratejisinin devamı olarak değerlendirilebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  YEO Teknoloji Enerji ve Endüstri A.Ş., enerji, elektrifikasyon,
                  otomasyon, yenilenebilir enerji ve mühendislik çözümleri alanında
                  faaliyet gösteren bir teknoloji ve enerji şirketidir. Şirket,
                  son yıllarda yalnızca proje yükleniciliği tarafında değil,
                  yenilenebilir enerji yatırımları ve enerji depolama teknolojileri
                  tarafında da büyüme stratejisiyle öne çıkıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  YEOTK açısından haber pozitif tarafta değerlendirilebilir. Çünkü
                  mevcut sahada ikinci faz için bağlayıcı ön anlaşmaların
                  imzalanması, şirketin Zambiya’daki yenilenebilir enerji
                  portföyünü büyütme planının devam ettiğini gösteriyor. Ayrıca
                  20 yıl vadeli enerji satış anlaşması hedefi, projenin uzun vadeli
                  gelir potansiyeli açısından önemli bir detay.
                </p>
                <p>
                  Bununla birlikte açıklamada finansman sürecinin halen ilgili
                  taraflarla devam ettiği belirtiliyor. Bu nedenle yatırımcıların
                  bu haberi okurken projenin tamamlanmış bir yatırım değil,
                  önemli bir ilerleme aşaması olduğunu dikkate alması gerekir.
                  Nihai finansman, anlaşma şartları, inşaat takvimi ve devreye alma
                  süreci projenin gerçek finansal etkisini belirleyecek.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte yatırımcıların izlemesi gereken başlıklar;
                  Petrodex Energy Trading Zambia Limited ile imzalanacak nihai
                  enerji satış anlaşmasının şartları, Standard Bank ile yürütülen
                  finansman görüşmelerinin sonucu, ikinci faz yatırımının inşaat
                  takvimi ve projenin devreye alınma süreci olacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                YEOTK bağlı ortaklığı CALL Energy, Zambiya’da mevcut 60 MWp GES
                ve 20 MWh batarya depolama projesinin bulunduğu sahada 60 MWdc
                kapasiteli ikinci faz güneş enerjisi yatırımı için bağlayıcı ön
                anlaşmalar imzaladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Uluslararası yenilenebilir enerji portföyünün büyümesi,
                20 yıl vadeli enerji satış anlaşması hedefi ve Zambiya’daki toplam
                kapasitenin 120 MWdc seviyesine ulaşacak olması şirket açısından
                stratejik değer taşıyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Projede finansman süreci devam ediyor. Nihai PPA şartları,
                finansman kapanışı ve devreye alma takvimi açıklanmadan finansal
                etkinin kesinleştiği söylenemez.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621285"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              {haberKisaTarihi} – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/yeotk-zambiya-ikinci-faz-ges-yatirimi" />
</article>
</div>
    </main>
  );
}

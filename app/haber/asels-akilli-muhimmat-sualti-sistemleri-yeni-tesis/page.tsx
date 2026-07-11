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
  title: "ASELSAN 40 Milyon Dolarlık Yeni Üretim ve Test Merkezlerini Devreye Aldı",
  description:
    "ASELSAN, artan sipariş hacmini karşılamak ve üretim altyapısını güçlendirmek amacıyla 40 milyon dolar yatırımla tamamlanan Akıllı Mühimmat ve Sualtı Sistemleri İlave Üretim ve Test Merkezlerini devreye aldı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ASELSAN 40 Milyon Dolarlık Yeni Üretim ve Test Merkezlerini Devreye Aldı",
  description:
    "ASELSAN, artan sipariş hacmini karşılamak ve üretim altyapısını güçlendirmek amacıyla 40 milyon dolar yatırımla tamamlanan Akıllı Mühimmat ve Sualtı Sistemleri İlave Üretim ve Test Merkezlerini devreye aldı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis",
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
  image: "https://www.hocaileborsa.com/asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis.webp",
};

export default function AselsAkilliMuhimmatSualtiSistemleriPage() {
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
              src="/asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis.webp"
              alt="ASELSAN akıllı mühimmat ve sualtı sistemleri üretim test merkezleri"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                ASELSAN 40 Milyon Dolarlık Yeni Üretim ve Test Merkezlerini Devreye Aldı
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
                ASELSAN Elektronik Sanayi ve Ticaret A.Ş. (ASELS), artan sipariş
                hacmini karşılamak ve üretim altyapısını güçlendirmek amacıyla
                yeni yatırımını devreye aldığını KAP üzerinden duyurdu. Şirket,
                40 milyon ABD Doları yatırımla tamamlanan Akıllı Mühimmat ve
                Sualtı Sistemleri İlave Üretim ve Test Merkezlerinin faaliyete
                geçtiğini açıkladı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  ASELSAN, toplam 17.360 metrekare kapalı alana sahip yeni üretim
                  ve test merkezlerini devreye aldı. Açıklamada tesislerin
                  &quot;Akıllı Mühimmat ve Sualtı Sistemleri İlave Üretim ve Test
                  Merkezleri&quot; olarak adlandırıldığı belirtildi.
                </p>
                <p>
                  Şirket, yatırımın 40 milyon ABD Doları büyüklüğünde olduğunu
                  bildirdi. Yeni tesislerle birlikte hava ve deniz savunma
                  sistemlerinin üretiminde robotik ve otomasyon altyapısının
                  önemli ölçüde güçlendirildiği açıklandı.
                </p>
                <p>
                  ASELSAN ayrıca devreye alınan merkezlerin teslimat kapasitesi,
                  hız ve kalite kabiliyetini artırdığını vurguladı. Bu yönüyle
                  haber, yalnızca fiziki tesis yatırımı değil, üretim kapasitesi
                  ve operasyonel verimlilik açısından da önemli bir gelişme olarak
                  öne çıkıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Yatırım neden önemli?
                </h2>
                <p>
                  Savunma sanayii şirketlerinde yeni sözleşmeler kadar, mevcut
                  sipariş hacmini zamanında karşılayabilecek üretim altyapısı da
                  kritik önemdedir. ASELSAN’ın açıklamasında yatırımın artan
                  sipariş hacmini karşılamak amacıyla yapıldığının belirtilmesi,
                  tesisin doğrudan operasyonel kapasite ihtiyacına cevap verdiğini
                  gösteriyor.
                </p>
                <p>
                  Akıllı mühimmat ve sualtı sistemleri, savunma sanayiinde yüksek
                  teknoloji, mühendislik, test ve kalite standardı gerektiren
                  alanlar arasında yer alıyor. Bu alanda üretim ve test merkezlerinin
                  devreye alınması, ASELSAN’ın teslimat performansı ve ürün
                  ölçeklenebilirliği açısından destekleyici bir adım olarak
                  değerlendirilebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Robotik ve otomasyon altyapısı ne sağlayabilir?
                </h2>
                <p>
                  ASELSAN’ın açıklamasında yeni tesislerle birlikte robotik ve
                  otomasyon altyapısının önemli ölçüde güçlendirildiği ifade edildi.
                  Bu tür yatırımlar, üretim süreçlerinde standartlaşma, hata
                  oranlarının azaltılması, daha hızlı teslimat ve kalite kontrol
                  süreçlerinin güçlenmesi açısından önemlidir.
                </p>
                <p>
                  Savunma ürünlerinde kalite ve test süreçleri, ticari ürünlere
                  göre çok daha kritik olabilir. Bu nedenle üretim ve test
                  merkezlerinin aynı yatırım başlığı altında devreye alınması,
                  ürünlerin sadece üretilmesini değil; doğrulama ve teslimata hazır
                  hale getirilmesini de destekleyen bir yapı oluşturur.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  ASELS yatırımcıları için ne ifade ediyor?
                </h2>
                <p>
                  Haber, ASELSAN açısından pozitif değerlendirilebilir. Çünkü
                  açıklama doğrudan yeni bir yatırımın tamamlanıp devreye alınmasına
                  işaret ediyor. Tesisin amacı artan sipariş hacmini karşılamak
                  olarak belirtildiği için, şirketin mevcut ve gelecek dönem
                  teslimat kapasitesi açısından destekleyici bir gelişme söz konusu.
                </p>
                <p>
                  Ancak bu tür yatırım haberlerinde finansal etki tek seferde
                  görülmez. Yeni tesislerin ciro, teslimat, kârlılık ve operasyonel
                  verimlilik üzerindeki katkısı zaman içinde üretim hacmi ve sipariş
                  teslimat performansıyla daha net anlaşılır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  ASELSAN, Türkiye’nin önde gelen savunma elektroniği şirketlerinden
                  biridir. Haberleşme, radar, elektro-optik, hava savunma, deniz
                  sistemleri, komuta kontrol, akıllı mühimmat ve çeşitli savunma
                  teknolojileri alanlarında faaliyet gösterir. Şirketin büyüme
                  hikâyesinde yüksek teknoloji üretim altyapısı ve büyük ölçekli
                  sipariş portföyü önemli yer tutar.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  ASELSAN’ın 40 milyon ABD Doları yatırımla tamamladığı yeni
                  üretim ve test merkezlerini devreye alması, şirketin büyüyen
                  sipariş portföyüne karşı kapasite tarafında hazırlık yaptığını
                  gösteriyor. Bu nedenle haber, stratejik ve operasyonel açıdan
                  pozitif okunabilecek bir gelişme niteliğinde.
                </p>
                <p>
                  Özellikle akıllı mühimmat ve sualtı sistemleri gibi kritik
                  savunma alanlarında kapasite artırımı, şirketin teslimat hızını
                  ve kalite standardını destekleyebilir. Robotik ve otomasyon
                  altyapısının güçlendirilmesi de üretim verimliliği açısından
                  orta vadede olumlu yansımalar yaratabilir.
                </p>
                <p>
                  Yatırımcı tarafında bu haberin etkisi, yeni tesislerin ilerleyen
                  dönemlerde üretim hacmine, teslimatlara ve finansal sonuçlara
                  ne ölçüde katkı sağlayacağıyla daha net görülecektir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte ASELSAN’ın yeni tesislerinden gelecek
                  üretim ve teslimat katkısı takip edilecek. Şirketin sipariş
                  büyüklüğü, teslimat performansı, yeni sözleşmeleri ve savunma
                  sistemleri tarafındaki ihracat potansiyeli yatırımcıların ana
                  gündem başlıkları arasında kalmaya devam edecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                ASELSAN, 40 milyon ABD Doları yatırımla tamamlanan 17.360 metrekare
                kapalı alana sahip Akıllı Mühimmat ve Sualtı Sistemleri İlave
                Üretim ve Test Merkezlerini devreye aldı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Yeni yatırım, artan sipariş hacmini karşılamak, teslimat
                kapasitesini artırmak ve üretim altyapısını güçlendirmek açısından
                ASELSAN için destekleyici bir gelişme.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Tesisin finansal etkisi zaman içinde üretim hacmi, teslimat
                performansı ve kârlılık üzerindeki katkısıyla netleşecektir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621738"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              30.06.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis"
            baslik="ASELSAN akıllı mühimmat ve sualtı sistemleri yeni tesis yatırımı"
          />
        </div>

        <HaberNavigasyon
          href="/haber/asels-akilli-muhimmat-sualti-sistemleri-yeni-tesis"
          className="mt-8"
        />
      </div>
    </main>
  );
}

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
  title: { absolute: "KAREL: Daiichi’den 100 Milyon Dolarlık Proje" },
  description:
    seoAciklamasi("Karel Elektronik, yüzde 54 oranında pay sahibi olduğu bağlı ortaklığı Daiichi Elektronik’in lider bir OEM otomotiv şirketiyle araç bileşenlerinin geliştirilmesi, validasyonu ve seri üretimi için yaklaşık 5 yıl süreli 100 milyon dolarlık proje nominasyonu aldığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/karel-daiichi-100-milyon-dolar-oem-proje-nominasyonu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/karel-daiichi-100-milyon-dolar-oem-proje-nominasyonu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/karel-daiichi-100-milyon-dolar-oem-proje-nominasyonu.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "KAREL Bağlı Ortaklığı Daiichi’den 100 Milyon Dolarlık Proje Nominasyonu",
  description:
    "Karel Elektronik, yüzde 54 oranında pay sahibi olduğu bağlı ortaklığı Daiichi Elektronik’in lider bir OEM otomotiv şirketiyle araç bileşenlerinin geliştirilmesi, validasyonu ve seri üretimi için yaklaşık 5 yıl süreli 100 milyon dolarlık proje nominasyonu aldığını açıkladı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/karel-daiichi-100-milyon-dolar-oem-proje-nominasyonu",
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
  image: "https://www.hocaileborsa.com/karel-daiichi-100-milyon-dolar-oem-proje-nominasyonu.webp",
};

export default function KarelDaiichiProjeNominasyonuPage() {
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
              src="/karel-daiichi-100-milyon-dolar-oem-proje-nominasyonu.webp"
              alt="KAREL bağlı ortaklığı Daiichi 100 milyon dolarlık OEM proje nominasyonu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                KAREL Bağlı Ortaklığı Daiichi’den 100 Milyon Dolarlık Proje Nominasyonu
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
                Karel Elektronik Sanayi ve Ticaret A.Ş. (KAREL), bağlı ortaklığı
                Daiichi Elektronik Sanayi ve Ticaret A.Ş. üzerinden otomotiv
                elektroniği alanında önemli bir iş ilişkisi duyurdu. Şirketin KAP
                açıklamasına göre Daiichi Elektronik, lider bir orijinal ürün
                üreticisi (OEM) otomotiv şirketiyle araç bileşenlerinin
                geliştirilmesi, doğrulanması ve seri üretimi konusunda anlaşmaya
                vardı.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  KAREL’in yüzde 54 oranında pay sahibi olduğu Daiichi Elektronik,
                  araç bileşenlerinin geliştirilmesi, validasyonu ve seri üretimi
                  için yeni bir proje nominasyonu aldı. Açıklamada, söz konusu yeni
                  iş ilişkisinin toplam bedelinin yaklaşık 5 yıllık dönem için
                  100 milyon ABD Doları seviyesinde olduğu belirtildi.
                </p>
                <p>
                  Proje kapsamında Daiichi Elektronik’in gerekli mühendislik
                  kaynaklarını bu projeye tahsis edeceği açıklandı. Bu detay,
                  anlaşmanın yalnızca ürün tedariki değil; mühendislik, geliştirme,
                  doğrulama ve seri üretim aşamalarını içeren kapsamlı bir otomotiv
                  elektroniği projesi olduğunu gösteriyor.
                </p>
                <p>
                  KAREL ayrıca bu yeni proje ve iş hacminin, Daiichi Elektronik’in
                  otomotiv elektroniği sektöründeki küresel konumunu güçlendireceğini
                  ve şirketin konsolide ciro ile kârlılığına olumlu katkı
                  sağlayacağını bildirdi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Proje nominasyonu ne anlama geliyor?
                </h2>
                <p>
                  Otomotiv sektöründe proje nominasyonu, tedarikçinin belirli bir
                  araç platformu veya ürün grubu için tercih edildiğini gösteren
                  kritik bir aşamadır. Bu aşama, projenin mühendislik, validasyon
                  ve seri üretim planına dahil olunduğunu ifade eder.
                </p>
                <p>
                  Bu nedenle nominasyon haberleri, özellikle otomotiv yan sanayi
                  ve elektronik tedarikçileri için güçlü bir referans niteliği
                  taşır. Seri üretim süreci devreye girdikçe, proje kapsamındaki
                  siparişlerin şirketin gelirlerine dönemler halinde yansıması
                  beklenir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  100 milyon dolarlık iş hacmi neden önemli?
                </h2>
                <p>
                  Yaklaşık 5 yıllık dönem için açıklanan 100 milyon ABD Doları
                  tutarındaki toplam proje büyüklüğü, KAREL açısından ayrı haber
                  yapılmasını gerektirecek ölçekte bir iş hacmine işaret ediyor.
                  Şirketin bu projeyi konsolide ciro ve kârlılığa olumlu katkı
                  sağlayacak bir gelişme olarak nitelendirmesi de haberin önemini
                  artırıyor.
                </p>
                <p>
                  Bu tip uzun vadeli otomotiv projelerinde finansal etki genellikle
                  tek seferde değil, geliştirme ve üretim takvimi boyunca kademeli
                  şekilde oluşur. Bu nedenle yatırımcıların projenin devreye alma
                  sürecini, seri üretim takvimini ve Daiichi Elektronik’in bu işten
                  sağlayacağı katkının finansal tablolara yansımasını takip etmesi
                  gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Daiichi Elektronik açısından stratejik anlamı
                </h2>
                <p>
                  Daiichi Elektronik, otomotiv elektroniği alanında araç içi
                  sistemler ve elektronik bileşenler tarafında faaliyet gösteren
                  bir KAREL bağlı ortaklığıdır. Küresel ölçekte faaliyet gösteren
                  OEM otomotiv şirketleriyle çalışmak, hem teknik yeterlilik hem de
                  kalite standardı açısından güçlü bir referans anlamına gelir.
                </p>
                <p>
                  Bu proje, Daiichi Elektronik’in otomotiv elektroniği sektöründe
                  daha görünür bir tedarikçi konumuna gelmesini destekleyebilir.
                  KAREL’in açıklamasında da projenin bağlı ortaklığın küresel
                  konumunu güçlendireceği vurgulanıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Karel Elektronik, telekomünikasyon, elektronik sistemler,
                  savunma, otomotiv elektroniği ve teknoloji çözümleri alanlarında
                  faaliyet gösteren bir teknoloji şirketidir. Şirketin büyüme
                  stratejisinde bağlı ortaklıkları üzerinden farklı sektörlere
                  açılma, yüksek katma değerli elektronik üretimi ve mühendislik
                  kabiliyetlerini geliştirme başlıkları öne çıkıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  KAREL açısından haber pozitif tarafta değerlendirilebilir.
                  Yaklaşık 100 milyon ABD Doları büyüklüğünde ve 5 yıllık döneme
                  yayılması beklenen bir otomotiv elektroniği projesi, hem iş hacmi
                  hem de referans kalitesi açısından önemli görünüyor.
                </p>
                <p>
                  Haberin en güçlü tarafı, projenin yalnızca satış odaklı bir
                  tedarik ilişkisi değil; geliştirme, validasyon ve seri üretim
                  aşamalarını kapsayan uzun vadeli bir iş ilişkisi olmasıdır. Bu
                  yapı, Daiichi Elektronik’in teknik kabiliyetini ve global otomotiv
                  tedarik zincirindeki pozisyonunu güçlendirebilir.
                </p>
                <p>
                  Buna karşın finansal etkinin hangi dönemlerde ve hangi marjlarla
                  gerçekleşeceği, projenin üretim takvimi ve teslimat planıyla
                  netleşecektir. Bu nedenle yatırımcıların sonraki dönem finansal
                  raporlarında Daiichi katkısını ve KAREL’in konsolide gelir/kârlılık
                  görünümünü takip etmesi gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte projenin mühendislik, validasyon ve seri
                  üretim aşamalarına ilişkin ilerleme takip edilecek. Proje hacminin
                  5 yıllık döneme yayılacak olması nedeniyle finansal katkının
                  dönemsel olarak kademeli şekilde görülmesi beklenebilir.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                KAREL’in yüzde 54 bağlı ortaklığı Daiichi Elektronik, lider bir OEM
                otomotiv şirketiyle araç bileşenlerinin geliştirilmesi, validasyonu
                ve seri üretimi için yaklaşık 5 yıl süreli 100 milyon ABD Doları
                büyüklüğünde proje nominasyonu aldı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — 100 milyon ABD Doları seviyesindeki uzun vadeli proje
                nominasyonu, KAREL’in konsolide ciro ve kârlılığına olumlu katkı
                sağlayabilecek önemli bir iş hacmi yaratıyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Proje yaklaşık 5 yıllık döneme yayılacak. Bu nedenle finansal
                katkı tek seferde değil, proje takvimi ve seri üretim sürecine
                bağlı olarak dönemsel şekilde görülebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621707"
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
                  <HaberAltKisim href="/haber/karel-daiichi-100-milyon-dolar-oem-proje-nominasyonu" />
</article>
</div>
    </main>
  );
}

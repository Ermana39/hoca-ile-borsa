import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "ARDYZ’den HAVELSAN’a 706.800 Dolarlık Sipariş",
  description:
    seoAciklamasi("ARD Grup Bilişim, HAVELSAN’dan NVIDIA yapay zekâ hızlandırıcı teknolojileri ve DELL kurumsal çözümleriyle kurulacak altyapı sistemleri için 706.800 dolarlık sipariş aldığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ardyz-havelsan-yapay-zeka-altyapi-siparisi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ardyz-havelsan-yapay-zeka-altyapi-siparisi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ardyz-havelsan-yapay-zeka-altyapi-siparisi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ARDYZ’den HAVELSAN’a 706.800 Dolarlık Sipariş",
  description:
    "ARD Grup Bilişim, HAVELSAN’dan NVIDIA yapay zekâ hızlandırıcı teknolojileri ve DELL kurumsal çözümleriyle kurulacak altyapı sistemleri için 706.800 dolarlık sipariş aldığını açıkladı.",
  datePublished: "2026-06-26T09:00:00+03:00",
  dateModified: "2026-06-26T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/ardyz-havelsan-yapay-zeka-altyapi-siparisi",
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
  image: "https://www.hocaileborsa.com/ardyz-havelsan-yapay-zeka-altyapi-siparisi.webp",
};

export default function ArdyzHavelsanYapayZekaSiparisiPage() {
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
              src="/ardyz-havelsan-yapay-zeka-altyapi-siparisi.webp"
              alt="ARDYZ'nin HAVELSAN'dan aldığı yapay zekâ altyapı siparişi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                ARDYZ’den HAVELSAN’a 706.800 Dolarlık Yapay Zekâ Siparişi
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                26.06.2026 ·{" "}
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
                ARD Grup Bilişim Teknolojileri A.Ş. (ARDYZ), HAVELSAN Hava
                Elektronik Sanayi ve Ticaret A.Ş.’den yapay zekâ altyapı
                sistemlerinin kurulumu ve tedarikine yönelik sipariş aldığını
                KAP’ta duyurdu. Şirket açıklamasına göre siparişin toplam tutarı
                KDV dahil 706.800 ABD Doları, Türk lirası karşılığıyla
                32.876.025 TL seviyesinde bulunuyor.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  KAP açıklamasında siparişin, NVIDIA yapay zekâ hızlandırıcı
                  teknolojileri ile DELL kurumsal çözümleri kullanılarak
                  kurulacak yapay zekâ altyapı sistemlerini kapsadığı
                  belirtildi. Müşteri tarafında HAVELSAN yer alırken, iş
                  ilişkisinin başlangıç tarihi olarak 25 Haziran 2026 gösterildi.
                  Şirket ayrıca bu yeni iş ilişkisinin faaliyetlerine olumlu
                  etki etmesinin beklendiğini ifade etti.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bu ne anlama geliyor?
                </h2>
                <p>
                  Bu bildirim, ARDYZ açısından tutarı açıklanmış somut bir yeni
                  iş ilişkisi anlamına geliyor. Yeni iş ilişkisi; şirketin bir
                  müşteri ile yeni sipariş, sözleşme ya da proje bazlı ticari
                  bağlantı kurduğunu gösterir. Buradaki önemli nokta,
                  açıklamanın yalnızca niyet düzeyinde kalmaması ve parasal
                  büyüklüğün kamuya açıklanmış olmasıdır.
                </p>
                <p>
                  Yatırımcı açısından ikinci önemli konu ise sipariş tutarı ile
                  gelir etkisinin aynı anda oluşmamasıdır. Bu tip teknoloji ve
                  altyapı projelerinde gelir, teslimat ve kurulum aşamalarına
                  bağlı olarak dönemlere yayılabilir. Bu nedenle haber kısa
                  vadede iş hacmini destekleyen bir gelişme olsa da, asıl
                  finansal etkiyi ilerleyen çeyreklerde ciro ve kârlılık
                  kalemlerinde görmek gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  ARD Grup Bilişim, yazılım, bilişim teknolojileri, kamu ve
                  kurumsal dijital dönüşüm projeleri alanlarında faaliyet
                  gösteren bir teknoloji şirketidir. Şirket; sistem
                  entegrasyonu, yazılım geliştirme, siber güvenlik ve altyapı
                  çözümleri gibi başlıklarda proje bazlı işler üstlenmektedir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  Teknoloji şirketlerinde bu tür sipariş haberleri yalnızca
                  büyüklüğüyle değil, işin niteliğiyle de önem taşır. Yapay zekâ
                  altyapı sistemleri; standart bir donanım satışından farklı
                  olarak yüksek işlem gücü, kurumsal entegrasyon, çözüm mimarisi
                  ve teknik kurulum kabiliyeti gerektirir. Bu yüzden haber,
                  ARDYZ’nin yalnızca satış tarafında değil, proje yetkinliği
                  tarafında da konumlandığını gösteren bir işaret olarak
                  okunabilir.
                </p>
                <p>
                  Ayrıca HAVELSAN gibi güçlü bir kurumsal müşteriyle çalışılması,
                  referans kalitesi açısından dikkat çekicidir. Buna karşılık
                  yatırımcıların bakması gereken esas başlık, bu siparişin tek
                  seferlik bir iş olarak mı kalacağı, yoksa benzer proje ve
                  devam siparişlerinin gelip gelmeyeceğidir. Teknoloji
                  şirketlerinde sürdürülebilir büyüme, tekil bir sözleşmeden çok
                  tekrar eden iş akışı ve güçlü sipariş portföyü ile daha net
                  anlaşılır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Mevcut açıklamada siparişin başlangıç tarihinin 25 Haziran
                  2026 olduğu bilgisi paylaşıldı. Bundan sonraki süreçte
                  yatırımcılar; teslimat ve kurulum aşamalarına ilişkin olası
                  yeni açıklamaları, bu işin gelir tablosuna yansımasını ve
                  benzer müşteri/proje bazlı devam siparişlerini takip edecek.
                  Siparişe ilişkin ek sözleşme koşulları veya yeni bir güncelleme
                  ise şu an için açıklanmış değil.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                ARDYZ, HAVELSAN’dan NVIDIA yapay zekâ hızlandırıcı teknolojileri
                ve DELL kurumsal çözümleriyle kurulacak altyapı sistemleri için
                KDV dahil 706.800 ABD Doları tutarında sipariş aldığını
                açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Tutarı açıklanmış yeni sipariş, iş hacmi ve gelir
                görünürlüğü açısından destekleyici bir gelişme olarak
                izlenebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1620842"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-zinc-700 underline underline-offset-2 md:text-base"
              >
                Orijinal KAP içeriği
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
                  <HaberAltKisim href="/haber/ardyz-havelsan-yapay-zeka-altyapi-siparisi" />
</article>
</div>
    </main>
  );
}
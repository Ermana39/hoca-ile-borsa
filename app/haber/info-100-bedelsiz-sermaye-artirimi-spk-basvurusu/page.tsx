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
  title: "INFO %100 Bedelsiz Sermaye Artırımı İçin SPK'ya Başvurdu",
  description:
    "İnfo Yatırım, çıkarılmış sermayesini 960,34 milyon TL'den 1,92 milyar TL'ye yükseltmek için %100 bedelsiz sermaye artırımı kapsamında SPK'ya başvurdu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/info-100-bedelsiz-sermaye-artirimi-spk-basvurusu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/info-100-bedelsiz-sermaye-artirimi-spk-basvurusu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/info-100-bedelsiz-sermaye-artirimi-spk-basvurusu.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "INFO %100 Bedelsiz Sermaye Artırımı İçin SPK'ya Başvurdu",
  description:
    "İnfo Yatırım, çıkarılmış sermayesini 960,34 milyon TL'den 1,92 milyar TL'ye yükseltmek için %100 bedelsiz sermaye artırımı kapsamında SPK'ya başvurdu.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/info-100-bedelsiz-sermaye-artirimi-spk-basvurusu",
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
  image: "https://www.hocaileborsa.com/info-100-bedelsiz-sermaye-artirimi-spk-basvurusu.webp",
};

export default function InfoBedelsizSermayeArtirimiSpkBasvurusuPage() {
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
              src="/info-100-bedelsiz-sermaye-artirimi-spk-basvurusu.webp"
              alt="INFO yüzde 100 bedelsiz sermaye artırımı SPK başvurusu"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                INFO %100 Bedelsiz Sermaye Artırımı İçin SPK&apos;ya Başvurdu
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
                İnfo Yatırım Menkul Değerler A.Ş. (INFO), %100 oranındaki bedelsiz
                sermaye artırımı için Sermaye Piyasası Kurulu&apos;na başvuru yaptığını
                KAP üzerinden duyurdu. Şirket, çıkarılmış sermayesini 960.336.000
                TL&apos;den 1.920.672.000 TL&apos;ye yükseltmeyi planlıyor.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  INFO, 26 Haziran 2026 tarihli yönetim kurulu kararının ardından,
                  bedelsiz sermaye artırımı kapsamında ihraç belgesinin onaylanması
                  ve esas sözleşmenin sermaye maddesinin tadil edilmesi amacıyla
                  SPK&apos;ya başvurdu.
                </p>
                <p>
                  Başvuruya göre şirketin mevcut sermayesi 960.336.000 TL seviyesinde
                  bulunuyor. Planlanan artırım tutarı yine 960.336.000 TL olacak ve
                  sermaye artırımının tamamlanması halinde çıkarılmış sermaye
                  1.920.672.000 TL&apos;ye ulaşacak.
                </p>
                <p>
                  Bedelsiz sermaye artırımı kapsamında artırımın 642.435.188 TL&apos;lik
                  kısmı özsermaye enflasyon düzeltme farklarından, 317.900.812 TL&apos;lik
                  kısmı ise geçmiş yıl kârlarından karşılanacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Neden önemli?
                </h2>
                <p>
                  %100 bedelsiz sermaye artırımı, şirketin mevcut pay adedinin artması
                  ve sermayesinin iki katına çıkması anlamına gelir. Bu tür işlemler,
                  özellikle yüksek oranlı bedelsiz beklentisi bulunan hisselerde
                  yatırımcı ilgisini artırabilen başlıklar arasında yer alır.
                </p>
                <p>
                  Ancak bedelsiz sermaye artırımı şirket kasasına doğrudan yeni nakit
                  girişi sağlamaz. İşlem, özkaynak kalemlerinin sermayeye eklenmesiyle
                  gerçekleştirilir. Bu nedenle haberin etkisi yalnızca oran üzerinden
                  değil, şirketin faaliyet performansı ve piyasa beklentileriyle
                  birlikte değerlendirilmelidir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  İnfo Yatırım, sermaye piyasalarında aracılık, yatırım hizmetleri ve
                  finansal ürünlere erişim alanlarında faaliyet gösteren bir aracı
                  kurumdur. Şirketin gelir yapısında piyasa işlem hacimleri, yatırımcı
                  aktivitesi, komisyon gelirleri ve sermaye piyasalarındaki genel risk
                  iştahı önemli rol oynar.
                </p>
                <p>
                  Aracı kurum hisselerinde sermaye yapısı, faaliyet hacmi ve piyasadaki
                  işlem canlılığı yatırımcılar tarafından yakından takip edilir. Bu
                  nedenle sermaye artırımı başvurusu şirketin kurumsal gündeminde
                  dikkat çeken bir adım olarak öne çıkıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  INFO&apos;nun %100 bedelsiz sermaye artırımı başvurusu, yatırımcı algısı
                  açısından pozitif izlenebilecek bir gelişme olarak değerlendirilebilir.
                  Sermayenin iki katına çıkarılması, şirketin özkaynak kalemlerini
                  sermaye yapısına yansıtması bakımından önem taşıyor.
                </p>
                <p>
                  Bununla birlikte süreç henüz başvuru aşamasında bulunuyor. Artırımın
                  uygulanabilmesi için SPK onayı ve sonraki hak kullanım sürecinin
                  tamamlanması gerekecek. Bu nedenle başvuru yapılmış olması, işlemin
                  kesinleştiği anlamına gelmez.
                </p>
                <p>
                  Bedelsiz sermaye artırımı kısa vadede hisseye ilgi yaratabilecek bir
                  haber akışı olsa da, kalıcı fiyatlama için şirketin faaliyet
                  performansı, piyasa koşulları ve aracı kurum sektöründeki işlem
                  hacimleri belirleyici olmaya devam edecektir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte SPK&apos;nın başvuruya ilişkin kararı, ihraç
                  belgesinin onaylanıp onaylanmayacağı ve bedelsiz pay alma hakkı
                  kullanım tarihleri takip edilecek. Onay gelmeden hak kullanım
                  tarihinin kesinleştiği yönünde yorum yapılmamalıdır.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                INFO, %100 bedelsiz sermaye artırımı için SPK&apos;ya başvurdu. Şirket,
                960.336.000 TL olan çıkarılmış sermayesini 1.920.672.000 TL&apos;ye
                yükseltmeyi planlıyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif / Takip Edilmeli — Yüksek oranlı bedelsiz başvurusu yatırımcı
                ilgisini artırabilecek nitelikte. Ancak süreç henüz SPK başvurusu
                aşamasında olduğu için onay kararı beklenmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Bedelsiz sermaye artırımı şirket kasasına yeni nakit girişi sağlamaz.
                Ayrıca başvuru yapılmış olması, işlemin SPK tarafından onaylandığı
                anlamına gelmez.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1623493"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium underline underline-offset-2 md:text-base"
              >
                Orjinal Kap içeriği
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              03.07.2026 – Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi
              değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="info-100-bedelsiz-sermaye-artirimi-spk-basvurusu"
            baslik="INFO yüzde 100 bedelsiz sermaye artırımı SPK başvurusu"
          />
        </div>

        <HaberNavigasyon
          href="/haber/info-100-bedelsiz-sermaye-artirimi-spk-basvurusu"
          className="mt-8"
        />
      </div>
    </main>
  );
}

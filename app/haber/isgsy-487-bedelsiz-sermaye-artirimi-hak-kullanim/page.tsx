import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "ISGSY’de %487,89748 Bedelsiz Sermaye Artırımı Hak Kullanım Tarihi Açıklandı",
  description:
    "İş Girişim Sermayesi, çıkarılmış sermayesinin 85,05 milyon TL’den 500 milyon TL’ye yükseltilmesine ilişkin bedelsiz sermaye artırımı hak kullanım başlangıç tarihinin 3 Temmuz 2026 olarak belirlendiğini açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/isgsy-487-bedelsiz-sermaye-artirimi-hak-kullanim",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/isgsy-487-bedelsiz-sermaye-artirimi-hak-kullanim.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/isgsy-487-bedelsiz-sermaye-artirimi-hak-kullanim.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ISGSY’de %487,89748 Bedelsiz Sermaye Artırımı Hak Kullanım Tarihi Açıklandı",
  description:
    "İş Girişim Sermayesi, çıkarılmış sermayesinin 85,05 milyon TL’den 500 milyon TL’ye yükseltilmesine ilişkin bedelsiz sermaye artırımı hak kullanım başlangıç tarihinin 3 Temmuz 2026 olarak belirlendiğini açıkladı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/isgsy-487-bedelsiz-sermaye-artirimi-hak-kullanim",
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
  image: "https://www.hocaileborsa.com/isgsy-487-bedelsiz-sermaye-artirimi-hak-kullanim.webp",
};

export default function IsgsyBedelsizSermayeArtirimiHakKullanimPage() {
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
              src="/isgsy-487-bedelsiz-sermaye-artirimi-hak-kullanim.webp"
              alt="ISGSY bedelsiz sermaye artırımı hak kullanım tarihi"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                ISGSY’de %487,89748 Bedelsiz Sermaye Artırımı Hak Kullanım Tarihi Açıklandı
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
                İş Girişim Sermayesi Yatırım Ortaklığı A.Ş. (ISGSY), bedelsiz
                sermaye artırımına ilişkin hak kullanım tarihini KAP üzerinden
                açıkladı. Şirketin çıkarılmış sermayesi, iç kaynaklardan karşılanmak
                üzere 85.048.841,27 TL’den 500.000.000 TL’ye yükseltilecek.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  ISGSY Yönetim Kurulu, 1 Temmuz 2026 tarihli kararıyla bedelsiz
                  sermaye artırımına ilişkin pay alma hakkı kullanım başlangıç
                  tarihini 3 Temmuz 2026 olarak belirledi.
                </p>
                <p>
                  KAP bildirimine göre bedelsiz sermaye artırımı oranı toplamda
                  %487,89748 olacak. Artırım tutarının tamamı sermaye düzeltmesi
                  olumlu farklarından karşılanacak.
                </p>
                <p>
                  Kayıt tarihi 6 Temmuz 2026, ödeme tarihi ise 7 Temmuz 2026 olarak
                  açıklandı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sermaye ne kadar artacak?
                </h2>
                <p>
                  Şirketin mevcut çıkarılmış sermayesi 85.048.841,27 TL seviyesinde
                  bulunuyor. Bedelsiz sermaye artırımı sonrasında hedef sermaye
                  500.000.000 TL olacak.
                </p>
                <p>
                  Bu kapsamda toplam 414.951.158,73 TL tutarında bedelsiz pay
                  ihraç edilecek. A grubu ve B grubu paylar için artırım oranı aynı
                  şekilde %487,89748 olarak duyuruldu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  ISGSY yatırımcıları için neden önemli?
                </h2>
                <p>
                  Bedelsiz sermaye artırımları şirketin özkaynak kalemlerinin
                  sermayeye eklenmesiyle yapılır. Bu işlem şirket kasasına yeni
                  nakit girişi sağlamaz; ancak sermaye yapısını günceller ve mevcut
                  pay sahiplerine bedelsiz pay verilmesini sağlar.
                </p>
                <p>
                  Hak kullanım tarihinin netleşmesi, yatırımcıların işlem takvimini
                  ve bölünme etkisini takip etmesi açısından önemlidir. Özellikle
                  bedelsiz oranının yüksek olması, kısa vadede hissede yatırımcı
                  ilgisini artırabilecek bir başlık olarak öne çıkabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Fiyat ve adet tarafında ne olur?
                </h2>
                <p>
                  Bedelsiz sermaye artırımı sonrasında yatırımcının sahip olduğu
                  pay adedi artarken, teorik olarak hisse fiyatı aynı oranda
                  bölünmüş şekilde yeni seviyesine uyarlanır. Bu nedenle yatırımcının
                  toplam portföy değeri yalnızca bedelsiz işlem nedeniyle otomatik
                  olarak artmaz.
                </p>
                <p>
                  Piyasa fiyatlaması ise işlem öncesi beklenti, işlem sonrası
                  likidite, genel piyasa koşulları ve yatırımcı ilgisine göre
                  değişebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  İş Girişim Sermayesi Yatırım Ortaklığı, girişim sermayesi
                  yatırımları alanında faaliyet gösteren bir yatırım ortaklığıdır.
                  Şirket, büyüme potansiyeli taşıyan girişimlere yatırım yaparak
                  portföy değerini artırmayı hedefler.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  ISGSY’nin %487,89748 oranındaki bedelsiz sermaye artırımında hak
                  kullanım tarihinin açıklanması, sürecin artık takvim aşamasına
                  geçtiğini gösteriyor. Yüksek bedelsiz oranı nedeniyle haber,
                  yatırımcı ilgisi açısından ayrı takip edilmeyi hak ediyor.
                </p>
                <p>
                  Bununla birlikte bedelsiz sermaye artırımı doğrudan nakit girişi
                  yaratmadığı için haberin şirketin operasyonel kârlılığına tek
                  başına kalıcı bir katkı sağladığı şeklinde yorumlanmaması gerekir.
                </p>
                <p>
                  Kısa vadede asıl takip edilecek başlıklar, 3 Temmuz’daki hak
                  kullanım başlangıcı, teorik fiyat ayarlaması ve işlem sonrası
                  hisse likiditesi olacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  3 Temmuz 2026 tarihinde bedelsiz pay alma hakkı kullanımı
                  başlayacak. Kayıt ve ödeme tarihlerinin ardından yeni payların
                  yatırımcı hesaplarına yansıması takip edilecek.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                ISGSY, çıkarılmış sermayesinin 85.048.841,27 TL’den 500.000.000 TL’ye
                yükseltilmesine ilişkin %487,89748 oranındaki bedelsiz sermaye
                artırımında hak kullanım başlangıç tarihini 3 Temmuz 2026 olarak
                açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — Yüksek oranlı bedelsiz sermaye artırımı ve hak kullanım
                tarihinin netleşmesi yatırımcı ilgisi açısından destekleyici.
                Ancak işlem şirket kasasına yeni nakit girişi sağlamaz.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Bedelsiz işleminde pay adedi artarken teorik fiyat da aynı oranda
                ayarlanır. Toplam portföy değeri yalnızca bedelsiz işlem nedeniyle
                otomatik olarak artmaz.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622512"
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
                  <HaberAltKisim href="/haber/isgsy-487-bedelsiz-sermaye-artirimi-hak-kullanim" />
</article>
</div>
    </main>
  );
}

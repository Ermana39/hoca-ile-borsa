import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "GOODY Bedelsiz Pay Alma Hakkı 2 Temmuz’da Başlıyor",
  description:
    "Goodyear Lastikleri, 270 milyon TL olan çıkarılmış sermayesini tamamı iç kaynaklardan karşılanmak üzere 1,52 milyar TL’ye çıkaracak bedelsiz sermaye artırımı için bedelsiz pay alma hakkı kullanım başlangıç tarihini 2 Temmuz 2026 olarak açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/goody-bedelsiz-pay-alma-hakki-2-temmuzda-basliyor",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/goody-bedelsiz-pay-alma-hakki-2-temmuzda-basliyor.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/goody-bedelsiz-pay-alma-hakki-2-temmuzda-basliyor.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "GOODY Bedelsiz Pay Alma Hakkı 2 Temmuz’da Başlıyor",
  description:
    "Goodyear Lastikleri, 270 milyon TL olan çıkarılmış sermayesini tamamı iç kaynaklardan karşılanmak üzere 1,52 milyar TL’ye çıkaracak bedelsiz sermaye artırımı için bedelsiz pay alma hakkı kullanım başlangıç tarihini 2 Temmuz 2026 olarak açıkladı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/goody-bedelsiz-pay-alma-hakki-2-temmuzda-basliyor",
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
  image: "https://www.hocaileborsa.com/goody-bedelsiz-pay-alma-hakki-2-temmuzda-basliyor.webp",
};

export default function GoodyBedelsizPayAlmaHakkiPage() {
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
              src="/goody-bedelsiz-pay-alma-hakki-2-temmuzda-basliyor.webp"
              alt="GOODY bedelsiz pay alma hakkı 2 Temmuz 2026 tarihinde başlıyor"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                GOODY Bedelsiz Pay Alma Hakkı 2 Temmuz’da Başlıyor
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
                Goodyear Lastikleri T.A.Ş. (GOODY), bedelsiz sermaye artırımı
                sürecinde yatırımcıların takip ettiği en kritik tarihlerden birini
                KAP üzerinden açıkladı. Şirketin duyurusuna göre bedelsiz pay alma
                hakkı kullanım başlangıç tarihi 2 Temmuz 2026 olarak belirlendi.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  GOODY, çıkarılmış sermayesini 270 milyon TL’den 1,52 milyar TL’ye
                  yükseltecek bedelsiz sermaye artırımı sürecinde güncelleme
                  yaptı. Artırımın tamamı iç kaynaklardan karşılanacak ve 1,25
                  milyar TL tutarındaki özsermaye enflasyon düzeltme farkları
                  sermayeye eklenecek.
                </p>
                <p>
                  KAP açıklamasında toplam bedelsiz pay alma oranı %462,96296
                  olarak yer aldı. Bedelsiz pay alma hakkı kullanım başlangıç
                  tarihi 2 Temmuz 2026, kayıt tarihi 3 Temmuz 2026 ve ödeme tarihi
                  6 Temmuz 2026 olarak bildirildi.
                </p>
                <p>
                  Şirket ayrıca SPK tarafından onaylanan ihraç belgesi ve esas
                  sözleşme tadil metninin açıklama ekinde yer aldığını duyurdu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bedelsiz sermaye artırımı ne anlama geliyor?
                </h2>
                <p>
                  Bedelsiz sermaye artırımı, şirketin mevcut özkaynak kalemlerini
                  sermayeye eklemesiyle yapılan bir sermaye artırımıdır. Bu işlemde
                  şirket kasasına yeni nakit girişi olmaz. Mevcut ortaklara sahip
                  oldukları pay oranına göre yeni pay verilir ve şirketin toplam
                  sermayesi artar.
                </p>
                <p>
                  GOODY özelinde sermaye 270 milyon TL’den 1,52 milyar TL’ye
                  çıkacağı için pay adedi artacak; teorik olarak hisse fiyatı da
                  bedelsiz oranına göre düzeltilecektir. Bu nedenle yatırımcıların
                  bedelsiz oranını, teorik fiyat etkisini ve işlem tarihlerini
                  birlikte takip etmesi gerekir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Yatırımcı açısından neden önemli?
                </h2>
                <p>
                  Bu haberin ayrı haber değerine sahip olmasının nedeni, yalnızca
                  bedelsiz sermaye artırımı kararı değil; kullanım başlangıç
                  tarihinin netleşmiş olmasıdır. Bedelsiz işlemlerinde hak kullanım
                  tarihi, yatırımcıların hesaplarında yeni payların oluşacağı süreç
                  ve Borsa İstanbul’daki teorik fiyat düzeltmesi açısından kritik
                  bir takvim bilgisidir.
                </p>
                <p>
                  Yüksek oranlı bedelsiz sermaye artırımları, şirketin piyasa
                  görünürlüğünü artırabilir ve kısa vadede yatırımcı ilgisi
                  yaratabilir. Ancak bedelsiz işlem tek başına şirket değerini
                  artıran bir nakit girişi değildir. Değerleme açısından asıl
                  önemli olan şirketin operasyonel performansı, kârlılığı, nakit
                  akışı ve sektör koşullarıdır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Goodyear Lastikleri T.A.Ş., Türkiye lastik sektörünün köklü
                  şirketlerinden biridir. Şirket, binek araç, ticari araç ve farklı
                  kullanım alanlarına yönelik lastik üretimi ve satışı alanında
                  faaliyet göstermektedir. Otomotiv, ihracat, hammadde maliyetleri,
                  kur hareketleri ve iç talep koşulları şirketin finansal
                  görünümünde öne çıkan ana başlıklardır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  GOODY’nin bedelsiz pay alma hakkı başlangıç tarihini açıklaması,
                  sermaye artırımı sürecinin uygulama aşamasına geçtiğini gösterdiği
                  için pozitif algılanabilecek bir gelişme. Özellikle yüksek
                  bedelsiz oranı nedeniyle haberin kısa vadeli yatırımcı ilgisini
                  artırması mümkündür.
                </p>
                <p>
                  Buna karşın bedelsiz sermaye artırımı, şirketin kasasına yeni
                  fon girişi sağlamaz. Bu nedenle haberi sadece pay adedi artışı
                  olarak değil, sermaye yapısının teknik olarak güncellenmesi ve
                  işlem takviminin netleşmesi şeklinde okumak daha sağlıklı olur.
                </p>
                <p>
                  Yatırımcıların 2 Temmuz’daki hak kullanım başlangıcını, 3
                  Temmuz’daki kayıt tarihini ve 6 Temmuz’daki ödeme tarihini
                  takip etmesi gerekir. Borsa İstanbul tarafından açıklanacak
                  teorik fiyat bilgisi de işlem günü fiyatlaması açısından önemli
                  olacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte yatırımcıların izlemesi gereken ana
                  başlık, 2 Temmuz 2026 tarihinde başlayacak bedelsiz pay alma
                  hakkı kullanımı olacak. Yeni payların yatırımcı hesaplarına
                  geçiş süreci, kayıt tarihi ve teorik fiyat düzeltmesi GOODY
                  paylarında işlem dinamiklerini etkileyebilir.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                GOODY, 270 milyon TL olan çıkarılmış sermayesini tamamı iç
                kaynaklardan karşılanmak üzere 1,52 milyar TL’ye çıkaracak bedelsiz
                sermaye artırımı için bedelsiz pay alma hakkı kullanım başlangıç
                tarihini 2 Temmuz 2026 olarak açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Sınırlı Pozitif — Yüksek oranlı bedelsiz sermaye artırımı ve hak
                kullanım tarihinin netleşmesi yatırımcı ilgisini artırabilir.
                Ancak işlem şirket kasasına yeni nakit girişi sağlamaz.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Bedelsiz işlemde pay adedi artar, fiyat teorik olarak düzeltilir.
                Bu işlem şirket değerini tek başına artıran bir nakit girişi
                anlamına gelmez.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621416"
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
                  <HaberAltKisim href="/haber/goody-bedelsiz-pay-alma-hakki-2-temmuzda-basliyor" />
</article>
</div>
    </main>
  );
}

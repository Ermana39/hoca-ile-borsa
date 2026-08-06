import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "BYDNR’den %615 Bedelsiz Sermaye Artırımı Kararı",
  description:
    "Baydöner Restoranları, çıkarılmış sermayesini 84 milyon TL’den 600,6 milyon TL’ye yükseltmek için %615 oranında bedelsiz sermaye artırımı kararı aldığını açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/bydnr-615-bedelsiz-sermaye-artirimi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/bydnr-615-bedelsiz-sermaye-artirimi-karari.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/bydnr-615-bedelsiz-sermaye-artirimi-karari.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "BYDNR’den %615 Bedelsiz Sermaye Artırımı Kararı",
  description:
    "Baydöner Restoranları, çıkarılmış sermayesini 84 milyon TL’den 600,6 milyon TL’ye yükseltmek için %615 oranında bedelsiz sermaye artırımı kararı aldığını açıkladı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/bydnr-615-bedelsiz-sermaye-artirimi",
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
  image: "https://www.hocaileborsa.com/bydnr-615-bedelsiz-sermaye-artirimi-karari.webp",
};

export default function BydnrBedelsizSermayeArtirimiPage() {
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
              src="/bydnr-615-bedelsiz-sermaye-artirimi-karari.webp"
              alt="BYDNR yüzde 615 bedelsiz sermaye artırımı kararı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                BYDNR’den %615 Bedelsiz Sermaye Artırımı Kararı
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
                Baydöner Restoranları A.Ş. (BYDNR), iç kaynaklardan karşılanmak
                üzere %615 oranında bedelsiz sermaye artırımı kararı aldığını KAP
                üzerinden duyurdu. Şirketin çıkarılmış sermayesinin 84.000.000 TL’den
                600.600.000 TL’ye yükseltilmesi planlanıyor.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  BYDNR Yönetim Kurulu, 1 Temmuz 2026 tarihli kararıyla şirketin
                  5 milyar TL kayıtlı sermaye tavanı içinde bedelsiz sermaye
                  artırımı yapılmasına karar verdi.
                </p>
                <p>
                  Karara göre mevcut 84.000.000 TL olan çıkarılmış sermaye,
                  516.600.000 TL artırılarak 600.600.000 TL’ye çıkarılacak. Artırımın
                  tamamı iç kaynaklardan karşılanacak.
                </p>
                <p>
                  Bedelsiz sermaye artırımı oranı hem A grubu hem de B grubu paylar
                  için %615 olarak açıklandı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Artırım hangi kaynaklardan karşılanacak?
                </h2>
                <p>
                  KAP açıklamasına göre sermaye artırımında 325.331.370,42 TL
                  sermaye düzeltmesi farklarından, 123.078.998 TL hisse senedi ihraç
                  primlerinden ve 68.189.631,58 TL maddi duran varlık yeniden
                  değerleme artışlarından karşılanacak.
                </p>
                <p>
                  Toplamda 516.600.000 TL nominal değerli yeni pay ihraç edilerek,
                  pay sahiplerine sermayeye iştirak oranları doğrultusunda bedelsiz
                  olarak dağıtılacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  BYDNR yatırımcıları için neden önemli?
                </h2>
                <p>
                  %615 gibi yüksek oranlı bedelsiz sermaye artırımı kararları,
                  özellikle kısa vadede yatırımcı ilgisini artırabilen haberler
                  arasında yer alır. Pay adedinin artacak olması ve sermaye
                  yapısının güncellenmesi, piyasa tarafından yakından takip edilir.
                </p>
                <p>
                  Ancak bedelsiz sermaye artırımı şirket kasasına yeni nakit girişi
                  sağlamaz. Bu işlem, şirketin mevcut özkaynak kalemlerinin sermayeye
                  eklenmesiyle gerçekleşir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Süreç tamamlandı mı?
                </h2>
                <p>
                  Hayır. KAP açıklamasında bedelsiz sermaye artırımı için Sermaye
                  Piyasası Kurulu başta olmak üzere ilgili kurumlara başvuru
                  yapılacağı belirtildi. Bu nedenle haber şu aşamada yönetim kurulu
                  kararı niteliğindedir.
                </p>
                <p>
                  SPK onayı, ihraç belgesi ve hak kullanım takvimi açıklandığında
                  süreç yatırımcılar açısından daha net hale gelecek.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Baydöner Restoranları, restoran işletmeciliği alanında faaliyet
                  gösteren ve Türkiye genelindeki şube ağıyla tanınan bir gıda
                  perakendesi şirketidir. Şirketin büyüme stratejisi, restoran ağı,
                  operasyonel verimlilik ve tüketici talebi yatırımcılar tarafından
                  yakından izlenir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  BYDNR’nin %615 oranındaki bedelsiz sermaye artırımı kararı, oran
                  büyüklüğü nedeniyle ayrı haber değeri taşıyor. 84 milyon TL olan
                  çıkarılmış sermayenin 600,6 milyon TL’ye yükseltilmesi, şirketin
                  sermaye yapısında belirgin bir güncelleme anlamına geliyor.
                </p>
                <p>
                  Buna karşılık bedelsiz işlemler yatırımcıya doğrudan nakit kazancı
                  sağlamaz. Pay adedi artarken hisse fiyatı teorik olarak aynı oranda
                  bölünür. Bu nedenle toplam portföy değeri yalnızca bedelsiz işlem
                  nedeniyle otomatik olarak artmaz.
                </p>
                <p>
                  Haber kısa vadede pozitif ilgi yaratabilecek nitelikte olsa da,
                  asıl takip başlığı SPK onayı, hak kullanım tarihi ve işlem sonrası
                  piyasa likiditesi olacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte BYDNR’nin SPK başvurusu, ihraç belgesi
                  onayı ve bedelsiz pay alma hakkı kullanım takvimi takip edilecek.
                  Şirket bu gelişmeleri KAP üzerinden ayrıca duyuracak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                BYDNR, çıkarılmış sermayesini 84.000.000 TL’den 600.600.000 TL’ye
                yükseltmek için %615 oranında bedelsiz sermaye artırımı kararı aldı.
                Artırımın tamamı iç kaynaklardan karşılanacak.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif / Takip Edilmeli — Yüksek oranlı bedelsiz sermaye artırımı
                yatırımcı ilgisi açısından destekleyici. Ancak işlem şirket kasasına
                yeni nakit girişi sağlamaz ve SPK onayı süreci takip edilmelidir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Bedelsiz işleminde pay adedi artarken teorik fiyat aynı oranda
                ayarlanır. Süreç henüz yönetim kurulu kararı aşamasında olduğu için
                SPK onayı ve hak kullanım tarihi beklenmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622674"
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
                  <HaberAltKisim href="/haber/bydnr-615-bedelsiz-sermaye-artirimi" />
</article>
</div>
    </main>
  );
}

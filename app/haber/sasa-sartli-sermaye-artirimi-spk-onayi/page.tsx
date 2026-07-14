import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

export const metadata: Metadata = {
  title: "SASA Şarta Bağlı Sermaye Artırımında SPK Onayı Aldı",
  description:
    "SASA, şarta bağlı sermaye artırımı başvurusunun SPK tarafından onaylandığını açıkladı. Sermaye 47,04 milyar TL’den 52,50 milyar TL’ye yükselecek.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/sasa-sartli-sermaye-artirimi-spk-onayi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/sasa-sartli-sermaye-artirimi-spk-onayi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/sasa-sartli-sermaye-artirimi-spk-onayi.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "SASA Şarta Bağlı Sermaye Artırımında SPK Onayı Aldı",
  description:
    "SASA, şarta bağlı sermaye artırımı başvurusunun SPK tarafından onaylandığını açıkladı. Sermaye 47,04 milyar TL’den 52,50 milyar TL’ye yükselecek.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/sasa-sartli-sermaye-artirimi-spk-onayi",
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
  image: "https://www.hocaileborsa.com/sasa-sartli-sermaye-artirimi-spk-onayi.webp",
};

export default function SasaSartliSermayeArtirimiSpkOnayiPage() {
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
              src="/sasa-sartli-sermaye-artirimi-spk-onayi.webp"
              alt="SASA şarta bağlı sermaye artırımı SPK onayı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                SASA Şarta Bağlı Sermaye Artırımında SPK Onayı Aldı
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
                SASA Polyester Sanayi A.Ş. (SASA), şarta bağlı sermaye artırımı
                başvurusunun Sermaye Piyasası Kurulu tarafından onaylandığını KAP
                üzerinden açıkladı. Bildirime göre şirketin çıkarılmış sermayesi
                47.040.878.514,69 TL’den 52.501.931.146,27 TL’ye yükseltilecek.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  SASA’nın 23 Haziran 2026 tarihli yönetim kurulu kararına dayanan
                  şarta bağlı sermaye artırımı başvurusu SPK tarafından onaylandı.
                  SPK onayı, Kurulun 01 Temmuz 2026 tarihli ve 2026/43 sayılı
                  bülteninde duyuruldu.
                </p>
                <p>
                  Artırılacak sermaye tutarı 5.461.052.631,58 TL olarak açıklandı.
                  Böylece şirket sermayesinin 47,04 milyar TL seviyesinden yaklaşık
                  52,50 milyar TL’ye ulaşması planlanıyor.
                </p>
                <p>
                  Bildirimde, mevcut ortakların yeni pay alma haklarının tamamen
                  kısıtlanacağı ve ihraç edilecek payların tamamının dönüştürme
                  hakkını kullanmak isteyen Paya Dönüştürülebilir Tahvil sahiplerine
                  tahsis edileceği belirtildi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Neden önemli?
                </h2>
                <p>
                  Bu bildirim klasik anlamda tüm ortaklara açık bir bedelli sermaye
                  artırımı değil. Süreç, paya dönüştürülebilir tahvil sahiplerinin
                  dönüştürme hakkını kullanmasıyla bağlantılı şarta bağlı sermaye
                  artırımı niteliği taşıyor.
                </p>
                <p>
                  Yeni pay alma haklarının mevcut ortaklar için kullandırılmaması,
                  işlemin doğrudan dönüştürme hakkını kullanan tahvil sahiplerine
                  yönelik olduğunu gösteriyor. Bu nedenle yatırımcıların gelişmeyi
                  değerlendirirken “sermaye artışı”, “tahvil dönüşümü” ve “pay
                  sahipliği yapısına olası etki” başlıklarını birlikte izlemesi
                  gerekiyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  SASA Polyester, polyester elyaf, iplik, petrokimya ve ilgili
                  sanayi ürünleri alanlarında faaliyet gösteren Türkiye’nin büyük
                  sanayi şirketleri arasında yer alıyor. Şirketin yatırım programı,
                  finansman yapısı, borçlanma araçları ve sermaye işlemleri piyasa
                  tarafından yakından takip ediliyor.
                </p>
                <p>
                  Sermaye yapısına ilişkin kararlar, özellikle büyük ölçekli yatırım
                  yapan sanayi şirketlerinde bilanço yönetimi ve uzun vadeli finansman
                  stratejisi açısından önemli sinyaller verebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  SPK onayı, SASA’nın daha önce duyurduğu şarta bağlı sermaye artırımı
                  sürecinde önemli bir aşamanın tamamlandığını gösteriyor. Ancak bu
                  işlem, doğrudan nakit girişi sağlayan standart bir ortaklara yönelik
                  bedelli artırım gibi değerlendirilmemeli; temel olarak dönüştürülebilir
                  tahvil sahiplerine tahsis edilecek paylarla ilgili bir süreçtir.
                </p>
                <p>
                  Artırılacak sermaye tutarının mevcut sermayeye oranı %11,60916 olarak
                  bildirildi. Bu oran, sermaye tabanında dikkate değer bir artış anlamına
                  gelirken, yatırımcılar açısından esas izlenecek konu dönüşüm sonrası
                  ortaklık yapısı ve pay başına göstergelerde oluşabilecek değişimdir.
                </p>
                <p>
                  Haber, sürecin regülasyon tarafında onay alması nedeniyle takip
                  edilmeye değer. Buna karşılık kısa vadeli fiyat etkisi konusunda kesin
                  bir yorum yapmak doğru olmaz; piyasa tepkisi genel risk iştahı,
                  SASA’ya yönelik beklentiler ve dönüşüm sürecinin algılanma biçimine
                  göre değişebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki aşamada şarta bağlı sermaye artırımı kapsamında ihraç
                  edilecek payların tahsisi, sürecin takvimi ve dönüşüm sonrası sermaye
                  yapısına ilişkin yeni açıklamalar takip edilecek.
                </p>
                <p>
                  Yatırımcılar ayrıca Borsa İstanbul’da oluşabilecek işlem duyurularını,
                  pay sahipliği yapısındaki değişimleri ve şirketin ilerleyen dönemde
                  yapacağı ek KAP açıklamalarını izlemeli.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                SASA’nın şarta bağlı sermaye artırımı başvurusu SPK tarafından
                onaylandı. Şirket sermayesi 47.040.878.514,69 TL’den
                52.501.931.146,27 TL’ye yükseltilecek.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Nötr-Takip — SPK onayı sürecin ilerlediğini gösteriyor. Ancak işlem,
                mevcut ortaklara yönelik klasik bedelli artırım değil; paya
                dönüştürülebilir tahvil sahiplerine tahsis edilecek paylarla ilgili
                olduğu için ortaklık yapısı ve pay başına etkiler takip edilmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                KAP açıklamasında mevcut ortakların yeni pay alma haklarının tamamen
                kısıtlanacağı ve payların dönüştürme hakkını kullanmak isteyen Paya
                Dönüştürülebilir Tahvil sahiplerine tahsis edileceği belirtildi. Bu
                nedenle haber, bedelsiz sermaye artırımı gibi yorumlanmamalıdır.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1622784"
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
                  <HaberAltKisim href="/haber/sasa-sartli-sermaye-artirimi-spk-onayi" />
</article>
</div>
    </main>
  );
}

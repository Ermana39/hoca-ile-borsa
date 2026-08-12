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
  title: "GRTHO’dan %950 Bedelsiz Sermaye Artırımı İçin SPK Başvurusu",
  description:
    seoAciklamasi("Grainturk Holding, 125 milyon TL olan çıkarılmış sermayesini tamamı iç kaynaklardan karşılanmak üzere 1,31 milyar TL’ye çıkaracak %950 bedelsiz sermaye artırımı için SPK başvurusu yaptığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/grtho-950-bedelsiz-sermaye-artirimi-spk-basvurusu",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/grtho-950-bedelsiz-sermaye-artirimi-spk-basvurusu.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/grtho-950-bedelsiz-sermaye-artirimi-spk-basvurusu.webp",
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "GRTHO’dan %950 Bedelsiz Sermaye Artırımı İçin SPK Başvurusu",
  description:
    "Grainturk Holding, 125 milyon TL olan çıkarılmış sermayesini tamamı iç kaynaklardan karşılanmak üzere 1,31 milyar TL’ye çıkaracak %950 bedelsiz sermaye artırımı için SPK başvurusu yaptığını açıkladı.",
  datePublished: haberSaati,
  dateModified: haberSaati,
  url: "https://www.hocaileborsa.com/haber/grtho-950-bedelsiz-sermaye-artirimi-spk-basvurusu",
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
  image: "https://www.hocaileborsa.com/grtho-950-bedelsiz-sermaye-artirimi-spk-basvurusu.webp",
};

export default function GrthoBedelsizSermayeArtirimiSpkBasvurusuPage() {
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
              src="/grtho-950-bedelsiz-sermaye-artirimi-spk-basvurusu.webp"
              alt="GRTHO yüzde 950 bedelsiz sermaye artırımı için SPK başvurusu"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                GRTHO’dan %950 Bedelsiz Sermaye Artırımı İçin SPK Başvurusu
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
                Grainturk Holding A.Ş. (GRTHO), yüksek oranlı bedelsiz sermaye
                artırımı sürecinde Sermaye Piyasası Kurulu’na başvuru yaptığını
                KAP üzerinden duyurdu. Şirketin açıklamasına göre mevcut 125
                milyon TL olan çıkarılmış sermayenin, tamamı iç kaynaklardan
                karşılanmak üzere 1,31 milyar TL’ye çıkarılması planlanıyor.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  GRTHO Yönetim Kurulu, 15 Haziran 2026 tarihli toplantısında
                  bedelsiz sermaye artırımı kararı aldı. Şirket, bu karar
                  kapsamında 29 Haziran 2026 tarihinde SPK başvurusu yaptığını
                  açıkladı.
                </p>
                <p>
                  Açıklamada mevcut sermayenin 125.000.000 TL olduğu, ulaşılacak
                  sermayenin ise 1.312.500.000 TL olarak planlandığı belirtildi.
                  Artırılacak 1.187.500.000 TL nominal tutardaki payların mevcut
                  ortaklara payları oranında bedelsiz olarak dağıtılması
                  hedefleniyor.
                </p>
                <p>
                  KAP bildiriminde toplam bedelsiz pay alma oranı %950 olarak
                  yer aldı. Bu oran, şirketin sermaye artırım kararını yatırımcı
                  ilgisi açısından öne çıkaran ana başlıklardan biri oldu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Artırım hangi kaynaklardan karşılanacak?
                </h2>
                <p>
                  Şirket, bedelsiz sermaye artırımının tamamının iç kaynaklardan
                  karşılanacağını açıkladı. İç kaynak kalemleri arasında 718,17
                  milyon TL emisyon primi, 207,59 milyon TL özsermaye enflasyon
                  düzeltme farkları, 204,24 milyon TL geçmiş yıl kârları ve 57,49
                  milyon TL diğer sermaye yedekleri bulunuyor.
                </p>
                <p>
                  Bu yapı, sermaye artırımının şirket kasasına yeni nakit girişi
                  sağlayan bir işlem değil; bilanço içindeki özkaynak kalemlerinin
                  sermayeye eklenmesiyle yapılan teknik bir sermaye güncellemesi
                  olduğunu gösteriyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  %950 bedelsiz oranı yatırımcı için ne ifade ediyor?
                </h2>
                <p>
                  Bedelsiz sermaye artırımlarında mevcut ortaklara, sahip oldukları
                  pay oranı korunacak şekilde yeni pay verilir. Pay adedi artarken
                  hisse fiyatı teorik olarak bedelsiz oranına göre düzeltilir.
                  Bu nedenle bedelsiz işlem, tek başına şirket değerini artıran
                  bir nakit girişi anlamına gelmez.
                </p>
                <p>
                  Buna rağmen yüksek oranlı bedelsiz sermaye artırımları, özellikle
                  kısa vadede piyasa ilgisini artırabilir. GRTHO özelinde %950 gibi
                  yüksek bir oran açıklanması, haberin ayrı haber değeri taşımasının
                  temel nedenlerinden biri olarak öne çıkıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  SPK başvurusu neden önemli?
                </h2>
                <p>
                  Yönetim kurulu kararı tek başına bedelsiz sermaye artırımının
                  tamamlandığı anlamına gelmez. Sermaye artırımının uygulanabilmesi
                  için SPK onayı, ihraç belgesinin onaylanması ve ilgili resmi
                  kurum süreçlerinin tamamlanması gerekir.
                </p>
                <p>
                  Bu nedenle 29 Haziran’da yapılan SPK başvurusu, sürecin karar
                  aşamasından onay ve uygulama aşamasına taşındığını gösteriyor.
                  Bundan sonraki en kritik başlık, SPK’nın başvuruya vereceği
                  onay ve ardından açıklanacak hak kullanım takvimi olacak.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında
                </h2>
                <p>
                  Grainturk Holding A.Ş., tarım, gıda ve emtia ticareti odaklı
                  faaliyetleriyle bilinen bir holding şirketidir. Holding yapısında
                  sermaye kararları, iştirak stratejileri, finansman yapısı ve
                  büyüme planları yatırımcıların yakından takip ettiği başlıklar
                  arasında yer alır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  GRTHO’nun %950 oranındaki bedelsiz sermaye artırımı için SPK’ya
                  başvurması, kısa vadede yatırımcı ilgisini artırabilecek güçlü
                  bir haber niteliğinde. Mevcut sermayenin 125 milyon TL’den
                  1,31 milyar TL seviyesine çıkarılması, sermaye yapısında büyük
                  ölçekli bir teknik güncelleme anlamına geliyor.
                </p>
                <p>
                  Ancak yatırımcıların bedelsiz sermaye artırımlarını doğru
                  yorumlaması gerekir. Bedelsiz işlem şirketin kasasına yeni para
                  girişi sağlamaz. Bu nedenle orta ve uzun vadeli değerleme
                  açısından asıl belirleyici başlıklar şirketin faaliyet kârlılığı,
                  nakit akışı, büyüme stratejisi ve bilanço kalitesi olmaya devam
                  eder.
                </p>
                <p>
                  Haber, onay süreci tamamlanana kadar “başvuru aşamasında”
                  izlenmelidir. SPK onayı gelmeden bedelsiz sermaye artırımının
                  hak kullanım takvimi kesinleşmiş sayılmaz.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Bundan sonraki süreçte yatırımcıların takip edeceği ana başlık
                  SPK onayı olacak. Onay sonrası ihraç belgesi, sermaye maddesi
                  tadili, Merkezi Kayıt Kuruluşu işlemleri ve bedelsiz pay alma
                  hakkı kullanım tarihleri ayrıca duyurulacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                GRTHO, 125 milyon TL olan çıkarılmış sermayesini tamamı iç
                kaynaklardan karşılanmak üzere 1,31 milyar TL’ye çıkaracak %950
                bedelsiz sermaye artırımı için SPK başvurusu yaptığını açıkladı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Pozitif — %950 gibi yüksek oranlı bedelsiz sermaye artırımı
                başvurusu kısa vadede yatırımcı ilgisini artırabilir. Ancak işlem,
                şirket kasasına yeni nakit girişi sağlamaz.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Süreç henüz SPK başvurusu aşamasındadır. Bedelsiz sermaye
                artırımının uygulanması için SPK onayı ve hak kullanım takviminin
                netleşmesi gerekir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.kap.org.tr/Bildirim/1621422"
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
                  <HaberAltKisim href="/haber/grtho-950-bedelsiz-sermaye-artirimi-spk-basvurusu" />
</article>
</div>
    </main>
  );
}

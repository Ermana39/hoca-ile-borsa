import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const slug = "golda-gida-8-temmuzda-isleme-basliyor";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const gorselDosya = "golda-gida-8-temmuzda-isleme-basliyor.webp";
const haberGorsel = `https://www.hocaileborsa.com/${gorselDosya}`;
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const title =
  "GOLDA Gıda 8 Temmuz'da İşleme Başlıyor: Fiyat, Lot ve Pazar";
const description =
  "Golda Gıda payları GOLDA koduyla 8 Temmuz 2026 Çarşamba günü Borsa İstanbul Yıldız Pazar'da işleme başlayacak. Halka arz fiyatı, lot, fon kullanımı ve ilk işlem günü detayları.";

export const metadata: Metadata = {
  title,
  description: seoAciklamasi(description, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  keywords: [
    "GOLDA ne zaman işlem görecek",
    "GOLDA işleme başlama tarihi",
    "Golda Gıda halka arz",
    "Golda Gıda işleme başlıyor",
    "GOLDA halka arz fiyatı",
  ],
  openGraph: {
    type: "article",
    title,
    description,
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Golda Gıda 8 Temmuz 2026 Çarşamba işleme başlıyor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İlk İşlem Günü",
    deger: "8 Temmuz 2026",
    aciklama: "Çarşamba günü Yıldız Pazar'da takip edilecek",
  },
  {
    baslik: "BIST Kodu",
    deger: "GOLDA",
    aciklama: "Golda Gıda pay kodu",
  },
  {
    baslik: "Halka Arz Fiyatı",
    deger: "9,20 TL",
    aciklama: "1 TL nominal pay için açıklanan sabit fiyat",
  },
  {
    baslik: "Pazar",
    deger: "Yıldız Pazar",
    aciklama: "Payların işlem göreceği BIST pazarı",
  },
];

const detaylar = [
  { etiket: "Şirket", deger: "Golda Gıda San. ve Tic. A.Ş." },
  { etiket: "BIST Kodu", deger: "GOLDA" },
  { etiket: "İlk İşlem Tarihi", deger: "8 Temmuz 2026 Çarşamba" },
  { etiket: "Halka Arz Fiyatı", deger: "9,20 TL" },
  { etiket: "Toplam Halka Arz Payı", deger: "87.499.998 lot" },
  { etiket: "Halka Açıklık Oranı", deger: "%35" },
  { etiket: "Dağıtım Yöntemi", deger: "Eşit dağıtım" },
  { etiket: "Halka Arz Şekli", deger: "Sermaye artırımı + ortak satışı" },
  { etiket: "Sermaye Artırımı", deger: "50.000.000 lot" },
  { etiket: "Ortak Satışı", deger: "37.499.998 lot" },
  { etiket: "Katılım Endeksi", deger: "Uygun" },
  {
    etiket: "Aracı Kurum",
    deger: "Gedik Yatırım / Misyon Yatırım Bankası",
  },
];

const finansallar = [
  { kalem: "Hasılat", y2021: "1,5 milyar TL", y2022: "1,9 milyar TL", y2023: "1,6 milyar TL" },
  { kalem: "Brüt Kar", y2021: "173,5 milyon TL", y2022: "211,5 milyon TL", y2023: "235,5 milyon TL" },
];

const izlemeBasliklari = [
  "İlk işlem gününde halka arz fiyatına göre oluşacak kapanış marjı",
  "Tavan fiyat seviyesinde bekleyen emir miktarı ve işlem hacmi",
  "Aynı hafta işleme başlayan diğer halka arzların fiyat davranışı",
  "Gıda sektörüne yönelik piyasa algısı, hammadde ve enerji maliyetleri",
  "Halka arz gelirinin kapasite artışı, modernizasyon ve işletme sermayesine etkisi",
  "Sermaye artırımı ile ortak satışının şirket kasasına etkisinin ayrı okunması",
];

const sorular = [
  {
    soru: "GOLDA ne zaman işleme başlayacak?",
    cevap:
      "GOLDA payları 8 Temmuz 2026 Çarşamba günü Borsa İstanbul Yıldız Pazar'da işleme başlayacak.",
  },
  {
    soru: "Golda Gıda halka arz fiyatı kaç TL?",
    cevap:
      "Golda Gıda halka arz fiyatı 9,20 TL olarak açıklandı.",
  },
  {
    soru: "GOLDA hangi pazarda işlem görecek?",
    cevap:
      "GOLDA paylarının Borsa İstanbul Yıldız Pazar'da işlem görmesi bekleniyor.",
  },
  {
    soru: "Golda Gıda halka arzında kaç lot satışa sunuldu?",
    cevap:
      "Golda Gıda halka arzında toplam 87.499.998 lot pay satışa sunuldu. Bunun 50.000.000 lotu sermaye artırımı, 37.499.998 lotu ise ortak satışı niteliğindedir.",
  },
  {
    soru: "Golda Gıda halka arzı katılım endeksine uygun mu?",
    cevap:
      "Paylaşılan halka arz bilgilerinde Golda Gıda katılım endeksine uygun halka arzlar arasında yer aldı.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NewsArticle",
      headline: title,
      description,
      image: haberGorsel,
      datePublished: haberSaati,
      dateModified: haberSaati,
      url: haberUrl,
      inLanguage: "tr",
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
      mainEntityOfPage: haberUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: sorular.map((item) => ({
        "@type": "Question",
        name: item.soru,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.cevap,
        },
      })),
    },
  ],
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function GoldaGidaIslemeBasliyorPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={`/${gorselDosya}`}
              alt="Golda Gıda 8 Temmuz 2026 Çarşamba işleme başlıyor"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              GOLDA Gıda 8 Temmuz 2026 Çarşamba İşleme Başlıyor
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Halka Arz
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Golda Gıda San. ve Tic. A.Ş. payları için halka arz sonrası
                işlem başlangıcı netleşti. Şirket payları{" "}
                <strong>GOLDA</strong> koduyla 8 Temmuz 2026 Çarşamba günü
                Borsa İstanbul Yıldız Pazar’da işlem görmeye başlayacak.
              </p>

              <p>
                Golda Gıda halka arzı 9,20 TL fiyat, 87.499.998 lot toplam
                halka arz payı, %35 halka açıklık oranı ve eşit dağıtım yapısıyla
                yatırımcıların gündemine gelmişti. İlk işlem günü öncesinde
                yatırımcıların sadece tavan serisi beklentisine değil; halka arz
                fiyatına, arz büyüklüğüne, fon kullanım planına, gıda sektörünün
                maliyet dinamiklerine ve şirketin finansal görünümüne birlikte
                bakması gerekir.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <div className="text-sm font-semibold text-emerald-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-emerald-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-emerald-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="GOLDA ilk işlem günü öncesi özet tablo">
                <div className="grid gap-3 sm:grid-cols-2">
                  {detaylar.map((item) => (
                    <div
                      key={item.etiket}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-semibold text-slate-500">
                        {item.etiket}
                      </div>
                      <div className="mt-1 text-base font-bold text-slate-900">
                        {item.deger}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="GOLDA ne zaman işlem görecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Açıklanan takvime göre Golda Gıda payları 8 Temmuz 2026
                  Çarşamba günü GOLDA koduyla işlem görmeye başlayacak. Payların
                  işlem göreceği pazar Yıldız Pazar olarak yer alıyor.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İlk işlem günü, halka arz fiyatı olan 9,20 TL’nin piyasa
                  tarafından nasıl fiyatlanacağını göstermesi açısından
                  önemlidir. Açılış sonrası emir dengesi, işlem hacmi, tavan
                  fiyat seviyesinde bekleyen lot miktarı ve gün sonu kapanışı
                  kısa vadeli yatırımcı davranışını anlamak için izlenecek ana
                  başlıklar arasında bulunur.
                </p>
              </Section>

              <Section title="Golda Gıda halka arz yapısı">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Golda Gıda halka arzında toplam 87.499.998 lot pay satışa
                  sunuldu. Bunun 50.000.000 lotu sermaye artırımı, 37.499.998
                  lotu ise Bera Holding A.Ş. kaynaklı ortak satışı niteliğinde.
                  Bu ayrım önemlidir; çünkü halka arz büyüklüğünün tamamı
                  şirket kasasına girmez.
                </p>

                <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-7 text-blue-900 md:text-base">
                  Fon kullanım planında halka arz gelirinin %50-60 aralığındaki
                  bölümü kapasite artışı ve modernizasyon yatırımlarına, %40-50
                  aralığındaki bölümü ise işletme sermayesine ayrılmıştır. Gıda
                  üretiminde kapasite, hammadde, enerji, ambalaj ve stok yönetimi
                  şirket performansı için yakından izlenmesi gereken alanlardır.
                </div>
              </Section>

              <Section title="Golda Gıda finansal görünümünde ne öne çıkıyor?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Onaylı izahname özetindeki finansal verilere göre Golda
                  Gıda’nın hasılatı 2022 yılında 2021’e göre artarken, 2023
                  yılında geriledi. Buna karşılık brüt kar tarafında 2021’den
                  2023’e doğru artış eğilimi korunuyor. Bu görünüm, ciro ve
                  karlılık dinamiklerinin ayrı ayrı okunması gerektiğini
                  gösterir.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Kalem
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          2021
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          2022
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          2023
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {finansallar.map((item, index) => (
                        <tr
                          key={item.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.kalem}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.y2021}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.y2022}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.y2023}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Gıda üretiminde finansal sonuçlar; buğday ve bakliyat
                  fiyatları, enerji maliyetleri, ambalaj giderleri, ihracat
                  talebi, kur hareketleri, kapasite kullanımı ve stok
                  yönetimiyle birlikte şekillenir. Bu nedenle ilk işlem günü
                  performansı şirketin uzun vadeli değerini tek başına
                  açıklamaz.
                </p>
              </Section>

              <Section title="İlk işlem gününde hangi başlıklar izlenmeli?">
                <div className="grid gap-3 sm:grid-cols-2">
                  {izlemeBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="GOLDA katılım endeksine uygun mu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Paylaşılan halka arz bilgilerinde Golda Gıda katılım endeksine
                  uygun halka arzlar arasında yer aldı. Katılım hassasiyeti olan
                  yatırımcılar için bu bilgi önemli olabilir; ancak endeks
                  uygunluğu dönemsel olarak güncel listeler ve şirket verileriyle
                  birlikte takip edilmelidir.
                </p>
              </Section>

              <Section title="Genel değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  GOLDA için 8 Temmuz 2026 Çarşamba günü başlayacak işlem süreci,
                  halka arzın talep toplama ve dağıtım aşamasından piyasa
                  fiyatlaması aşamasına geçiş anlamına geliyor. 9,20 TL halka
                  arz fiyatı, 87.499.998 lot büyüklük, %35 halka açıklık ve
                  Yıldız Pazar bilgisi ilk işlem günü öncesinde öne çıkan ana
                  veriler.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirketin fon kullanım planında kapasite artışı, modernizasyon
                  ve işletme sermayesi başlıklarının öne çıkması, halka arz
                  sonrası büyüme hikayesinin üretim verimliliği ve operasyonel
                  güçlenme üzerinden izleneceğini gösteriyor. Buna karşılık ilk
                  işlem günü fiyat hareketleri kısa vadeli arz-talep dengesinden
                  etkilenebileceği için yatırım kararlarında yalnızca ilk gün
                  performansına bakmak yeterli olmaz.
                </p>
              </Section>

              <Section title="Sık sorulan sorular">
                <div className="space-y-4">
                  {sorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">
                  İlgili sayfalar
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Link
                    href="/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    GOLDA onaylı izahname detayları
                  </Link>
                  <Link
                    href="/haber/golda-gida-halka-arzina-spk-onayi-geldi"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Golda Gıda SPK onayı haberi
                  </Link>
                  <Link
                    href="/halka-arz/takvim"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Güncel halka arz takvimi
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. İlk işlem günü fiyat hareketleri kısa vadeli
                arz-talep dengesinden etkilenebilir; karar verirken güncel
                piyasa koşulları ve kişisel risk profili dikkate alınmalıdır.
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="GOLDA Gıda 8 Temmuz 2026 Çarşamba işleme başlıyor"
              />
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

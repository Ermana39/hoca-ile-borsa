import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const slug = "sohoe-hissesi-6-temmuzda-isleme-basliyor";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/sohoe-hissesi-6-temmuzda-isleme-basliyor.webp";
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const title =
  "SOHOE Hissesi 6 Temmuz'da İşleme Başlıyor: Fiyat, Lot ve Pazar";
const description =
  "SOHOE hissesi 6 Temmuz 2026 Pazartesi Borsa İstanbul Ana Pazar'da işleme başlayacak. Soho Giyim halka arz fiyatı, lot sayısı, halka açıklık, fon kullanımı ve ilk işlem günü detayları.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: haberUrl,
  },
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
        alt: "SOHOE hissesi 6 Temmuz 2026 Pazartesi işleme başlıyor",
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
  { baslik: "İlk İşlem Günü", deger: "6 Temmuz 2026", aciklama: "Pazartesi günü Borsa İstanbul'da takip edilecek" },
  { baslik: "BIST Kodu", deger: "SOHOE", aciklama: "Soho Giyim ve Enerji pay kodu" },
  { baslik: "Halka Arz Fiyatı", deger: "15,00 TL", aciklama: "%37 iskonto ile açıklanan fiyat" },
  { baslik: "Pazar", deger: "Ana Pazar", aciklama: "Payların işlem göreceği BIST pazarı" },
];

const detaylar = [
  { etiket: "Şirket", deger: "Soho Giyim ve Enerji A.Ş." },
  { etiket: "BIST Kodu", deger: "SOHOE" },
  { etiket: "İlk İşlem Tarihi", deger: "6 Temmuz 2026 Pazartesi" },
  { etiket: "Halka Arz Fiyatı", deger: "15,00 TL" },
  { etiket: "Toplam Halka Arz Payı", deger: "100.000.000 lot" },
  { etiket: "Halka Arz Büyüklüğü", deger: "1.500.000.000 TL" },
  { etiket: "Halka Açıklık Oranı", deger: "%32,6" },
  { etiket: "Dağıtım Yöntemi", deger: "Tamamı eşit dağıtım" },
  { etiket: "Halka Arz Şekli", deger: "Sermaye artırımı" },
  { etiket: "Ortak Satışı", deger: "Yok" },
  { etiket: "Katılım Endeksi", deger: "Uygun" },
  { etiket: "Aracı Kurum", deger: "İntegral Yatırım Menkul Değerler A.Ş." },
];

const finansallar = [
  { kalem: "Hasılat", y2024: "2,6 milyar TL", y2025: "3,0 milyar TL", c2026: "0,7 milyar TL" },
  { kalem: "Esas Faaliyet Karı", y2024: "488 milyon TL", y2025: "904 milyon TL", c2026: "211 milyon TL" },
  { kalem: "Dönem Karı", y2024: "84 milyon TL", y2025: "49 milyon TL", c2026: "4 milyon TL" },
  { kalem: "Toplam Varlıklar", y2024: "4,1 milyar TL", y2025: "5,0 milyar TL", c2026: "5,2 milyar TL" },
  { kalem: "Özkaynaklar", y2024: "2,3 milyar TL", y2025: "2,4 milyar TL", c2026: "2,4 milyar TL" },
];

const sorular = [
  {
    soru: "SOHOE ne zaman işleme başlayacak?",
    cevap:
      "SOHOE paylarının 6 Temmuz 2026 Pazartesi günü Borsa İstanbul Ana Pazar'da işleme başlaması bekleniyor.",
  },
  {
    soru: "SOHOE halka arz fiyatı kaç TL?",
    cevap:
      "Soho Giyim ve Enerji halka arz fiyatı 15,00 TL olarak açıklandı.",
  },
  {
    soru: "SOHOE halka arzı katılım endeksine uygun mu?",
    cevap:
      "Onaylı izahname bilgilerine göre SOHOE halka arzı BIST Katılım Endeksine uygun olarak yer aldı.",
  },
  {
    soru: "SOHOE halka arzında ortak satışı var mı?",
    cevap:
      "SOHOE halka arzı sermaye artırımı yoluyla yapıldı; mevcut ortak satışı bulunmuyor.",
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

export default function SohoeIslemeBasliyorPage() {
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
              src="/sohoe-hissesi-6-temmuzda-isleme-basliyor.webp"
              alt="SOHOE hissesi 6 Temmuz 2026 Pazartesi işleme başlıyor"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              SOHOE Hissesi 6 Temmuz 2026 Pazartesi İşleme Başlıyor
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
                Soho Giyim ve Enerji A.Ş. payları için halka arz sonrası yeni
                aşama başlıyor. <strong>SOHOE</strong> koduyla takip edilecek
                payların 6 Temmuz 2026 Pazartesi günü Borsa İstanbul Ana
                Pazar&apos;da işlem görmeye başlaması bekleniyor.
              </p>

              <p>
                SOHOE halka arzı, 15,00 TL fiyat, 100.000.000 lot halka arz
                payı, %32,6 halka açıklık oranı ve tamamı sermaye artırımı
                yapısıyla yatırımcıların gündemine gelmişti. İlk işlem günü
                öncesinde yatırımcıların sadece açılış fiyatına değil, halka arz
                yapısına, fon kullanım planına, katılım endeksi durumuna ve
                şirketin finansal görünümüne birlikte bakması gerekiyor.
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

              <Section title="SOHOE ilk işlem günü öncesi özet tablo">
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

              <Section title="SOHOE ne zaman işlem görecek?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Açıklanan takvime göre SOHOE paylarının 6 Temmuz 2026
                  Pazartesi günü işlem görmeye başlaması bekleniyor. Payların
                  işlem göreceği pazar Ana Pazar olarak yer alıyor. İlk işlem
                  günü, halka arz sonrası fiyatlamanın piyasada oluşmaya
                  başladığı ilk gün olduğu için hem halka arza katılan
                  yatırımcılar hem de tahtayı sonradan takip edecek yatırımcılar
                  açısından ayrı bir önem taşıyor.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Halka arz fiyatı 15,00 TL olduğu için ilk işlem gününde
                  yatırımcıların izleyeceği başlıklardan biri de bu fiyatın
                  üzerine oluşacak talep, emir dengesi ve gün içi likidite
                  olacak. İlk günlerde görülebilecek hareketlerin sadece şirket
                  verileriyle değil, genel halka arz ilgisi, piyasa koşulları ve
                  arz sonrası dolaşımdaki pay miktarıyla birlikte okunması daha
                  sağlıklı olur.
                </p>
              </Section>

              <Section title="Halka arz yapısı neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SOHOE halka arzında satışa konu edilen 100.000.000 lot payın
                  tamamı sermaye artırımı niteliğinde. Mevcut ortak satışı
                  bulunmaması, halka arzdan sağlanacak kaynağın şirket bünyesine
                  girmesi açısından önemli bir ayrım oluşturuyor. Bu yapı,
                  yatırımcıların fon kullanım planını daha dikkatli okumasını
                  gerektiriyor.
                </p>

                <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-7 text-blue-900 md:text-base">
                  Soho Giyim ve Enerji halka arzında fon kullanım planı; %60
                  kreasyon yatırımları, %30 mağazalaşma yatırımları ve %10
                  markalaşma yatırımları olarak paylaşıldı. Bu dağılım, şirketin
                  halka arz kaynağını büyüme ve marka konumlandırması için
                  kullanmayı planladığını gösteriyor.
                </div>
              </Section>

              <Section title="Şirketin finansal görünümü">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Onaylı izahname sayfasındaki finansal verilere göre Soho
                  Giyim ve Enerji tarafında 2025 yılında hasılat 2024 yılına
                  göre artarken esas faaliyet karında daha belirgin bir yükseliş
                  görülüyor. Buna karşılık dönem karının aynı ölçüde artmaması,
                  operasyon dışı kalemler, finansman giderleri ve dönemsel
                  etkiler açısından ayrıca incelenmesi gereken bir başlık.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Kalem
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          2024
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          2025
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          2026/1Ç
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
                            {item.y2024}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.y2025}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {item.c2026}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  2026/1Ç verileri üç aylık dönemi kapsadığı için tam yıl
                  verileriyle doğrudan kıyaslanmamalıdır. İlk işlem günü
                  öncesinde finansal tablo tarafında hasılat, esas faaliyet karı,
                  dönem karı, kısa vadeli yükümlülükler ve halka arz sonrası
                  fonun nasıl kullanılacağı birlikte takip edilmelidir.
                </p>
              </Section>

              <Section title="İlk işlem gününde hangi başlıklar izlenmeli?">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  <p>
                    İlk işlem gününde yatırımcıların en çok baktığı alanlardan
                    biri emir dengesi ve açılış sonrası likidite olur. Halka arz
                    sonrası dolaşımdaki pay miktarı, yatırımcı sayısı, elde
                    tutma eğilimi ve genel piyasa iştahı fiyat davranışını
                    etkileyebilir.
                  </p>
                  <p>
                    SOHOE özelinde tamamen eşit dağıtım, katılım endeksine
                    uygunluk ve halka arzın tamamının sermaye artırımı yoluyla
                    yapılması öne çıkan başlıklar arasında. Buna karşın ilk
                    işlem günü hareketi tek başına uzun vadeli şirket değeri
                    hakkında yeterli gösterge sayılmamalı.
                  </p>
                  <p>
                    Özellikle halka arz sonrası tavan serisi beklentisiyle işlem
                    yapan yatırımcıların fiyat hareketini şirket finansalları,
                    arz büyüklüğü, halka açıklık oranı ve piyasa koşullarıyla
                    birlikte değerlendirmesi gerekir.
                  </p>
                </div>
              </Section>

              <Section title="SOHOE katılım endeksine uygun mu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Onaylı izahname bilgilerine göre SOHOE halka arzı BIST Katılım
                  Endeksine uygun olarak yer aldı. Bu bilgi, katılım hassasiyeti
                  olan yatırımcıların halka arz sürecinde özellikle takip ettiği
                  başlıklardan biridir. Ancak katılım endeksi uygunluğu zaman
                  içinde finansal oranlar ve faaliyet yapısına bağlı olarak
                  yeniden değerlendirilebileceği için sonraki dönemlerde
                  açıklanacak güncel listeler de izlenmelidir.
                </p>
              </Section>

              <Section title="Genel değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SOHOE için 6 Temmuz 2026 Pazartesi günü başlayacak işlem
                  süreci, halka arzın talep toplama ve dağıtım aşamasından piyasa
                  fiyatlaması aşamasına geçiş anlamına geliyor. 15,00 TL halka
                  arz fiyatı, 100.000.000 lot büyüklük, %32,6 halka açıklık ve
                  Ana Pazar bilgisi ilk işlem günü öncesinde öne çıkan ana
                  veriler.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Şirketin fon kullanım planının kreasyon, mağazalaşma ve
                  markalaşma yatırımlarına odaklanması, halka arz sonrası
                  büyüme hikayesinin bu başlıklar üzerinden takip edileceğini
                  gösteriyor. Buna karşılık ilk işlem günü fiyat hareketleri kısa
                  vadeli arz-talep dengesinden etkilenebileceği için yatırım
                  kararlarında yalnızca ilk gün performansına bakmak yeterli
                  olmaz.
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
                    href="/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    SOHOE onaylı izahname detayları
                  </Link>
                  <Link
                    href="/haber/soho-giyim-halka-arzinda-dagitimlar-sonuclandi"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    SOHOE dağıtım sonuçları
                  </Link>
                  <Link
                    href="/halka-arz/takvim"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Güncel halka arz takvimi
                  </Link>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="SOHOE hissesi 6 Temmuz 2026 Pazartesi işleme başlıyor"
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

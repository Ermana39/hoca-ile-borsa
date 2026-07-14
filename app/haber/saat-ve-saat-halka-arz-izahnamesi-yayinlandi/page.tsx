import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "saat-ve-saat-halka-arz-izahnamesi-yayinlandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/saat-ve-saat-halka-arz-izahnamesi-yayinlandi.webp";

export const metadata: Metadata = {
  title:
    "Saat ve Saat Halka Arz İzahnamesi Yayınlandı: Talep Tarihi, Fiyat ve Lot Detayları",
  description:
    "Saat ve Saat halka arz izahnamesi yayınlandı. SSAAT halka arz talep toplama tarihleri 6-7-8 Temmuz 2026, fiyat 56,00 TL, toplam pay 80.333.946 lot, halka arz büyüklüğü 4,49 milyar TL oldu.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "Saat ve Saat Halka Arz İzahnamesi Yayınlandı: 56 TL Fiyat, 80,3 Milyon Lot",
    description:
      "Saat ve Saat halka arzında talep toplama 6-7-8 Temmuz 2026 tarihlerinde yapılacak. Bireysele eşit dağıtım, T1-T2 yok, katılım endeksine uygun.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Saat ve Saat halka arz izahnamesi yayınlandı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Saat ve Saat Halka Arz İzahnamesi Yayınlandı: Talep Tarihi, Fiyat ve Lot Detayları",
    description:
      "SSAAT halka arzında fiyat 56,00 TL, talep tarihleri 6-7-8 Temmuz 2026, toplam pay 80.333.946 lot.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Halka Arz Fiyatı", deger: "56,00 TL", aciklama: "%37,01 iskonto oranı" },
  { baslik: "Talep Tarihleri", deger: "6-7-8 Temmuz", aciklama: "09.00-17.00 saatleri arasında" },
  { baslik: "Toplam Pay", deger: "80.333.946 Lot", aciklama: "Ek satış dahil" },
  { baslik: "Halka Arz Büyüklüğü", deger: "4,49 Milyar TL", aciklama: "Ek satış dahil hesap" },
];

const detayKartlari = [
  { baslik: "BIST Kodu", deger: "SSAAT" },
  { baslik: "Dağıtım Yöntemi", deger: "Bireysele Eşit Dağıtım" },
  { baslik: "T1-T2", deger: "Kullanılamaz" },
  { baslik: "Pazar", deger: "Yıldız Pazar" },
  { baslik: "Halka Açıklık", deger: "%12,16" },
  { baslik: "Katılım Endeksi", deger: "Uygun" },
  { baslik: "Aracı Kurumlar", deger: "Halk Yatırım / Garanti Yatırım" },
  { baslik: "Fiyat İstikrarı", deger: "30 gün planlanıyor" },
];

const halkaArzSekli = [
  { kalem: "Sermaye Artırımı", lot: "40.166.973 Lot", yorum: "Bu bölümden sağlanacak kaynak şirket kasasına girecek." },
  { kalem: "Ortak Satışı", lot: "26.777.982 Lot", yorum: "Mevcut ortak paylarının satışı niteliğinde." },
  { kalem: "Ek Satış", lot: "13.388.991 Lot", yorum: "Ek satış dahil toplam halka açıklık %12,16 olarak açıklandı." },
  { kalem: "Toplam Dağıtılacak Pay", lot: "80.333.946 Lot", yorum: "Ek satış dahil toplam halka arz büyüklüğü 4.498.700.976 TL." },
];

const tahsisat = [
  { grup: "Yurt İçi Bireysel Yatırımcı", oran: "%60", lot: "40.166.973 Lot" },
  { grup: "Yurt İçi Kurumsal Yatırımcı", oran: "%40", lot: "26.777.982 Lot" },
];

const finansalVeriler = [
  { kalem: "Toplam Varlıklar", y2024: "8,8 Milyar TL", y2025: "9,4 Milyar TL", c2026: "9,4 Milyar TL" },
  { kalem: "Kısa Vadeli Yükümlülükler", y2024: "4,8 Milyar TL", y2025: "5,1 Milyar TL", c2026: "5,3 Milyar TL" },
  { kalem: "Özkaynaklar", y2024: "3,3 Milyar TL", y2025: "3,7 Milyar TL", c2026: "3,5 Milyar TL" },
  { kalem: "Hasılat", y2024: "11,5 Milyar TL", y2025: "13,0 Milyar TL", c2026: "3,3 Milyar TL" },
  { kalem: "Esas Faaliyet Kârı", y2024: "3,5 Milyar TL", y2025: "3,5 Milyar TL", c2026: "763 Milyon TL" },
  { kalem: "Net Dönem Kârı", y2024: "1,2 Milyar TL", y2025: "1,5 Milyar TL", c2026: "254 Milyon TL" },
];

const konsorsiyumUyeleri = [
  "A1 Capital", "Acar", "Ahlatcı", "Ak Yatırım", "Alnus", "Alternatif",
  "Anadolu", "Ata", "Bizim", "Bulls", "Burgan", "BTC Türk", "Colendi",
  "Deniz", "Destek", "Dinamik", "Fiba", "Gedik", "Global", "ICBC",
  "ING", "Investaz", "İnfo", "İntegral", "İş Yatırım", "Kuveyt Türk",
  "Marbaş", "Meksa", "Osmanlı", "Oyak", "PhillipCapital", "Pusula",
  "Piramit", "QNB", "Şeker", "Tacirler", "TEB", "Tera", "Turkish",
  "Ünlü", "Vakıf", "Yapı Kredi", "Yatırım Finansman", "Ziraat Yatırım",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Saat ve Saat Halka Arz İzahnamesi Yayınlandı: Talep Tarihi, Fiyat ve Lot Detayları",
  description:
    "Saat ve Saat halka arz izahnamesi yayınlandı. SSAAT halka arz fiyatı, talep toplama tarihleri, lot sayısı, halka arz büyüklüğü, fon kullanımı ve finansal görünüm.",
  image: haberGorsel,
  datePublished: "2026-07-03T14:30:00+03:00",
  dateModified: "2026-07-03T14:30:00+03:00",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Saat ve Saat halka arz ne zaman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saat ve Saat halka arzında talep toplama tarihleri 6-7-8 Temmuz 2026 olarak açıklandı.",
      },
    },
    {
      "@type": "Question",
      name: "Saat ve Saat halka arz fiyatı kaç TL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saat ve Saat halka arz fiyatı 56,00 TL olarak açıklandı.",
      },
    },
    {
      "@type": "Question",
      name: "Saat ve Saat halka arz kaç lot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ek satış dahil toplam dağıtılacak pay 80.333.946 lot olarak açıklandı.",
      },
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

export default function SaatVeSaatHalkaArzHaberPage() {
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
              src="/saat-ve-saat-halka-arz-izahnamesi-yayinlandi.webp"
              alt="Saat ve Saat halka arz izahnamesi yayınlandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Saat ve Saat Halka Arz İzahnamesi Yayınlandı: Talep Tarihi, Fiyat,
              Lot ve Tüm Detaylar
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20">
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
                Saat ve Saat San. ve Tic. A.Ş. için onaylı izahname ve halka arz
                detayları netleşti. Şirket payları <strong>SSAAT</strong> koduyla
                Borsa İstanbul’da işlem görmek üzere halka arz edilecek. Talep
                toplama tarihleri <strong>6-7-8 Temmuz 2026</strong>, halka arz
                fiyatı ise <strong>56,00 TL</strong> olarak açıklandı.
              </p>

              <p>
                Halka arzda bireysel yatırımcı tarafında <strong>bireysele eşit
                dağıtım</strong> yöntemi uygulanacak. <strong>T1-T2 bakiye
                kullanılamayacak</strong>. Ek satış dahil toplam dağıtılacak pay
                <strong> 80.333.946 lot</strong>, halka arz büyüklüğü ise
                <strong> 4.498.700.976 TL</strong> seviyesinde olacak.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Saat ve Saat halka arzında talep toplama süreci 6-7-8 Temmuz
                  2026 tarihlerinde, 09.00-17.00 saatleri arasında yapılacak.
                  Pay başına halka arz fiyatı 56,00 TL olarak belirlendi. Şirketin
                  halka arzı, sermaye artırımı, ortak satışı ve ek satış
                  kalemlerinden oluşuyor.
                </p>
              </Section>

              <Section title="Saat ve Saat halka arz özeti">
                <div className="grid gap-3 sm:grid-cols-2">
                  {detayKartlari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-medium text-slate-500">
                        {item.baslik}
                      </div>
                      <div className="mt-1 whitespace-pre-line text-base font-bold text-slate-900">
                        {item.deger}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Halka arz şekli ve kaç lot dağıtılacak?">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Kalem</th>
                        <th className="px-4 py-3 text-left font-bold">Lot</th>
                        <th className="px-4 py-3 text-left font-bold">Yorum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {halkaArzSekli.map((item, index) => (
                        <tr
                          key={item.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-semibold text-slate-800">
                            {item.kalem}
                          </td>
                          <td className="px-4 py-3 font-bold text-blue-700">
                            {item.lot}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {item.yorum}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Tahsisat grupları">
                <div className="grid gap-4 sm:grid-cols-2">
                  {tahsisat.map((item) => (
                    <div
                      key={item.grup}
                      className="rounded-2xl border border-amber-200 bg-amber-50 p-4"
                    >
                      <div className="text-sm font-semibold text-amber-900">
                        {item.grup}
                      </div>
                      <div className="mt-1 text-xl font-bold text-amber-950">
                        {item.oran}
                      </div>
                      <div className="mt-1 text-sm font-medium text-amber-900">
                        {item.lot}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Bireysel yatırımcıya ayrılan pay oranı %60 olduğu için halka
                  arzda bireysel tarafta dağıtılacak lot sayısı 40.166.973 lot
                  olarak açıklandı. Kurumsal yatırımcı tahsisatı ise %40 oran
                  ve 26.777.982 lot olarak yer alıyor.
                </p>
              </Section>

              <Section title="Fon kullanım yeri">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <div className="text-sm font-semibold text-emerald-800">
                      İşletme Sermayesi
                    </div>
                    <div className="mt-1 text-2xl font-bold text-emerald-950">
                      %80
                    </div>
                    <p className="mt-2 text-sm leading-6 text-emerald-900">
                      Stok yönetimi, mağaza operasyonları, bayi kanalı, ithalat,
                      e-ticaret ve ürün sürekliliği açısından kullanılacak ana
                      kaynak kalemi.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                    <div className="text-sm font-semibold text-cyan-800">
                      Finansal Borç Ödemesi
                    </div>
                    <div className="mt-1 text-2xl font-bold text-cyan-950">
                      %20
                    </div>
                    <p className="mt-2 text-sm leading-6 text-cyan-900">
                      Finansal borçların azaltılması, borçluluk ve finansman
                      giderleri açısından destekleyici olabilir.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Halka arzda sermaye artırımıyla birlikte ortak satışı ve ek
                  satış da bulunduğu için yatırımcı açısından şirket kasasına
                  girecek kaynak ile ortak satışı kaynaklı tutar ayrı
                  değerlendirilmelidir.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Saat ve Saat San. ve Tic. A.Ş., 1994 yılında kurulan ve
                  Türkiye’de saat ile aksesuar perakendeciliği, distribütörlüğü
                  ve toptan satışı alanında faaliyet gösteren bir şirkettir.
                  Şirketin faaliyetleri; marka portföyü, mağaza ağı, bayi kanalı,
                  e-ticaret satışları, ithalat maliyetleri, stok yönetimi ve
                  tüketici talebiyle yakından ilişkilidir. Paylaşılan bilgilere
                  göre şirketin Türkiye genelinde 170’ten fazla mağazası, 600’ün
                  üzerinde bayi ve zincir mağaza satış noktası ile geniş bir
                  dağıtım ağı bulunmaktadır.
                </p>
              </Section>

              <Section title="Finansal görünüm">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Kalem</th>
                        <th className="px-4 py-3 text-left font-bold">2024</th>
                        <th className="px-4 py-3 text-left font-bold">2025</th>
                        <th className="px-4 py-3 text-left font-bold">2026/1Ç</th>
                      </tr>
                    </thead>
                    <tbody>
                      {finansalVeriler.map((item, index) => (
                        <tr
                          key={item.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-semibold text-slate-800">
                            {item.kalem}
                          </td>
                          <td className="px-4 py-3 text-slate-700">{item.y2024}</td>
                          <td className="px-4 py-3 text-slate-700">{item.y2025}</td>
                          <td className="px-4 py-3 text-slate-700">{item.c2026}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  2024-2025 döneminde hasılat 11,5 milyar TL’den 13,0 milyar
                  TL’ye yükselirken, net dönem kârı 1,2 milyar TL’den 1,5 milyar
                  TL’ye çıktı. 2026 ilk çeyrekte 3,3 milyar TL hasılat ve 254
                  milyon TL net dönem kârı açıklandı. Bununla birlikte kısa vadeli
                  yükümlülüklerin 2026 ilk çeyrekte 5,3 milyar TL seviyesine
                  yükselmesi nedeniyle işletme sermayesi ve borçluluk görünümü
                  yakından izlenmelidir.
                </p>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Saat ve Saat halka arzı; marka bilinirliği yüksek, perakende ve
                  distribütörlük tarafında geniş ağa sahip bir şirketin Borsa
                  İstanbul’a gelmesi açısından yatırımcı ilgisi çekebilecek bir
                  başlık. Bireysele eşit dağıtım yöntemi, T1-T2 bakiye
                  kullanılamaması ve katılım endeksine uygunluk bilgisi halka arz
                  katılımını doğrudan etkileyebilecek detaylar arasında yer alıyor.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Halka arzda 56,00 TL fiyat ve %37,01 iskonto bilgisi dikkat
                  çekiyor. Finansal tarafta hasılat ve net kârda büyüme görülse de,
                  şirketin stok finansmanı, ithalat maliyetleri, kur hareketleri,
                  tüketici talebi ve kısa vadeli yükümlülükleri yakından takip
                  edilmeli. Fonun ağırlıklı olarak işletme sermayesine ayrılması,
                  şirketin büyüme döngüsünde nakit yönetiminin önemli olduğunu
                  gösteriyor.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Yatırımcılar için sıradaki aşama 6-7-8 Temmuz 2026 tarihlerinde
                  yapılacak talep toplama süreci olacak. Talep toplama sonrası
                  dağıtım sonuçları, kişi başı düşen lot sayısı, halka arz
                  büyüklüğünün kesinleşen hali ve Borsa İstanbul’da ilk işlem
                  tarihi takip edilecek.
                </p>
              </Section>

              <Section title="Konsorsiyum üyeleri">
                <div className="flex flex-wrap gap-2">
                  {konsorsiyumUyeleri.map((uye) => (
                    <span
                      key={uye}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {uye}
                    </span>
                  ))}
                </div>
              </Section>

              <Section title="Sık aranan sorular">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Saat ve Saat halka arz ne zaman?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Talep toplama tarihleri 6-7-8 Temmuz 2026 olarak açıklandı.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Saat ve Saat halka arz fiyatı kaç TL?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Halka arz fiyatı 56,00 TL olarak açıklandı.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Saat ve Saat kaç lot dağıtacak?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Ek satış dahil toplam dağıtılacak pay 80.333.946 lot olarak
                      açıklandı.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Saat ve Saat T1-T2 bakiye ile alınır mı?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Açıklanan bilgilere göre halka arzda T1-T2 bakiye
                      kullanılamaz.
                    </p>
                  </div>
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynaklar</div>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://www.kap.org.tr/tr"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Orjinal Kap içeriği
                  </a>
                  <a
                    href="https://saatvesaat.com/YatirimciIliskilerIzahname"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    Saat ve Saat yatırımcı ilişkileri izahname ve ekleri
                  </a>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Saat ve Saat Halka Arz İzahnamesi Yayınlandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Halka arz kararlarında onaylı izahname, tasarruf
                sahiplerine satış duyurusu, aracı kurum duyuruları ve güncel KAP
                açıklamaları birlikte kontrol edilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}

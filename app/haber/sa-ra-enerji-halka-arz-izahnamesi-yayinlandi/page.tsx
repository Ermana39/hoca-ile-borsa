import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "sa-ra-enerji-halka-arz-izahnamesi-yayinlandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/sa-ra-enerji-halka-arz-izahnamesi-yayinlandi.webp";

export const metadata: Metadata = {
  title:
    "Şa-Ra Enerji Halka Arzı: SARAE Fiyat, Tarih ve Lot",
  description:
    "SARAE halka arzında 8-9-10 Temmuz talep tarihi, 70 TL fiyat, 89 milyon lot, tahsisat grupları, T1-T2 durumu ve katılım endeksi bilgileri.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "Şa-Ra Enerji Halka Arzı: SARAE Fiyat, Tarih ve Lot",
    description:
      "SARAE halka arzında 8-9-10 Temmuz talep tarihi, 70 TL fiyat, 89 milyon lot, tahsisat grupları, T1-T2 durumu ve katılım endeksi bilgileri.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Şa-Ra Enerji halka arz izahnamesi yayınlandı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Şa-Ra Enerji Halka Arzı: SARAE Fiyat, Tarih ve Lot",
    description:
      "SARAE halka arzında 8-9-10 Temmuz talep tarihi, 70 TL fiyat, 89 milyon lot, tahsisat grupları, T1-T2 durumu ve katılım endeksi bilgileri.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Halka Arz Fiyatı", deger: "70,00 TL", aciklama: "%20 iskonto oranı" },
  { baslik: "Talep Tarihleri", deger: "8-9-10 Temmuz", aciklama: "09.00-17.00 saatleri arasında" },
  { baslik: "Toplam Pay", deger: "89.000.000 Lot", aciklama: "Sermaye artırımı + ortak satışı" },
  { baslik: "Halka Arz Büyüklüğü", deger: "6,23 Milyar TL", aciklama: "70,00 TL fiyat üzerinden" },
];

const detayKartlari = [
  { baslik: "BIST Kodu", deger: "SARAE" },
  { baslik: "Dağıtım Yöntemi", deger: "Bireysele eşit / yüksek başvuruya oransal" },
  { baslik: "T1-T2", deger: "Kullanılamaz" },
  { baslik: "Pazar", deger: "Yıldız Pazar" },
  { baslik: "Halka Açıklık", deger: "%20,02" },
  { baslik: "Katılım Endeksi", deger: "Uygun değil" },
  { baslik: "Aracı Kurum", deger: "Tera Yatırım" },
  { baslik: "Fiyat İstikrarı", deger: "Planlanmıyor" },
];

const halkaArzSekli = [
  {
    kalem: "Sermaye Artırımı",
    lot: "44.500.000 Lot",
    yorum: "Bu bölümden sağlanacak kaynak şirket kasasına girecek.",
  },
  {
    kalem: "Ortak Satışı",
    lot: "44.500.000 Lot",
    yorum: "Mevcut ortak paylarının satışı niteliğinde olacak.",
  },
  {
    kalem: "Toplam Dağıtılacak Pay",
    lot: "89.000.000 Lot",
    yorum: "Toplam halka arz büyüklüğü 6.230.000.000 TL olarak hesaplanıyor.",
  },
  {
    kalem: "Halka Açıklık Oranı",
    lot: "%20,02",
    yorum: "Halka arz sonrası oluşması beklenen halka açıklık oranı.",
  },
];

const tahsisat = [
  {
    grup: "Yurt İçi Bireysel Yatırımcı",
    oran: "%38",
    lot: "33.820.000 Lot",
    not: "115.000 lot ve altı başvurular; 8.050.000 TL ve altı.",
  },
  {
    grup: "Yüksek Başvurulu Yatırımcı",
    oran: "%10",
    lot: "8.900.000 Lot",
    not: "115.001 lot ve üstü başvurular; 8.050.070 TL ve üstü.",
  },
  {
    grup: "Grup Çalışanları",
    oran: "%2",
    lot: "1.780.000 Lot",
    not: "Şirket grup çalışanlarına ayrılan tahsisat.",
  },
  {
    grup: "Yurt İçi Kurumsal Yatırımcı",
    oran: "%25",
    lot: "22.250.000 Lot",
    not: "Kurumsal yatırımcı tahsisatının yurt içi bölümü.",
  },
  {
    grup: "Yurt Dışı Kurumsal Yatırımcı",
    oran: "%25",
    lot: "22.250.000 Lot",
    not: "Kurumsal yatırımcı tahsisatının yurt dışı bölümü.",
  },
];

const finansalVeriler = [
  { kalem: "Dönen Varlıklar", y2024: "8,5 Milyar TL", y2025: "10,3 Milyar TL", c2026: "12,3 Milyar TL" },
  { kalem: "Duran Varlıklar", y2024: "3,2 Milyar TL", y2025: "7,4 Milyar TL", c2026: "6,3 Milyar TL" },
  { kalem: "Toplam Varlıklar", y2024: "16 Milyar TL", y2025: "17 Milyar TL", c2026: "18 Milyar TL" },
  { kalem: "Kısa Vadeli Yükümlülükler", y2024: "6,2 Milyar TL", y2025: "7,6 Milyar TL", c2026: "9,4 Milyar TL" },
  { kalem: "Uzun Vadeli Yükümlülükler", y2024: "4,2 Milyar TL", y2025: "3,5 Milyar TL", c2026: "2,2 Milyar TL" },
  { kalem: "Özkaynaklar", y2024: "6,2 Milyar TL", y2025: "6,6 Milyar TL", c2026: "7,0 Milyar TL" },
  { kalem: "Hasılat", y2024: "14 Milyar TL", y2025: "7 Milyar TL", c2026: "3,3 Milyar TL" },
  { kalem: "Esas Faaliyet Kârı", y2024: "2,8 Milyar TL", y2025: "2,0 Milyar TL", c2026: "0,9 Milyar TL" },
  { kalem: "Net Dönem Kârı", y2024: "1,8 Milyar TL", y2025: "363 Milyon TL", c2026: "370 Milyon TL" },
];

const fonKullanim = [
  {
    baslik: "İşletme Sermayesi",
    oran: "%55",
    aciklama:
      "Proje bazlı işlerde sipariş, hammadde, stok, saha operasyonu ve müşteri vadeleri nedeniyle ihtiyaç duyulan ana kaynak kalemi.",
  },
  {
    baslik: "Finansal Borç Ödemesi",
    oran: "%30",
    aciklama:
      "Borçluluğun azaltılması, finansman giderlerinin yönetilmesi ve bilanço esnekliği açısından takip edilecek başlık.",
  },
  {
    baslik: "Yatırım Harcamaları",
    oran: "%15",
    aciklama:
      "Üretim kapasitesi, makine parkı, enerji altyapısı ve operasyonel verimlilik tarafında kullanılacak kaynak bölümü.",
  },
];

const konsorsiyumUyeleri = [
  "A1 Capital", "Acar", "Ahlatcı", "Alnus", "Alternatif", "Anadolu", "Ata",
  "Bizim", "BTC Türk", "Bulls", "Burgan", "Colendi", "Deniz", "Destek",
  "Fiba", "Garanti", "Gedik", "Global", "Halk", "ICBC", "ING", "Investaz",
  "İnfo", "İntegral", "İş Yatırım", "Kuveyt Türk", "Marbaş", "Meksa",
  "Midas", "Osmanlı", "Oyak", "PhillipCapital", "Piramit", "Pusula", "QNB",
  "Şeker", "Tacirler", "TEB", "Trive", "Turkish", "Ünlü", "Vakıf",
  "Yapı Kredi", "Yatırım Finansman", "Ziraat Yatırım",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Şa-Ra Enerji Halka Arzı: SARAE Fiyat, Tarih ve Lot",
  description:
    "SARAE halka arzında 8-9-10 Temmuz talep tarihi, 70 TL fiyat, 89 milyon lot, tahsisat grupları, T1-T2 durumu ve katılım endeksi bilgileri.",
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
      name: "Şa-Ra Enerji halka arz ne zaman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Şa-Ra Enerji halka arzında talep toplama tarihleri 8-9-10 Temmuz 2026 olarak açıklandı.",
      },
    },
    {
      "@type": "Question",
      name: "Şa-Ra Enerji halka arz fiyatı kaç TL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Şa-Ra Enerji halka arz fiyatı 70,00 TL olarak açıklandı.",
      },
    },
    {
      "@type": "Question",
      name: "Şa-Ra Enerji halka arz kaç lot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toplam dağıtılacak pay 89.000.000 lot olarak açıklandı.",
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

export default function SaRaEnerjiHalkaArzHaberPage() {
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
              src="/sa-ra-enerji-halka-arz-izahnamesi-yayinlandi.webp"
              alt="Şa-Ra Enerji halka arz izahnamesi yayınlandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Şa-Ra Enerji Halka Arzı: SARAE Fiyat, Tarih ve Lot
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
                Şa-Ra Enerji İnşaat Ticaret ve Sanayi A.Ş. için halka arz
                izahnamesi ve satış detayları netleşti. Şirket payları
                <strong> SARAE</strong> koduyla Borsa İstanbul’da işlem görmek
                üzere halka arz edilecek. Talep toplama tarihleri
                <strong> 8-9-10 Temmuz 2026</strong>, halka arz fiyatı ise
                <strong> 70,00 TL</strong> olarak açıklandı.
              </p>

              <p>
                Halka arzda yurt içi bireysel yatırımcı tarafında
                <strong> bireysele eşit dağıtım</strong>, yüksek başvurulu
                yatırımcı tarafında ise <strong>oransal dağıtım</strong>
                uygulanacak. <strong>T1-T2 bakiye kullanılamayacak</strong>.
                Toplam dağıtılacak pay <strong>89.000.000 lot</strong>, halka
                arz büyüklüğü ise <strong>6.230.000.000 TL</strong> olacak.
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
                  Şa-Ra Enerji halka arzında talep toplama süreci 8-9-10 Temmuz
                  2026 tarihlerinde, 09.00-17.00 saatleri arasında yapılacak.
                  Pay başına halka arz fiyatı 70,00 TL olarak belirlendi.
                  Halka arz, 44.500.000 lot sermaye artırımı ve 44.500.000 lot
                  ortak satışı olmak üzere toplam 89.000.000 lot paydan oluşuyor.
                </p>
              </Section>

              <Section title="Şa-Ra Enerji halka arz özeti">
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
                        <th className="px-4 py-3 text-left font-bold">Lot / Oran</th>
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
                      <div className="mt-1 text-sm font-bold text-amber-900">
                        {item.lot}
                      </div>
                      <div className="mt-2 text-xs leading-5 text-amber-800">
                        {item.not}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Yurt içi bireysel yatırımcıya ayrılan pay oranı %38 ve lot
                  miktarı 33.820.000 lot olarak açıklandı. Halka arzda yüksek
                  başvurulu yatırımcı için ayrı bir tahsisat bulunması, dağıtım
                  tarafında küçük bireysel başvuru ile yüksek tutarlı başvuruların
                  farklı kurallara tabi olacağını gösteriyor.
                </p>
              </Section>

              <Section title="Fon kullanım yeri">
                <div className="grid gap-4 sm:grid-cols-3">
                  {fonKullanim.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                    >
                      <div className="text-sm font-semibold text-emerald-800">
                        {item.baslik}
                      </div>
                      <div className="mt-1 text-2xl font-bold text-emerald-950">
                        {item.oran}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-emerald-900">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Fon kullanım planında en büyük pay işletme sermayesine
                  ayrılmış durumda. Enerji altyapısı, iletim hattı, trafo merkezi
                  ve sanayi üretimi gibi proje yoğun işlerde işletme sermayesi;
                  hammadde tedariki, sipariş ön finansmanı, stok yönetimi ve
                  tahsilat vadeleri açısından kritik rol oynuyor. Finansal borç
                  ödemesine ayrılan %30’luk bölüm ise borçluluk ve finansman
                  giderleri tarafında izlenecek.
                </p>
              </Section>

              <Section title="Şirket hakkında">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Şa-Ra Enerji İnşaat Ticaret ve Sanayi A.Ş.; enerji iletimi,
                  enerji dağıtımı, trafo merkezleri, enerji nakil hatları,
                  mühendislik, taahhüt ve sanayi üretimi alanlarında faaliyet
                  gösteren bir şirket olarak öne çıkıyor. Şirketin faaliyetleri;
                  enerji altyapısı yatırımları, kamu ve özel sektör projeleri,
                  metal hammadde maliyetleri, döviz kuru, finansman giderleri ve
                  proje teslim takvimleriyle yakından ilişkilidir.
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
                  Finansal tablo tarafında şirketin toplam varlıkları 2024’te
                  16 milyar TL, 2025’te 17 milyar TL, 2026 ilk çeyrekte ise
                  18 milyar TL olarak paylaşıldı. Özkaynaklar aynı dönemde
                  6,2 milyar TL’den 7,0 milyar TL seviyesine yükselirken, kısa
                  vadeli yükümlülüklerin 2026 ilk çeyrekte 9,4 milyar TL’ye
                  çıkması işletme sermayesi ihtiyacını önemli hale getiriyor.
                  Gelir tablosunda 2024 hasılatı 14 milyar TL, 2025 hasılatı
                  7 milyar TL ve 2026 ilk çeyrek hasılatı 3,3 milyar TL olarak
                  yer aldı. Net dönem kârı 2024’te 1,8 milyar TL, 2025’te
                  363 milyon TL ve 2026 ilk çeyrekte 370 milyon TL oldu.
                </p>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Şa-Ra Enerji halka arzı, enerji altyapısı ve sanayi üretimi
                  tarafında faaliyet gösteren bir şirketin Borsa İstanbul’a
                  gelmesi açısından yatırımcı gündeminde yer alacak. Toplam
                  büyüklüğün 6,23 milyar TL olması, halka arzın ölçek olarak
                  dikkat çeken işlemler arasında bulunmasına neden oluyor. Bunun
                  yanında katılım endeksine uygun olmaması, T1-T2 bakiye
                  kullanılamaması ve fiyat istikrarı planlanmaması yatırımcıların
                  başvuru öncesi özellikle bilmesi gereken başlıklar arasında.
                </p>
              </Section>

              <Section title="Değerlendirme">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Halka arzda 70,00 TL fiyat ve %20 iskonto bilgisi öne çıkıyor.
                  Şirketin fon kullanımında işletme sermayesine yüksek pay
                  ayırması, proje bazlı iş modelinde nakit döngüsü ve kısa vadeli
                  yükümlülüklerin önemini gösteriyor. Finansal borç ödemesine
                  ayrılan kaynak bilanço tarafında destekleyici olabilir; ancak
                  yatırımcıların şirketin kârlılık eğilimini, proje teslim
                  takvimini, finansman giderlerini ve nakit akışını halka arz
                  sonrasında da takip etmesi gerekir.
                </p>
              </Section>

              <Section title="Taahhütler ve fiyat istikrarı">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  <p>
                    Halka arzda fiyat istikrarı sağlayıcı işlemler
                    planlanmamaktadır. Bu nedenle ilk işlem günleri sonrası fiyat
                    hareketlerinde piyasa koşulları ve yatırımcı talebi daha
                    belirleyici olabilir.
                  </p>
                  <p>
                    Şirket tarafından 1 yıl boyunca bedelli veya bedelsiz sermaye
                    artırımı yapılmayacağı, dolaşımdaki payların artmasına neden
                    olacak şekilde satışa veya halka arza konu edilmeyeceği
                    taahhüt edilmiştir. Ortaklar tarafında da 1 yıl boyunca halka
                    arz fiyatının altında satış yapılmayacağı ve pay satılmayacağı
                    taahhüdü yer almaktadır.
                  </p>
                </div>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Yatırımcılar için sıradaki aşama 8-9-10 Temmuz 2026 tarihlerinde
                  yapılacak talep toplama süreci olacak. Talep toplama sonrası
                  dağıtım sonuçları, kişi başı düşen lot sayısı, halka arz
                  büyüklüğünün kesinleşen hali ve Borsa İstanbul’da ilk işlem
                  tarihi takip edilecek.
                </p>
              </Section>

              <Section title="Konsorsiyum üyeleri">
                <p className="mb-3 text-sm leading-7 text-slate-600">
                  Halka arzda konsorsiyum lideri Tera Yatırım olarak açıklandı.
                  Talepte bulunulabilecek konsorsiyum üyeleri arasında aşağıdaki
                  aracı kurumlar yer alıyor.
                </p>
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
                      Şa-Ra Enerji halka arz ne zaman?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Talep toplama tarihleri 8-9-10 Temmuz 2026 olarak açıklandı.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Şa-Ra Enerji halka arz fiyatı kaç TL?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Halka arz fiyatı 70,00 TL olarak açıklandı.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Şa-Ra Enerji kaç lot dağıtacak?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Toplam dağıtılacak pay 89.000.000 lot olarak açıklandı.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Şa-Ra Enerji T1-T2 bakiye ile alınır mı?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Açıklanan bilgilere göre halka arzda T1-T2 bakiye
                      kullanılamaz.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Şa-Ra Enerji katılım endeksine uygun mu?
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Paylaşılan halka arz bilgi tablosuna göre katılım endeksine
                      uygun değildir.
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
                    KAP duyuruları ve halka arz bilgilendirme sayfaları
                  </a>
                  <span className="font-medium text-slate-700">
                    Onaylı izahname ve tasarruf sahiplerine satış duyurusu
                    verileri
                  </span>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Şa-Ra Enerji Halka Arzı: SARAE Fiyat, Tarih ve Lot"
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

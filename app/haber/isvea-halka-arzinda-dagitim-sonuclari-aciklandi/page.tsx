import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import AuthorBox from "@/components/AuthorBox";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";
import HaberAltKisim from "@/components/HaberAltKisim";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "isvea-halka-arzinda-dagitim-sonuclari-aciklandi";
const baslik = "İsvea Halka Arzında Dağıtım Sonuçları Açıklandı";
const aciklama =
  "İsvea halka arzında dağıtım sonuçları açıklandı. Halka arza 901.609 yatırımcı katılırken, bireysel yatırımcılara en fazla 48 lot dağıtım yapıldı.";
const gorsel = "/isvea-halka-arzinda-dagitim-sonuclari-aciklandi.webp";
const url = `https://www.hocaileborsa.com/haber/${slug}`;

export const metadata: Metadata = {
  title: baslik,
  description: seoAciklamasi(aciklama, "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: `https://www.hocaileborsa.com${gorsel}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`https://www.hocaileborsa.com${gorsel}`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: haberSaati,
  dateModified: haberSaati,
  url,
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
  image: `https://www.hocaileborsa.com${gorsel}`,
};

const dagitimSatirlari = [
  {
    grup: "Yurt İçi Bireysel",
    planlanan: "40.200.000 nominal değer / %60,00",
    basvuru: "930.072",
    talep: "93.866.462 nominal değer / %62,60",
    yatirimci: "901.425",
    dagitim: "40.200.000 nominal değer / %60,00",
  },
  {
    grup: "Yurt İçi Kurumsal",
    planlanan: "26.800.000 nominal değer / %40,00",
    basvuru: "184",
    talep: "157.132.424 nominal değer / %37,40",
    yatirimci: "184",
    dagitim: "26.800.000 nominal değer / %40,00",
  },
  {
    grup: "TOPLAM",
    planlanan: "67.000.000 nominal değer / %100,00",
    basvuru: "930.256",
    talep: "250.998.886 nominal değer / %100,00",
    yatirimci: "901.609",
    dagitim: "67.000.000 nominal değer / %100,00",
  },
];

const tavanSatirlari = [
  { gun: "1. gün", fiyat: "23,0", kazanc: "100 TL", satarsa: "1.104 TL", toplam: "100 TL" },
  { gun: "2. gün", fiyat: "25,3", kazanc: "110 TL", satarsa: "1.214 TL", toplam: "211 TL" },
  { gun: "3. gün", fiyat: "27,8", kazanc: "121 TL", satarsa: "1.335 TL", toplam: "332 TL" },
  { gun: "4. gün", fiyat: "30,6", kazanc: "134 TL", satarsa: "1.469 TL", toplam: "466 TL" },
  { gun: "5. gün", fiyat: "33,7", kazanc: "147 TL", satarsa: "1.616 TL", toplam: "612 TL" },
  { gun: "6. gün", fiyat: "37,0", kazanc: "162 TL", satarsa: "1.777 TL", toplam: "774 TL" },
  { gun: "7. gün", fiyat: "40,7", kazanc: "178 TL", satarsa: "1.955 TL", toplam: "952 TL" },
  { gun: "8. gün", fiyat: "44,8", kazanc: "195 TL", satarsa: "2.150 TL", toplam: "1.147 TL" },
  { gun: "9. gün", fiyat: "49,3", kazanc: "215 TL", satarsa: "2.365 TL", toplam: "1.362 TL" },
  { gun: "10. gün", fiyat: "54,2", kazanc: "237 TL", satarsa: "2.602 TL", toplam: "1.599 TL" },
  { gun: "11. gün", fiyat: "59,6", kazanc: "260 TL", satarsa: "2.862 TL", toplam: "1.859 TL" },
  { gun: "12. gün", fiyat: "65,6", kazanc: "286 TL", satarsa: "3.148 TL", toplam: "2.145 TL" },
  { gun: "13. gün", fiyat: "72,2", kazanc: "315 TL", satarsa: "3.463 TL", toplam: "2.460 TL" },
  { gun: "14. gün", fiyat: "79,4", kazanc: "346 TL", satarsa: "3.810 TL", toplam: "2.806 TL" },
];

export default function IsveaHalkaArzindaDagitimSonuclariAciklandiPage() {
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
              src={gorsel}
              alt="İsvea halka arzında dağıtım sonuçları açıklandı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                İsvea Halka Arzında Dağıtım Sonuçları Açıklandı
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
                İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş. halka arzında dağıtım
                sonuçları açıklandı. #ISVEA koduyla Borsa İstanbul’da işlem görmesi
                beklenen halka arza toplam 930.256 başvuru gelirken, gerçekleşen
                dağıtım 901.609 yatırımcıya yapıldı.
              </p>

              <p>
                Halka arzda toplam 250.998.886 nominal değer talep toplandı. Satışa
                sunulan toplam pay miktarı ise 67.000.000 nominal değer oldu. Bireysel
                tarafta yatırımcı başına en fazla 48 lot dağıtım gerçekleşti.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  İsvea halka arzında yurt içi bireysel yatırımcı grubuna 40.200.000
                  nominal değer tahsis edilmişti. Bu grupta 930.072 başvuru ile
                  93.866.462 nominal değer talep toplandı. Dağıtım ise 901.425
                  bireysel yatırımcıya 40.200.000 nominal değer olarak tamamlandı.
                </p>
                <p>
                  Bireysel tarafta talep edilen miktar, ayrılan tahsisatın üzerinde
                  kaldığı için kişi başına düşen lot miktarı sınırlı oluştu. Açıklanan
                  dağıtım sonucuna göre bireysel talep başına en fazla 48 lot verildi.
                  Halka arz fiyatı 20,90 TL olduğu için 48 lotun karşılığı yaklaşık
                  1.003,20 TL seviyesine denk geliyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Dağıtım sonuçlarında öne çıkan rakamlar
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-zinc-200">
                  <table className="min-w-[760px] w-full border-collapse text-sm">
                    <thead className="bg-zinc-100 text-zinc-900">
                      <tr>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Yatırımcı Grubu
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Planlanan Tahsisat
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Başvuru
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Toplanan Talep
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Dağıtım Yapılan Yatırımcı
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Gerçekleşen Dağıtım
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dagitimSatirlari.map((satir, index) => (
                        <tr
                          key={satir.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                        >
                          <td className="border-b border-zinc-100 px-4 py-3 font-semibold text-zinc-900">
                            {satir.grup}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.planlanan}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.basvuru}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.talep}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.yatirimci}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 font-semibold text-zinc-900">
                            {satir.dagitim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bireysel yatırımcıya en fazla 48 lot dağıtıldı
                </h2>
                <p>
                  Halka arzda yurt içi bireysel yatırımcıya toplam payların %60’ı
                  ayrılmıştı. Bu gruptan gelen talep, planlanan tahsisatın yaklaşık
                  2,33 katına ulaştı. Bu nedenle bireysel yatırımcılarda dağıtım,
                  eşit dağıtım mekanizması üzerinden 48 lot seviyesinde oluştu.
                </p>
                <p>
                  48 lotluk dağıtım, 20,90 TL halka arz fiyatı üzerinden 1.003,20 TL
                  tutara karşılık geliyor. Bireysel yatırımcı sayısının 901.425 kişiye
                  ulaşması, ISVEA halka arzında geniş tabanlı bir dağıtım yapıldığını
                  gösterdi.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Kurumsal tarafta tahsisat tamamen karşılandı
                </h2>
                <p>
                  Yurt içi kurumsal yatırımcı grubunda 184 başvuru ile 157.132.424
                  nominal değer talep toplandı. Bu gruba planlanan tahsisat 26.800.000
                  nominal değerdi. Dağıtım sonucunda kurumsal yatırımcılara ayrılan
                  payların tamamı dağıtıldı.
                </p>
                <p>
                  Kurumsal tarafta talebin tahsisatın üzerinde kalması, halka arzın
                  yalnızca bireysel yatırımcılar tarafından değil, kurumsal yatırımcı
                  grubu tarafından da takip edildiğini gösterdi. Toplam dağıtım içinde
                  kurumsal yatırımcı payı planlandığı gibi %40 seviyesinde kaldı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  İsvea halka arzının temel bilgileri
                </h2>
                <p>
                  İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş. halka arz fiyatı
                  20,90 TL olarak belirlenmişti. Halka arzda toplam 67.000.000 lot
                  satışa sunuldu. Bu payların 60.000.000 lotu sermaye artırımı,
                  7.000.000 lotu ise ortak satışı şeklinde gerçekleşti.
                </p>
                <p>
                  Halka arz büyüklüğü 1.400.300.000 TL seviyesinde oluşurken, halka
                  açıklık oranı %23,93 olarak açıklanmıştı. Payların Yıldız Pazar’da
                  işlem görmesi bekleniyor. İsvea halka arzı katılım endeksine uygun
                  değil.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Olası tavan serisi tablosu
                </h2>
                <p>
                  Bireysel yatırımcıya en fazla 48 lot dağıtıldığı için olası tavan
                  serisi hesaplamasında başlangıç tutarı 1.003,20 TL olarak alınabilir.
                  Aşağıdaki tablo, 48 lot üzerinden yaklaşık tavan fiyatı ve teorik
                  kazanç hesabını gösterir.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-zinc-200">
                  <table className="min-w-[620px] w-full border-collapse text-sm">
                    <thead className="bg-zinc-100 text-zinc-900">
                      <tr>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Gün
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Tavan Fiyatı
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Günlük Kazanç
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Satarsa Ne Olur?
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Toplam Kazanç
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tavanSatirlari.map((satir, index) => (
                        <tr
                          key={satir.gun}
                          className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                        >
                          <td className="border-b border-zinc-100 px-4 py-3 font-semibold text-zinc-900">
                            {satir.gun}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.fiyat}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.kazanc}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.satarsa}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 font-semibold text-zinc-900">
                            {satir.toplam}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm leading-7 text-zinc-500">
                  Tablodaki değerler yaklaşık hesaplanmıştır. Gerçek getiri; işlem
                  fiyatı, emir gerçekleşmesi, komisyon, vergi ve piyasa koşullarına
                  göre değişebilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Fon kullanım planı ne gösteriyor?
                </h2>
                <p>
                  İsvea halka arzında fon kullanım planı üretim altyapısı, finansal
                  borçların azaltılması, işletme sermayesi ve yenilenebilir enerji
                  yatırımları üzerinde yoğunlaşıyor. Kaynağın %20-30 aralığındaki en
                  büyük bölümü sürdürülebilirlik ilkeleri çerçevesinde makine ve
                  ekipman yatırımlarına ayrıldı.
                </p>
                <p>
                  Finansal borçların azaltılması, şirketin faiz yükünü ve nakit akışı
                  üzerindeki baskıyı sınırlayabilir. İşletme sermayesi tarafı ise
                  hammadde, stok, üretim sürekliliği ve ihracat döngüsü açısından
                  önem taşıyor. Yenilenebilir enerji ve makine-teçhizat yatırımları
                  da üretim maliyeti tarafında takip edilecek başlıklar arasında.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Şirket hakkında kısa bilgi
                </h2>
                <p>
                  İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş., banyo ve vitrifiye
                  seramik ürünleri alanında faaliyet gösteriyor. Şirket, tasarım
                  odaklı İtalyan banyo kültürü ile Türkiye’deki üretim gücünü
                  birleştiren bir marka yapısına sahip.
                </p>
                <p>
                  Ürün grupları arasında klozetler, rezervuarlar, lavabolar,
                  pisuvarlar, bide grupları, gömme rezervuarlar, akrilik duş
                  tekneleri, eviyeler, klozet kapakları ve banyo dolapları yer alıyor.
                  Şirketin ihracat pazarı, üretim kapasitesi, enerji maliyetleri ve
                  hammadde fiyatları halka arz sonrası izlenecek başlıklar arasında.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Finansal görünümde hangi başlıklar öne çıkıyor?
                </h2>
                <p>
                  İsvea’nın finansal verilerinde 2025 yılında hasılatın 2024’e göre
                  gerilediği, buna karşılık esas faaliyet kârının artış gösterdiği
                  görülüyor. Şirket 2024 yılında 2,7 milyar TL hasılat ve 642 milyon
                  TL esas faaliyet kârı açıklarken, 2025 yılında 2,3 milyar TL hasılat
                  ve 676 milyon TL esas faaliyet kârı açıkladı.
                </p>
                <p>
                  Net dönem kârı 2024 yılında 93 milyon TL, 2025 yılında 79 milyon TL,
                  2026 yılının ilk çeyreğinde ise 32 milyon TL oldu. Seramik ve banyo
                  ürünleri sektöründe enerji maliyetleri, ihracat pazarları, kapasite
                  kullanımı, finansman giderleri ve kur hareketleri şirket sonuçları
                  üzerinde belirleyici olabilir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  İsvea halka arzında toplam talep, satışa sunulan pay miktarının
                  üzerinde oluştu. Bireysel yatırımcı tarafında 930 bini aşan başvuru
                  gelmesi, kişi başına düşen lot miktarını 48 lot ile sınırladı.
                </p>
                <p>
                  Dağıtımın %60’ı bireysel yatırımcılara, %40’ı kurumsal yatırımcılara
                  yapıldı. Bu yapı, onaylı izahnamede planlanan tahsisat dengesinin
                  dağıtım sonucunda da korunduğunu gösteriyor.
                </p>
                <p>
                  ISVEA tarafında kısa vadede işlem başlangıç tarihi, ilk gün fiyat
                  hareketi ve halka arz sonrası talep dengesi takip edilecek. Orta
                  vadede ise halka arz gelirinin üretim yatırımlarına, borç azaltımına
                  ve işletme sermayesine nasıl yansıyacağı şirket performansı açısından
                  daha belirleyici olacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Dağıtım sonuçlarının açıklanmasının ardından İsvea paylarının Borsa
                  İstanbul’da işlem görmeye başlayacağı tarih takip edilecek. İşlem
                  başlangıcıyla birlikte ilk gün emir dengesi, bireysel yatırımcı
                  dağılımı ve kurumsal talebin piyasaya etkisi izlenecek.
                </p>
                <p>
                  Şirket tarafında ise halka arzdan elde edilen kaynağın makine ve
                  ekipman yatırımları, borç azaltımı, işletme sermayesi ve enerji
                  yatırımlarında kullanımı önümüzdeki dönem için ana izleme başlıkları
                  olacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                İsvea halka arzında 930.256 başvuru alındı ve 901.609 yatırımcıya
                toplam 67.000.000 nominal değer dağıtım yapıldı. Bireysel yatırımcı
                tarafında en fazla 48 lot dağıtım gerçekleşti.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Nötr-Pozitif — Toplam talep halka arz büyüklüğünün üzerinde oluştu
                ve planlanan tahsisat dengesi korundu. İlk işlem günlerinde geniş
                bireysel katılım ile kurumsal talebin fiyatlamaya etkisi izlenecek.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Bireysel yatırımcıya 48 lot dağıtım yapılması, kişi başı tutarın
                yaklaşık 1.003,20 TL seviyesinde oluştuğunu gösteriyor. Ancak ilk işlem
                günlerindeki fiyat hareketi, yalnızca lot miktarına değil emir dengesi,
                arz-talep yapısı ve genel piyasa koşullarına bağlı olacak.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                İsvea halka arz dağıtım sonuçları, onaylı izahname bilgileri ve halka
                arz satış verileri.
              </p>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
                  <HaberAltKisim href="/haber/isvea-halka-arzinda-dagitim-sonuclari-aciklandi" />
</article>
</div>
    </main>
  );
}

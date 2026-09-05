import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "yeotk-ingilterede-196-mwp-gunes-enerjisi-santrali-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/yeotk-ingilterede-196-mwp-gunes-enerjisi-santrali-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "YEOTK İngiltere’de 196 MWp GES Sözleşmesi İmzaladı",
  description:
    seoAciklamasi("YEOTK’nin %75 bağlı ortaklığı Rey Renewable Energy, İngiltere’de üç ayrı sahada toplam 196 MWp güneş enerjisi santralinin anahtar teslim yapımı için sözleşme imzaladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "YEOTK İngiltere’de 196 MWp GES Sözleşmesi İmzaladı",
    description:
      "Üç sahadaki projelerde mühendislik, tedarik, inşaat, devreye alma ile iki yıllık işletme ve bakım hizmetleri yürütülecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "YEOTK İngiltere 196 MWp güneş enerjisi santrali sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YEOTK İngiltere’de 196 MWp GES Sözleşmesi İmzaladı",
    description:
      "YEOTK, İngiltere’de üç ayrı sahada toplam 196 MWp GES’in anahtar teslim yapımını üstlendi.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  { baslik: "Toplam Kurulu Güç", deger: "196 MWp", aciklama: "Üç ayrı GES" },
  { baslik: "Proje Sayısı", deger: "3 saha", aciklama: "İngiltere’nin kuzeydoğusu" },
  { baslik: "Bağlı Ortaklık Payı", deger: "%75", aciklama: "Rey Renewable Energy Ltd" },
  { baslik: "İşletme ve Bakım", deger: "2 yıl", aciklama: "Devreye alma sonrasında" },
];

const anaDetaylar = [
  ["Şirket", "YEO Teknoloji Enerji ve Endüstri A.Ş."],
  ["Hisse Kodu", "YEOTK"],
  ["Bildirim Tarihi", "17.07.2026"],
  ["Bildirim Saati", "09:00:46"],
  ["Bağlı Ortaklık", "Rey Renewable Energy Ltd"],
  ["YEOTK Payı", "%75"],
  ["Müşteri", "Bluefield Solar Income Fund proje şirketleri"],
  ["Proje Bölgesi", "İngiltere’nin kuzeydoğusu"],
  ["Saha Sayısı", "3 ayrı saha"],
  ["Toplam Kurulu Güç", "196 MWp"],
  ["Sözleşme Modeli", "Anahtar teslim EPC"],
  ["İşletme ve Bakım Süresi", "2 yıl"],
  ["Sözleşme Bedeli", "Açıklanmadı"],
];

const isKapsami = [
  {
    baslik: "Mühendislik ve tasarım",
    aciklama:
      "Santrallerin teknik tasarımı, proje mühendisliği ve uygulama planları YEOTK tarafından hazırlanacak.",
  },
  {
    baslik: "Ekipman ve malzeme tedariki",
    aciklama:
      "Projeler için gerekli ekipman ve malzemelerin satın alınması ve sahalara ulaştırılması sözleşme kapsamında.",
  },
  {
    baslik: "İnşaat ve montaj",
    aciklama:
      "Üç sahadaki inşaat, mekanik ve elektrik montaj faaliyetleri anahtar teslim modelle yürütülecek.",
  },
  {
    baslik: "Test ve devreye alma",
    aciklama:
      "Kurulum tamamlandıktan sonra testler yapılarak tesislerin ticari işletmeye geçmesi sağlanacak.",
  },
  {
    baslik: "İki yıllık işletme ve bakım",
    aciklama:
      "Santraller devreye alındıktan sonra iki yıl süreyle işletme ve bakım hizmetleri verilecek.",
  },
];

const nedenOnemli = [
  {
    baslik: "İngiltere pazarında büyük ölçekli proje",
    aciklama:
      "196 MWp toplam güç, YEOTK’nin İngiltere’de üstlendiği önemli yenilenebilir enerji projelerinden birini oluşturuyor.",
  },
  {
    baslik: "Üç ayrı sahaya yayılan iş hacmi",
    aciklama:
      "Projenin üç ayrı sahada yürütülecek olması şirketin saha yönetimi ve uluslararası proje koordinasyonu kabiliyetini öne çıkarıyor.",
  },
  {
    baslik: "EPC’den işletme ve bakıma uzanan kapsam",
    aciklama:
      "Sözleşme yalnızca santral kurulumunu değil, devreye alma sonrasındaki iki yıllık işletme ve bakım hizmetini de içeriyor.",
  },
  {
    baslik: "Uluslararası büyüme stratejisini destekliyor",
    aciklama:
      "YEOTK, teknik standartları yüksek İngiltere enerji pazarında yeni bir referans proje kazanmış oldu.",
  },
];

const finansalOkuma = [
  "Sözleşme bedeli açıklanmadığı için ciro ve kâra olası katkı hesaplanamıyor.",
  "196 MWp ölçek, proje büyüklüğü açısından anlamlı bir iş hacmine işaret ediyor.",
  "Gelirler proje ilerleme oranına göre dönemsel olarak finansallara yansıyabilir.",
  "Ekipman tedariki ve inşaat faaliyetleri işletme sermayesi ihtiyacını artırabilir.",
  "İki yıllık işletme ve bakım hizmetleri süreklilik taşıyan ek hizmet geliri yaratabilir.",
  "Kur, ekipman maliyeti ve proje takvimi kârlılığın temel belirleyicileri olacak.",
];

const hisseOkumasi = [
  {
    baslik: "Haber pozitif",
    aciklama:
      "Yeni ve büyük ölçekli uluslararası iş ilişkisi, YEOTK’nin sipariş hacmi ve küresel büyümesi açısından pozitif.",
  },
  {
    baslik: "Sözleşme bedeli eksik",
    aciklama:
      "Finansal etkinin gücü, sözleşme tutarı açıklanmadığı için yalnızca kurulu güç üzerinden değerlendirilebiliyor.",
  },
  {
    baslik: "Referans proje etkisi önemli",
    aciklama:
      "İngiltere’de tamamlanacak proje, şirketin yeni iş alma kapasitesini ve uluslararası referanslarını destekleyebilir.",
  },
];

const riskler = [
  "Sözleşme bedeli ve hedeflenen kâr marjı açıklanmadı.",
  "Üç ayrı sahadaki çalışmaların eş zamanlı yönetimi operasyonel risk yaratabilir.",
  "Ekipman maliyetleri ve tedarik süreleri proje takvimini etkileyebilir.",
  "Döviz hareketleri gelir ve maliyet tarafında farklı etkiler oluşturabilir.",
  "İnşaat, bağlantı ve devreye alma süreçlerinde gecikme yaşanabilir.",
  "Ekonomik katkı %75 bağlı ortaklık payı üzerinden oluşacak.",
];

const takipBasliklari = [
  "Sözleşme bedelinin açıklanıp açıklanmayacağı",
  "Projelerin başlama ve tamamlanma tarihleri",
  "Yıllara göre gelir katkısı",
  "Proje finansmanı ve işletme sermayesi ihtiyacı",
  "Ekipman tedarik takvimi",
  "Beklenen kâr marjı",
  "İki yıllık işletme ve bakım gelirlerinin büyüklüğü",
  "İngiltere’de alınabilecek yeni projeler",
];

const seoSorular = [
  {
    soru: "YEOTK ne açıkladı?",
    cevap:
      "YEOTK, %75 bağlı ortaklığı Rey Renewable Energy’nin İngiltere’de üç ayrı sahada toplam 196 MWp GES yapımı için sözleşmeler imzaladığını açıkladı.",
  },
  {
    soru: "YEOTK İngiltere projesinin büyüklüğü kaç MW?",
    cevap:
      "Üç ayrı güneş enerjisi santralinin toplam kurulu gücü 196 MWp olarak açıklandı.",
  },
  {
    soru: "YEOTK sözleşmesinin bedeli ne kadar?",
    cevap:
      "17 Temmuz 2026 tarihli KAP açıklamasında sözleşmelerin parasal bedeli paylaşılmadı.",
  },
  {
    soru: "YEOTK projelerde hangi işleri yapacak?",
    cevap:
      "Mühendislik, tasarım, ekipman tedariki, inşaat, montaj, test, devreye alma ile iki yıllık işletme ve bakım hizmetlerini yürütecek.",
  },
  {
    soru: "Bluefield Solar Income Fund kimdir?",
    cevap:
      "Bluefield Solar Income Fund, Birleşik Krallık’ta halka açık ve yenilenebilir enerji projelerine yatırım yapan bir fondur.",
  },
  {
    soru: "YEOTK haberi hisse için nasıl okunmalı?",
    cevap:
      "Uluslararası sipariş hacmi ve İngiltere pazarındaki büyüme açısından pozitif. Sözleşme bedeli açıklanmadığı için finansal etkinin büyüklüğü henüz ölçülemiyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "YEOTK İngiltere’de 196 MWp GES Sözleşmesi İmzaladı",
  description:
    "YEOTK’nin %75 bağlı ortaklığı Rey Renewable Energy, İngiltere’de üç ayrı sahada toplam 196 MWp güneş enerjisi santralinin anahtar teslim yapımı için sözleşmeler imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-17T09:00:46+03:00",
  dateModified: "2026-07-17T09:00:46+03:00",
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
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
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

export default function YeotkIngiltereGesSozlesmesiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/yeotk-ingilterede-196-mwp-gunes-enerjisi-santrali-sozlesmesi.webp"
              alt="YEOTK İngiltere 196 MWp güneş enerjisi santrali sözleşmesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              YEOTK İngiltere’de 196 MWp GES Sözleşmesi İmzaladı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Yeni İş İlişkisi
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
                YEO Teknoloji Enerji ve Endüstri A.Ş. (
                <strong>YEOTK</strong>), %75 oranında pay sahibi olduğu
                Birleşik Krallık merkezli bağlı ortaklığı Rey Renewable Energy
                Ltd’nin İngiltere’de üç ayrı güneş enerjisi santrali projesi için
                sözleşmeler imzaladığını açıkladı.
              </p>

              <p>
                İngiltere’nin kuzeydoğusunda bulunan üç sahadaki projelerin
                toplam kurulu gücü <strong>196 MWp</strong> olacak. YEOTK,
                santrallerin mühendislik ve tasarımından ekipman tedarikine,
                inşaatından devreye alınmasına kadar tüm süreci anahtar teslim
                olarak üstlenecek.
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

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  YEOTK’nin İngiltere’deki bağlı ortaklığı Rey Renewable Energy,
                  Bluefield Solar Income Fund’ın proje şirketleriyle üç ayrı
                  güneş enerjisi santralinin anahtar teslim yapımı için
                  sözleşmeler imzaladı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Sözleşmeler EPC faaliyetlerinin yanında, tesisler ticari
                  işletmeye geçtikten sonraki iki yıllık işletme ve bakım
                  hizmetlerini de kapsıyor.
                </p>
              </Section>

              <Section title="KAP açıklamasındaki ana detaylar">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {anaDetaylar.map(([etiket, deger], index) => (
                        <tr
                          key={etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Sözleşmenin kapsamı">
                <div className="grid gap-4">
                  {isKapsami.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Bu haber neden önemli?">
                <div className="grid gap-4">
                  {nedenOnemli.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Projenin 196 MWp’lik büyüklüğü önemli bir iş hacmine işaret
                  ediyor. Ancak sözleşme bedeli açıklanmadığı için YEOTK’nin
                  cirosuna ve kârına beklenen katkı henüz hesaplanamıyor.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <div className="grid gap-4">
                  {hisseOkumasi.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Dikkat edilmesi gereken riskler">
                <div className="grid gap-3">
                  {riskler.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-semibold leading-6 text-orange-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="YEOTK İngiltere GES sözleşmesi hakkında soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
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
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1634304"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  YEOTK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="YEOTK İngiltere’de 196 MWp GES Sözleşmesi İmzaladı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir.
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
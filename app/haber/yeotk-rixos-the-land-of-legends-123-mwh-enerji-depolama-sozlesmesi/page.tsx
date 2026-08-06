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

const slug = "yeotk-rixos-the-land-of-legends-123-mwh-enerji-depolama-sozlesmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/yeotk-rixos-the-land-of-legends-123-mwh-enerji-depolama-sozlesmesi.webp";

export const metadata: Metadata = {
  title: "YEOTK Rixos ile 12,3 MWh Enerji Depolama Sözleşmesi İmzaladı",
  description:
    "YEOTK, Rixos Hotels ile The Land of Legends tesisinde kullanılmak üzere toplam 12,3 MWh kapasiteli enerji depolama sistemlerinin tedariki ve süpervizyonu için sözleşme imzaladı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "YEOTK Rixos ile 12,3 MWh Enerji Depolama Sözleşmesi İmzaladı",
    description:
      "28 kabinet tipi ve 1 konteyner tipi depolama sistemi, YEOTK’nin %100 iştiraki Reap Batarya’nın Tuzla Orhanlı tesislerinde üretilecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "YEOTK Rixos The Land of Legends 12,3 MWh enerji depolama sözleşmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YEOTK Rixos ile 12,3 MWh Enerji Depolama Sözleşmesi İmzaladı",
    description:
      "YEOTK, The Land of Legends için 12,3 MWh kapasiteli enerji depolama sistemi tedarik edecek.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Toplam Kapasite",
    deger: "12,3 MWh",
    aciklama: "Enerji depolama sistemi",
  },
  {
    baslik: "Kabinet Tipi",
    deger: "28 adet",
    aciklama: "Sözleşme kapsamındaki üniteler",
  },
  {
    baslik: "Konteyner Tipi",
    deger: "1 adet",
    aciklama: "Yüksek kapasiteli sistem",
  },
  {
    baslik: "Mevcut GES",
    deger: "65,78 MWp",
    aciklama: "Fine Otel’in öz tüketim santrali",
  },
];

const anaDetaylar = [
  ["Şirket", "YEO Teknoloji Enerji ve Endüstri A.Ş."],
  ["Hisse Kodu", "YEOTK"],
  ["Bildirim Tarihi", "20.07.2026"],
  ["Bildirim Saati", "09:28:42"],
  ["Müşteri", "Fine Otel Turizm İşletmecilik A.Ş. (Rixos Hotels)"],
  ["Proje", "The Land of Legends enerji depolama sistemi"],
  ["Proje Konumu", "Antalya"],
  ["Toplam Depolama Kapasitesi", "12,3 MWh"],
  ["Kabinet Tipi Sistem", "28 adet"],
  ["Konteyner Tipi Sistem", "1 adet"],
  ["Üretici", "Reap Batarya"],
  ["Üretim Tesisi", "Tuzla Orhanlı"],
  ["Mevcut GES Gücü", "65,78 MWp"],
  ["Sözleşme Bedeli", "Açıklanmadı"],
  ["Faaliyetlere Etki", "Olumlu"],
];

const isKapsami = [
  {
    baslik: "Enerji depolama sistemlerinin tedariki",
    aciklama:
      "YEOTK, The Land of Legends tesisinde kullanılmak üzere toplam 12,3 MWh kapasiteli 29 ayrı enerji depolama ünitesini tedarik edecek.",
  },
  {
    baslik: "Süpervizyon hizmetleri",
    aciklama:
      "Sistemlerin sahadaki kurulum, devreye alma ve teknik uygulama süreçlerinde süpervizyon hizmeti sağlanacak.",
  },
  {
    baslik: "Üretim Reap Batarya tesislerinde yapılacak",
    aciklama:
      "Sözleşme kapsamındaki ürünler YEOTK’nin %100 iştiraki Reap Batarya’nın Tuzla Orhanlı’daki tesislerinde üretilecek.",
  },
  {
    baslik: "GES ile entegre çalışma",
    aciklama:
      "Depolama sistemleri Fine Otel’in 65,78 MWp gücündeki öz tüketim güneş enerjisi santraliyle birlikte çalışacak.",
  },
];

const nedenOnemli = [
  {
    baslik: "C&I depolama pazarında yeni referans",
    aciklama:
      "Proje, YEOTK’nin ticari ve endüstriyel enerji depolama pazarındaki konumunu güçlendirecek yeni bir referans oluşturuyor.",
  },
  {
    baslik: "Reap Batarya için yerli üretim katkısı",
    aciklama:
      "Ürünlerin Tuzla Orhanlı’daki yerli üretim tesislerinde hazırlanacak olması bağlı ortaklığın kapasite kullanımı ve referans sayısı açısından olumlu.",
  },
  {
    baslik: "Güneş üretiminin ekonomik değeri artabilir",
    aciklama:
      "Depolama sistemi, güneş santralinde üretilen enerjinin daha verimli kullanılmasını ve üretim-tüketim profilinin daha etkin yönetilmesini sağlayabilir.",
  },
  {
    baslik: "Enerji maliyetlerinin optimize edilmesi hedefleniyor",
    aciklama:
      "Saatlik mahsuplaşma sonrasında depolama kullanımı, tesisin enerji maliyetlerini ve operasyonel verimliliğini iyileştirmeyi amaçlıyor.",
  },
];

const finansalOkuma = [
  "Sözleşme bedeli açıklanmadığı için ciro ve kâra beklenen katkı hesaplanamıyor.",
  "12,3 MWh kapasite, ticari ve endüstriyel depolama segmenti için anlamlı bir referans proje niteliğinde.",
  "Ürünlerin Reap Batarya tesislerinde üretilmesi grup içi üretim kapasitesinin kullanımını destekleyebilir.",
  "Gelir katkısı üretim, sevkiyat ve süpervizyon takvimine göre finansallara yansıyacak.",
  "Projenin kâr marjı, ödeme koşulları ve teslim süresi açıklanmadı.",
  "Referans etkisi, doğrudan sözleşme gelirinin ötesinde yeni C&I projeleri için fırsat yaratabilir.",
];

const hisseOkumasi = [
  {
    baslik: "Haber pozitif",
    aciklama:
      "Rixos gibi güçlü bir müşteriyle imzalanan depolama sözleşmesi, YEOTK’nin Türkiye C&I enerji depolama pazarındaki görünürlüğünü destekliyor.",
  },
  {
    baslik: "Finansal büyüklük belirsiz",
    aciklama:
      "Sözleşme bedeli açıklanmadığı için haberin kısa vadeli finansal etkisi net ölçülemiyor.",
  },
  {
    baslik: "Stratejik referans değeri yüksek",
    aciklama:
      "The Land of Legends gibi bilinen bir tesiste kurulacak sistem, Reap Batarya ürünleri için yeni müşteri kazanımını kolaylaştırabilir.",
  },
];

const riskler = [
  "Sözleşme bedeli açıklanmadı.",
  "Teslimat ve devreye alma takvimi paylaşılmadı.",
  "Ödeme koşulları ve beklenen kâr marjı bilinmiyor.",
  "Sistemlerin saha entegrasyonunda teknik gecikmeler yaşanabilir.",
  "Gelirlerin hangi finansal döneme yansıyacağı henüz net değil.",
  "Projenin ekonomik katkısı saatlik mahsuplaşma ve enerji kullanım profiline bağlı olacak.",
];

const takipBasliklari = [
  "Sözleşme bedelinin açıklanması",
  "Üretim ve teslimat takvimi",
  "Devreye alma tarihi",
  "Projenin YEOTK cirosuna katkısı",
  "Reap Batarya kapasite kullanım oranı",
  "Yeni C&I enerji depolama sözleşmeleri",
  "The Land of Legends tesisindeki operasyonel sonuçlar",
];

const seoSorular = [
  {
    soru: "YEOTK ne açıkladı?",
    cevap:
      "YEOTK, Rixos Hotels ile The Land of Legends tesisinde kullanılmak üzere 12,3 MWh kapasiteli enerji depolama sistemlerinin tedariki ve süpervizyonu için sözleşme imzaladığını açıkladı.",
  },
  {
    soru: "YEOTK enerji depolama projesinin kapasitesi ne kadar?",
    cevap:
      "Projenin toplam enerji depolama kapasitesi 12,3 MWh olarak açıklandı.",
  },
  {
    soru: "Projede kaç adet depolama sistemi kullanılacak?",
    cevap:
      "28 adet kabinet tipi ve 1 adet konteyner tipi olmak üzere toplam 29 enerji depolama sistemi kullanılacak.",
  },
  {
    soru: "YEOTK ürünleri nerede üretilecek?",
    cevap:
      "Ürünler YEOTK’nin %100 iştiraki Reap Batarya’nın Tuzla Orhanlı’daki tesislerinde üretilecek.",
  },
  {
    soru: "Sözleşme bedeli ne kadar?",
    cevap:
      "20 Temmuz 2026 tarihli KAP açıklamasında sözleşme bedeli paylaşılmadı.",
  },
  {
    soru: "YEOTK haberi hisse için nasıl okunmalı?",
    cevap:
      "C&I enerji depolama pazarında yeni referans ve Reap Batarya üretim kapasitesi açısından pozitif. Sözleşme bedeli açıklanmadığı için finansal etkinin büyüklüğü henüz bilinmiyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "YEOTK Rixos ile 12,3 MWh Enerji Depolama Sözleşmesi İmzaladı",
  description:
    "YEOTK, Rixos Hotels ile The Land of Legends tesisinde kullanılmak üzere toplam 12,3 MWh kapasiteli enerji depolama sistemlerinin tedariki ve süpervizyonu için sözleşme imzaladı.",
  image: haberGorsel,
  datePublished: "2026-07-20T09:28:42+03:00",
  dateModified: "2026-07-20T09:28:42+03:00",
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

export default function YeotkRixosEnerjiDepolamaSozlesmesiPage() {
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
              src="/yeotk-rixos-the-land-of-legends-123-mwh-enerji-depolama-sozlesmesi.webp"
              alt="YEOTK Rixos The Land of Legends 12,3 MWh enerji depolama sözleşmesi"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              YEOTK Rixos ile 12,3 MWh Enerji Depolama Sözleşmesi İmzaladı
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
                <strong>YEOTK</strong>), Fine Otel Turizm İşletmecilik A.Ş.
                (Rixos Hotels) ile Antalya’daki The Land of Legends tesisinde
                kullanılmak üzere enerji depolama sistemlerinin tedariki ve
                süpervizyon hizmetleri için sözleşme imzaladı.
              </p>

              <p>
                Proje kapsamında 28 adet kabinet tipi ve 1 adet konteyner tipi
                olmak üzere toplam <strong>12,3 MWh</strong> kapasiteli enerji
                depolama sistemi kurulacak. Ürünler YEOTK’nin %100 iştiraki Reap
                Batarya’nın Tuzla Orhanlı tesislerinde üretilecek.
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
                  YEOTK, Rixos Hotels ile The Land of Legends tesisinin enerji
                  üretim ve tüketim profilini daha etkin yönetmek amacıyla 12,3
                  MWh kapasiteli depolama sistemi kurulmasına yönelik sözleşme
                  imzaladı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Fine Otel’in tesiste öz tüketim amacıyla kullandığı 65,78 MWp
                  gücünde güneş enerjisi santrali bulunuyor. Yeni depolama
                  sistemi bu santralin üretimini daha verimli kullanmayı
                  hedefliyor.
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
                <div className="grid gap-3">
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

              <Section title="YEOTK Rixos enerji depolama sözleşmesi hakkında soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1634769"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  YEOTK — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="YEOTK Rixos ile 12,3 MWh Enerji Depolama Sözleşmesi İmzaladı"
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
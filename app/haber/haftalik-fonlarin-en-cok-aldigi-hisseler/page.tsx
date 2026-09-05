import { serializeJsonLd } from "@/lib/json-ld";
import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import HisseLink from "@/components/HisseLink";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "haftalik-fonlarin-en-cok-aldigi-hisseler";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/haftalik-fonlarin-en-cok-aldigi-hisseler.webp";

export const metadata: Metadata = {
  title: "Bu Hafta Fonların En Çok Aldığı Hisseler Hangileri Oldu?",
  description:
    seoAciklamasi("Haftalık fon verilerine göre bu hafta fonlar tarafından en çok tercih edilen hisseler arasında HEDEF, OZATD, EREGL, KTLEV, ODINE, TEHOL, ALKLC, TUPRS, GUNDG, PEKGY, EUPWR ve ASTOR öne çıktı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "Bu Hafta Fonların En Çok Aldığı Hisseler Hangileri Oldu?",
    description:
      "Haftalık fon takas verilerinde bu hafta en çok alınan hisseler listesinde HEDEF ilk sırada yer aldı. Listenin devamında OZATD, EREGL, KTLEV ve diğer hisseler bulunuyor.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Bu hafta fonların en çok aldığı hisseler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bu Hafta Fonların En Çok Aldığı Hisseler Hangileri Oldu?",
    description:
      "Fonların haftalık verilerine göre bu hafta en çok alınan hisseler listesi açıklandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Veri Türü",
    deger: "Haftalık",
    aciklama: "Fonların haftalık takas değişimleri baz alındı",
  },
  {
    baslik: "Lider Hisse",
    deger: "HEDEF",
    aciklama: "%0,73 değişim ile listenin zirvesinde",
  },
  {
    baslik: "Toplam Hisse",
    deger: "12",
    aciklama: "Bu hafta pozitif ayrışan öne çıkan hisseler",
  },
  {
    baslik: "İkinci Sıra",
    deger: "OZATD",
    aciklama: "%0,23 ile haftanın dikkat çeken hisselerinden",
  },
];

const haftalikLiderler = [
  {
    sembol: "HEDEF",
    degisim: "%0,73",
    yorum: "Haftanın açık ara en güçlü fon alımı bu hissede görüldü.",
  },
  {
    sembol: "OZATD",
    degisim: "%0,23",
    yorum: "Lider hissenin ardından ikinci sıraya yerleşti.",
  },
  {
    sembol: "EREGL",
    degisim: "%0,18",
    yorum: "Büyük ölçekli sanayi hisseleri içinde öne çıktı.",
  },
  {
    sembol: "KTLEV",
    degisim: "%0,16",
    yorum: "Fon ilgisinin artış gösterdiği hisseler arasında yer aldı.",
  },
  {
    sembol: "ODINE",
    degisim: "%0,16",
    yorum: "Haftalık bazda alım tarafında dikkat çekti.",
  },
  {
    sembol: "TEHOL",
    degisim: "%0,16",
    yorum: "Fon tarafındaki ilgi artışı benzer seviyede sürdü.",
  },
  {
    sembol: "ALKLC",
    degisim: "%0,13",
    yorum: "Orta grupta yer alan hisselerden biri oldu.",
  },
  {
    sembol: "TUPRS",
    degisim: "%0,12",
    yorum: "Enerji ve sanayi tarafındaki güçlü isimlerden biri olarak listede yer aldı.",
  },
  {
    sembol: "GUNDG",
    degisim: "%0,11",
    yorum: "Haftayı pozitif fon akımıyla tamamlayan hisseler arasında bulundu.",
  },
  {
    sembol: "PEKGY",
    degisim: "%0,11",
    yorum: "Benzer değişimle üst grupta yer aldı.",
  },
  {
    sembol: "EUPWR",
    degisim: "%0,10",
    yorum: "Fon alımlarında istikrarlı artış görülen hisselerden biri oldu.",
  },
  {
    sembol: "ASTOR",
    degisim: "%0,10",
    yorum: "Listeyi tamamlayan hisseler arasında yer aldı.",
  },
];

const haberDetaylari = [
  {
    etiket: "Haber Türü",
    deger: "Haftalık Fon Verisi",
  },
  {
    etiket: "Kapsam",
    deger: "Fonlar tarafından bu hafta en çok alınan hisseler",
  },
  {
    etiket: "Veri Niteliği",
    deger: "Haftalık değişim tablosu",
  },
  {
    etiket: "Lider Hisse",
    deger: "HEDEF",
  },
  {
    etiket: "Lider Değişim",
    deger: "%0,73",
  },
  {
    etiket: "İkinci Hisse",
    deger: "OZATD",
  },
  {
    etiket: "İkinci Değişim",
    deger: "%0,23",
  },
  {
    etiket: "Dikkat Çeken Sanayi Hisseleri",
    deger: "EREGL, TUPRS, ASTOR, EUPWR",
  },
  {
    etiket: "Toplam Öne Çıkan Hisse",
    deger: "12",
  },
  {
    etiket: "Kaynak",
    deger: "Paylaşılan haftalık fon verileri",
  },
];

const oneCikanBasliklar = [
  "HEDEF, listedeki diğer hisselere göre belirgin biçimde ayrıştı.",
  "OZATD haftalık bazda ikinci sıraya yerleşerek öne çıktı.",
  "EREGL ve TUPRS gibi büyük ölçekli sanayi hisseleri listede yer aldı.",
  "KTLEV, ODINE ve TEHOL aynı değişim bandında dikkat çekti.",
  "ALKLC, GUNDG, PEKGY, EUPWR ve ASTOR daha sıkışık bir grupta sıralandı.",
];

const sektorNotlari = [
  {
    baslik: "Sanayi ve üretim hisseleri",
    aciklama:
      "EREGL, TUPRS ve ASTOR gibi isimlerin listede yer alması, fonların büyük ve takip edilen sanayi hisselerine ilgisini koruduğunu gösteriyor.",
  },
  {
    baslik: "Enerji ve altyapı tarafı",
    aciklama:
      "EUPWR ve ASTOR gibi enerji-ekipman ilişkili hisselerin listede bulunması, tematik ilginin devam ettiğine işaret ediyor.",
  },
  {
    baslik: "Holding ve yatırım tarafı",
    aciklama:
      "HEDEF, TEHOL ve PEKGY gibi hisseler, daha farklı hikâyesi olan şirketlere de fon girişinin yayıldığını gösteriyor.",
  },
  {
    baslik: "Orta ölçekli hisselere yayılım",
    aciklama:
      "KTLEV, ODINE ve ALKLC gibi hisseler, alımların sadece büyük ölçekli hisselerde toplanmadığını gösteren örnekler arasında yer aldı.",
  },
];

const hisseNotlari = [
  {
    sembol: "HEDEF",
    not: "Bu haftanın en net ayrışan hissesi oldu. Listedeki farkı tek başına açan isim olarak öne çıktı.",
  },
  {
    sembol: "OZATD",
    not: "Liderin ardından gelen en dikkat çekici hisseydi. Haftalık fon ilgisinin belirgin olduğu isimlerden biri oldu.",
  },
  {
    sembol: "EREGL",
    not: "Büyük ölçekli sanayi hisseleri içindeki görünürlüğünü korudu. Fonların güvenli liman arayışında öne çıkan hisselerden biri olarak okunabilir.",
  },
  {
    sembol: "KTLEV",
    not: "Daha dar değişim bandında olsa da alım tarafında güçlü görünüm sergileyen hisselerden biri oldu.",
  },
  {
    sembol: "ODINE",
    not: "Hafta boyunca fonların radarında kalmayı başaran hisseler arasında yer aldı.",
  },
  {
    sembol: "TEHOL",
    not: "Orta gruptaki hisseler içinde fon ilgisini koruyan isimlerden biri olarak dikkat çekti.",
  },
  {
    sembol: "ALKLC",
    not: "Liste içinde orta-alt grupta yer alsa da fon alımlarına giren hisseler arasında bulunması önemli.",
  },
  {
    sembol: "TUPRS",
    not: "Büyük ölçekli ve yakından takip edilen hisseler arasında fonların haftalık tercihlerinden biri oldu.",
  },
  {
    sembol: "GUNDG",
    not: "Pozitif tarafta yer alarak haftalık fon listesine girmeyi başardı.",
  },
  {
    sembol: "PEKGY",
    not: "Aynı değişim bandındaki hisseler içinde istikrarlı görünüm sergiledi.",
  },
  {
    sembol: "EUPWR",
    not: "Enerji teması tarafında dikkat çeken hisselerden biri olarak öne çıktı.",
  },
  {
    sembol: "ASTOR",
    not: "Listenin alt bölümünde yer alsa da fonların haftalık alım listesine girmesiyle dikkat çekti.",
  },
];

const takipBasliklari = [
  "Önümüzdeki hafta bu hisselerde fon ilgisinin devam edip etmeyeceği",
  "Lider hisselerde alım ivmesinin korunup korunmayacağı",
  "Sanayi ve enerji hisselerinde fon yoğunlaşmasının sürüp sürmeyeceği",
  "Haftalık listede yeni hisselerin öne çıkıp çıkmayacağı",
  "Fon alımının fiyat performansına ne ölçüde yansıyacağı",
];

const fonBaglantilari = [
  {
    baslik: "Fonlar",
    aciklama: "Yatırım fonları ana sayfası",
    href: "/fonlar",
  },
  {
    baslik: "Haftalık fon tercihleri",
    aciklama: "Fonların en çok tercih ettiği hisseler tablosu",
    href: "/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
  },
  {
    baslik: "Fon etki analizi",
    aciklama: "TLY, PHE, PBR ve DFI fon fiyat tahmini ekranı",
    href: "/fonlar/etki-analizi",
  },
];

const fonEtkiAnaliziLinkleri = [
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
  },
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu",
    href: "/fonlar/etki-analizi/phe",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
  },
  {
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Bu Hafta Fonların En Çok Aldığı Hisseler Hangileri Oldu?",
  description:
    "Haftalık fon verilerine göre bu hafta en çok alınan hisseler arasında HEDEF, OZATD, EREGL, KTLEV, ODINE, TEHOL, ALKLC, TUPRS, GUNDG, PEKGY, EUPWR ve ASTOR yer aldı.",
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

export default function HaftalikFonlarinEnCokAldigiHisselerPage() {
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
              src="/haftalik-fonlarin-en-cok-aldigi-hisseler.webp"
              alt="Bu hafta fonların en çok aldığı hisseler"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Bu Hafta Fonların En Çok Aldığı Hisseler Hangileri Oldu?
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Haftalık Fon Verileri
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
                Haftalık fon verilerine göre bu hafta fonlar tarafından en çok
                alım görülen hisseler listesinde{" "}
                <strong>
                  <HisseLink sembol="HEDEF" className="font-bold" />
                </strong>{" "}
                ilk sırada yer aldı. Listenin devamında{" "}
                <strong>
                  <HisseLink sembol="OZATD" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="EREGL" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="KTLEV" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="ODINE" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="TEHOL" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="ALKLC" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="TUPRS" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="GUNDG" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="PEKGY" className="font-bold" />
                </strong>
                ,{" "}
                <strong>
                  <HisseLink sembol="EUPWR" className="font-bold" />
                </strong>{" "}
                ve{" "}
                <strong>
                  <HisseLink sembol="ASTOR" className="font-bold" />
                </strong>{" "}
                öne çıktı.
              </p>

              <p>
                Veriler, fonların hafta boyunca hangi hisselerde ağırlık artırma
                eğiliminde olduğunu göstermesi açısından yakından izleniyor.
                Özellikle listenin ilk sıralarında yer alan hisseler, fon
                tarafındaki ilginin daha yoğunlaştığı alanları işaret ederken;
                alt sıralarda yer alan hisseler ise daha sınırlı ama yine de
                pozitif yöndeki alım eğilimini yansıtıyor.
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

              <Section title="Bu hafta ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Haftalık fon verileri incelendiğinde, bu hafta fonlar
                  tarafından en güçlü alım ilgisinin HEDEF hissesinde toplandığı
                  görüldü. HEDEF, listedeki diğer hisselere göre belirgin bir
                  farkla ilk sırada yer alırken; OZATD ikinci sırada, EREGL ise
                  üçüncü sırada haftayı tamamladı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Listenin genel yapısı, fon alımlarının sadece tek bir sektöre
                  sıkışmadığını; sanayi, enerji, holding ve farklı hikâyesi
                  bulunan hisselere yayıldığını gösteriyor. Bu dağılım, haftalık
                  veri içinde daha dengeli bir fon ilgisine işaret ediyor.
                </p>
              </Section>

              <Section title="Haftalık listede öne çıkan hisseler">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Sıra
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Hisse
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Haftalık Değişim
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-800">
                          Kısa Not
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {haftalikLiderler.map((item, index) => (
                        <tr
                          key={item.sembol}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {index + 1}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            <HisseLink sembol={item.sembol} className="font-bold" />
                          </td>
                          <td className="px-4 py-3 font-semibold text-emerald-700">
                            {item.degisim}
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

              <Section title="Açıklamanın ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Bu haftaki veride dikkat çeken başlıklar">
                <div className="grid gap-3">
                  {oneCikanBasliklar.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Liste nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bu liste, haftalık fonda ağırlık artışı görülen hisselere hızlı
                  bir bakış sunar. Burada öne çıkan veriler, fonların hafta
                  boyunca hangi hisselerde daha fazla birikim yaptığını anlamak
                  için kullanılır. Özellikle listenin tepesindeki hisseler,
                  fonların o hafta içindeki tercih yoğunluğunu daha net yansıtır.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Ancak bu tür haftalık veriler tek başına kesin yön tayini
                  yapmaz. Fon alımları bir temanın devamına işaret edebilir ama
                  fiyat davranışının sürdürülebilir olup olmadığı sonraki
                  haftalarda gelecek yeni verilerle birlikte değerlendirilmelidir.
                </p>
              </Section>

              <Section title="Sektörel görünüm ve genel tablo">
                <div className="grid gap-4 sm:grid-cols-2">
                  {sektorNotlari.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                    >
                      <div className="text-base font-bold text-emerald-900">
                        {item.baslik}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-emerald-900/90">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse bazlı kısa değerlendirmeler">
                <div className="grid gap-4 sm:grid-cols-2">
                  {hisseNotlari.map((item) => (
                    <div
                      key={item.sembol}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-base font-bold text-slate-900">
                        <HisseLink sembol={item.sembol} className="font-bold" />
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.not}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Haftalık fon verilerinde bir hissenin üst sıralarda yer alması,
                  o hissede kurumsal ilginin güçlendiğine dair önemli bir işaret
                  olabilir. Özellikle{" "}
                  <HisseLink sembol="HEDEF" className="font-semibold" /> ve{" "}
                  <HisseLink sembol="OZATD" className="font-semibold" /> gibi
                  ilk sıralarda yer alan hisselerde bu durum daha belirgin
                  okunur.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Diğer taraftan,{" "}
                  <HisseLink sembol="EREGL" className="font-semibold" />,{" "}
                  <HisseLink sembol="TUPRS" className="font-semibold" />,{" "}
                  <HisseLink sembol="ASTOR" className="font-semibold" /> ve{" "}
                  <HisseLink sembol="EUPWR" className="font-semibold" /> gibi
                  daha geniş yatırımcı kitlesi tarafından izlenen hisselerin
                  listede bulunması, fon tercihlerinin piyasanın genelinde takip
                  edilen büyük isimlere de yöneldiğini gösteriyor. Bu nedenle
                  haftalık fon hareketleri, kısa vadeli ilgi değişimini anlamak
                  için önemli bir ek gösterge olarak izlenebilir.
                </p>
              </Section>

              <Section title="İlgili fon ve analiz sayfaları">
                <div className="grid gap-3 md:grid-cols-3">
                  {fonBaglantilari.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      className="rounded-xl border border-blue-200 bg-blue-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100"
                    >
                      <div className="text-sm font-bold text-blue-950">
                        {item.baslik}
                      </div>
                      <p className="mt-1 text-xs leading-5 text-blue-900">
                        {item.aciklama}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                  {fonEtkiAnaliziLinkleri.map((fon) => (
                    <Link
                      key={fon.href}
                      href={fon.href}
                      prefetch={false}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50"
                    >
                      <div className="text-base font-bold text-slate-900">
                        {fon.kod}
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {fon.ad}
                      </p>
                    </Link>
                  ))}
                </div>
              </Section>

              <Section title="Önümüzdeki hafta takip edilecek başlıklar">
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

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <div className="mt-2 font-medium text-slate-700">
                  Haftalık fon verileri tablosu
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Bu Hafta Fonların En Çok Aldığı Hisseler Hangileri Oldu?"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Haftalık fon verileri tek başına alım-satım
                kararı için yeterli olmayabilir; veriler fiyat hareketi,
                hacim ve şirket bazlı gelişmelerle birlikte değerlendirilmelidir.
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

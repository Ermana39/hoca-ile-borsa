import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "sarae-halka-arz-sonuclari-aciklandi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/sarae-halka-arz-sonuclari-aciklandi.webp";

export const metadata: Metadata = {
  title:
    "Şa-Ra Enerji Halka Arz Sonuçları Açıklandı: 729.560 Yatırımcıya Dağıtım",
  description:
    "Şa-Ra Enerji halka arzında 89 milyon lot dağıtıldı. Toplam 729.560 yatırımcıya dağıtım yapılırken bireysel yatırımcı başına en fazla 156 lot verildi.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title:
      "Şa-Ra Enerji Halka Arz Sonuçları Açıklandı: 729.560 Yatırımcıya Dağıtım",
    description:
      "SARAE halka arzında 89 milyon lot dağıtıldı. Bireysel yatırımcı tarafında en fazla 156 lot dağıtımı gerçekleşti.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "Şa-Ra Enerji SARAE halka arz sonuçları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Şa-Ra Enerji Halka Arz Sonuçları Açıklandı: 729.560 Yatırımcıya Dağıtım",
    description:
      "SARAE halka arzında toplam 729.560 yatırımcıya dağıtım yapıldı, bireyselde azami dağıtım 156 lot oldu.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Toplam Yatırımcı",
    deger: "729.560",
    aciklama: "Dağıtım yapılan yatırımcı sayısı",
  },
  {
    baslik: "Dağıtılan Pay",
    deger: "89 Mn Lot",
    aciklama: "Toplam dağıtıma konu nominal tutar",
  },
  {
    baslik: "Bireysel Azami Lot",
    deger: "156 Lot",
    aciklama: "Yurt içi bireyselde en yüksek dağıtım",
  },
  {
    baslik: "Toplam Talep",
    deger: "3,77 Kat",
    aciklama: "Halka arz büyüklüğüne göre",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Şa-Ra Enerji İnşaat Ticaret ve Sanayi A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "SARAE",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Talep Toplama Tarihleri",
    deger: "8 - 9 - 10 Temmuz 2026",
  },
  {
    etiket: "Halka Arz Fiyatı",
    deger: "70,00 TL",
  },
  {
    etiket: "Aracı Kurum",
    deger: "Tera Yatırım liderliğindeki konsorsiyum",
  },
  {
    etiket: "Toplam Halka Arz Büyüklüğü",
    deger: "6.230.000.000 TL",
  },
  {
    etiket: "Dağıtıma Konu Pay",
    deger: "89.000.000 lot",
  },
  {
    etiket: "Toplam Talep",
    deger: "335.307.835 lot",
  },
  {
    etiket: "Toplam Talep Oranı",
    deger: "Yaklaşık 3,77 kat",
  },
  {
    etiket: "Dağıtım Yapılan Yatırımcı",
    deger: "729.560 yatırımcı",
  },
  {
    etiket: "Bireysel Azami Dağıtım",
    deger: "156 lot",
  },
];

const talepTablosu = [
  {
    grup: "Yurt İçi Bireysel",
    tahsisat: "33.820.000",
    oran: "%38,00",
    basvuru: "745.413",
    talep: "46.370.290",
    talepOrani: "%13,83",
    karsilanan: "728.823",
    dagitim: "33.820.000",
    dagitimOrani: "%38,00",
  },
  {
    grup: "Yüksek Talepte Bulunacak Yatırımcı Grubu",
    tahsisat: "8.900.000",
    oran: "%10,00",
    basvuru: "346",
    talep: "114.848.112",
    talepOrani: "%34,25",
    karsilanan: "344",
    dagitim: "8.900.000",
    dagitimOrani: "%10,00",
  },
  {
    grup: "Grup Çalışanları",
    tahsisat: "1.780.000",
    oran: "%2,00",
    basvuru: "266",
    talep: "1.809.670",
    talepOrani: "%0,54",
    karsilanan: "263",
    dagitim: "1.780.000",
    dagitimOrani: "%2,00",
  },
  {
    grup: "Yurt İçi Kurumsal",
    tahsisat: "22.250.000",
    oran: "%25,00",
    basvuru: "159",
    talep: "111.393.521",
    talepOrani: "%33,22",
    karsilanan: "115",
    dagitim: "22.250.000",
    dagitimOrani: "%25,00",
  },
  {
    grup: "Yurt Dışı Kurumsal",
    tahsisat: "22.250.000",
    oran: "%25,00",
    basvuru: "16",
    talep: "60.886.242",
    talepOrani: "%18,16",
    karsilanan: "15",
    dagitim: "22.250.000",
    dagitimOrani: "%25,00",
  },
];

const yatirimciDagilimi = [
  {
    baslik: "Bireysel tarafta geniş taban oluştu",
    aciklama:
      "Yurt içi bireysel tarafta 745.413 başvuru alınırken 728.823 yatırımcıya dağıtım yapıldı. Bu tablo, halka arzın çok geniş bir yatırımcı kitlesine yayıldığını gösteriyor.",
  },
  {
    baslik: "Azami bireysel dağıtım 156 lot oldu",
    aciklama:
      "Bireysel yatırımcı başına en fazla 156 lot dağıtımı gerçekleşti. Halka arz fiyatı 70 TL olduğundan 156 lotluk dağıtımın başlangıç maliyeti yaklaşık 10.920 TL seviyesinde oluştu.",
  },
  {
    baslik: "En yüksek talep çarpanı yüksek talep grubunda",
    aciklama:
      "Yüksek talepte bulunacak yatırımcı grubunda tahsisatın 12,90 katı talep geldi. Büyük tutarlı başvuruların esas yoğunluğu bu grupta toplandı.",
  },
  {
    baslik: "Kurumsal tahsisat toplam dağıtımın yarısını oluşturdu",
    aciklama:
      "Yurt içi ve yurt dışı kurumsal yatırımcılara ayrı ayrı %25 tahsisat ayrıldı. Böylece toplam dağıtımın %50’lik kısmı kurumsal yatırımcılara gitti.",
  },
];

const halkaArzOkumasi = [
  "Toplam 89 milyon lotun tamamı dağıtıldı.",
  "Toplam talep 335,3 milyon lot seviyesinde gerçekleşti ve halka arz büyüklüğünün yaklaşık 3,77 katına ulaştı.",
  "Yurt içi bireysel tarafta talep çarpanı 1,37 kat seviyesinde kaldı.",
  "Yüksek talep grubunda 12,90 kat talep oluştu.",
  "Bireysel yatırımcı başına azami 156 lot dağıtım yapıldı.",
  "Kurumsal yatırımcıların toplam tahsisattaki payı %50 oldu.",
];

const muhtemelTavanSerisi = [
  { gun: "1. gün", fiyat: "77,0", kazanc: "1.092", para: "12.012", toplam: "1.092" },
  { gun: "2. gün", fiyat: "84,7", kazanc: "1.201", para: "13.213", toplam: "2.293" },
  { gun: "3. gün", fiyat: "93,2", kazanc: "1.321", para: "14.535", toplam: "3.615" },
  { gun: "4. gün", fiyat: "102,5", kazanc: "1.453", para: "15.988", toplam: "5.068" },
  { gun: "5. gün", fiyat: "112,7", kazanc: "1.599", para: "17.587", toplam: "6.667" },
  { gun: "6. gün", fiyat: "124,0", kazanc: "1.759", para: "19.345", toplam: "8.425" },
  { gun: "7. gün", fiyat: "136,4", kazanc: "1.935", para: "21.280", toplam: "10.360" },
  { gun: "8. gün", fiyat: "150,1", kazanc: "2.128", para: "23.408", toplam: "12.488" },
  { gun: "9. gün", fiyat: "165,1", kazanc: "2.341", para: "25.749", toplam: "14.829" },
  { gun: "10. gün", fiyat: "181,6", kazanc: "2.575", para: "28.324", toplam: "17.404" },
  { gun: "11. gün", fiyat: "199,7", kazanc: "2.832", para: "31.156", toplam: "20.236" },
  { gun: "12. gün", fiyat: "219,7", kazanc: "3.116", para: "34.272", toplam: "23.352" },
  { gun: "13. gün", fiyat: "241,7", kazanc: "3.427", para: "37.699", toplam: "26.779" },
  { gun: "14. gün", fiyat: "265,8", kazanc: "3.770", para: "41.469", toplam: "30.549" },
];

const icSelBilgiPaylari = [
  {
    ad: "Ünver Şahin",
    kurum: "Şa-Ra Enerji İnşaat Ticaret ve Sanayi A.Ş.",
    pay: "179",
  },
  {
    ad: "Emrullah Furkan Gün",
    kurum: "Tera Yatırım Menkul Değerler A.Ş.",
    pay: "143",
  },
  {
    ad: "Seda Demirelli Küçükmeral",
    kurum: "Tera Yatırım Menkul Değerler A.Ş.",
    pay: "54",
  },
  {
    ad: "Eren Ege Ayışık",
    kurum: "Tera Yatırım Menkul Değerler A.Ş.",
    pay: "50",
  },
  {
    ad: "Mehmet Ali Vardar",
    kurum: "Tera Yatırım Menkul Değerler A.Ş.",
    pay: "175",
  },
  {
    ad: "İlayda Aleksanyan",
    kurum: "Tera Yatırım Menkul Değerler A.Ş.",
    pay: "70",
  },
  {
    ad: "Melis Aydoğan",
    kurum: "Tera Yatırım Menkul Değerler A.Ş.",
    pay: "100",
  },
];

const takipBasliklari = [
  "SARAE işlem başlama tarihi",
  "İlk işlem günündeki emir ve fiyat dengesi",
  "156 lot alan bireysel yatırımcının satış davranışı",
  "Kurumsal yatırımcı payının ilk gün fiyatlamasına etkisi",
  "Halka arz fiyatına göre açılış marjı ve ilk gün lot akışı",
  "İçsel bilgiye ulaşabilecek konumdaki kişilere dağıtılan payların sınırlı kalması",
];

const seoSorular = [
  {
    soru: "Şa-Ra Enerji halka arzında kaç yatırımcıya dağıtım yapıldı?",
    cevap:
      "Şa-Ra Enerji halka arzında toplam 729.560 yatırımcıya dağıtım yapıldı. Bunların 728.823’ü yurt içi bireysel yatırımcı kategorisinde yer aldı.",
  },
  {
    soru: "SARAE halka arzında bireysel yatırımcıya en fazla kaç lot düştü?",
    cevap:
      "Yurt içi bireysel yatırımcı başına en fazla 156 lot dağıtımı gerçekleşti. Halka arz fiyatı 70 TL olduğundan bu dağıtımın maliyeti yaklaşık 10.920 TL oldu.",
  },
  {
    soru: "SARAE halka arz büyüklüğü kaç TL oldu?",
    cevap:
      "Şa-Ra Enerji halka arz büyüklüğü 6,23 milyar TL olarak açıklandı. Dağıtıma konu edilen pay miktarı 89 milyon lot oldu.",
  },
  {
    soru: "Şa-Ra Enerji halka arzında toplam talep kaç kat geldi?",
    cevap:
      "Halka arzda toplam talep 335.307.835 lot seviyesinde gerçekleşti. Bu tutar halka arz büyüklüğünün yaklaşık 3,77 katına karşılık geldi.",
  },
  {
    soru: "SARAE muhtemel tavan serisi tablosu neyi gösteriyor?",
    cevap:
      "Muhtemel tavan serisi tablosu, 156 lot dağıtım alan bir yatırımcının teorik olarak tavan fiyat serisi oluşması halinde günlük fiyat, toplam portföy değeri ve kümülatif kazanç görünümünü yaklaşık olarak gösteriyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Şa-Ra Enerji Halka Arz Sonuçları Açıklandı: 729.560 Yatırımcıya Dağıtım",
  description:
    "Şa-Ra Enerji halka arzında 89 milyon lot dağıtıldı. Toplam 729.560 yatırımcıya dağıtım yapılırken bireysel yatırımcı başına en fazla 156 lot verildi.",
  image: haberGorsel,
  datePublished: "2026-07-13T17:30:59+03:00",
  dateModified: "2026-07-13T18:20:00+03:00",
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

export default function SaraeHalkaArzSonuclariPage() {
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
              src="/sarae-halka-arz-sonuclari-aciklandi.webp"
              alt="Şa-Ra Enerji SARAE halka arz sonuçları"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Şa-Ra Enerji Halka Arz Sonuçları Açıklandı: 729.560 Yatırımcıya Dağıtım
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
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
                Şa-Ra Enerji İnşaat Ticaret ve Sanayi A.Ş. (<strong>SARAE</strong>)
                halka arzında satış sonuçları açıklandı. Halka arzda toplam{" "}
                <strong>89.000.000 lot</strong> dağıtılırken, dağıtım yapılan
                yatırımcı sayısı <strong>729.560</strong> oldu.
              </p>

              <p>
                Bireysel yatırımcı tarafında en çok dikkat çeken veri ise azami
                dağıtım oldu. Yurt içi bireysel yatırımcı başına en fazla{" "}
                <strong>156 lot</strong> verildi. Halka arz fiyatı{" "}
                <strong>70,00 TL</strong> olduğundan, bu dağıtımın teorik maliyeti{" "}
                <strong>10.920 TL</strong> seviyesinde oluştu.
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
                  Şa-Ra Enerji halka arzında 8-9-10 Temmuz 2026 tarihlerinde
                  tamamlanan talep toplama süreci sonrası satış sonuçları
                  açıklandı. Halka arz büyüklüğü 6,23 milyar TL olurken, toplam
                  talep 335.307.835 lot seviyesinde gerçekleşti.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu görünüm halka arza yaklaşık 3,77 kat talep geldiğini
                  gösteriyor. Yurt içi bireysel tarafta 745.413 başvuru alınırken
                  728.823 yatırımcıya dağıtım yapıldı ve yatırımcı başına en fazla
                  156 lot düştü.
                </p>
              </Section>

              <Section title="Halka arzın genel detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {genelDetaylar.map((item, index) => (
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

              <Section title="Yatırımcı gruplarına göre talep ve dağıtım">
                <div className="overflow-x-auto">
                  <table className="min-w-[980px] overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Yatırımcı Grubu</th>
                        <th className="px-4 py-3 text-left font-semibold">Planlanan Tahsisat</th>
                        <th className="px-4 py-3 text-left font-semibold">Oranı</th>
                        <th className="px-4 py-3 text-left font-semibold">Başvuru Sayısı</th>
                        <th className="px-4 py-3 text-left font-semibold">Talep Edilen Nominal Tutar</th>
                        <th className="px-4 py-3 text-left font-semibold">Talep Oranı</th>
                        <th className="px-4 py-3 text-left font-semibold">Talebi Karşılanan Başvuru Sayısı</th>
                        <th className="px-4 py-3 text-left font-semibold">Dağıtılan Nominal Tutar</th>
                        <th className="px-4 py-3 text-left font-semibold">Dağıtım Oranı</th>
                      </tr>
                    </thead>
                    <tbody>
                      {talepTablosu.map((item, index) => (
                        <tr
                          key={item.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.grup}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.tahsisat}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.oran}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.basvuru}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.talep}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.talepOrani}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.karsilanan}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.dagitim}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.dagitimOrani}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-slate-100">
                        <td className="px-4 py-3 font-bold text-slate-900">Toplam</td>
                        <td className="px-4 py-3 font-bold text-slate-900">89.000.000</td>
                        <td className="px-4 py-3 font-bold text-slate-900">%100,00</td>
                        <td className="px-4 py-3 font-bold text-slate-900">746.200</td>
                        <td className="px-4 py-3 font-bold text-slate-900">335.307.835</td>
                        <td className="px-4 py-3 font-bold text-slate-900">%100,00</td>
                        <td className="px-4 py-3 font-bold text-slate-900">729.560</td>
                        <td className="px-4 py-3 font-bold text-slate-900">89.000.000</td>
                        <td className="px-4 py-3 font-bold text-slate-900">%100,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Dağıtım tablosu nasıl okunmalı?">
                <div className="grid gap-4">
                  {yatirimciDagilimi.map((item) => (
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

              <Section title="Halka arz talebi açısından öne çıkanlar">
                <div className="grid gap-3">
                  {halkaArzOkumasi.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="156 lot için muhtemel tavan serisi tablosu">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Aşağıdaki tablo, bireysel yatırımcıya dağıtılan azami{" "}
                  <strong>156 lot</strong> üzerinden, halka arz fiyatı olan{" "}
                  <strong>70,00 TL</strong> baz alınarak hazırlanmış teorik bir
                  tavan serisi senaryosunu gösteriyor. Hesaplama, günlük tavan
                  fiyat artışları üzerinden yaklaşık olarak yapılmıştır.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Gün</th>
                        <th className="px-4 py-3 text-left font-semibold">Tavan Fiyat</th>
                        <th className="px-4 py-3 text-left font-semibold">Günlük Kazanç (TL)</th>
                        <th className="px-4 py-3 text-left font-semibold">Portföy Değeri (TL)</th>
                        <th className="px-4 py-3 text-left font-semibold">Toplam Kazanç (TL)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {muhtemelTavanSerisi.map((item, index) => (
                        <tr
                          key={item.gun}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.gun}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.fiyat}
                          </td>
                          <td className="px-4 py-3 font-semibold text-emerald-700">
                            {item.kazanc}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.para}
                          </td>
                          <td className="px-4 py-3 font-bold text-blue-700">
                            {item.toplam}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                  Bu tablo yaklaşık hesaplama niteliğindedir. Gerçek fiyatlama,
                  işlem günlerindeki tavan/taban marjları, emir dengesi ve piyasa
                  koşullarına göre farklılaşabilir.
                </div>
              </Section>

              <Section title="İçsel bilgiye ulaşabilecek konumdaki kişilere dağıtılan paylar">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Halka arzla birlikte, içsel bilgiye ulaşabilecek konumdaki ve
                  idari sorumluluğu bulunan kişiler tarafından satın alınan paylar
                  da ayrıca paylaşıldı. Bu tablo, halka arz sürecindeki teknik
                  şeffaflık açısından takip edilen ek veri niteliğinde.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Ad Soyad</th>
                        <th className="px-4 py-3 text-left font-semibold">Kurum</th>
                        <th className="px-4 py-3 text-left font-semibold">Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {icSelBilgiPaylari.map((item, index) => (
                        <tr
                          key={item.ad}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.ad}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.kurum}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.pay}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SARAE tarafında halka arz sonuçları, ilk işlem günündeki olası
                  fiyat davranışını okumak için önemli ipuçları veriyor.
                  729.560 yatırımcıya dağıtım yapılması, çok sayıda yatırımcının
                  işlem gününde hisseyi yakından takip edeceğine işaret ediyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bireyselde azami 156 lot dağıtımı olması, lot bazında çok yüksek
                  bir yığılma olmadığını gösterse de yatırımcı sayısının genişliği
                  nedeniyle ilk gün emir tarafındaki denge kritik olacak.
                  Kurumsal tahsisatın %50 olması ise ilk gün fiyatlamasında ayrı
                  bir denge unsuru olarak izlenecek.
                </p>
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

              <Section title="SARAE halka arz sonuçları hakkında kısa soru-cevap">
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
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://www.kap.org.tr/Bildirim/1632601"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block font-medium text-slate-700 underline underline-offset-2"
                  >
                    SARAE halka arz satış sonuçları — Orjinal Kap içeriği
                  </a>
                  <a
                    href="https://www.kap.org.tr/Bildirim/1632603"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block font-medium text-slate-700 underline underline-offset-2"
                  >
                    İçsel bilgiye ulaşabilecek konumdaki kişilere dağıtılan paylar — Orjinal Kap içeriği
                  </a>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Şa-Ra Enerji Halka Arz Sonuçları Açıklandı: 729.560 Yatırımcıya Dağıtım"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Halka arz sonrası fiyatlama; işlem başlangıcı,
                emir dengesi, likidite, piyasa koşulları ve yatırımcı davranışıyla
                birlikte değerlendirilmelidir.
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
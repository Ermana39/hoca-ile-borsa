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

const slug = "pgsus-haziran-2026-trafik-verileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/pgsus-haziran-2026-trafik-verileri.webp";

export const metadata: Metadata = {
  title: "PGSUS Haziran 2026 Trafik Verileri Açıklandı",
  description:
    seoAciklamasi("Pegasus Haziran 2026 trafik verilerini açıkladı. Toplam misafir sayısı aylık bazda %3 artışla 3,74 milyona, yılın ilk yarısında ise %3 artışla 20,37 milyona ulaştı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "PGSUS Haziran 2026 Trafik Verileri Açıklandı",
    description:
      "PGSUS Haziran 2026 trafik verilerinde iç hat yolcu sayısı %20 artarken, dış hat yolcu sayısı %6 geriledi. Toplam doluluk oranı %85,7 oldu.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "PGSUS Haziran 2026 trafik verileri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PGSUS Haziran 2026 Trafik Verileri Açıklandı",
    description:
      "Pegasus Haziran ayında 3,74 milyon misafir taşıdı. Toplam yolcu sayısı yıllık bazda %3 arttı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Haziran Misafir",
    deger: "3,74 Mn",
    aciklama: "Yıllık %3 artış",
  },
  {
    baslik: "6 Aylık Misafir",
    deger: "20,37 Mn",
    aciklama: "Ocak-Haziran toplamı",
  },
  {
    baslik: "Haziran Doluluk",
    deger: "%85,7",
    aciklama: "Yıllık -0,9 puan",
  },
  {
    baslik: "6 Aylık Doluluk",
    deger: "%84,5",
    aciklama: "Yıllık -1,7 puan",
  },
];

const genelDetaylar = [
  {
    etiket: "Şirket",
    deger: "Pegasus Hava Taşımacılığı A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "PGSUS",
  },
  {
    etiket: "Bildirim Tarihi",
    deger: "13.07.2026",
  },
  {
    etiket: "Bildirim Saati",
    deger: "18:15:39",
  },
  {
    etiket: "Açıklama Konusu",
    deger: "Haziran 2026 trafik verileri ve karbon emisyonu istatistikleri",
  },
  {
    etiket: "Haziran Misafir Sayısı",
    deger: "3,74 milyon",
  },
  {
    etiket: "Haziran Misafir Değişimi",
    deger: "%3 artış",
  },
  {
    etiket: "Ocak-Haziran Misafir Sayısı",
    deger: "20,37 milyon",
  },
  {
    etiket: "Ocak-Haziran Misafir Değişimi",
    deger: "%3 artış",
  },
  {
    etiket: "Haziran Doluluk Oranı",
    deger: "%85,7",
  },
  {
    etiket: "Ocak-Haziran Doluluk Oranı",
    deger: "%84,5",
  },
  {
    etiket: "Haziran Karbon Emisyonu",
    deger: "56,9 grCO2/RPK",
  },
];

const toplamTrafik = [
  {
    metrik: "Misafir sayısı",
    haziran2026: "3,74 mn",
    haziran2025: "3,61 mn",
    haziranDegisim: "%3",
    ilkYari2026: "20,37 mn",
    ilkYari2025: "19,71 mn",
    ilkYariDegisim: "%3",
  },
  {
    metrik: "Konma",
    haziran2026: "20.491",
    haziran2025: "19.795",
    haziranDegisim: "%4",
    ilkYari2026: "114.112",
    ilkYari2025: "108.554",
    ilkYariDegisim: "%5",
  },
  {
    metrik: "Koltuk sayısı",
    haziran2026: "4,36 mn",
    haziran2025: "4,17 mn",
    haziranDegisim: "%4",
    ilkYari2026: "24,10 mn",
    ilkYari2025: "22,85 mn",
    ilkYariDegisim: "%5",
  },
  {
    metrik: "Doluluk oranı",
    haziran2026: "%85,7",
    haziran2025: "%86,6",
    haziranDegisim: "-0,9 puan",
    ilkYari2026: "%84,5",
    ilkYari2025: "%86,3",
    ilkYariDegisim: "-1,7 puan",
  },
  {
    metrik: "ASK",
    haziran2026: "6.709 mn km",
    haziran2025: "6.798 mn km",
    haziranDegisim: "-%1",
    ilkYari2026: "36.800 mn km",
    ilkYari2025: "35.974 mn km",
    ilkYariDegisim: "%2",
  },
  {
    metrik: "Konma başına misafir",
    haziran2026: "182",
    haziran2025: "183",
    haziranDegisim: "%0",
    ilkYari2026: "179",
    ilkYari2025: "182",
    ilkYariDegisim: "-%2",
  },
];

const hatKirilimi = [
  {
    baslik: "İç Hatlar",
    aylikMisafir: "1,55 mn",
    aylikDegisim: "%20",
    aylikDoluluk: "%88,3",
    aylikDolulukDegisim: "-3,3 puan",
    kumeMisafir: "8,22 mn",
    kumeDegisim: "%16",
    kumeDoluluk: "%87,4",
    kumeDolulukDegisim: "-2,8 puan",
    yorum:
      "İç hatlarda yolcu sayısı güçlü artarken kapasite artışı da belirgin oldu. Koltuk sayısı aylık bazda %25, ASK ise %29 yükseldi.",
  },
  {
    baslik: "Dış Hatlar",
    aylikMisafir: "2,19 mn",
    aylikDegisim: "-%6",
    aylikDoluluk: "%84,0",
    aylikDolulukDegisim: "-0,1 puan",
    kumeMisafir: "12,15 mn",
    kumeDegisim: "-%4",
    kumeDoluluk: "%82,7",
    kumeDolulukDegisim: "-1,5 puan",
    yorum:
      "Dış hatlarda aylık misafir sayısı gerilerken doluluk oranındaki düşüş sınırlı kaldı. Haziran ayında dış hat ASK verisi yıllık bazda %7 azaldı.",
  },
];

const anaOkuma = [
  {
    baslik: "Toplam yolcu büyümesi sınırlı ama pozitif",
    aciklama:
      "Haziran ayında toplam misafir sayısı %3 artışla 3,74 milyona çıktı. Yılın ilk yarısında da toplam misafir sayısı %3 artışla 20,37 milyon oldu.",
  },
  {
    baslik: "İç hatlar büyümeyi taşıdı",
    aciklama:
      "Haziran ayında iç hat misafir sayısı %20 artarken dış hat misafir sayısı %6 geriledi. Toplam yolcu artışının ana kaynağı iç hat operasyonu oldu.",
  },
  {
    baslik: "Doluluk oranı baskılandı",
    aciklama:
      "Toplam doluluk oranı Haziran ayında %85,7’ye gerileyerek yıllık bazda 0,9 puan düştü. Ocak-Haziran döneminde ise doluluk %84,5 ile yıllık bazda 1,7 puan aşağıda kaldı.",
  },
  {
    baslik: "Kapasite artışı yolcu artışının üzerinde",
    aciklama:
      "Ocak-Haziran döneminde koltuk sayısı %5 artarken misafir sayısı %3 arttı. Bu fark, doluluk oranındaki gerilemenin ana nedenlerinden biri olarak okunabilir.",
  },
];

const karbonVerileri = [
  { donem: "Haziran", pgsus2026: "56,9", pgsus2025: "57,8" },
  { donem: "6 Aylık", pgsus2026: "57,8", pgsus2025: "57,3" },
  { donem: "2025 Yıllık", pgsus2026: "56,9", pgsus2025: "-" },
  { donem: "2024 Yıllık", pgsus2026: "58,3", pgsus2025: "-" },
];

const finansalOkuma = [
  "Yolcu sayısındaki %3’lük artış, ciro tarafı için destekleyici bir trafik görünümü sunuyor.",
  "Doluluk oranındaki gerileme, kapasite artışının yolcu artışından daha hızlı ilerlediğini gösteriyor.",
  "İç hatlarda yüksek büyüme var; ancak iç hat ve dış hat birim gelirleri aynı olmadığı için finansal etki yalnız yolcu sayısıyla okunmamalı.",
  "Dış hat yolcu sayısındaki düşüş, Pegasus’un gelir kalitesi açısından ayrıca takip edilmeli.",
  "Trafik verilerinin bilanço etkisi; bilet fiyatları, yan gelirler, yakıt maliyeti, kur, dış hat gelirleri ve doluluk oranı ile birlikte netleşir.",
];

const takipBasliklari = [
  "Temmuz ve Ağustos yoğun sezon trafik verileri",
  "Dış hat yolcu sayısındaki düşüşün devam edip etmeyeceği",
  "Toplam doluluk oranında toparlanma olup olmayacağı",
  "Koltuk kapasitesi artışı ile yolcu talebi arasındaki denge",
  "Yakıt maliyeti ve kur etkisinin finansallara yansıması",
  "PGSUS ikinci çeyrek ve yaz sezonu kârlılık görünümü",
];

const seoSorular = [
  {
    soru: "PGSUS Haziran 2026 trafik verilerinde yolcu sayısı kaç oldu?",
    cevap:
      "Pegasus Haziran 2026 döneminde toplam 3,74 milyon misafir taşıdı. Bu rakam geçen yılın aynı ayına göre %3 artış anlamına geliyor.",
  },
  {
    soru: "PGSUS 2026 ilk yarıda kaç yolcu taşıdı?",
    cevap:
      "PGSUS Ocak-Haziran 2026 döneminde toplam 20,37 milyon misafir taşıdı. İlk yarıdaki yıllık artış %3 oldu.",
  },
  {
    soru: "PGSUS Haziran 2026 doluluk oranı kaç oldu?",
    cevap:
      "Haziran 2026’da toplam doluluk oranı %85,7 oldu. Bu oran geçen yılın aynı ayına göre 0,9 puan daha düşük gerçekleşti.",
  },
  {
    soru: "PGSUS iç hat ve dış hat verilerinde ne öne çıktı?",
    cevap:
      "Haziran ayında iç hat misafir sayısı %20 artarken dış hat misafir sayısı %6 geriledi. Toplam büyümeyi iç hatlar taşıdı.",
  },
  {
    soru: "PGSUS trafik verileri hisse için nasıl okunmalı?",
    cevap:
      "Toplam yolcu artışı olumlu olsa da doluluk oranındaki düşüş ve dış hat yolcu sayısındaki gerileme birlikte izlenmeli. Finansal etki bilet gelirleri, yan gelirler, maliyetler ve kur etkisiyle netleşir.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "PGSUS Haziran 2026 Trafik Verileri Açıklandı",
  description:
    "Pegasus Haziran 2026 trafik verilerini açıkladı. Toplam misafir sayısı aylık bazda %3 artışla 3,74 milyona, yılın ilk yarısında ise %3 artışla 20,37 milyona ulaştı.",
  image: haberGorsel,
  datePublished: "2026-07-13T18:15:39+03:00",
  dateModified: "2026-07-13T18:15:39+03:00",
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

export default function PgsusHaziranTrafikVerileriPage() {
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
              src="/pgsus-haziran-2026-trafik-verileri.webp"
              alt="PGSUS Haziran 2026 trafik verileri"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              PGSUS Haziran 2026 Trafik Verileri Açıklandı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Trafik Verileri
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
                Pegasus Hava Taşımacılığı A.Ş. (<strong>PGSUS</strong>), Haziran
                2026 trafik verilerini ve karbon emisyonu istatistiklerini
                yayımladı. Şirketin toplam misafir sayısı Haziran ayında yıllık
                bazda <strong>%3 artışla 3,74 milyon</strong> oldu.
              </p>

              <p>
                Ocak-Haziran döneminde toplam misafir sayısı{" "}
                <strong>20,37 milyon</strong> seviyesine ulaştı. İlk yarıdaki
                yıllık artış %3 olurken, toplam doluluk oranı aynı dönemde{" "}
                <strong>%84,5</strong> olarak gerçekleşti.
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
                  PGSUS, Haziran 2026 trafik sonuçlarını KAP üzerinden duyurdu.
                  Toplam misafir sayısı aylık bazda artış gösterirken, doluluk
                  oranı geçen yılın aynı ayına göre geriledi. İç hatlarda güçlü
                  büyüme dikkat çekerken dış hatlarda yolcu sayısı düşüş gösterdi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu veri seti, Pegasus’un yaz sezonuna girerken yolcu talebi,
                  kapasite kullanımı ve iç hat-dış hat dengesi açısından nasıl
                  bir tabloyla ilerlediğini göstermesi bakımından önemli.
                </p>
              </Section>

              <Section title="Genel trafik verileri">
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

              <Section title="Toplam trafik sonuçları">
                <div className="overflow-x-auto">
                  <table className="min-w-[900px] overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Metrik</th>
                        <th className="px-4 py-3 text-left font-semibold">Haziran 2026</th>
                        <th className="px-4 py-3 text-left font-semibold">Haziran 2025</th>
                        <th className="px-4 py-3 text-left font-semibold">Aylık Değişim</th>
                        <th className="px-4 py-3 text-left font-semibold">Ocak-Haziran 2026</th>
                        <th className="px-4 py-3 text-left font-semibold">Ocak-Haziran 2025</th>
                        <th className="px-4 py-3 text-left font-semibold">6 Aylık Değişim</th>
                      </tr>
                    </thead>
                    <tbody>
                      {toplamTrafik.map((item, index) => (
                        <tr
                          key={item.metrik}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.metrik}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.haziran2026}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.haziran2025}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.haziranDegisim}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.ilkYari2026}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.ilkYari2025}
                          </td>
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.ilkYariDegisim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="İç hat ve dış hat ayrımı">
                <div className="grid gap-4 md:grid-cols-2">
                  {hatKirilimi.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <div className="mt-3 grid gap-2 text-sm text-slate-700">
                        <div className="flex justify-between gap-4">
                          <span>Aylık misafir</span>
                          <strong>{item.aylikMisafir} / {item.aylikDegisim}</strong>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>Aylık doluluk</span>
                          <strong>{item.aylikDoluluk} / {item.aylikDolulukDegisim}</strong>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>6 aylık misafir</span>
                          <strong>{item.kumeMisafir} / {item.kumeDegisim}</strong>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>6 aylık doluluk</span>
                          <strong>{item.kumeDoluluk} / {item.kumeDolulukDegisim}</strong>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {item.yorum}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Veriler nasıl okunmalı?">
                <div className="grid gap-4">
                  {anaOkuma.map((item) => (
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

              <Section title="Karbon emisyonu istatistikleri">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Pegasus, trafik verileriyle birlikte karbon emisyonu
                  istatistiklerini de paylaştı. Haziran ayında CO2 gram/RPK
                  verisi 56,9 olurken, geçen yılın aynı ayında bu veri 57,8
                  seviyesindeydi.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Dönem</th>
                        <th className="px-4 py-3 text-left font-semibold">2026 / Güncel</th>
                        <th className="px-4 py-3 text-left font-semibold">Karşılaştırma</th>
                      </tr>
                    </thead>
                    <tbody>
                      {karbonVerileri.map((item, index) => (
                        <tr
                          key={item.donem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-800">
                            {item.donem}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.pgsus2026}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700">
                            {item.pgsus2025}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Havacılık şirketlerinde trafik verileri tek başına bilanço
                  sonucu değildir; ancak yolcu talebi, kapasite kullanımı ve gelir
                  kalitesi hakkında ön sinyal verir. PGSUS tarafında Haziran
                  verilerinde toplam yolcu artışı olumlu, doluluk oranındaki
                  gerileme ise dikkat edilmesi gereken taraf olarak öne çıkıyor.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  PGSUS için Haziran verileri karışık bir tablo sunuyor. Toplam
                  misafir sayısındaki artış pozitif; ancak toplam doluluk oranının
                  gerilemesi ve dış hat misafir sayısındaki düşüş, verinin tek
                  yönlü okunmasını zorlaştırıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Yaz sezonunun en yoğun ayları olan Temmuz ve Ağustos verileri,
                  yılın ikinci yarısına ilişkin beklentiler açısından daha güçlü
                  sinyal verecek. Özellikle dış hat talebi, bilet gelirleri ve
                  doluluk oranındaki toparlanma yakından izlenecek.
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

              <Section title="PGSUS Haziran trafik verileri hakkında kısa soru-cevap">
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
                  href="https://www.kap.org.tr/Bildirim/1632796"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  PGSUS — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="PGSUS Haziran 2026 Trafik Verileri Açıklandı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Trafik verilerinin finansal etkisi; bilet
                fiyatları, doluluk oranı, yakıt maliyeti, kur etkisi ve şirketin
                açıklayacağı finansal sonuçlarla birlikte değerlendirilmelidir.
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
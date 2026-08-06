import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const slug = "halka-arzlarda-gun-kapanisi-golda-soho-orzax-beta";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const gorselDosya = "halka-arzlarda-gun-kapanisi-golda-soho-orzax-beta.webp";
const haberGorsel = `https://www.hocaileborsa.com/${gorselDosya}`;
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const title =
  "Halka Arzlarda Gün Kapanışı: GOLDA Tavan, SOHOE Taban, ORZAX ve BETAE Yorumu";
const description =
  "GOLDA ilk işlem gününü tavan fiyatla kapattı. SOHOE 3. işlem gününde taban olurken ORZAX %5,40 yükseldi, BETAE 6. işlem gününde tavan serisini sürdürdü.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: haberUrl,
  },
  keywords: [
    "halka arzlarda gün kapanışı",
    "GOLDA tavan kapattı",
    "SOHOE taban kapattı",
    "SOHOE fiyat istikrarı",
    "ORZAX kapanış yorumu",
    "BETAE tavan serisi",
    "Golda Gıda ilk işlem günü",
    "Soho Giyim halka arz kapanış",
    "Beta Enerji halka arz tavan",
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
        alt: "GOLDA SOHOE ORZAX BETAE halka arz gün kapanışı yorumları",
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

type Durum = "pozitif" | "negatif" | "izleme";

const durumStilleri: Record<Durum, string> = {
  pozitif: "border-emerald-200 bg-emerald-50 text-emerald-700",
  negatif: "border-red-200 bg-red-50 text-red-700",
  izleme: "border-amber-200 bg-amber-50 text-amber-700",
};

const kapanisVerileri: {
  hisse: string;
  sirket: string;
  islemGunu: string;
  arzFiyati: string;
  kapanisFiyati: string;
  gunlukDurum: string;
  kazancYuzde: string;
  kazancTl: string;
  gunIciLot: string;
  toplamElDegisim: string;
  emirBasligi: string;
  emirDegeri: string;
  tavanTabanOran: string;
  halkaAcikDeger: string;
  yorum: string;
  durum: Durum;
}[] = [
  {
    hisse: "GOLDA",
    sirket: "Golda Gıda",
    islemGunu: "1. işlem günü",
    arzFiyati: "9,20 TL",
    kapanisFiyati: "10,12 TL",
    gunlukDurum: "Tavan kapanış",
    kazancYuzde: "%10,00",
    kazancTl: "121,44 TL",
    gunIciLot: "893.503 lot",
    toplamElDegisim: "%1,02",
    emirBasligi: "Tavandaki alış lotu",
    emirDegeri: "36.059.121 lot",
    tavanTabanOran: "%41,21",
    halkaAcikDeger: "885.499.979,76 TL",
    yorum:
      "İlk işlem gününü tavan fiyatla kapattı. Gün içi el değiştiren lot oranı %1,02 ile düşük görünse de ilk gün için beklenenin biraz üzerinde bir çözülme oluştu.",
    durum: "pozitif",
  },
  {
    hisse: "SOHOE",
    sirket: "Soho Giyim",
    islemGunu: "3. işlem günü",
    arzFiyati: "15,00 TL",
    kapanisFiyati: "13,37 TL",
    gunlukDurum: "Taban kapanış",
    kazancYuzde: "-%10,87",
    kazancTl: "-163,00 TL",
    gunIciLot: "169.653.381 lot",
    toplamElDegisim: "%618,36",
    emirBasligi: "Tabandaki satış lotu",
    emirDegeri: "Yaklaşık 750 bin lot",
    tavanTabanOran: "%0,00",
    halkaAcikDeger: "1.337.000.000 TL",
    yorum:
      "3. işlem gününde taban fiyatla kapandı. Kapanış fiyatı halka arz fiyatının oldukça altına gerilerken, onaylı izahnamede planlanan fiyat istikrarının gün kapanışında devreye girmediği görüldü.",
    durum: "negatif",
  },
  {
    hisse: "ORZAX",
    sirket: "Orzax İlaç",
    islemGunu: "Hareketli kapanış",
    arzFiyati: "69,00 TL",
    kapanisFiyati: "80,00 TL",
    gunlukDurum: "%5,40 yükseliş",
    kazancYuzde: "%15,94",
    kazancTl: "407,00 TL",
    gunIciLot: "94.940.792 lot",
    toplamElDegisim: "%233,94",
    emirBasligi: "Yarın izlenecek denge",
    emirDegeri: "Alıcı-satıcı dengesi",
    tavanTabanOran: "%0,00",
    halkaAcikDeger: "4.200.000.000 TL",
    yorum:
      "Hareketli geçen günü %5,40 yükselişle tamamladı. Fiyat halka arz seviyesinin üzerinde kaldı; yarınki alıcı-satıcı dengesi yön açısından belirleyici olacak.",
    durum: "izleme",
  },
  {
    hisse: "BETAE",
    sirket: "Beta Enerji",
    islemGunu: "6. işlem günü",
    arzFiyati: "40,00 TL",
    kapanisFiyati: "70,75 TL",
    gunlukDurum: "Tavan kapanış",
    kazancYuzde: "%76,88",
    kazancTl: "861,00 TL",
    gunIciLot: "30.511.625 lot",
    toplamElDegisim: "%62,19",
    emirBasligi: "Tavandaki alış lotu",
    emirDegeri: "0 lot",
    tavanTabanOran: "%0,00",
    halkaAcikDeger: "4.298.062.500 TL",
    yorum:
      "6. işlem gününü de tavan fiyatla tamamladı. Ancak gün sonunda gelen toplu satışlar nedeniyle tavanda ekstra alış lotu kalmaması yarın için dikkat edilmesi gereken ana başlık oldu.",
    durum: "izleme",
  },
];

const ozetKartlari = [
  {
    baslik: "En Güçlü Kapanış",
    deger: "GOLDA",
    aciklama: "İlk işlem gününü tavan fiyat ve 36,06 milyon lot tavan alışıyla kapattı.",
  },
  {
    baslik: "Negatif Ayrışan",
    deger: "SOHOE",
    aciklama: "3. işlem gününde taban fiyatla halka arz seviyesinin altına indi; planlanan fiyat istikrarı uygulanmadı.",
  },
  {
    baslik: "Hareketli Takip",
    deger: "ORZAX",
    aciklama: "%5,40 yükselişle günü tamamladı, yarınki emir dengesi kritik.",
  },
  {
    baslik: "Seriyi Sürdüren",
    deger: "BETAE",
    aciklama: "6. tavan geldi ancak kapanışta ekstra tavan alış lotu kalmadı.",
  },
];

const gunlukElDegisim = [
  {
    hisse: "BETAE",
    oranlar: ["1. gün %0,12", "2. gün %0,28", "3. gün %1,50", "4. gün %3,44", "5. gün %6,63", "6. gün %50,22"],
  },
  {
    hisse: "SOHOE",
    oranlar: ["1. gün %196,37", "2. gün %252,34", "3. gün %169,65"],
  },
  {
    hisse: "ORZAX",
    oranlar: ["Gün içi %180,84", "Toplam %233,94"],
  },
  {
    hisse: "GOLDA",
    oranlar: ["1. gün %1,02"],
  },
];

const takipBasliklari = [
  {
    hisse: "GOLDA",
    metin:
      "Tavan lotu güçlü olduğu için ikinci işlem gününde tavandaki alıcı miktarı, gün içi lot çözülmesi ve emir başına düşen lot yakından izlenmeli.",
  },
  {
    hisse: "SOHOE",
    metin:
      "Halka arz fiyatının altında kapanış sonrası 15,00 TL bölgesi ve planlanan fiyat istikrarının uygulanıp uygulanmayacağı ana takip başlığı olacak.",
  },
  {
    hisse: "ORZAX",
    metin:
      "Fiyat pozitif kaldı ancak toplam el değiştiren lot oranı %233,94 seviyesine çıktı. Bu nedenle yarınki alıcı-satıcı dengesi yön açısından önemli olacak.",
  },
  {
    hisse: "BETAE",
    metin:
      "Tavan serisi sürse de kapanışta tavan alış lotu kalmaması, 7. işlem gününde açılış ve ilk yarım saat verisini daha önemli hale getiriyor.",
  },
];

const sorular = [
  {
    soru: "GOLDA ilk işlem gününü nasıl kapattı?",
    cevap:
      "GOLDA ilk işlem gününü 10,12 TL tavan fiyatla kapattı. Halka arz fiyatı 9,20 TL olduğu için günlük kazanç %10 oldu.",
  },
  {
    soru: "SOHOE halka arz fiyatının altında mı kapandı?",
    cevap:
      "Evet. SOHOE 15,00 TL halka arz fiyatına karşılık günü 13,37 TL seviyesinde taban fiyatla kapattı. Onaylı izahnamede brüt halka arz gelirinin %10'u ile 30 gün fiyat istikrarı planlanmasına rağmen gün kapanışında fiyat istikrarı uygulanmadı.",
  },
  {
    soru: "ORZAX gün sonunda kaç TL oldu?",
    cevap:
      "ORZAX günü 80,00 TL seviyesinde tamamladı. Halka arz fiyatı 69,00 TL olduğu için halka arz fiyatına göre kazanç %15,94 oldu.",
  },
  {
    soru: "BETAE tavan serisi devam ediyor mu?",
    cevap:
      "BETAE 6. işlem gününü de tavan fiyatla kapattı. Ancak gün sonunda tavanda ekstra alış lotu kalmaması nedeniyle sonraki seans dikkatle izlenmeli.",
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

export default function HalkaArzGunKapanisiPage() {
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
              alt="GOLDA SOHOE ORZAX BETAE halka arz gün kapanışı yorumları"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Halka Arzlarda Gün Kapanışı: GOLDA Tavan, SOHOE Taban, ORZAX ve BETAE Yorumu
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz Gün Kapanışı
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
                Halka arzlarda gün kapanışı dört farklı tabloyu aynı anda
                gösterdi. <strong>Golda Gıda</strong> ilk işlem gününü tavan
                fiyatla kapattı. <strong>Soho Giyim</strong> 3. işlem gününde
                taban fiyatla halka arz fiyatının belirgin şekilde altına indi.
                <strong> Orzax İlaç</strong> hareketli günü %5,40 yükselişle
                bitirirken, <strong>Beta Enerji</strong> 6. işlem gününü de
                tavan fiyatla tamamladı.
              </p>

              <p>
                Gün sonu verilerinde sadece kapanış fiyatına bakmak yeterli
                değil. Tavan veya taban fiyatın yanında gün içi el değiştiren
                lot sayısı, toplam el değiştiren lot oranı, tavanda bekleyen
                alış miktarı ve halka arz fiyatına göre oluşan marj birlikte
                okunmalı. Bugünkü kapanışta GOLDA güçlü başlarken, SOHOE negatif
                ayrıştı; ORZAX ve BETAE tarafında ise sonraki seans için emir
                dengesi daha kritik hale geldi.
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

              <Section title="Gün kapanışı karşılaştırma tablosu">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold">
                          Hisse
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Arz Fiyatı
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Kapanış
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Kazanç %
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Gün İçi Lot
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Toplam El Değişimi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {kapanisVerileri.map((item, index) => (
                        <tr
                          key={item.hisse}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.hisse}
                            <div className="text-xs font-medium text-slate-500">
                              {item.sirket} · {item.islemGunu}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.arzFiyati}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.kapanisFiyati}
                          </td>
                          <td
                            className={`px-4 py-3 text-right font-bold ${
                              item.kazancYuzde.startsWith("-")
                                ? "text-red-600"
                                : "text-emerald-600"
                            }`}
                          >
                            {item.kazancYuzde}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.gunIciLot}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.toplamElDegisim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Hisse bazlı gün sonu yorumu">
                <div className="space-y-4">
                  {kapanisVerileri.map((item) => (
                    <div
                      key={item.hisse}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {item.hisse} - {item.sirket}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-slate-500">
                            {item.islemGunu} · {item.gunlukDurum}
                          </p>
                        </div>
                        <span
                          className={`rounded-full border px-3 py-1 text-sm font-bold ${durumStilleri[item.durum]}`}
                        >
                          {item.kazancYuzde}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.yorum}
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg bg-white p-3">
                          <div className="text-xs font-semibold text-slate-500">
                            {item.emirBasligi}
                          </div>
                          <div className="mt-1 font-bold text-slate-900">
                            {item.emirDegeri}
                          </div>
                        </div>
                        <div className="rounded-lg bg-white p-3">
                          <div className="text-xs font-semibold text-slate-500">
                            Halka Açık Piyasa Değeri
                          </div>
                          <div className="mt-1 font-bold text-slate-900">
                            {item.halkaAcikDeger}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="GOLDA ilk işlem gününde ne gösterdi?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  GOLDA payları 9,20 TL halka arz fiyatına karşılık 10,12 TL
                  tavan fiyatla günü tamamladı. İlk işlem gününde %10 kazanç
                  oluşurken, gün içi el değiştiren lot sayısı 893.503 oldu. Bu
                  veri toplam halka açık paya göre %1,02 seviyesine denk geliyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İlk işlem günü için tavan kapanış pozitif. Ancak beklenenin
                  biraz üzerinde lot el değiştirmesi, ikinci işlem gününde tavan
                  alış miktarının daha dikkatli izlenmesini gerektiriyor. Buna
                  rağmen 36.059.121 lot tavan alışı ve %41,21 tavan lot oranı
                  GOLDA tarafında güçlü kapanış görüntüsünü destekledi.
                </p>
              </Section>

              <Section title="SOHOE neden negatif ayrıştı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SOHOE, 15,00 TL halka arz fiyatına karşılık 13,37 TL kapanış
                  yaptı. Bu kapanış, halka arz fiyatına göre -%10,87 kayba işaret
                  ediyor. Hissenin halka arz fiyatının altında kalması günün
                  negatif ayrışan başlığı oldu.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Gün içinde 169.653.381 lot el değiştirdi. Toplam el değiştiren
                  lot oranının %618,36 seviyesine ulaşması, hissede kısa sürede
                  çok yüksek devir yaşandığını gösteriyor. 3. işlem gününde taban
                  kapanış gelmesi nedeniyle SOHOE için 15,00 TL halka arz
                  fiyatının yeniden üzerine çıkıp çıkamayacağı ana takip başlığı
                  olacak.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Soho Giyim onaylı izahname bilgilerinde brüt halka arz
                  gelirinin <strong>%10&apos;u</strong> ile{" "}
                  <strong>30 gün</strong> boyunca fiyat istikrarı sağlayıcı
                  işlemler planlandığı yer alıyor. Buna rağmen gün kapanışında
                  fiyat istikrarı uygulanmadı. Bu nedenle sonraki seansta fiyat
                  istikrarı adımı gelip gelmeyeceği ve 15,00 TL halka arz
                  fiyatının tekrar kazanılıp kazanılamayacağı birlikte izlenmeli.
                </p>
              </Section>

              <Section title="ORZAX hareketli günü nasıl tamamladı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ORZAX 69,00 TL halka arz fiyatından sonra günü 80,00 TL
                  seviyesinde kapattı. Günlük kapanış %5,40 yükseliş gösterirken,
                  halka arz fiyatına göre toplam kazanç %15,94 seviyesinde
                  oluştu.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  ORZAX tarafında gün içi el değiştiren lot sayısı 94.940.792
                  oldu. Toplam el değiştiren lot oranı %233,94 seviyesine çıktığı
                  için hissede yatırımcı değişimi oldukça yüksek. Bu nedenle
                  yarınki alıcı-satıcı dengesi fiyatın hangi bölgede
                  dengeleneceği açısından daha önemli hale geliyor.
                </p>
              </Section>

              <Section title="BETAE tavan serisi sürüyor mu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  BETAE 6. işlem gününü de tavan fiyatla kapatarak seriyi
                  sürdürdü. 40,00 TL halka arz fiyatına karşılık kapanış 70,75 TL
                  oldu ve halka arz fiyatına göre kazanç %76,88 seviyesine
                  yükseldi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Buna karşın gün sonunda gelen toplu satışlar nedeniyle tavanda
                  ekstra alış lotu kalmadı. Bu, serinin bittiği anlamına gelmez;
                  ancak önceki günlere göre riskin arttığını ve yeni seans
                  açılışındaki emir dengesinin daha belirleyici hale geldiğini
                  gösterir.
                </p>
              </Section>

              <Section title="El değiştiren lot oranları ne anlatıyor?">
                <div className="grid gap-4 md:grid-cols-2">
                  {gunlukElDegisim.map((item) => (
                    <div
                      key={item.hisse}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.hisse}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.oranlar.map((oran) => (
                          <span
                            key={oran}
                            className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                          >
                            {oran}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Yarın hangi seviyeler izlenmeli?">
                <div className="space-y-3 text-sm leading-7 text-slate-600 md:text-base">
                  {takipBasliklari.map((item) => (
                    <p key={item.hisse}>
                      <strong>{item.hisse}:</strong> {item.metin}
                    </p>
                  ))}
                </div>
              </Section>

              <Section title="Kısa sonuç">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Gün kapanışında GOLDA ilk gün tavanı ve yüksek tavan alış
                  lotuyla pozitif başladı. SOHOE, halka arz fiyatının altındaki
                  taban kapanışla negatif ayrıştı. ORZAX yükselişini sürdürse de
                  yüksek lot değişimi nedeniyle izleme tarafında kaldı. BETAE ise
                  6. tavanı görmesine rağmen kapanışta tavan alış lotu
                  kalmamasıyla daha dikkatli takip edilmesi gereken halka arz
                  haline geldi.
                </p>
              </Section>

              <Section title="Sık sorulan sorular">
                <div className="space-y-4">
                  {sorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.soru}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="Halka Arzlarda Gün Kapanışı: GOLDA Tavan, SOHOE Taban, ORZAX ve BETAE Yorumu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi
                değildir. Halka arz sonrası ilk işlem günlerinde fiyat, emir ve
                lot dengesi hızlı değişebilir.
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

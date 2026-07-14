import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const slug = "14-temmuz-2026-son-halka-arzlar-gun-sonu-degerlendirmesi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const gorselDosya =
  "14-temmuz-2026-son-halka-arzlar-gun-sonu-degerlendirmesi.webp";
const haberGorsel = `https://www.hocaileborsa.com/${gorselDosya}`;
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const title =
  "14 Temmuz Son Halka Arzlarda Gün Sonu: ISVEA, GOLDA, ORZAX ve BETAE Tavan";
const description =
  "14 Temmuz 2026 son halka arzlarda gün sonu kapanış değerlendirmesi: ISVEA 3. işlem gününü, GOLDA 5. işlem gününü, ORZAX ve BETAE tavan fiyatla kapattı. SOHOE ve EKIM günü ekside tamamladı.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: haberUrl,
  },
  keywords: [
    "14 Temmuz halka arz gün sonu",
    "son halka arzlar kapanış",
    "ISVEA 3 işlem günü tavan",
    "GOLDA 5 işlem günü tavan",
    "ORZAX tavan kapattı",
    "BETAE 10 tavan",
    "SOHOE EKIM ekside kapattı",
    "halka arz tavan serisi",
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
        alt: "14 Temmuz 2026 son halka arzlar gün sonu kapanış tablosu",
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

type Durum = "pozitif" | "negatif" | "risk";

const durumStilleri: Record<Durum, string> = {
  pozitif: "border-emerald-200 bg-emerald-50 text-emerald-700",
  negatif: "border-red-200 bg-red-50 text-red-700",
  risk: "border-amber-200 bg-amber-50 text-amber-700",
};

const kapanisVerileri: {
  hisse: string;
  sirket: string;
  islemGunu: string;
  arzFiyati: string;
  guncelFiyat: string;
  kazancTl: string;
  kazancYuzde: string;
  gunIciLot: string;
  toplamElDegisim: string;
  tavanTabanLot: string;
  tavanTabanOran: string;
  tavanTabanDeger: string;
  yorum: string;
  durum: Durum;
}[] = [
  {
    hisse: "ISVEA",
    sirket: "İsvea Banyo",
    islemGunu: "3. işlem günü",
    arzFiyati: "20,90 TL",
    guncelFiyat: "27,78 TL",
    kazancTl: "330,24 TL",
    kazancYuzde: "%32,92",
    gunIciLot: "2.736.864 lot",
    toplamElDegisim: "%6,90",
    tavanTabanLot: "42.238.238 lot",
    tavanTabanOran: "%63,04",
    tavanTabanDeger: "1.173.378.251,64 TL",
    yorum:
      "İsvea Banyo 3. işlem gününü de tavan fiyatla kapattı. 3 işlem günü sonunda toplam el değiştiren lot oranının %6,90 gibi düşük seviyede kalması, tavan serisinin sağlıklı devam ettiğini gösteren en önemli veri oldu.",
    durum: "pozitif",
  },
  {
    hisse: "GOLDA",
    sirket: "Golda Gıda",
    islemGunu: "5. işlem günü",
    arzFiyati: "9,20 TL",
    guncelFiyat: "14,80 TL",
    kazancTl: "739,20 TL",
    kazancYuzde: "%60,87",
    gunIciLot: "4.713.033 lot",
    toplamElDegisim: "%17,24",
    tavanTabanLot: "35.846.654 lot",
    tavanTabanOran: "%40,97",
    tavanTabanDeger: "530.530.479,20 TL",
    yorum:
      "Golda Gıda 5. işlem gününü de tavan fiyatla kapatarak seriyi sürdürdü. Toplam el değiştiren lot oranı %17,24 seviyesine ulaştığı için artık güvenli alandan riskli alana geçiş yavaş yavaş başlıyor. Bu lotları toplayan kurumların olası satışları ters etki yaratabilir.",
    durum: "risk",
  },
  {
    hisse: "ORZAX",
    sirket: "Orzax İlaç",
    islemGunu: "4. işlem günü",
    arzFiyati: "69,00 TL",
    guncelFiyat: "107,80 TL",
    kazancTl: "1.435,60 TL",
    kazancYuzde: "%56,23",
    gunIciLot: "20.727.220 lot",
    toplamElDegisim: "%521,26",
    tavanTabanLot: "755.861 lot",
    tavanTabanOran: "%1,44",
    tavanTabanDeger: "81.481.815,80 TL",
    yorum:
      "Orzax İlaç, Bank of America alımlarının öne çıktığı günde 1,2 milyon lot civarında tavan fiyatta kapanış yaptı. Toplam el değiştiren lot oranı çok yüksek olduğu için alıcı kurumların devamlılığı yakından izlenmeli.",
    durum: "pozitif",
  },
  {
    hisse: "BETAE",
    sirket: "Beta Enerji",
    islemGunu: "10. işlem günü",
    arzFiyati: "40,00 TL",
    guncelFiyat: "103,50 TL",
    kazancTl: "1.778,00 TL",
    kazancYuzde: "%158,75",
    gunIciLot: "37.576.460 lot",
    toplamElDegisim: "%422,73",
    tavanTabanLot: "1.527.994 lot",
    tavanTabanOran: "%2,52",
    tavanTabanDeger: "158.147.379,00 TL",
    yorum:
      "Beta Enerji 10. işlem gününü de Bank of America alımlarıyla tavan fiyatla kapattı. Gün sonunda tavanda yaklaşık 1,1 milyon lot bulunması serinin devamı açısından pozitif görünse de toplam el değiştiren lot oranı artık oldukça yüksek.",
    durum: "pozitif",
  },
  {
    hisse: "SOHOE",
    sirket: "Soho Giyim",
    islemGunu: "7. işlem günü",
    arzFiyati: "15,00 TL",
    guncelFiyat: "13,29 TL",
    kazancTl: "-171,00 TL",
    kazancYuzde: "-%11,40",
    gunIciLot: "68.768.060 lot",
    toplamElDegisim: "%1.061,97",
    tavanTabanLot: "0 lot",
    tavanTabanOran: "%0,00",
    tavanTabanDeger: "-",
    yorum:
      "Soho Giyim günü ekside kapattı. Halka arz fiyatı olan 15,00 TL'nin altında kalması ve toplam el değiştiren lot oranının %1.061,97 seviyesine ulaşması zayıf görüntünün sürdüğünü gösteriyor.",
    durum: "negatif",
  },
  {
    hisse: "EKIM",
    sirket: "Ekim Turizm",
    islemGunu: "4. işlem günü",
    arzFiyati: "30,26 TL",
    guncelFiyat: "22,80 TL",
    kazancTl: "-746,00 TL",
    kazancYuzde: "-%24,65",
    gunIciLot: "75.506.254 lot",
    toplamElDegisim: "%290,45",
    tavanTabanLot: "0 lot",
    tavanTabanOran: "%0,00",
    tavanTabanDeger: "-",
    yorum:
      "Ekim Turizm de günü ekside tamamladı. Güncel fiyatın 22,80 TL'ye gerilemesiyle halka arz fiyatına göre kayıp -%24,65 seviyesine ulaştı.",
    durum: "negatif",
  },
];

const elDegisimOranlari = [
  {
    hisse: "BETAE",
    oranlar: [
      "1. gün %0,12",
      "2. gün %0,28",
      "3. gün %1,50",
      "4. gün %3,44",
      "5. gün %6,63",
      "6. gün %52,69",
      "7. gün %159,86",
      "8. gün %54,35",
      "9. gün %82,01",
      "10. gün %61,85",
    ],
  },
  {
    hisse: "SOHOE",
    oranlar: [
      "1. gün %196,37",
      "2. gün %252,34",
      "3. gün %169,65",
      "4. gün %115,10",
      "5. gün %143,42",
      "6. gün %116,32",
      "7. gün %68,77",
    ],
  },
  {
    hisse: "ORZAX",
    oranlar: [
      "1. gün %53,10",
      "2. gün %180,84",
      "3. gün %105,78",
      "4. gün %75,84",
      "5. gün %66,22",
      "6. gün %39,48",
    ],
  },
  {
    hisse: "GOLDA",
    oranlar: [
      "1. gün %1,02",
      "2. gün %3,00",
      "3. gün %4,00",
      "4. gün %3,83",
      "5. gün %5,39",
    ],
  },
  {
    hisse: "EKIM",
    oranlar: ["1. gün %135,72", "2. gün %56,02", "3. gün %52,10", "4. gün %46,61"],
  },
  {
    hisse: "ISVEA",
    oranlar: ["1. gün %1,01", "2. gün %1,81", "3. gün %4,08"],
  },
];

const ozetKartlari = [
  {
    baslik: "En Düşük Lot Değişimi",
    deger: "ISVEA %6,90",
    aciklama: "3 işlem günü sonunda düşük toplam el değiştirme oranı.",
  },
  {
    baslik: "Risk Bölgesine Yaklaşan",
    deger: "GOLDA %17,24",
    aciklama: "5. tavan sonrası lot toplayan kurumlar izlenmeli.",
  },
  {
    baslik: "Tavan Kapanış",
    deger: "ORZAX",
    aciklama: "Bank of America alımlarıyla güçlü kapanış.",
  },
  {
    baslik: "10. Tavan",
    deger: "BETAE",
    aciklama: "Tavanda yaklaşık 1,1 milyon lotla kapanış.",
  },
  {
    baslik: "Negatif Ayrışanlar",
    deger: "SOHOE / EKIM",
    aciklama: "İki halka arz da günü ekside tamamladı.",
  },
  {
    baslik: "En Yüksek Kayıp",
    deger: "EKIM -%24,65",
    aciklama: "Halka arz fiyatına göre zayıf seyir sürdü.",
  },
];

const sorular = [
  {
    soru: "14 Temmuz 2026 halka arzlarda gün sonu nasıl geçti?",
    cevap:
      "ISVEA, GOLDA, ORZAX ve BETAE günü tavan fiyatla kapattı. SOHOE ve EKIM ise günü ekside tamamladı.",
  },
  {
    soru: "ISVEA 3. işlem gününde nasıl kapattı?",
    cevap:
      "ISVEA 3. işlem gününü de tavan fiyatla kapattı. 3 işlem günü sonunda toplam el değiştiren lot oranı %6,90 seviyesinde kaldı.",
  },
  {
    soru: "GOLDA için neden risk uyarısı yapılıyor?",
    cevap:
      "GOLDA 5. işlem gününü de tavan kapattı ancak toplam el değiştiren lot oranı %17,24'e yükseldi. Bu lotları toplayan kurumların olası satışları ters etki yaratabilir.",
  },
  {
    soru: "BETAE tavan serisi devam ediyor mu?",
    cevap:
      "BETAE 10. işlem gününü de tavan fiyatla kapattı. Gün sonunda tavanda yaklaşık 1,1 milyon lot bulundu.",
  },
  {
    soru: "SOHOE ve EKIM tarafında görünüm nasıl?",
    cevap:
      "SOHOE halka arz fiyatının %11,40 altında, EKIM ise %24,65 altında işlem görüyor. İki hisse de günü ekside kapattığı için negatif ayrıştı.",
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": haberUrl,
      },
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
  title: sectionTitle,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
        {sectionTitle}
      </h2>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="bg-slate-50 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={`/${gorselDosya}`}
              alt="14 Temmuz 2026 son halka arzlar gün sonu kapanış tablosu"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              14 Temmuz Son Halka Arzlarda Gün Sonu: ISVEA, GOLDA, ORZAX ve BETAE Tavan
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Halka Arz Gün Sonu
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
                14 Temmuz 2026 kapanışında son halka arzlarda tavan serileri ve
                lot değişim oranları yine öne çıktı. <strong>ISVEA</strong> 3.
                işlem gününü, <strong>GOLDA</strong> 5. işlem gününü,{" "}
                <strong>ORZAX</strong> ve <strong>BETAE</strong> ise günü tavan
                fiyatla kapattı.
              </p>

              <p>
                Negatif tarafta <strong>SOHOE</strong> ve <strong>EKIM</strong>{" "}
                günü ekside tamamladı. Özellikle EKIM tarafında halka arz
                fiyatına göre kayıp -%24,65 seviyesine ulaşırken, SOHOE de
                halka arz fiyatının %11,40 altında kalmayı sürdürdü.
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

              <Section title="Gün sonu özet tablosu">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold">Hisse</th>
                        <th className="px-4 py-3 text-left font-semibold">Fiyat</th>
                        <th className="px-4 py-3 text-left font-semibold">Kazanç</th>
                        <th className="px-4 py-3 text-left font-semibold">Toplam El Değişim</th>
                        <th className="px-4 py-3 text-left font-semibold">Tavan/Taban Lot</th>
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
                          <td className="px-4 py-3 text-slate-700">
                            <span className="font-semibold">{item.guncelFiyat}</span>
                            <div className="text-xs text-slate-500">
                              Arz: {item.arzFiyati}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            <span className="font-semibold">{item.kazancYuzde}</span>
                            <div className="text-xs text-slate-500">
                              {item.kazancTl}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            <span className="font-semibold">
                              {item.toplamElDegisim}
                            </span>
                            <div className="text-xs text-slate-500">
                              Gün içi: {item.gunIciLot}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            <span className="font-semibold">
                              {item.tavanTabanLot}
                            </span>
                            <div className="text-xs text-slate-500">
                              {item.tavanTabanOran} · {item.tavanTabanDeger}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Hisse bazlı kapanış yorumu">
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
                            {item.islemGunu} · Güncel fiyat {item.guncelFiyat}
                          </p>
                        </div>
                        <span
                          className={`rounded-full border px-3 py-1 text-sm font-bold ${durumStilleri[item.durum]}`}
                        >
                          {item.durum === "pozitif"
                            ? "Pozitif"
                            : item.durum === "negatif"
                              ? "Negatif"
                              : "Risk Artıyor"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                        {item.yorum}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Gün gün el değiştiren lot oranları">
                <div className="grid gap-4 md:grid-cols-2">
                  {elDegisimOranlari.map((item) => (
                    <div
                      key={item.hisse}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.hisse}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.oranlar.map((oran) => (
                          <span
                            key={oran}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                          >
                            {oran}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Öne çıkan değerlendirme">
                <div className="space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                  <p>
                    <strong>ISVEA</strong> tarafında 3 işlem günü sonunda toplam
                    el değiştiren lot oranının %6,90 gibi düşük seviyede kalması
                    pozitif. Bu yapı, tavan serisinde satış baskısının henüz sınırlı
                    kaldığını gösteriyor.
                  </p>
                  <p>
                    <strong>GOLDA</strong> 5. tavanını yaptı ancak toplam el
                    değiştiren lot oranı %17,24 seviyesine çıktı. Bu bölge artık
                    daha dikkatli izlenmeli; lot toplayan kurumların satışa geçmesi
                    fiyat üzerinde ters etki yaratabilir.
                  </p>
                  <p>
                    <strong>ORZAX</strong> ve <strong>BETAE</strong> tarafında
                    Bank of America alımları dikkat çekti. Buna rağmen iki hissede
                    de toplam el değiştiren lot oranları yükseldiği için sadece
                    tavan kapanışa değil, alıcı kurum devamlılığına da bakmak
                    gerekiyor.
                  </p>
                  <p>
                    <strong>SOHOE</strong> ve <strong>EKIM</strong> tarafında
                    görünüm zayıf. İki halka arz da günü ekside kapatırken, halka
                    arz fiyatına göre negatif getiri bölgesinde kalmayı sürdürdü.
                  </p>
                </div>
              </Section>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm md:p-6">
                <h2 className="text-xl font-bold tracking-tight text-emerald-950">
                  Halka arz tavan serisi tablosu
                </h2>
                <p className="mt-3 text-sm leading-7 text-emerald-900 md:text-base">
                  Son halka arzlarda tavan serisi, halka arz fiyatına göre kazanç,
                  tavan alış lotu ve güncel kapanış verilerini takip etmek için
                  tabloyu inceleyebilirsiniz.
                </p>
                <Link
                  href="/halka-arz/tavan-serisi"
                  className="mt-4 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Halka arz tavan serisi sayfasına git
                </Link>
              </div>

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
                baslik="14 Temmuz Son Halka Arzlarda Gün Sonu: ISVEA, GOLDA, ORZAX ve BETAE Tavan"
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

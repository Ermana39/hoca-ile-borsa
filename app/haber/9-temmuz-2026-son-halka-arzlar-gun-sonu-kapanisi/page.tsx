import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const slug = "9-temmuz-2026-son-halka-arzlar-gun-sonu-kapanisi";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const gorselDosya = "9-temmuz-2026-son-halka-arzlar-gun-sonu-kapanisi.webp";
const haberGorsel = `https://www.hocaileborsa.com/${gorselDosya}`;
const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const title =
  "09.07.2026 Son Halka Arzlarda Gün Sonu: EKIM Taban, GOLDA ve BETAE Tavan";
const description =
  "09 Temmuz 2026 son halka arzlarda gün sonu kapanışı: EKIM ilk gün taban kapattı, GOLDA tavan serisi oluşturdu, ORZAX %1,31 yükseldi, SOHOE halka arz fiyatının altında kaldı, BETAE tavan kapattı.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: haberUrl,
  },
  keywords: [
    "9 Temmuz halka arz gün sonu",
    "son halka arzlar kapanış",
    "EKIM taban kapattı",
    "GOLDA tavan serisi",
    "ORZAX kapanış yorumu",
    "SOHOE halka arz fiyatı altında",
    "BETAE tavan kapattı",
    "halka arz gün sonu kapanış",
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
        alt: "9 Temmuz 2026 son halka arzlar gün sonu kapanışı",
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
  kapanisOzeti: string;
  arzFiyati: string;
  kapanisFiyati: string;
  gunlukDurum: string;
  kazancYuzde: string;
  kazancTl: string;
  gunIciLot: string;
  toplamElDegisim: string;
  emirBasligi: string;
  emirDegeri: string;
  halkaAcikDeger: string;
  yorum: string;
  durum: Durum;
}[] = [
  {
    hisse: "EKIM",
    sirket: "Ekim Turizm",
    kapanisOzeti: "İlk işlem günü",
    arzFiyati: "30,26 TL",
    kapanisFiyati: "27,24 TL",
    gunlukDurum: "Taban kapanış",
    kazancYuzde: "-%9,98",
    kazancTl: "-302,00 TL",
    gunIciLot: "219.866.520 lot",
    toplamElDegisim: "%135,72",
    emirBasligi: "İlk gün fiyat dengesi",
    emirDegeri: "Satıcı baskısı önde",
    halkaAcikDeger: "4.412.880.000 TL",
    yorum:
      "İlk işlem gününü beklenildiği gibi zayıf açılışla geçirdi ve taban fiyatla kapattı. Gün içi el değiştiren lot oranı %135,72 ile yüksek gerçekleşti.",
    durum: "negatif",
  },
  {
    hisse: "GOLDA",
    sirket: "Golda Gıda",
    kapanisOzeti: "2. işlem günü",
    arzFiyati: "9,20 TL",
    kapanisFiyati: "11,13 TL",
    gunlukDurum: "Tavan kapanış",
    kazancYuzde: "%20,98",
    kazancTl: "254,76 TL",
    gunIciLot: "2.622.895 lot",
    toplamElDegisim: "%4,02",
    emirBasligi: "Tavandaki alış lotu",
    emirDegeri: "44.962.168 lot",
    halkaAcikDeger: "973.874.977,74 TL",
    yorum:
      "2. işlem günü sonunda yine tavan fiyatla kapatarak kısa vadeli tavan serisi oluşturdu. Bundan sonra toplam el değiştiren lot oranı ve tavandaki alış lotu birlikte izlenmeli.",
    durum: "pozitif",
  },
  {
    hisse: "ORZAX",
    sirket: "Orzax İlaç",
    kapanisOzeti: "Hareketli kapanış",
    arzFiyati: "69,00 TL",
    kapanisFiyati: "81,05 TL",
    gunlukDurum: "%1,31 yükseliş",
    kazancYuzde: "%17,46",
    kazancTl: "445,85 TL",
    gunIciLot: "55.533.854 lot",
    toplamElDegisim: "%339,72",
    emirBasligi: "Yarın izlenecek denge",
    emirDegeri: "Alıcı-satıcı dengesi",
    halkaAcikDeger: "4.255.125.000 TL",
    yorum:
      "İnfo, Deniz ve A1 Capital alımlarına rağmen çok fazla yukarı gidemedi ve günü %1,31 yükselişle kapattı. Yarın alıcı-satıcı dengesi belirleyici olacak.",
    durum: "izleme",
  },
  {
    hisse: "SOHOE",
    sirket: "Soho Giyim",
    kapanisOzeti: "Halka arz fiyatı altında",
    arzFiyati: "15,00 TL",
    kapanisFiyati: "12,85 TL",
    gunlukDurum: "Zayıf kapanış",
    kazancYuzde: "-%14,33",
    kazancTl: "-215,00 TL",
    gunIciLot: "115.101.409 lot",
    toplamElDegisim: "%733,46",
    emirBasligi: "Tahta dengesi",
    emirDegeri: "Satıcı taraf baskılı",
    halkaAcikDeger: "1.285.000.000 TL",
    yorum:
      "Halka arz fiyatının altında işlem görmeye devam etti. Tahta iştahsız kalırken gün sonunda satıcı taraf alıcı tarafa göre bir miktar daha baskılıydı.",
    durum: "negatif",
  },
  {
    hisse: "BETAE",
    sirket: "Beta Enerji",
    kapanisOzeti: "Tavan serisi",
    arzFiyati: "40,00 TL",
    kapanisFiyati: "77,80 TL",
    gunlukDurum: "Tavan kapanış",
    kazancYuzde: "%94,50",
    kazancTl: "1.058,40 TL",
    gunIciLot: "97.113.254 lot",
    toplamElDegisim: "%224,52",
    emirBasligi: "Tavandaki alış lotu",
    emirDegeri: "4.737.027 lot",
    halkaAcikDeger: "4.726.350.000 TL",
    yorum:
      "Güne tavan fiyatla başlayamasa da öğleden sonra fiyat tavana yerleşti ve günü tavan fiyatla kapattı. Tavan serisi devam ederken gün içi el değiştiren lot oranı da belirgin yükseldi.",
    durum: "pozitif",
  },
];

const ozetKartlari = [
  {
    baslik: "İlk Gün Negatif",
    deger: "EKIM",
    aciklama: "İlk işlem gününde taban fiyatla kapandı.",
  },
  {
    baslik: "Seri Oluşturan",
    deger: "GOLDA",
    aciklama: "2. işlem günü sonunda tavan kapanışını sürdürdü.",
  },
  {
    baslik: "Pozitif Kapanış",
    deger: "ORZAX",
    aciklama: "İnfo, Deniz ve A1 Capital alışlarına rağmen çok fazla yukarı gidemedi.",
  },
  {
    baslik: "Zayıf Tahta",
    deger: "SOHOE",
    aciklama: "Halka arz fiyatının altında kalmaya devam etti.",
  },
  {
    baslik: "Tavan Kapanış",
    deger: "BETAE",
    aciklama: "Gün içinde toparlanarak tavana yerleşti.",
  },
];

const elDegisimOranlari = [
  {
    hisse: "BETAE",
    oranlar: ["1. gün %0,12", "2. gün %0,28", "3. gün %1,50", "4. gün %3,44", "5. gün %6,63", "6. gün %52,69", "Son gün %159,86"],
  },
  {
    hisse: "SOHOE",
    oranlar: ["1. gün %196,37", "2. gün %252,34", "3. gün %169,65", "Son gün %115,10"],
  },
  {
    hisse: "ORZAX",
    oranlar: ["1. gün %53,10", "2. gün %180,84", "Son gün %105,78"],
  },
  {
    hisse: "GOLDA",
    oranlar: ["1. gün %1,02", "2. gün %3,00"],
  },
  {
    hisse: "EKIM",
    oranlar: ["1. gün %135,72"],
  },
];

const takipBasliklari = [
  {
    hisse: "EKIM",
    metin:
      "İlk işlem gününde taban kapanış geldiği için yeni seansta taban bölgesindeki satış iştahı ve 30,26 TL halka arz fiyatına uzaklık izlenmeli.",
  },
  {
    hisse: "GOLDA",
    metin:
      "Tavan serisi oluştu. 44,96 milyon lotluk tavan alışına rağmen toplam el değiştiren lot oranının hangi hızla artacağı takip edilmeli.",
  },
  {
    hisse: "ORZAX",
    metin:
      "İnfo, Deniz ve A1 Capital alışlarına rağmen hareket çok fazla yukarı taşınamadı. Yarın alıcı-satıcı dengesi yön açısından kritik olacak.",
  },
  {
    hisse: "SOHOE",
    metin:
      "12,85 TL kapanış halka arz fiyatının altında. Satıcı baskısının sürüp sürmeyeceği ve 15,00 TL seviyesine dönüş çabası izlenmeli.",
  },
  {
    hisse: "BETAE",
    metin:
      "Gün içinde tavana yerleşmesi pozitif. Buna karşılık artan el değiştiren lot oranı nedeniyle tavan alış miktarının korunup korunmadığı izlenmeli.",
  },
];

const sorular = [
  {
    soru: "09 Temmuz 2026 halka arzlarda gün sonu kapanışı nasıl oldu?",
    cevap:
      "EKIM ilk işlem gününde taban kapattı. GOLDA ve BETAE tavan kapanış yaptı. ORZAX günü %1,31 yükselişle tamamlarken SOHOE halka arz fiyatının altında kalmaya devam etti.",
  },
  {
    soru: "GOLDA tavan serisi oluşturdu mu?",
    cevap:
      "Evet. GOLDA 2. işlem günü sonunda da tavan fiyatla kapatarak kısa vadeli tavan serisi oluşturdu. Gün sonunda tavandaki alış lotu 44.962.168 lot olarak izlendi.",
  },
  {
    soru: "EKIM ilk işlem gününde ne oldu?",
    cevap:
      "EKIM ilk işlem gününü 30,26 TL halka arz fiyatına karşılık 27,24 TL taban fiyatla kapattı. Halka arz fiyatına göre kayıp -%9,98 oldu.",
  },
  {
    soru: "ORZAX günü nasıl kapattı?",
    cevap:
      "ORZAX tarafında İnfo, Deniz ve A1 Capital alışları öne çıktı. Buna rağmen hisse çok fazla yukarı gidemedi ve günü 81,05 TL, %1,31 yükselişle tamamladı.",
  },
  {
    soru: "SOHOE halka arz fiyatının altında mı?",
    cevap:
      "Evet. SOHOE 15,00 TL halka arz fiyatına karşılık günü 12,85 TL seviyesinde kapattı ve halka arz fiyatının altında işlem görmeye devam etti.",
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

export default function DokuzTemmuzHalkaArzGunSonuPage() {
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
              alt="9 Temmuz 2026 son halka arzlar gün sonu kapanışı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              09.07.2026 Son Halka Arzlarda Gün Sonu: EKIM Taban, GOLDA ve BETAE Tavan
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
                09 Temmuz 2026 kapanışında son halka arzlar arasında net bir
                ayrışma oluştu. <strong>Ekim Turizm</strong> ilk işlem gününü
                taban fiyatla kapatırken, <strong>Golda Gıda</strong> ikinci
                işlem günü sonunda da tavan fiyatla kapandı. <strong>Orzax
                İlaç</strong> %1,31 yükselişle günü tamamladı,{" "}
                <strong>SOHOE</strong> halka arz fiyatının altında kalmayı
                sürdürdü. <strong>Beta Enerji</strong> ise gün içinde tavana
                yerleşerek kapanışı tavan fiyatla yaptı.
              </p>

              <p>
                Gün sonu verilerinde sadece kapanış fiyatı değil; gün içi el
                değiştiren lot sayısı, toplam el değiştiren lot oranı, tavandaki
                alış miktarı ve halka arz fiyatına göre oluşan kazanç birlikte
                okunmalı. Bugünkü tabloda GOLDA ve BETAE pozitif tarafta
                kalırken, EKIM ve SOHOE negatif ayrıştı. ORZAX ise İnfo, Deniz
                ve A1 Capital alışlarına rağmen çok fazla yukarı gidemedi.
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

              <Section title="09 Temmuz gün sonu kapanış tablosu">
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
                              {item.sirket} · {item.kapanisOzeti}
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
                            {item.kapanisOzeti} · {item.gunlukDurum}
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

              <Section title="EKIM ilk işlem gününde neden zayıf kaldı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  EKIM, 30,26 TL halka arz fiyatına karşılık ilk işlem gününü
                  27,24 TL taban fiyatla kapattı. Halka arz fiyatına göre
                  -%9,98 kapanış, ilk gün için zayıf fiyatlama anlamına geliyor.
                  Gün içi el değiştiren lot sayısının 219.866.520 lot olması da
                  tahtada yüksek devir yaşandığını gösterdi.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu noktada EKIM için temel takip başlığı, taban bölgesindeki
                  satış baskısının sonraki seansta devam edip etmeyeceği ve
                  hissenin 30,26 TL halka arz fiyatına yaklaşma isteği gösterip
                  göstermeyeceği olacak.
                </p>
              </Section>

              <Section title="GOLDA tavan serisi oluşturdu mu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  GOLDA 9,20 TL halka arz fiyatından sonra 11,13 TL kapanışa
                  ulaştı. 2. işlem gününün de tavan fiyatla tamamlanması, hissede
                  kısa vadeli tavan serisi oluştuğunu gösteriyor. Halka arz
                  fiyatına göre kazanç %20,98 seviyesine çıktı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Gün sonunda tavandaki alış lotu 44.962.168 lot oldu. Buna
                  karşılık toplam el değiştiren lot oranı %4,02 seviyesinde.
                  Bundan sonraki seansta tavan alış miktarı kadar bu oranın artış
                  hızı da izlenmeli.
                </p>
              </Section>

              <Section title="ORZAX günü nasıl kapattı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ORZAX 81,05 TL kapanışla günü %1,31 yükselişle tamamladı.
                  Halka arz fiyatı 69,00 TL olduğu için halka arz fiyatına göre
                  kazanç %17,46 seviyesinde bulunuyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  İnfo, Deniz ve A1 Capital alışları öne çıksa da hisse çok fazla
                  yukarı gidemedi. ORZAX için yarınki ana başlık, alıcıların
                  devam edip etmeyeceği ve satıcı tarafın fiyat hareketini nasıl
                  karşılayacağı olacak.
                </p>
              </Section>

              <Section title="SOHOE halka arz fiyatının altında kalıyor">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  SOHOE 15,00 TL halka arz fiyatına karşılık 12,85 TL seviyesinde
                  kapandı. Bu fiyat, halka arz fiyatına göre -%14,33 kayba işaret
                  ediyor. Hisse halka arz fiyatının altında işlem görmeye devam
                  ettiği için zayıf tarafta kalıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Gün sonu görüntüsünde tahta iştahsız kaldı. Alıcı taraf
                  toparlanma üretmekte zorlanırken satıcılar bir miktar daha
                  baskılı tarafta kaldı. SOHOE için 15,00 TL halka arz fiyatı
                  tekrar kazanılmadıkça negatif algının zayıflaması zor görünüyor.
                </p>
              </Section>

              <Section title="BETAE gün içinde tavana yerleşti">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  BETAE 40,00 TL halka arz fiyatına karşılık günü 77,80 TL tavan
                  fiyatla kapattı. Halka arz fiyatına göre kazanç %94,50
                  seviyesine ulaştı. Gün tavan fiyatla başlamasa da öğleden sonra
                  fiyat tavana yerleşti.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Gün sonunda tavandaki alış lotu 4.737.027 lot olarak izlendi.
                  Buna karşılık gün içi el değiştiren lot sayısı 97.113.254 lot
                  seviyesine çıktı. Bu nedenle BETAE için tavan serisi devam etse
                  de lot değişim hızının ayrıca takip edilmesi gerekiyor.
                </p>
              </Section>

              <Section title="El değiştiren lot oranları">
                <div className="grid gap-4 md:grid-cols-2">
                  {elDegisimOranlari.map((item) => (
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

              <Section title="Yarın hangi başlıklar izlenmeli?">
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
                  09 Temmuz kapanışında GOLDA ve BETAE tavan fiyatla pozitif
                  tarafta kaldı. EKIM ilk işlem gününü taban fiyatla kapatarak
                  zayıf başladı. SOHOE halka arz fiyatının altında kalmaya devam
                  ederken, ORZAX İnfo, Deniz ve A1 Capital alışlarına rağmen çok
                  fazla yukarı gidemedi ve günü %1,31 yükselişle tamamladı.
                  Sonraki seansta GOLDA ve BETAE için tavan alış lotu,
                  EKIM ve SOHOE için satış baskısı, ORZAX için ise alıcı-satıcı
                  dengesi ana takip başlıkları olacak.
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
                baslik="09.07.2026 Son Halka Arzlarda Gün Sonu: EKIM Taban, GOLDA ve BETAE Tavan"
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

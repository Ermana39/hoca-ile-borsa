import type { Metadata } from "next";
import { getHalkaArzLotAraciVerisi } from "@/lib/halka-arz-lot-verisi";
import TalepHesaplaClient from "./TalepHesaplaClient";

export const metadata: Metadata = {
  title: "Halka Arz Lot Hesaplama | Düşük, Normal ve Yüksek Senaryo",
  description:
    "2026 halka arz sonuçlarına göre düşük, normal ve yüksek katılım senaryolarını; tahmini lotu, gerekli parayı ve gerçekleşen dağıtım karşılaştırmasını hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/halka-arz/talep-hesapla" },
  keywords: [
    "halka arz lot hesaplama",
    "halka arz kaç lot verir",
    "halka arz talep hesaplama",
    "düşecek lot hesaplama",
    "halka arz katılımcı sayısı",
  ],
};

export default function Page() {
  const { secenekler, gecmis } = getHalkaArzLotAraciVerisi();
  const yapilandirilmisVeri = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Halka Arz Lot Senaryo Hesaplayıcı",
      url: "https://www.hocaileborsa.com/halka-arz/talep-hesapla",
      description:
        "Geçmiş halka arz katılım verileriyle düşük, normal ve yüksek katılım senaryolarında tahmini lot ve gerekli para hesaplama aracı.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TRY",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Halka arzda tahmini lot nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bireysel yatırımcıya ayrılan lot havuzu, tahmini katılımcı sayısına bölünür. Sonuç eşit dağıtım varsayımıyla aşağı yuvarlanır.",
          },
        },
        {
          "@type": "Question",
          name: "Düşük, normal ve yüksek katılım neye göre belirlenir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Benzer dağıtım türündeki 2026 halka arzlarının alt çeyrek, medyan ve üst çeyrek katılımcı değerleri kullanılır.",
          },
        },
        {
          "@type": "Question",
          name: "Halka arz talebi için gerekli para nasıl bulunur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Senaryoda hesaplanan tahmini lot, halka arz fiyatıyla çarpılarak gerekli yaklaşık talep tutarı bulunur.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(yapilandirilmisVeri).replace(/</g, "\\u003c"),
        }}
      />
      <TalepHesaplaClient secenekler={secenekler} gecmis={gecmis} />
    </>
  );
}

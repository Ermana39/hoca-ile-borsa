import type { Metadata } from "next";
import TahvilHesaplayici from "./TahvilHesaplayici";

const canonical = "https://www.hocaileborsa.com/hesaplayici/tahvil";
const title = "Tahvil Faizi Hesaplama | Devlet Tahvili Getiri ve YTM";
const description =
  "Tahvil faizi, kupon geliri, stopaj, alış fiyatı, basit getiri ve vadeye kadar getiri (YTM) hesaplama aracı ve ayrıntılı tahvil rehberi.";

const faqItems = [
  {
    question: "Tahvil faizi nasıl hesaplanır?",
    answer:
      "Tahvil faizi nominal değer ile yıllık kupon oranının çarpılmasıyla brüt kupon gelirini verir. Net gelir için stopaj düşülür, toplam getiri için alış fiyatı ve vade sonunda oluşacak ana para farkı da dikkate alınır.",
  },
  {
    question: "Basit getiri ile vadeye kadar getiri arasındaki fark nedir?",
    answer:
      "Basit getiri toplam kazancı alış fiyatına böler. Vadeye kadar getiri ise kupon ödemelerinin zamanını ve vade sonu anapara ödemesini bugünkü fiyata göre yıllıklaştırarak daha ayrıntılı bir oran üretir.",
  },
  {
    question: "Tahvil fiyatı nominal değerin altında olursa ne olur?",
    answer:
      "Tahvil nominal değerin altında alınırsa yatırımcı kupon gelirine ek olarak vade sonunda alış fiyatı ile nominal değer arasındaki farktan da kazanç sağlayabilir.",
  },
  {
    question: "Tahvil getirisi mevduat faiziyle aynı şekilde mi okunur?",
    answer:
      "Hayır. Mevduatta vade ve faiz çoğunlukla daha düz okunurken tahvilde piyasa fiyatı, kupon oranı, kalan vade, stopaj, likidite ve faiz değişim riski getiri hesabını etkiler.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: title,
        url: canonical,
        description,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "TRY",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://www.hocaileborsa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hesaplayıcılar",
            item: "https://www.hocaileborsa.com/hesaplayici",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Tahvil Faizi Hesaplama",
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TahvilHesaplayici />
    </>
  );
}

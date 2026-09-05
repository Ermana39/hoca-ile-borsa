import { serializeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import KidemTazminatiHesaplayici from "./KidemTazminatiHesaplayici";

const canonical = "https://www.hocaileborsa.com/hesaplayici/kidem-tazminati";
const title = "Kıdem Tazminatı Hesaplama | Tavan, Damga Vergisi ve Net Tutar";
const description =
  "Brüt maaş, çalışma süresi, kıdem tazminatı tavanı ve damga vergisine göre net kıdem tazminatı hesaplama aracı ve ayrıntılı rehber.";

const faqItems = [
  {
    question: "Kıdem tazminatı nasıl hesaplanır?",
    answer:
      "Genel hesaplama her tam çalışma yılı için 30 günlük brüt ücret esas alınarak yapılır. Brüt ücret kıdem tazminatı tavanını aşıyorsa hesaplamada tavan dikkate alınır ve brüt tutardan damga vergisi düşülerek net tutar bulunur.",
  },
  {
    question: "Kıdem tazminatı tavanı neden önemlidir?",
    answer:
      "Tavan, bir yıl için hesaplamaya alınabilecek en yüksek brüt ücret sınırıdır. Çalışanın brüt maaşı tavanın üzerindeyse kıdem tazminatı gerçek brüt maaş üzerinden değil tavan tutarı üzerinden hesaplanır.",
  },
  {
    question: "Kıdem tazminatından hangi vergi kesilir?",
    answer:
      "Kıdem tazminatında genel olarak gelir vergisi değil damga vergisi kesintisi dikkate alınır. Özel durumlar ve güncel oranlar için bordro, mali müşavir veya hukuk uzmanı kontrolü yapılmalıdır.",
  },
  {
    question: "Bir yıldan az çalışan kıdem tazminatı alabilir mi?",
    answer:
      "Kıdem tazminatında temel koşullardan biri aynı işverene bağlı en az bir yıllık çalışmadır. Bir yıldan az çalışma için normal şartlarda kıdem tazminatı hakkı doğmaz.",
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
            name: "Kıdem Tazminatı Hesaplama",
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <KidemTazminatiHesaplayici />
    </>
  );
}

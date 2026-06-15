import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/halka-arz/taslak-izahnameler",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.hocaileborsa.com" },
    { "@type": "ListItem", position: 2, name: "Halka Arz", item: "https://www.hocaileborsa.com/halka-arz" },
    { "@type": "ListItem", position: 3, name: "Taslak İzahnameler", item: "https://www.hocaileborsa.com/halka-arz/taslak-izahnameler" },
  ],
};

export default function TaslakIzahnamelerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}

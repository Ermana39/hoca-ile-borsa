import RehberMakale from "../_components/RehberMakale";
import { bistIslemKoduGuide as guide } from "../_data/halkaArzRehberleri";
import type { Metadata } from "next";

const siteUrl = "https://www.hocaileborsa.com";

export const metadata: Metadata = {
  title: `${guide.title} | Hoca İle Borsa`,
  description: guide.description,
  alternates: {
    canonical: `${siteUrl}${guide.href}`,
  },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: `${siteUrl}${guide.href}`,
    type: "article",
  },
};

export default function BistIslemKoduNedirPage() {
  return <RehberMakale guide={guide} />;
}

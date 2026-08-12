import { seoAciklamasi } from "@/lib/seo-metadata";
import KarZararHesaplayici from "./KarZararHesaplayici";

export const metadata = {
  title: "Hisse Kâr / Zarar Hesaplama",
  description:
    seoAciklamasi("Alış-satış fiyatı, lot adedi, komisyon ve stopaj oranlarına göre BIST hisse işlemlerinde brüt/net kâr-zarar ve getiri oranınızı hesaplayın.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/kar-zarar-hesaplama" },
};

export default function Page() {
  return <KarZararHesaplayici />;
}

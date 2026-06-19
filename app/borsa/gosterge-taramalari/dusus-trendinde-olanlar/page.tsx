import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";
import { TARAMA_SEO } from "@/lib/gosterge-tarama-seo";

export const revalidate = false;

export const metadata = {
  title: "Düşüş Trendinde Olan Hisseler | Hoca İle Borsa",
  description:
    "Hareketli ortalamaların altında işlem gören düşüş trendindeki Borsa İstanbul hisselerini ve dikkat edilmesi gerekenleri inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/dusus-trendinde-olanlar",
  },
};

export default function DususTrendindeOlanlarPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("düsüs-trendi.json");
  return (
    <GostergeTaramaSayfasi
      title="Düşüş Trendinde Olan Hisseler"
      description="5, 13, 21, 55, 89, 144, 233 hareketli ortalama altında olanlar"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
      seo={TARAMA_SEO["dusus-trendinde-olanlar"]}
    />
  );
}

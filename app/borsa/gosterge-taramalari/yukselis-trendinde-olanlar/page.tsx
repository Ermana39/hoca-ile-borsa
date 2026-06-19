import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";
import { TARAMA_SEO } from "@/lib/gosterge-tarama-seo";

export const revalidate = false;

export const metadata = {
  title: "Yükseliş Trendinde Olan Hisseler | Hoca İle Borsa",
  description:
    "Hareketli ortalamaların üzerinde işlem gören yükseliş trendindeki Borsa İstanbul hisselerini ve tarama mantığını inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/yukselis-trendinde-olanlar",
  },
};

export default function YukselisTrendindeOlanlarPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("Yükselis-trendi.json");
  return (
    <GostergeTaramaSayfasi
      title="Yükseliş Trendinde Olan Hisseler"
      description="5, 13, 21, 55, 89, 144, 233 hareketli ortalama üzerinde olanlar"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
      seo={TARAMA_SEO["yukselis-trendinde-olanlar"]}
    />
  );
}

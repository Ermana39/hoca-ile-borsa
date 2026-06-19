import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";
import { TARAMA_SEO } from "@/lib/gosterge-tarama-seo";

export const revalidate = false;

export const metadata = {
  title: "MACD Sat Veren Hisseler | Hoca İle Borsa",
  description:
    "MACD göstergesine göre sat sinyali üreten Borsa İstanbul hisselerini ve tarama sonuçlarının nasıl kullanılabileceğini inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/macd-sat",
  },
};

export default function MacdSatPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("macd-sat.json");
  return (
    <GostergeTaramaSayfasi
      title="MACD Sat Verenler"
      description="MACD göstergesine göre sat sinyali üreten hisseler"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
      seo={TARAMA_SEO["macd-sat"]}
    />
  );
}

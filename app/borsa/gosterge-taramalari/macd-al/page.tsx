import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";
import { TARAMA_SEO } from "@/lib/gosterge-tarama-seo";

export const revalidate = false;

export const metadata = {
  title: "MACD Al Veren Hisseler | Hoca İle Borsa",
  description:
    "MACD göstergesine göre al sinyali üreten Borsa İstanbul hisselerini ve taramanın nasıl yorumlanabileceğini inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/macd-al",
  },
};

export default function MacdAlPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("macd-al.json");
  return (
    <GostergeTaramaSayfasi
      title="MACD Al Verenler"
      description="MACD göstergesine göre al sinyali üreten hisseler"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
      seo={TARAMA_SEO["macd-al"]}
    />
  );
}

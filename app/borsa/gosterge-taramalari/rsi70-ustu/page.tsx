import { seoAciklamasi } from "@/lib/seo-metadata";
import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";

export const revalidate = false;

export const metadata = {
  title: "RSI 70 Üstündeki BIST Hisseleri",
  description:
    seoAciklamasi("RSI değeri 70 seviyesinin üzerinde olan Borsa İstanbul hisselerini inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/rsi70-ustu",
  },
};

export default function Rsi70UstuPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("rsi70-ustu.json");
  return (
    <GostergeTaramaSayfasi
      title="RSI 70 Üstü Hisseler"
      description="RSI değeri 70 seviyesinin üzerinde olan hisseler"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
    />
  );
}

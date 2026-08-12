import { seoAciklamasi } from "@/lib/seo-metadata";
import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";

export const revalidate = false;

export const metadata = {
  title: "RSI 40 Altındaki BIST Hisseleri",
  description:
    seoAciklamasi("RSI değeri 40 seviyesinin altında olan Borsa İstanbul hisselerini inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/rsi40-alti",
  },
};

export default function Rsi40AltiPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("rsi40-alti.json");
  return (
    <GostergeTaramaSayfasi
      title="RSI 40 Altı Hisseler"
      description="RSI değeri 40 seviyesinin altında olan hisseler"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
    />
  );
}

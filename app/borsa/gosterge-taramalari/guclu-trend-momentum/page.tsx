import { seoAciklamasi } from "@/lib/seo-metadata";
import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";

export const revalidate = false;

export const metadata = {
  title: "Güçlü Trend ve Momentum Gösteren Hisseler",
  description:
    seoAciklamasi("Hareketli ortalama dizilimi, StochRSI ve MACD göstergelerine göre güçlü yükseliş trendi ve pozitif momentum gösteren Borsa İstanbul hisselerini inceleyin.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/guclu-trend-momentum",
  },
};

export default function GucluTrendMomentumPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("guclu-trend-momentum.json");
  return (
    <GostergeTaramaSayfasi
      title="Güçlü Trend ve Momentum Taraması"
      description="Hareketli ortalama dizilimi, StochRSI ve MACD göstergelerine göre güçlü yükseliş trendi ve pozitif momentum gösteren hisseler"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
    />
  );
}

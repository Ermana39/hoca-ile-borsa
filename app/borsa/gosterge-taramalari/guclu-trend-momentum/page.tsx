import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";

export const revalidate = false;

export const metadata = {
  title: "Güçlü Trend ve Momentum Taraması | Hoca İle Borsa",
  description:
    "Hareketli ortalama dizilimi, StochRSI ve MACD göstergelerine göre güçlü yükseliş trendi ve pozitif momentum gösteren Borsa İstanbul hisselerini inceleyin.",
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

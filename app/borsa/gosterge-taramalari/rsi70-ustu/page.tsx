import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";

export const revalidate = false;

export const metadata = {
  title: "RSI 70 Üstü Hisseler | Hoca İle Borsa",
  description:
    "RSI değeri 70 seviyesinin üzerinde olan Borsa İstanbul hisselerini inceleyin.",
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

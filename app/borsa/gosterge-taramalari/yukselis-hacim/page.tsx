import GostergeTaramaSayfasi from "@/components/GostergeTaramaSayfasi";
import { okuTarama } from "@/lib/gosterge-taramalari";

export const revalidate = false;

export const metadata = {
  title: "Yükseliş Trendi + Hacim Artışı | Hoca İle Borsa",
  description:
    "Yükseliş Trendi + Hacim Artışına göre al sinyali üreten Borsa İstanbul hisselerini inceleyin. Fiyat 233,144,89,55,21,13 ve 5 üstsel MOV hareketli ortalaması üzeri, hacim son 3 günlük ortalaması son 21 günlük ortalamasının üzerinde",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/gosterge-taramalari/yukselis-hacim",
  },
};

export default function YukselisHacimPage() {
  const { hisseler, guncellemeTarihi } = okuTarama("yukselis-hacim.json");
  return (
    <GostergeTaramaSayfasi
      title="Yükseliş Trendi + Hacim Artışı"
      description="Hareketli ortalama dizilimi, son 3 günlük hacim ortalaması son 21 günlük hacim ortalamasının üzerinde olan hisseler"
      hisseler={hisseler}
      guncellemeTarihi={guncellemeTarihi}
    />
  );
}

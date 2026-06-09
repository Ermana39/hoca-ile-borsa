import type { Metadata } from "next";
import KazancHesaplaClient from "./KazancHesaplaClient";

export const metadata: Metadata = {
  title: "Halka Arz Kazanç Hesaplama | Tavan Serisi Kâr Hesaplayıcı",
  description:
    "Halka arz fiyatı ve lot sayısına göre tavan serisi sonrası tahmini kârınızı, toplam değerinizi ve yüzde getirinizi hesaplayın. BIST halka arz kazanç hesaplama aracı.",
  alternates: { canonical: "https://www.hocaileborsa.com/halka-arz/kazanc-hesapla" },
  keywords: ["halka arz kazanç hesaplama", "tavan serisi hesaplama", "halka arz kâr hesaplama", "BIST halka arz"],
};

export default function Page() {
  return <KazancHesaplaClient />;
}

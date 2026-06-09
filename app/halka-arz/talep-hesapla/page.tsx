import type { Metadata } from "next";
import TalepHesaplaClient from "./TalepHesaplaClient";

export const metadata: Metadata = {
  title: "Halka Arz Talep Hesaplama | Düşecek Lot Hesaplayıcı",
  description:
    "Halka arz toplam lot sayısı, bireysele ayrılan oran ve katılımcı sayısına göre yatırımcı başına düşebilecek tahmini lot miktarını hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/halka-arz/talep-hesapla" },
  keywords: ["halka arz talep hesaplama", "halka arz lot hesaplama", "düşecek lot hesaplama", "halka arz dağıtım hesabı"],
};

export default function Page() {
  return <TalepHesaplaClient />;
}

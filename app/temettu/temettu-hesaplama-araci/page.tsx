import type { Metadata } from "next";
import TemettuHesaplamaClient from "./TemettuHesaplamaClient";

export const metadata: Metadata = {
  title: "Temettü Hesaplama Aracı | Net Temettü Geliri Hesapla",
  description:
    "Lot adedi ve lot başına brüt temettü tutarına göre stopaj kesintisi sonrası net temettü gelirinizi hesaplayın. Bireysel yatırımcılar için ücretsiz temettü hesaplama aracı.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu/temettu-hesaplama-araci" },
  keywords: ["temettü hesaplama", "net temettü hesaplama", "stopaj hesaplama", "temettü geliri hesaplama", "lot başına temettü"],
};

export default function Page() {
  return <TemettuHesaplamaClient />;
}

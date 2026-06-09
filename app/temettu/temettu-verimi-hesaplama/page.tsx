import type { Metadata } from "next";
import TemettuVerimiClient from "./TemettuVerimiClient";

export const metadata: Metadata = {
  title: "Temettü Verimi Hesaplama | Brüt ve Net Temettü Getirisi",
  description:
    "Hisse fiyatı ve lot başına brüt temettü tutarına göre brüt ve net temettü veriminizi hesaplayın. Stopaj sonrası gerçek temettü getirisi hesaplama aracı.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu/temettu-verimi-hesaplama" },
  keywords: ["temettü verimi hesaplama", "brüt temettü verimi", "net temettü verimi", "temettü getirisi", "hisse temettü hesaplama"],
};

export default function Page() {
  return <TemettuVerimiClient />;
}

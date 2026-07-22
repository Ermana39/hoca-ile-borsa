import type { Metadata } from "next";
import KazancHesaplaClient from "./KazancHesaplaClient";

const canonical = "https://www.hocaileborsa.com/halka-arz/kazanc-hesapla";
const title = "Halka Arz Tavan Hesaplama: Lot ve Kazanç Hesaplayıcı";
const description =
  "Halka arz fiyatı, lot sayısı ve tavan adedini girin; teorik tavan fiyatını, toplam portföy değerini, kârı ve yüzde getiriyi anında hesaplayın.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  keywords: [
    "halka arz tavan hesaplama",
    "tavan fiyat hesaplama",
    "halka arz kazanç hesaplama",
    "tavan serisi hesaplama",
    "lot kazanç hesaplama",
  ],
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  return <KazancHesaplaClient />;
}

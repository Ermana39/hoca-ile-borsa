import DovizGetiriHesaplayici from "./DovizGetiriHesaplayici";

export const metadata = {
  title: "Döviz Bazlı Getiri Hesaplama",
  description:
    "TL yatırımınızın başlangıç ve bitiş kurları arasındaki değer değişimine göre döviz bazında getirisini ve enflasyona göre reel karşılaştırmasını hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/doviz-getiri" },
};

export default function Page() {
  return <DovizGetiriHesaplayici />;
}

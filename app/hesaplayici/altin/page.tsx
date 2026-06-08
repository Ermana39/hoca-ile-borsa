import AltinHesaplayici from "./AltinHesaplayici";

export const metadata = {
  title: "Altın Hesaplama Aracı",
  description:
    "Gram, çeyrek (1,75 gr), yarım (3,5 gr) veya tam (7 gr) altının güncel gram fiyatına göre toplam değerini ve alım/satım spread'ini hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/altin" },
};

export default function Page() {
  return <AltinHesaplayici />;
}

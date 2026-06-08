import SermayeArtirimiHesaplayici from "./SermayeArtirimiHesaplayici";

export const metadata = {
  title: "Sermaye Artırımı Hesaplama",
  description:
    "Bedelli ve bedelsiz sermaye artırımı sonrası kullanım hakkınızı, yeni lot adedinizi, bedelli maliyetinizi ve yeni ortalama maliyetinizi hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/sermaye-artirimi" },
};

export default function Page() {
  return <SermayeArtirimiHesaplayici />;
}

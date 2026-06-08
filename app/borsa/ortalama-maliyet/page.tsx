import OrtalamaMaliyetHesaplayici from "./OrtalamaMaliyetHesaplayici";

export const metadata = {
  title: "Ortalama Maliyet Hesaplama",
  description:
    "Farklı fiyatlardan yaptığınız hisse alımlarını girerek toplam lot, toplam maliyet ve ağırlıklı ortalama maliyetinizi hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/ortalama-maliyet" },
};

export default function Page() {
  return <OrtalamaMaliyetHesaplayici />;
}

import { seoAciklamasi } from "@/lib/seo-metadata";
import OrtalamaMaliyetHesaplayici from "./OrtalamaMaliyetHesaplayici";

export const metadata = {
  title: "Ortalama Maliyet Hesaplama",
  description:
    seoAciklamasi("Farklı fiyatlardan yaptığınız hisse alımlarını girerek toplam lot, toplam maliyet ve ağırlıklı ortalama maliyetinizi hesaplayın.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/ortalama-maliyet" },
};

export default function Page() {
  return <OrtalamaMaliyetHesaplayici />;
}

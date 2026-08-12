import { seoAciklamasi } from "@/lib/seo-metadata";
import SermayeArtirimiHesaplayici from "./SermayeArtirimiHesaplayici";

export const metadata = {
  title: "Sermaye Artırımı Hesaplama",
  description:
    seoAciklamasi("Bedelli ve bedelsiz sermaye artırımı sonrası kullanım hakkınızı, yeni lot adedinizi, bedelli maliyetinizi ve yeni ortalama maliyetinizi hesaplayın.", "Güncel tablolar, karşılaştırmalar ve yatırımcıların takip edebileceği temel göstergeler birlikte sunulur."),
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/sermaye-artirimi" },
};

export default function Page() {
  return <SermayeArtirimiHesaplayici />;
}

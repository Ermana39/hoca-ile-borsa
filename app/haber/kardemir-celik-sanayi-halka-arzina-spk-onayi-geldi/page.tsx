import kardemirJson from "@/data/halka-arz/kardemir-celik-sanayi.json";
import HalkaArzOnayHaberi, {
  halkaArzHaberMetadata,
  type HalkaArzHaberAyarlari,
} from "@/components/HalkaArzOnayHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = kardemirJson as HalkaArzVeri;
const ayarlar: HalkaArzHaberAyarlari = {
  haberSlug: "kardemir-celik-sanayi-halka-arzina-spk-onayi-geldi",
  kisaAd: "Kardemir Çelik Sanayi",
  imageFile: "kardemir-celik-sanayi-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-17T09:10:00+03:00",
  publishedLabel: "17 Temmuz 2026",
};

export const metadata = halkaArzHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzOnayHaberi veri={veri} ayarlar={ayarlar} />;
}

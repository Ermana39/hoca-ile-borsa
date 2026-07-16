import masfenJson from "@/data/halka-arz/masfen-enerji.json";
import HalkaArzOnayHaberi, {
  halkaArzHaberMetadata,
  type HalkaArzHaberAyarlari,
} from "@/components/HalkaArzOnayHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = masfenJson as HalkaArzVeri;
const ayarlar: HalkaArzHaberAyarlari = {
  haberSlug: "masfen-enerji-halka-arzina-spk-onayi-geldi",
  kisaAd: "Masfen Enerji",
  imageFile: "masfen-enerji-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-17T09:05:00+03:00",
  publishedLabel: "17 Temmuz 2026",
};

export const metadata = halkaArzHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzOnayHaberi veri={veri} ayarlar={ayarlar} />;
}

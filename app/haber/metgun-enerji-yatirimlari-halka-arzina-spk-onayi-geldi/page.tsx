import metgunJson from "@/data/halka-arz/metgun-enerji-yatirimlari.json";
import HalkaArzOnayHaberi, {
  halkaArzHaberMetadata,
  type HalkaArzHaberAyarlari,
} from "@/components/HalkaArzOnayHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = metgunJson as HalkaArzVeri;
const ayarlar: HalkaArzHaberAyarlari = {
  haberSlug: "metgun-enerji-yatirimlari-halka-arzina-spk-onayi-geldi",
  kisaAd: "Metgün Enerji Yatırımları",
  imageFile: "metgun-enerji-yatirimlari-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-17T09:00:00+03:00",
  publishedLabel: "17 Temmuz 2026",
};

export const metadata = halkaArzHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzOnayHaberi veri={veri} ayarlar={ayarlar} />;
}

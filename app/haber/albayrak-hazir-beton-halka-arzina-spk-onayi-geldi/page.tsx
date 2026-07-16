import albayrakJson from "@/data/halka-arz/albayrak-hazir-beton-san-ve-tic.json";
import HalkaArzOnayHaberi, {
  halkaArzHaberMetadata,
  type HalkaArzHaberAyarlari,
} from "@/components/HalkaArzOnayHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = albayrakJson as HalkaArzVeri;
const ayarlar: HalkaArzHaberAyarlari = {
  haberSlug: "albayrak-hazir-beton-halka-arzina-spk-onayi-geldi",
  kisaAd: "Albayrak Hazır Beton",
  imageFile: "albayrak-hazir-beton-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-17T09:15:00+03:00",
  publishedLabel: "17 Temmuz 2026",
};

export const metadata = halkaArzHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzOnayHaberi veri={veri} ayarlar={ayarlar} />;
}

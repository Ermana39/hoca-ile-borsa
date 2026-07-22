import goldaJson from "@/data/halka-arz/golda-gida-san-ve-tic.json";
import HalkaArzOnayHaberi, {
  halkaArzHaberMetadata,
  type HalkaArzHaberAyarlari,
} from "@/components/HalkaArzOnayHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = goldaJson as HalkaArzVeri;
const ayarlar: HalkaArzHaberAyarlari = {
  haberSlug: "golda-gida-halka-arzina-spk-onayi-geldi",
  kisaAd: "Golda Gıda",
  imageFile: "golda-gida-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-06-25T09:00:00+03:00",
  publishedLabel: "25 Haziran 2026",
};

export const metadata = halkaArzHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzOnayHaberi veri={veri} ayarlar={ayarlar} />;
}

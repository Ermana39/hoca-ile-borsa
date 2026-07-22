import ekimJson from "@/data/halka-arz/ekim-turizm-tic-ve-san.json";
import HalkaArzOnayHaberi, {
  halkaArzHaberMetadata,
  type HalkaArzHaberAyarlari,
} from "@/components/HalkaArzOnayHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = ekimJson as HalkaArzVeri;
const ayarlar: HalkaArzHaberAyarlari = {
  haberSlug: "ekim-turizm-halka-arzina-spk-onayi-geldi",
  kisaAd: "Ekim Turizm",
  imageFile: "ekim-turizm-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-06-25T09:00:00+03:00",
  publishedLabel: "25 Haziran 2026",
};

export const metadata = halkaArzHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzOnayHaberi veri={veri} ayarlar={ayarlar} />;
}

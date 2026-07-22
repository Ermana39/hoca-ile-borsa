import orzaksJson from "@/data/halka-arz/orzaks-ilac-ve-kimya-san-tic.json";
import HalkaArzOnayHaberi, {
  halkaArzHaberMetadata,
  type HalkaArzHaberAyarlari,
} from "@/components/HalkaArzOnayHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = orzaksJson as HalkaArzVeri;
const ayarlar: HalkaArzHaberAyarlari = {
  haberSlug: "orzaks-ilac-halka-arzina-spk-onayi-geldi",
  kisaAd: "Orzaks İlaç",
  imageFile: "orzaks-ilac-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-06-25T09:00:00+03:00",
  publishedLabel: "25 Haziran 2026",
};

export const metadata = halkaArzHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzOnayHaberi veri={veri} ayarlar={ayarlar} />;
}

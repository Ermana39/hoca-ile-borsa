import orzaksJson from "@/data/halka-arz/orzaks-ilac-ve-kimya-san-tic.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = orzaksJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "orzaks-ilac-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Orzaks İlaç",
  imageFile: "orzaks-ilac-halka-arz-izahnamesi-yayinlandi.webp",
  publishedAt: "2026-06-25T22:45:00+03:00",
  modifiedAt: "2026-06-25T23:55:00+03:00",
  publishedLabel: "25 Haziran 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

import sohoJson from "@/data/halka-arz/soho-giyim-ve-enerji.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = sohoJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "soho-giyim-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Soho Giyim",
  imageFile: "soho-giyim-halka-arz-izahnamesi-yayinlandi.webp",
  publishedAt: "2026-06-25T23:30:00+03:00",
  modifiedAt: "2026-06-25T23:55:00+03:00",
  publishedLabel: "25 Haziran 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

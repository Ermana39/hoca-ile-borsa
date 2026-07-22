import saatJson from "@/data/halka-arz/saat-ve-saat-san-ve-tic.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = saatJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "saat-ve-saat-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Saat ve Saat",
  imageFile: "saat-ve-saat-halka-arz-izahnamesi-yayinlandi.webp",
  publishedAt: "2026-07-03T14:30:00+03:00",
  publishedLabel: "3 Temmuz 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

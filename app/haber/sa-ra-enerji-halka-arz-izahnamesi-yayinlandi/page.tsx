import saRaJson from "@/data/halka-arz/sa-ra-enerji-insaat-tic-ve-san.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = saRaJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "sa-ra-enerji-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Şa-Ra Enerji",
  imageFile: "sa-ra-enerji-halka-arz-izahnamesi-yayinlandi.webp",
  publishedAt: "2026-07-03T14:30:00+03:00",
  publishedLabel: "3 Temmuz 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

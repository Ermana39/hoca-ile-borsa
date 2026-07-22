import masfenJson from "@/data/halka-arz/masfen-enerji.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = masfenJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "masfen-enerji-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Masfen Enerji",
  imageFile: "masfen-enerji-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-17T23:55:00+03:00",
  publishedLabel: "17 Temmuz 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

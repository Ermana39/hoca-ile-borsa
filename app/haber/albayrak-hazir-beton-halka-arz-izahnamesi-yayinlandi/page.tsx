import albayrakJson from "@/data/halka-arz/albayrak-hazir-beton-san-ve-tic.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = albayrakJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "albayrak-hazir-beton-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Albayrak Hazır Beton",
  imageFile: "albayrak-hazir-beton-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-18T00:15:00+03:00",
  publishedLabel: "18 Temmuz 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

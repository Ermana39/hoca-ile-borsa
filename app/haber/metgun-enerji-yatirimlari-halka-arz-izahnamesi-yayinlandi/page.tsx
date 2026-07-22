import metgunJson from "@/data/halka-arz/metgun-enerji-yatirimlari.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = metgunJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "metgun-enerji-yatirimlari-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Metgün Enerji Yatırımları",
  imageFile: "metgun-enerji-yatirimlari-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-17T23:45:00+03:00",
  publishedLabel: "17 Temmuz 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

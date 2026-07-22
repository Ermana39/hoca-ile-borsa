import kardemirJson from "@/data/halka-arz/kardemir-celik-sanayi.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = kardemirJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "kardemir-celik-sanayi-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Kardemir Çelik Sanayi",
  imageFile: "kardemir-celik-sanayi-halka-arzina-spk-onayi-geldi.webp",
  publishedAt: "2026-07-17T23:30:00+03:00",
  publishedLabel: "17 Temmuz 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

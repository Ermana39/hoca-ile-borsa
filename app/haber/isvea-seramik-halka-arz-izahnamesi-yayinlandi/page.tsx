import isveaJson from "@/data/halka-arz/isvea-seramik-ve-banyo-urunleri-sanayi.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = isveaJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "isvea-seramik-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "İsvea Seramik",
  imageFile: "isvea-seramik-halka-arz-izahnamesi-yayinlandi.webp",
  publishedAt: "2026-06-25T23:00:00+03:00",
  modifiedAt: "2026-06-25T23:55:00+03:00",
  publishedLabel: "25 Haziran 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

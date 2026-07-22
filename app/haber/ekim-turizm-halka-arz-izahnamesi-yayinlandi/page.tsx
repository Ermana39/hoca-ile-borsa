import ekimJson from "@/data/halka-arz/ekim-turizm-tic-ve-san.json";
import HalkaArzIzahnameHaberi, {
  halkaArzIzahnameHaberMetadata,
  type HalkaArzIzahnameHaberAyarlari,
} from "@/components/HalkaArzIzahnameHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

const veri = ekimJson as HalkaArzVeri;
const ayarlar: HalkaArzIzahnameHaberAyarlari = {
  haberSlug: "ekim-turizm-halka-arz-izahnamesi-yayinlandi",
  kisaAd: "Ekim Turizm",
  imageFile: "ekim-turizm-halka-arz-izahnamesi-yayinlandi.webp",
  publishedAt: "2026-06-27T12:00:00+03:00",
  publishedLabel: "27 Haziran 2026",
};

export const metadata = halkaArzIzahnameHaberMetadata(veri, ayarlar);

export default function Page() {
  return <HalkaArzIzahnameHaberi veri={veri} ayarlar={ayarlar} />;
}

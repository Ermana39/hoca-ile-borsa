import type { Metadata } from "next";
import HalkaArzSurecHaberi, {
  halkaArzSurecHaberMetadata,
  type HalkaArzSurecHaberAyarlari,
} from "@/components/HalkaArzSurecHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

export type HalkaArzHaberAyarlari = HalkaArzSurecHaberAyarlari;

export function halkaArzHaberMetadata(
  veri: HalkaArzVeri,
  ayarlar: HalkaArzHaberAyarlari
): Metadata {
  return halkaArzSurecHaberMetadata("spk-onayi", veri, ayarlar);
}

export default function HalkaArzOnayHaberi({
  veri,
  ayarlar,
}: {
  veri: HalkaArzVeri;
  ayarlar: HalkaArzHaberAyarlari;
}) {
  return <HalkaArzSurecHaberi tur="spk-onayi" veri={veri} ayarlar={ayarlar} />;
}

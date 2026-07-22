import type { Metadata } from "next";
import HalkaArzSurecHaberi, {
  halkaArzSurecHaberMetadata,
  type HalkaArzSurecHaberAyarlari,
} from "@/components/HalkaArzSurecHaberi";
import type { HalkaArzVeri } from "@/lib/halka-arz";

export type HalkaArzIzahnameHaberAyarlari = HalkaArzSurecHaberAyarlari;

export function halkaArzIzahnameHaberMetadata(
  veri: HalkaArzVeri,
  ayarlar: HalkaArzIzahnameHaberAyarlari
): Metadata {
  return halkaArzSurecHaberMetadata("izahname-yayini", veri, ayarlar);
}

export default function HalkaArzIzahnameHaberi({
  veri,
  ayarlar,
}: {
  veri: HalkaArzVeri;
  ayarlar: HalkaArzIzahnameHaberAyarlari;
}) {
  return (
    <HalkaArzSurecHaberi tur="izahname-yayini" veri={veri} ayarlar={ayarlar} />
  );
}

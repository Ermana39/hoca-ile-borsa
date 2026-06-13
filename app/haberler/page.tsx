import type { Metadata } from "next";
import HaberArsiv from "@/components/HaberArsiv";
import { getAllNews } from "@/lib/haberler";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Haberler",
  description:
    "Borsa İstanbul, halka arz, temettü, KAP bildirimleri, sermaye artırımı ve küresel piyasalara dair tüm güncel haberlerin arşivi.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haberler",
  },
};

export default function HaberlerPage() {
  const haberler = getAllNews();

  return (
    <HaberArsiv
      haberler={haberler}
      aktifSayfa={1}
      basePath="/haberler"
      baslik="Haberler"
      aciklama="Borsa İstanbul, halka arz, temettü, KAP bildirimleri, sermaye artırımı ve küresel piyasalara dair tüm güncel haberleri tarihe göre bu arşivde bulabilirsiniz."
    />
  );
}
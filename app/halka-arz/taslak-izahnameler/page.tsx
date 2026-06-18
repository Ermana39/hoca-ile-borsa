import type { Metadata } from "next";
import { getTaslakIzahnameListesi } from "@/lib/halka-arz";
import TaslakIzahnamelerClient from "./TaslakIzahnamelerClient";

export const metadata: Metadata = {
  title: "Taslak İzahnameler | Halka Arz Başvuru Sürecindeki Şirketler",
  description:
    "SPK onayı bekleyen taslak izahnameleri, halka arz başvuru sürecindeki şirketleri ve taslak izahname sürecine dair bilgilendirici açıklamaları inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/halka-arz/taslak-izahnameler",
  },
};

export default function TaslakIzahnamelerPage() {
  return <TaslakIzahnamelerClient izahnameler={getTaslakIzahnameListesi()} />;
}
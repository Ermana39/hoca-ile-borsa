import type { Metadata } from "next";
import { getTaslakIzahnameListesi } from "@/lib/halka-arz";
import { getIzahnameLogo } from "@/lib/izahname-logolar";
import TaslakIzahnamelerClient, {
  type TaslakOgesi,
} from "./TaslakIzahnamelerClient";

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
  const izahnameler: TaslakOgesi[] = getTaslakIzahnameListesi().map((item) => ({
    ...item,
    logo: getIzahnameLogo(item.klasor),
  }));
  return <TaslakIzahnamelerClient izahnameler={izahnameler} />;
}

import OrtakHaberSayfasi from "@/components/OrtakHaberSayfasi";
import { haberKaydiGetir, haberMetadata } from "@/lib/haber-kayitlari";

const slug = "beta-enerji-halka-arz-talep-toplama-tarihleri-aciklandi";

function betaEnerjiHaberKaydi() {
  const kayit = haberKaydiGetir(slug);
  if (!kayit || kayit.durum !== "yayinda") {
    throw new Error(`Yayındaki haber kaydı bulunamadı: ${slug}`);
  }
  return kayit;
}

const kayit = betaEnerjiHaberKaydi();

export const metadata = haberMetadata(kayit);

export default function BetaEnerjiHalkaArzTalepToplamaPage() {
  return <OrtakHaberSayfasi kayit={kayit} />;
}

import OrtakHaberSayfasi from "@/components/OrtakHaberSayfasi";
import { haberKaydiGetir, haberMetadata } from "@/lib/haber-kayitlari";

const slug = "astor-teias-3511-milyon-tl-mobil-hibrit-modul-ihalesini-kazandi";

function astorHaberiniGetir() {
  const kayit = haberKaydiGetir(slug);
  if (!kayit || kayit.durum !== "yayinda") {
    throw new Error(`Yayındaki haber kaydı bulunamadı: ${slug}`);
  }
  return kayit;
}

const kayit = astorHaberiniGetir();

export const metadata = haberMetadata(kayit);

export default function AstorTeiasIhalePage() {
  return <OrtakHaberSayfasi kayit={kayit} />;
}

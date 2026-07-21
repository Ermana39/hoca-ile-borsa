import { kapGelismeleri } from "@/data/kap-gelismeleri";
import { getKategori } from "@/lib/haber-kategorileri";
import { getAllNews } from "@/lib/haberler";

// Hisse sayfasında "Şirket Haberleri ve KAP Gelişmeleri" bölümünün tek tip kaydı.
// İki kaynaktan beslenir: merkezi KAP dosyası + etiketli haberler.
export type HisseKapKaydi = {
  isoTarih: string;
  tarih: string;
  tur: string;
  baslik: string;
  aciklama?: string;
  link?: string;
  kaynakTuru: "kap" | "haber";
};

function isoyuTarihYap(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function eslesir(liste: string[] | undefined, sembol: string): boolean {
  if (!liste) return false;
  const hedef = sembol.toUpperCase();
  return liste.some((k) => k.toUpperCase() === hedef);
}

// Bir hisse için tüm KAP gelişmeleri + etiketli haberler (en yeni üstte).
export function getKapBySembol(sembol: string): HisseKapKaydi[] {
  const kapKayitlari: HisseKapKaydi[] = kapGelismeleri
    .filter((k) => eslesir(k.ilgiliHisseler, sembol))
    .map((k) => ({
      isoTarih: k.isoTarih,
      tarih: k.tarih,
      tur: k.tur,
      baslik: k.baslik,
      aciklama: k.aciklama,
      link: k.haberHref || k.kaynak || undefined,
      kaynakTuru: "kap" as const,
    }));

  const haberKayitlari: HisseKapKaydi[] = getAllNews()
    .filter((h) => eslesir(h.ilgiliHisseler, sembol))
    .map((h) => ({
      isoTarih: h.publishedAt,
      tarih: isoyuTarihYap(h.publishedAt),
      tur: h.category ? getKategori(h.category)?.kisaBaslik ?? "Haber" : "Haber",
      baslik: h.title,
      aciklama: h.description,
      link: h.href,
      kaynakTuru: "haber" as const,
    }));

  return [...kapKayitlari, ...haberKayitlari].sort((a, b) =>
    a.isoTarih < b.isoTarih ? 1 : -1
  );
}

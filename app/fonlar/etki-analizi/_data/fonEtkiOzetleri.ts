export type FonEtkiOzeti = {
  kod: string;
  fonAdi: string;
  fonTuru: string;
  slug: string;
  toplamFonOrani: number;
  toplamEtki: number;
};

export const fonEtkiSonGuncelleme = {
  label: "20 Temmuz 2026",
  iso: "2026-07-20",
};

export const fonEtkiOzetleri: FonEtkiOzeti[] = [
  {
    kod: "TLY",
    fonAdi: "Tera Portföy Birinci Serbest Fonu",
    fonTuru: "Serbest fon",
    slug: "tly",
    toplamFonOrani: 82.01,
    toplamEtki: -0.88,
  },
  {
    kod: "PHE",
    fonAdi: "Pusula Portföy Hisse Senedi Fonu",
    fonTuru: "Hisse senedi yoğun fon",
    slug: "phe",
    toplamFonOrani: 98.45,
    toplamEtki: -0.13,
  },
  {
    kod: "PBR",
    fonAdi: "Pusula Portföy Birinci Değişken Fon",
    fonTuru: "Değişken fon",
    slug: "pbr",
    toplamFonOrani: 84.42,
    toplamEtki: -0.41,
  },
  {
    kod: "DFI",
    fonAdi: "Atlas Portföy Serbest Fon",
    fonTuru: "Serbest fon",
    slug: "dfi",
    toplamFonOrani: 94.22,
    toplamEtki: 0.32,
  },
];

export function fonEtkiOzetiGetir(slug: string): FonEtkiOzeti {
  const ozet = fonEtkiOzetleri.find((fon) => fon.slug === slug);
  if (!ozet) throw new Error(`Fon etki özeti bulunamadı: ${slug}`);
  return ozet;
}

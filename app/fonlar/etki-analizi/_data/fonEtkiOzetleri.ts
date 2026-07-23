import type { Metadata } from "next";

export type FonEtkiOzeti = {
  kod: string;
  fonAdi: string;
  fonTuru: string;
  slug: string;
  toplamFonOrani: number;
  toplamEtki: number;
  profilOzeti: string;
};

const siteUrl = "https://www.hocaileborsa.com";
const etkiFormatlayici = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const fonEtkiSonGuncelleme = {
  label: "23 Temmuz 2026",
  iso: "2026-07-23",
};

export const fonEtkiOzetleri: FonEtkiOzeti[] = [
  {
    kod: "TLY",
    fonAdi: "Tera Portföy Birinci Serbest Fonu",
    fonTuru: "Serbest fon",
    slug: "tly",
    toplamFonOrani: 82.01,
    toplamEtki: 0.08,
    profilOzeti:
      "TLY kodlu Tera Portföy Birinci Serbest Fonu, serbest fon türündedir. Bu sayfa, bildirilen portföy ağırlıkları ile varlıkların gün sonu hareketlerini birleştirerek fonun açıklanacak fiyatına yönelik tahmini etkiyi izler.",
  },
  {
    kod: "PHE",
    fonAdi: "Pusula Portföy Hisse Senedi Fonu",
    fonTuru: "Hisse senedi yoğun fon",
    slug: "phe",
    toplamFonOrani: 98.45,
    toplamEtki: 0.38,
    profilOzeti:
      "PHE kodlu Pusula Portföy Hisse Senedi Fonu, hisse senedi yoğun fon türündedir. Bu sayfa, portföydeki payların ağırlıklarını günlük kapanış hareketleriyle eşleştirerek açıklanacak fon fiyatına yönelik tahmini etkiyi izler.",
  },
  {
    kod: "PBR",
    fonAdi: "Pusula Portföy Birinci Değişken Fon",
    fonTuru: "Değişken fon",
    slug: "pbr",
    toplamFonOrani: 84.42,
    toplamEtki: 0.36,
    profilOzeti:
      "PBR kodlu Pusula Portföy Birinci Değişken Fon, değişken fon türündedir. Bu sayfa, fonun bildirilen varlık dağılımındaki ağırlıkları ve günlük kapanış hareketlerini kullanarak açıklanacak fiyat için tahmini portföy etkisini izler.",
  },
  {
    kod: "DFI",
    fonAdi: "Atlas Portföy Serbest Fon",
    fonTuru: "Serbest fon",
    slug: "dfi",
    toplamFonOrani: 94.22,
    toplamEtki: 0.41,
    profilOzeti:
      "DFI kodlu Atlas Portföy Serbest Fon, serbest fon türündedir. Bu sayfa, yoğunlaşmış portföy yapısındaki varlıkların ağırlıkları ile günlük fiyat hareketlerini birleştirerek açıklanacak fon fiyatına yönelik tahmini etkiyi izler.",
  },
];

export function fonEtkiOzetiGetir(slug: string): FonEtkiOzeti {
  const ozet = fonEtkiOzetleri.find((fon) => fon.slug === slug);
  if (!ozet) throw new Error(`Fon etki özeti bulunamadı: ${slug}`);
  return ozet;
}

export function fonEtkiYuzdeMetni(value: number): string {
  const isaret = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${isaret}%${etkiFormatlayici.format(Math.abs(value))}`;
}

export function fonEtkiMetadataOlustur(slug: string): Metadata {
  const fon = fonEtkiOzetiGetir(slug);
  const canonical = `${siteUrl}/fonlar/etki-analizi/${fon.slug}`;
  const title = `${fon.kod} Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini`;
  const description = `${fonEtkiSonGuncelleme.label} kapanışına göre ${fon.kod} fonunun tahmini etkisi ${fonEtkiYuzdeMetni(fon.toplamEtki)}. Portföy dağılımı, hisse katkıları, para girişi ve yatırımcı değişimini inceleyin.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    keywords: [
      `${fon.kod} fon`,
      `${fon.kod} fon tahmini`,
      `${fon.kod} fon yorum`,
      `${fon.kod} TEFAS`,
      "fon etki analizi",
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      modifiedTime: fonEtkiSonGuncelleme.iso,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

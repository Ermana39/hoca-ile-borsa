import type { Metadata } from "next";
import fonEtkiHamVeri from "./fon-etki-verileri.json";

export type FonEtkiSatiri = {
  sembol: string;
  fonOrani: number;
  kapanisMarji: number;
  etki: number;
};

export type FonTarihselVeri = {
  tarih: string;
  yatirimciSayisi: number;
  fonToplamDeger: number;
  paraGirisiCikisi: number;
};

export type FonEtkiOzeti = {
  kod: string;
  fonAdi: string;
  fonTuru: string;
  slug: string;
  toplamFonOrani: number;
  toplamEtki: number;
  kaldiracli: boolean;
  profilOzeti: string;
};

export type FonEtkiSayfaVerisi = FonEtkiOzeti & {
  rows: FonEtkiSatiri[];
  tarihselVeriler: FonTarihselVeri[];
};

type FonHamVerisi = {
  kod: string;
  toplamFonOrani: number;
  toplamEtki: number;
  kaldiracli: boolean;
  portfoy: FonEtkiSatiri[];
  tarihsel: FonTarihselVeri[];
};

type FonEtkiDosyasi = {
  kaynakDosya: string;
  sonGuncelleme: string;
  fonlar: Record<string, FonHamVerisi>;
};

const veri = fonEtkiHamVeri as FonEtkiDosyasi;
const siteUrl = "https://www.hocaileborsa.com";
const etkiFormatlayici = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const fonProfilleri = [
  {
    kod: "TLY",
    fonAdi: "Tera Portföy Birinci Serbest Fonu",
    fonTuru: "Serbest fon",
    slug: "tly",
    profilOzeti:
      "TLY kodlu Tera Portföy Birinci Serbest Fonu, serbest fon türündedir. Bu sayfa, bildirilen portföy ağırlıkları ile varlıkların gün sonu hareketlerini birleştirerek fonun açıklanacak fiyatına yönelik tahmini etkiyi izler.",
  },
  {
    kod: "PHE",
    fonAdi: "Pusula Portföy Hisse Senedi Fonu",
    fonTuru: "Hisse senedi yoğun fon",
    slug: "phe",
    profilOzeti:
      "PHE kodlu Pusula Portföy Hisse Senedi Fonu, hisse senedi yoğun fon türündedir. Bu sayfa, portföydeki payların ağırlıklarını günlük kapanış hareketleriyle eşleştirerek açıklanacak fon fiyatına yönelik tahmini etkiyi izler.",
  },
  {
    kod: "PBR",
    fonAdi: "Pusula Portföy Birinci Değişken Fon",
    fonTuru: "Değişken fon",
    slug: "pbr",
    profilOzeti:
      "PBR kodlu Pusula Portföy Birinci Değişken Fon, değişken fon türündedir. Bu sayfa, fonun bildirilen varlık dağılımındaki ağırlıkları ve günlük kapanış hareketlerini kullanarak açıklanacak fiyat için tahmini portföy etkisini izler.",
  },
  {
    kod: "DFI",
    fonAdi: "Atlas Portföy Serbest Fon",
    fonTuru: "Serbest fon",
    slug: "dfi",
    profilOzeti:
      "DFI kodlu Atlas Portföy Serbest Fon, serbest fon türündedir. Bu sayfa, yoğunlaşmış portföy yapısındaki varlıkların ağırlıkları ile günlük fiyat hareketlerini birleştirerek açıklanacak fon fiyatına yönelik tahmini etkiyi izler.",
  },
  {
    kod: "BMU",
    fonAdi:
      "Bulls Portföy Mutlak Getiri Hedefli Hisse Senedi Serbest Fon (Hisse Senedi Yoğun Fon)",
    fonTuru: "Serbest fon",
    slug: "bmu",
    profilOzeti:
      "BMU kodlu Bulls Portföy Mutlak Getiri Hedefli Hisse Senedi Serbest Fon, hisse senedi yoğun serbest fon türündedir. Portföy oranının yüzde 100'ü aşabilmesi kaldıraçlı pozisyonlardan kaynaklanabilir; bu sayfa brüt pozisyon etkisini görünür biçimde izler.",
  },
] as const;

function tarihEtiketi(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export const fonEtkiSonGuncelleme = {
  label: tarihEtiketi(veri.sonGuncelleme),
  iso: veri.sonGuncelleme,
};

export const fonEtkiOzetleri: FonEtkiOzeti[] = fonProfilleri.map((profil) => {
  const hamVeri = veri.fonlar[profil.kod];
  if (!hamVeri) {
    throw new Error(`Fon etki Excel verisi bulunamadı: ${profil.kod}`);
  }

  return {
    ...profil,
    toplamFonOrani: hamVeri.toplamFonOrani,
    toplamEtki: hamVeri.toplamEtki,
    kaldiracli: hamVeri.kaldiracli,
  };
});

export function fonEtkiOzetiGetir(slug: string): FonEtkiOzeti {
  const ozet = fonEtkiOzetleri.find((fon) => fon.slug === slug);
  if (!ozet) throw new Error(`Fon etki özeti bulunamadı: ${slug}`);
  return ozet;
}

export function fonEtkiSayfaVerisiGetir(slug: string): FonEtkiSayfaVerisi {
  const ozet = fonEtkiOzetiGetir(slug);
  const hamVeri = veri.fonlar[ozet.kod];

  return {
    ...ozet,
    rows: hamVeri.portfoy,
    tarihselVeriler: hamVeri.tarihsel,
  };
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

import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "PHE fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
  },
  openGraph: {
    title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "PHE fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "KTLEV", fonOrani: 8.92, kapanisMarji: 1.122, etki: 0.100071392 },
  { sembol: "ODINE", fonOrani: 8.81, kapanisMarji: 1.456, etki: 0.128300971 },
  { sembol: "GUNDG", fonOrani: 8.28, kapanisMarji: 0.578, etki: 0.047861272 },
  { sembol: "PASEU", fonOrani: 6.17, kapanisMarji: -0.215, etki: -0.013275955 },
  { sembol: "HEDEF", fonOrani: 4.75, kapanisMarji: 1.142, etki: 0.054257529 },
  { sembol: "THYAO", fonOrani: 4.42, kapanisMarji: 1.227, etki: 0.054233129 },
  { sembol: "AKBNK", fonOrani: 3.77, kapanisMarji: -0.724, etki: -0.027279305 },
  { sembol: "TRALT", fonOrani: 3.6, kapanisMarji: 0.984, etki: 0.035433071 },
  { sembol: "YKBNK", fonOrani: 3.37, kapanisMarji: -1.296, etki: -0.043663133 },
  { sembol: "BALSU", fonOrani: 2.68, kapanisMarji: 2.477, etki: 0.066377709 },
  { sembol: "DSTKF", fonOrani: 2.58, kapanisMarji: -9.96, etki: -0.256963855 },
  { sembol: "ISCTR", fonOrani: 2.45, kapanisMarji: 0.72, etki: 0.017638589 },
  { sembol: "ANELE", fonOrani: 2.05, kapanisMarji: -1.944, etki: -0.039861111 },
  { sembol: "TATEN", fonOrani: 1.73, kapanisMarji: 1.8, etki: 0.031145663 },
  { sembol: "MGROS", fonOrani: 1.64, kapanisMarji: 3.125, etki: 0.05125 },
  { sembol: "SAHOL", fonOrani: 1.62, kapanisMarji: 0.95, etki: 0.015394075 },
  { sembol: "BIMAS", fonOrani: 1.48, kapanisMarji: 3.056, etki: 0.045227568 },
  { sembol: "TCELL", fonOrani: 1.4, kapanisMarji: 1.815, etki: 0.025408348 },
  { sembol: "KCHOL", fonOrani: 1.3, kapanisMarji: 3.087, etki: 0.040136054 },
  { sembol: "TTKOM", fonOrani: 1.26, kapanisMarji: 2.0, etki: 0.0252 },
  { sembol: "GARAN", fonOrani: 1.2, kapanisMarji: -0.155, etki: -0.001861908 },
  { sembol: "PEKGY", fonOrani: 0.73, kapanisMarji: 0.271, etki: 0.00197832 },
  { sembol: "PGSUS", fonOrani: 0.71, kapanisMarji: 1.024, etki: 0.007271084 },
  { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: 0.378, etki: 0.002229219 },
  { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: 3.846, etki: 0.021538462 },
  { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: 4.636, etki: 0.018545455 },
  { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 7.427, etki: 0.028964435 },
  { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: 2.731, etki: 0.009832776 },
  { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: 1.695, etki: 0.005762712 },
  { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 6.1, etki: 0.020741627 },
  { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: 3.482, etki: 0.011489362 },
  { sembol: "TERA", fonOrani: 0.26, kapanisMarji: 4.025, etki: 0.010464396 },
  { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: 1.639, etki: 0.00295082 },
  { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: 9.801, etki: 0.011761589 },
  { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: 4.534, etki: 0.003173691 },
  { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: 5.205, etki: 0.002602674 },
  { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: -10.0, etki: -0.004 },
  { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: 2.946, etki: 0.001178451 },
  { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: 2.178, etki: 0.006533575 },
  { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: 0.05, etki: 0.004165 },
  { sembol: "PCS", fonOrani: 8.27, kapanisMarji: -1.85, etki: -0.152995 },
  { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.26, etki: 0.006656 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={98.45}
      toplamEtki={0.38}
      sonGuncelleme="16 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 147938,
          bugun: 151330,
          degisim: 3392,
        },
        fonToplamDeger: {
          dun: 72342028929,
          bugun: 74160011336,
          degisim: 1817982407,
        },
        paraGirisiCikisi: 1376202816,
        yorum:
          "PHE fonunda yatırımcı sayısı 3.392 kişi artarken fon toplam değeri 1,82 milyar TL yükseldi. 1,38 milyar TL net para girişi, yatırımcı ilgisinin hem kişi sayısı hem tutar bazında güçlendiğini gösteriyor. Portföy etkisinin +%0,38 seviyesinde kalması, güçlü para girişine rağmen DSTKF ve PCS baskısının fiyat etkisini sınırladığını anlatıyor.",
      }}
    />
  );
}

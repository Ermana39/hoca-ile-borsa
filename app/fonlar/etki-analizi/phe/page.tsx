import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

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
  { sembol: "KTLEV", fonOrani: 8.92, kapanisMarji: -4.545, etki: -0.405454545 },
  { sembol: "ODINE", fonOrani: 8.81, kapanisMarji: 3.333, etki: 0.293666667 },
  { sembol: "GUNDG", fonOrani: 8.28, kapanisMarji: 2.381, etki: 0.197142857 },
  { sembol: "PASEU", fonOrani: 6.17, kapanisMarji: 9.915, etki: 0.61173774 },
  { sembol: "HEDEF", fonOrani: 4.75, kapanisMarji: 10.0, etki: 0.475 },
  { sembol: "THYAO", fonOrani: 4.42, kapanisMarji: -0.455, etki: -0.020121396 },
  { sembol: "AKBNK", fonOrani: 3.77, kapanisMarji: 0.526, etki: 0.019842105 },
  { sembol: "TRALT", fonOrani: 3.6, kapanisMarji: -0.577, etki: -0.020776119 },
  { sembol: "YKBNK", fonOrani: 3.37, kapanisMarji: -0.963, etki: -0.032462372 },
  { sembol: "BALSU", fonOrani: 2.68, kapanisMarji: -7.429, etki: -0.199085714 },
  { sembol: "DSTKF", fonOrani: 2.58, kapanisMarji: -9.97, etki: -0.257232904 },
  { sembol: "ISCTR", fonOrani: 2.45, kapanisMarji: -3.655, etki: -0.089546784 },
  { sembol: "ANELE", fonOrani: 2.05, kapanisMarji: 0.1, etki: 0.002047952 },
  { sembol: "TATEN", fonOrani: 1.73, kapanisMarji: -0.729, etki: -0.012607287 },
  { sembol: "MGROS", fonOrani: 1.64, kapanisMarji: 2.203, etki: 0.036129032 },
  { sembol: "SAHOL", fonOrani: 1.62, kapanisMarji: 0.679, etki: 0.010995475 },
  { sembol: "BIMAS", fonOrani: 1.48, kapanisMarji: 3.627, etki: 0.053678756 },
  { sembol: "TCELL", fonOrani: 1.4, kapanisMarji: 1.014, etki: 0.014193548 },
  { sembol: "KCHOL", fonOrani: 1.3, kapanisMarji: 1.421, etki: 0.018477157 },
  { sembol: "TTKOM", fonOrani: 1.26, kapanisMarji: 1.462, etki: 0.018417885 },
  { sembol: "GARAN", fonOrani: 1.2, kapanisMarji: -1.972, etki: -0.023659306 },
  { sembol: "PEKGY", fonOrani: 0.73, kapanisMarji: 1.351, etki: 0.009864865 },
  { sembol: "PGSUS", fonOrani: 0.71, kapanisMarji: -1.081, etki: -0.007675676 },
  { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: 1.971, etki: 0.011627463 },
  { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: 3.708, etki: 0.020762712 },
  { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: 0.091, etki: 0.000363967 },
  { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 0.0, etki: 0 },
  { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: -1.103, etki: -0.003969129 },
  { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: 2.012, etki: 0.006839899 },
  { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 3.315, etki: 0.011270718 },
  { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: 2.637, etki: 0.008700565 },
  { sembol: "TERA", fonOrani: 0.26, kapanisMarji: 2.567, etki: 0.006675016 },
  { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: -0.82, etki: -0.00147541 },
  { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: 4.594, etki: 0.005512367 },
  { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: -0.996, etki: -0.000696951 },
  { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: 2.976, etki: 0.001487955 },
  { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: -1.928, etki: -0.00077135 },
  { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: -3.509, etki: -0.001403509 },
  { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: -0.666, etki: -0.001997579 },
  { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: -4.78, etki: -0.398174 },
  { sembol: "PCS", fonOrani: 8.27, kapanisMarji: -6.06, etki: -0.501162 },
  { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.39, etki: 0.009984 },
];

const ozet = fonEtkiOzetiGetir("phe");

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod={ozet.kod}
      fonAdi={ozet.fonAdi}
      fonTuru={ozet.fonTuru}
      slug={ozet.slug}
      rows={rows}
      toplamFonOrani={ozet.toplamFonOrani}
      toplamEtki={ozet.toplamEtki}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 153264,
          bugun: 156969,
          degisim: 3705,
        },
        fonToplamDeger: {
          dun: 75227440542,
          bugun: 75539198713,
          degisim: 311758171,
        },
        paraGirisiCikisi: 837728630,
        yorum:
          "PHE fonunda yatırımcı sayısı 3.705 kişi artarken fon toplam değeri 311,76 milyon TL yükseldi. 837,73 milyon TL net para girişi güçlü talebi gösteriyor; ancak portföy etkisinin -%0,13 seviyesinde kalması, PCS, KTLEV, PKZ ve DSTKF baskısının PASEU, HEDEF ve ODINE katkısını dengelediğini anlatıyor.",
      }}
    />
  );
}

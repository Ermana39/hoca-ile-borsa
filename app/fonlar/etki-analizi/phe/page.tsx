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
  { sembol: "GUNDG", fonOrani: 12.38, kapanisMarji: 5.51, etki: 0.682362205 },
  { sembol: "KTLEV", fonOrani: 10.7, kapanisMarji: 5.42, etki: 0.579940008 },
  { sembol: "ODINE", fonOrani: 9.17, kapanisMarji: 4.79, etki: 0.439242997 },
  { sembol: "PASEU", fonOrani: 7.79, kapanisMarji: 1.67, etki: 0.130092997 },
  { sembol: "HEDEF", fonOrani: 4.54, kapanisMarji: 3.33, etki: 0.151181997 },
  { sembol: "THYAO", fonOrani: 4.36, kapanisMarji: -1.45, etki: -0.063430322 },
  { sembol: "TATEN", fonOrani: 3.79, kapanisMarji: -2.04, etki: -0.077315999 },
  { sembol: "TRALT", fonOrani: 3.29, kapanisMarji: -0.50, etki: -0.01645 },
  { sembol: "AKBNK", fonOrani: 3.17, kapanisMarji: 1.17, etki: 0.037003891 },
  { sembol: "DSTKF", fonOrani: 3.09, kapanisMarji: 2.14, etki: 0.065978648 },
  { sembol: "YKBNK", fonOrani: 2.98, kapanisMarji: 0.99, etki: 0.029432099 },
  { sembol: "TCELL", fonOrani: 2.94, kapanisMarji: -2.69, etki: -0.079114583 },
  { sembol: "MGROS", fonOrani: 2.49, kapanisMarji: -2.51, etki: -0.062383679 },
  { sembol: "SAHOL", fonOrani: 2.35, kapanisMarji: -0.99, etki: -0.023313492 },
  { sembol: "KCHOL", fonOrani: 2.11, kapanisMarji: -2.20, etki: -0.046396802 },
  { sembol: "ISCTR", fonOrani: 1.81, kapanisMarji: -0.47, etki: -0.008441039 },
  { sembol: "ALKLC", fonOrani: 1.29, kapanisMarji: -0.73, etki: -0.009375 },
  { sembol: "BIMAS", fonOrani: 1.28, kapanisMarji: -0.39, etki: -0.005 },
  { sembol: "DAPGM", fonOrani: 1.14, kapanisMarji: 0.47, etki: 0.005358 },
  { sembol: "TTKOM", fonOrani: 0.89, kapanisMarji: -3.18, etki: -0.028302001 },
  { sembol: "TERA", fonOrani: 0.85, kapanisMarji: -8.39, etki: -0.071315003 },
  { sembol: "GARAN", fonOrani: 0.83, kapanisMarji: 0.57, etki: 0.004736091 },
  { sembol: "ENKAI", fonOrani: 0.58, kapanisMarji: -1.59, etki: -0.009240574 },
  { sembol: "PEKGY", fonOrani: 0.44, kapanisMarji: -0.53, etki: -0.002332 },
  { sembol: "AKSEN", fonOrani: 0.42, kapanisMarji: -1.53, etki: -0.006426 },
  { sembol: "ALVES", fonOrani: 0.37, kapanisMarji: -0.74, etki: -0.002738 },
  { sembol: "PGSUS", fonOrani: 0.35, kapanisMarji: -2.17, etki: -0.007595 },
  { sembol: "IZFAS", fonOrani: 0.29, kapanisMarji: 0.72, etki: 0.002088 },
  { sembol: "GUBRF", fonOrani: 0.26, kapanisMarji: -3.53, etki: -0.009170639 },
  { sembol: "TRHOL", fonOrani: 0.22, kapanisMarji: -0.23, etki: -0.000516735 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 0.24, etki: 0.0000968523 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: 1.62, etki: 0.000324074 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={86.23}
      toplamEtki={1.6}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}

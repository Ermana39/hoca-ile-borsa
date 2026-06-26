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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: 3.448, etki: 0.38 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: 0.528, etki: 0.05028169 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 1.907, etki: 0.155640327 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: -0.157, etki: -0.010853563 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 1.050, etki: 0.04242 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: 0.685, etki: 0.026575342 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: -0.610, etki: -0.020557 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: -0.466, etki: -0.013662569 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: 0.065, etki: 0.001826425 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 1.316, etki: 0.036184211 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: 0.395, etki: 0.010469136 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: 0.362, etki: 0.009484163 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -0.793, etki: -0.01759366 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 0.464, etki: 0.009695876 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: 1.693, etki: 0.031831709 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: 1.097, etki: 0.017668038 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: 0.000, etki: 0 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -0.266, etki: -0.003035952 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: 0.190, etki: 0.001919 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: 2.554, etki: 0.020172982 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 0.680, etki: 0.005168 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: 0.581, etki: 0.004302326 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: 1.282, etki: 0.006666667 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: 1.980, etki: 0.007722 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: 1.662, etki: 0.006147692 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: 0.370, etki: 0.001222222 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: -0.332, etki: -0.00102933 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 0.154, etki: 0.000399386 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: 0.471, etki: 0.00108377 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -1.638, etki: -0.00327654 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.154, etki: 0.000461538 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -3.130, etki: -0.000625931 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: -4.68, etki: -0.488124 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: -2.74, etki: -0.097818 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={90.75}
      toplamEtki={0.17}
      sonGuncelleme="26 Haziran 2026"
    />
  );
}

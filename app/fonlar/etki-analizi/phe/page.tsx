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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: 0.76, etki: 0.083484848 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: -2.69, etki: -0.255913978 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 2.92, etki: 0.238359229 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: 0.42, etki: 0.029364407 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 2.36, etki: 0.095433071 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: -0.53, etki: -0.020563999 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: -2.95, etki: -0.099253425 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: -1.06, etki: -0.031057998 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: 0.92, etki: 0.025944 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 4.15, etki: 0.114125003 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: 1.59, etki: 0.042135001 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: -2.24, etki: -0.058688 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -1.58, etki: -0.035076001 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: -1.66, etki: -0.034663415 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: -2.20, etki: -0.041360001 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: -0.71, etki: -0.011431 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: 0.07, etki: 0.000848708 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -2.17, etki: -0.024738001 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: 0.56, etki: 0.005642458 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: -1.41, etki: -0.011139 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 1.04, etki: 0.007936118 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: -0.21, etki: -0.001554 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: 0.11, etki: 0.000572 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: 3.73, etki: 0.014532319 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: -0.46, etki: -0.001693364 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: -0.74, etki: -0.002435424 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: -0.54, etki: -0.001674 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 0.00, etki: 0 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: -4.95, etki: -0.011385 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -2.83, etki: -0.00566 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: -0.46, etki: -0.000183171 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -1.28, etki: -0.000256 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 5.17, etki: 0.539231 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 5.67, etki: 0.202419 },
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
      toplamEtki={0.75}
      sonGuncelleme="19 Haziran 2026"
    />
  );
}
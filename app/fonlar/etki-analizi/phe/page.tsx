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
  { sembol: "GUNDG", fonOrani: 11.87, kapanisMarji: -1.639, etki: -0.194590164 },
  { sembol: "KTLEV", fonOrani: 10.26, kapanisMarji: -1.974, etki: -0.202572038 },
  { sembol: "ODINE", fonOrani: 8.8, kapanisMarji: -8.838, etki: -0.777777778 },
  { sembol: "PASEU", fonOrani: 7.47, kapanisMarji: 9.977, etki: 0.745256709 },
  { sembol: "HEDEF", fonOrani: 4.35, kapanisMarji: -0.952, etki: -0.041428571 },
  { sembol: "THYAO", fonOrani: 4.18, kapanisMarji: 0.225, etki: 0.009407352 },
  { sembol: "TATEN", fonOrani: 3.64, kapanisMarji: -1.550, etki: -0.056434109 },
  { sembol: "TRALT", fonOrani: 3.15, kapanisMarji: 5.549, etki: 0.174780976 },
  { sembol: "AKBNK", fonOrani: 3.04, kapanisMarji: -5.388, etki: -0.163797306 },
  { sembol: "DSTKF", fonOrani: 2.96, kapanisMarji: -1.575, etki: -0.046614173 },
  { sembol: "YKBNK", fonOrani: 2.86, kapanisMarji: -6.123, etki: -0.175130864 },
  { sembol: "TCELL", fonOrani: 2.82, kapanisMarji: -1.107, etki: -0.031217712 },
  { sembol: "MGROS", fonOrani: 2.39, kapanisMarji: 0.477, etki: 0.011389992 },
  { sembol: "SAHOL", fonOrani: 2.25, kapanisMarji: -3.127, etki: -0.070348539 },
  { sembol: "KCHOL", fonOrani: 2.02, kapanisMarji: -2.117, etki: -0.04275684 },
  { sembol: "ISCTR", fonOrani: 1.74, kapanisMarji: -4.116, etki: -0.071619433 },
  { sembol: "ALKLC", fonOrani: 1.24, kapanisMarji: 2.950, etki: 0.036578171 },
  { sembol: "BIMAS", fonOrani: 1.23, kapanisMarji: -0.140, etki: -0.00172028 },
  { sembol: "DAPGM", fonOrani: 1.09, kapanisMarji: 1.382, etki: 0.015058448 },
  { sembol: "TTKOM", fonOrani: 0.85, kapanisMarji: 1.325, etki: 0.011258278 },
  { sembol: "TERA", fonOrani: 0.81, kapanisMarji: -7.869, etki: -0.063736059 },
  { sembol: "GARAN", fonOrani: 0.8, kapanisMarji: -3.680, etki: -0.029437229 },
  { sembol: "ENKAI", fonOrani: 0.56, kapanisMarji: 1.793, etki: 0.010038023 },
  { sembol: "PEKGY", fonOrani: 0.42, kapanisMarji: -0.070, etki: -0.000293706 },
  { sembol: "AKSEN", fonOrani: 0.4, kapanisMarji: -0.492, etki: -0.00196802 },
  { sembol: "ALVES", fonOrani: 0.35, kapanisMarji: -2.239, etki: -0.007835821 },
  { sembol: "PGSUS", fonOrani: 0.34, kapanisMarji: -1.638, etki: -0.005570621 },
  { sembol: "IZFAS", fonOrani: 0.28, kapanisMarji: -2.191, etki: -0.006135866 },
  { sembol: "GUBRF", fonOrani: 0.25, kapanisMarji: -1.245, etki: -0.003113156 },
  { sembol: "TRHOL", fonOrani: 0.21, kapanisMarji: -4.329, etki: -0.009090909 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.088, etki: 0.000435233 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -1.388, etki: -0.000277551 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 6.68, etki: 0.696724 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 6.93, etki: 0.247401 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={96.69}
      toplamEtki={-0.05}
      sonGuncelleme="3 Temmuz 2026"
    />
  );
}

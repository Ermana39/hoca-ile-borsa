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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: 6.775, etki: 0.746568483 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: -4.431, etki: -0.421805945 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 4.38, etki: 0.357406143 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: 2.16, etki: 0.14968 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 3.026, etki: 0.122247839 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: 1.155, etki: 0.044803695 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: 1.931, etki: 0.065075862 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: -2.319, etki: -0.067942029 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: -4.632, etki: -0.130636195 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 2.703, etki: 0.074324324 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: -5.197, etki: -0.137710674 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: 0.091, etki: 0.002373188 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -0.502, etki: -0.011139785 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: -2.806, etki: -0.058637275 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: 0.984, etki: 0.018507772 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: -3.444, etki: -0.055443709 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: -1.744, etki: -0.02005814 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: 0.401, etki: 0.004572193 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: 2.289, etki: 0.023114428 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: -0.817, etki: -0.006454248 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 0.878, etki: 0.006670846 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: -1.994, etki: -0.014757835 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: 0.448, etki: 0.002329227 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: -0.656, etki: -0.002558309 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: -2.108, etki: -0.007801205 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: -1.46, etki: -0.004817518 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: 2.09, etki: 0.006480226 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 0.308, etki: 0.000801233 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: 2.194, etki: 0.005045479 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -5.217, etki: -0.010434783 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 0.552, etki: 0.000220994 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -1.613, etki: -0.000322581 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: -2.08, etki: -0.216944 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 0.37, etki: 0.013209 },
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
      toplamEtki={0.48}
      sonGuncelleme="25 Haziran 2026"
    />
  );
}

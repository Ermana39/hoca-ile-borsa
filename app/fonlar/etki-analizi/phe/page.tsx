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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: 6.933, etki: 0.764053333 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: 0.817, etki: 0.07780502 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 1.070, etki: 0.087312004 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: -9.961, etki: -0.690282353 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 6.228, etki: 0.251626298 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: -0.530, etki: -0.020563999 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: -3.131, etki: -0.10552757 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: -3.109, etki: -0.091094549 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: -0.065, etki: -0.001825243 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 2.453, etki: 0.067460317 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: -1.426, etki: -0.037801279 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: -1.172, etki: -0.030712353 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -2.397, etki: -0.053202614 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 0.051, etki: 0.001072345 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: -1.261, etki: -0.023713421 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: -0.339, etki: -0.00546133 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: 1.410, etki: 0.016215 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -0.935, etki: -0.010654206 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -2.040, etki: -0.020604 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: 0.402, etki: 0.003172691 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 1.540, etki: 0.011704 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: -0.795, etki: -0.005881503 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: 0.605, etki: 0.003148046 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: 0.647, etki: 0.00252518 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: 0.969, etki: 0.003583535 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: -0.740, etki: -0.002442 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: -1.666, etki: -0.005163798 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 0.920, etki: 0.002392638 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: -5.993, etki: -0.01378322 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: 9.990, etki: 0.01998 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.032, etki: 0.000412819 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -3.538, etki: -0.000707692 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 0.51, etki: 0.053193 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 0.85, etki: 0.030345 },
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
      toplamEtki={0.28}
      sonGuncelleme="29 Haziran 2026"
    />
  );
}

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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: -2.03, etki: -0.223705997 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: 1.44, etki: 0.137088005 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 2.29, etki: 0.186863997 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: 3.8, etki: 0.263339997 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 0.15, etki: 0.00606 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: -0.61, etki: -0.023668001 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: 4.66, etki: 0.157041995 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: 0.29, etki: 0.00857561 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: 0.18, etki: 0.00516799 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 3.13, etki: 0.086075003 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: 1.06, etki: 0.028100507 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: -0.18, etki: -0.004620811 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -0.36, etki: -0.008078603 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 0.69, etki: 0.014421 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: 0.97, etki: 0.018236001 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: 0.39, etki: 0.006279 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: 0.15, etki: 0.001725 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -1.11, etki: -0.012654 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -2.41, etki: -0.024341001 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: 1.19, etki: 0.009389857 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: -3.47, etki: -0.026372 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: 0.0, etki: 0 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: -1.8, etki: -0.009364407 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: 0.37, etki: 0.001443 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: -0.8, etki: -0.00297011 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: 2.97, etki: 0.009801 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: -0.65, etki: -0.002015 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 0.16, etki: 0.000410095 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: 3.88, etki: 0.008924 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: 0.0, etki: 0 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 3.51, etki: 0.001404 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: 1.22, etki: 0.000244 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: -2.89, etki: -0.301427 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: -1.63, etki: -0.058191 },
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
      toplamEtki={0.25}
      sonGuncelleme="22 Haziran 2026"
    />
  );
}
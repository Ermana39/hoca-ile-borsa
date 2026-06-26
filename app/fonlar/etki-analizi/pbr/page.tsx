import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "PBR Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "PBR fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/pbr",
  },
  openGraph: {
    title: "PBR Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "PBR fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/pbr",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 3.45, etki: 0.32913 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 0.5282, etki: 0.043415493 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 1.9074, etki: 0.150871935 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 1.05, etki: 0.05628 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: -0.1566, etki: -0.00596711 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -0.61, etki: -0.019825 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 0.0648, etki: 0.001800518 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: 0.3951, etki: 0.009876543 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: 0.6849, etki: 0.015410959 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: -0.4663, etki: -0.007833828 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 1.3158, etki: 0.019473684 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: 1.6615, etki: 0.018609231 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: 0.362, etki: 0.003438914 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: 0.19, etki: 0.001748 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: -8.6879, etki: -0.074716312 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -0.7925, etki: -0.005309798 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 0.68, etki: 0.003876 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -0.12, etki: -0.000624 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: 1.0974, etki: 0.00515775 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: -0.332, etki: -0.001427781 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 0.6478, etki: 0.002720648 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -0.8204, etki: -0.003199635 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 0.1536, etki: 0.000583717 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: 1.98, etki: 0.007326 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: 0.2141, etki: 0.000513919 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0, etki: 0 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: -4.68, etki: -0.459108 },
];

export default function PbrEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PBR"
      fonAdi="Pusula Portföy Birinci Değişken Fon"
      fonTuru="Pusula Portföy Birinci Değişken Fon"
      slug="pbr"
      rows={rows}
      toplamFonOrani={77.26}
      toplamEtki={0.09}
      sonGuncelleme="26 Haziran 2026"
    />
  );
}

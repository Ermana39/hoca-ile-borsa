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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 3.4913, etki: 0.333067332 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 1.0423, etki: 0.08567458 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 1.5344, etki: 0.12137037 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 0.4560, etki: 0.024442997 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: -9.9303, etki: -0.378344948 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -4.4273, etki: -0.143886156 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: -0.2591, etki: -0.007202073 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: 0.1497, etki: 0.003742515 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: -0.9119, etki: -0.020516717 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: 2.4615, etki: 0.041353846 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 2.0423, etki: 0.030225352 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: -2.5779, etki: -0.028872902 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: -2.0073, etki: -0.019069343 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -2.8741, etki: -0.026442022 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: -0.7658, etki: -0.006585833 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -0.3720, etki: -0.00249256 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 7.5988, etki: 0.04331307 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -0.6355, etki: -0.003304448 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: 0.8169, etki: 0.003839346 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: -1.1293, etki: -0.004856014 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 0.6955, etki: 0.002921175 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -0.8772, etki: -0.003421053 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 2.8116, etki: 0.010683891 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: -0.1430, etki: -0.000528949 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -0.8696, etki: -0.002086957 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.18, etki: 0.018648 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 0.83, etki: 0.081423 },
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
      toplamEtki={0.15}
      sonGuncelleme="30 Haziran 2026"
    />
  );
}

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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 6.9333, etki: 0.66144 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 0.8173, etki: 0.067180385 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 1.07, etki: 0.084637004 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 6.2284, etki: 0.33384083 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: -9.9608, etki: -0.379505882 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -3.1314, etki: -0.101769912 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: -0.0647, etki: -0.001799353 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: -1.4265, etki: -0.035661584 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: -0.53, etki: -0.011924999 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: -3.109, etki: -0.052231687 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 2.4531, etki: 0.036305916 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: 0.9685, etki: 0.010847458 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: -1.1722, etki: -0.011136159 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -2.04, etki: -0.018768 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 1.4239, etki: 0.012245955 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -2.3965, etki: -0.016056645 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 1.54, etki: 0.008778 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: 1.5845, etki: 0.008239437 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: -0.3392, etki: -0.001594301 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: -1.6657, etki: -0.007162687 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 4.1, etki: 0.01722 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: 4.78, etki: 0.018642001 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 0.9202, etki: 0.003496933 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: 0.6475, etki: 0.002395683 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -1.7094, etki: -0.004102564 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.09, etki: 0.009324 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 0.51, etki: 0.050031 },
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
      toplamEtki={0.68}
      sonGuncelleme="29 Haziran 2026"
    />
  );
}

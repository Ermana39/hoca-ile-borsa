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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 4.2169, etki: 0.402289157 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 0.8596, etki: 0.070659026 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 1.9802, etki: 0.156633663 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 0.5188, etki: 0.027808042 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: -8.8975, etki: -0.338994197 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -2.9412, etki: -0.095588235 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 1.1039, etki: 0.030688312 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: 1.1460, etki: 0.028649726 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: 0.7669, etki: 0.017254601 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: 2.7456, etki: 0.046126126 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 3.5197, etki: 0.052091097 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: 0.3077, etki: 0.003446154 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: 1.2104, etki: 0.011499069 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -1.4286, etki: -0.013142857 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 8.4887, etki: 0.073003215 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -1.5683, etki: -0.010507842 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 1.2994, etki: 0.00740678 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -0.6977, etki: -0.003627907 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: 0.8103, etki: 0.003808238 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: 0.8567, etki: 0.003683609 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 0.2302, etki: 0.000966999 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -0.7965, etki: -0.003106195 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 1.0347, etki: 0.003932003 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: 1.0737, etki: 0.003972799 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -0.9503, etki: -0.002280702 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: -0.02, etki: -0.002072 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 1.05, etki: 0.103005 },
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
      toplamEtki={0.58}
      sonGuncelleme="1 Temmuz 2026"
    />
  );
}

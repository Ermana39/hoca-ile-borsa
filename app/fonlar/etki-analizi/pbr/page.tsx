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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 5.7803, etki: 0.551445087 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 6.4773, etki: 0.532431818 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 1.1753, etki: 0.09296372 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 1.6129, etki: 0.086451613 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: -9.0234, etki: -0.343789809 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -2.2727, etki: -0.073863636 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 0.1285, etki: 0.00357097 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: -0.2463, etki: -0.006157635 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: 1.4460, etki: 0.032534247 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: 0.0835, etki: 0.001402923 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 1.6000, etki: 0.02368 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: -0.2454, etki: -0.002748466 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: -0.2760, etki: -0.002621895 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -2.5880, etki: -0.023809524 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 3.6752, etki: 0.031606402 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -4.4765, etki: -0.029992413 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: -9.9833, etki: -0.056904629 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -1.5808, etki: -0.008220141 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: -0.7368, etki: -0.003462827 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: 0.2265, etki: 0.000973952 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 2.0674, etki: 0.008683002 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -0.6244, etki: -0.002435326 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 0.1463, etki: 0.000555962 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: 1.2748, etki: 0.004716714 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -1.1070, etki: -0.002656827 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.57, etki: 0.059052 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 0.87, etki: 0.085347 },
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
      toplamEtki={0.96}
      sonGuncelleme="2 Temmuz 2026"
    />
  );
}

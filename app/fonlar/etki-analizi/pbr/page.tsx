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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 1.304681504, etki: 0.124466616 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: -0.817438692, etki: -0.06719346 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 3.305785124, etki: 0.261487603 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 3.225806452, etki: 0.172903226 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: 2.43902439, etki: 0.092926829 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -0.539447067, etki: -0.01753203 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: -1.829268293, etki: -0.050853659 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: -2.189781022, etki: -0.054744526 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: 0.076982294, etki: 0.001732102 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: -3.112840467, etki: -0.05229572 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 0.757575758, etki: 0.011212121 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: -3.534183082, etki: -0.039582851 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: -1.943462898, etki: -0.018462898 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -5.123339658, etki: -0.047134725 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 2.107873528, etki: 0.018127712 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: 1.753104456, etki: 0.0117458 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 0.377833753, etki: 0.002153652 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -1.327433628, etki: -0.006902655 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: -1.556420233, etki: -0.007315175 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: -2.410958904, etki: -0.010367123 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 0.579470199, etki: 0.002433775 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -3.924775143, etki: -0.015306623 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 0.078740157, etki: 0.000299213 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: 0.365230095, etki: 0.001351351 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -1.306740028, etki: -0.003136176 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.19, etki: 0.019684 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 1.44, etki: 0.141264 },
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
      toplamEtki={0.47}
      sonGuncelleme="23 Haziran 2026"
    />
  );
}
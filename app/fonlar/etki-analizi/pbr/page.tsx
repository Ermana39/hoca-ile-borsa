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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: -2.029999971, etki: -0.193661997 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 1.440000057, etki: 0.118368005 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 2.289999962, etki: 0.181138997 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 0.150000006, etki: 0.00804 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: 3.799999952, etki: 0.144779998 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: 4.659999847, etki: 0.151449995 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 0.183262065, etki: 0.005094685 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: 1.060396496, etki: 0.026509912 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: -0.612088753, etki: -0.013771997 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: 0.292682927, etki: 0.004917073 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 3.130000114, etki: 0.046324002 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: -0.804597701, etki: -0.009011494 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: -0.176366843, etki: -0.001675485 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -2.410000086, etki: -0.022172001 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 3.397435897, etki: 0.029217949 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -0.363901019, etki: -0.002438137 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: -3.470000029, etki: -0.019779 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -0.5, etki: -0.0026 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: 0.390625, etki: 0.001835938 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: -0.653238977, etki: -0.002808928 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 3.869999886, etki: 0.016254 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: 0.575657895, etki: 0.002245066 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 0.157728707, etki: 0.000599369 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: 0.370000005, etki: 0.001369 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -1.823092505, etki: -0.004375422 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.77, etki: 0.079772 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: -2.89, etki: -0.283509 },
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
      toplamEtki={0.26}
      sonGuncelleme="22 Haziran 2026"
    />
  );
}
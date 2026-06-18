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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: -1.49000001, etki: -0.142146001 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 5.03000021, etki: 0.413466017 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: -8.06000042, etki: -0.637546033 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 2.420000076, etki: 0.129712004 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: 1.809999943, etki: 0.068960998 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: 1.389999986, etki: 0.045175 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 3.970000029, etki: 0.110366001 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: 4.400000095, etki: 0.110000002 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: 2.099999905, etki: 0.047249998 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: 8.229999542, etki: 0.138263992 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 7.055749129, etki: 0.104425087 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: 8.569999695, etki: 0.095983997 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: 3.480000019, etki: 0.03306 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -0.090000004, etki: -0.000828 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 6.210000038, etki: 0.053406 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: 2.5, etki: 0.01675 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 0.800000012, etki: 0.00456 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: 3.809999943, etki: 0.019812 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: 3.549999952, etki: 0.016685 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: 2.611111111, etki: 0.011227778 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: -0.25999999, etki: -0.001092 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: 1.220000029, etki: 0.004758 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 1.120000005, etki: 0.004256 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: -0.600000024, etki: -0.00222 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: 1.139999986, etki: 0.002736 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 1.03, etki: 0.106708 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 3.84, etki: 0.376704 },
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
      toplamEtki={1.13}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
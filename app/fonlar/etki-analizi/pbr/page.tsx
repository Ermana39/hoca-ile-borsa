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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 2.8788, etki: 0.274636364 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: -2.0330, etki: -0.16710989 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 0.4571, etki: 0.03616 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 3.2738, etki: 0.17547619 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: -0.7937, etki: -0.030238095 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -1.6949, etki: -0.055084746 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 0.5590, etki: 0.015540373 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: -0.3731, etki: -0.009328358 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: -0.0769, etki: -0.001730769 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: -3.0120, etki: -0.05060241 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 0.1504, etki: 0.002225564 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: -0.3003, etki: -0.003363363 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: -0.5405, etki: -0.005135135 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: 0.5000, etki: 0.0046 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 2.7930, etki: 0.024019429 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: 0.1436, etki: 0.000961953 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 0.0627, etki: 0.000357591 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -2.0179, etki: -0.010493274 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: -0.5270, etki: -0.002476943 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: -0.6176, etki: -0.002655811 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 0.1646, etki: 0.000691358 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -1.6170, etki: -0.006306383 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 2.1243, etki: 0.008072384 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: -0.1456, etki: -0.000538574 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -1.0453, etki: -0.002508711 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.2, etki: 0.02072 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: -0.93, etki: -0.091233 },
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
      toplamEtki={0.12}
      sonGuncelleme="24 Haziran 2026"
    />
  );
}
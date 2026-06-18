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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: -1.49, etki: -0.164477612 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: 5.03, etki: 0.478418972 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: -8.06, etki: -0.657462857 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: 1.81, etki: 0.125565142 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 2.42, etki: 0.097741935 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: 2.1, etki: 0.081398601 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: 1.39, etki: 0.046805556 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: 8.23, etki: 0.241207689 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: 3.97, etki: 0.112076923 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 7.06, etki: 0.194033101 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: 4.4, etki: 0.116625917 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: 3.48, etki: 0.091150758 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: 2.5, etki: 0.055418502 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 2.71, etki: 0.056543086 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: 2.04, etki: 0.038426162 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: 3.55, etki: 0.057115127 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: -0.81, etki: -0.009260615 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: 2.42, etki: 0.027568627 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -0.09, etki: -0.000939535 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: 2.48, etki: 0.019607686 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 0.8, etki: 0.006117647 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: 2.13, etki: 0.015744681 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: 1.78, etki: 0.009260658 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: -0.6, etki: -0.002358277 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: 8.57, etki: 0.031714286 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: 0.74, etki: 0.002453532 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: 2.61, etki: 0.008094444 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 1.12, etki: 0.002902711 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: 1.88, etki: 0.004318182 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -2.18, etki: -0.004355503 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 5.5, etki: 0.002198068 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: 0.84, etki: 0.000167046 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 3.84, etki: 0.400512 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 3.84, etki: 0.137088 },
];

export default function PbrEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PBR"
      fonAdi="Pusula Portföy Birinci Değişken Fon"
      fonTuru="Pusula Portföy Birinci Değişken Fon"
      slug="pbr"
      rows={rows}
      toplamFonOrani={90.75}
      toplamEtki={1.62}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
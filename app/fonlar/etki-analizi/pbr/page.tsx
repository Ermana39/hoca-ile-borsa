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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: -1.492537313, etki: -0.14238806 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: 5.025409373, etki: 0.41308865 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: -8.057142857, etki: -0.63732 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 2.419354839, etki: 0.129677419 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: 1.811906816, etki: 0.06903365 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: 1.388888889, etki: 0.045138889 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 3.97, etki: 0.110366 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: 4.4, etki: 0.11 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: 2.097902098, etki: 0.047202797 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: 8.23, etki: 0.138264 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 7.055749129, etki: 0.104425087 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: 8.57, etki: 0.095984 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: 3.48, etki: 0.03306 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: -0.093023256, etki: -0.000855814 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 6.21, etki: 0.053406 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: 2.5, etki: 0.01675 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 0.80495356, etki: 0.004588235 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: 3.812316716, etki: 0.019824047 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: 3.547523427, etki: 0.01667336 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: 2.611111111, etki: 0.011227778 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: -0.255754476, etki: -0.001074169 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: 1.22, etki: 0.004758 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 1.116427432, etki: 0.004242424 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: -0.604686319, etki: -0.002237339 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: 1.13960114, etki: 0.002735043 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 1.03, etki: 0.106708 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 5.5797, etki: 0.54736857 },
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
      toplamEtki={1.3}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
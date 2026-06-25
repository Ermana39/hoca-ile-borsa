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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 6.7747, etki: 0.646303387 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: -4.4307, etki: -0.364206394 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 4.38, etki: 0.3464562 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 3.0259, etki: 0.162190202 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: 2.16, etki: 0.082296 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: 1.931, etki: 0.062758621 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: -4.6325, etki: -0.1287832 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: -5.1966, etki: -0.12991573 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: 1.1547, etki: 0.025981524 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: -2.3188, etki: -0.038956522 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 2.7027, etki: 0.04 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: -2.1084, etki: -0.023614458 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: 0.0906, etki: 0.000860507 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: 2.2886, etki: 0.021054726 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: -0.0591, etki: -0.000507974 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -0.5018, etki: -0.003362007 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 0.8777, etki: 0.005003135 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: -2.4027, etki: -0.012494279 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: -3.4437, etki: -0.01618543 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: 2.0904, etki: 0.008988701 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: 1.479, etki: 0.006211997 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -5.1038, etki: -0.019904844 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 0.3082, etki: 0.001171032 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: -0.656, etki: -0.002427114 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: -1.338, etki: -0.003211268 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 0.08, etki: 0.008288 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: -2.08, etki: -0.204048 },
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
      sonGuncelleme="25 Haziran 2026"
    />
  );
}

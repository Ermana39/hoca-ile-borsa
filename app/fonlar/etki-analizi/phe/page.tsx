import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "PHE fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
  },
  openGraph: {
    title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "PHE fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: 1.30, etki: 0.143775902 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: -0.82, etki: -0.077820163 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 3.31, etki: 0.269752066 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: 2.44, etki: 0.16902439 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 3.23, etki: 0.130322581 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: 0.08, etki: 0.002986913 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: -0.54, etki: -0.018179366 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: -3.11, etki: -0.091206226 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: -1.83, etki: -0.051585366 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 0.76, etki: 0.020833333 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: -2.19, etki: -0.058029197 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: -1.94, etki: -0.050918728 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: 1.75, etki: 0.038918919 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: -2.32, etki: -0.048389163 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: -2.84, etki: -0.053387424 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: -1.56, etki: -0.025058366 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: 0.74, etki: 0.008468336 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: 0.99, etki: 0.011279683 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -5.12, etki: -0.051745731 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: -3.99, etki: -0.031550509 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 0.38, etki: 0.002871537 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: -2.09, etki: -0.015448852 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: -2.75, etki: -0.014304207 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: 0.37, etki: 0.001424397 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: -3.53, etki: -0.013076477 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: 5.05, etki: 0.0166787 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: -2.41, etki: -0.007473973 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 0.08, etki: 0.000204724 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: -6.04, etki: -0.013894892 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: 1.86, etki: 0.00371517 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 0.00, etki: 0 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: 3.99, etki: 0.000798794 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 1.44, etki: 0.150192 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 2.35, etki: 0.083895 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={90.75}
      toplamEtki={0.43}
      sonGuncelleme="23 Haziran 2026"
    />
  );
}
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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: -1.49, etki: -0.164198001 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: 5.03, etki: 0.47885602 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: -8.06, etki: -0.657696034 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: 1.81, etki: 0.125432996 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 2.42, etki: 0.097768003 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: 2.1, etki: 0.081479996 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: 1.39, etki: 0.046843 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: 8.23, etki: 0.241138987 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: 3.97, etki: 0.111954001 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 7.06, etki: 0.194033101 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: 4.4, etki: 0.116600003 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: 3.48, etki: 0.091176 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: 2.5, etki: 0.0555 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 2.71, etki: 0.056639001 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: 2.04, etki: 0.038351999 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: 3.55, etki: 0.057154999 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: -0.81, etki: -0.009315 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: 2.42, etki: 0.027588001 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -0.09, etki: -0.000909 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: 2.48, etki: 0.019592 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 0.8, etki: 0.00608 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: 2.13, etki: 0.015762001 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: 1.78, etki: 0.009256 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: -0.6, etki: -0.00234 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: 8.57, etki: 0.031708999 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: 0.74, etki: 0.002442 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: 2.61, etki: 0.008094444 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 1.12, etki: 0.002902711 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: 1.88, etki: 0.004324 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -2.18, etki: -0.00436 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 5.5, etki: 0.0022 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: 0.84, etki: 0.000168 },
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
      toplamEtki={1.08}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
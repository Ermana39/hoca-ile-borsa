import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "TLY Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "TLY fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/tly",
  },
  openGraph: {
    title: "TLY Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "TLY fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/tly",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 2.70, etki: 0.4435 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: 2.63, etki: 0.4182 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 0.88, etki: 0.0935 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: -0.66, etki: -0.0601 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: -5.22, etki: -0.3188 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 0.55, etki: 0.0282 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 0.45, etki: 0.0089 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: -1.74, etki: -0.0106 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: -1.41, etki: -0.0072 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: -0.81, etki: -0.0025 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 3.03, etki: 0.0079 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: -2.65, etki: -0.0008 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: -6.85, etki: -0.0021 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 4.88, etki: 0.5514 },
];

export default function TlyEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="TLY"
      fonAdi="Tera Portföy Birinci Serbest Fonu"
      fonTuru="Tera Portföy Birinci Serbest Fonu"
      slug="tly"
      rows={rows}
      toplamFonOrani={78.37}
      toplamEtki={1.15}
      sonGuncelleme="25 Haziran 2026"
    />
  );
}
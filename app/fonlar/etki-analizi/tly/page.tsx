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
  { sembol: "DSTKF", fonOrani: 22.85, kapanisMarji: -1.57, etki: -0.3598 },
  { sembol: "OZATD", fonOrani: 14.3, kapanisMarji: 6.31, etki: 0.9024 },
  { sembol: "PEKGY", fonOrani: 7.73, kapanisMarji: -0.07, etki: -0.0054 },
  { sembol: "TEHOL", fonOrani: 7.14, kapanisMarji: 1.09, etki: 0.0777 },
  { sembol: "TERA", fonOrani: 6.63, kapanisMarji: -7.87, etki: -0.5217 },
  { sembol: "TRHOL", fonOrani: 5.61, kapanisMarji: -4.33, etki: -0.2429 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -4.26, etki: -0.0848 },
  { sembol: "SELEC", fonOrani: 1.04, kapanisMarji: 6.80, etki: 0.0707 },
  { sembol: "ALKLC", fonOrani: 0.54, kapanisMarji: 2.95, etki: 0.0159 },
  { sembol: "SVGYO", fonOrani: 0.52, kapanisMarji: 1.91, etki: 0.0099 },
  { sembol: "HEDEF", fonOrani: 0.27, kapanisMarji: -0.95, etki: -0.0026 },
  { sembol: "MANAS", fonOrani: 0.14, kapanisMarji: -0.72, etki: -0.0010 },
  { sembol: "DAPGM", fonOrani: 0.07, kapanisMarji: 1.38, etki: 0.0010 },
  { sembol: "TPKGY", fonOrani: 11.91, kapanisMarji: 0.00, etki: 0.0000 },
  { sembol: "HMV", fonOrani: 1.27, kapanisMarji: 0.81, etki: 0.0103 },
];

export default function TlyEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="TLY"
      fonAdi="Tera Portföy Birinci Serbest Fonu"
      fonTuru="Tera Portföy Birinci Serbest Fonu"
      slug="tly"
      rows={rows}
      toplamFonOrani={80.74}
      toplamEtki={-0.14}
      sonGuncelleme="3 Temmuz 2026"
    />
  );
}
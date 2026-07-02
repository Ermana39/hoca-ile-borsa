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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 1.60, etki: 0.2626 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: 5.96, etki: 0.9483 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: -9.98, etki: -1.0632 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: 1.27, etki: 0.1168 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: -4.26, etki: -0.2605 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 1.05, etki: 0.0534 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -5.18, etki: -0.1031 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: -0.51, etki: -0.0031 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 2.22, etki: 0.0113 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: -2.57, etki: -0.0080 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 1.61, etki: 0.0042 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: 2.78, etki: 0.0008 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: -2.64, etki: -0.0008 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 1.61, etki: 0.1819 },
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
      toplamEtki={0.14}
      sonGuncelleme="2 Temmuz 2026"
    />
  );
}
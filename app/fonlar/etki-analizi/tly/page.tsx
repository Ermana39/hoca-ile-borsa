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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 3.52, etki: 0.5776 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: 3.49, etki: 0.5551 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 1.30, etki: 0.1384 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: 1.07, etki: 0.0984 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: -1.92, etki: -0.1171 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 1.87, etki: 0.0952 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -0.96, etki: -0.0190 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: 1.04, etki: 0.0063 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 2.18, etki: 0.0111 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: 5.94, etki: 0.0184 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 0.52, etki: 0.0013 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: 2.37, etki: 0.0007 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: 1.49, etki: 0.0004 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 0.33, etki: 0.0373 },
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
      toplamEtki={1.40}
      sonGuncelleme="1 Temmuz 2026"
    />
  );
}
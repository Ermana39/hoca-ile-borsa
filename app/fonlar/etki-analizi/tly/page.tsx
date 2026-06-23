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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 0.76, etki: 0.1243 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: 0.86, etki: 0.1366 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 0.38, etki: 0.0402 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: 0.37, etki: 0.0335 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: 1.86, etki: 0.1135 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 0.00, etki: 0.0000 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -7.27, etki: -0.1447 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: 0.74, etki: 0.0045 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 0.19, etki: 0.0010 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: 3.51, etki: 0.0109 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 3.23, etki: 0.0084 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: 0.45, etki: 0.0001 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: -4.32, etki: -0.0013 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 8.33, etki: 0.9413 },
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
      toplamEtki={1.27}
      sonGuncelleme="23 Haziran 2026"
    />
  );
}
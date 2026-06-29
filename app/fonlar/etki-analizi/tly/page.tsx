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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 2.45, etki: 0.4026 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: 4.44, etki: 0.7060 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 1.54, etki: 0.1640 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: 0.65, etki: 0.0593 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: 9.99, etki: 0.6104 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 1.03, etki: 0.0526 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -2.19, etki: -0.0436 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: 1.41, etki: 0.0086 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 0.93, etki: 0.0048 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: 2.94, etki: 0.0091 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 6.23, etki: 0.0162 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: -0.87, etki: -0.0003 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: 3.58, etki: 0.0011 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 1.63, etki: 0.1842 },
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
      toplamEtki={2.17}
      sonGuncelleme="29 Haziran 2026"
    />
  );
}
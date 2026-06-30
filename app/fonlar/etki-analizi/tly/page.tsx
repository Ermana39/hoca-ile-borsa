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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 2.04, etki: 0.3351 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: -2.49, etki: -0.3963 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 7.60, etki: 0.8093 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: -0.14, etki: -0.0131 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: 4.30, etki: 0.2628 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 0.81, etki: 0.0411 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 3.14, etki: 0.0625 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: -1.60, etki: -0.0098 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 1.94, etki: 0.0099 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: -2.86, etki: -0.0089 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 0.46, etki: 0.0012 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: 4.17, etki: 0.0013 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: 3.52, etki: 0.0011 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: -4.00, etki: -0.4520 },
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
      toplamEtki={0.64}
      sonGuncelleme="30 Haziran 2026"
    />
  );
}
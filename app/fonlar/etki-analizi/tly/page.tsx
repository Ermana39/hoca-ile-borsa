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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 4.15, etki: 0.6810 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: -9.97, etki: -1.5852 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 1.04, etki: 0.1112 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: 3.73, etki: 0.3413 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: -2.83, etki: -0.1729 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: -0.46, etki: -0.0234 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: -9.93, etki: -0.1976 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: 0.07, etki: 0.0005 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 5.71, etki: 0.0291 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: -1.37, etki: -0.0043 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 2.36, etki: 0.0061 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: -0.44, etki: -0.0001 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: 5.30, etki: 0.0016 },
  { sembol: "TPKGYF1", fonOrani: 11.3, kapanisMarji: 0.85, etki: 0.0961 },
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
      toplamEtki={-0.72}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
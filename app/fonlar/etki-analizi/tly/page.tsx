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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 3.13, etki: 0.5136 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: 0.93, etki: 0.1479 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: -3.47, etki: -0.3696 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: 0.37, etki: 0.0339 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: 0.0, etki: 0.0 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 3.51, etki: 0.1790 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 0.18, etki: 0.0036 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: 0.15, etki: 0.0009 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: -4.23, etki: -0.0216 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: -0.86, etki: -0.0027 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 0.15, etki: 0.0004 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: -3.7, etki: -0.0011 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: 9.96, etki: 0.0030 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 1.69, etki: 0.1910 },
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
      toplamEtki={0.68}
      sonGuncelleme="22 Haziran 2026"
    />
  );
}
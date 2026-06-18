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
  { sembol: "DSTKF", fonOrani: 17.71, kapanisMarji: 2.14, etki: 0.3781 },
  { sembol: "OZATD", fonOrani: 17.16, kapanisMarji: -2.63, etki: -0.4516 },
  { sembol: "TERA", fonOrani: 11.5, kapanisMarji: -8.39, etki: -0.9649 },
  { sembol: "PEKGY", fonOrani: 9.89, kapanisMarji: -0.53, etki: -0.0524 },
  { sembol: "TRHOL", fonOrani: 6.59, kapanisMarji: -0.23, etki: -0.0155 },
  { sembol: "TEHOL", fonOrani: 5.5, kapanisMarji: 0.24, etki: 0.0133 },
  { sembol: "ANELE", fonOrani: 2.15, kapanisMarji: 6.11, etki: 0.1314 },
  { sembol: "ALKLC", fonOrani: 0.66, kapanisMarji: -0.73, etki: -0.0048 },
  { sembol: "SVGYO", fonOrani: 0.55, kapanisMarji: 1.74, etki: 0.0096 },
  { sembol: "TMPOL", fonOrani: 0.33, kapanisMarji: 1.57, etki: 0.0052 },
  { sembol: "HEDEF", fonOrani: 0.28, kapanisMarji: 3.33, etki: 0.0093 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: 0.50, etki: 0.0002 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: -4.07, etki: -0.0012 },
];

export default function TlyEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="TLY"
      fonAdi="Tera Portföy Birinci Serbest Fonu"
      fonTuru="Tera Portföy Birinci Serbest Fonu"
      slug="tly"
      rows={rows}
      toplamFonOrani={72.38}
      toplamEtki={-0.94}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 7.06, etki: 1.1585 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: -10.0, etki: -1.59 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 0.8, etki: 0.0852 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: -0.6, etki: -0.055 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: -2.18, etki: -0.1332 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 5.5, etki: 0.2805 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 1.67, etki: 0.0332 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: -0.81, etki: -0.0049 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 0.0, etki: 0.0 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: 4.53, etki: 0.014 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 2.42, etki: 0.0063 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: 2.94, etki: 0.0009 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: -9.98, etki: -0.003 },
  { sembol: "TPKGYF1", fonOrani: 11.3, kapanisMarji: 9.35, etki: 1.0561 },
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
      toplamEtki={0.85}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
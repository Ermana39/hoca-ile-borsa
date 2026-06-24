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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 0.15, etki: 0.0247 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: 2.16, etki: 0.3438 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 0.06, etki: 0.0067 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: -0.15, etki: -0.0133 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: -2.13, etki: -0.13 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 0.56, etki: 0.0283 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 9.8, etki: 0.1951 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: 0.58, etki: 0.0036 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: -0.19, etki: -0.001 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: -3.6, etki: -0.0112 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 3.27, etki: 0.0085 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: -3.12, etki: -0.0009 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: -7.32, etki: -0.0022 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 0, etki: 0 },
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
      toplamEtki={0.45}
      sonGuncelleme="24 Haziran 2026"
    />
  );
}
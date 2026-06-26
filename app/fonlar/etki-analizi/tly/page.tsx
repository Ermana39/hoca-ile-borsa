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
  { sembol: "DSTKF", fonOrani: 16.41, kapanisMarji: 1.32, etki: 0.2159 },
  { sembol: "OZATD", fonOrani: 15.9, kapanisMarji: -1.56, etki: -0.2484 },
  { sembol: "TERA", fonOrani: 10.65, kapanisMarji: 0.68, etki: 0.0728 },
  { sembol: "PEKGY", fonOrani: 9.16, kapanisMarji: 1.98, etki: 0.1815 },
  { sembol: "TRHOL", fonOrani: 6.11, kapanisMarji: -1.64, etki: -0.1001 },
  { sembol: "TEHOL", fonOrani: 5.1, kapanisMarji: 1.15, etki: 0.0588 },
  { sembol: "ANELE", fonOrani: 1.99, kapanisMarji: 1.33, etki: 0.0265 },
  { sembol: "ALKLC", fonOrani: 0.61, kapanisMarji: 0, etki: 0 },
  { sembol: "SVGYO", fonOrani: 0.51, kapanisMarji: 2.1, etki: 0.0107 },
  { sembol: "TMPOL", fonOrani: 0.31, kapanisMarji: -1.69, etki: -0.0052 },
  { sembol: "HEDEF", fonOrani: 0.26, kapanisMarji: 1.05, etki: 0.0027 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: -1.92, etki: -0.0006 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: -2.55, etki: -0.0008 },
  { sembol: "TPKGY", fonOrani: 11.3, kapanisMarji: 4.1, etki: 0.4633 },
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
      sonGuncelleme="26 Haziran 2026"
    />
  );
}
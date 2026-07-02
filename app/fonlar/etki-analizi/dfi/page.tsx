import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "DFI Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "DFI fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/dfi",
  },
  openGraph: {
    title: "DFI Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "DFI fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/dfi",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 3.355704698, etki: 1.792281879 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -4.866562009, etki: -0.547974882 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: 6.689342404, etki: 0.036122449 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: 2.937249666, etki: 0.005580774 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: 0.826446281, etki: 0.000247934 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: -2.49, etki: -0.660597 },
];

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="DFI"
      fonAdi="Atlas Portföy Serbest Fon"
      fonTuru="Atlas Portföy Serbest Fon"
      slug="dfi"
      rows={rows}
      toplamFonOrani={91.96}
      toplamEtki={0.63}
      sonGuncelleme="2 Temmuz 2026"
    />
  );
}

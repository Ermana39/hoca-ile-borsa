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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: -1.973684211, etki: -1.054144737 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: 2.247191011, etki: 0.253033708 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: 0.227272727, etki: 0.001227273 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: 0, etki: 0 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -1.944894652, etki: -0.000583468 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: 4.32, etki: 1.146096 },
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
      toplamEtki={0.35}
      sonGuncelleme="1 Temmuz 2026"
    />
  );
}

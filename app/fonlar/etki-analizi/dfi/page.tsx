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
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: -1.298701299, etki: -0.685064935 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: 0.99009901, etki: 0.11009901 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: -0.637619554, etki: -0.003379384 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -0.194552529, etki: -0.00036965 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -0.983606557, etki: -0.000295082 },
  { sembol: "ABG", fonOrani: 30.15, kapanisMarji: 3.46, etki: 1.04319 },
];

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="DFI"
      fonAdi="Atlas Portföy Serbest Fon"
      fonTuru="Atlas Portföy Serbest Fon"
      slug="dfi"
      rows={rows}
      toplamFonOrani={94.77}
      toplamEtki={0.46}
      sonGuncelleme="3 Temmuz 2026"
    />
  );
}

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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 0.651701665, etki: 0.34807386 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -6.210392902, etki: -0.699290241 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: 9.994353473, etki: 0.053969509 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -2.9143898, etki: -0.005537341 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: 0.952380952, etki: 0.000285714 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: 2.71, etki: 0.718963 },
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
      toplamEtki={0.42}
      sonGuncelleme="24 Haziran 2026"
    />
  );
}
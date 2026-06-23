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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 1.693667158, etki: 0.904587629 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: 1.937984496, etki: 0.218217054 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: -7.471264368, etki: -0.040344828 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -3.288314739, etki: -0.006247798 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -2.476780186, etki: -0.000743034 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: 2.27, etki: 0.602231 },
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
      toplamEtki={1.68}
      sonGuncelleme="23 Haziran 2026"
    />
  );
}
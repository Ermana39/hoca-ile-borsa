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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 0.847457627, etki: 0.452627119 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -5.5, etki: -0.6193 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: -4.291224687, etki: -0.023172613 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -1.199760048, etki: -0.002279544 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -1.676829268, etki: -0.000503049 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: 0.84, etki: 0.222852 },
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
      toplamEtki={0.03}
      sonGuncelleme="19 Haziran 2026"
    />
  );
}
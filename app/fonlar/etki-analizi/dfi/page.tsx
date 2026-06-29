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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 2.889358703, etki: 1.543206483 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -2.799377916, etki: -0.315209953 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: -4.079999924, etki: -0.022032 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -1.24508519, etki: -0.002365662 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -2.53968254, etki: -0.000761905 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: -1.13, etki: -0.299789 },
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
      toplamEtki={0.90}
      sonGuncelleme="29 Haziran 2026"
    />
  );
}

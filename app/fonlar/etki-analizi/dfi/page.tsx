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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 2.302158273, etki: 1.229582734 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -5.135135135, etki: -0.578216216 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: -4.876796715, etki: -0.026334702 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -1.813633521, etki: -0.003445904 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -0.628930818, etki: -0.000188679 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: -0.11, etki: -0.029183 },
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
      toplamEtki={0.59}
      sonGuncelleme="25 Haziran 2026"
    />
  );
}

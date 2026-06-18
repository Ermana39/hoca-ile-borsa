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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 0.776397516, etki: 0.414673913 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -5.820000172, etki: -0.655332019 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: -3.355079217, etki: -0.018117428 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: 0.907990315, etki: 0.001725182 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: 2.982731554, etki: 0.000894819 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: 1.0209, etki: 0.27084477 },
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
      toplamEtki={-0.26}
      sonGuncelleme="18 Haziran 2026"
    />
  );
}
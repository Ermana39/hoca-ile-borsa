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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: -0.210970464, etki: -0.112679325 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -8.404558405, etki: -0.946353276 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: -9.983810038, etki: -0.053912574 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -2.802547771, etki: -0.005324841 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: -0.316455696, etki: -0.0000949367 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: 2.17, etki: 0.575701 },
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
      toplamEtki={-0.54}
      sonGuncelleme="26 Haziran 2026"
    />
  );
}

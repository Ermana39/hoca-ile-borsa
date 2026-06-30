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
  { sembol: "IEYHO", fonOrani: 53.41, kapanisMarji: 4.109589041, etki: 2.194931507 },
  { sembol: "ISKPL", fonOrani: 11.26, kapanisMarji: -0.32, etki: -0.036032 },
  { sembol: "LIDER", fonOrani: 0.54, kapanisMarji: 10, etki: 0.054 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -0.597213006, etki: -0.001134705 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: 0.488599349, etki: 0.00014658 },
  { sembol: "ABG", fonOrani: 26.53, kapanisMarji: 2.3, etki: 0.61019 },
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
      toplamEtki={2.82}
      sonGuncelleme="30 Haziran 2026"
    />
  );
}

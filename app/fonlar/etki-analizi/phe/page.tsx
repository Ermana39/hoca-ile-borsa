import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata: Metadata = {
  title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "PHE fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
  },
  openGraph: {
    title: "PHE Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "PHE fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: 2.879, etki: 0.317242424 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: -2.033, etki: -0.193538462 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 0.457, etki: 0.037302857 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: -0.794, etki: -0.055 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 3.274, etki: 0.132261905 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: -0.077, etki: -0.002984615 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: -1.695, etki: -0.057118644 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: -3.012, etki: -0.088253012 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: 0.559, etki: 0.015763975 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 0.150, etki: 0.004135338 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: -0.373, etki: -0.00988806 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: -0.541, etki: -0.014162162 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: 0.144, etki: 0.003187365 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 0.656, etki: 0.013701462 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: 0.731, etki: 0.013736952 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: -0.527, etki: -0.008484848 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: 0.585, etki: 0.006725146 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -2.286, etki: -0.026061398 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: 0.500, etki: 0.00505 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: -0.163, etki: -0.001288744 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 0.063, etki: 0.000476788 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: -0.213, etki: -0.001577825 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: -0.943, etki: -0.00490294 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: -0.146, etki: -0.000567686 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: -0.300, etki: -0.001111111 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: -5.842, etki: -0.019278351 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: -0.618, etki: -0.001914655 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 2.124, etki: 0.00552321 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: -2.300, etki: -0.00529012 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -2.128, etki: -0.004255319 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 0.556, etki: 0.000222222 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -1.159, etki: -0.000231884 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: -0.93, etki: -0.096999 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 0.37, etki: 0.013209 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={90.75}
      toplamEtki={-0.02}
      sonGuncelleme="24 Haziran 2026"
    />
  );
}
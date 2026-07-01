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
  { sembol: "GUNDG", fonOrani: 11.02, kapanisMarji: 3.491, etki: 0.384738155 },
  { sembol: "KTLEV", fonOrani: 9.52, kapanisMarji: 1.042, etki: 0.099224088 },
  { sembol: "ODINE", fonOrani: 8.16, kapanisMarji: 1.534, etki: 0.125206349 },
  { sembol: "PASEU", fonOrani: 6.93, kapanisMarji: -9.930, etki: -0.688170732 },
  { sembol: "HEDEF", fonOrani: 4.04, kapanisMarji: 0.456, etki: 0.018423453 },
  { sembol: "THYAO", fonOrani: 3.88, kapanisMarji: -0.912, etki: -0.035379939 },
  { sembol: "TATEN", fonOrani: 3.37, kapanisMarji: -4.427, etki: -0.149198876 },
  { sembol: "TRALT", fonOrani: 2.93, kapanisMarji: 2.462, etki: 0.072123077 },
  { sembol: "AKBNK", fonOrani: 2.82, kapanisMarji: -0.259, etki: -0.007305699 },
  { sembol: "DSTKF", fonOrani: 2.75, kapanisMarji: 2.042, etki: 0.056161972 },
  { sembol: "YKBNK", fonOrani: 2.65, kapanisMarji: 0.150, etki: 0.003967066 },
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: 1.21, etki: 0.031713222 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -1.568, etki: -0.034817028 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 0.615, etki: 0.012861538 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: 0.775, etki: 0.014573643 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: 0.81, etki: 0.01304524 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: 1.038, etki: 0.011934766 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -0.205, etki: -0.002340862 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -1.429, etki: -0.014428571 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: -1.221, etki: -0.009649837 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 1.299, etki: 0.009875706 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: 0.362, etki: 0.002681159 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: 3.37, etki: 0.017524862 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: 1.074, etki: 0.004187545 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: 0.308, etki: 0.001138462 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: 1.132, etki: 0.003735849 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: 0.857, etki: 0.002655625 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 1.035, etki: 0.002690318 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: 0.903, etki: 0.002077922 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -1.916, etki: -0.003832753 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.867, etki: 0.000746667 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -0.974, etki: -0.000194805 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 1.05, etki: 0.109515 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 1.24, etki: 0.044268 },
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
      toplamEtki={0.50}
      sonGuncelleme="1 Temmuz 2026"
    />
  );
}

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
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: -2.007, etki: -0.052591241 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -0.372, etki: -0.008258929 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: 0.000, etki: 0 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: -1.124, etki: -0.021134389 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: 0.817, etki: 0.013151804 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: -1.605, etki: -0.018453683 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -1.550, etki: -0.017668464 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -2.874, etki: -0.029028741 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: -1.760, etki: -0.013904 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: 7.599, etki: 0.05775076 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: 0.510, etki: 0.00377276 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: -0.985, etki: -0.00512035 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: -0.143, etki: -0.000557541 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: -2.578, etki: -0.009538369 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: -1.487, etki: -0.004907063 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: -1.129, etki: -0.003500847 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 2.812, etki: 0.00731003 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: -1.829, etki: -0.004207317 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: 4.300, etki: 0.008600848 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 0.806, etki: 0.000322581 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -1.754, etki: -0.000350877 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 0.83, etki: 0.086569 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 1.63, etki: 0.058191 },
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
      toplamEtki={-0.07}
      sonGuncelleme="30 Haziran 2026"
    />
  );
}

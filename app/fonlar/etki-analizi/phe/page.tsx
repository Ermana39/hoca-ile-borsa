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
  { sembol: "TCELL", fonOrani: 2.62, kapanisMarji: -0.276, etki: -0.007230911 },
  { sembol: "MGROS", fonOrani: 2.22, kapanisMarji: -4.476, etki: -0.099377845 },
  { sembol: "SAHOL", fonOrani: 2.09, kapanisMarji: -0.561, etki: -0.011717635 },
  { sembol: "KCHOL", fonOrani: 1.88, kapanisMarji: -0.667, etki: -0.012533333 },
  { sembol: "ISCTR", fonOrani: 1.61, kapanisMarji: -0.737, etki: -0.011862023 },
  { sembol: "ALKLC", fonOrani: 1.15, kapanisMarji: -0.514, etki: -0.00590609 },
  { sembol: "BIMAS", fonOrani: 1.14, kapanisMarji: -1.92, etki: -0.021893004 },
  { sembol: "DAPGM", fonOrani: 1.01, kapanisMarji: -2.588, etki: -0.026138716 },
  { sembol: "TTKOM", fonOrani: 0.79, kapanisMarji: -0.412, etki: -0.003256389 },
  { sembol: "TERA", fonOrani: 0.76, kapanisMarji: -9.983, etki: -0.075872839 },
  { sembol: "GARAN", fonOrani: 0.74, kapanisMarji: 0.072, etki: 0.000534296 },
  { sembol: "ENKAI", fonOrani: 0.52, kapanisMarji: -1.603, etki: -0.008337787 },
  { sembol: "PEKGY", fonOrani: 0.39, kapanisMarji: 1.275, etki: 0.004971671 },
  { sembol: "AKSEN", fonOrani: 0.37, kapanisMarji: -0.245, etki: -0.000907975 },
  { sembol: "ALVES", fonOrani: 0.33, kapanisMarji: 0.0, etki: 0 },
  { sembol: "PGSUS", fonOrani: 0.31, kapanisMarji: 0.227, etki: 0.000702152 },
  { sembol: "IZFAS", fonOrani: 0.26, kapanisMarji: 0.146, etki: 0.000380395 },
  { sembol: "GUBRF", fonOrani: 0.23, kapanisMarji: 3.358, etki: 0.00772244 },
  { sembol: "TRHOL", fonOrani: 0.2, kapanisMarji: -4.263, etki: -0.008525755 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.047, etki: 0.000418848 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: 0.41, etki: 8.19672e-05 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 0.87, etki: 0.090741 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: 1.85, etki: 0.066045 },
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
      toplamEtki={0.69}
      sonGuncelleme="2 Temmuz 2026"
    />
  );
}

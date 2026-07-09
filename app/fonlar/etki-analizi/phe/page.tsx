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
  { sembol: "GUNDG", fonOrani: 11.87, kapanisMarji: 4.520, etki: 0.536524 },
  { sembol: "KTLEV", fonOrani: 10.26, kapanisMarji: -2.439, etki: -0.250243902 },
  { sembol: "ODINE", fonOrani: 8.8, kapanisMarji: 4.111, etki: 0.361777778 },
  { sembol: "PASEU", fonOrani: 7.47, kapanisMarji: -8.092, etki: -0.604465534 },
  { sembol: "HEDEF", fonOrani: 4.35, kapanisMarji: 7.712, etki: 0.335482826 },
  { sembol: "THYAO", fonOrani: 4.18, kapanisMarji: 0.360, etki: 0.015057637 },
  { sembol: "TATEN", fonOrani: 3.64, kapanisMarji: -3.280, etki: -0.119392 },
  { sembol: "TRALT", fonOrani: 3.15, kapanisMarji: 1.953, etki: 0.061523438 },
  { sembol: "AKBNK", fonOrani: 3.04, kapanisMarji: 0.136, etki: 0.004136054 },
  { sembol: "DSTKF", fonOrani: 2.96, kapanisMarji: 9.344, etki: 0.276596932 },
  { sembol: "YKBNK", fonOrani: 2.86, kapanisMarji: 0.374, etki: 0.010688735 },
  { sembol: "TCELL", fonOrani: 2.82, kapanisMarji: -0.368, etki: -0.01038674 },
  { sembol: "MGROS", fonOrani: 2.39, kapanisMarji: 1.487, etki: 0.035532081 },
  { sembol: "SAHOL", fonOrani: 2.25, kapanisMarji: -0.855, etki: -0.019230769 },
  { sembol: "KCHOL", fonOrani: 2.02, kapanisMarji: 0.638, etki: 0.012893617 },
  { sembol: "ISCTR", fonOrani: 1.74, kapanisMarji: 0.767, etki: 0.01334728 },
  { sembol: "ALKLC", fonOrani: 1.24, kapanisMarji: 9.935, etki: 0.123190718 },
  { sembol: "BIMAS", fonOrani: 1.23, kapanisMarji: 0.876, etki: 0.010774933 },
  { sembol: "DAPGM", fonOrani: 1.09, kapanisMarji: -0.426, etki: -0.004638298 },
  { sembol: "TTKOM", fonOrani: 0.85, kapanisMarji: -1.902, etki: -0.016170389 },
  { sembol: "TERA", fonOrani: 0.81, kapanisMarji: -1.605, etki: -0.013003344 },
  { sembol: "GARAN", fonOrani: 0.8, kapanisMarji: 0.524, etki: 0.004188482 },
  { sembol: "ENKAI", fonOrani: 0.56, kapanisMarji: 0.000, etki: 0 },
  { sembol: "PEKGY", fonOrani: 0.42, kapanisMarji: 2.239, etki: 0.009405178 },
  { sembol: "AKSEN", fonOrani: 0.4, kapanisMarji: 5.644, etki: 0.022574956 },
  { sembol: "ALVES", fonOrani: 0.35, kapanisMarji: -1.533, etki: -0.005363985 },
  { sembol: "PGSUS", fonOrani: 0.34, kapanisMarji: -0.400, etki: -0.001361556 },
  { sembol: "IZFAS", fonOrani: 0.28, kapanisMarji: -0.472, etki: -0.001322835 },
  { sembol: "GUBRF", fonOrani: 0.25, kapanisMarji: -0.543, etki: -0.001357958 },
  { sembol: "TRHOL", fonOrani: 0.21, kapanisMarji: -0.329, etki: -0.000690335 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.230, etki: 0.000492055 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -0.829, etki: -0.000165837 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: 0.46, etki: 0.047978 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: -0.45, etki: -0.016065 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={96.69}
      toplamEtki={0.82}
      sonGuncelleme="9 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 144628,
          bugun: 145604,
          degisim: 976,
        },
        fonToplamDeger: {
          dun: 71287371676,
          bugun: 70538990913,
          degisim: -748380763,
        },
        paraGirisiCikisi: -926912649,
        yorum:
          "PHE fonunda yatırımcı sayısının 976 kişi artmasına rağmen fon toplam değerinde 748,38 milyon TL düşüş ve 926,91 milyon TL net para çıkışı görülüyor. Bu ayrışma, yatırımcı adedindeki artışın fon büyüklüğünü desteklemek için yeterli olmadığını ve tutar bazında çıkış baskısının öne çıktığını gösteriyor. PHE için bu veri, kişi sayısı artarken para akışının negatif tarafta izlenmesi gerektiğini anlatıyor.",
      }}
    />
  );
}

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
      sonGuncelleme="7 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 139846,
          bugun: 141398,
          degisim: 1552,
        },
        fonToplamDeger: {
          dun: 69711168921,
          bugun: 70637539401,
          degisim: 926370480,
        },
        yorum:
          "PHE fonunda yatırımcı sayısının 1.552 kişi artması, geniş yatırımcı tabanına rağmen talebin devam ettiğini gösteriyor. Fon toplam değerindeki 926,37 milyon TL'lik yükseliş, katılımcı artışıyla birlikte fon büyüklüğünün de desteklendiğini anlatıyor. PHE için bu tablo, hem yatırımcı ilgisi hem de fon ölçeği açısından dengeli ve pozitif bir genişleme sinyali veriyor.",
      }}
    />
  );
}

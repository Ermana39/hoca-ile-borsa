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
  { sembol: "BIMAS", fonOrani: 1.23, kapanisMarji: 0.876, etki: 0.010774933 },
  { sembol: "TTKOM", fonOrani: 0.85, kapanisMarji: -1.902, etki: -0.016170389 },
  { sembol: "GARAN", fonOrani: 0.8, kapanisMarji: 0.524, etki: 0.004188482 },
  { sembol: "PEKGY", fonOrani: 0.42, kapanisMarji: 2.239, etki: 0.009405178 },
  { sembol: "PGSUS", fonOrani: 0.34, kapanisMarji: -0.400, etki: -0.001361556 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.230, etki: 0.000492055 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -0.829, etki: -0.000165837 },
    { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: 0.331, etki: 0.001951058 },
    { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: 0.443, etki: 0.00248337 },
    { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: -0.755, etki: -0.003021719 },
    { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 0.506, etki: 0.00197191 },
    { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: -1.228, etki: -0.004419643 },
    { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: 1.325, etki: 0.004503311 },
    { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 1.111, etki: 0.003777778 },
    { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: -0.19, etki: -0.000625592 },
    { sembol: "TERA", fonOrani: 0.26, kapanisMarji: -2.561, etki: -0.006658131 },
    { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: 0.408, etki: 0.000734694 },
    { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: 2.18, etki: 0.002615804 },
    { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: -0.575, etki: -0.000402556 },
    { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: 0.3, etki: 0.000150225 },
    { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: 9.965, etki: 0.003985866 },
    { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: 2.652, etki: 0.001060736 },
    { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: 0.749, etki: 0.002247839 },
    { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: 5.12, etki: 0.426496 },
    { sembol: "PCS", fonOrani: 8.27, kapanisMarji: 6.07, etki: 0.501989 },
    { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.12, etki: 0.003072 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={98.45}
      toplamEtki={0.96}
      sonGuncelleme="10 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 145604,
          bugun: 146098,
          degisim: 494,
        },
        fonToplamDeger: {
          dun: 70538990913,
          bugun: 70169952270,
          degisim: -369038643,
        },
        paraGirisiCikisi: -1132408162,
        yorum:
          "PHE fonunda yatırımcı sayısı 494 kişi artarken fon toplam değerinde 369,04 milyon TL düşüş ve 1,13 milyar TL net para çıkışı görülüyor. Bu tablo, kişi sayısındaki artışa rağmen tutar bazında çıkış baskısının güçlü kaldığını gösteriyor. PHE için yatırımcı adedi pozitif görünse de para akışı ve fon büyüklüğü tarafındaki negatif eğilim yakından izlenmeli.",
      }}
    />
  );
}

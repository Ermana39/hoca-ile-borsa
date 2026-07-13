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
      { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: -0.33, etki: -0.001944628 },
      { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: -0.883, etki: -0.004944812 },
      { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: 1.998, etki: 0.007992388 },
      { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 2.963, etki: 0.011553941 },
      { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: 2.034, etki: 0.007322034 },
      { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: 1.307, etki: 0.004444444 },
      { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: -3.226, etki: -0.010967742 },
      { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: 2.279, etki: 0.007521368 },
      { sembol: "TERA", fonOrani: 0.26, kapanisMarji: 3.548, etki: 0.009224704 },
      { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: 0.407, etki: 0.000731707 },
      { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: -1.0, etki: -0.0012 },
      { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: 2.635, etki: 0.001844473 },
      { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: 0.849, etki: 0.000424363 },
      { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: 9.961, etki: 0.003984576 },
      { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: 4.833, etki: 0.001933333 },
      { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: 0.114, etki: 0.000343249 },
      { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: 3.26, etki: 0.271558 },
      { sembol: "PCS", fonOrani: 8.27, kapanisMarji: 3.14, etki: 0.259678 },
      { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.13, etki: 0.003328 },
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
      toplamEtki={1.16}
      sonGuncelleme="13 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 146098,
          bugun: 146667,
          degisim: 569,
        },
        fonToplamDeger: {
          dun: 70169952270,
          bugun: 71269867679,
          degisim: 1099915409,
        },
        paraGirisiCikisi: 335199741,
        yorum:
          "PHE fonunda yatırımcı sayısı 569 kişi artarken fon toplam değeri 1,10 milyar TL yükseldi. Önceki kapanışta çıkış baskısı öne çıkan fonda bu kez 335,20 milyon TL net para girişi görülmesi, talep tarafında toparlanma sinyali veriyor. PHE için yatırımcı artışı ile para akışının aynı yönde dönmesi, kapanış tablosunu belirgin biçimde güçlendiriyor.",
      }}
    />
  );
}

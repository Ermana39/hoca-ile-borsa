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
  { sembol: "KTLEV", fonOrani: 8.92, kapanisMarji: 3.158, etki: 0.281684211 },
  { sembol: "ODINE", fonOrani: 8.81, kapanisMarji: 3.586, etki: 0.315914141 },
  { sembol: "GUNDG", fonOrani: 8.28, kapanisMarji: 3.061, etki: 0.253469388 },
  { sembol: "PASEU", fonOrani: 6.17, kapanisMarji: -0.721, etki: -0.044479918 },
  { sembol: "HEDEF", fonOrani: 4.75, kapanisMarji: 3.723, etki: 0.176861702 },
  { sembol: "THYAO", fonOrani: 4.42, kapanisMarji: -3.193, etki: -0.141132075 },
  { sembol: "AKBNK", fonOrani: 3.77, kapanisMarji: -1.600, etki: -0.06032 },
  { sembol: "TRALT", fonOrani: 3.6, kapanisMarji: -4.608, etki: -0.165898618 },
  { sembol: "YKBNK", fonOrani: 3.37, kapanisMarji: -2.960, etki: -0.09973819 },
  { sembol: "BALSU", fonOrani: 2.68, kapanisMarji: 9.955, etki: 0.266796407 },
  { sembol: "DSTKF", fonOrani: 2.58, kapanisMarji: -9.961, etki: -0.256992188 },
  { sembol: "ISCTR", fonOrani: 2.45, kapanisMarji: -0.581, etki: -0.014223512 },
  { sembol: "ANELE", fonOrani: 2.05, kapanisMarji: 7.001, etki: 0.143521421 },
  { sembol: "TATEN", fonOrani: 1.73, kapanisMarji: -0.751, etki: -0.012985822 },
  { sembol: "MGROS", fonOrani: 1.64, kapanisMarji: 0.080, etki: 0.001310951 },
  { sembol: "SAHOL", fonOrani: 1.62, kapanisMarji: -1.436, etki: -0.023270718 },
  { sembol: "BIMAS", fonOrani: 1.48, kapanisMarji: 0.470, etki: 0.00695302 },
  { sembol: "TCELL", fonOrani: 1.4, kapanisMarji: 1.869, etki: 0.026168224 },
  { sembol: "KCHOL", fonOrani: 1.3, kapanisMarji: -0.674, etki: -0.00876556 },
  { sembol: "TTKOM", fonOrani: 1.26, kapanisMarji: -0.431, etki: -0.005431034 },
  { sembol: "GARAN", fonOrani: 1.2, kapanisMarji: -1.783, etki: -0.021395349 },
  { sembol: "PEKGY", fonOrani: 0.73, kapanisMarji: 0.272, etki: 0.001986395 },
  { sembol: "PGSUS", fonOrani: 0.71, kapanisMarji: -2.820, etki: -0.020023502 },
  { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: 0.992, etki: 0.005853175 },
  { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: 0.334, etki: 0.001870824 },
  { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: -1.213, etki: -0.004850746 },
  { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 0.000, etki: 0 },
  { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: -0.554, etki: -0.001993355 },
  { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: -0.484, etki: -0.001645161 },
  { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 1.975, etki: 0.006716049 },
  { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: -3.528, etki: -0.011643454 },
  { sembol: "TERA", fonOrani: 0.26, kapanisMarji: 2.157, etki: 0.005609137 },
  { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: -0.810, etki: -0.00145749 },
  { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: 2.357, etki: 0.002828283 },
  { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: -1.628, etki: -0.001139637 },
  { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: 1.139, etki: 0.000569307 },
  { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: 9.994, etki: 0.003997662 },
  { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: -4.849, etki: -0.001939587 },
  { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: -5.943, etki: -0.017828571 },
  { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: -2.66, etki: -0.221578 },
  { sembol: "PCS", fonOrani: 8.27, kapanisMarji: -2.2, etki: -0.18194 },
  { sembol: "PRY", fonOrani: 2.56, kapanisMarji: 0.39, etki: 0.009984 },
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
      toplamEtki={0.19}
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
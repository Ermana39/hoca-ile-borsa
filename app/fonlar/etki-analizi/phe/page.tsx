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
  { sembol: "KTLEV", fonOrani: 8.92, kapanisMarji: 0.051, etki: 0.00455102 },
  { sembol: "ODINE", fonOrani: 8.81, kapanisMarji: 0.439, etki: 0.038659191 },
  { sembol: "GUNDG", fonOrani: 8.28, kapanisMarji: 2.772, etki: 0.229544554 },
  { sembol: "PASEU", fonOrani: 6.17, kapanisMarji: -3.579, etki: -0.220814315 },
  { sembol: "HEDEF", fonOrani: 4.75, kapanisMarji: -1.231, etki: -0.058461538 },
  { sembol: "THYAO", fonOrani: 4.42, kapanisMarji: -2.249, etki: -0.0994003 },
  { sembol: "AKBNK", fonOrani: 3.77, kapanisMarji: 2.143, etki: 0.080805617 },
  { sembol: "TRALT", fonOrani: 3.6, kapanisMarji: -1.836, etki: -0.066086957 },
  { sembol: "YKBNK", fonOrani: 3.37, kapanisMarji: -0.411, etki: -0.013835777 },
  { sembol: "BALSU", fonOrani: 2.68, kapanisMarji: 9.939, etki: 0.266358067 },
  { sembol: "DSTKF", fonOrani: 2.58, kapanisMarji: -9.978, etki: -0.25740347 },
  { sembol: "ISCTR", fonOrani: 2.45, kapanisMarji: 1.387, etki: 0.033978102 },
  { sembol: "ANELE", fonOrani: 2.05, kapanisMarji: 5.469, etki: 0.112109375 },
  { sembol: "TATEN", fonOrani: 1.73, kapanisMarji: 2.689, etki: 0.046521008 },
  { sembol: "MGROS", fonOrani: 1.64, kapanisMarji: -2.875, etki: -0.04715655 },
  { sembol: "SAHOL", fonOrani: 1.62, kapanisMarji: 0.28, etki: 0.004540359 },
  { sembol: "BIMAS", fonOrani: 1.48, kapanisMarji: 2.739, etki: 0.040534402 },
  { sembol: "TCELL", fonOrani: 1.4, kapanisMarji: 1.101, etki: 0.015412844 },
  { sembol: "KCHOL", fonOrani: 1.3, kapanisMarji: -0.209, etki: -0.002715405 },
  { sembol: "TTKOM", fonOrani: 1.26, kapanisMarji: -0.433, etki: -0.005454545 },
  { sembol: "GARAN", fonOrani: 1.2, kapanisMarji: 1.736, etki: 0.020836622 },
  { sembol: "PEKGY", fonOrani: 0.73, kapanisMarji: 0.136, etki: 0.000990502 },
  { sembol: "PGSUS", fonOrani: 0.71, kapanisMarji: 0.363, etki: 0.002575574 },
  { sembol: "ALKLC", fonOrani: 0.59, kapanisMarji: 3.995, etki: 0.02356909 },
  { sembol: "DAPGM", fonOrani: 0.56, kapanisMarji: 0.999, etki: 0.005593785 },
  { sembol: "BRSAN", fonOrani: 0.4, kapanisMarji: 3.872, etki: 0.015486308 },
  { sembol: "AKSEN", fonOrani: 0.39, kapanisMarji: 3.8, etki: 0.014820847 },
  { sembol: "ENKAI", fonOrani: 0.36, kapanisMarji: -0.111, etki: -0.000400891 },
  { sembol: "IZFAS", fonOrani: 0.34, kapanisMarji: 0.405, etki: 0.001377634 },
  { sembol: "IZENR", fonOrani: 0.34, kapanisMarji: 1.211, etki: 0.004116223 },
  { sembol: "TAVHL", fonOrani: 0.33, kapanisMarji: -0.48, etki: -0.001588065 },
  { sembol: "TERA", fonOrani: 0.26, kapanisMarji: 0.311, etki: 0.000807453 },
  { sembol: "ALVES", fonOrani: 0.18, kapanisMarji: -0.408, etki: -0.000734694 },
  { sembol: "TRHOL", fonOrani: 0.12, kapanisMarji: -0.658, etki: -0.000789474 },
  { sembol: "MOPAS", fonOrani: 0.07, kapanisMarji: -0.318, etki: -0.000222788 },
  { sembol: "EREGL", fonOrani: 0.05, kapanisMarji: 2.496, etki: 0.001248164 },
  { sembol: "BETAE", fonOrani: 0.04, kapanisMarji: 9.989, etki: 0.003995749 },
  { sembol: "TRMET", fonOrani: 0.04, kapanisMarji: -0.752, etki: -0.000300752 },
  { sembol: "GUBRF", fonOrani: 0.3, kapanisMarji: 0.425, etki: 0.00127582 },
  { sembol: "PKZ", fonOrani: 8.33, kapanisMarji: 3.25, etki: 0.270725 },
  { sembol: "PCS", fonOrani: 8.27, kapanisMarji: 2.04, etki: 0.168708 },
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
      toplamEtki={0.64}
      sonGuncelleme="14 Temmuz 2026"
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

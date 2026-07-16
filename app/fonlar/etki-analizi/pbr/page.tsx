import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata: Metadata = {
  title: "PBR Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "PBR fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/pbr",
  },
  openGraph: {
    title: "PBR Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "PBR fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/pbr",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "ODINE", fonOrani: 9.65, kapanisMarji: 1.456, etki: 0.140533981 },
  { sembol: "KTLEV", fonOrani: 9.29, kapanisMarji: 1.122, etki: 0.104222336 },
  { sembol: "GUNDG", fonOrani: 9.24, kapanisMarji: 0.578, etki: 0.053410405 },
  { sembol: "BALSU", fonOrani: 6.09, kapanisMarji: 2.477, etki: 0.150835913 },
  { sembol: "HEDEF", fonOrani: 4.73, kapanisMarji: 1.142, etki: 0.054029076 },
  { sembol: "PASEU", fonOrani: 4.52, kapanisMarji: -0.215, etki: -0.009725659 },
  { sembol: "TRALT", fonOrani: 3.4, kapanisMarji: 0.984, etki: 0.033464567 },
  { sembol: "THYAO", fonOrani: 2.73, kapanisMarji: 1.227, etki: 0.033496933 },
  { sembol: "ANELE", fonOrani: 2.3, kapanisMarji: -1.944, etki: -0.044722222 },
  { sembol: "TCELL", fonOrani: 1.67, kapanisMarji: 1.815, etki: 0.03030853 },
  { sembol: "TATEN", fonOrani: 1.58, kapanisMarji: 1.8, etki: 0.028445172 },
  { sembol: "DSTKF", fonOrani: 1.57, kapanisMarji: -9.96, etki: -0.156369478 },
  { sembol: "AKBNK", fonOrani: 1.13, kapanisMarji: -0.724, etki: -0.008176556 },
  { sembol: "YKBNK", fonOrani: 1.03, kapanisMarji: -1.296, etki: -0.013345112 },
  { sembol: "MGROS", fonOrani: 0.98, kapanisMarji: 3.125, etki: 0.030625 },
  { sembol: "SKBNK", fonOrani: 0.87, kapanisMarji: 1.067, etki: 0.00928 },
  { sembol: "DAPGM", fonOrani: 0.59, kapanisMarji: 3.846, etki: 0.022692308 },
  { sembol: "EREGL", fonOrani: 0.5, kapanisMarji: 5.205, etki: 0.026026743 },
  { sembol: "BRSAN", fonOrani: 0.48, kapanisMarji: 4.636, etki: 0.022254545 },
  { sembol: "TTKOM", fonOrani: 0.42, kapanisMarji: 2.0, etki: 0.0084 },
  { sembol: "MPARK", fonOrani: 0.4, kapanisMarji: 3.995, etki: 0.01598063 },
  { sembol: "PGSUS", fonOrani: 0.38, kapanisMarji: 1.024, etki: 0.003891566 },
  { sembol: "TERA", fonOrani: 0.25, kapanisMarji: 4.025, etki: 0.01006192 },
  { sembol: "DCTTR", fonOrani: 0.25, kapanisMarji: 2.265, etki: 0.005662021 },
  { sembol: "IZFAS", fonOrani: 0.24, kapanisMarji: 1.695, etki: 0.004067797 },
  { sembol: "PEKGY", fonOrani: 0.23, kapanisMarji: 0.271, etki: 0.000623306 },
  { sembol: "ANSGR", fonOrani: 0.2, kapanisMarji: 0.647, etki: 0.001294964 },
  { sembol: "BETAE", fonOrani: 0.08, kapanisMarji: -10.0, etki: -0.008 },
  { sembol: "MOPAS", fonOrani: 0.01, kapanisMarji: 4.534, etki: 0.000453384 },
  { sembol: "PKZ", fonOrani: 7.99, kapanisMarji: 0.05, etki: 0.003995 },
  { sembol: "PCS", fonOrani: 7.7, kapanisMarji: -1.85, etki: -0.14245 },
  { sembol: "PRY", fonOrani: 2.5, kapanisMarji: 0.26, etki: 0.0065 },
  { sembol: "PNU", fonOrani: 0.78, kapanisMarji: 0.26, etki: 0.002028 },
  { sembol: "PGH", fonOrani: 0.58, kapanisMarji: -1.08, etki: -0.006264 },
  { sembol: "PA2", fonOrani: 0.06, kapanisMarji: -0.43, etki: -0.000258 },
];

const ozet = fonEtkiOzetiGetir("pbr");

export default function PbrEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod={ozet.kod}
      fonAdi={ozet.fonAdi}
      fonTuru={ozet.fonTuru}
      slug={ozet.slug}
      rows={rows}
      toplamFonOrani={ozet.toplamFonOrani}
      toplamEtki={ozet.toplamEtki}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 69933,
          bugun: 71463,
          degisim: 1530,
        },
        fonToplamDeger: {
          dun: 35917810496,
          bugun: 36936656149,
          degisim: 1018845653,
        },
        paraGirisiCikisi: 709308626,
        yorum:
          "PBR fonunda yatırımcı sayısı 1.530 kişi artarken fon toplam değeri 1,02 milyar TL yükseldi. 709,31 milyon TL net para girişi, talebin önceki kapanışlara göre daha belirgin güçlendiğini gösteriyor. Portföy etkisinin +%0,41 seviyesinde kalması, ODINE ve BALSU katkısına rağmen DSTKF ve PCS tarafındaki baskının toplam etkiyi sınırladığını anlatıyor.",
      }}
    />
  );
}

import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata: Metadata = {
  title: "DFI Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
  description:
    "DFI fonu kapanış etki analizi, portföy hisselerinin günlük marjlarına göre ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkiyi gösterir.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/dfi",
  },
  openGraph: {
    title: "DFI Fonu Etki Analizi: Yarınki Fon Fiyatı Tahmini",
    description:
      "DFI fonunun portföy hisseleri, kapanış marjları ve ertesi gün fon fiyatına tahmini etkisi.",
    url: "https://www.hocaileborsa.com/fonlar/etki-analizi/dfi",
    type: "article",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 2.475, etki: 1.305361675 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: -4.643, etki: -0.516330691 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 2.954, etki: 0.015658013 },
  { sembol: "ABG", fonOrani: 29.82, kapanisMarji: -1.62, etki: -0.483084 },
];

const ozet = fonEtkiOzetiGetir("dfi");

export default function DfiEtkiAnaliziPage() {
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
          dun: 45593,
          bugun: 46585,
          degisim: 992,
        },
        fonToplamDeger: {
          dun: 26728833258,
          bugun: 27166382196,
          degisim: 437548938,
        },
        paraGirisiCikisi: 387256983,
        yorum:
          "DFI fonunda yatırımcı sayısı 992 kişi artarken fon toplam değeri 437,55 milyon TL yükseldi. 387,26 milyon TL net para girişi pozitif görünümü destekliyor. Portföy etkisinin +%0,32 seviyesinde kalması, IEYHO kaynaklı güçlü katkının ISKPL ve ABG tarafındaki negatif etkiyle kısmen dengelendiğini gösteriyor.",
      }}
    />
  );
}

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
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: -1.5, etki: -0.79125 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: 9.963, etki: 1.107845579 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 2.477, etki: 0.01312844 },
  { sembol: "ABG", fonOrani: 29.82, kapanisMarji: 1.75, etki: 0.52185 },
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
          dun: 44934,
          bugun: 45593,
          degisim: 659,
        },
        fonToplamDeger: {
          dun: 26133507267,
          bugun: 26728833258,
          degisim: 595325991,
        },
        paraGirisiCikisi: 443483111,
        yorum:
          "DFI fonunda yatırımcı sayısı 659 kişi artarken fon toplam değeri 595,33 milyon TL yükseldi. 443,48 milyon TL net para girişi pozitif tarafta kalırken portföy etkisi +%0,85 seviyesinde hesaplandı. ISKPL ve ABG katkısı güçlü kalmasına rağmen IEYHO tarafındaki negatif etki toplam getiriyi önceki kapanışa göre sınırlıyor.",
      }}
    />
  );
}

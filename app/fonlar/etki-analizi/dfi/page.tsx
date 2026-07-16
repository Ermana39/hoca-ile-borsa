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
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 0.313, etki: 0.16536052 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: 10.0, etki: 1.112 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 2.637, etki: 0.013973635 },
  { sembol: "ABG", fonOrani: 29.82, kapanisMarji: 0.11, etki: 0.032802 },
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
          dun: 44008,
          bugun: 44934,
          degisim: 926,
        },
        fonToplamDeger: {
          dun: 24922250362,
          bugun: 26133507267,
          degisim: 1211256905,
        },
        paraGirisiCikisi: 1118423134,
        yorum:
          "DFI fonunda yatırımcı sayısı 926 kişi artarken fon toplam değeri 1,21 milyar TL yükseldi. 1,12 milyar TL net para girişi, fon büyüklüğündeki artışın büyük ölçüde taze girişle beslendiğini gösteriyor. Portföy etkisinin +%1,32 seviyesine çıkması ise DFI için hem para akışı hem fiyat etkisi tarafında güçlü bir kapanış resmi oluşturuyor.",
      }}
    />
  );
}

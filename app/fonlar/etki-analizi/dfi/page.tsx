import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("dfi");

const rows: FonEtkiRow[] = [
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 0, etki: 0 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: 2.592, etki: 0.288207343 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 0, etki: 0 },
  { sembol: "ABG", fonOrani: 29.82, kapanisMarji: 0.83, etki: 0.247506 },
];

const ozet = fonEtkiOzetiGetir("dfi");

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod={ozet.kod}
      fonAdi={ozet.fonAdi}
      fonTuru={ozet.fonTuru}
      profilOzeti={ozet.profilOzeti}
      slug={ozet.slug}
      rows={rows}
      toplamFonOrani={ozet.toplamFonOrani}
      toplamEtki={ozet.toplamEtki}
      sonGuncelleme={fonEtkiSonGuncelleme.label}
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 47087,
          bugun: 47746,
          degisim: 659,
        },
        fonToplamDeger: {
          dun: 27564807757,
          bugun: 27916593150,
          degisim: 351785393,
        },
        paraGirisiCikisi: 134087043,
        yorum:
          "DFI günü 659 yeni yatırımcı, 134,09 milyon TL net para girişi ve 351,79 milyon TL fon değeri artışıyla tamamladı. Tahmini portföy etkisi +%0,54 oldu; katkının tamamı ISKPL ve ABG yükselişinden gelirken ağırlığı %52,75 olan IEYHO günü etkisiz kapattı. Az sayıdaki varlığa yoğunlaşan yapı nedeniyle iki hissenin sağladığı bu katkı önemli, ancak aynı yoğunlaşma sonraki seanslarda oynaklığı da artırabilir.",
      }}
    />
  );
}

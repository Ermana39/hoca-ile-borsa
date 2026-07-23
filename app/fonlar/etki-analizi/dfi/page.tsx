import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";
import {
  fonEtkiMetadataOlustur,
  fonEtkiOzetiGetir,
  fonEtkiSonGuncelleme,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("dfi");

const rows: FonEtkiRow[] = [
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: -0.311, etki: -0.163819876 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: 5.263, etki: 0.585263158 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: -9.579, etki: -0.05076796 },
  { sembol: "ABG", fonOrani: 29.82, kapanisMarji: 0.12, etki: 0.035784 },
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
          dun: 47746,
          bugun: 48221,
          degisim: 475,
        },
        fonToplamDeger: {
          dun: 27916593150,
          bugun: 28591506600,
          degisim: 674613450,
        },
        paraGirisiCikisi: 578476685,
        yorum:
          "DFI'ye 578,48 milyon TL net para girişi olurken yatırımcı sayısı 475 kişi, fon toplam değeri 674,61 milyon TL arttı. Tahmini portföy etkisi +%0,41'e ulaştı; ISKPL tek başına yaklaşık +0,59 puan katkı sağlarken IEYHO ve LIDER bu yükselişi sınırladı. Para akışı, yatırımcı ilgisi ve fon büyüklüğünün aynı yönde ilerlemesi günün güçlü tarafı; buna karşılık sonucun büyük ölçüde ISKPL hareketine dayanması yoğunlaşma riskini koruyor.",
      }}
    />
  );
}

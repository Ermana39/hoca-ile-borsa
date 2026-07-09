import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

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
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 1.476, etki: 0.778722721 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: -1.669, etki: -0.185614568 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: 0.858, etki: 0.004546917 },
  { sembol: "ABG", fonOrani: 29.82, kapanisMarji: 0.15, etki: 0.04473 },
];

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="DFI"
      fonAdi="Atlas Portföy Serbest Fon"
      fonTuru="Atlas Portföy Serbest Fon"
      slug="dfi"
      rows={rows}
      toplamFonOrani={94.22}
      toplamEtki={0.64}
      sonGuncelleme="9 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 41900,
          bugun: 42431,
          degisim: 531,
        },
        fonToplamDeger: {
          dun: 22581010012,
          bugun: 23060492846,
          degisim: 479482834,
        },
        paraGirisiCikisi: 356040896,
        yorum:
          "DFI fonunda yatırımcı sayısının 531 kişi artması, fonun yatırımcı tabanında istikrarlı genişlemenin sürdüğünü gösteriyor. Fon toplam değerindeki 479,48 milyon TL'lik yükselişe 356,04 milyon TL net para girişi eşlik ediyor. DFI için bu tablo, hem para akışı hem de fon büyüklüğü tarafında aynı yönde pozitif ve destekleyici bir güncel görünüm oluşturuyor.",
      }}
    />
  );
}

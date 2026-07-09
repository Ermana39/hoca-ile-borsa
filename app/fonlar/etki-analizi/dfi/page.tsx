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
  { sembol: "IEYHO", fonOrani: 52.75, kapanisMarji: 0.841423948, etki: 0.443851133 },
  { sembol: "ISKPL", fonOrani: 11.12, kapanisMarji: -3.088235294, etki: -0.343411765 },
  { sembol: "LIDER", fonOrani: 0.53, kapanisMarji: -9.99034749, etki: -0.052948842 },
  { sembol: "ECILC", fonOrani: 0.19, kapanisMarji: -4.396325459, etki: -0.008353018 },
  { sembol: "TURSG", fonOrani: 0.03, kapanisMarji: 1.328903654, etki: 0.000398671 },
  { sembol: "ABG", fonOrani: 30.15, kapanisMarji: 0.8, etki: 0.2412 },
];

export default function DfiEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="DFI"
      fonAdi="Atlas Portföy Serbest Fon"
      fonTuru="Atlas Portföy Serbest Fon"
      slug="dfi"
      rows={rows}
      toplamFonOrani={94.77}
      toplamEtki={0.28}
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

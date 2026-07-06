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
  { sembol: "ODINE", fonOrani: 8.8, kapanisMarji: -0.277, etki: -0.024376731 },
  { sembol: "PASEU", fonOrani: 7.47, kapanisMarji: 6.207, etki: 0.463655172 },
  { sembol: "HEDEF", fonOrani: 4.35, kapanisMarji: -1.090, etki: -0.047403846 },
  { sembol: "THYAO", fonOrani: 4.18, kapanisMarji: 3.892, etki: 0.162694611 },
  { sembol: "TATEN", fonOrani: 3.64, kapanisMarji: -1.575, etki: -0.057322835 },
  { sembol: "TRALT", fonOrani: 3.15, kapanisMarji: 1.186, etki: 0.037351779 },
  { sembol: "AKBNK", fonOrani: 3.04, kapanisMarji: -0.339, etki: -0.010305085 },
  { sembol: "DSTKF", fonOrani: 2.96, kapanisMarji: -4.400, etki: -0.13024 },
  { sembol: "YKBNK", fonOrani: 2.86, kapanisMarji: -1.473, etki: -0.042125197 },
  { sembol: "TCELL", fonOrani: 2.82, kapanisMarji: 1.306, etki: 0.036828358 },
  { sembol: "MGROS", fonOrani: 2.39, kapanisMarji: 1.028, etki: 0.024561265 },
  { sembol: "SAHOL", fonOrani: 2.25, kapanisMarji: -0.952, etki: -0.021428571 },
  { sembol: "KCHOL", fonOrani: 2.02, kapanisMarji: -0.844, etki: -0.017046414 },
  { sembol: "ISCTR", fonOrani: 1.74, kapanisMarji: 0.915, etki: 0.015918367 },
  { sembol: "ALKLC", fonOrani: 1.24, kapanisMarji: -1.218, etki: -0.015100287 },
  { sembol: "BIMAS", fonOrani: 1.23, kapanisMarji: 3.922, etki: 0.048235294 },
  { sembol: "DAPGM", fonOrani: 1.09, kapanisMarji: -1.468, etki: -0.015995807 },
  { sembol: "TTKOM", fonOrani: 0.85, kapanisMarji: -1.225, etki: -0.010416667 },
  { sembol: "TERA", fonOrani: 0.81, kapanisMarji: 0.538, etki: 0.004357767 },
  { sembol: "GARAN", fonOrani: 0.8, kapanisMarji: 0.150, etki: 0.001198502 },
  { sembol: "ENKAI", fonOrani: 0.56, kapanisMarji: -2.828, etki: -0.01583778 },
  { sembol: "PEKGY", fonOrani: 0.42, kapanisMarji: 0.000, etki: 0 },
  { sembol: "AKSEN", fonOrani: 0.4, kapanisMarji: 5.130, etki: 0.020519159 },
  { sembol: "ALVES", fonOrani: 0.35, kapanisMarji: -0.382, etki: -0.001335878 },
  { sembol: "PGSUS", fonOrani: 0.34, kapanisMarji: 0.402, etki: 0.00136703 },
  { sembol: "IZFAS", fonOrani: 0.28, kapanisMarji: -5.153, etki: -0.014428678 },
  { sembol: "GUBRF", fonOrani: 0.25, kapanisMarji: 0.932, etki: 0.002330044 },
  { sembol: "TRHOL", fonOrani: 0.21, kapanisMarji: -1.681, etki: -0.003529412 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 0.000, etki: 0 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: -0.166, etki: -0.0000331126 },
  { sembol: "PKZ", fonOrani: 10.43, kapanisMarji: -2.07, etki: -0.215901 },
  { sembol: "PCS", fonOrani: 3.57, kapanisMarji: -4.11, etki: -0.146727 },
];

export default function PheEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PHE"
      fonAdi="Pusula Portföy Hisse Senedi Fonu"
      fonTuru="Pusula Portföy Hisse Senedi Fonu"
      slug="phe"
      rows={rows}
      toplamFonOrani={96.69}
      toplamEtki={0.60}
      sonGuncelleme="6 Temmuz 2026"
      degisimVerisi={{
        yatirimciSayisi: {
          dun: 138836,
          bugun: 139846,
          degisim: 1010,
        },
        fonToplamDeger: {
          dun: 68887570867,
          bugun: 69711168921,
          degisim: 823598054,
        },
        yorum:
          "PHE fonunda 1.010 kişilik yatırımcı artışı, geniş yatırımcı kitlesine rağmen yeni katılımın devam ettiğini gösteren önemli bir sinyal. Fon toplam değerinin 823,60 milyon TL yükselmesi, hisse etkisi sınırlı negatif kalsa da fon büyüklüğünde istikrarlı bir genişleme olduğunu anlatıyor. Bu nedenle PHE tarafında ana mesaj, fiyat tahmininden çok yatırımcı talebinin canlı kalmasıdır.",
      }}
    />
  );
}

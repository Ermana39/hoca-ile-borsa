import type { Metadata } from "next";
import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import type { FonEtkiRow } from "../_components/FonEtkiTable";

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
  { sembol: "GUNDG", fonOrani: 9.54, kapanisMarji: 0.757575758, etki: 0.072272727 },
  { sembol: "KTLEV", fonOrani: 8.22, kapanisMarji: -2.688172043, etki: -0.220967742 },
  { sembol: "ODINE", fonOrani: 7.91, kapanisMarji: 2.921068987, etki: 0.231056557 },
  { sembol: "HEDEF", fonOrani: 5.36, kapanisMarji: 2.362204724, etki: 0.126614173 },
  { sembol: "PASEU", fonOrani: 3.81, kapanisMarji: 0.423728814, etki: 0.016144068 },
  { sembol: "TATEN", fonOrani: 3.25, kapanisMarji: -2.945205479, etki: -0.095719178 },
  { sembol: "AKBNK", fonOrani: 2.78, kapanisMarji: 0.920000017, etki: 0.025576 },
  { sembol: "YKBNK", fonOrani: 2.5, kapanisMarji: 1.590000033, etki: 0.039750001 },
  { sembol: "THYAO", fonOrani: 2.25, kapanisMarji: -0.529999971, etki: -0.011924999 },
  { sembol: "TRALT", fonOrani: 1.68, kapanisMarji: -1.059999943, etki: -0.017807999 },
  { sembol: "DSTKF", fonOrani: 1.48, kapanisMarji: 4.149715216, etki: 0.061415785 },
  { sembol: "AKSEN", fonOrani: 1.12, kapanisMarji: -0.457665904, etki: -0.005125858 },
  { sembol: "TCELL", fonOrani: 0.95, kapanisMarji: -2.24000001, etki: -0.02128 },
  { sembol: "DAPGM", fonOrani: 0.92, kapanisMarji: 0.558659218, etki: 0.005139665 },
  { sembol: "SKBNK", fonOrani: 0.86, kapanisMarji: 1.298701299, etki: 0.011168831 },
  { sembol: "MGROS", fonOrani: 0.67, kapanisMarji: -1.580000043, etki: -0.010586 },
  { sembol: "TERA", fonOrani: 0.57, kapanisMarji: 1.044226044, etki: 0.005952088 },
  { sembol: "MPARK", fonOrani: 0.52, kapanisMarji: 2.655367232, etki: 0.01380791 },
  { sembol: "ISCTR", fonOrani: 0.47, kapanisMarji: -0.709999979, etki: -0.003337 },
  { sembol: "PGSUS", fonOrani: 0.43, kapanisMarji: -0.540000021, etki: -0.002322 },
  { sembol: "DCTTR", fonOrani: 0.42, kapanisMarji: -0.598290598, etki: -0.002512821 },
  { sembol: "BRSAN", fonOrani: 0.39, kapanisMarji: -2.172164119, etki: -0.00847144 },
  { sembol: "IZFAS", fonOrani: 0.38, kapanisMarji: 0, etki: 0 },
  { sembol: "PEKGY", fonOrani: 0.37, kapanisMarji: 3.726235741, etki: 0.013787072 },
  { sembol: "ANSGR", fonOrani: 0.24, kapanisMarji: 4.295774648, etki: 0.010309859 },
  { sembol: "PHE", fonOrani: 10.36, kapanisMarji: 2.34, etki: 0.242424 },
  { sembol: "PKZ", fonOrani: 9.81, kapanisMarji: 5.17, etki: 0.507177 },
];

export default function PbrEtkiAnaliziPage() {
  return (
    <FonEtkiSeoPage
      kod="PBR"
      fonAdi="Pusula Portföy Birinci Değişken Fon"
      fonTuru="Pusula Portföy Birinci Değişken Fon"
      slug="pbr"
      rows={rows}
      toplamFonOrani={77.26}
      toplamEtki={0.98}
      sonGuncelleme="19 Haziran 2026"
    />
  );
}
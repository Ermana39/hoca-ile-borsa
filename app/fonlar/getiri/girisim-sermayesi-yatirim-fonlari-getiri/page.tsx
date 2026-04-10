import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Girişim Sermayesi Yatırım Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Girişim sermayesi yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <FonGetiriExcelPage
      title="Girişim Sermayesi Yatırım Fonları Getiri Analizi"
      description="Girişim sermayesi yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
      excelRelativePath="app/fonlar/getiri/girisim-sermayesi-yatirim-fonlari-getiri/data/girisim-sermayesi-yatirim-fonlari-getiri.xlsx"
      pageBasePath="/fonlar/getiri/girisim-sermayesi-yatirim-fonlari-getiri"
      backHref="/fonlar/getiri"
      searchParams={searchParams}
    />
  );
}
import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Borsa Yatırım Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Borsa yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <FonGetiriExcelPage
      title="Borsa Yatırım Fonları Getiri Analizi"
      description="Borsa yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
      excelRelativePath="app/fonlar/getiri/borsa-yatirim-fonlari-getiri/data/borsa-yatirim-fonlari-getiri.xlsx"
      pageBasePath="/fonlar/getiri/borsa-yatirim-fonlari-getiri"
      backHref="/fonlar/getiri"
      searchParams={searchParams}
    />
  );
}
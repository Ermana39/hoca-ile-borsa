import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Gayrimenkul Yatırım Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Gayrimenkul yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <FonGetiriExcelPage
      title="Gayrimenkul Yatırım Fonları Getiri Analizi"
      description="Gayrimenkul yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
      excelRelativePath="app/fonlar/getiri/gayrimenkul-yatirim-fonlari-getiri/data/gayrimenkul-yatirim-fonlari-getiri.xlsx"
      pageBasePath="/fonlar/getiri/gayrimenkul-yatirim-fonlari-getiri"
      backHref="/fonlar/getiri"
      searchParams={searchParams}
    />
  );
}
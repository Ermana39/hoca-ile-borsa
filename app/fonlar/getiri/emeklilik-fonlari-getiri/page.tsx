import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Emeklilik Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Emeklilik fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <FonGetiriExcelPage
      title="Emeklilik Fonları Getiri Analizi"
      description="Emeklilik fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
      excelRelativePath="app/fonlar/getiri/emeklilik-fonlari-getiri/data/emeklilik-fonlari-getiri.xlsx"
      pageBasePath="/fonlar/getiri/emeklilik-fonlari-getiri"
      backHref="/fonlar/getiri"
      searchParams={searchParams}
    />
  );
}
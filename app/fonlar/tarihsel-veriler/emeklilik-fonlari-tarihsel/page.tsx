import FonTarihselExcelPage from "../_components/FonTarihselExcelPage";

export const metadata = {
  title: "Emeklilik Fonları Tarihsel Veriler | Hoca İle Borsa",
  description: "Emeklilik fonlarının tarihsel verilerini inceleyin.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <FonTarihselExcelPage
      title="Emeklilik Fonları Tarihsel Veriler"
      description="Emeklilik fonlarının tarihsel verilerini inceleyin."
      excelRelativePath="app/fonlar/tarihsel-veriler/emeklilik-fonlari-tarihsel/data/emeklilik-fonlari-tarihsel.xlsx"
      pageBasePath="/fonlar/tarihsel-veriler/emeklilik-fonlari-tarihsel"
      backHref="/fonlar/tarihsel-veriler"
      searchParams={searchParams}
    />
  );
}
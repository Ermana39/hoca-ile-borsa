import FonTarihselExcelPage from "../_components/FonTarihselExcelPage";

export const metadata = {
  title: "Gayrimenkul Yatırım Fonları Tarihsel Veriler | Hoca İle Borsa",
  description: "Gayrimenkul yatırım fonlarının tarihsel verilerini inceleyin.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <FonTarihselExcelPage
      title="Gayrimenkul Yatırım Fonları Tarihsel Veriler"
      description="Gayrimenkul yatırım fonlarının tarihsel verilerini inceleyin."
      excelRelativePath="app/fonlar/tarihsel-veriler/gayrimenkul-yatirim-fonlari-tarihsel/data/gayrimenkul-yatirim-fonlari-tarihsel.xlsx"
      pageBasePath="/fonlar/tarihsel-veriler/gayrimenkul-yatirim-fonlari-tarihsel"
      backHref="/fonlar/tarihsel-veriler"
      searchParams={searchParams}
    />
  );
}
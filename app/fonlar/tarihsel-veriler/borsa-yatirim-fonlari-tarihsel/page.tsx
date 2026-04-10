import FonTarihselExcelPage from "../_components/FonTarihselExcelPage";

export const metadata = {
  title: "Borsa Yatırım Fonları Tarihsel Veriler | Hoca İle Borsa",
  description: "Borsa yatırım fonlarının tarihsel verilerini inceleyin.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <FonTarihselExcelPage
      title="Borsa Yatırım Fonları Tarihsel Veriler"
      description="Borsa yatırım fonlarının tarihsel verilerini inceleyin."
      excelRelativePath="app/fonlar/tarihsel-veriler/borsa-yatirim-fonlari-tarihsel/data/borsa-yatirim-fonlari-tarihsel.xlsx"
      pageBasePath="/fonlar/tarihsel-veriler/borsa-yatirim-fonlari-tarihsel"
      backHref="/fonlar/tarihsel-veriler"
      searchParams={searchParams}
    />
  );
}
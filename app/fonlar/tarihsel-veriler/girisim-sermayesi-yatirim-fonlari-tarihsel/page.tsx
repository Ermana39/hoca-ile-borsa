import FonTarihselExcelPage from "../_components/FonTarihselExcelPage";

export const metadata = {
  title: "Girişim Sermayesi Yatırım Fonları Tarihsel Veriler | Hoca İle Borsa",
  description: "Girişim sermayesi yatırım fonlarının tarihsel verilerini inceleyin.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <FonTarihselExcelPage
      title="Girişim Sermayesi Yatırım Fonları Tarihsel Veriler"
      description="Girişim sermayesi yatırım fonlarının tarihsel verilerini inceleyin."
      excelRelativePath="app/fonlar/tarihsel-veriler/girisim-sermayesi-yatirim-fonlari-tarihsel/data/girisim-sermayesi-yatirim-fonlari-tarihsel.xlsx"
      pageBasePath="/fonlar/tarihsel-veriler/girisim-sermayesi-yatirim-fonlari-tarihsel"
      backHref="/fonlar/tarihsel-veriler"
      searchParams={searchParams}
    />
  );
}
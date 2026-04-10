import FonTarihselExcelPage from "../_components/FonTarihselExcelPage";

export const metadata = {
  title: "Menkul Kıymet Yatırım Fonları Tarihsel Veriler | Hoca İle Borsa",
  description:
    "Menkul kıymet yatırım fonlarının tarihsel verilerini inceleyin.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <FonTarihselExcelPage
      title="Menkul Kıymet Yatırım Fonları Tarihsel Veriler"
      description="Menkul kıymet yatırım fonlarının tarihsel verilerini inceleyin."
      excelRelativePath="app/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari/data/menkul-kiymet-yatirim-fonlari-tarihsel.xlsx"
      pageBasePath="/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari"
      backHref="/fonlar/tarihsel-veriler"
      searchParams={searchParams}
    />
  );
}
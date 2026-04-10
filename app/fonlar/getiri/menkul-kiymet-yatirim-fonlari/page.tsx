import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

type Props = {
  searchParams: Promise<{
    q?: string;
    sort?: string;
    dir?: string;
  }>;
};

export default async function MenkulKiymetYatirimFonlariPage({
  searchParams,
}: Props) {
  return (
    <FonGetiriExcelPage
      title="Menkul Kıymet Yatırım Fonları"
      description="Menkul kıymet yatırım fonlarının getiri verilerini dönemsel olarak inceleyin."
      excelRelativePath="app/fonlar/getiri/data/menkul-kiymet-yatirim-fonlari.xlsx"
      pageBasePath="/fonlar/getiri/menkul-kiymet-yatirim-fonlari"
      backHref="/fonlar/getiri"
      searchParams={searchParams}
    />
  );
}
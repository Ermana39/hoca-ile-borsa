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
    <div className="min-h-screen bg-white">
      <FonTarihselExcelPage
        title="Menkul Kıymet Yatırım Fonları Tarihsel Veriler"
        description="Menkul kıymet yatırım fonlarının tarihsel verilerini inceleyin."
        excelRelativePath="app/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari/data/menkul-kiymet-yatirim-fonlari-tarihsel.xlsx"
        pageBasePath="/fonlar/tarihsel-veriler/menkul-kiymet-yatirim-fonlari"
        backHref="/fonlar/tarihsel-veriler"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Menkul Kıymet Yatırım Fonları Tarihsel Veriler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Menkul kıymet yatırım fonları tarihsel veriler sayfası, hisse senedi,
            borçlanma araçları, para piyasası ve karma varlıklara yatırım yapan
            fonların geçmiş performansını incelemek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada menkul kıymet yatırım fonlarının farklı
            dönemlerde gösterdiği getiri ve fiyat değişimlerini detaylı şekilde
            inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Tarihsel fon verileri, yatırımcıların kısa vadeli fiyat hareketlerini
            ve uzun vadeli büyüme trendlerini daha net görmesine yardımcı olur.
            Menkul kıymet yatırım fonlarının geçmiş performansını takip ederek
            hangi fonların belirli dönemlerde daha başarılı olduğunu analiz
            edebilir, yatırım kararlarınızı daha bilinçli şekilde verebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse senedi yoğun fonlar, tahvil ve bono fonları, karma fonlar ile
            farklı risk seviyelerine sahip yatırım fonları arasında karşılaştırma
            yapmak isteyen kullanıcılar için tarihsel veriler önemli bir referans
            sunar. Bu veriler risk ve getiri dengesini değerlendirmeyi kolaylaştırır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel ve geçmiş menkul kıymet yatırım fonu verileri, performans
            karşılaştırmaları, fon trend analizleri ve detaylı tarihsel incelemeler
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
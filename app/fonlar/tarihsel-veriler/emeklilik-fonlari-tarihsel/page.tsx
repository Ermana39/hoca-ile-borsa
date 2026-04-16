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
    <div className="min-h-screen bg-white">
      <FonTarihselExcelPage
        title="Emeklilik Fonları Tarihsel Veriler"
        description="Emeklilik fonlarının tarihsel verilerini inceleyin."
        excelRelativePath="app/fonlar/tarihsel-veriler/emeklilik-fonlari-tarihsel/data/emeklilik-fonlari-tarihsel.xlsx"
        pageBasePath="/fonlar/tarihsel-veriler/emeklilik-fonlari-tarihsel"
        backHref="/fonlar/tarihsel-veriler"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Emeklilik Fonları Tarihsel Veriler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Emeklilik fonları tarihsel veriler sayfası, bireysel emeklilik sistemi
            kapsamında yer alan fonların geçmiş performansını incelemek isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada emeklilik fonlarının
            farklı dönemlerde gösterdiği getirileri ve fiyat değişimlerini detaylı
            şekilde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            BES fon tarihsel verileri, yatırımcıların kısa vadeli dalgalanmaları
            ve uzun vadeli büyüme potansiyelini daha net görmesine yardımcı olur.
            Geçmiş performans incelemesi sayesinde hangi fonların belirli
            dönemlerde daha başarılı olduğunu analiz edebilir, yatırım tercihlerinizi
            buna göre şekillendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Hisse senedi yoğun fonlar, altın fonları, borçlanma araçları fonları
            ve dengeli emeklilik fonları gibi farklı kategoriler arasında
            karşılaştırma yapmak isteyen kullanıcılar için tarihsel veriler önemli
            bir referans niteliği taşır. Bu veriler risk ve getiri dengesini
            anlamayı kolaylaştırır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel ve geçmiş emeklilik fonu verileri, BES performans analizleri,
            fon karşılaştırmaları ve detaylı tarihsel incelemeler için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
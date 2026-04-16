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
    <div className="min-h-screen bg-white">
      <FonTarihselExcelPage
        title="Gayrimenkul Yatırım Fonları Tarihsel Veriler"
        description="Gayrimenkul yatırım fonlarının tarihsel verilerini inceleyin."
        excelRelativePath="app/fonlar/tarihsel-veriler/gayrimenkul-yatirim-fonlari-tarihsel/data/gayrimenkul-yatirim-fonlari-tarihsel.xlsx"
        pageBasePath="/fonlar/tarihsel-veriler/gayrimenkul-yatirim-fonlari-tarihsel"
        backHref="/fonlar/tarihsel-veriler"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Gayrimenkul Yatırım Fonları Tarihsel Veriler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Gayrimenkul yatırım fonları tarihsel veriler sayfası, gayrimenkul
            sektörüne yatırım yapan fonların geçmiş performansını incelemek isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada gayrimenkul yatırım
            fonlarının farklı dönemlerde gösterdiği fiyat hareketlerini ve getiri
            değişimlerini detaylı şekilde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Tarihsel fon verileri, yatırımcıların kısa vadeli dalgalanmaları ve
            uzun vadeli büyüme trendlerini daha net görmesini sağlar. Gayrimenkul
            yatırım fonlarının geçmiş performansını takip ederek hangi fonların
            belirli dönemlerde daha başarılı olduğunu analiz edebilir, yatırım
            kararlarınızı daha bilinçli şekilde verebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            GYO odaklı fonlar, kira geliri temalı fonlar ve proje bazlı yatırım
            stratejileri uygulayan fonlar arasında karşılaştırma yapmak isteyen
            kullanıcılar için tarihsel veriler önemli bir referans niteliği taşır.
            Bu veriler risk ve getiri dengesini anlamayı kolaylaştırır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel ve geçmiş gayrimenkul yatırım fonu verileri, performans
            karşılaştırmaları, fon trend analizleri ve detaylı tarihsel incelemeler
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
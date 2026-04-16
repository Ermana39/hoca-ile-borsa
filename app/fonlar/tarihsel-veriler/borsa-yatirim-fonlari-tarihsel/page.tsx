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
    <div className="min-h-screen bg-white">
      <FonTarihselExcelPage
        title="Borsa Yatırım Fonları Tarihsel Veriler"
        description="Borsa yatırım fonlarının tarihsel verilerini inceleyin."
        excelRelativePath="app/fonlar/tarihsel-veriler/borsa-yatirim-fonlari-tarihsel/data/borsa-yatirim-fonlari-tarihsel.xlsx"
        pageBasePath="/fonlar/tarihsel-veriler/borsa-yatirim-fonlari-tarihsel"
        backHref="/fonlar/tarihsel-veriler"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Borsa Yatırım Fonları Tarihsel Veriler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsa yatırım fonları tarihsel veriler sayfası, yatırım fonlarının
            geçmiş performansını detaylı şekilde incelemek isteyen kullanıcılar
            için hazırlanmıştır. Bu sayfada borsa yatırım fonlarının farklı
            dönemlerde gösterdiği fiyat ve performans değişimlerini inceleyebilir,
            geçmiş veriler üzerinden daha bilinçli değerlendirmeler yapabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Tarihsel fon verileri, yatırımcıların kısa vadeli dalgalanmaları ve
            uzun vadeli eğilimleri daha net görmesini sağlar. Borsa yatırım
            fonlarının geçmiş hareketlerini takip ederek hangi fonların belirli
            dönemlerde daha güçlü performans gösterdiğini analiz edebilir, kendi
            yatırım stratejinize daha uygun seçenekleri karşılaştırabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Özellikle endeks fonları, sektör bazlı borsa yatırım fonları ve farklı
            varlık sınıflarına odaklanan fonlar arasında karşılaştırma yapmak
            isteyenler için tarihsel veriler önemli bir referans sunar. Geçmiş
            performans incelemesi, fon seçimi yaparken risk ve getiri dengesini
            anlamayı kolaylaştırır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel ve geçmiş borsa yatırım fonu verileri, performans karşılaştırmaları,
            fon trend analizi ve detaylı tarihsel incelemeler için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
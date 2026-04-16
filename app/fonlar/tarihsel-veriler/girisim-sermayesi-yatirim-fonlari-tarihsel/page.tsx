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
    <div className="min-h-screen bg-white">
      <FonTarihselExcelPage
        title="Girişim Sermayesi Yatırım Fonları Tarihsel Veriler"
        description="Girişim sermayesi yatırım fonlarının tarihsel verilerini inceleyin."
        excelRelativePath="app/fonlar/tarihsel-veriler/girisim-sermayesi-yatirim-fonlari-tarihsel/data/girisim-sermayesi-yatirim-fonlari-tarihsel.xlsx"
        pageBasePath="/fonlar/tarihsel-veriler/girisim-sermayesi-yatirim-fonlari-tarihsel"
        backHref="/fonlar/tarihsel-veriler"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Girişim Sermayesi Yatırım Fonları Tarihsel Veriler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Girişim sermayesi yatırım fonları tarihsel veriler sayfası, yenilikçi
            şirketlere ve büyüme potansiyeli yüksek girişimlere yatırım yapan
            fonların geçmiş performansını incelemek isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada girişim sermayesi yatırım fonlarının farklı
            dönemlerde gösterdiği getiri ve fiyat değişimlerini detaylı şekilde
            inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Tarihsel fon verileri, yatırımcıların kısa vadeli dalgalanmaları ve
            uzun vadeli büyüme eğilimlerini daha net görmesine yardımcı olur.
            Girişim sermayesi fonlarının geçmiş performansını takip ederek hangi
            fonların belirli dönemlerde daha güçlü sonuçlar elde ettiğini analiz
            edebilir, yatırım kararlarınızı daha bilinçli şekilde verebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Teknoloji, sağlık, üretim, yazılım ve farklı sektörlerde faaliyet
            gösteren girişimlere yatırım yapan fonlar arasında karşılaştırma yapmak
            isteyen kullanıcılar için tarihsel veriler önemli bir referans sunar.
            Bu veriler risk ve getiri dengesini değerlendirmeyi kolaylaştırır.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel ve geçmiş girişim sermayesi yatırım fonu verileri, performans
            karşılaştırmaları, fon trend analizleri ve detaylı tarihsel incelemeler
            için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
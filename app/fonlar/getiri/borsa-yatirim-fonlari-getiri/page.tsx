import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Borsa Yatırım Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Borsa yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <div className="min-h-screen bg-white">
      <FonGetiriExcelPage
        title="Borsa Yatırım Fonları Getiri Analizi"
        description="Borsa yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
        excelRelativePath="app/fonlar/getiri/borsa-yatirim-fonlari-getiri/data/borsa-yatirim-fonlari-getiri.xlsx"
        pageBasePath="/fonlar/getiri/borsa-yatirim-fonlari-getiri"
        backHref="/fonlar/getiri"
        hideBottomAd
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Borsa Yatırım Fonları Getiri Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsa yatırım fonları getiri analizi sayfası, TEFAS verilerine göre
            işlem gören borsa yatırım fonlarının performansını karşılaştırmak
            isteyen yatırımcılar için hazırlanmıştır. Bu sayfada farklı fonların
            güncel ve geçmiş getiri oranlarını inceleyebilir, yatırım kararlarınızı
            daha bilinçli şekilde oluşturabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsa yatırım fonları, hisse senedi, endeks, altın, döviz ve farklı
            varlık gruplarına yatırım imkanı sunar. Getiri karşılaştırmaları
            sayesinde hangi fonların daha güçlü performans sergilediğini görebilir,
            risk ve kazanç dengesine göre size uygun seçenekleri değerlendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            TEFAS fon verileri kullanılarak hazırlanan bu analiz ekranı,
            yatırımcıların fon sıralaması yapmasına, geçmiş performansı izlemesine
            ve fonlar arasında detaylı karşılaştırma yapmasına yardımcı olur.
            Özellikle uzun vadeli yatırım planı yapan kullanıcılar için düzenli
            takip büyük avantaj sağlar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel borsa yatırım fonu getirileri, TEFAS fon karşılaştırmaları,
            performans analizleri ve kategori bazlı detaylı incelemeler için bu
            sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
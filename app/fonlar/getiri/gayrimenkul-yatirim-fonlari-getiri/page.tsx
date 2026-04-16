import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Gayrimenkul Yatırım Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Gayrimenkul yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <div className="min-h-screen bg-white">
      <FonGetiriExcelPage
        title="Gayrimenkul Yatırım Fonları Getiri Analizi"
        description="Gayrimenkul yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
        excelRelativePath="app/fonlar/getiri/gayrimenkul-yatirim-fonlari-getiri/data/gayrimenkul-yatirim-fonlari-getiri.xlsx"
        pageBasePath="/fonlar/getiri/gayrimenkul-yatirim-fonlari-getiri"
        backHref="/fonlar/getiri"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Gayrimenkul Yatırım Fonları Getiri Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Gayrimenkul yatırım fonları getiri analizi sayfası, gayrimenkul
            sektörüne yatırım yapan fonların performansını karşılaştırmak isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada TEFAS verilerine göre
            gayrimenkul yatırım fonlarının güncel ve geçmiş getiri oranlarını
            detaylı şekilde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Gayrimenkul fon getirileri, kira geliri potansiyeli, proje bazlı
            büyüme fırsatları ve sektörel değer artışlarından yararlanmak isteyen
            yatırımcılar için önemli fırsatlar sunabilir. Farklı fonların performans
            karşılaştırmasını yaparak size uygun yatırım seçeneklerini daha kolay
            değerlendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Gayrimenkul yatırım fonu performans analizi sayesinde GYO odaklı,
            ticari gayrimenkul temalı veya karma portföy yapısına sahip fonların
            hangi dönemlerde daha başarılı olduğunu görebilirsiniz. Bu veriler,
            uzun vadeli yatırım planı oluştururken önemli avantaj sağlar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel gayrimenkul yatırım fonu getirileri, TEFAS fon karşılaştırmaları,
            performans analizleri ve detaylı incelemeler için bu sayfayı düzenli
            olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
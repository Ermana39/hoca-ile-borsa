import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Emeklilik Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Emeklilik fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <div className="min-h-screen bg-white">
      <FonGetiriExcelPage
        title="Emeklilik Fonları Getiri Analizi"
        description="Emeklilik fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
        excelRelativePath="app/fonlar/getiri/emeklilik-fonlari-getiri/data/emeklilik-fonlari-getiri.xlsx"
        pageBasePath="/fonlar/getiri/emeklilik-fonlari-getiri"
        backHref="/fonlar/getiri"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Emeklilik Fonları Getiri Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Emeklilik fonları getiri analizi sayfası, bireysel emeklilik sistemi
            kapsamında işlem gören fonların performansını karşılaştırmak isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada TEFAS verilerine göre
            emeklilik fonlarının güncel ve geçmiş getiri oranlarını detaylı şekilde
            inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            BES fon getirileri, uzun vadeli birikim yapmak isteyen kullanıcılar
            için büyük önem taşır. Farklı risk seviyelerine sahip emeklilik
            fonlarını karşılaştırarak size uygun yatırım stratejisini belirleyebilir,
            birikimlerinizi daha verimli şekilde yönetebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Emeklilik fonu performans analizi sayesinde hisse senedi yoğun,
            altın, borçlanma araçları veya dengeli fonların hangi dönemlerde daha
            başarılı olduğunu görebilirsiniz. Bu veriler fon dağılımı yapmak ve
            uzun vadeli plan oluşturmak açısından önemli avantaj sağlar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel emeklilik fonu getirileri, BES fon karşılaştırmaları, TEFAS
            performans verileri ve uzun vadeli yatırım analizleri için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
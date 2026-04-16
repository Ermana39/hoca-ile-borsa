import FonGetiriExcelPage from "../_components/FonGetiriExcelPage";

export const metadata = {
  title: "Girişim Sermayesi Yatırım Fonları Getiri Analizi | Hoca İle Borsa",
  description:
    "Girişim sermayesi yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; dir?: string }>;
}) {
  return (
    <div className="min-h-screen bg-white">
      <FonGetiriExcelPage
        title="Girişim Sermayesi Yatırım Fonları Getiri Analizi"
        description="Girişim sermayesi yatırım fonlarını TEFAS getiri verilerine göre sıralayın ve karşılaştırın."
        excelRelativePath="app/fonlar/getiri/girisim-sermayesi-yatirim-fonlari-getiri/data/girisim-sermayesi-yatirim-fonlari-getiri.xlsx"
        pageBasePath="/fonlar/getiri/girisim-sermayesi-yatirim-fonlari-getiri"
        backHref="/fonlar/getiri"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Girişim Sermayesi Yatırım Fonları Getiri Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Girişim sermayesi yatırım fonları getiri analizi sayfası, yenilikçi
            şirketlere ve büyüme potansiyeli yüksek girişimlere yatırım yapan
            fonların performansını karşılaştırmak isteyen yatırımcılar için
            hazırlanmıştır. Bu sayfada TEFAS verilerine göre girişim sermayesi
            yatırım fonlarının güncel ve geçmiş getiri oranlarını detaylı şekilde
            inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Girişim sermayesi fon getirileri, yüksek büyüme potansiyeli taşıyan
            şirketlere dolaylı yatırım yapmak isteyen kullanıcılar için önemli bir
            alternatif sunar. Farklı fonların performansını karşılaştırarak teknoloji,
            sağlık, üretim, yazılım ve benzeri alanlara yönelen fonlar arasında
            daha bilinçli seçim yapabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Girişim sermayesi yatırım fonu performans analizi sayesinde farklı
            dönemlerde hangi fonların daha güçlü sonuçlar elde ettiğini görebilir,
            risk ve getiri dengesine göre kendi yatırım stratejinizi şekillendirebilirsiniz.
            Özellikle uzun vadeli büyüme odaklı yatırımcılar için bu veriler önemli
            avantaj sağlar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel girişim sermayesi yatırım fonu getirileri, TEFAS fon
            karşılaştırmaları, performans analizleri ve detaylı incelemeler için
            bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
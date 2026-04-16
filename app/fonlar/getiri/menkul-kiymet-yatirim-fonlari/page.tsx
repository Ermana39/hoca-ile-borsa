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
    <div className="min-h-screen bg-white">
      <FonGetiriExcelPage
        title="Menkul Kıymet Yatırım Fonları"
        description="Menkul kıymet yatırım fonlarının getiri verilerini dönemsel olarak inceleyin."
        excelRelativePath="app/fonlar/getiri/menkul-kiymet-yatirim-fonlari/data/menkul-kiymet-yatirim-fonlari-getiri.xlsx"
        pageBasePath="/fonlar/getiri/menkul-kiymet-yatirim-fonlari"
        backHref="/fonlar/getiri"
        searchParams={searchParams}
      />

      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Menkul Kıymet Yatırım Fonları Getiri Analizi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Menkul kıymet yatırım fonları getiri analizi sayfası, farklı varlık
            sınıflarına yatırım yapan fonların performansını karşılaştırmak isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfada menkul kıymet yatırım
            fonlarının dönemsel getiri verilerini inceleyebilir, fonların kısa ve
            uzun vadeli performansını daha detaylı değerlendirebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Menkul kıymet yatırım fonları; hisse senedi, borçlanma araçları, para
            piyasası ve karma varlık yapıları gibi farklı yatırım stratejilerine
            sahip olabilir. Getiri karşılaştırmaları sayesinde hangi fonların belirli
            dönemlerde daha güçlü performans gösterdiğini görebilir, yatırım
            tercihlerinizde daha bilinçli adımlar atabilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Fon performans analizi yaparken 1 ay, 3 ay, 6 ay, 1 yıl, 3 yıl ve 5 yıl
            gibi farklı dönemlerin birlikte değerlendirilmesi büyük önem taşır.
            Bu sayfadaki veriler, hem kısa vadeli fiyat hareketlerini hem de uzun
            vadeli büyüme eğilimlerini takip etmek isteyen kullanıcılar için önemli
            bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel menkul kıymet yatırım fonu getirileri, dönemsel fon
            karşılaştırmaları, performans analizleri ve detaylı incelemeler için bu
            sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
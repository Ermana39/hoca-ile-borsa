import Link from "next/link";

export const metadata = {
  title: "Fon Kapanış Etki Analizi | Hoca İle Borsa",
  description:
    "Yatırım fonlarının portföyündeki hisselerin günlük kapanış marjlarına göre fonun ertesi gün fiyatına olan tahmini etkisini gösteren hesaplama sayfaları.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi",
  },
};

const fonlar = [
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
  },
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu (Hisse Senedi Yoğun Fon)",
    href: "/fonlar/etki-analizi/phe",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
  },
];

export default function FonEtkiAnaliziPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/fonlar" prefetch={false} className="transition hover:text-blue-600">
            Fonlar
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Fon Kapanış Etki Analizi</span>
        </nav>

        <h1 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
          Fon Kapanış Etki Analizi
        </h1>

        <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600">
          Yatırım fonlarının portföyünde yer alan hisselerin gün içindeki
          kapanış marjları, fonun açıklanacak ertesi gün fiyatına doğrudan
          yansır. Bu sayfada, takip edilen fonların son portföy dağılımı ile
          günlük hisse kapanış marjları birleştirilerek fonun ertesi gün
          fiyatına olan tahmini etkisi hesaplanmaktadır. Aşağıdaki fonlardan
          birini seçerek detaylı etki tablosunu ve hesaplama mantığının
          açıklamasını görüntüleyebilirsiniz.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {fonlar.map((fon) => (
            <Link
              key={fon.href}
              href={fon.href}
              prefetch={false}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
            >
              <span className="text-xl font-bold text-zinc-900 group-hover:text-blue-700">
                {fon.kod}
              </span>
              <span className="mt-2 text-sm leading-6 text-slate-500">
                {fon.ad}
              </span>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
                Etki Analizini Gör →
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-10 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            Fon Etki Analizi Nedir, Nasıl Hesaplanır?
          </h2>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Fon etki analizi, bir yatırım fonunun portföyünde bulunan
            hisselerin fon içindeki ağırlıkları (fon oranı) ile bu
            hisselerin gün içindeki kapanış marjlarının (önceki kapanışa
            göre yüzdesel değişim) çarpılarak elde edilen değerlerin toplanması
            ile hesaplanır. Sonuç olarak ortaya çıkan toplam etki değeri,
            fonun ertesi gün açıklanacak birim pay fiyatındaki tahmini
            yüzdesel değişimi gösterir.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Bu yöntem, özellikle hisse senedi yoğun serbest fonlar ve hisse
            senedi fonları için TEFAS&apos;ta gün sonunda ilan edilecek fon
            fiyatını önceden tahmin etmek isteyen yatırımcılar için pratik
            bir gösterge sunar. Tablo üzerinde her hissenin fon oranı, kapanış
            marjı ve etkisi ayrı ayrı görüntülenir, böylece hangi hissenin
            fonu ne kadar yukarı veya aşağı çektiği kolayca anlaşılır.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            TLY, PHE ve PBR fonları için güncellenen etki tablolarına yukarıdaki
            kartlardan ulaşabilir, hangi hisselerin fon performansına en çok
            katkı sağladığını veya zarar verdiğini görebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Fon Etki Analizi ve Fon Fiyat Tahmini | Hoca İle Borsa",
  description:
    "TLY, PHE, PBR ve DFI fonlarının portföy hisseleri, kapanış marjları ve ertesi gün açıklanacak TEFAS fon fiyatına tahmini etkilerini takip edin.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi",
  },
};

const fonlar = [
  {
    kod: "TLY",
    ad: "Tera Portföy Birinci Serbest Fonu",
    href: "/fonlar/etki-analizi/tly",
    bg: "bg-blue-600",
    ring: "ring-blue-200",
    accent: "text-blue-700",
    accentBg: "group-hover:bg-blue-50",
  },
  {
    kod: "PHE",
    ad: "Pusula Portföy Hisse Senedi Fonu (Hisse Senedi Yoğun Fon)",
    href: "/fonlar/etki-analizi/phe",
    bg: "bg-emerald-600",
    ring: "ring-emerald-200",
    accent: "text-emerald-700",
    accentBg: "group-hover:bg-emerald-50",
  },
  {
    kod: "PBR",
    ad: "Pusula Portföy Birinci Değişken Fon",
    href: "/fonlar/etki-analizi/pbr",
    bg: "bg-orange-500",
    ring: "ring-orange-200",
    accent: "text-orange-700",
    accentBg: "group-hover:bg-orange-50",
  },
  {
    kod: "DFI",
    ad: "Atlas Portföy Serbest Fon",
    href: "/fonlar/etki-analizi/dfi",
    bg: "bg-violet-600",
    ring: "ring-violet-200",
    accent: "text-violet-700",
    accentBg: "group-hover:bg-violet-50",
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
          Fon Etki Analizi ve Fon Fiyat Tahmini
        </h1>

        <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600">
          Yatırım fonlarının portföyünde yer alan hisselerin gün içindeki
          kapanış marjları, fonun açıklanacak ertesi gün fiyatı için önemli bir
          ön gösterge sunar. Bu sayfada TLY, PHE, PBR ve DFI fonlarının son
          portföy dağılımı ile günlük hisse kapanış marjları birleştirilerek
          TEFAS fon fiyatına tahmini etki hesaplanmaktadır. Aşağıdaki fonlardan
          birini seçerek detaylı etki tablosunu, en çok etki eden hisseleri ve
          hesaplama mantığını görüntüleyebilirsiniz.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {fonlar.map((fon) => (
            <Link
              key={fon.href}
              href={fon.href}
              prefetch={false}
              className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)] ring-2 ring-transparent hover:${fon.ring}`}
            >
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${fon.bg} shadow-sm`}>
                <span className="text-base font-bold tracking-tight text-white">
                  {fon.kod}
                </span>
              </div>
              <span className={`text-lg font-bold text-zinc-900 group-hover:${fon.accent}`}>
                {fon.kod}
              </span>
              <span className="mt-1 text-sm leading-6 text-slate-500">
                {fon.ad}
              </span>
              <span className={`mt-4 inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold ${fon.accent} ${fon.accentBg} transition`}>
                Fiyat tahminini gör
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
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
            Bu yöntem, özellikle hisse senedi yoğun serbest fonlar, değişken
            fonlar ve hisse ağırlığı yüksek serbest fonlar için TEFAS&apos;ta
            gün sonunda ilan edilecek fon fiyatını önceden tahmin etmek isteyen
            yatırımcılar için pratik bir gösterge sunar. Tablo üzerinde her
            hissenin fon oranı, kapanış marjı ve etkisi ayrı ayrı görüntülenir,
            böylece hangi hissenin fonu ne kadar yukarı veya aşağı çektiği
            kolayca anlaşılır.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            TLY, PHE, PBR ve DFI fonları için güncellenen etki tablolarına
            yukarıdaki kartlardan ulaşabilir, hangi hisselerin fon performansına
            en çok katkı sağladığını veya zarar verdiğini görebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
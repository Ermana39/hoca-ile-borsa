export const metadata = {
  title: "Dikkat Çeken Hisseler | Hoca İle Borsa",
  description: "Gün içinde öne çıkan hisseler, dikkat çeken fiyat hareketleri ve yatırımcı ilgisinin arttığı alanlar.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/dikkat-cekenler" },
};
import Link from "next/link";

const haberler = [
  {
    title: "Geri alım yapan şirketler dikkat çekti",
    href: "/borsa/dikkat-cekenler/dikkat-cekenler-1",
  },
  {
    title: "Temettü kararları yatırımcıların radarında",
    href: "/borsa/dikkat-cekenler/dikkat-cekenler-2",
  },
    {
    title: "Stopaj Sonrası Gerçek Getiri: Fonlar BIST 100’ün Gerisinde mi Kaldı?",
    href: "/borsa/dikkat-cekenler/dikkat-cekenler-4",
  },
 
];

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function DikkatCekenlerPage() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-900">
            Dikkat Çekenler
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-700 md:text-base">
            Borsa ve finans gündeminde öne çıkan haberleri, dikkat çeken
            piyasa hareketlerini ve yatırımcıların takip ettiği önemli
            başlıkları bu sayfadan inceleyebilirsiniz.
          </p>
        </section>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="space-y-4">
          {haberler.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative block overflow-hidden rounded-2xl bg-white/80 px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.13)] md:px-6 md:py-6"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-slate-900 via-blue-700 to-emerald-500" />

              <div className="flex items-center gap-4 md:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-[0_8px_20px_rgba(15,23,42,0.25)] md:h-16 md:w-16 md:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    Piyasa Gündemi
                  </p>

                  <h2 className="text-lg font-black leading-7 tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-xl md:leading-8">
                    {item.title}
                  </h2>
                </div>

                <div className="hidden shrink-0 items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition duration-300 group-hover:bg-blue-700 md:flex">
                  Oku
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Dikkat Çekenler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Dikkat çekenler sayfası, Borsa İstanbul ve finans piyasalarında öne
            çıkan gelişmeleri hızlı şekilde takip etmek isteyen kullanıcılar için
            hazırlanmıştır. Bu sayfada yatırımcıların ilgisini çeken fonlar,
            hisseler, piyasa hareketleri ve güncel fırsatlar tek alanda
            listelenmektedir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Gün içerisinde yükselişiyle öne çıkan varlıklar, işlem hacmi artan
            hisseler, dikkat çeken fon performansları ve piyasada konuşulan önemli
            başlıklar yatırım kararlarında yol gösterici olabilir. Bu nedenle
            güncel fırsatları takip etmek isteyen kullanıcılar için dikkat çekenler
            bölümü önemli bir kaynak sunar.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Borsa yatırımcıları için hızlı bilgi akışı büyük önem taşır. Bu sayfa
            sayesinde öne çıkan gelişmeleri tek ekranda görebilir, piyasadaki
            fırsatları daha erken fark ederek kendi yatırım stratejinize göre
            değerlendirme yapabilirsiniz.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel borsa haberleri, dikkat çeken fonlar, öne çıkan hisseler,
            yatırım fırsatları ve piyasadaki önemli gelişmeler için bu sayfayı
            düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

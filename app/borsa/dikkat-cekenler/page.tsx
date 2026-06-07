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

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {haberler.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)] md:p-5"
            >
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                Piyasa Gündemi
              </p>
              <h2 className="text-base font-black leading-snug tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-lg">
                {item.title}
              </h2>
              <div className="mt-auto flex items-center gap-1 pt-3 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                <span>Oku</span>
                <span>→</span>
              </div>
            </Link>
          ))}
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
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı (404) | Hoca İle Borsa",
  description:
    "Aradığınız sayfa bulunamadı. Ana sayfa, halka arz, güncel haberler, günlük borsa özeti ve KAP haberlerine buradan ulaşabilirsiniz.",
  // 404 zaten dizine eklenmez; yine de açıkça noindex bırakıyoruz, follow açık
  // ki tarayıcılar sayfadaki yönlendirme bağlantılarını izleyebilsin.
  robots: { index: false, follow: true },
};

const baglantilar = [
  {
    href: "/",
    baslik: "Ana Sayfa",
    aciklama: "Piyasa gündemi, haberler ve araçlar tek ekranda.",
  },
  {
    href: "/halka-arz",
    baslik: "Halka Arz",
    aciklama: "Halka arz takvimi, izahnameler ve talep araçları.",
  },
  {
    href: "/haberler",
    baslik: "Güncel Haberler",
    aciklama: "Borsa ve şirketlere dair en güncel haber akışı.",
  },
  {
    href: "/borsa/gunluk-borsa-ozeti",
    baslik: "Günlük Borsa Özeti",
    aciklama: "BIST kapanışı, yükselen-düşenler ve para akışı.",
  },
  {
    href: "/haberler/kategori/kap-bildirimleri",
    baslik: "Önemli KAP Haberleri",
    aciklama: "KAP bildirimlerinin günlük özetleri ve öne çıkanlar.",
  },
];

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
        Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir.
        Aşağıdan hisse araması yapabilir veya sık kullanılan bölümlere
        geçebilirsiniz.
      </p>

      {/* Hisse araması (sitedeki arama /hisseler sayfasında çalışır). JS gerekmez. */}
      <form
        action="/hisseler"
        method="get"
        role="search"
        className="mt-8 flex w-full max-w-md items-center gap-2"
      >
        <input
          type="search"
          name="q"
          placeholder="Hisse kodu veya şirket adı ara (örn. ASELS)"
          aria-label="Hisse ara"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 md:text-base"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Ara
        </button>
      </form>

      <nav
        aria-label="Önerilen sayfalar"
        className="mt-10 grid w-full grid-cols-1 gap-3 text-left sm:grid-cols-2"
      >
        {baglantilar.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50"
          >
            <span className="flex items-center justify-between gap-2 text-sm font-semibold text-slate-800 group-hover:text-blue-700">
              {item.baslik}
              <span aria-hidden className="text-blue-600">
                →
              </span>
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-500">
              {item.aciklama}
            </span>
          </Link>
        ))}
      </nav>
    </main>
  );
}

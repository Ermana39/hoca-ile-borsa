import Link from "next/link";

const egitimIcerikleri = [
  { title: "Temettü nedir", href: "/temettu/temettu-egitimi/temettu-nedir" },
  { title: "Brüt / net temettü farkı", href: "/temettu/temettu-egitimi/brut-net-temettu-farki" },
  { title: "Hak kullanım tarihi ne demek", href: "/temettu/temettu-egitimi/hak-kullanim-tarihi-ne-demek" },
  { title: "Ödeme tarihi ne demek", href: "/temettu/temettu-egitimi/odeme-tarihi-ne-demek" },
  { title: "Temettü verimi nasıl hesaplanır", href: "/temettu/temettu-egitimi/temettu-verimi-nasil-hesaplanir" },
  { title: "Temettüden sonra fiyat neden düşer", href: "/temettu/temettu-egitimi/temettuden-sonra-fiyat-neden-duser" },
];

export default function TemettuEgitimiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/temettu"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Temettü Eğitimi</h1>

        <div className="space-y-3">
          {egitimIcerikleri.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
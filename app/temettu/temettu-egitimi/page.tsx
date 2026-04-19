import Link from "next/link";

const egitimIcerikleri = [
  { title: "Temettü nedir", href: "/temettu/temettu-egitimi/temettu-nedir" },
  { title: "Brüt / net temettü farkı", href: "/temettu/temettu-egitimi/brut-net-temettu-farki" },
  { title: "Hak kullanım tarihi ne demek", href: "/temettu/temettu-egitimi/hak-kullanim-tarihi-ne-demek" },
  { title: "Ödeme tarihi ne demek", href: "/temettu/temettu-egitimi/odeme-tarihi-ne-demek" },
  { title: "Temettü verimi nasıl hesaplanır", href: "/temettu/temettu-egitimi/temettu-verimi-nasil-hesaplanir" },
  { title: "Temettüden sonra fiyat neden düşer", href: "/temettu/temettu-egitimi/temettuden-sonra-fiyat-neden-duser" },
];

function ReklamAlani({ buyuk = false }: { buyuk?: boolean }) {
  return (
    <section
      aria-label="Reklam alanı"
      className={buyuk ? "min-h-[260px] w-full" : "min-h-[120px] w-full"}
    >
      <div className={buyuk ? "min-h-[260px] w-full" : "min-h-[120px] w-full"} />
    </section>
  );
}

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

        <section className="mb-8 rounded-2xl bg-zinc-50 p-6">
          <h1 className="mb-3 text-3xl font-bold text-zinc-900">Temettü Eğitimi</h1>
          <p className="text-base leading-7 text-zinc-700">
            Temettü eğitimi sayfasında, temettü yatırımında en çok merak edilen temel
            kavramları daha sade ve anlaşılır şekilde inceleyebilirsiniz. Temettü nedir,
            brüt ve net temettü farkı nasıl oluşur, hak kullanım tarihi ne anlama gelir,
            ödeme tarihi neden önemlidir, temettü verimi nasıl hesaplanır ve temettü sonrası
            hisse fiyatı neden düşer gibi konular bu bölümde adım adım ele alınır.
          </p>
        </section>

        <section className="mb-8">
          <ReklamAlani />
        </section>

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

        <section className="mt-8">
          <ReklamAlani buyuk />
        </section>

        <section className="mt-8 rounded-2xl bg-zinc-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-zinc-900">Temettü Eğitimi Hakkında</h2>
          <p className="text-base leading-7 text-zinc-700">
            Bu temettü eğitimi bölümü, borsada temettü mantığını öğrenmek isteyen yatırımcılar
            için hazırlanmıştır. Sayfada yer alan başlıklar; temettü kavramının temelini,
            ödeme sürecini, verim hesaplamasını ve fiyat üzerindeki etkilerini daha bilinçli
            yorumlayabilmeniz için düzenlenmiştir. Temettü hisseleriyle ilgilenen yatırımcılar
            için temel bilgiler bu eğitim sayfasında toplu ve erişilebilir şekilde sunulmaktadır.
          </p>
        </section>
      </div>
    </main>
  );
}
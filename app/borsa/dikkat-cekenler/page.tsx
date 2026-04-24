import Link from "next/link";

const haberler = [
    {
    title: "BİST100 Önemli Direnç Noktasında Negatif Uyumsuzluk",
    href: "/borsa/dikkat-cekenler/haber-3",
  },
  {
    title: "Banka hisselerinde önemli direnç noktası",
    href: "/borsa/dikkat-cekenler/haber-2",
  },
  {
    title: "Kazancı ile dikkat çeken Fonlar",
    href: "/borsa/dikkat-cekenler/haber-1",
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
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Dikkat Çekenler
        </h1>

        <div className="space-y-3">
          {haberler.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-xl border border-blue-200 bg-blue-50 px-4 py-4 text-base font-bold text-zinc-900 transition hover:bg-blue-100 md:text-lg"
            >
              {item.title}
            </Link>
          ))}
        </div>

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
import Image from "next/image";
import Link from "next/link";

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

export default function HalkaArzPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Halka Arz</h1>

        <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Link
            href="/halka-arz/kazanc-hesapla"
            prefetch={false}
            className="rounded-xl border border-blue-200 bg-blue-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-blue-200"
          >
            Kazanç Hesapla
          </Link>

          <Link
            href="/halka-arz/talep-hesapla"
            prefetch={false}
            className="rounded-xl border border-purple-200 bg-purple-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-purple-200"
          >
            Talep Hesapla
          </Link>
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/halka-arz/onayli-izahnameler"
            prefetch={false}
            aria-label="Onaylı İzahnameler"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/onayli-izahnameler.png"
                  alt="Onaylı izahnameler görseli"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
              <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                Onaylı İzahnameler
              </h2>
            </div>
          </Link>

          <Link
            href="/halka-arz/taslak-izahnameler"
            prefetch={false}
            aria-label="Taslak İzahnameler"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/taslak-izahnameler.png"
                  alt="Taslak izahnameler görseli"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
              <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                Taslak İzahnameler
              </h2>
            </div>
          </Link>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="mt-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center md:p-7">
            <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
              Güncel Halka Arz Bilgileri
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-zinc-700 md:text-base">
              Ekinciler Demir ve Çelik 22 Mayıs Cuma günü işleme başlıyor. Halka arzın seans içi güncel verilerini buradan takip edebilirsiniz.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>

        <section className="mt-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-7">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Halka Arz Sayfasında Neler Var?
            </h2>

            <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                Hoca İle Borsa Halka Arz sayfasında güncel halka arz gelişmeleri,
                onaylı izahnameler, taslak izahnameler, halka arz kazanç
                hesaplama aracı ve talep hesaplama bölümleri bir arada sunulur.
                Halka arz sürecini takip etmek isteyen yatırımcılar bu sayfa
                üzerinden yeni başvuruları, izahname detaylarını ve öne çıkan
                verileri daha kolay inceleyebilir.
              </p>

              <p>
                Yeni halka arz süreçlerinde şirket bilgileri, talep toplama
                tarihleri, halka arz fiyatı, dağıtım yöntemi ve yatırımcıların
                takip etmesi gereken temel başlıklar bu bölüm üzerinden
                paylaşılır.
              </p>

              <p>
                Halka arz takibi yapan kullanıcılar için hazırlanan bu bölüm;
                izahname inceleme, talep hesaplama, olası lot dağılımını
                değerlendirme ve güncel halka arz haberlerini takip etme gibi
                başlıklarda pratik bir kaynak sunar.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
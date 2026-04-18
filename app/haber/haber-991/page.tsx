import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "A101 halka arz mı oldu? Perakendede dev anlaşmanın perde arkası",
  description:
    "A101 halka arz mı oldu? Perakendede dev anlaşmanın perde arkası",
};

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

export default function Haber991Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber991.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              A101 halka arz mı oldu? Perakendede dev anlaşmanın perde arkası
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                A101’in sahibi Yeni Mağazacılık A.Ş., CarrefourSA’daki toplam %89,28 payın devri için anlaşmaya vardı. 17 Nisan 2026’da imzalanan pay devir sözleşmesiyle birlikte CarrefourSA’da yönetim kontrolünün el değiştirmesi bekleniyor.
              </p>

              <p>Sürecin tamamlanması ise Rekabet Kurumu onayı dahil kapanış şartlarına bağlı.

Perakende sektöründe son dönemin en dikkat çekici hamlelerinden biri olarak öne çıkan bu gelişme, borsa tarafında da yakından izleniyor.</p>
            </div>
          </div>
        </article>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}
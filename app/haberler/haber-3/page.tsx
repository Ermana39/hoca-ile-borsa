import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Haftalık Fon Performansları",
  description:
    "Haftalık Fon Performansları",
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

export default function Haber1Page() {
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
              src="/haber-3v.png"
              alt="Haftalık Fon Performansları"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              10 Nisan 2026 haftalık verilere bakıldığında, en dikkat çeken performans Atlas Portföy Sanayi Sektörü Hisse Senedi Fonu (ASR)’de görüldü. ASR, %59’un üzerindeki getirisiyle haftanın en güçlü fonlarından biri oldu.
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Hisse senedi fonları tarafında Hedef Portföy Başak Hisse Senedi Fonu (HKM) %22’nin üzerinde getiri sağlarken, Pardus Portföy Model Portföy Hisse Senedi Fonu (PMP) ile Foneva Portföy Birinci Hisse Senedi Fonu (FRC) da %22 civarındaki performanslarıyla öne çıktı.
              </p>

              <p>Haftalık bazda sadece hisse senedi yoğun fonlar değil, diğer fon gruplarında da dikkat çeken hareketler görüldü. Karma ve değişken fonlar tarafında NZH, DBP, SVB, SUB ve ZDZ öne çıkarken, borsa yatırım fonlarında İş Bankası A Tipi Teknoloji Endeksi Fonu %7,19, Garanti Bankası A Tipi Temettü Endeksi Fonu ise %1,60 getiri sağladı. Fon sepeti fonları içinde ise İş Portföy Sürdürülebilirlik ve Tarım Fon Sepeti Fonu (TMZ) dikkat çekti.</p>
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
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "2026 yılı ilk çeyrek bilançolarının olası açıklanma tarihleri;",
  description:
    "2026 yılı ilk çeyrek bilançolarının olası açıklanma tarihleri;",
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

export default function Haber987Page() {
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
              src="/haber987.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              2026 yılı ilk çeyrek bilançolarının olası açıklanma tarihleri;
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                27.04.2026 AFYON, TAVHL
28.04.2026 AKBNK, ASELS, BIGCH
28.04.2026 EREGL, LILAK
29.04.2026 AGESA, ANSGR, CIMSA, GARAN
29.04.2026 ISGYO, THYAO, TKNSA
29.04.2026 TSKB, TTRAK, YKBNK
30.04.2026 EBEBK, KLYPV, TRALT
04.05.2026 CCOLA, ENJSA
05.05.2026 AEFES, BRISA, FROTO
05.05.2026 ISCTR, MGROS, OTKAR
05.05.2026 TATGD, TOASO
06.05.2026 AYGAZ, MPARK, SAHOL
06.05.2026 TTKOM, TUPRS 
07.05.2026 AKMGY, AKSA, BIZIM
07.05.2026 BRSAN, DOHOL, RGYAS
08.05.2026 ALARK, ALBRK, KCHOL, OZYSR
04-08.05.2026 KOTON
09.05.2026 AGHOL
11.05.2026 BIMAS, DOAS, ENKAI
11.05.2026 KFEIN, PGSUS, TCELL
11.05.2026 TRMET, ULKER
07-11.05.2026 YATAS
              </p>

              <p></p>
              <p></p>
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
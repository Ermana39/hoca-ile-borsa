import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TCMB rezervlerinde hızlı toparlanma görüldü.",
  description: "Türkiye CDS primi 240 baz puan seviyesinde",
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

export default function Haber994Page() {
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
            href="/haberler"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber994.png"
              alt="Türkiye CDS primi 240 baz puan seviyesinde görseli"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              TCMB rezervlerinde hızlı toparlanma görüldü.
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Türkiye Cumhuriyet Merkez Bankası rezervleri 10 Nisan haftasında hızlı bir toparlanma kaydetti.
              </p>

              <p>
                Swap hariç net rezervlerdeki toparlanma 12 milyar doları buldu.
              </p>

              <p>
                ABD-İsrail’in Orta Doğu’da başlattığı savaş nedeniyle baskı altında kalan rezerv varlıklarda geçen hafta toparlanma yaşandı.
              </p>

              <p>Türkiye Cumhuriyet Merkez Bankası verilerine göre, 10 Nisan haftasında brüt rezervler 9,3 milyar dolar artarak 170,9 milyar dolara yükseldi.Ancak küresel faiz politikaları ve jeopolitik gelişmeler CDS üzerinde belirleyici olmaya devam ediyor.
              </p>

              <p>
                Net rezervler de aynı dönemde 10 milyar dolar artış kaydederek 55,6 milyar dolar seviyesine çıktı.

Öte yandan swap hariç net rezervlerde de savaş sonrası süreçte ilk kez toparlanma görüldü. Swap hariç net rezervler, 12 milyar dolarlık artışla yeniden 30 milyar doların üzerine çıktı.
              </p>
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
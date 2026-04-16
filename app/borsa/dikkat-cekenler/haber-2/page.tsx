import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banka hisselere direnç noktasında ,
  description:
    "direnç noktasına geldiğini düşündüğüm 4 özel banka hissesinin analizi",
  alternates: {
    canonical: "/borsa/dikkat-cekenler/haber-1",
  },
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

export default function Haber2Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/dikkat-cekenler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
               ,
  descripti
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              Grafiğini incelediğim 4 özel bankada teknik açıdan önemli direnç bölgelerine yaklaşıldığı görülüyor. Bu seviyelerin güçlü hacim ve pozitif haber akışı desteğiyle aşılması, yükselişin devamı açısından takip edilebilir. Aksi durumda ise kâr satışları ve kısa vadeli geri çekilmeler görülebilir. Bankacılık hisselerinin endeks üzerindeki ağırlığı düşünüldüğünde, bu alandaki olası zayıflık endeks genelinde de baskı yaratabilir.
            </p>
          </header>

          <section className="pt-6">
            <ReklamAlani variant="yatay" />
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <p className="whitespace-pre-line text-base leading-8 text-zinc-700 md:text-lg">
{` Burada yer alan değerlendirmeler genel bilgilendirme amaçlıdır. Herhangi bir yatırım tavsiyesi niteliği taşımaz.`}
              </p>
            </div>
          </section>

          <section className="pt-8">
            
          </section>

          <section className="pt-8">
            <ReklamAlani variant="icerik" />
          </section>
        </article>
      </div>
    </main>
  );
}
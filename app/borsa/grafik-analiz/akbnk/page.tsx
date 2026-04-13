import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AKBNK Direnç Hattına Ulaştı | Hoca İle Borsa",
  description:
    "AKBNK için grafik analiz görünümü ve kısa teknik değerlendirme.",
  alternates: {
    canonical: "/borsa/grafik-analiz/akbnk",
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

export default function AkbnkGrafikAnalizPage() {
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
            href="/borsa/grafik-analiz"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              AKBNK Direnç Hattına Ulaştı
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              AKBNK için kısa grafik analiz değerlendirmesi.
            </p>
          </header>

          <section className="pt-6">
            <ReklamAlani variant="yatay" />
          </section>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/akbnk-analiz.png"
                  alt="AKBNK analiz görseli"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <div className="space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
                <p>
                  Günlük grafikte son yükselişin ardından direnç bölgesine
                  yaklaşan fiyat hareketinde kısa vadeli yorulma işaretleri
                  izleniyor. Göstergelerdeki toparlanmaya rağmen mevcut
                  seviyelerde kar satışları ve sınırlı geri çekilme ihtimali göz
                  ardı edilmemelidir.
                </p>

                <p>
                  Özellikle direnç alanı altında kalındığı sürece fiyatın bir
                  süre daha dalgalı ve temkinli seyretmesi beklenebilir. Destek
                  bölgelerinin korunması ise görünümün bozulmaması açısından önem
                  taşımaktadır.
                </p>

                <p>
                  Önemli direnç seviyesi 55 hareketli ortalamanın da yer aldığı
                  78 TL seviyesi olurken, destek tarafında ise kademeli bakmak
                  daha doğru:
                </p>

                <p>
                  <strong>75,00 – 76,00 TL bandı:</strong> çok kısa vadeli ilk
                  destek
                </p>

                <p>
                  <strong>72,50 – 73,50 TL bandı:</strong> daha anlamlı ara
                  destek
                </p>

                <p>
                  <strong>69,50 – 70,50 TL bandı:</strong> ana destek bölgesi
                  gibi duruyor.
                </p>

                <p className="border-t border-zinc-200 pt-4 text-sm text-zinc-500 md:text-base">
                  Bu içerikte yer alan teknik değerlendirmeler genel niteliktedir
                  ve yatırım danışmanlığı kapsamında değildir.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-8">
            <ReklamAlani variant="icerik" />
          </section>
        </article>
      </div>
    </main>
  );
}
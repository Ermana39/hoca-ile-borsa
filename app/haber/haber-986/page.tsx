import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FED, beklentilere paralel olarak politika faizini sabit bıraktı.;",
  description:
    "FED, beklentilere paralel olarak politika faizini sabit bıraktı.;",
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

export default function Haber986Page() {
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
              src="/haber986.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              FED, beklentilere paralel olarak politika faizini sabit bıraktı.;
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Karar metninde öne çıkan başlıklar:
              </p>

              <p>Ekonomik faaliyetin sağlam hızla büyümeye devam ettiği belirtildi.

İstihdam artışlarının ortalamada düşük seyrettiği, işsizlik oranında ise son aylarda belirgin bir değişim olmadığı ifade edildi.

Enflasyonun, küresel enerji fiyatlarındaki son artışın da etkisiyle yüksek kalmaya devam ettiği vurgulandı.

Ayrıca Orta Doğu’daki gelişmelerin ekonomik görünüme ilişkin belirsizliği artırdığı belirtildi.</p>
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
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Türkiye İstatistik Kurumu, 2026 yılı Mart ayı Konut ve İşyeri Satış İstatistiklerini açıkladı.",
  description:
    "Türkiye İstatistik Kurumu, 2026 yılı Mart ayı Konut ve İşyeri Satış İstatistiklerini açıkladı.",
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

export default function Haber993Page() {
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
              src="/haber993.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Türkiye İstatistik Kurumu, 2026 yılı Mart ayı Konut ve İşyeri Satış İstatistiklerini açıkladı.
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Mart 2026’da konut tarafında toplam satışların büyük kısmını ikinci el oluşturdu. 
İlk el satışlar yıllık bazda sınırlı artarken, ikinci el satışlar geriledi.
 İpotekli konut satışlarında ise belirgin yükseliş görüldü. 
Takvim ve mevsim etkilerinden arındırılmış veriler, hem ilk el hem ikinci el konut satışlarında ivme kaybına işaret etti.
              </p>

              <p>Yabancılara konut satışı düşüşünü sürdürdü. 
Martta yabancılara 1.353 konut satılırken, en fazla satış Rusya, İran ve Almanya vatandaşlarına yapıldı.

İş yeri satışlarında da zayıf görünüm öne çıktı. Hem ilk el hem ikinci el iş yeri satışları yıllık bazda azalırken, ipotekli iş yeri satışları güçlü artış gösterdi. 
Arındırılmış veriler, iş yeri tarafında da aylık ve yıllık bazda gerilemeye işaret etti.</p>
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
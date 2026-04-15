import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye CDS primi 240 baz puan seviyesinde",
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
            href="/haberler"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber-3v.png"
              alt="Türkiye CDS primi 240 baz puan seviyesinde görseli"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Türkiye CDS primi 240 baz puan seviyesinde
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Türkiye’nin 5 yıllık kredi risk primi (CDS) son verilere göre 237,9 baz puan seviyesinde bulunuyor. Son dönemde 300 baz puanın üzerine çıkan CDS, yeniden 240 seviyelerine gerileyerek risk algısında iyileşmeye işaret ediyor.
              </p>

              <p>
                CDS’teki düşüş, Türkiye’nin dış borçlanma maliyetlerinin azalması açısından olumlu değerlendirilirken, yabancı yatırımcı ilgisini de destekleyen önemli bir unsur olarak öne çıkıyor.
              </p>

              <p>
                Rapora göre Türkiye ekonomisinin 2027&apos;de yüzde 3,5 büyümesi
                bekleniyor. Enflasyonun ise kademeli olarak gerileyeceği
                öngörülüyor. Tüketici enflasyonu 2025&apos;te yüzde 34,9, 2026&apos;da
                yüzde 28,6 ve 2027&apos;de yüzde 21,4 olarak tahmin edildi.
              </p>

              <p>
                Ancak küresel faiz politikaları ve jeopolitik gelişmeler CDS üzerinde belirleyici olmaya devam ediyor.
              </p>

              <p>
                IMF, küresel tarafta da büyüme tahminini 2026 için yüzde
                3,3&apos;ten yüzde 3,1&apos;e indirdi. Raporda bu revizyonda Orta
                Doğu&apos;daki çatışmanın emtia fiyatları, enflasyon beklentileri ve
                finansal koşullar üzerindeki olumsuz etkisinin belirleyici
                olduğu belirtildi. Ayrıca savaş olmasaydı küresel büyüme
                tahmininin yukarı yönlü revize edilebileceği ifade edildi.
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
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMF, Türkiye büyüme tahminini düşürdü",
  description: "IMF, Türkiye büyüme tahminini düşürdü",
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
              src="/haber-1v.png"
              alt="IMF, Türkiye büyüme tahminini düşürdü görseli"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              IMF, Türkiye büyüme tahminini düşürdü
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                IMF, 2026 yılına ilişkin Türkiye büyüme tahminini yüzde 3,7&apos;den
                yüzde 3,4&apos;e çekti. Ayrıca raporda, Türkiye&apos;de 2026 yıl sonu
                enflasyonunun yüzde 28,6 ve 2027&apos;de yüzde 21,4 olmasının, işsizlik
                oranının da bu yıl yüzde 8,3, gelecek yıl yüzde 8,7 olmasının
                beklendiği kaydedildi.
              </p>

              <p>
                IMF&apos;nin Nisan 2026 Dünya Ekonomik Görünüm raporunda Türkiye için
                2026 büyüme tahmini yüzde 3,4&apos;e düşürüldü. Bu aşağı yönlü
                revizyonda, 2025 büyümesinin beklentilerin altında kalması ve
                yükselen petrol ile doğal gaz fiyatlarının ekonomik aktiviteyi
                baskılaması etkili oldu.
              </p>

              <p>
                Rapora göre Türkiye ekonomisinin 2027&apos;de yüzde 3,5 büyümesi
                bekleniyor. Enflasyonun ise kademeli olarak gerileyeceği
                öngörülüyor. Tüketici enflasyonu 2025&apos;te yüzde 34,9, 2026&apos;da
                yüzde 28,6 ve 2027&apos;de yüzde 21,4 olarak tahmin edildi.
              </p>

              <p>
                Cari açık tarafında ise bozulma dikkat çekiyor. Cari işlemler
                açığının 2025&apos;te milli gelirin yüzde 1,9&apos;u, 2026&apos;da yüzde
                2,8&apos;i ve 2027&apos;de yüzde 2,5&apos;i seviyesinde olması bekleniyor.
                İşsizlik oranı ise 2025 ve 2026&apos;da yüzde 8,3, 2027&apos;de yüzde 8,7
                olarak öngörüldü.
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
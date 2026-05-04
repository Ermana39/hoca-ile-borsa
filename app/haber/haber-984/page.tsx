import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "TÜİK Nisan 2026 enflasyonu beklenene göre (%3,30) yüksek geldi",
  description:
    "TÜİK Nisan 2026 enflasyonu beklenene göre (%3,30) yüksek geldi",
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

export default function Haber985Page() {
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
              src="/haber984.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              TÜİK Nisan 2026 enflasyonu beklenene göre (%3,30) yüksek geldi
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                ▫️TÜFE aylık %4,18 
              </p>
<p>▫️TÜFE yıllık %32,37  </p>
<p>▫️ÜFE aylık %3,17 </p>
<p>▫️ÜFE yıllık %28,59</p>
              <p>TÜİK tarafından açıklanan Nisan 2026 enflasyon verileri piyasa beklentilerinin üzerinde gerçekleşti. Aylık TÜFE %4,18 artarken, yıllık TÜFE %32,37 seviyesine yükseldi. ÜFE tarafında ise aylık artış %3,17, yıllık artış ise %28,59 olarak açıklandı.</p>
              <p>Beklentinin %3,30 seviyesinde olduğu dikkate alındığında, açıklanan rakamlar enflasyon baskısının devam ettiğini gösterdi. Özellikle petrol fiyatlarında yaşanan yükselişin; akaryakıt, ulaşım, lojistik ve üretim maliyetleri üzerinden fiyatlara yansıdığı görülüyor.</p>
              <p>Petrol kaynaklı maliyet artışları yalnızca enerji kalemlerini değil, taşımacılık ve üretim zinciri nedeniyle gıda başta olmak üzere birçok temel ürün grubunu da dolaylı olarak etkileyebiliyor. Bu nedenle Nisan ayı verileri, maliyet enflasyonu tarafındaki risklerin hâlâ canlı kaldığına işaret ediyor.</p>
              <p>Mayıs ayında konut ve işyerlerinde kira artış oranı %32.43 oldu.</p>
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
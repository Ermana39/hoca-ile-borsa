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
              2026 İlk Çeyrek Bilanço Takvimi Netleşiyor
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p></p>
<p>Borsa İstanbul’da işlem gören şirketlerin 2026 yılı ilk çeyrek finansal sonuçlarına ilişkin olası açıklanma tarihleri paylaşılmaya devam ediyor. Nisan ayının son haftasında başlayan bilanço açıklama süreci, Mayıs ayının ikinci haftasında yoğunlaşacak.</p>
<p>Takvime göre 27 Nisan’da AFYON ve TAVHL ile başlayan süreçte, 28 Nisan’da AKBNK, ASELS, BIGCH, EREGL ve LILAK finansal sonuçlarını açıklaması beklenen şirketler arasında yer aldı.</p>
<p>29 Nisan’da ise bilanço gündemi oldukça yoğun olacak. AGESA, ANSGR, CIMSA, GARAN, ISGYO, THYAO, TKNSA, TSKB, TTRAK ve YKBNK için ilk çeyrek sonuçlarının açıklanması öngörülüyor. 30 Nisan’da ise EBEBK, KLYPV ve TRALT takip edilecek.</p>
<p>Mayıs ayının ilk haftasında bilanço trafiği hız kazanacak. 4 Mayıs’ta CCOLA ve ENJSA, 5 Mayıs’ta AEFES, BRISA, FROTO, ISCTR, MGROS, OTKAR, TATGD ve TOASO öne çıkan şirketler arasında bulunuyor.</p>
<p>6 Mayıs’ta AYGAZ, MPARK, SAHOL, TTKOM ve TUPRS; 7 Mayıs’ta ise AKMGY, AKSA, BIZIM, BRSAN, DOHOL ve RGYAS finansal sonuçlarını açıklaması beklenen şirketler arasında yer alıyor.</p>
              <p>8 Mayıs’ta ALARK, ALBRK, KCHOL ve OZYSR bilançoları izlenecek. KOTON için olası açıklanma aralığı 4-8 Mayıs olarak paylaşılırken, 9 Mayıs’ta AGHOL bilançosu takip edilecek.</p>
              <p>11 Mayıs haftasında ise BIMAS, DOAS, ENKAI, KFEIN, PGSUS, TCELL, TRMET ve ULKER öne çıkıyor. YATAS için olası bilanço açıklama aralığı ise 7-11 Mayıs olarak belirtiliyor.</p>
              <p>Bilanço döneminde özellikle bankacılık, havacılık, otomotiv, holding, perakende ve enerji şirketlerinden gelecek sonuçlar piyasa fiyatlamaları açısından yakından izlenecek.</p>
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
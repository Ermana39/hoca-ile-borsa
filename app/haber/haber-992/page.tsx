import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "S&P Türkiye'nin kredi notunu teyit etti",
  description:
    "S&P Türkiye'nin kredi notunu teyit etti",
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

export default function Haber992Page() {
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
              src="/haber992.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              S&P Türkiye'nin kredi notunu teyit etti
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Uluslararası kredi derecelendirme kuruluşu S&P, Türkiye’nin kredi notunu “BB-/B” seviyesinde teyit ederken görünümü “durağan” olarak korudu. Kuruluş, bu görünümün; enerji fiyatlarındaki şokun yönetilebilir olacağı, sıkı para politikalarının sürdürüleceği ve döviz rezervlerinde ciddi bir erime yaşanmayacağı beklentisine dayandığını belirtti.
              </p>

              <p>Açıklamada, Orta Doğu’daki gerilimin enerji fiyatları üzerinden risk oluşturduğu ancak bu etkinin sınırlı kalmasının beklendiği ifade edildi. Öte yandan, enerji fiyatlarının uzun süre yüksek seyretmesi risk unsuru olarak öne çıktı. 
Arındırılmış veriler, iş yeri tarafında da aylık ve yıllık bazda gerilemeye işaret etti.</p>
<p>S&P, Türkiye’nin kredi notunun artırılabilmesi için döviz rezervlerinde toparlanma, Türk lirasına güvenin yeniden tesis edilmesi ve enflasyonun kalıcı şekilde tek hanelere düşürülmesi gerektiğini vurguladı.</p>
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
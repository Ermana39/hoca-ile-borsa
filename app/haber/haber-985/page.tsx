import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "TÜRK-İŞ Nisan 2026 Açlık ve Yoksulluk Sınırını Açıkladı;",
  description:
    "TÜRK-İŞ Nisan 2026 Açlık ve Yoksulluk Sınırını Açıkladı;",
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
              src="/haber985.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              TÜRK-İŞ Nisan 2026 Açlık ve Yoksulluk Sınırını Açıkladı;
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                TÜRK-İŞ, çalışanların geçim koşullarını ve temel ihtiyaç maddelerindeki fiyat değişimlerinin aile bütçesine etkisini ölçen Nisan 2026 Açlık ve Yoksulluk Sınırı Araştırması sonuçlarını yayımladı.
              </p>
<p>Araştırmaya göre Ankara’da yaşayan dört kişilik bir ailenin sağlıklı, dengeli ve yeterli beslenebilmesi için yapması gereken aylık gıda harcaması, yani açlık sınırı 34.586,86 TL oldu.</p>
<p>Gıda harcamasına ek olarak kira, elektrik, su, ulaşım, eğitim, sağlık, giyim ve benzeri temel ihtiyaçların da dahil edildiği yoksulluk sınırı ise 112.660,80 TL’ye yükseldi.</p>
<p>Bekâr bir çalışanın aylık yaşama maliyeti de 44.802,03 TL olarak hesaplandı.</p>
              <p>TÜRK-İŞ’in “mutfak enflasyonu” verilerine göre, dört kişilik bir ailenin sadece gıda için yapması gereken asgari harcama tutarı bir önceki aya göre %5,47 arttı. On iki aylık artış oranı %43,90, yıllık ortalama artış %40,00, dört aylık artış ise %14,74 olarak gerçekleşti.</p>
              <p>Nisan ayı verileri, temel gıda harcamalarındaki yükselişin hane bütçeleri üzerindeki baskıyı artırmaya devam ettiğini gösteriyor. Özellikle yoksulluk sınırının 112 bin TL seviyesini aşması, dört kişilik bir ailenin temel yaşam giderlerini karşılayabilmesi için ihtiyaç duyduğu gelir düzeyinin oldukça yükseldiğini ortaya koyuyor.</p>
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
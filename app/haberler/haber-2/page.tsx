import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Morgan Stanley: S&P 500 Endeksini İran Gerginliğine Karşı Şirket Karları Koruyor",
  description:
    "Morgan Stanley: S&P 500 Endeksini İran Gerginliğine Karşı Şirket Karları Koruyor ",
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
              src="/haber-2v.png"
              alt="Bu yıl işleme başlayan 15 halka arzın hepsi halka arz fiyatının üzerinde işlem görüyor görseli"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Morgan Stanley: S&P 500 Endeksini İran Gerginliğine Karşı Şirket Karları Koruyor
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Morgan Stanley stratejistlerine göre, hızlanan şirket kârları S&P 500 endeksini daha derin kayıplardan koruyor ve ABD hisse senetlerindeki daha geniş çaplı bir geri çekilmeyi maskeliyor. Michael Wilson liderliğindeki ekip, Ocak ayındaki rekor seviyesinden bu yana S&P 500 endeksindeki düşüşün %10'un altında kalmasını, dirençli kârlar ve devam eden ekonomik toparlanmaya bağlıyor.
              </p>

              <p>15 Stratejistler, ABD hisse senetlerindeki geri çekilmeyi değerlendirmek için daha iyi göstergeler olduğunu savunuyor. S&P 500 için öngörülen hisse başına kârın Ekim ayındaki zirvesinden bu yana %18 düştüğünü ve Russell 3000 endeksindeki hisselerin yarısından fazlasının en az %20 değer kaybettiğini belirtiyorlar. Wilson, bu durumu bir kayıtsızlık olarak değil, piyasanın hem endeks hem de hisse düzeyindeki riskleri uygun ve cerrahi bir şekilde fiyatlaması olarak nitelendiriyor. Ayrıca özel kredi ve yapay zeka kaynaklı bozulma risklerinin de hesaba katıldığını ekliyor.

 Morgan Stanley stratejistleri, güçlü kârlar ve sıkışmış değerlemeler nedeniyle finans, sanayi ve tüketici ürünleri gibi döngüsel sektörleri tercih etmeye devam ediyor. Ayrıca duyarlılık ve değerlemelerin daha cazip seviyelere gerilediği yapay zeka bulut hizmet sağlayıcıları gibi kaliteli büyüme hisselerinde de fırsat görüyorlar.</p>
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
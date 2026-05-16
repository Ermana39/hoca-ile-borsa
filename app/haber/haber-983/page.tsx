import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "EKİNCİLER DEMİR VE ÇELİK SANAYİ A.Ş. Dağıtımları Sonuçlandı",
  description:
    "EKİNCİLER DEMİR VE ÇELİK SANAYİ A.Ş. Dağıtımları Sonuçlandı",
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

export default function Haber983Page() {
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
              src="/haber983.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              EKİNCİLER DEMİR VE ÇELİK SANAYİ A.Ş. Dağıtımları Sonuçlandı
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                EKİNCİLER DEMİR VE ÇELİK SANAYİ A.Ş. paylarının halka arzına ilişkin talep toplama işlemleri, “Sabit Fiyatla Talep Toplama” yöntemiyle 13-14-15 Mayıs 2026 tarihlerinde gerçekleştirildi.
              </p>
<p>Halka arzda birim pay fiyatı 45,00 TL olarak belirlenmiş olup, halka arz edilen toplam 52.000.000 TL nominal değerli payların tamamının satışı gerçekleştirilmiş; buna göre toplam halka arz büyüklüğü 2.340.000.000 TL oldu.  </p>
<p>Halka arzda; “Yurt İçi Bireysel Yatırımcılar”dan planlanan tahsisat tutarının yaklaşık 2,36 katı, “Yüksek Talepte Bulunan Yatırımcılar”dan planlanan tahsisat tutarının yaklaşık 45,97 katı, “Yurt İçi Kurumsal Yatırımcılar”dan planlanan tahsisat tutarının yaklaşık 8,04 katı, “Yurt Dışı Kurumsal Yatırımcılar”dan planlanan tahsisat tutarının yaklaşık 1,71 katı talep gelmiştir. Halka arzda toplam 52.000.000 TL nominal değerli paylar için planlanan satış tutarının yaklaşık 8,29 katı talep geldi.</p>
<p></p>
              <p></p>
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
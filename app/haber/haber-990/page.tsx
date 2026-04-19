import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Astor’da 11,2 Milyar TL’lik Hisse Satışı: %5,99 Pay Yabancı Kurumsallara Devredildi",
  description:
    "Astor’da 11,2 Milyar TL’lik Hisse Satışı: %5,99 Pay Yabancı Kurumsallara Devredildi",
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

export default function Haber991Page() {
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
              src="/haber990.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Astor’da 11,2 Milyar TL’lik Hisse Satışı: %5,99 Pay Yabancı Kurumsallara Devredildi
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Astor Holding, Astor Enerji’de sahip olduğu 59.750.000 adet B grubu payı hisse başına 187,50 TL’den yurt dışı kurumsal yatırımcılara sattı. İşlem yaklaşık %7,95 iskonto ile fiyatlanırken, brüt hasılatın yaklaşık 11,2 milyar TL olduğu açıklandı.
              </p>

              <p>Astor Enerji’de dikkat çeken gelişmede, şirket ortaklarından Astor Holding A.Ş., ASTOR sermayesinin yaklaşık %5,99’una denk gelen 59.750.000 adet B grubu payın satışını duyurdu. KAP açıklamasına göre işlem, yurt dışı kurumsal yatırımcılara yönelik gerçekleştirildi ve satış fiyatı pay başına 187,50 TL olarak belirlendi.

Satışın alıcı tarafında Citigroup Global Markets Limited ile HSBC Bank Plc yer aldı. Borsa İstanbul tarafındaki toptan alış satış işlem bildirimine göre payların 30.425.000 TL nominal kısmı Citigroup Global Markets Limited’e, 29.325.000 TL nominal kısmı ise HSBC Bank Plc’ye devredilecek. İşlem için 16 Nisan 2026 tarihi işaret edilirken, takasın Pay Piyasası takas süreci içinde tamamlanacağı belirtildi.

Şirket açıklamasında, bu satış sonrası Astor Holding’in ASTOR’daki pay oranının %0’a gerilemesinin, halka açıklık oranının ise %42,75’e yükselmesinin beklendiği ifade edildi. Ayrıca Feridun Geçgel’in şirkette yaklaşık %57,25 oranında pay sahibi olmaya devam edeceği ve çoğunluk kontrolünü koruyacağı aktarıldı. Açıklamada Astor Holding ile Feridun Geçgel’in, belirli istisnalar dışında işlem sonrası 180 gün boyunca pay satmama taahhüdü verdiği bilgisi de yer aldı.</p>
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
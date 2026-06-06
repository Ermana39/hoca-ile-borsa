import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Borsa İstanbul’da 4 Şirketten Pay Geri Alımı",
  description:
    "5 Haziran 2026 tarihinde Borsa İstanbul’da NTHOL, ENERY, AHGAZ ve GLYHO pay geri alımı gerçekleştiren şirketler arasında yer aldı.",
  alternates: {
    canonical: "/borsa/dikkat-cekenler/haber-4",
  },
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

export default function Haber4Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/dikkat-cekenler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Borsa İstanbul’da 4 Şirketten Pay Geri Alımı
            </h1>

            <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da işlem gören bazı şirketler, pay geri alım
                programları kapsamında 5 Haziran 2026 tarihinde yeni alım
                işlemleri gerçekleştirdi. Gün içinde geri alım yapan şirketler
                arasında Net Holding, Enerya Enerji, Ahlatcı Doğal Gaz ve
                Global Yatırım Holding yer aldı.
              </p>

              <p>
                Açıklanan verilere göre Net Holding A.Ş. (NTHOL) 200.000 lot,
                Enerya Enerji A.Ş. (ENERY) 200.000 lot, Ahlatcı Doğal Gaz
                Dağıtım Enerji ve Yatırım A.Ş. (AHGAZ) 200.000 lot, Global
                Yatırım Holding A.Ş. (GLYHO) ise 500.000 lot pay geri alımı
                gerçekleştirdi.
              </p>

              <p>
                Pay geri alım işlemleri, şirketlerin piyasada işlem gören kendi
                paylarını satın alması anlamına geliyor. Bu adımlar yatırımcılar
                tarafından çoğu zaman şirket yönetimlerinin mevcut fiyatları
                yakından takip ettiği ve pay fiyatını destekleyici bir yaklaşım
                sergilediği şeklinde değerlendiriliyor.
              </p>

              <p>
                Özellikle volatilitenin arttığı dönemlerde geri alım programları,
                ilgili hisselerde güven algısı ve likidite açısından dikkatle
                izleniyor. Ancak her geri alım kararı tek başına alım gerekçesi
                olarak görülmemeli; şirketin finansal durumu, bilanço gücü,
                sektör görünümü ve genel piyasa koşulları birlikte
                değerlendirilmelidir.
              </p>

              <p>
                Geri alım yapan hisseler arasında en yüksek adetli işlem 500.000
                lot ile Global Yatırım Holding tarafında gerçekleşti. NTHOL,
                ENERY ve AHGAZ tarafındaki 200.000’er lotluk işlemler de günün
                dikkat çeken şirket aksiyonları arasında yer aldı.
              </p>

              <p>05.06.2026 - Bu paylaşım yatırım tavsiyesi değildir.</p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-base font-semibold text-zinc-900 md:text-lg">
                Borsa İstanbul’da açıklanan güncel pay geri alım işlemlerini
                toplu olarak takip etmek ister misiniz?
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-700 md:text-base">
                Tüm şirketlerin geri alım işlemlerini, tarih ve adet bilgileriyle
                birlikte incelemek için geri alım sayfamızı ziyaret edebilirsiniz.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/borsa/geri-alim-programlari"
                  className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Tüm geri alımları incele
                </Link>
              </div>
            </div>
          </header>
        </article>
      </div>
    </main>
  );
}

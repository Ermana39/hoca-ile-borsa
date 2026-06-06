import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Borsa İstanbul’da 10 Şirketten Temettü Kararı",
  description:
    "Borsa İstanbul’da işlem gören 10 şirket temettü kararlarını açıkladı. OZSUB, BASGZ ve FORTE nakit temettü planlarıyla öne çıktı.",
  alternates: {
    canonical: "/borsa/dikkat-cekenler/haber-6",
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

export default function Haber6Page() {
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
              Borsa İstanbul’da 10 Şirketten Temettü Kararı
            </h1>

            <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da işlem gören 10 şirket, temettü kararlarını
                kamuoyuyla paylaştı. Açıklanan kararlar içinde 3 şirket nakit
                temettü dağıtımıyla öne çıkarken, 7 şirket ise kâr payı
                dağıtmama yönünde karar aldı.
              </p>

              <p>
                Temettü dağıtacak şirketler arasında Özsu Balık Üretim A.Ş.
                (OZSUB), Başkent Doğalgaz Dağıtım Gayrimenkul Yatırım Ortaklığı
                A.Ş. (BASGZ) ve Forte Bilgi İletişim Teknolojileri ve Savunma
                Sanayi A.Ş. (FORTE) yer aldı.
              </p>

              <p>
                Özsu Balık Üretim A.Ş. (OZSUB) için pay başına brüt 0,6166666
                TL, net 0,5241666 TL nakit temettü dağıtımı kararlaştırıldı.
                Şirketin temettü ödeme tarihinin 6 Temmuz 2026 olması
                planlanıyor.
              </p>

              <p>
                Başkent Doğalgaz Dağıtım Gayrimenkul Yatırım Ortaklığı A.Ş.
                (BASGZ) tarafında pay başına brüt ve net 2,00 TL temettü
                dağıtımı açıklandı. BASGZ için temettü ödeme tarihi 20 Temmuz
                2026 olarak duyuruldu.
              </p>

              <p>
                Forte Bilgi İletişim Teknolojileri ve Savunma Sanayi A.Ş.
                (FORTE) Yönetim Kurulu ise pay başına brüt 0,52 TL, net 0,442
                TL temettü dağıtılması yönünde karar aldı. FORTE için ödeme
                tarihi henüz açıklanmadı.
              </p>

              <p>
                Bugün açıklanan kararlar kapsamında Hareket Proje Taşımacılığı
                ve Yük Mühendisliği A.Ş., İmaş Makina Sanayi A.Ş., Altınay
                Savunma Teknolojileri A.Ş., Lydia Yeşil Enerji Kaynakları A.Ş.,
                Güler Yatırım Holding A.Ş., A1 Yenilenebilir Enerji Üretim A.Ş.
                ve Selva Gıda Sanayi A.Ş. kâr payı dağıtmama kararı alan
                şirketler arasında yer aldı.
              </p>

              <p>
                Temettü kararları, özellikle düzenli nakit akışı ve uzun vadeli
                portföy planlaması yapan yatırımcılar tarafından yakından takip
                ediliyor. Ancak temettü verimi, şirketin bilanço gücü, kârlılığı,
                borçluluk durumu ve hisse fiyatı ile birlikte değerlendirilmelidir.
              </p>

              <p>06.06.2026 - Bu paylaşım yatırım tavsiyesi değildir.</p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-base font-semibold text-zinc-900 md:text-lg">
                Borsa İstanbul’da açıklanan güncel temettü kararlarını toplu
                olarak incelemek ister misiniz?
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-700 md:text-base">
                Temettü ödeme tarihleri, pay başına brüt ve net temettü
                tutarları ile güncel şirket kararlarını temettü sayfamızdan
                takip edebilirsiniz.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/temettu"
                  className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Tüm temettüleri incele
                </Link>
              </div>
            </div>
          </header>
        </article>
      </div>
    </main>
  );
}

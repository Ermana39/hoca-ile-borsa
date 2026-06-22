import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "KTLEV ve SVGYO İçin Temettü Günü: Hak Kullanım Tarihi 23 Haziran",
  description:
    "23 Haziran 2026 Salı günü KTLEV ve SVGYO payları için temettü hak kullanım tarihi olacak. KTLEV net 0,0821255 TL, SVGYO net 0,0077 TL temettü ödeyecek.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/ktlev-svgyo-23-haziran-2026-temettu-gundemi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/ktlev-svgyo-23-haziran-2026-temettu-gundemi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/ktlev-svgyo-23-haziran-2026-temettu-gundemi.webp",
    ],
  },
};

export default function TemettuGundemiKtlevSvgyoPage() {
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
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/ktlev-svgyo-23-haziran-2026-temettu-gundemi.webp"
              alt="KTLEV ve SVGYO için 23 Haziran 2026 temettü gündemi"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                KTLEV ve SVGYO İçin Temettü Günü: Hak Kullanım Tarihi 23 Haziran
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                22.06.2026 ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Borsa İstanbul’da temettü gündemi 23 Haziran 2026 Salı günü iki
                şirketle devam edecek. Katılımevim Tasarruf Finansman A.Ş.
                (KTLEV) ve Savur Gayrimenkul Yatırım Ortaklığı A.Ş. (SVGYO)
                payları için nakit temettü hak kullanım tarihi 23 Haziran 2026
                olarak açıklandı.
              </p>

              <p>
                KTLEV tarafında 2025 yılı kâr dağıtımı kapsamında üçüncü taksit
                ödemesi yapılacak. Şirketin KAP açıklamasına göre 1 TL nominal
                değerli pay için brüt 0,0966183 TL, net 0,0821255 TL nakit kâr
                payı ödenecek. Hak kullanım tarihi 23 Haziran 2026, kayıt tarihi
                24 Haziran 2026 ve pay sahiplerinin hesaplarına geçiş tarihi 25
                Haziran 2026 olacak.
              </p>

              <p>
                SVGYO tarafında ise temettü peşin olarak dağıtılacak. Şirketin
                KAP bildirimine göre 1 TL nominal değerli pay için brüt ve net
                0,0077000 TL nakit kâr payı ödenecek. SVGYO’nun gayrimenkul
                yatırım ortaklığı statüsünde olması nedeniyle stopaj oranı sıfır
                olarak açıklandı.
              </p>

              <p>
                Temettü hak kullanım tarihinde paylar teorik olarak dağıtılan
                temettü tutarı kadar düzeltilmiş fiyatla işlem görmeye başlar.
                Ancak gün içindeki gerçek fiyat hareketi yalnızca temettü etkisi
                ile değil, piyasa koşulları, hisseye gelen alım-satım ilgisi ve
                genel endeks görünümüyle birlikte şekillenir.
              </p>

              <p>
                Bu nedenle yatırımcıların yalnızca temettü tutarına değil,
                şirketin temettü verimliliğine, bilanço yapısına, sürdürülebilir
                kâr üretimine ve hisse fiyatındaki genel trende birlikte bakması
                daha sağlıklı olacaktır.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
              <div className="bg-zinc-900 px-4 py-3">
                <p className="text-sm font-bold text-white md:text-base">
                  23 Haziran 2026 Temettü Takvimi
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
                  <thead className="bg-zinc-100 text-zinc-700">
                    <tr>
                      <th className="border-b border-zinc-200 px-4 py-3">
                        Hisse
                      </th>
                      <th className="border-b border-zinc-200 px-4 py-3">
                        Hak Kullanım
                      </th>
                      <th className="border-b border-zinc-200 px-4 py-3">
                        Brüt Temettü
                      </th>
                      <th className="border-b border-zinc-200 px-4 py-3">
                        Net Temettü
                      </th>
                      <th className="border-b border-zinc-200 px-4 py-3">
                        Hesaba Geçiş
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-700">
                    <tr>
                      <td className="border-b border-zinc-200 px-4 py-3 font-bold text-zinc-900">
                        KTLEV
                      </td>
                      <td className="border-b border-zinc-200 px-4 py-3">
                        23.06.2026
                      </td>
                      <td className="border-b border-zinc-200 px-4 py-3">
                        0,0966183 TL
                      </td>
                      <td className="border-b border-zinc-200 px-4 py-3">
                        0,0821255 TL
                      </td>
                      <td className="border-b border-zinc-200 px-4 py-3">
                        25.06.2026
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-zinc-900">
                        SVGYO
                      </td>
                      <td className="px-4 py-3">23.06.2026</td>
                      <td className="px-4 py-3">0,0077000 TL</td>
                      <td className="px-4 py-3">0,0077000 TL</td>
                      <td className="px-4 py-3">25.06.2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Hoca ile Borsa yorumu:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                KTLEV ve SVGYO temettüleri tutar olarak sınırlı görünse de,
                temettü takvimi yatırımcılar için hisse bazlı fiyat düzeltmesi
                ve kısa vadeli işlem hareketleri açısından takip edilmelidir.
                KTLEV’de ödeme üçüncü taksit niteliği taşırken, SVGYO’da peşin
                nakit temettü dağıtımı yapılacak. Özellikle temettü sonrası fiyat
                hareketlerinde yalnızca dağıtılan tutara değil, hissenin işlem
                hacmine ve genel piyasa yönüne de bakılması gerekir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                23 Haziran 2026 Salı günü KTLEV ve SVGYO paylarında temettü hak
                kullanım tarihi olacak. KTLEV pay başına net 0,0821255 TL, SVGYO
                ise pay başına net 0,0077000 TL temettü ödeyecek. Her iki
                şirket için pay sahiplerinin hesaplarına geçiş tarihi 25 Haziran
                2026 olarak açıklandı.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynaklar:
              </p>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1594527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
                >
                  KAP Bildirimi - KTLEV Kar Payı Dağıtımı
                </a>
                <a
                  href="https://www.kap.org.tr/tr/Bildirim/1617817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
                >
                  KAP Bildirimi - SVGYO Kar Payı Dağıtımı
                </a>
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              22.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="ktlev-svgyo-23-haziran-2026-temettu-gundemi"
            baslik="KTLEV SVGYO Temettü 23 Haziran 2026"
          />
        </div>
      </div>
    </main>
  );
}
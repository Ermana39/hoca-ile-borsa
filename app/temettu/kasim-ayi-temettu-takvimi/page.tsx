export const metadata = {
  title: "Kasım Ayı Temettü Takvimi | Hoca İle Borsa",
  description: "Kasım ayında temettü veren BIST şirketleri, ödeme tarihleri ve temettü miktarları.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu/kasim-ayi-temettu-takvimi" },
};

import Link from "next/link";
import HisseLink from "@/components/HisseLink";
import { IlgiliBolumler } from "@/components/IlgiliBolumler";

const kasimTemettuleri = [
  {
    sembol: "DESA",
    tarih: "30 Kasım 2026",
    verim: "% 0,88",
    brut: "₺0,10",
    net: "₺0,0816",
    toplam: "₺47.058.816",
    oran: "%8",
  },
  {
    sembol: "OFSYM",
    tarih: "25 Kasım 2026",
    verim: "% 0,75",
    brut: "₺0,42",
    net: "₺0,3577",
    toplam: "₺61.542.848",
    oran: "%14",
  },
  {
    sembol: "ASELS",
    tarih: "24 Kasım 2026",
    verim: "% 0,12",
    brut: "₺0,43",
    net: "₺0,3635",
    toplam: "₺1.949.999.640",
    oran: "%7",
  },
  {
    sembol: "DURKN",
    tarih: "18 Kasım 2026",
    verim: "% 0,45",
    brut: "₺0,09",
    net: "₺0,0792",
    toplam: "₺12.342.958",
    oran: "%10",
  },
  {
    sembol: "GIPTA",
    tarih: "11 Kasım 2026",
    verim: "% 0,01",
    brut: "₺0,01",
    net: "₺0,0066",
    toplam: "₺1.024.993",
    oran: "%0",
  },
  {
    sembol: "KBORU",
    tarih: "10 Kasım 2026",
    verim: "% 0,08",
    brut: "₺0,02",
    net: "₺0,0177",
    toplam: "₺12.490.800",
    oran: "%2",
  },
  {
    sembol: "GOKNR",
    tarih: "9 Kasım 2026",
    verim: "% 1,29",
    brut: "₺0,31",
    net: "₺0,2603",
    toplam: "₺107.202.480",
    oran: "%24",
  },
  {
    sembol: "LIDER",
    tarih: "6 Kasım 2026",
    verim: "% 0,04",
    brut: "₺0,04",
    net: "₺0,0303",
    toplam: "₺29.411.745",
    oran: "%2",
  },
];

export default function KasimAyiTemettuTakvimiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/temettu"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Kasım Ayı Temettü Takvimi
        </h1>

        <section className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 md:text-base">
          <div className="mb-2 font-semibold">
            Portföyünüzdeki hisseler için temettü gelirinizi hesaplamak ister misiniz?
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/temettu/temettu-hesaplama-araci"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 md:text-sm"
            >
              Temettü Hesaplama Aracı <span aria-hidden>→</span>
            </Link>
            <Link
              href="/temettu/temettu-verimi-hesaplama"
              prefetch={false}
              className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 md:text-sm"
            >
              Temettü Verimi Hesaplama <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
            <thead className="bg-green-100 text-zinc-700">
              <tr>
                <th className="px-4 py-3 text-left">Sembol</th>
                <th className="px-4 py-3 text-left">Tarih</th>
                <th className="px-4 py-3 text-right">Temettü Verim (%)</th>
                <th className="px-4 py-3 text-right">Hisse Başı Brüt TL</th>
                <th className="px-4 py-3 text-right">Hisse Başı Net TL</th>
                <th className="px-4 py-3 text-right">Toplam Temettü (TL)</th>
                <th className="px-4 py-3 text-right">Dağıtma Oranı (%)</th>
              </tr>
            </thead>
            <tbody>
              {kasimTemettuleri.map((item, index) => (
                <tr
                  key={`${item.sembol}-${item.tarih}`}
                  className={`border-t border-zinc-100 ${
                    index % 2 === 1 ? "bg-sky-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3 font-semibold text-zinc-900">
                    <HisseLink sembol={item.sembol} />
                  </td>
                  <td className="px-4 py-3 text-zinc-700">{item.tarih}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.verim}</td>
                  <td className="px-4 py-3 text-right font-semibold text-zinc-900">{item.brut}</td>
                  <td className="px-4 py-3 text-right font-semibold text-zinc-900">{item.net}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.toplam}</td>
                  <td className="px-4 py-3 text-right text-zinc-700">{item.oran}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <IlgiliBolumler
          baslik="İlgili Araçlar"
          linkler={[
            {
              label: "Temettü Hesaplama Aracı",
              href: "/temettu/temettu-hesaplama-araci",
              description: "Lot ve brüt temettüye göre net temettü tutarınızı hesaplayın.",
            },
            {
              label: "Temettü Verimi Hesaplama",
              href: "/temettu/temettu-verimi-hesaplama",
              description: "Hisse fiyatına göre temettü verim oranınızı bulun.",
            },
            {
              label: "Tüm Hesaplayıcılar",
              href: "/hesaplayici",
              description: "Borsa, mevduat, kredi ve daha fazlası için hesaplama araçları.",
            },
          ]}
          className="mt-10"
        />

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Kasım Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Kasım ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Kasım 2026 dönemindeki temettü ödeme tarihlerini, hisse başına brüt ve net
            temettü tutarlarını, temettü verimlerini ve toplam dağıtım büyüklüklerini takip
            etmek isteyen yatırımcılar için hazırlanmıştır.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Kasım 2026 temettü takviminde DESA, OFSYM, ASELS, DURKN, GIPTA, KBORU,
            GOKNR ve LIDER hisseleri yer almaktadır. Tabloda her şirket için ödeme tarihi,
            temettü verimi, hisse başına brüt ödeme, hisse başına net ödeme, toplam temettü
            tutarı ve dağıtma oranı ayrı ayrı gösterilir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü yatırımı yapan kullanıcılar için dağıtım tarihi, hisse başına net ödeme,
            brüt temettü, temettü verimi ve şirketlerin dağıtma oranı önemli göstergeler
            arasında yer alır. Bu veriler yatırımcıların dönemsel temettü planlaması yapmasına
            yardımcı olur.
          </p>

          <p className="leading-7 text-zinc-700">
            Bu sayfada yer alan bilgiler genel bilgilendirme amacı taşır. Temettü verimi ve
            dağıtım oranı tek başına yatırım kararı için yeterli değildir; şirketlerin finansal
            durumu, nakit akışı ve temettü politikası ayrıca değerlendirilmelidir.
          </p>
        </section>
      </div>
    </main>
  );
}
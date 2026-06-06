export const metadata = {
  title: "Haziran Ayı Temettü Takvimi | Hoca İle Borsa",
  description: "Haziran ayında temettü veren BIST şirketleri, ödeme tarihleri ve temettü miktarları.",
  alternates: { canonical: "https://www.hocaileborsa.com/temettu/haziran-ayi-temettu-takvimi" },
};

import Link from "next/link";

const haziranTemettuleri = [
  { sembol: "ZRGYO", tarih: "30 Haziran 2026", verim: "% 0,57", brut: "₺0,09", net: "₺0,0929", toplam: "₺436.271.510", oran: "%6" },
  { sembol: "KIMMR", tarih: "30 Haziran 2026", verim: "% 1,22", brut: "₺0,21", net: "₺0,1771", toplam: "₺49.999.992", oran: "%8" },
  { sembol: "ECGYH", tarih: "30 Haziran 2026", verim: "% 1,01", brut: "₺0,30", net: "₺0,3000", toplam: "₺60.000.000", oran: "%8" },
  { sembol: "LOGO", tarih: "30 Haziran 2026", verim: "% 3,33", brut: "₺5,26", net: "₺4,4737", toplam: "₺499.999.991", oran: "%33" },
  { sembol: "ISSEN", tarih: "30 Haziran 2026", verim: "% 0,46", brut: "₺0,04", net: "₺0,0340", toplam: "₺16.975.919", oran: "" },
  { sembol: "ISKPL", tarih: "26 Haziran 2026", verim: "% 0,00", brut: "₺0,00", net: "₺0,0004", toplam: "₺646.650", oran: "%1" },
  { sembol: "ILGYO", tarih: "26 Haziran 2026", verim: "% 9,47", brut: "₺0,58", net: "₺0,5755", toplam: "₺2.209.999.872", oran: "%17" },
  { sembol: "SVGY", tarih: "25 Haziran 2026", verim: "% 2,55", brut: "₺0,08", net: "₺0,0769", toplam: "₺249.999.750", oran: "%6" },
  { sembol: "AHSGY", tarih: "24 Haziran 2026", verim: "% 0,36", brut: "₺0,08", net: "₺0,0762", toplam: "₺54.999.945", oran: "%2" },
  { sembol: "OZKGY", tarih: "24 Haziran 2026", verim: "% 1,61", brut: "₺0,20", net: "₺0,1987", toplam: "₺289.307.200", oran: "" },
  { sembol: "VKGYO", tarih: "24 Haziran 2026", verim: "% 3,76", brut: "₺0,10", net: "₺0,1020", toplam: "₺351.999.705", oran: "%50" },
  { sembol: "CEMTS", tarih: "24 Haziran 2026", verim: "% 2,86", brut: "₺0,30", net: "₺0,2550", toplam: "₺150.000.000", oran: "" },
  { sembol: "EKGYO", tarih: "24 Haziran 2026", verim: "% 3,14", brut: "₺0,60", net: "₺0,6000", toplam: "₺2.280.000.000", oran: "%37" },
  { sembol: "SVGYO", tarih: "23 Haziran 2026", verim: "% 0,04", brut: "₺0,01", net: "₺0,0077", toplam: "₺8.339.100", oran: "" },
  { sembol: "KTLEV", tarih: "23 Haziran 2026", verim: "% 0,08", brut: "₺0,10", net: "₺0,0821", toplam: "₺199.999.881", oran: "%2" },
  { sembol: "MHRGY", tarih: "22 Haziran 2026", verim: "% 1,49", brut: "₺0,07", net: "₺0,0681", toplam: "₺84.472.964", oran: "%19" },
  { sembol: "ULKER", tarih: "19 Haziran 2026", verim: "% 4,95", brut: "₺5,73", net: "₺4,8729", toplam: "₺2.116.999.983", oran: "%42" },
  { sembol: "EMPAE", tarih: "18 Haziran 2026", verim: "% 0,14", brut: "₺0,10", net: "₺0,0850", toplam: "₺17.000.000", oran: "%20" },
  { sembol: "BIMAS", tarih: "17 Haziran 2026", verim: "% 0,54", brut: "₺2,00", net: "₺1,7000", toplam: "₺2.408.000.000", oran: "%13" },
  { sembol: "BULGS", tarih: "15 Haziran 2026", verim: "% 0,23", brut: "₺0,09", net: "₺0,0933", toplam: "₺24.999.978", oran: "%2" },
  { sembol: "INDES", tarih: "15 Haziran 2026", verim: "% 1,89", brut: "₺0,22", net: "₺0,1847", toplam: "₺163.000.875", oran: "%34" },
  { sembol: "ATATP", tarih: "10 Haziran 2026", verim: "% 0,45", brut: "₺1,00", net: "₺0,8500", toplam: "₺93.750.000", oran: "%5" },
  { sembol: "YAPRK", tarih: "10 Haziran 2026", verim: "% 0,19", brut: "₺0,03", net: "₺0,0213", toplam: "₺7.455.000", oran: "%38" },
  { sembol: "ADGYO", tarih: "8 Haziran 2026", verim: "% 0,11", brut: "₺0,06", net: "₺0,0544", toplam: "₺160.000.000", oran: "" },
  { sembol: "SMRVA", tarih: "8 Haziran 2026", verim: "% 1,15", brut: "₺0,19", net: "₺0,1600", toplam: "₺112.929.960", oran: "%17" },
  { sembol: "AVPGY", tarih: "5 Haziran 2026", verim: "% 3,99", brut: "₺2,50", net: "₺2,5000", toplam: "₺1.000.000.000", oran: "%62" },
  { sembol: "ATAKP", tarih: "4 Haziran 2026", verim: "% 1,29", brut: "₺0,70", net: "₺0,5950", toplam: "₺97.137.600", oran: "" },
  { sembol: "TABGD", tarih: "4 Haziran 2026", verim: "% 1,87", brut: "₺5,00", net: "₺4,2500", toplam: "₺1.306.460.000", oran: "%49" },
  { sembol: "EREGL", tarih: "3 Haziran 2026", verim: "% 1,40", brut: "₺0,55", net: "₺0,4675", toplam: "₺3.850.000.000", oran: "%665" },
  { sembol: "ISDMR", tarih: "3 Haziran 2026", verim: "% 7,80", brut: "₺4,50", net: "₺3,8250", toplam: "₺13.050.000.000", oran: "%213" },
  { sembol: "LMKDC", tarih: "2 Haziran 2026", verim: "% 5,45", brut: "₺2,00", net: "₺1,7000", toplam: "₺1.032.359.400", oran: "%52" },
  { sembol: "AKCNS", tarih: "1 Haziran 2026", verim: "% 0,83", brut: "₺1,88", net: "₺1,5984", toplam: "₺359.999.996", oran: "%46" },
  { sembol: "SISE", tarih: "1 Haziran 2026", verim: "% 1,28", brut: "₺0,59", net: "₺0,4995", toplam: "₺1.799.999.717", oran: "%19" },
  { sembol: "AYES", tarih: "1 Haziran 2026", verim: "% 1,04", brut: "₺0,35", net: "₺0,3000", toplam: "₺52.941.165", oran: "%52" },
  { sembol: "MACKO", tarih: "1 Haziran 2026", verim: "% 6,08", brut: "₺2,70", net: "₺2,2950", toplam: "₺270.000.000", oran: "%84" },
];

export default function HaziranAyiTemettuTakvimiPage() {
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
          Haziran Ayı Temettü Takvimi
        </h1>

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
              {haziranTemettuleri.map((item, index) => (
                <tr
                  key={`${item.sembol}-${item.tarih}`}
                  className={`border-t border-zinc-100 ${index % 2 === 1 ? "bg-sky-50" : "bg-white"}`}
                >
                  <td className="px-4 py-3 font-semibold text-zinc-900">{item.sembol}</td>
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

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Haziran Ayı Temettü Takvimi Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Haziran ayı temettü takvimi sayfası, Borsa İstanbul’da işlem gören şirketlerin
            Haziran 2026 dönemindeki temettü dağıtım tarihlerini, hisse başına brüt ve net
            temettü ödemelerini ve toplam dağıtım tutarlarını tek ekranda takip etmek isteyen
            yatırımcılar için hazırlanmıştır. Bu sayfa sayesinde temettü veren hisseleri tarih,
            verim ve ödeme tutarına göre detaylı şekilde inceleyebilirsiniz.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Temettü yatırımı yapan kullanıcılar için dağıtım tarihi, temettü verimi, hisse başına
            net ödeme ve şirketlerin dağıtma oranı oldukça önemlidir. Özellikle düzenli kâr payı
            ödeyen şirketler uzun vadeli yatırımcıların radarında yer alırken, yüksek temettü
            verimine sahip hisseler de temettü odaklı portföylerde öne çıkmaktadır.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Sayfada yer alan Haziran 2026 temettü takvimi verileri sayesinde hangi şirketin hangi
            tarihte temettü vereceğini, hisse başına ne kadar brüt ve net ödeme yapacağını ve
            toplam temettü büyüklüğünü karşılaştırmalı olarak görebilirsiniz. Bu yapı, hem temettü
            emekliliği hedefleyen yatırımcılar hem de şirket bazlı kâr dağıtım takibi yapan
            kullanıcılar için pratik bir referans sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel Haziran ayı temettü takvimi, BIST temettü veren hisseler, hisse başı brüt ve
            net temettü tutarları, dağıtma oranları ve şirket bazlı kâr payı ödemelerini takip
            etmek için bu sayfayı düzenli olarak inceleyebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
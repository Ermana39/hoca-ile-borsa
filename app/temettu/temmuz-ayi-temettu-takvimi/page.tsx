import Link from "next/link";

const temmuzTemettuleri = [
  { sembol: "OSMEN", tarih: "29 Temmuz 2026", verim: "% 0,67", brut: "₺0,05", net: "₺0,0424", toplam: "₺19.999.992", oran: "%12" },
  { sembol: "GRTHO", tarih: "22 Temmuz 2026", verim: "% 0,16", brut: "₺0,45", net: "₺0,3817", toplam: "₺56.133.900", oran: "%4" },
  { sembol: "TAVHL", tarih: "21 Temmuz 2026", verim: "% 0,52", brut: "₺1,80", net: "₺1,5342", toplam: "₺655.718.977", oran: "%23" },
  { sembol: "EGPRO", tarih: "16 Temmuz 2026", verim: "% 2,05", brut: "₺0,64", net: "₺0,5459", toplam: "₺349.999.981", oran: "%33" },
  { sembol: "LIDER", tarih: "8 Temmuz 2026", verim: "% 0,03", brut: "₺0,04", net: "₺0,0303", toplam: "₺29.411.745", oran: "%2" },
  { sembol: "LILAK", tarih: "6 Temmuz 2026", verim: "% 3,63", brut: "₺1,53", net: "₺1,2966", toplam: "₺900.025.000", oran: "%53" },
];

export default function TemmuzAyiTemettuTakvimiPage() {
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
          Temmuz Ayı Temettü Takvimi
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
              {temmuzTemettuleri.map((item, index) => (
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
      </div>
    </main>
  );
}
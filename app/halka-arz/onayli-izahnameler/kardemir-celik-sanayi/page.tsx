import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "kardemir-celik-sanayi";

const talepVerileri = [
  {
    kategori: "Yurt İçi Bireysel Yatırımcılar",
    tahsisat: 51_200_000,
    talep: 70_702_110,
    talepKati: 70_702_110 / 51_200_000,
  },
  {
    kategori: "Yüksek Talepte Bulunan Yatırımcılar",
    tahsisat: 12_800_000,
    talep: 172_090_729,
    talepKati: 172_090_729 / 12_800_000,
  },
  {
    kategori: "Yurt İçi Kurumsal Yatırımcılar",
    tahsisat: 38_400_000,
    talep: 242_608_772,
    talepKati: 242_608_772 / 38_400_000,
  },
  {
    kategori: "Yurt Dışı Kurumsal Yatırımcılar",
    tahsisat: 25_600_000,
    talep: 62_235_000,
    talepKati: 62_235_000 / 25_600_000,
  },
];

const toplamTahsisat = talepVerileri.reduce(
  (toplam, satir) => toplam + satir.tahsisat,
  0,
);
const toplamTalep = talepVerileri.reduce(
  (toplam, satir) => toplam + satir.talep,
  0,
);

const sayiFormatla = (deger: number) =>
  new Intl.NumberFormat("tr-TR").format(deger);

const katFormatla = (deger: number) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(deger);

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function KardemirCelikSanayiPage() {
  return (
    <>
      <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Halka Arz Talep Sonuçları
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Yatırımcı kategorilerine göre planlanan tahsisat, gerçekleşen
              talep ve tahsisata kıyasla oluşan talep katları.
            </p>
          </div>

          <div className="grid gap-3 border-b border-slate-200 bg-slate-50 p-4 sm:grid-cols-3 sm:p-6">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Toplam Arz
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {sayiFormatla(toplamTahsisat)} TL
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Toplam Talep
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                {sayiFormatla(toplamTalep)} TL
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Toplam Talep Katı
              </p>
              <p className="mt-1 text-xl font-bold text-emerald-800">
                {katFormatla(toplamTalep / toplamTahsisat)} kat
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold sm:px-6">
                    Yatırımcı Grubu
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                    Tahsisat
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-right font-semibold">
                    Gerçekleşen Talep
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-right font-semibold sm:px-6">
                    Talep Katı
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {talepVerileri.map((satir) => (
                  <tr key={satir.kategori} className="hover:bg-slate-50">
                    <td className="px-4 py-4 font-medium text-slate-900 sm:px-6">
                      {satir.kategori}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                      {sayiFormatla(satir.tahsisat)} TL
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                      {sayiFormatla(satir.talep)} TL
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right font-bold text-slate-900 sm:px-6">
                      {katFormatla(satir.talepKati)} kat
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-100">
                <tr>
                  <td className="px-4 py-4 font-bold text-slate-900 sm:px-6">
                    Toplam
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right font-bold text-slate-900">
                    {sayiFormatla(toplamTahsisat)} TL
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right font-bold text-slate-900">
                    {sayiFormatla(toplamTalep)} TL
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right font-bold text-emerald-700 sm:px-6">
                    {katFormatla(toplamTalep / toplamTahsisat)} kat
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
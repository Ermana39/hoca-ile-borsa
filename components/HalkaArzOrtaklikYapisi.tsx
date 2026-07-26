import type { OrtaklikYapisi } from "@/lib/halka-arz";

type Props = {
  sirketAdi: string;
  veri?: OrtaklikYapisi;
};

export default function HalkaArzOrtaklikYapisi({
  sirketAdi,
  veri,
}: Props) {
  if (!veri) return null;

  const aciklamalar = [
    veri.ozet,
    ...(veri.aciklamalar ?? []),
  ].filter((metin): metin is string => Boolean(metin?.trim()));
  const anaOrtakBilgileri = [
    veri.anaOrtak
      ? { label: "Ana ortak", value: veri.anaOrtak }
      : null,
    veri.nihaiKontrolSahibi
      ? { label: "Nihai kontrol sahibi", value: veri.nihaiKontrolSahibi }
      : null,
  ].filter(
    (bilgi): bilgi is { label: string; value: string } => bilgi !== null
  );
  const paySahipleri = veri.paySahipleri ?? [];
  const yonetim = veri.yonetim ?? [];
  const grupSirketleri = veri.grupSirketleri ?? [];
  const paySatanOrtaklar = veri.halkaArzdaPaySatanOrtaklar ?? [];

  const gorunurIcerikVar =
    aciklamalar.length > 0 ||
    anaOrtakBilgileri.length > 0 ||
    paySahipleri.length > 0 ||
    yonetim.length > 0 ||
    grupSirketleri.length > 0 ||
    paySatanOrtaklar.length > 0;

  if (!gorunurIcerikVar) return null;

  return (
    <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Ortaklık ve Yönetim Yapısı
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {sirketAdi} pay sahipleri, yönetimi ve grup bağlantıları
          </p>
        </div>
        {veri.veriTarihi && (
          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Veri tarihi: {veri.veriTarihi}
          </span>
        )}
      </div>

      {anaOrtakBilgileri.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {anaOrtakBilgileri.map((bilgi) => (
            <div
              key={bilgi.label}
              className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                {bilgi.label}
              </div>
              <div className="mt-2 text-base font-bold text-slate-900">
                {bilgi.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {aciklamalar.length > 0 && (
        <div className="mt-5 space-y-3">
          {aciklamalar.map((metin, index) => (
            <p key={index} className="text-sm leading-7 text-slate-700">
              {metin}
            </p>
          ))}
        </div>
      )}

      {paySahipleri.length > 0 && (
        <div className="mt-6">
          <h3 className="text-base font-bold text-slate-900">Pay Sahipleri</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                    Pay sahibi
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                    Konumu
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                    Pay oranı
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                    Oy oranı
                  </th>
                </tr>
              </thead>
              <tbody>
                {paySahipleri.map((paySahibi, index) => (
                  <tr
                    key={`${paySahibi.ad}-${index}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">
                      {paySahibi.ad}
                      {paySahibi.not && (
                        <span className="mt-1 block font-normal text-slate-500">
                          {paySahibi.not}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {paySahibi.rol ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {paySahibi.payOrani ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {paySahibi.oyOrani ?? "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {yonetim.length > 0 && (
        <div className="mt-6">
          <h3 className="text-base font-bold text-slate-900">Yönetim</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {yonetim.map((yonetici, index) => (
              <div
                key={`${yonetici.ad}-${yonetici.gorev}-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="font-semibold text-slate-900">{yonetici.ad}</div>
                <div className="mt-1 text-sm text-slate-600">
                  {yonetici.gorev}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {grupSirketleri.length > 0 && (
        <div className="mt-6">
          <h3 className="text-base font-bold text-slate-900">
            Bağlı Ortaklıklar ve İştirakler
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {grupSirketleri.map((sirket, index) => (
              <div
                key={`${sirket.ad}-${index}`}
                className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4"
              >
                <div className="font-semibold text-slate-900">{sirket.ad}</div>
                <div className="mt-1 text-sm text-indigo-800">
                  {[sirket.iliski, sirket.payOrani].filter(Boolean).join(" · ")}
                </div>
                {sirket.faaliyet && (
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {sirket.faaliyet}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {paySatanOrtaklar.length > 0 && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="text-sm font-bold text-amber-950">
            Halka Arzda Pay Satması Planlanan Ortaklar
          </h3>
          <ul className="mt-3 space-y-2">
            {paySatanOrtaklar.map((ortak, index) => (
              <li key={`${ortak}-${index}`} className="text-sm text-amber-900">
                {ortak}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-5 text-amber-800">
            Bu liste, halka arzda pay satması planlanan mevcut ortakları
            gösterir; tek başına şirketin kontrol sahibini veya halka arz
            sonrasındaki kesin ortaklık oranlarını göstermez.
          </p>
        </div>
      )}

      <div className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
        {veri.kaynakNotu ||
          "Kaynak: Taslak izahname ve şirketin kamuya açık kurumsal bilgileri."}
        <span className="ml-1">
          Taslak aşamasındaki ortaklık ve yönetim yapısı, onaylı izahname
          yayımlanana kadar değişebilir.
        </span>
      </div>
    </section>
  );
}

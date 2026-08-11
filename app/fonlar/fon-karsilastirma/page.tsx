import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import { FonBreadcrumb } from "../_components/FonUi";
import {
  formatCompactTL,
  formatDate,
  formatDecimal,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  valueColorClass,
} from "@/lib/fon-format";
import { getCurrentFundsData, type Fund } from "@/lib/fon-platform";

export const metadata: Metadata = {
  title: "Fon Karşılaştırma: Getiri, Risk ve Para Akışı Analizi",
  description:
    "2 ila 5 yatırım fonunu risk, güncel fiyat, fon büyüklüğü, yatırımcı sayısı, para akışı ve dönemsel getiriyle karşılaştırın.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/fon-karsilastirma",
  },
};

function parseCodes(value?: string | string[]) {
  const raw = Array.isArray(value) ? value.join(",") : value ?? "";
  return raw
    .split(/[,\s]+/)
    .map((item) => item.trim().toUpperCase())
    .filter(Boolean)
    .slice(0, 5);
}

export default async function FonKarsilastirmaPage({
  searchParams,
}: {
  searchParams: Promise<{ fonlar?: string | string[] }>;
}) {
  const params = await searchParams;
  const data = getCurrentFundsData();
  const codes = parseCodes(params.fonlar);
  const selectedFunds = codes
    .map((code) => data.fonlar.find((fund) => fund.kod === code))
    .filter((fund): fund is Fund => Boolean(fund));
  const comparisonRows: {
    label: string;
    render: (fund: Fund) => string;
    value?: (fund: Fund) => number | null;
  }[] = [
    { label: "Fon Adı", render: (fund) => fund.ad },
    { label: "Yönetici", render: (fund) => fund.yonetici },
    { label: "Risk", render: (fund) => formatNumber(fund.riskDegeri) },
    { label: "Güncel Fiyat", render: (fund) => `${formatDecimal(fund.fiyat, 6)} TL` },
    { label: "Fon Toplam Değeri", render: (fund) => formatCompactTL(fund.fonToplamDeger) },
    { label: "Yatırımcı Sayısı", render: (fund) => formatNumber(fund.kisiSayisi) },
    {
      label: "Günlük Para Akışı",
      render: (fund) => formatSignedTL(fund.paraAkisi.gunluk),
      value: (fund) => fund.paraAkisi.gunluk,
    },
    {
      label: "5 Günlük Para Akışı",
      render: (fund) => formatSignedTL(fund.paraAkisi.besGun),
      value: (fund) => fund.paraAkisi.besGun,
    },
    {
      label: "1 Aylık Para Akışı",
      render: (fund) => formatSignedTL(fund.paraAkisi.birAy),
      value: (fund) => fund.paraAkisi.birAy,
    },
    {
      label: "3 Aylık Para Akışı",
      render: (fund) => formatSignedTL(fund.paraAkisi.ucAy),
      value: (fund) => fund.paraAkisi.ucAy,
    },
    {
      label: "1A",
      render: (fund) => formatSignedPercent(fund.getiriler.birAy),
      value: (fund) => fund.getiriler.birAy,
    },
    {
      label: "3A",
      render: (fund) => formatSignedPercent(fund.getiriler.ucAy),
      value: (fund) => fund.getiriler.ucAy,
    },
    {
      label: "6A",
      render: (fund) => formatSignedPercent(fund.getiriler.altiAy),
      value: (fund) => fund.getiriler.altiAy,
    },
    {
      label: "YBB",
      render: (fund) => formatSignedPercent(fund.getiriler.yilbasi),
      value: (fund) => fund.getiriler.yilbasi,
    },
    {
      label: "1Y",
      render: (fund) => formatSignedPercent(fund.getiriler.birYil),
      value: (fund) => fund.getiriler.birYil,
    },
    {
      label: "3Y",
      render: (fund) => formatSignedPercent(fund.getiriler.ucYil),
      value: (fund) => fund.getiriler.ucYil,
    },
    {
      label: "5Y",
      render: (fund) => formatSignedPercent(fund.getiriler.besYil),
      value: (fund) => fund.getiriler.besYil,
    },
  ];

  const datalistFunds = data.fonlar
    .filter((fund) => fund.aktifMi)
    .slice()
    .sort((a, b) => a.kod.localeCompare(b.kod, "tr"));

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Fon Karşılaştırma" />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(data.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Karşılaştırma
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            İki ila beş yatırım fonunu getiri, risk, fon büyüklüğü, yatırımcı
            sayısı ve para akışı bakımından yan yana değerlendirin. Benzer
            stratejiye sahip fonların güçlü ve zayıf yönlerini tek tabloda görün.
          </p>
        </section>

        <form action="/fonlar/fon-karsilastirma" className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <label className="text-sm font-semibold text-slate-700">
            Fon Kodları
            <input
              name="fonlar"
              defaultValue={codes.join(", ")}
              list="fon-kodlari"
              placeholder="AAL, PHE, TLY"
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none focus:border-blue-400"
            />
          </label>
          <datalist id="fon-kodlari">
            {datalistFunds.map((fund) => (
              <option key={fund.kod} value={fund.kod}>
                {fund.ad}
              </option>
            ))}
          </datalist>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="submit" className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">
              Karşılaştır
            </button>
          </div>
        </form>

        {selectedFunds.length < 2 ? (
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            Karşılaştırma için en az 2 fon kodu seçin.
          </section>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[1120px] text-sm">
              <thead className="bg-slate-100 text-left text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Metrik</th>
                  {selectedFunds.map((fund) => (
                    <th key={fund.kod} className="px-4 py-3 text-right font-semibold">
                      {fund.kod}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                    {selectedFunds.map((fund) => {
                      const value = row.value?.(fund) ?? null;

                      return (
                        <td key={`${fund.kod}-${row.label}`} className={`px-4 py-3 text-right ${valueColorClass(value)}`}>
                          {row.render(fund)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Yatırım Fonları Karşılaştırılırken Nelere Bakılmalı?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Sağlıklı bir fon karşılaştırması için öncelikle benzer yatırım
                stratejisine ve varlık dağılımına sahip fonlar seçilmelidir. Hisse
                senedi yoğun bir fon ile para piyasası fonunun getiri ve risk
                yapısı farklıdır; bu nedenle yalnızca en yüksek getiriye bakmak
                yanıltıcı olabilir.
              </p>
              <p>
                Bir aylık ve üç aylık getiriler güncel performansı gösterirken,
                bir yıl ve daha uzun dönemler fonun farklı piyasa koşullarındaki
                seyrini anlamaya yardım eder. Dönemler arasında belirgin fark varsa
                fonun son dönemde hızlanıp hızlanmadığı ayrıca değerlendirilmelidir.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Risk değeri, fon büyüklüğü ve yatırımcı sayısı performans
                verilerini tamamlar. Para akışının farklı dönemlerde aynı yönde
                olması yatırımcı ilgisindeki eğilimi gösterirken, tek günlük
                değişimler geçici piyasa hareketlerinden etkilenebilir.
              </p>
              <p>
                Daha fazla aday bulmak için <Link href="/fonlar/fon-tarayici" className="font-semibold text-blue-700 hover:underline">fon tarayıcıyı</Link>,
                fon bazında grafik ve tarihsel inceleme için ilgili fon kodunu,
                yöneticileri karşılaştırmak için <Link href="/fonlar/yoneticiler" className="font-semibold text-blue-700 hover:underline">fon yönetici analizi sayfasını</Link> inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-lg font-bold text-slate-950">
              Tek bir göstergeye göre fon seçilir mi?
            </h3>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
              Hayır. Getiri, risk seviyesi, yatırım süresi, fonun yatırım yaptığı
              varlıklar, yönetim yaklaşımı ve para akışı birlikte değerlendirilmelidir.
              Geçmiş performans gelecekte aynı getirinin oluşacağını garanti etmez.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

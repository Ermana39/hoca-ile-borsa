"use client";

import { useSearchParams } from "next/navigation";
import {
  formatCompactTL,
  formatDecimal,
  formatNumber,
  formatSignedPercent,
  formatSignedTL,
  valueColorClass,
} from "@/lib/fon-format";
import type { FundPeriodValues, FundReturns } from "@/lib/fon-platform";

export type ComparisonFund = {
  kod: string;
  ad: string;
  yonetici: string;
  aktifMi: boolean;
  riskDegeri: number | null;
  fiyat: number | null;
  fonToplamDeger: number | null;
  kisiSayisi: number | null;
  paraAkisi: FundPeriodValues;
  getiriler: FundReturns;
};

function parseCodes(value: string | null) {
  return (value ?? "")
    .split(/[,\s]+/)
    .map((item) => item.trim().toUpperCase())
    .filter(Boolean)
    .slice(0, 5);
}

export default function FonKarsilastirmaClient({ funds }: { funds: ComparisonFund[] }) {
  const searchParams = useSearchParams();
  const codes = parseCodes(searchParams.get("fonlar"));
  const selectedFunds = codes
    .map((code) => funds.find((fund) => fund.kod === code))
    .filter((fund): fund is ComparisonFund => Boolean(fund));
  const datalistFunds = funds
    .filter((fund) => fund.aktifMi)
    .slice()
    .sort((a, b) => a.kod.localeCompare(b.kod, "tr"));
  const comparisonRows: {
    label: string;
    render: (fund: ComparisonFund) => string;
    value?: (fund: ComparisonFund) => number | null;
  }[] = [
    { label: "Fon Adı", render: (fund) => fund.ad },
    { label: "Yönetici", render: (fund) => fund.yonetici },
    { label: "Risk", render: (fund) => formatNumber(fund.riskDegeri) },
    { label: "Güncel Fiyat", render: (fund) => `${formatDecimal(fund.fiyat, 6)} TL` },
    { label: "Fon Toplam Değeri", render: (fund) => formatCompactTL(fund.fonToplamDeger) },
    { label: "Yatırımcı Sayısı", render: (fund) => formatNumber(fund.kisiSayisi) },
    { label: "Günlük Para Akışı", render: (fund) => formatSignedTL(fund.paraAkisi.gunluk), value: (fund) => fund.paraAkisi.gunluk },
    { label: "5 Günlük Para Akışı", render: (fund) => formatSignedTL(fund.paraAkisi.besGun), value: (fund) => fund.paraAkisi.besGun },
    { label: "1 Aylık Para Akışı", render: (fund) => formatSignedTL(fund.paraAkisi.birAy), value: (fund) => fund.paraAkisi.birAy },
    { label: "3 Aylık Para Akışı", render: (fund) => formatSignedTL(fund.paraAkisi.ucAy), value: (fund) => fund.paraAkisi.ucAy },
    { label: "1A", render: (fund) => formatSignedPercent(fund.getiriler.birAy), value: (fund) => fund.getiriler.birAy },
    { label: "3A", render: (fund) => formatSignedPercent(fund.getiriler.ucAy), value: (fund) => fund.getiriler.ucAy },
    { label: "6A", render: (fund) => formatSignedPercent(fund.getiriler.altiAy), value: (fund) => fund.getiriler.altiAy },
    { label: "YBB", render: (fund) => formatSignedPercent(fund.getiriler.yilbasi), value: (fund) => fund.getiriler.yilbasi },
    { label: "1Y", render: (fund) => formatSignedPercent(fund.getiriler.birYil), value: (fund) => fund.getiriler.birYil },
    { label: "3Y", render: (fund) => formatSignedPercent(fund.getiriler.ucYil), value: (fund) => fund.getiriler.ucYil },
    { label: "5Y", render: (fund) => formatSignedPercent(fund.getiriler.besYil), value: (fund) => fund.getiriler.besYil },
  ];

  return (
    <>
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
          {datalistFunds.map((fund) => <option key={fund.kod} value={fund.kod}>{fund.ad}</option>)}
        </datalist>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="submit" className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">Karşılaştır</button>
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
                {selectedFunds.map((fund) => <th key={fund.kod} className="px-4 py-3 text-right font-semibold">{fund.kod}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row) => (
                <tr key={row.label} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                  {selectedFunds.map((fund) => {
                    const value = row.value?.(fund) ?? null;
                    return <td key={`${fund.kod}-${row.label}`} className={`px-4 py-3 text-right ${valueColorClass(value)}`}>{row.render(fund)}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

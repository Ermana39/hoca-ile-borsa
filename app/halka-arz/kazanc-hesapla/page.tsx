"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function parseNumber(value: string) {
  const normalized = value.replace(",", ".");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

function formatMoney(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function KazancHesaplaPage() {
  const [lot, setLot] = useState("");
  const [halkaArzFiyati, setHalkaArzFiyati] = useState("");
  const [tavanSayisi, setTavanSayisi] = useState("1");

  const sonuc = useMemo(() => {
    const lotValue = parseNumber(lot);
    const fiyatValue = parseNumber(halkaArzFiyati);
    const tavanValue = Number(tavanSayisi);

    if (!lot || !halkaArzFiyati) {
      return {
        tavanFiyati: 0,
        toplamDeger: 0,
        kar: 0,
        yuzdeMarj: 0,
      };
    }

    if (lotValue <= 0 || fiyatValue <= 0) {
      return {
        tavanFiyati: 0,
        toplamDeger: 0,
        kar: 0,
        yuzdeMarj: 0,
      };
    }

    const tavanFiyati = fiyatValue * Math.pow(1.1, tavanValue);
    const toplamMaliyet = lotValue * fiyatValue;
    const toplamDeger = lotValue * tavanFiyati;
    const kar = toplamDeger - toplamMaliyet;
    const yuzdeMarj = (kar / toplamMaliyet) * 100;

    return {
      tavanFiyati,
      toplamDeger,
      kar,
      yuzdeMarj,
    };
  }, [lot, halkaArzFiyati, tavanSayisi]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/halka-arz"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Kazanç Hesapla
        </h1>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Lot Sayısı
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={lot}
              onChange={(e) => setLot(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 145"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Halka Arz Fiyatı
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={halkaArzFiyati}
              onChange={(e) => setHalkaArzFiyati(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 21,10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Kaçıncı Tavan
            </label>
            <select
              value={tavanSayisi}
              onChange={(e) => setTavanSayisi(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((sayi) => (
                <option key={sayi} value={sayi}>
                  {sayi}. Tavan
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
            <div className="mb-2 text-sm font-semibold text-zinc-600">
              {tavanSayisi}. Tavan Fiyatı
            </div>
            <div className="text-2xl font-bold text-zinc-900">
              {formatMoney(sonuc.tavanFiyati)} TL
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
            <div className="mb-2 text-sm font-semibold text-zinc-600">
              Toplam Değer
            </div>
            <div className="text-2xl font-bold text-zinc-900">
              {formatMoney(sonuc.toplamDeger)} TL
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-yellow-50 p-4">
            <div className="mb-2 text-sm font-semibold text-zinc-600">
              Kâr
            </div>
            <div className="text-2xl font-bold text-zinc-900">
              {formatMoney(sonuc.kar)} TL
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
            <div className="mb-2 text-sm font-semibold text-zinc-600">
              Yüzdelik Marj
            </div>
            <div className="text-2xl font-bold text-zinc-900">
              %{sonuc.yuzdeMarj.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
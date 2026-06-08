"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function parseNumber(value: string) {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

function formatMoney(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

type Satir = { id: number; fiyat: string; lot: string };

let siraNo = 2;

export default function OrtalamaMaliyetHesaplayici() {
  const [satirlar, setSatirlar] = useState<Satir[]>([
    { id: 0, fiyat: "", lot: "" },
    { id: 1, fiyat: "", lot: "" },
  ]);

  const satirGuncelle = (id: number, alan: "fiyat" | "lot", deger: string) => {
    setSatirlar((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [alan]: deger } : s))
    );
  };

  const satirEkle = () => {
    setSatirlar((prev) => [...prev, { id: siraNo++, fiyat: "", lot: "" }]);
  };

  const satirSil = (id: number) => {
    setSatirlar((prev) => (prev.length > 2 ? prev.filter((s) => s.id !== id) : prev));
  };

  const sonuc = useMemo(() => {
    const dolular = satirlar.filter(
      (s) => s.fiyat.trim() !== "" && s.lot.trim() !== ""
    );

    if (dolular.length === 0) {
      return { hazir: false, hata: "" };
    }

    let toplamLot = 0;
    let toplamMaliyet = 0;
    for (const s of dolular) {
      const fiyat = parseNumber(s.fiyat);
      const lot = parseNumber(s.lot);
      if (fiyat <= 0 || lot <= 0) {
        return {
          hazir: false,
          hata: "Fiyat ve lot adedi değerleri 0'dan büyük olmalı.",
        };
      }
      toplamLot += lot;
      toplamMaliyet += fiyat * lot;
    }

    const ortalamaFiyat = toplamMaliyet / toplamLot;

    return { hazir: true, hata: "", toplamLot, toplamMaliyet, ortalamaFiyat };
  }, [satirlar]);

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
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Ortalama Maliyet Hesaplama
        </h1>
        <p className="mb-6 text-base text-zinc-600">
          Farklı fiyatlardan yaptığınız alımları aşağıya ekleyerek toplam lot,
          toplam maliyet ve ağırlıklı ortalama maliyetinizi hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          {satirlar.map((satir, index) => (
            <div key={satir.id} className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-700">
                  Alış Fiyatı (TL) #{index + 1}
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={satir.fiyat}
                  onChange={(e) => satirGuncelle(satir.id, "fiyat", e.target.value)}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
                  placeholder="Örn: 25,40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-700">
                  Lot Adedi #{index + 1}
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={satir.lot}
                  onChange={(e) => satirGuncelle(satir.id, "lot", e.target.value)}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
                  placeholder="Örn: 100"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => satirSil(satir.id)}
                  disabled={satirlar.length <= 2}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                >
                  Sil
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={satirEkle}
            className="inline-block rounded-xl border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            + Alım Ekle
          </button>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            {sonuc.hata}
          </div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Toplam Lot
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.toplamLot ?? 0)}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Toplam Maliyet
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.toplamMaliyet ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Ağırlıklı Ortalama Fiyat
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.ortalamaFiyat ?? 0)} TL/lot
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu hesaplama tahmini amaçlıdır. Bu araç yatırım tavsiyesi değildir.</div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

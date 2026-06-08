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

function formatPercent(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function KarZararHesaplamaPage() {
  const [alisFiyati, setAlisFiyati] = useState("");
  const [satisFiyati, setSatisFiyati] = useState("");
  const [lotAdedi, setLotAdedi] = useState("");
  const [komisyonOrani, setKomisyonOrani] = useState("0,03");
  const [stopajOrani, setStopajOrani] = useState("0");

  const sonuc = useMemo(() => {
    const alis = parseNumber(alisFiyati);
    const satis = parseNumber(satisFiyati);
    const lot = parseNumber(lotAdedi);
    const komisyon = parseNumber(komisyonOrani);
    const stopaj = parseNumber(stopajOrani);

    const bosAlanVar =
      alisFiyati.trim() === "" ||
      satisFiyati.trim() === "" ||
      lotAdedi.trim() === "" ||
      komisyonOrani.trim() === "" ||
      stopajOrani.trim() === "";

    if (bosAlanVar) {
      return { hazir: false, hata: "" };
    }

    if (alis <= 0 || satis <= 0 || lot <= 0) {
      return {
        hazir: false,
        hata: "Alış fiyatı, satış fiyatı ve lot adedi 0'dan büyük olmalı.",
      };
    }

    if (komisyon < 0 || stopaj < 0) {
      return { hazir: false, hata: "Komisyon ve stopaj oranları negatif olamaz." };
    }

    const alisTutari = alis * lot;
    const satisTutari = satis * lot;
    const brutKarZarar = satisTutari - alisTutari;
    const komisyonTutari = (alisTutari + satisTutari) * (komisyon / 100);

    const stopajMatrahi = brutKarZarar > 0 ? brutKarZarar : 0;
    const stopajTutari = stopajMatrahi * (stopaj / 100);

    const netKarZarar = brutKarZarar - komisyonTutari - stopajTutari;
    const getiriOrani = (netKarZarar / alisTutari) * 100;

    return {
      hazir: true,
      hata: "",
      brutKarZarar,
      komisyonTutari,
      netKarZarar,
      getiriOrani,
    };
  }, [alisFiyati, satisFiyati, lotAdedi, komisyonOrani, stopajOrani]);

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
          Kâr / Zarar Hesaplama
        </h1>
        <p className="mb-6 text-base text-zinc-600">
          Alış ve satış fiyatınıza, lot adedinize, komisyon ve stopaj oranlarınıza
          göre işleminizin brüt ve net kâr/zararını ve getiri oranını hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Alış Fiyatı (TL)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={alisFiyati}
              onChange={(e) => setAlisFiyati(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 25,40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Satış Fiyatı (TL)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={satisFiyati}
              onChange={(e) => setSatisFiyati(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 28,90"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Lot Adedi
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={lotAdedi}
              onChange={(e) => setLotAdedi(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Komisyon Oranı (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={komisyonOrani}
              onChange={(e) => setKomisyonOrani(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 0,03"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Stopaj Oranı (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={stopajOrani}
              onChange={(e) => setStopajOrani(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 0"
            />
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            {sonuc.hata}
          </div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Brüt Kâr/Zarar
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.brutKarZarar ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Komisyon Tutarı
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.komisyonTutari ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Net Kâr/Zarar
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.netKarZarar ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Getiri Oranı
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  %{formatPercent(sonuc.getiriOrani ?? 0)}
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

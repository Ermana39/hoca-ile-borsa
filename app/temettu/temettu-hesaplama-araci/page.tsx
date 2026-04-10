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

export default function TemettuHesaplamaAraciPage() {
  const [lotAdedi, setLotAdedi] = useState("");
  const [lotBasiBrutTemettu, setLotBasiBrutTemettu] = useState("");
  const [vergiOrani, setVergiOrani] = useState("15");

  const sonuc = useMemo(() => {
    const lot = parseNumber(lotAdedi);
    const lotBasiBrut = parseNumber(lotBasiBrutTemettu);
    const vergi = parseNumber(vergiOrani);

    const bosAlanVar =
      lotAdedi.trim() === "" ||
      lotBasiBrutTemettu.trim() === "" ||
      vergiOrani.trim() === "";

    if (bosAlanVar) {
      return {
        hazir: false,
        hata: "",
        toplamBrut: 0,
        kesintiTutari: 0,
        toplamNet: 0,
        lotBasiNet: 0,
      };
    }

    if (lot <= 0 || lotBasiBrut <= 0) {
      return {
        hazir: false,
        hata: "Lot adedi ve lot başına brüt temettü 0'dan büyük olmalı.",
        toplamBrut: 0,
        kesintiTutari: 0,
        toplamNet: 0,
        lotBasiNet: 0,
      };
    }

    if (vergi < 0 || vergi > 100) {
      return {
        hazir: false,
        hata: "Stopaj / vergi oranı 0 ile 100 arasında olmalı.",
        toplamBrut: 0,
        kesintiTutari: 0,
        toplamNet: 0,
        lotBasiNet: 0,
      };
    }

    const vergiCarpani = vergi / 100;
    const toplamBrut = lot * lotBasiBrut;
    const kesintiTutari = toplamBrut * vergiCarpani;
    const toplamNet = toplamBrut - kesintiTutari;
    const lotBasiNet = lotBasiBrut - lotBasiBrut * vergiCarpani;

    return {
      hazir: true,
      hata: "",
      toplamBrut,
      kesintiTutari,
      toplamNet,
      lotBasiNet,
    };
  }, [lotAdedi, lotBasiBrutTemettu, vergiOrani]);

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
            href="/temettu"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Temettü Hesaplama Aracı
        </h1>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
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
              Lot Başına Brüt Temettü (TL)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={lotBasiBrutTemettu}
              onChange={(e) => setLotBasiBrutTemettu(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 2,50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Stopaj / Vergi Oranı (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={vergiOrani}
              onChange={(e) => setVergiOrani(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 15"
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
                  Toplam Brüt Temettü
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.toplamBrut)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Kesinti Tutarı
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.kesintiTutari)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Toplam Net Temettü
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.toplamNet)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Lot Başına Net Temettü
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.lotBasiNet)} TL
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu hesaplama tahmini amaçlıdır.</div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
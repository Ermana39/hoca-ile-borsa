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

export default function SermayeArtirimiHesaplayici() {
  const [mevcutLot, setMevcutLot] = useState("");
  const [bedelliOran, setBedelliOran] = useState("");
  const [bedelliFiyat, setBedelliFiyat] = useState("");
  const [bedelsizOran, setBedelsizOran] = useState("");
  const [ortalamaMaliyet, setOrtalamaMaliyet] = useState("");

  const sonuc = useMemo(() => {
    const lot = parseNumber(mevcutLot);
    const bedelliO = parseNumber(bedelliOran);
    const bedelliF = parseNumber(bedelliFiyat);
    const bedelsizO = parseNumber(bedelsizOran);
    const maliyet = parseNumber(ortalamaMaliyet);

    const bosAlanVar =
      mevcutLot.trim() === "" ||
      bedelliOran.trim() === "" ||
      bedelliFiyat.trim() === "" ||
      bedelsizOran.trim() === "";

    if (bosAlanVar) {
      return { hazir: false, hata: "" };
    }

    if (lot <= 0) {
      return { hazir: false, hata: "Mevcut lot adedi 0'dan büyük olmalı." };
    }

    if (bedelliO < 0 || bedelsizO < 0 || bedelliF < 0) {
      return { hazir: false, hata: "Oran ve fiyat değerleri negatif olamaz." };
    }

    const kullanimHakki = lot * (bedelliO / 100);
    const bedelliMaliyet = kullanimHakki * bedelliF;
    const bedelsizKazanim = lot * (bedelsizO / 100);
    const yeniToplamLot = lot + kullanimHakki + bedelsizKazanim;

    let yeniOrtalamaMaliyet: number | null = null;
    if (ortalamaMaliyet.trim() !== "" && maliyet > 0) {
      const eskiToplamMaliyet = lot * maliyet;
      yeniOrtalamaMaliyet = (eskiToplamMaliyet + bedelliMaliyet) / yeniToplamLot;
    }

    return {
      hazir: true,
      hata: "",
      kullanimHakki,
      bedelliMaliyet,
      bedelsizKazanim,
      yeniToplamLot,
      yeniOrtalamaMaliyet,
    };
  }, [mevcutLot, bedelliOran, bedelliFiyat, bedelsizOran, ortalamaMaliyet]);

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
          Sermaye Artırımı Hesaplama
        </h1>
        <p className="mb-6 text-base text-zinc-600">
          Bedelli ve bedelsiz sermaye artırımı sonrasında elde edeceğiniz yeni
          lot adedini, bedelli maliyetinizi ve yeni ortalama maliyetinizi
          hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Mevcut Lot Adedi
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={mevcutLot}
              onChange={(e) => setMevcutLot(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 1000"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Bedelli Oran (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={bedelliOran}
              onChange={(e) => setBedelliOran(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Bedelli Fiyat (TL)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={bedelliFiyat}
              onChange={(e) => setBedelliFiyat(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 1,00"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Bedelsiz Oran (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={bedelsizOran}
              onChange={(e) => setBedelsizOran(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 25"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Mevcut Ortalama Maliyet (TL) <span className="font-normal text-zinc-400">(isteğe bağlı)</span>
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={ortalamaMaliyet}
              onChange={(e) => setOrtalamaMaliyet(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 30,00"
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
                  Kullanım Hakkı (Lot)
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.kullanimHakki ?? 0)}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Bedelli Maliyet (TL)
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.bedelliMaliyet ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Bedelsiz Kazanım (Lot)
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.bedelsizKazanim ?? 0)}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Yeni Toplam Lot
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.yeniToplamLot ?? 0)}
                </div>
              </div>

              {sonuc.yeniOrtalamaMaliyet !== null && (
                <div className="rounded-2xl border border-zinc-200 bg-sky-50 p-4 md:col-span-2">
                  <div className="mb-2 text-sm font-semibold text-zinc-600">
                    Yeni Ortalama Maliyet (TL/lot)
                  </div>
                  <div className="text-2xl font-bold text-zinc-900">
                    {formatMoney(sonuc.yeniOrtalamaMaliyet ?? 0)} TL
                  </div>
                </div>
              )}
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

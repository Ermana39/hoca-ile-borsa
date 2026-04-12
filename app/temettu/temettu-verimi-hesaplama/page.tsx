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

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function TemettuVerimiHesaplamaPage() {
  const [hisseFiyati, setHisseFiyati] = useState("");
  const [lotBasiBrutTemettu, setLotBasiBrutTemettu] = useState("");
  const [lotAdedi, setLotAdedi] = useState("");
  const [vergiOrani, setVergiOrani] = useState("15");

  const sonuc = useMemo(() => {
    const fiyat = parseNumber(hisseFiyati);
    const lotBasiBrut = parseNumber(lotBasiBrutTemettu);
    const lot = parseNumber(lotAdedi);
    const vergi = parseNumber(vergiOrani);

    const bosZorunluAlanVar =
      hisseFiyati.trim() === "" ||
      lotBasiBrutTemettu.trim() === "" ||
      vergiOrani.trim() === "";

    if (bosZorunluAlanVar) {
      return {
        hazir: false,
        hata: "",
        brutVerim: 0,
        netVerim: 0,
        lotBasiBrut: 0,
        lotBasiNet: 0,
        toplamYatirimTutari: 0,
        toplamBrutTemettu: 0,
        toplamNetTemettu: 0,
        lotGirildi: false,
      };
    }

    if (fiyat <= 0) {
      return {
        hazir: false,
        hata: "Hisse fiyatı 0'dan büyük olmalı.",
        brutVerim: 0,
        netVerim: 0,
        lotBasiBrut: 0,
        lotBasiNet: 0,
        toplamYatirimTutari: 0,
        toplamBrutTemettu: 0,
        toplamNetTemettu: 0,
        lotGirildi: false,
      };
    }

    if (lotBasiBrut <= 0) {
      return {
        hazir: false,
        hata: "Lot başına brüt temettü 0'dan büyük olmalı.",
        brutVerim: 0,
        netVerim: 0,
        lotBasiBrut: 0,
        lotBasiNet: 0,
        toplamYatirimTutari: 0,
        toplamBrutTemettu: 0,
        toplamNetTemettu: 0,
        lotGirildi: false,
      };
    }

    if (vergi < 0 || vergi > 100) {
      return {
        hazir: false,
        hata: "Stopaj / vergi oranı 0 ile 100 arasında olmalı.",
        brutVerim: 0,
        netVerim: 0,
        lotBasiBrut: 0,
        lotBasiNet: 0,
        toplamYatirimTutari: 0,
        toplamBrutTemettu: 0,
        toplamNetTemettu: 0,
        lotGirildi: false,
      };
    }

    if (lot < 0) {
      return {
        hazir: false,
        hata: "Lot adedi negatif olamaz.",
        brutVerim: 0,
        netVerim: 0,
        lotBasiBrut: 0,
        lotBasiNet: 0,
        toplamYatirimTutari: 0,
        toplamBrutTemettu: 0,
        toplamNetTemettu: 0,
        lotGirildi: false,
      };
    }

    const vergiCarpani = vergi / 100;
    const lotBasiNet = lotBasiBrut - lotBasiBrut * vergiCarpani;
    const brutVerim = (lotBasiBrut / fiyat) * 100;
    const netVerim = (lotBasiNet / fiyat) * 100;

    const lotGirildi = lotAdedi.trim() !== "" && lot > 0;
    const toplamYatirimTutari = lotGirildi ? lot * fiyat : 0;
    const toplamBrutTemettu = lotGirildi ? lot * lotBasiBrut : 0;
    const toplamNetTemettu = lotGirildi ? lot * lotBasiNet : 0;

    return {
      hazir: true,
      hata: "",
      brutVerim,
      netVerim,
      lotBasiBrut,
      lotBasiNet,
      toplamYatirimTutari,
      toplamBrutTemettu,
      toplamNetTemettu,
      lotGirildi,
    };
  }, [hisseFiyati, lotBasiBrutTemettu, lotAdedi, vergiOrani]);

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

        <section className="mb-6">
          <ReklamAlani variant="yatay" />
        </section>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Temettü Verimi Hesaplama
        </h1>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Hisse Fiyatı (TL)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={hisseFiyati}
              onChange={(e) => setHisseFiyati(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 48,70"
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
              Lot Adedi (Opsiyonel)
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
                  Brüt Temettü Verimi
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  %{formatPercent(sonuc.brutVerim)}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Net Temettü Verimi
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  %{formatPercent(sonuc.netVerim)}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-yellow-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Lot Başına Brüt Temettü
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.lotBasiBrut)} TL
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

              {sonuc.lotGirildi && (
                <>
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-zinc-600">
                      Toplam Yatırım Tutarı
                    </div>
                    <div className="text-2xl font-bold text-zinc-900">
                      {formatMoney(sonuc.toplamYatirimTutari)} TL
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-zinc-600">
                      Toplam Brüt Temettü
                    </div>
                    <div className="text-2xl font-bold text-zinc-900">
                      {formatMoney(sonuc.toplamBrutTemettu)} TL
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:col-span-2">
                    <div className="mb-2 text-sm font-semibold text-zinc-600">
                      Toplam Net Temettü
                    </div>
                    <div className="text-2xl font-bold text-zinc-900">
                      {formatMoney(sonuc.toplamNetTemettu)} TL
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu hesaplama tahmini amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}
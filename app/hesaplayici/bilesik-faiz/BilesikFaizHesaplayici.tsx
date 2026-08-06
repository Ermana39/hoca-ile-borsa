"use client";

import Link from "@/components/NoPrefetchLink";
import { useMemo, useState } from "react";
import { HesaplayiciRehberi } from "@/components/HesaplayiciRehberi";

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

export default function BilesikFaizHesaplayici() {
  const [anaPara, setAnaPara] = useState("10.000");
  const [aylikKatki, setAylikKatki] = useState("1.000");
  const [yillikGetiri, setYillikGetiri] = useState("30");
  const [sure, setSure] = useState("10");

  const sonuc = useMemo(() => {
    const ap = parseNumber(anaPara);
    const ak = parseNumber(aylikKatki);
    const yg = parseNumber(yillikGetiri);
    const s = parseNumber(sure);

    if ([anaPara, aylikKatki, yillikGetiri, sure].some((x) => x.trim() === "")) {
      return { hazir: false, hata: "" };
    }
    if (ap < 0 || ak < 0 || yg < 0 || s <= 0) {
      return { hazir: false, hata: "Değerler negatif olamaz, süre 0'dan büyük olmalı." };
    }

    const aylikGetiriOrani = Math.pow(1 + yg / 100, 1 / 12) - 1;
    const yilSayisi = Math.round(s);

    let bakiye = ap;
    const seriler: { yil: number; bakiye: number; toplamKatki: number; faizGetiri: number }[] = [];
    let toplamKatkiKumulatif = ap;

    for (let yil = 1; yil <= yilSayisi; yil++) {
      for (let ay = 0; ay < 12; ay++) {
        bakiye = bakiye * (1 + aylikGetiriOrani) + ak;
        toplamKatkiKumulatif += ak;
      }
      seriler.push({
        yil,
        bakiye,
        toplamKatki: toplamKatkiKumulatif,
        faizGetiri: bakiye - toplamKatkiKumulatif,
      });
    }

    const toplamKatki = ap + ak * 12 * yilSayisi;
    const faizGetiri = bakiye - toplamKatki;

    return {
      hazir: true,
      hata: "",
      yilSayisi,
      bakiye,
      toplamKatki,
      faizGetiri,
      seriler,
    };
  }, [anaPara, aylikKatki, yillikGetiri, sure]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Bileşik Faiz / Birikim Simülatörü</h1>
        <p className="mb-6 text-base text-zinc-600">
          Başlangıç anaparası ve düzenli aylık katkı payıyla bileşik faiz altında paranızın yıllar içinde nasıl büyüdüğünü görün.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Başlangıç Anaparası (TL)</label>
              <input type="text" inputMode="decimal" value={anaPara} onChange={(e) => setAnaPara(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 10.000" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Aylık Katkı (TL)</label>
              <input type="text" inputMode="decimal" value={aylikKatki} onChange={(e) => setAylikKatki(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 1.000" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Yıllık Getiri Oranı (%)</label>
              <input type="text" inputMode="decimal" value={yillikGetiri} onChange={(e) => setYillikGetiri(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 30" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Süre (Yıl)</label>
              <input type="text" inputMode="numeric" value={sure} onChange={(e) => setSure(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 10" />
            </div>
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Yatırılan</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamKatki ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Faiz/Getiri Kazancı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.faizGetiri ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Birikim</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.bakiye ?? 0)} TL</div>
              </div>
            </div>

            <BirikimGrafigi seriler={sonuc.seriler!} />

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}
        <HesaplayiciRehberi slug="bilesik-faiz" />
      </div>
    </main>
  );
}

function BirikimGrafigi({
  seriler,
}: {
  seriler: { yil: number; bakiye: number; toplamKatki: number; faizGetiri: number }[];
}) {
  const width = 720;
  const height = 280;
  const padX = 40;
  const padY = 30;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;

  const maxDeger = Math.max(...seriler.map((s) => s.bakiye), 1);
  const barW = innerW / seriler.length;
  const cubukW = Math.max(2, barW * 0.6);

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <h2 className="mb-4 text-lg font-bold text-zinc-900">Yıllık Birikim Gelişimi</h2>
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="block w-full min-w-[640px]" role="img">
          {[0, 1, 2, 3, 4].map((i) => {
            const yVal = (maxDeger / 4) * i;
            const y = height - padY - (innerH / 4) * i;
            return (
              <g key={i}>
                <line x1={padX} y1={y} x2={width - padX} y2={y} stroke="#e4e4e7" strokeWidth={1} />
                <text x={padX - 6} y={y + 4} textAnchor="end" className="fill-zinc-500" fontSize={10}>
                  {Math.round(yVal).toLocaleString("tr-TR")}
                </text>
              </g>
            );
          })}
          {seriler.map((s, i) => {
            const x = padX + i * barW + (barW - cubukW) / 2;
            const katkiH = (s.toplamKatki / maxDeger) * innerH;
            const faizH = (s.faizGetiri / maxDeger) * innerH;
            const baseY = height - padY;
            return (
              <g key={s.yil}>
                <rect x={x} y={baseY - katkiH} width={cubukW} height={katkiH} fill="#3b82f6" />
                <rect x={x} y={baseY - katkiH - faizH} width={cubukW} height={Math.max(0, faizH)} fill="#10b981" />
                {(i % Math.ceil(seriler.length / 8) === 0 || i === seriler.length - 1) && (
                  <text x={x + cubukW / 2} y={height - padY + 14} textAnchor="middle" className="fill-zinc-500" fontSize={10}>
                    {s.yil}.yıl
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm bg-[#3b82f6]" /> Yatırılan ana para</div>
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm bg-[#10b981]" /> Faiz/Getiri kazancı</div>
      </div>
    </section>
  );
}

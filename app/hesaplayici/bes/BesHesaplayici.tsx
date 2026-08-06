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

export default function BesHesaplayici() {
  const [mevcutYas, setMevcutYas] = useState("30");
  const [emeklilikYasi, setEmeklilikYasi] = useState("56");
  const [aylikKatki, setAylikKatki] = useState("3.000");
  const [getiriOrani, setGetiriOrani] = useState("4");
  const [devletKatkisi, setDevletKatkisi] = useState(true);

  const sonuc = useMemo(() => {
    const mYas = parseNumber(mevcutYas);
    const eYas = parseNumber(emeklilikYasi);
    const aylik = parseNumber(aylikKatki);
    const getiri = parseNumber(getiriOrani);

    if (mevcutYas.trim() === "" || emeklilikYasi.trim() === "" || aylikKatki.trim() === "") {
      return { hazir: false, hata: "" };
    }

    if (mYas <= 0 || eYas <= 0 || aylik <= 0) {
      return { hazir: false, hata: "Yaş ve katkı payı 0'dan büyük olmalı." };
    }
    if (eYas <= mYas) {
      return { hazir: false, hata: "Emeklilik yaşı, mevcut yaştan büyük olmalı." };
    }
    if (eYas < 56) {
      return { hazir: false, hata: "BES'te emeklilik için minimum yaş 56'dır." };
    }
    if (eYas - mYas < 10) {
      return { hazir: false, hata: "BES emekliliği için sistemde en az 10 yıl kalmak gerekir." };
    }

    const yilSayisi = eYas - mYas;
    const aylikGetiri = Math.pow(1 + getiri / 100, 1 / 12) - 1;
    const devletCarpani = devletKatkisi ? 0.25 : 0;

    let kendiBirikim = 0;
    let devletBirikimi = 0;

    const yillikSeriler: {
      yil: number;
      yas: number;
      kendiBirikim: number;
      devletBirikimi: number;
      toplam: number;
    }[] = [];

    for (let yil = 1; yil <= yilSayisi; yil++) {
      for (let ay = 0; ay < 12; ay++) {
        kendiBirikim = kendiBirikim * (1 + aylikGetiri) + aylik;
        devletBirikimi = devletBirikimi * (1 + aylikGetiri) + aylik * devletCarpani;
      }
      yillikSeriler.push({
        yil,
        yas: mYas + yil,
        kendiBirikim,
        devletBirikimi,
        toplam: kendiBirikim + devletBirikimi,
      });
    }

    const toplamOdenenKendi = aylik * 12 * yilSayisi;
    const toplamDevletKatkisi = toplamOdenenKendi * devletCarpani;
    const toplamBirikim = kendiBirikim + devletBirikimi;

    return {
      hazir: true,
      hata: "",
      yilSayisi,
      toplamOdenenKendi,
      toplamDevletKatkisi,
      kendiBirikim,
      devletBirikimi,
      toplamBirikim,
      yillikSeriler,
    };
  }, [mevcutYas, emeklilikYasi, aylikKatki, getiriOrani, devletKatkisi]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">BES Birikim Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Bireysel Emeklilik Sistemi (BES) için aylık katkı payınızı, devlet katkısını ve reel getiriyi dikkate alarak emekliliğinizdeki tahmini birikiminizi hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Mevcut Yaş</label>
              <input type="text" inputMode="numeric" value={mevcutYas} onChange={(e) => setMevcutYas(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 30" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Hedef Emeklilik Yaşı</label>
              <input type="text" inputMode="numeric" value={emeklilikYasi} onChange={(e) => setEmeklilikYasi(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 56" />
              <p className="mt-1 text-xs text-zinc-500">Min 56 yaş, sistemde en az 10 yıl.</p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Aylık Katkı Payı (TL)</label>
            <input type="text" inputMode="decimal" value={aylikKatki} onChange={(e) => setAylikKatki(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 3.000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Tahmini Yıllık Reel Getiri (%)</label>
            <input type="text" inputMode="decimal" value={getiriOrani} onChange={(e) => setGetiriOrani(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 4" />
            <p className="mt-1 text-xs text-zinc-500">Enflasyondan arındırılmış (reel) getiri tahminidir.</p>
          </div>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm">
            <input type="checkbox" checked={devletKatkisi} onChange={(e) => setDevletKatkisi(e.target.checked)} />
            Devlet katkısını dahil et (katkı payının %25&apos;i)
          </label>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Katkınız</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamOdenenKendi ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Devlet Katkısı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamDevletKatkisi ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Birikim (Kendi)</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.kendiBirikim ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Tahmini Birikim (Reel)</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamBirikim ?? 0)} TL</div>
              </div>
            </div>

            <BirikimGrafigi seriler={sonuc.yillikSeriler!} />

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600 space-y-2">
              <div>Bu hesaplama tahminidir. Gerçek birikim fon getirisine ve enflasyona göre değişir.</div>
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}
        <HesaplayiciRehberi slug="bes" />
      </div>
    </main>
  );
}

function BirikimGrafigi({
  seriler,
}: {
  seriler: { yil: number; yas: number; kendiBirikim: number; devletBirikimi: number; toplam: number }[];
}) {
  const width = 720;
  const height = 280;
  const padX = 40;
  const padY = 30;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;

  const maxDeger = Math.max(...seriler.map((s) => s.toplam), 1);
  const barGenisligi = innerW / seriler.length;
  const cubukGenisligi = Math.max(2, barGenisligi * 0.6);

  const yTicks = 4;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <h2 className="mb-4 text-lg font-bold text-zinc-900">Yıllık Birikim Gelişimi</h2>
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="block w-full min-w-[640px]" role="img" aria-label="BES birikim grafiği">
          {Array.from({ length: yTicks + 1 }, (_, i) => {
            const yVal = (maxDeger / yTicks) * i;
            const y = height - padY - (innerH / yTicks) * i;
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
            const x = padX + i * barGenisligi + (barGenisligi - cubukGenisligi) / 2;
            const kendiH = (s.kendiBirikim / maxDeger) * innerH;
            const devletH = (s.devletBirikimi / maxDeger) * innerH;
            const baseY = height - padY;
            return (
              <g key={s.yil}>
                <rect x={x} y={baseY - kendiH} width={cubukGenisligi} height={kendiH} fill="#3b82f6" />
                <rect x={x} y={baseY - kendiH - devletH} width={cubukGenisligi} height={devletH} fill="#f59e0b" />
                {(i % Math.ceil(seriler.length / 8) === 0 || i === seriler.length - 1) && (
                  <text x={x + cubukGenisligi / 2} y={height - padY + 14} textAnchor="middle" className="fill-zinc-500" fontSize={10}>
                    {s.yas}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm bg-[#3b82f6]" /> Kendi birikiminiz</div>
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-sm bg-[#f59e0b]" /> Devlet katkısı</div>
      </div>
    </section>
  );
}

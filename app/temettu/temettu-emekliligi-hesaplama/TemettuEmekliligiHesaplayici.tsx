"use client";

import MarketChart from "@/components/charts/MarketChart";
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
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

type YilSatiri = {
  yil: number;
  portfoy: number;
  aylikTemettu: number;
};

export default function TemettuEmekliligiHesaplayici() {
  const [hedefAylikGelir, setHedefAylikGelir] = useState("50.000");
  const [temettuVerimi, setTemettuVerimi] = useState("5");
  const [mevcutPortfoy, setMevcutPortfoy] = useState("250.000");
  const [aylikYatirim, setAylikYatirim] = useState("15.000");
  const [yillikGetiri, setYillikGetiri] = useState("35");

  const sonuc = useMemo(() => {
    const hedef = parseNumber(hedefAylikGelir);
    const verim = parseNumber(temettuVerimi);
    const portfoy0 = parseNumber(mevcutPortfoy);
    const katki = parseNumber(aylikYatirim);
    const getiri = parseNumber(yillikGetiri);

    if (
      [hedefAylikGelir, temettuVerimi, mevcutPortfoy, aylikYatirim, yillikGetiri].some(
        (x) => x.trim() === ""
      )
    ) {
      return { hazir: false as const, hata: "" };
    }
    if (hedef <= 0 || verim <= 0) {
      return {
        hazir: false as const,
        hata: "Hedef aylık gelir ve temettü verimi 0'dan büyük olmalı.",
      };
    }
    if (portfoy0 < 0 || katki < 0 || getiri < 0) {
      return { hazir: false as const, hata: "Değerler negatif olamaz." };
    }

    const gerekliPortfoy = (hedef * 12) / (verim / 100);
    const suankiAylikTemettu = (portfoy0 * (verim / 100)) / 12;
    const ilerleme = Math.min(100, (portfoy0 / gerekliPortfoy) * 100);

    // Aylık bileşik büyüme + düzenli katkı ile hedefe ulaşma simülasyonu.
    // Getiri, temettülerin yeniden yatırıldığı toplam getiriyi temsil eder.
    const aylikGetiriOrani = Math.pow(1 + getiri / 100, 1 / 12) - 1;
    const MAKS_YIL = 50;

    let bakiye = portfoy0;
    let ulasilanAy: number | null = bakiye >= gerekliPortfoy ? 0 : null;
    const seriler: YilSatiri[] = [];

    for (let ay = 1; ay <= MAKS_YIL * 12; ay++) {
      bakiye = bakiye * (1 + aylikGetiriOrani) + katki;
      if (ulasilanAy === null && bakiye >= gerekliPortfoy) ulasilanAy = ay;
      if (ay % 12 === 0) {
        seriler.push({
          yil: ay / 12,
          portfoy: bakiye,
          aylikTemettu: (bakiye * (verim / 100)) / 12,
        });
      }
      // Grafikte hedefe ulaştıktan sonra en fazla 2 yıl daha göster.
      if (ulasilanAy !== null && ay >= ulasilanAy + 24 && ay % 12 === 0) break;
    }

    return {
      hazir: true as const,
      hata: "",
      gerekliPortfoy,
      suankiAylikTemettu,
      ilerleme,
      ulasilanAy,
      seriler: seriler.slice(0, 30),
    };
  }, [hedefAylikGelir, temettuVerimi, mevcutPortfoy, aylikYatirim, yillikGetiri]);

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

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Temettü Emekliliği Hesaplayıcı
        </h1>
        <p className="mb-6 text-base text-zinc-600">
          Hedeflediğiniz aylık temettü geliri için ne büyüklükte bir portföy
          gerektiğini ve mevcut birikiminiz ile aylık yatırımınızla bu hedefe
          kaç yılda ulaşabileceğinizi hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Hedef Aylık Temettü Geliri (TL)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={hedefAylikGelir}
                onChange={(e) => setHedefAylikGelir(e.target.value)}
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
                placeholder="Örn: 50.000"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Ortalama Net Temettü Verimi (%)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={temettuVerimi}
                onChange={(e) => setTemettuVerimi(e.target.value)}
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
                placeholder="Örn: 5"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Mevcut Portföy (TL)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={mevcutPortfoy}
                onChange={(e) => setMevcutPortfoy(e.target.value)}
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
                placeholder="Örn: 250.000"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Aylık Düzenli Yatırım (TL)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={aylikYatirim}
                onChange={(e) => setAylikYatirim(e.target.value)}
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
                placeholder="Örn: 15.000"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">
                Beklenen Yıllık Getiri (%)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={yillikGetiri}
                onChange={(e) => setYillikGetiri(e.target.value)}
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
                placeholder="Örn: 35"
              />
            </div>
          </div>
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
                  Gerekli Portföy Büyüklüğü
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.gerekliPortfoy)} TL
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Bugünkü Aylık Temettünüz
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.suankiAylikTemettu)} TL
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Hedefe Ulaşma Süresi
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {sonuc.ulasilanAy === 0
                    ? "Hedefe ulaşıldı 🎉"
                    : sonuc.ulasilanAy === null
                      ? "50+ yıl"
                      : `${Math.floor(sonuc.ulasilanAy / 12)} yıl ${sonuc.ulasilanAy % 12} ay`}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
              <div className="mb-2 flex items-center justify-between text-sm font-semibold text-zinc-700">
                <span>Hedefe İlerleme</span>
                <span>%{sonuc.ilerleme.toFixed(1)}</span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${Math.max(1, sonuc.ilerleme)}%` }}
                />
              </div>
            </div>

            {sonuc.seriler.length > 0 && (
              <PortfoyGrafigi
                seriler={sonuc.seriler}
                gerekliPortfoy={sonuc.gerekliPortfoy}
              />
            )}

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              Hesaplama; temettü verimi ve getiri oranının sabit kaldığı,
              temettülerin yeniden yatırıldığı basitleştirilmiş bir modele
              dayanır. Enflasyon, vergi değişiklikleri ve piyasa dalgalanmaları
              sonucu önemli ölçüde etkileyebilir. Bu araç yatırım tavsiyesi
              değildir; bilgilendirme amaçlıdır.
            </div>
          </>
        )}

        <HesaplayiciRehberi slug="temettu-emekliligi" />
      </div>
    </main>
  );
}

function PortfoyGrafigi({
  seriler,
  gerekliPortfoy,
}: {
  seriler: YilSatiri[];
  gerekliPortfoy: number;
}) {
  return (
    <div className="mt-8">
      <MarketChart
        title="Portföyün Yıllara Göre Gelişimi"
        series={seriler.map((item) => ({
          date: `${2000 + item.yil}-01-01`,
          label: `${item.yil}. yıl`,
          value: item.portfoy,
        }))}
        unit="money"
        referenceLine={{ label: "Gerekli portföy", value: gerekliPortfoy }}
        minWidth={760}
      />
    </div>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function parseNumber(value: string) {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

export default function TalepHesaplaClient() {
  const [toplamLot, setToplamLot] = useState("");
  const [bireyselYuzde, setBireyselYuzde] = useState("");
  const [katilimciSayisi, setKatilimciSayisi] = useState("");

  const sonuc = useMemo(() => {
    const toplamLotValue = parseNumber(toplamLot);
    const bireyselYuzdeValue = parseNumber(bireyselYuzde);
    const katilimciSayisiValue = parseNumber(katilimciSayisi);

    const bireyseleAyrilanLot = toplamLotValue * (bireyselYuzdeValue / 100);

    const muhtemelLot =
      katilimciSayisiValue > 0
        ? Math.floor(bireyseleAyrilanLot / katilimciSayisiValue)
        : 0;

    return {
      bireyseleAyrilanLot,
      muhtemelLot,
    };
  }, [toplamLot, bireyselYuzde, katilimciSayisi]);

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

        <h1 className="mb-3 text-3xl font-bold text-zinc-900">
          Halka Arz Talep Hesaplama
        </h1>

        <p className="mb-6 text-sm leading-7 text-zinc-600">
          Halka arz talep hesaplama aracı, toplam lot sayısı, bireysele ayrılan pay oranı ve
          muhtemel katılımcı sayısına göre yatırımcı başına düşebilecek tahmini lot miktarını
          hesaplamak için hazırlanmıştır.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Toplam Lot Sayısı
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={toplamLot}
              onChange={(e) => setToplamLot(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 176000000"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Bireysele Ayrılan %
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={bireyselYuzde}
              onChange={(e) => setBireyselYuzde(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 63"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Muhtemel Katılımcı Sayısı
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={katilimciSayisi}
              onChange={(e) => setKatilimciSayisi(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 3500000"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
            <div className="mb-2 text-sm font-semibold text-zinc-600">
              Bireysele Ayrılan Lot
            </div>
            <div className="text-2xl font-bold text-zinc-900">
              {Math.floor(sonuc.bireyseleAyrilanLot).toLocaleString("tr-TR")}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
            <div className="mb-2 text-sm font-semibold text-zinc-600">
              Muhtemel Düşecek Lot
            </div>
            <div className="text-2xl font-bold text-zinc-900">
              {sonuc.muhtemelLot.toLocaleString("tr-TR")}
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="mb-3 text-xl font-bold text-zinc-900">
            Halka Arz Talep Hesaplama Nasıl Yapılır?
          </h2>
          <p className="text-sm leading-7 text-zinc-600">
            Halka arzlarda yatırımcıya düşebilecek tahmini lot miktarı; toplam halka arz edilen
            lot sayısı, bireysel yatırımcıya ayrılan oran ve talebe katılan kişi sayısına göre
            değişebilir. Bu hesaplama aracı, özellikle eşit dağıtım yöntemiyle gerçekleşen halka
            arzlarda yaklaşık lot beklentisini hızlı şekilde görmek isteyen yatırımcılar için
            hazırlanmıştır.
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Hesaplama sonucu kesin dağıtım anlamına gelmez. Nihai lot miktarı, halka arza gelen
            toplam talep, yatırımcı gruplarına ayrılan tahsisat, dağıtım yöntemi ve resmi sonuçlara
            göre değişebilir. Bu sayfadaki bilgiler yatırım tavsiyesi değildir.
          </p>
        </section>
      </div>
    </main>
  );
}
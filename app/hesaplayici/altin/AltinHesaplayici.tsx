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

const turler = [
  { key: "gram", label: "Gram Altın", gram: 1 },
  { key: "ceyrek", label: "Çeyrek Altın", gram: 1.75 },
  { key: "yarim", label: "Yarım Altın", gram: 3.5 },
  { key: "tam", label: "Tam Altın", gram: 7 },
] as const;

export default function AltinHesaplayici() {
  const [gramFiyati, setGramFiyati] = useState("");
  const [miktar, setMiktar] = useState("");
  const [tur, setTur] = useState<(typeof turler)[number]["key"]>("gram");
  const [spreadOrani, setSpreadOrani] = useState("2");

  const sonuc = useMemo(() => {
    const fiyat = parseNumber(gramFiyati);
    const adet = parseNumber(miktar);
    const spread = parseNumber(spreadOrani);

    const bosAlanVar = gramFiyati.trim() === "" || miktar.trim() === "";
    if (bosAlanVar) {
      return { hazir: false, hata: "" };
    }

    if (fiyat <= 0 || adet <= 0) {
      return { hazir: false, hata: "Gram altın fiyatı ve miktar 0'dan büyük olmalı." };
    }

    if (spread < 0) {
      return { hazir: false, hata: "Spread oranı negatif olamaz." };
    }

    const turBilgi = turler.find((t) => t.key === tur)!;
    const toplamGram = adet * turBilgi.gram;
    const toplamDeger = toplamGram * fiyat;

    const spreadCarpani = spread / 100;
    const alisFiyati = toplamDeger * (1 - spreadCarpani);
    const satisFiyati = toplamDeger * (1 + spreadCarpani);

    return {
      hazir: true,
      hata: "",
      toplamGram,
      toplamDeger,
      alisFiyati,
      satisFiyati,
    };
  }, [gramFiyati, miktar, tur, spreadOrani]);

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
            href="/hesaplayici"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">
          Altın Hesaplama Aracı
        </h1>
        <p className="mb-6 text-base text-zinc-600">
          Gram altın fiyatını manuel girerek elinizdeki gram, çeyrek, yarım veya
          tam altının toplam değerini ve isteğe bağlı alım/satım spread farkını
          hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Gram Altın Fiyatı (TL)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={gramFiyati}
              onChange={(e) => setGramFiyati(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 4.250,00"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Tür
            </label>
            <select
              value={tur}
              onChange={(e) => setTur(e.target.value as (typeof turler)[number]["key"])}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none"
            >
              {turler.map((t) => (
                <option key={t.key} value={t.key}>
                  {t.label} ({t.gram.toLocaleString("tr-TR")} gr)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Miktar (Adet)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={miktar}
              onChange={(e) => setMiktar(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 5"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Alım/Satım Spread Oranı (%) <span className="font-normal text-zinc-400">(isteğe bağlı)</span>
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={spreadOrani}
              onChange={(e) => setSpreadOrani(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 2"
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
                  Toplam Gram
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.toplamGram ?? 0)} gr
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Toplam Değer
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.toplamDeger ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Spread Dahil Alış Değeri
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.alisFiyati ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Spread Dahil Satış Değeri
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.satisFiyati ?? 0)} TL
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu hesaplama tahmini amaçlıdır. Bu araç yatırım tavsiyesi değildir.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Altın Hesaplama Nasıl Yapılır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Altın hesaplama aracımızla gram, çeyrek, yarım veya tam altının güncel gram fiyatına
            göre toplam TL değerini hesaplayabilirsiniz. Çeyrek altın 1,75 gram, yarım altın 3,5 gram,
            tam altın ise yaklaşık 7 gram olarak kabul edilir.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            Hesaplamada kullanılan alış-satış spread&apos;i kuyumcu veya banka gibi alım-satım yapılan
            platforma göre değişebilir. Gram altın fiyatı anlık olarak BIST Kıymetli Madenler ve
            uluslararası piyasalardaki ons fiyatına göre güncellenir.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Çeyrek altın kaç gramdır?</h3>
              <p className="text-sm leading-6 text-zinc-600">Çeyrek altın 1,75 gram, yarım altın 3,5 gram, tam altın ise yaklaşık 7 gramdır.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Gram altın fiyatı neye göre değişir?</h3>
              <p className="text-sm leading-6 text-zinc-600">Gram altın fiyatı uluslararası ons fiyatı ve USD/TL kurunun çarpımından elde edilir. Dolayısıyla hem altın hem de döviz piyasasındaki hareketler fiyatı doğrudan etkiler.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

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

export default function DovizGetiriHesaplayici() {
  const [tutar, setTutar] = useState("");
  const [baslangicKuru, setBaslangicKuru] = useState("");
  const [bitisKuru, setBitisKuru] = useState("");
  const [enflasyonOrani, setEnflasyonOrani] = useState("");

  const sonuc = useMemo(() => {
    const t = parseNumber(tutar);
    const k1 = parseNumber(baslangicKuru);
    const k2 = parseNumber(bitisKuru);
    const enflasyon = parseNumber(enflasyonOrani);

    const bosAlanVar =
      tutar.trim() === "" || baslangicKuru.trim() === "" || bitisKuru.trim() === "";

    if (bosAlanVar) {
      return { hazir: false, hata: "" };
    }

    if (t <= 0 || k1 <= 0 || k2 <= 0) {
      return {
        hazir: false,
        hata: "Yatırım tutarı, başlangıç ve bitiş kuru 0'dan büyük olmalı.",
      };
    }

    const dovizMiktari = t / k1;
    const sonTl = dovizMiktari * k2;
    const tlGetiriOrani = ((sonTl - t) / t) * 100;
    const kurDegisimOrani = ((k2 - k1) / k1) * 100;

    let reelKarsilastirma: number | null = null;
    if (enflasyonOrani.trim() !== "") {
      reelKarsilastirma = tlGetiriOrani - enflasyon;
    }

    return {
      hazir: true,
      hata: "",
      dovizMiktari,
      sonTl,
      tlGetiriOrani,
      kurDegisimOrani,
      reelKarsilastirma,
    };
  }, [tutar, baslangicKuru, bitisKuru, enflasyonOrani]);

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
          Döviz Getirisi Hesaplama
        </h1>
        <p className="mb-6 text-base text-zinc-600">
          TL tutarınızı döviz kuru üzerinden değerlendirip, başlangıç ve bitiş
          kurlarına göre TL bazında getirinizi ve isteğe bağlı olarak enflasyona
          göre reel karşılaştırmanızı hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Yatırım Tutarı (TL)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={tutar}
              onChange={(e) => setTutar(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 100.000"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Başlangıç Kuru (TL/Döviz)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={baslangicKuru}
              onChange={(e) => setBaslangicKuru(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 32,50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Bitiş Kuru (TL/Döviz)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={bitisKuru}
              onChange={(e) => setBitisKuru(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 35,80"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">
              Dönem Enflasyon Oranı (%) <span className="font-normal text-zinc-400">(isteğe bağlı)</span>
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={enflasyonOrani}
              onChange={(e) => setEnflasyonOrani(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none"
              placeholder="Örn: 20"
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
                  Dönem Sonu TL Tutarı
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  {formatMoney(sonuc.sonTl ?? 0)} TL
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  Kur Değişim Oranı
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  %{formatPercent(sonuc.kurDegisimOrani ?? 0)}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">
                  TL Bazında Getiri Oranı
                </div>
                <div className="text-2xl font-bold text-zinc-900">
                  %{formatPercent(sonuc.tlGetiriOrani ?? 0)}
                </div>
              </div>

              {sonuc.reelKarsilastirma !== null && (
                <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                  <div className="mb-2 text-sm font-semibold text-zinc-600">
                    Enflasyona Göre Reel Karşılaştırma
                  </div>
                  <div className="text-2xl font-bold text-zinc-900">
                    %{formatPercent(sonuc.reelKarsilastirma ?? 0)}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu hesaplama tahmini amaçlıdır. Bu araç yatırım tavsiyesi değildir.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Döviz Bazlı Getiri Nasıl Hesaplanır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Döviz bazlı getiri hesaplaması; yatırım başlangıcı ve bitişindeki döviz kurlarını kullanarak
            TL yatırımınızın dolar veya euro bazında gerçek değer değişimini gösterir. Yüksek enflasyon
            ortamında reel getiriyi değerlendirmek için kritik bir araçtır.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            Örneğin bir yatırım %100 TL kazanç sağlasa da döviz aynı dönemde %120 değerlenmişse
            dolar bazında zarar oluşmuş demektir. Bu araç bu tür karşılaştırmaları kolayca yapmanıza olanak tanır.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Dolar bazlı getiri neden önemlidir?</h3>
              <p className="text-sm leading-6 text-zinc-600">TL değer kaybettiği dönemlerde nominal TL kazancı yanıltıcı olabilir. Dolar bazlı getiri, yatırımın uluslararası satın alma gücüne göre gerçek performansını gösterir.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Reel getiri ile döviz bazlı getiri aynı şey midir?</h3>
              <p className="text-sm leading-6 text-zinc-600">Hayır. Reel getiri enflasyona karşı kazancı, döviz bazlı getiri ise kur değişimine karşı kazancı ölçer. İkisi birbirini tamamlayan farklı göstergelerdir.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

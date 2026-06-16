"use client";

import Link from "next/link";
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

function formatPercent(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const YILLAR = Array.from({ length: 17 }, (_, i) => 2010 + i); // 2010..2026

export default function EnflasyonHesaplayici() {
  const [tutar, setTutar] = useState("");
  const [baslangicYili, setBaslangicYili] = useState("2020");
  const [bitisYili, setBitisYili] = useState("2026");
  const [yillikEnflasyon, setYillikEnflasyon] = useState("50");

  const sonuc = useMemo(() => {
    const t = parseNumber(tutar);
    const y1 = Number(baslangicYili);
    const y2 = Number(bitisYili);
    const enf = parseNumber(yillikEnflasyon);

    if (tutar.trim() === "") return { hazir: false, hata: "" };
    if (t <= 0) return { hazir: false, hata: "Tutar 0'dan büyük olmalı." };
    if (y2 <= y1) return { hazir: false, hata: "Bitiş yılı başlangıç yılından büyük olmalı." };
    if (enf < 0) return { hazir: false, hata: "Enflasyon oranı negatif olamaz." };

    const yilFarki = y2 - y1;
    const toplamCarpan = Math.pow(1 + enf / 100, yilFarki);
    const bugunkuAlimGucu = t / toplamCarpan;
    const ayniGucuKorumakIcin = t * toplamCarpan;
    const degerKaybiTutari = t - bugunkuAlimGucu;
    const degerKaybiOrani = (degerKaybiTutari / t) * 100;

    return {
      hazir: true,
      hata: "",
      yilFarki,
      bugunkuAlimGucu,
      ayniGucuKorumakIcin,
      degerKaybiTutari,
      degerKaybiOrani,
    };
  }, [tutar, baslangicYili, bitisYili, yillikEnflasyon]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Enflasyon / Satın Alma Gücü Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Belirli bir TL tutarının yıllar içinde enflasyon karşısında satın alma gücünü kaybedip kaybetmediğini görün.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Başlangıç Tutarı (TL)</label>
            <input type="text" inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 10.000" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Başlangıç Yılı</label>
              <select value={baslangicYili} onChange={(e) => setBaslangicYili(e.target.value)} className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none">
                {YILLAR.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Bitiş Yılı</label>
              <select value={bitisYili} onChange={(e) => setBitisYili(e.target.value)} className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none">
                {YILLAR.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Yıllık Ortalama Enflasyon Oranı (%)</label>
            <input type="text" inputMode="decimal" value={yillikEnflasyon} onChange={(e) => setYillikEnflasyon(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 50" />
            <p className="mt-2 text-xs text-zinc-500">Referans: Son 5 yıl yıllık ortalama enflasyon yaklaşık %50 civarındadır.</p>
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Bugünkü Satın Alma Gücü</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.bugunkuAlimGucu ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Değer Kaybı</div>
                <div className="text-2xl font-bold text-zinc-900">%{formatPercent(sonuc.degerKaybiOrani ?? 0)}</div>
                <div className="mt-1 text-sm text-zinc-600">{formatMoney(sonuc.degerKaybiTutari ?? 0)} TL kayıp</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4 md:col-span-2">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Aynı Alım Gücünü Korumak İçin</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.ayniGucuKorumakIcin ?? 0)} TL</div>
                <div className="mt-1 text-sm text-zinc-600">
                  {sonuc.yilFarki} yıl sonra aynı alım gücü için bu kadar tutar gerekiyor.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Enflasyon Hesaplaması Nasıl Yapılır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Enflasyon hesaplaması, belirli bir tutarın yıllar içinde satın alma gücünün nasıl
            değiştiğini gösterir. TÜFE (Tüketici Fiyat Endeksi) verileri kullanılarak geçmiş bir
            tarihte sahip olunan TL değerinin bugünkü karşılığı hesaplanır.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            Türkiye&apos;de enflasyon oranları TÜİK tarafından aylık olarak açıklanmaktadır. Yüksek
            enflasyon dönemlerinde nakdin değeri hızla erimekte, reel getiri negatife dönebilmektedir.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Reel getiri nedir?</h3>
              <p className="text-sm leading-6 text-zinc-600">Reel getiri, nominal getiriden enflasyonun çıkarılmasıyla bulunur. Yatırımın gerçekte satın alma gücü kazandırıp kazandırmadığını gösterir.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">TÜFE ile ÜFE arasındaki fark nedir?</h3>
              <p className="text-sm leading-6 text-zinc-600">TÜFE tüketicilerin ödediği fiyatları, ÜFE üretim aşamasındaki fiyatları ölçer. Enflasyon hesaplamalarında genellikle TÜFE esas alınır.</p>
            </div>
          </div>
        </section>
        <HesaplayiciRehberi slug="enflasyon" />
      </div>
    </main>
  );
}

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

function hesaplaYTM(alis: number, nominal: number, yillikKupon: number, yilSayisi: number) {
  let r = 0.1;
  const donem = yilSayisi;
  for (let i = 0; i < 80; i++) {
    let pv = 0;
    let dpv = 0;
    const adimSayi = Math.max(1, Math.round(donem));
    for (let t = 1; t <= adimSayi; t++) {
      pv += yillikKupon / Math.pow(1 + r, t);
      dpv += (-t * yillikKupon) / Math.pow(1 + r, t + 1);
    }
    pv += nominal / Math.pow(1 + r, adimSayi);
    dpv += (-adimSayi * nominal) / Math.pow(1 + r, adimSayi + 1);
    const diff = pv - alis;
    if (Math.abs(diff) < 1e-8) break;
    r = r - diff / dpv;
    if (!Number.isFinite(r) || r <= -0.99) r = 0.01;
  }
  return r * 100;
}

export default function TahvilHesaplayici() {
  const [nominal, setNominal] = useState("100.000");
  const [kupon, setKupon] = useState("40");
  const [vadeAy, setVadeAy] = useState("24");
  const [alis, setAlis] = useState("95.000");
  const [stopaj, setStopaj] = useState("10");

  const sonuc = useMemo(() => {
    const n = parseNumber(nominal);
    const k = parseNumber(kupon);
    const v = parseNumber(vadeAy);
    const a = parseNumber(alis);
    const s = parseNumber(stopaj);

    if ([nominal, kupon, vadeAy, alis, stopaj].some((x) => x.trim() === "")) {
      return { hazir: false, hata: "" };
    }
    if (n <= 0 || k < 0 || v <= 0 || a <= 0 || s < 0) {
      return { hazir: false, hata: "Değerler 0'dan büyük olmalı (stopaj 0 olabilir)." };
    }

    const yilSayisi = v / 12;
    const yillikKupon = n * (k / 100);
    const toplamBrutKupon = yillikKupon * yilSayisi;
    const toplamStopaj = toplamBrutKupon * (s / 100);
    const toplamNetKupon = toplamBrutKupon - toplamStopaj;
    const anaParaKazanci = n - a;
    const basitGetiri = ((toplamNetKupon + anaParaKazanci) / a) * 100;
    const ytm = hesaplaYTM(a, n, yillikKupon, yilSayisi);

    return {
      hazir: true,
      hata: "",
      toplamBrutKupon,
      toplamStopaj,
      toplamNetKupon,
      anaParaKazanci,
      basitGetiri,
      ytm,
    };
  }, [nominal, kupon, vadeAy, alis, stopaj]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Tahvil / Devlet Tahvili Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Tahvilinizin kupon gelirini, vadeye kadar getirisini (YTM) ve net kazancınızı hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Nominal Değer (TL)</label>
            <input type="text" inputMode="decimal" value={nominal} onChange={(e) => setNominal(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 100.000" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Kupon Oranı (% yıllık)</label>
              <input type="text" inputMode="decimal" value={kupon} onChange={(e) => setKupon(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 40" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Vade (Ay)</label>
              <input type="text" inputMode="decimal" value={vadeAy} onChange={(e) => setVadeAy(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 24" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Alış Fiyatı (TL)</label>
              <input type="text" inputMode="decimal" value={alis} onChange={(e) => setAlis(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 95.000" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Stopaj Oranı (%)</label>
              <input type="text" inputMode="decimal" value={stopaj} onChange={(e) => setStopaj(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 10" />
            </div>
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Brüt Kupon</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamBrutKupon ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Stopaj Tutarı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamStopaj ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Net Kupon</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamNetKupon ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Ana Para Kazancı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.anaParaKazanci ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Basit Getiri Oranı</div>
                <div className="text-2xl font-bold text-zinc-900">%{formatPercent(sonuc.basitGetiri ?? 0)}</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-sky-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Vadeye Kadar Getiri (YTM)</div>
                <div className="text-2xl font-bold text-zinc-900">%{formatPercent(sonuc.ytm ?? 0)}</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Tahvil Getiri Hesaplaması Nasıl Yapılır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Tahvil hesaplama aracı; nominal değer, kupon oranı, vade süresi ve alış fiyatı bilgileri
            girilerek yıllık kupon geliri, basit getiri ve vadeye kadar getiri (YTM) hesaplamak için
            kullanılır. Devlet iç borçlanma senetleri ve özel sektör tahvilleri için kullanılabilir.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            Devlet İç Borçlanma Senetleri (DİBS) Hazine tarafından ihraç edilir ve sabit veya değişken
            faizli olabilir. TL cinsinden tahvil faizleri stopaja tabi iken eurobond faiz gelirleri
            stopajdan muaftır.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Tahvil ile bono arasındaki fark nedir?</h3>
              <p className="text-sm leading-6 text-zinc-600">Vadesi 1 yıldan kısa olan devlet borçlanma araçlarına bono, 1 yıldan uzun olanlara tahvil denir. Her ikisi de sabit getirili menkul kıymet grubundadır.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Tahvil faizi vergiye tabi midir?</h3>
              <p className="text-sm leading-6 text-zinc-600">TL cinsinden devlet tahvili faiz gelirinde %10 stopaj uygulanır. Eurobond faiz geliri ise stopajdan muaftır.</p>
            </div>
          </div>
        </section>
        <HesaplayiciRehberi slug="tahvil" />
      </div>
    </main>
  );
}

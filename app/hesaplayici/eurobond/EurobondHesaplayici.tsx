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

// YTM çözümü: Newton iterasyonu
function hesaplaYTM(alisFiyati: number, nominal: number, yillikKupon: number, sıklık: number, yilSayisi: number) {
  const donemKuponu = yillikKupon / sıklık;
  const donemSayisi = Math.round(yilSayisi * sıklık);
  let r = 0.05 / sıklık;
  for (let iter = 0; iter < 80; iter++) {
    let pv = 0;
    let dpv = 0;
    for (let t = 1; t <= donemSayisi; t++) {
      pv += donemKuponu / Math.pow(1 + r, t);
      dpv += (-t * donemKuponu) / Math.pow(1 + r, t + 1);
    }
    pv += nominal / Math.pow(1 + r, donemSayisi);
    dpv += (-donemSayisi * nominal) / Math.pow(1 + r, donemSayisi + 1);
    const diff = pv - alisFiyati;
    if (Math.abs(diff) < 1e-8) break;
    const adim = diff / dpv;
    r = r - adim;
    if (!Number.isFinite(r) || r <= -0.99) r = 0.001;
  }
  return r * sıklık * 100;
}

export default function EurobondHesaplayici() {
  const [nominal, setNominal] = useState("1.000");
  const [kupon, setKupon] = useState("7");
  const [siklik, setSiklik] = useState<"1" | "2">("2");
  const [vadeYil, setVadeYil] = useState("5");
  const [alisFiyati, setAlisFiyati] = useState("98,50");
  const [kur, setKur] = useState("");

  const sonuc = useMemo(() => {
    const n = parseNumber(nominal);
    const k = parseNumber(kupon);
    const s = Number(siklik);
    const v = parseNumber(vadeYil);
    const af = parseNumber(alisFiyati);
    const usd = parseNumber(kur);

    if ([nominal, kupon, vadeYil, alisFiyati, kur].some((x) => x.trim() === "")) {
      return { hazir: false, hata: "" };
    }
    if (n <= 0 || k < 0 || v <= 0 || af <= 0 || usd <= 0) {
      return { hazir: false, hata: "Tüm değerler 0'dan büyük olmalı." };
    }

    const yillikKuponGeliri = n * (k / 100);
    const toplamKuponUSD = yillikKuponGeliri * v;
    const toplamKuponTL = toplamKuponUSD * usd;

    const alisTutariUSD = n * (af / 100);
    const ytm = hesaplaYTM(alisTutariUSD, n, yillikKuponGeliri, s, v);

    return {
      hazir: true,
      hata: "",
      yillikKuponGeliri,
      toplamKuponUSD,
      toplamKuponTL,
      alisTutariUSD,
      ytm,
    };
  }, [nominal, kupon, siklik, vadeYil, alisFiyati, kur]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Eurobond Getiri Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Eurobondun kupon gelirini, vadeye kadar getirisini (YTM) ve TL karşılığı kazancınızı hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Nominal Değer (USD)</label>
            <input type="text" inputMode="decimal" value={nominal} onChange={(e) => setNominal(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 1.000" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Kupon Oranı (% / yıllık)</label>
              <input type="text" inputMode="decimal" value={kupon} onChange={(e) => setKupon(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 7" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Kupon Ödeme Sıklığı</label>
              <select value={siklik} onChange={(e) => setSiklik(e.target.value as "1" | "2")} className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none">
                <option value="2">Yılda 2 (6 ayda bir)</option>
                <option value="1">Yılda 1</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Vadeye Kalan Süre (Yıl)</label>
              <input type="text" inputMode="decimal" value={vadeYil} onChange={(e) => setVadeYil(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 5" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Alış Fiyatı (Nominalin %'si)</label>
              <input type="text" inputMode="decimal" value={alisFiyati} onChange={(e) => setAlisFiyati(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 98,50" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">USD/TL Kuru</label>
            <input type="text" inputMode="decimal" value={kur} onChange={(e) => setKur(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 38,50" />
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Yıllık Kupon Geliri</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.yillikKuponGeliri ?? 0)} USD</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Kupon Geliri</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamKuponUSD ?? 0)} USD</div>
                <div className="mt-1 text-sm text-zinc-600">{formatMoney(sonuc.toplamKuponTL ?? 0)} TL karşılığı</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Alış Tutarı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.alisTutariUSD ?? 0)} USD</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Vadeye Kadar Getiri (YTM)</div>
                <div className="text-2xl font-bold text-zinc-900">%{formatPercent(sonuc.ytm ?? 0)}</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600 space-y-2">
              <div>Türkiye'de eurobond faiz geliri stopajdan muaftır. Satış kazancı gelir vergisine tabidir.</div>
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Eurobond Getiri Hesaplaması Nasıl Yapılır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Eurobond hesaplaması; alış fiyatı, kupon oranı, vade ve USD/TL kuru girilerek yıllık
            kupon geliri, vadeye kadar getiri (YTM) ve TL karşılığı toplam kazancı hesaplar.
            Türkiye eurobondları genellikle USD veya EUR cinsinden ihraç edilmektedir.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            Eurobond faiz geliri Türkiye&apos;de stopajdan muaftır. Ancak satış kazancı yıllık gelir
            vergisi beyannamesinde beyan edilmesi gereken bir unsurdur.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Eurobond nedir?</h3>
              <p className="text-sm leading-6 text-zinc-600">Devletler veya şirketler tarafından yabancı para biriminde (genellikle USD veya EUR) ihraç edilen uzun vadeli borçlanma araçlarıdır.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">YTM (Vadeye Kadar Getiri) nedir?</h3>
              <p className="text-sm leading-6 text-zinc-600">Tahvili bugünkü fiyattan alıp vadeye kadar tutmanız durumunda elde edeceğiniz yıllık bileşik getiridir.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

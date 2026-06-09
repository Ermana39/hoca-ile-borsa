"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const VARSAYILAN_TAVAN = 48000;
const DAMGA_VERGISI_ORANI = 0.00759;

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

export default function KidemTazminatiHesaplayici() {
  const [brutMaas, setBrutMaas] = useState("");
  const [yil, setYil] = useState("");
  const [ay, setAy] = useState("");
  const [tavan, setTavan] = useState(VARSAYILAN_TAVAN.toLocaleString("tr-TR"));

  const sonuc = useMemo(() => {
    const m = parseNumber(brutMaas);
    const y = parseNumber(yil);
    const a = parseNumber(ay);
    const tv = parseNumber(tavan);

    if (brutMaas.trim() === "" || (yil.trim() === "" && ay.trim() === "")) {
      return { hazir: false, hata: "" };
    }
    if (m <= 0) return { hazir: false, hata: "Brüt maaş 0'dan büyük olmalı." };
    if (y < 0 || a < 0 || (y === 0 && a === 0)) return { hazir: false, hata: "Çalışma süresi 0'dan büyük olmalı." };
    if (tv <= 0) return { hazir: false, hata: "Tavan değeri 0'dan büyük olmalı." };

    const toplamYil = y + a / 12;
    const tavanUygulanmamis = m * toplamYil;

    const aylikEsas = Math.min(m, tv);
    const tavanaGoreTutar = aylikEsas * toplamYil;
    const tavanUygulandi = m > tv;

    const damgaVergisi = tavanaGoreTutar * DAMGA_VERGISI_ORANI;
    const netKidem = tavanaGoreTutar - damgaVergisi;

    return {
      hazir: true,
      hata: "",
      toplamYil,
      tavanUygulanmamis,
      tavanaGoreTutar,
      tavanUygulandi,
      damgaVergisi,
      netKidem,
    };
  }, [brutMaas, yil, ay, tavan]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Kıdem Tazminatı Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Her çalışma yılı için 30 günlük brüt maaş üzerinden, güncel kıdem tazminatı tavanı dikkate alınarak tazminat tutarınızı hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Brüt Aylık Maaş (TL)</label>
            <input type="text" inputMode="decimal" value={brutMaas} onChange={(e) => setBrutMaas(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 50.000" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Çalışma Süresi - Yıl</label>
              <input type="text" inputMode="numeric" value={yil} onChange={(e) => setYil(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 5" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Çalışma Süresi - Ay</label>
              <input type="text" inputMode="numeric" value={ay} onChange={(e) => setAy(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 6" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Kıdem Tazminatı Tavanı (TL / Aylık)</label>
            <input type="text" inputMode="decimal" value={tavan} onChange={(e) => setTavan(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 48.000" />
            <p className="mt-1 text-xs text-zinc-500">Varsayılan: 2026 yılı için ~48.000 TL. Güncel tavan oranını değiştirebilirsiniz.</p>
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Tavan Uygulanmadan Tutar</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.tavanUygulanmamis ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Brüt Kıdem Tazminatı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.tavanaGoreTutar ?? 0)} TL</div>
                {sonuc.tavanUygulandi && (
                  <div className="mt-1 text-xs text-amber-700">Maaşınız tavanı aştığı için tavan uygulandı.</div>
                )}
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Damga Vergisi (‰7,59)</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.damgaVergisi ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Ödenecek Net Kıdem Tazminatı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.netKidem ?? 0)} TL</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600 space-y-2">
              <div>Her çalışma yılı için 30 günlük brüt maaş esas alınır. Hesaplanan aylık esas, kıdem tazminatı tavanını aşamaz.</div>
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Kıdem Tazminatı Nasıl Hesaplanır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Kıdem tazminatı, bir işyerinde en az 1 yıl çalışan ve belirli koşullarla işten ayrılan
            çalışanlara ödenen bir haktır. Her tam çalışma yılı için 30 günlük brüt maaş tutarında
            kıdem tazminatı ödenir; hesaplanan tutar yasal tavanı aşamaz.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            Kıdem tazminatı tavanı her yıl güncellenmektedir. Hesaplama sonucuna damga vergisi
            düşüm tutarı da ayrıca gösterilir.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Kıdem tazminatına hak kazanmanın koşulları nelerdir?</h3>
              <p className="text-sm leading-6 text-zinc-600">En az 1 yıl çalışmış olmak ve haksız fesih, emeklilik, askerlik veya evlilik nedeniyle ayrılmak gibi koşullarda kıdem tazminatına hak kazanılır.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Kıdem tazminatı tavanı nedir?</h3>
              <p className="text-sm leading-6 text-zinc-600">Her yıl güncellenen yasal bir üst sınırdır. Hesaplanan aylık esas bu tavanı aşamaz; aşması durumunda tavan tutarı esas alınır.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

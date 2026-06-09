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

const ORANLAR = {
  faiz: 15,
  temettu: 15,
  digerMenkul: 10,
} as const;

export default function GelirVergisiHesaplayici() {
  const [faiz, setFaiz] = useState("");
  const [temettu, setTemettu] = useState("");
  const [digerMenkul, setDigerMenkul] = useState("");
  const [beyanYili, setBeyanYili] = useState("2026");

  const sonuc = useMemo(() => {
    const f = parseNumber(faiz);
    const t = parseNumber(temettu);
    const d = parseNumber(digerMenkul);

    const hicGirilmedi = faiz.trim() === "" && temettu.trim() === "" && digerMenkul.trim() === "";
    if (hicGirilmedi) return { hazir: false, hata: "" };
    if (f < 0 || t < 0 || d < 0) return { hazir: false, hata: "Gelirler negatif olamaz." };

    const faizStopaj = f * (ORANLAR.faiz / 100);
    const temettuStopaj = t * (ORANLAR.temettu / 100);
    const digerStopaj = d * (ORANLAR.digerMenkul / 100);

    const toplamGelir = f + t + d;
    const toplamVergi = faizStopaj + temettuStopaj + digerStopaj;
    const netTutar = toplamGelir - toplamVergi;

    return {
      hazir: true,
      hata: "",
      faizStopaj,
      temettuStopaj,
      digerStopaj,
      toplamGelir,
      toplamVergi,
      netTutar,
    };
  }, [faiz, temettu, digerMenkul]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Yatırım Geliri Vergi Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Faiz, temettü ve menkul kıymet gelirlerinize uygulanan stopaj tutarlarını ve net ele geçen kazancınızı hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Beyan Yılı</label>
            <select value={beyanYili} onChange={(e) => setBeyanYili(e.target.value)} className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none">
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Faiz Geliri (TL)</label>
            <input type="text" inputMode="decimal" value={faiz} onChange={(e) => setFaiz(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 100.000" />
            <p className="mt-1 text-xs text-zinc-500">Stopaj %{ORANLAR.faiz}</p>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Temettü Geliri (TL)</label>
            <input type="text" inputMode="decimal" value={temettu} onChange={(e) => setTemettu(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 50.000" />
            <p className="mt-1 text-xs text-zinc-500">Stopaj %{ORANLAR.temettu}</p>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Diğer Menkul Kıymet Geliri (TL)</label>
            <input type="text" inputMode="decimal" value={digerMenkul} onChange={(e) => setDigerMenkul(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 25.000" />
            <p className="mt-1 text-xs text-zinc-500">Stopaj %{ORANLAR.digerMenkul}</p>
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Faiz Stopajı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.faizStopaj ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Temettü Stopajı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.temettuStopaj ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Diğer Menkul Stopajı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.digerStopaj ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Brüt Gelir</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamGelir ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Vergi Yükü</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamVergi ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Net Ele Geçen Tutar</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.netTutar ?? 0)} TL</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600 space-y-2">
              <div>
                <strong>Vergilendirme açıklaması:</strong> TL mevduat faizi geliri stopaja tabidir (%{ORANLAR.faiz}).
                Hisse senedi temettü geliri %{ORANLAR.temettu} stopaja tabidir. Diğer menkul kıymet kazançları
                varsayılan olarak %{ORANLAR.digerMenkul} stopaja göre hesaplanmıştır.
              </div>
              <div>
                Stopaj oranları ürün, ihraç tarihi ve mukim/dar mükellef statüsüne göre değişebilir. Beyan
                yükümlülüğünüz olup olmadığını mali müşavirinize danışın.
              </div>
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Yatırım Geliri Vergi Hesaplaması Nasıl Yapılır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Türkiye&apos;de bireysel yatırımcılar; mevduat faizi, temettü ve menkul kıymet gelirlerinden
            stopaj adı verilen tevkifat yükümlülüğüne tabidir. Bu araç, farklı yatırım türleri için
            stopaj oranlarını ve net ele geçen tutarı hesaplar.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            Stopaj oranları gelir türüne göre değişmektedir: mevduat faizinde vadeye göre %5–15,
            temettü gelirinde %15, hisse senedi kazancında ise genel olarak sıfırdır.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Temettü vergisi ne kadardır?</h3>
              <p className="text-sm leading-6 text-zinc-600">Bireysel yatırımcılar için temettü stopaj oranı %15&apos;tir. Bu oran brüt temettü üzerinden doğrudan kesilir.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Mevduat faizi vergisi ne kadardır?</h3>
              <p className="text-sm leading-6 text-zinc-600">TL mevduat faizinde vadeye göre %5–15 arasında değişen stopaj uygulanmaktadır. Yabancı para mevduatında ise genel oran %18&apos;dir.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

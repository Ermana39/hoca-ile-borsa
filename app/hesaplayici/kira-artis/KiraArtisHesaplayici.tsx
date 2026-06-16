"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HesaplayiciRehberi } from "@/components/HesaplayiciRehberi";

const VARSAYILAN_TUFE = 32.24;

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

export default function KiraArtisHesaplayici() {
  const [mevcutKira, setMevcutKira] = useState("");
  const [tufeOrani, setTufeOrani] = useState(VARSAYILAN_TUFE.toString().replace(".", ","));
  const [mod, setMod] = useState<"tavan" | "ozel">("tavan");
  const [ozelOran, setOzelOran] = useState("");

  const sonuc = useMemo(() => {
    const kira = parseNumber(mevcutKira);
    const tufe = parseNumber(tufeOrani);
    const ozel = parseNumber(ozelOran);

    if (mevcutKira.trim() === "") return { hazir: false, hata: "" };

    if (kira <= 0) return { hazir: false, hata: "Mevcut kira bedeli 0'dan büyük olmalı." };

    const kullanilanOran = mod === "tavan" ? tufe : ozel;
    if (mod === "ozel" && ozelOran.trim() === "") return { hazir: false, hata: "" };
    if (kullanilanOran < 0) return { hazir: false, hata: "Artış oranı negatif olamaz." };
    if (mod === "ozel" && kullanilanOran > tufe) {
      // bilgi amaçlı uyarı; hesaplamayı durdurmuyoruz
    }

    const artisTutari = kira * (kullanilanOran / 100);
    const yeniKira = kira + artisTutari;

    return {
      hazir: true,
      hata: "",
      artisTutari,
      yeniKira,
      kullanilanOran,
      tavanAsim: mod === "ozel" && kullanilanOran > tufe,
    };
  }, [mevcutKira, tufeOrani, mod, ozelOran]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Ana Sayfa
          </Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Kira Artış Hesaplayıcı (TÜFE)</h1>
        <p className="mb-6 text-base text-zinc-600">
          TÜFE 12 aylık ortalama oranına göre yasal tavan üzerinden veya özel anlaşma oranıyla yeni kira bedelinizi hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Mevcut Kira Bedeli (TL)</label>
            <input type="text" inputMode="decimal" value={mevcutKira} onChange={(e) => setMevcutKira(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 15.000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">TÜFE 12 Aylık Ortalama (%)</label>
            <input type="text" inputMode="decimal" value={tufeOrani} onChange={(e) => setTufeOrani(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 32,24" />
            <p className="mt-2 text-xs text-zinc-500">Varsayılan: %32,24 (Haziran 2026). Güncel oranı kendiniz girebilirsiniz.</p>
          </div>

          <div>
            <span className="mb-2 block text-sm font-semibold text-zinc-700">Artış Yönü</span>
            <div className="flex flex-wrap gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm">
                <input type="radio" name="mod" checked={mod === "tavan"} onChange={() => setMod("tavan")} />
                Yasal tavan (TÜFE) ile artır
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm">
                <input type="radio" name="mod" checked={mod === "ozel"} onChange={() => setMod("ozel")} />
                Özel oran ile artır
              </label>
            </div>
          </div>

          {mod === "ozel" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Özel Artış Oranı (%)</label>
              <input type="text" inputMode="decimal" value={ozelOran} onChange={(e) => setOzelOran(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 20" />
            </div>
          )}
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Uygulanan Artış Oranı</div>
                <div className="text-2xl font-bold text-zinc-900">%{formatPercent(sonuc.kullanilanOran ?? 0)}</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Artış Tutarı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.artisTutari ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4 md:col-span-2">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Yeni Kira Bedeli</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.yeniKira ?? 0)} TL</div>
              </div>
            </div>

            {sonuc.tavanAsim && (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                Girdiğiniz özel oran TÜFE 12 aylık ortalamasını (yasal tavanı) aşıyor.
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600 space-y-2">
              <div>TÜFE 12 aylık ortalama yasal tavan oranıdır. Taraflar bu oranın altında anlaşabilir.</div>
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Kira Artışı Nasıl Hesaplanır?</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Türkiye&apos;de konut kira artışları TÜFE&apos;nin 12 aylık ortalamasıyla sınırlandırılmıştır.
            Kiracı ve ev sahibi bu oranın altında anlaşabilir, ancak üzerinde bir artış yapılamaz.
            Bu araç mevcut kira bedelinizi ve güncel TÜFE tavan oranını girerek yeni kira bedelinizi hesaplar.
          </p>
          <p className="text-sm leading-7 text-zinc-600">
            TÜFE 12 aylık ortalama oranı her ay TÜİK tarafından güncellenmektedir. Araçtaki varsayılan
            değer en güncel yasal tavan oranı olarak yüklenmektedir.
          </p>
        </section>
        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Kira artış sınırı ne zaman değişiyor?</h3>
              <p className="text-sm leading-6 text-zinc-600">TÜFE 12 aylık ortalama oranı her ay güncellenir. Kira sözleşmesi yenileme tarihindeki geçerli TÜFE oranı yasal tavan olarak uygulanır.</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-zinc-800">Ev sahibi yasal tavanın üzerinde zam yapabilir mi?</h3>
              <p className="text-sm leading-6 text-zinc-600">Hayır. Yasal düzenleme gereği kira artışı TÜFE 12 aylık ortalamasını geçemez. Bu sınırı aşan zamlar geçersiz kabul edilmektedir.</p>
            </div>
          </div>
        </section>
        <HesaplayiciRehberi slug="kira-artis" />
      </div>
    </main>
  );
}

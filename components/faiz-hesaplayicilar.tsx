"use client";

import { useMemo, useState } from "react";

function paraFormatla(deger: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(deger);
}

export function MevduatHesaplayici() {
  const [anaPara, setAnaPara] = useState(100000);
  const [oran, setOran] = useState(45);
  const [gun, setGun] = useState(32);
  const [stopaj, setStopaj] = useState(15);

  const sonuc = useMemo(() => {
    const brutFaizTutari = (anaPara * (oran / 100) * gun) / 365;
    const stopajTutari = brutFaizTutari * (stopaj / 100);
    const netFaizTutari = brutFaizTutari - stopajTutari;
    const vadeSonuBrut = anaPara + brutFaizTutari;
    const vadeSonuNet = anaPara + netFaizTutari;

    return {
      brutFaizTutari,
      stopajTutari,
      netFaizTutari,
      vadeSonuBrut,
      vadeSonuNet,
    };
  }, [anaPara, oran, gun, stopaj]);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-zinc-900">
          Mevduat Faizi Hesaplayıcı
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Ana para, yıllık faiz oranı, gün sayısı ve stopaj oranına göre tahmini getiri hesaplanır.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-700">
            Ana Para (TL)
          </span>
          <input
            type="number"
            value={anaPara}
            onChange={(e) => setAnaPara(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-zinc-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-700">
            Yıllık Faiz Oranı (%)
          </span>
          <input
            type="number"
            step="0.01"
            value={oran}
            onChange={(e) => setOran(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-zinc-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-700">
            Vade (Gün)
          </span>
          <input
            type="number"
            value={gun}
            onChange={(e) => setGun(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-zinc-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-700">
            Stopaj Oranı (%)
          </span>
          <input
            type="number"
            step="0.01"
            value={stopaj}
            onChange={(e) => setStopaj(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-zinc-500"
          />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Brüt Faiz Getirisi</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.brutFaizTutari)} TL
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Stopaj Tutarı</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.stopajTutari)} TL
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Net Faiz Getirisi</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.netFaizTutari)} TL
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Vade Sonu Brüt Tutar</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.vadeSonuBrut)} TL
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Vade Sonu Net Tutar</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.vadeSonuNet)} TL
          </div>
        </div>
      </div>
    </section>
  );
}

export function KrediHesaplayici({
  baslik,
  aciklama,
  varsayilanTutar,
  varsayilanOran,
  varsayilanVade,
}: {
  baslik: string;
  aciklama: string;
  varsayilanTutar: number;
  varsayilanOran: number;
  varsayilanVade: number;
}) {
  const [krediTutari, setKrediTutari] = useState(varsayilanTutar);
  const [aylikOran, setAylikOran] = useState(varsayilanOran);
  const [vade, setVade] = useState(varsayilanVade);

  const sonuc = useMemo(() => {
    const r = aylikOran / 100;
    let aylikTaksit = 0;

    if (r === 0) {
      aylikTaksit = vade > 0 ? krediTutari / vade : 0;
    } else {
      const ust = Math.pow(1 + r, vade);
      aylikTaksit = krediTutari * ((r * ust) / (ust - 1));
    }

    const toplamOdeme = aylikTaksit * vade;
    const toplamFaiz = toplamOdeme - krediTutari;

    return {
      aylikTaksit,
      toplamOdeme,
      toplamFaiz,
    };
  }, [krediTutari, aylikOran, vade]);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-zinc-900">{baslik}</h2>
        <p className="mt-2 text-sm text-zinc-600">{aciklama}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-700">
            Kredi Tutarı (TL)
          </span>
          <input
            type="number"
            value={krediTutari}
            onChange={(e) => setKrediTutari(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-zinc-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-700">
            Aylık Faiz Oranı (%)
          </span>
          <input
            type="number"
            step="0.01"
            value={aylikOran}
            onChange={(e) => setAylikOran(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-zinc-500"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-700">
            Vade (Ay)
          </span>
          <input
            type="number"
            value={vade}
            onChange={(e) => setVade(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-zinc-500"
          />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Aylık Taksit</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.aylikTaksit)} TL
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Toplam Geri Ödeme</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.toplamOdeme)} TL
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <div className="text-sm text-zinc-500">Toplam Faiz Yükü</div>
          <div className="mt-2 text-2xl font-bold text-zinc-900">
            {paraFormatla(sonuc.toplamFaiz)} TL
          </div>
        </div>
      </div>
    </section>
  );
}
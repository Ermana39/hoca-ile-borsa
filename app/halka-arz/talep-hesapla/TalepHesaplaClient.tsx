"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  katilimIstatistikleriniHesapla,
  lotSenaryolariniHesapla,
  metindenOndalik,
  yuksekBasvuruSenaryolariniHesapla,
  type HalkaArzDagitimTuru,
  type HalkaArzKatilimGecmisi,
  type HalkaArzLotSecenegi,
  type LotSenaryoSonucu,
} from "@/lib/halka-arz-lot-modeli";

type TalepHesaplaClientProps = {
  secenekler: HalkaArzLotSecenegi[];
  gecmis: HalkaArzKatilimGecmisi[];
};

const senaryoMetinleri: Record<
  LotSenaryoSonucu["id"],
  { baslik: string; aciklama: string; rozet: string; kart: string }
> = {
  dusuk: {
    baslik: "Düşük Katılım",
    aciklama: "Benzer halka arzların alt çeyreği (Q1)",
    rozet: "bg-amber-100 text-amber-800",
    kart: "border-amber-200 bg-amber-50/70",
  },
  normal: {
    baslik: "Normal Katılım",
    aciklama: "Benzer halka arzların medyanı",
    rozet: "bg-blue-100 text-blue-800",
    kart: "border-blue-200 bg-blue-50/70",
  },
  yuksek: {
    baslik: "Yüksek Katılım",
    aciklama: "Benzer halka arzların üst çeyreği (Q3)",
    rozet: "bg-violet-100 text-violet-800",
    kart: "border-violet-200 bg-violet-50/70",
  },
};

function adetMetni(value: number, basamak = 0) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: basamak,
    maximumFractionDigits: basamak,
  });
}

function paraMetni(value: number) {
  return `${value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} TL`;
}

function oranMetni(value: number) {
  return `%${value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

function adetGirdisi(value: number) {
  return Math.round(value).toLocaleString("tr-TR");
}

function fiyatGirdisi(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function oranGirdisi(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
}

function dagitimTuruMetni(value: HalkaArzDagitimTuru) {
  return value === "tamamen-esit" ? "Tamamı eşit dağıtım" : "Bireysele eşit dağıtım";
}

function yuzdeFarki(gerceklesen: number, tahmin: number) {
  if (tahmin <= 0) return undefined;
  return ((gerceklesen - tahmin) / tahmin) * 100;
}

export default function TalepHesaplaClient({
  secenekler,
  gecmis,
}: TalepHesaplaClientProps) {
  const ilkSecenek = secenekler[0];
  const [secilenKod, setSecilenKod] = useState(ilkSecenek?.kod || "manuel");
  const [toplamLot, setToplamLot] = useState(
    ilkSecenek ? adetGirdisi(ilkSecenek.toplamLot) : ""
  );
  const [bireyselYuzde, setBireyselYuzde] = useState(
    ilkSecenek ? oranGirdisi(ilkSecenek.bireyselTahsisatOrani) : ""
  );
  const [halkaArzFiyati, setHalkaArzFiyati] = useState(
    ilkSecenek ? fiyatGirdisi(ilkSecenek.halkaArzFiyati) : ""
  );
  const [ozelKatilimci, setOzelKatilimci] = useState("");
  const [yuksekBasvuruTalepLotu, setYuksekBasvuruTalepLotu] = useState(
    ilkSecenek?.yuksekBasvuru
      ? adetGirdisi(ilkSecenek.yuksekBasvuru.altSinirLot)
      : ""
  );
  const [ozelTalepCarpani, setOzelTalepCarpani] = useState("5");
  const [dagitimTuru, setDagitimTuru] = useState<HalkaArzDagitimTuru>(
    ilkSecenek?.dagitimTuru || "bireysel-esit"
  );

  useEffect(() => {
    const hashSeciminiUygula = () => {
      const kod = new URLSearchParams(window.location.hash.slice(1))
        .get("halka-arz")
        ?.trim()
        .toUpperCase();
      if (!kod) return;

      const secenek = secenekler.find((item) => item.kod === kod);
      if (!secenek) return;

      setSecilenKod(secenek.kod);
      setToplamLot(adetGirdisi(secenek.toplamLot));
      setBireyselYuzde(oranGirdisi(secenek.bireyselTahsisatOrani));
      setHalkaArzFiyati(fiyatGirdisi(secenek.halkaArzFiyati));
      setDagitimTuru(secenek.dagitimTuru);
      setYuksekBasvuruTalepLotu(
        secenek.yuksekBasvuru
          ? adetGirdisi(secenek.yuksekBasvuru.altSinirLot)
          : ""
      );
    };

    const zamanlayici = window.setTimeout(hashSeciminiUygula, 0);
    window.addEventListener("hashchange", hashSeciminiUygula);
    return () => {
      window.clearTimeout(zamanlayici);
      window.removeEventListener("hashchange", hashSeciminiUygula);
    };
  }, [secenekler]);

  const secilenHalkaArz = secenekler.find((item) => item.kod === secilenKod);
  const toplamLotSayisi = Math.floor(metindenOndalik(toplamLot) || 0);
  const bireyselOranSayisi = metindenOndalik(bireyselYuzde) || 0;
  const fiyatSayisi = metindenOndalik(halkaArzFiyati) || 0;
  const ozelKatilimciSayisi = Math.floor(metindenOndalik(ozelKatilimci) || 0);
  const yuksekBasvuru = secilenHalkaArz?.yuksekBasvuru;
  const yuksekBasvuruTalepLotSayisi = Math.floor(
    metindenOndalik(yuksekBasvuruTalepLotu) || 0
  );
  const ozelTalepCarpaniSayisi = metindenOndalik(ozelTalepCarpani) || 0;
  const bireyselTahsisatLotu = Math.round(
    toplamLotSayisi * (bireyselOranSayisi / 100)
  );
  const girdilerGecerli =
    toplamLotSayisi > 0 &&
    bireyselOranSayisi > 0 &&
    bireyselOranSayisi <= 100 &&
    fiyatSayisi > 0;

  const istatistikler = katilimIstatistikleriniHesapla(
    gecmis,
    dagitimTuru,
    secilenHalkaArz?.kod
  );
  const senaryolar = lotSenaryolariniHesapla(
    bireyselTahsisatLotu,
    fiyatSayisi,
    istatistikler
  );
  const yuksekBasvuruCarpanlari = [2, 5, 10, 20];
  if (
    ozelTalepCarpaniSayisi >= 1 &&
    !yuksekBasvuruCarpanlari.includes(ozelTalepCarpaniSayisi)
  ) {
    yuksekBasvuruCarpanlari.push(ozelTalepCarpaniSayisi);
  }
  const yuksekBasvuruGecerli = Boolean(
    yuksekBasvuru &&
      yuksekBasvuruTalepLotSayisi >= yuksekBasvuru.altSinirLot &&
      fiyatSayisi > 0
  );
  const yuksekBasvuruSenaryolari = yuksekBasvuruGecerli
    ? yuksekBasvuruSenaryolariniHesapla(
        yuksekBasvuruTalepLotSayisi,
        fiyatSayisi,
        yuksekBasvuruCarpanlari
      )
    : [];
  const normalSenaryo = senaryolar.find((item) => item.id === "normal");
  const referanslar = gecmis.filter(
    (item) =>
      item.dagitimTuru === dagitimTuru &&
      item.kod !== secilenHalkaArz?.kod
  );

  const ozelSonuc =
    girdilerGecerli && ozelKatilimciSayisi > 0
      ? {
          lot: Math.floor(bireyselTahsisatLotu / ozelKatilimciSayisi),
          tutar:
            Math.floor(bireyselTahsisatLotu / ozelKatilimciSayisi) * fiyatSayisi,
        }
      : undefined;

  function adresiGuncelle(kod?: string) {
    const adres = new URL(window.location.href);
    adres.hash = kod ? `halka-arz=${encodeURIComponent(kod)}` : "";
    window.history.replaceState(null, "", adres);
  }

  function secenekDegistir(kod: string) {
    if (kod === "manuel") {
      setSecilenKod("manuel");
      adresiGuncelle();
      return;
    }

    const secenek = secenekler.find((item) => item.kod === kod);
    if (!secenek) return;

    setSecilenKod(secenek.kod);
    setToplamLot(adetGirdisi(secenek.toplamLot));
    setBireyselYuzde(oranGirdisi(secenek.bireyselTahsisatOrani));
    setHalkaArzFiyati(fiyatGirdisi(secenek.halkaArzFiyati));
    setDagitimTuru(secenek.dagitimTuru);
    setYuksekBasvuruTalepLotu(
      secenek.yuksekBasvuru
        ? adetGirdisi(secenek.yuksekBasvuru.altSinirLot)
        : ""
    );
    adresiGuncelle(secenek.kod);
  }

  function manuelDegerGir(setter: (value: string) => void, value: string) {
    setter(value);
    setSecilenKod("manuel");
    adresiGuncelle();
  }

  const gerceklesen = secilenHalkaArz?.gerceklesen;
  const katilimciFarki =
    gerceklesen && normalSenaryo
      ? yuzdeFarki(gerceklesen.katilimci, normalSenaryo.katilimci)
      : undefined;
  const lotFarki =
    gerceklesen?.kisiBasiLot !== undefined && normalSenaryo
      ? yuzdeFarki(gerceklesen.kisiBasiLot, normalSenaryo.tahminiLot)
      : undefined;

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Veri destekli hesaplama
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Halka Arz Lot Senaryo Hesaplayıcı
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                Onaylı bir halka arzı seçin veya kendi değerlerinizi girin. Araç,
                benzer dağıtım türündeki 2026 halka arzlarından düşük, normal ve
                yüksek katılım senaryoları üretir; tahmini lotu ve gerekli yaklaşık
                parayı birlikte gösterir. Yüksek başvurulu yatırımcı grubu bulunan
                halka arzlarda oransal dağıtım hesabını ayrıca yapar.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-800">
                {gecmis.length} sonuç kaydı
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-800">
                {secenekler.length} hazır halka arz
              </span>
            </div>
          </div>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:max-w-2xl">
              <label
                htmlFor="halka-arz-secimi"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Halka arz seçin
              </label>
              <select
                id="halka-arz-secimi"
                value={secilenKod}
                onChange={(event) => secenekDegistir(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                {secenekler.map((item) => (
                  <option key={item.kod} value={item.kod}>
                    {item.kod} · {item.sirketAdi}
                    {item.gerceklesen ? " · Sonuçlandı" : ""}
                    {item.yuksekBasvuru ? " · Yüksek başvuru hesabı" : ""}
                  </option>
                ))}
                <option value="manuel">Kendi değerlerimi gireceğim</option>
              </select>
            </div>

            {secilenHalkaArz && (
              <Link
                href={`/halka-arz/onayli-izahnameler/${secilenHalkaArz.slug}`}
                prefetch={false}
                className="w-fit rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-100"
              >
                Onaylı izahname bilgileri
              </Link>
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <label htmlFor="toplam-lot" className="mb-2 block text-sm font-bold text-slate-700">
                Toplam halka arz lotu
              </label>
              <input
                id="toplam-lot"
                type="text"
                inputMode="numeric"
                value={toplamLot}
                onChange={(event) => manuelDegerGir(setToplamLot, event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="Örn: 70.000.000"
              />
            </div>

            <div>
              <label
                htmlFor="bireysel-yuzde"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Bireysel tahsisat oranı
              </label>
              <div className="relative">
                <input
                  id="bireysel-yuzde"
                  type="text"
                  inputMode="decimal"
                  value={bireyselYuzde}
                  onChange={(event) =>
                    manuelDegerGir(setBireyselYuzde, event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-10 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="Örn: 60"
                />
                <span className="pointer-events-none absolute right-4 top-3 text-slate-500">%</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="halka-arz-fiyati"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Halka arz fiyatı
              </label>
              <div className="relative">
                <input
                  id="halka-arz-fiyati"
                  type="text"
                  inputMode="decimal"
                  value={halkaArzFiyati}
                  onChange={(event) =>
                    manuelDegerGir(setHalkaArzFiyati, event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="Örn: 38,60"
                />
                <span className="pointer-events-none absolute right-4 top-3 text-slate-500">TL</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="ozel-katilimci"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Kendi katılım tahmininiz
              </label>
              <input
                id="ozel-katilimci"
                type="text"
                inputMode="numeric"
                value={ozelKatilimci}
                onChange={(event) => setOzelKatilimci(event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="İsteğe bağlı: 800.000"
              />
            </div>
          </div>

          <div className="mt-5 grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                Bireysel yatırımcı havuzu
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-950">
                {girdilerGecerli
                  ? `${adetMetni(bireyselTahsisatLotu)} Lot`
                  : "Geçerli değer girin"}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Toplam payın {oranMetni(Math.max(0, bireyselOranSayisi))} oranındaki
                hesaplanan bireysel tahsisatı
              </p>
            </div>
            <div>
              <label htmlFor="dagitim-turu" className="mb-2 block text-xs font-bold text-slate-700">
                Geçmiş karşılaştırma grubu
              </label>
              <select
                id="dagitim-turu"
                value={dagitimTuru}
                onChange={(event) => {
                  setDagitimTuru(event.target.value as HalkaArzDagitimTuru);
                  setSecilenKod("manuel");
                  adresiGuncelle();
                }}
                className="w-full rounded-xl border border-blue-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-blue-500"
              >
                <option value="bireysel-esit">Bireysele eşit dağıtım</option>
                <option value="tamamen-esit">Tamamı eşit dağıtım</option>
              </select>
            </div>
          </div>

          {!girdilerGecerli && (
            <p className="mt-3 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
              Toplam lot ve fiyat sıfırdan büyük, bireysel tahsisat oranı ise %0 ile
              %100 arasında olmalıdır.
            </p>
          )}
        </section>

        {yuksekBasvuru && secilenHalkaArz && (
          <section className="mt-6 rounded-3xl border border-indigo-200 bg-white p-5 shadow-sm md:p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700">
                  Oransal dağıtım hesabı
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-950 md:text-2xl">
                  Yüksek Başvurulu Yatırımcıya Kaç Lot Düşer?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {secilenHalkaArz.kod} yüksek başvurulu yatırımcı grubunda
                  talep edeceğiniz lotu girin. Araç, bu gruba gelen toplam talebin
                  ayrılan havuzun 2, 5, 10 veya 20 katı olması halinde yaklaşık
                  kaç lot karşılanacağını hesaplar.
                </p>
              </div>
              <span className="w-fit rounded-full bg-indigo-100 px-3 py-2 text-xs font-bold text-indigo-800">
                {yuksekBasvuru.dagitimYontemi}
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
                <p className="text-xs font-bold text-indigo-700">Yüksek Başvuru Havuzu</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(yuksekBasvuru.tahsisatLotu)} Lot
                </p>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
                <p className="text-xs font-bold text-indigo-700">Tahsisat Oranı</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {oranMetni(yuksekBasvuru.tahsisatOrani)}
                </p>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
                <p className="text-xs font-bold text-indigo-700">En Düşük Başvuru</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(yuksekBasvuru.altSinirLot)} Lot
                </p>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
                <p className="text-xs font-bold text-indigo-700">Yaklaşık Alt Sınır</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {paraMetni(yuksekBasvuru.altSinirLot * fiyatSayisi)}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="yuksek-basvuru-talep-lotu"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Talep edeceğiniz lot
                </label>
                <input
                  id="yuksek-basvuru-talep-lotu"
                  type="text"
                  inputMode="numeric"
                  value={yuksekBasvuruTalepLotu}
                  onChange={(event) =>
                    setYuksekBasvuruTalepLotu(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder={adetGirdisi(yuksekBasvuru.altSinirLot)}
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Girilen talep tutarı:{" "}
                  <strong className="text-slate-700">
                    {paraMetni(yuksekBasvuruTalepLotSayisi * fiyatSayisi)}
                  </strong>
                </p>
              </div>

              <div>
                <label
                  htmlFor="yuksek-basvuru-carpani"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Özel talep çarpanı
                </label>
                <input
                  id="yuksek-basvuru-carpani"
                  type="text"
                  inputMode="decimal"
                  value={ozelTalepCarpani}
                  onChange={(event) => setOzelTalepCarpani(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Örn: 7,5"
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Örneğin 5 kat talep, toplam yüksek başvuru talebinin bu gruba
                  ayrılan lot havuzunun 5 katı olmasıdır.
                </p>
              </div>
            </div>

            {yuksekBasvuruTalepLotSayisi < yuksekBasvuru.altSinirLot && (
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium leading-6 text-amber-900">
                Bu halka arzda yüksek başvurulu yatırımcı grubu en az{" "}
                {adetMetni(yuksekBasvuru.altSinirLot)} lot ile başlıyor. Bu
                sınırın altında kalan talep, yüksek başvuru hesabına dahil
                edilemez.
              </p>
            )}

            {ozelTalepCarpani.length > 0 && ozelTalepCarpaniSayisi < 1 && (
              <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
                Özel talep çarpanı 1 veya daha büyük olmalıdır.
              </p>
            )}

            {yuksekBasvuruSenaryolari.length > 0 && (
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {yuksekBasvuruSenaryolari.map((senaryo) => {
                  const ozelSenaryo = ![2, 5, 10, 20].includes(
                    senaryo.talepCarpani
                  );
                  return (
                    <article
                      key={senaryo.talepCarpani}
                      className={`rounded-2xl border p-4 ${
                        ozelSenaryo
                          ? "border-cyan-200 bg-cyan-50/70"
                          : "border-indigo-200 bg-indigo-50/60"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-bold text-slate-900">
                          {senaryo.talepCarpani.toLocaleString("tr-TR", {
                            maximumFractionDigits: 2,
                          })}{" "}
                          Kat Talep
                        </p>
                        {ozelSenaryo && (
                          <span className="rounded-full bg-cyan-100 px-2 py-1 text-[10px] font-bold text-cyan-800">
                            Özel
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        Talebin {oranMetni(senaryo.karsilanmaOrani)} oranı
                      </p>
                      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-indigo-700">
                        Tahmini düşen lot
                      </p>
                      <p className="mt-1 text-2xl font-bold text-slate-950">
                        {adetMetni(senaryo.tahminiLot)} Lot
                      </p>
                      <dl className="mt-4 space-y-3 border-t border-indigo-100 pt-3">
                        <div>
                          <dt className="text-xs text-slate-500">Karşılanan tutar</dt>
                          <dd className="mt-0.5 text-sm font-bold text-slate-800">
                            {paraMetni(senaryo.karsilananTutar)}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">Yaklaşık iade</dt>
                          <dd className="mt-0.5 text-sm font-bold text-slate-800">
                            {paraMetni(senaryo.iadeTutar)}
                          </dd>
                        </div>
                      </dl>
                    </article>
                  );
                })}
              </div>
            )}

            <p className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3 text-sm leading-6 text-slate-600">
              Hesaplama, yüksek başvurulu gruptaki tüm geçerli taleplerin aynı
              oranda karşılandığı varsayımına dayanır. Tahsisat aktarımı, talep
              iptalleri ve dağıtımda uygulanan yuvarlama kuralları sonucu
              değiştirebilir; kesin lot dağıtım sonuçları açıklandığında belli olur.
            </p>
          </section>
        )}

        {istatistikler && (
          <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  Geçmiş Katılım Referansı
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  {dagitimTuruMetni(dagitimTuru)} grubundaki 2026 sonuçları kullanıldı.
                  Sonuçlanmış bir halka arz seçiliyse, kendi verisi tahmine dahil edilmedi.
                </p>
              </div>
              <span className="w-fit rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">
                {istatistikler.kayitSayisi} benzer kayıt
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-500">Geçmiş Ortalama</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(istatistikler.ortalama)}
                </p>
                <p className="mt-1 text-xs text-slate-500">yatırımcı</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-bold text-amber-800">Alt Çeyrek · Q1</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(istatistikler.altCeyrek)}
                </p>
                <p className="mt-1 text-xs text-slate-500">düşük katılım eşiği</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                <p className="text-xs font-bold text-blue-800">Medyan · Q2</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(istatistikler.medyan)}
                </p>
                <p className="mt-1 text-xs text-slate-500">normal senaryo</p>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
                <p className="text-xs font-bold text-violet-800">Üst Çeyrek · Q3</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(istatistikler.ustCeyrek)}
                </p>
                <p className="mt-1 text-xs text-slate-500">yüksek katılım eşiği</p>
              </div>
            </div>

            <details className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-bold text-slate-800">
                Modelde kullanılan halka arzları göster
              </summary>
              <div className="mt-3 flex flex-wrap gap-2">
                {referanslar.map((item) => (
                  <span
                    key={item.kod}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {item.kod} · {adetMetni(item.katilimci)}
                  </span>
                ))}
              </div>
            </details>
          </section>
        )}

        {senaryolar.length > 0 && (
          <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Düşük, Normal ve Yüksek Katılım Senaryoları
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Katılımcı sayısı düştükçe tahmini lot ve bu lotların tamamı için
                gerekli yaklaşık para artar. Sonuçlar eşit dağıtım varsayımıyla
                hesaplanır.
              </p>
            </div>

            <div className="mt-5 hidden overflow-hidden rounded-2xl border border-slate-200 md:block">
              <table className="w-full table-fixed text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="w-[28%] px-4 py-3">Senaryo</th>
                    <th className="w-[24%] px-4 py-3">Katılımcı</th>
                    <th className="w-[22%] px-4 py-3">Tahmini Lot</th>
                    <th className="w-[26%] px-4 py-3">Gerekli Para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {senaryolar.map((senaryo) => {
                    const metin = senaryoMetinleri[senaryo.id];
                    return (
                      <tr key={senaryo.id} className="bg-white">
                        <th scope="row" className="px-4 py-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-bold ${metin.rozet}`}>
                            {metin.baslik}
                          </span>
                          <p className="mt-2 text-xs font-normal leading-5 text-slate-500">
                            {metin.aciklama}
                          </p>
                        </th>
                        <td className="px-4 py-4 font-semibold text-slate-800">
                          {adetMetni(senaryo.katilimci)}
                        </td>
                        <td className="px-4 py-4 text-lg font-bold text-slate-950">
                          {adetMetni(senaryo.tahminiLot)} Lot
                        </td>
                        <td className="px-4 py-4 text-lg font-bold text-slate-950">
                          {paraMetni(senaryo.gerekliTutar)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 grid gap-4 md:hidden">
              {senaryolar.map((senaryo) => {
                const metin = senaryoMetinleri[senaryo.id];
                return (
                  <article key={senaryo.id} className={`rounded-2xl border p-4 ${metin.kart}`}>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${metin.rozet}`}>
                      {metin.baslik}
                    </span>
                    <p className="mt-3 text-xs leading-5 text-slate-600">{metin.aciklama}</p>
                    <dl className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-3">
                        <dt className="text-xs font-semibold text-slate-500">Katılımcı</dt>
                        <dd className="mt-1 font-bold text-slate-950">
                          {adetMetni(senaryo.katilimci)}
                        </dd>
                      </div>
                      <div className="rounded-xl bg-white p-3">
                        <dt className="text-xs font-semibold text-slate-500">Tahmini Lot</dt>
                        <dd className="mt-1 font-bold text-slate-950">
                          {adetMetni(senaryo.tahminiLot)} Lot
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-3 rounded-xl bg-white p-3">
                      <p className="text-xs font-semibold text-slate-500">Gerekli Yaklaşık Para</p>
                      <p className="mt-1 text-lg font-bold text-slate-950">
                        {paraMetni(senaryo.gerekliTutar)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {ozelSonuc && (
              <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-cyan-950">Kendi Katılım Tahmininiz</p>
                    <p className="mt-1 text-xs text-slate-600">
                      {adetMetni(ozelKatilimciSayisi)} yatırımcı varsayımı
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:min-w-[360px]">
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-xs font-semibold text-slate-500">Tahmini Lot</p>
                      <p className="mt-1 font-bold text-slate-950">
                        {adetMetni(ozelSonuc.lot)} Lot
                      </p>
                    </div>
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-xs font-semibold text-slate-500">Gerekli Para</p>
                      <p className="mt-1 font-bold text-slate-950">
                        {paraMetni(ozelSonuc.tutar)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {gerceklesen && normalSenaryo && (
          <section className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm md:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                  Tahmin ve sonuç karşılaştırması
                </p>
                <h2 className="mt-2 text-xl font-bold text-emerald-950">
                  {secilenHalkaArz.kod} Dağıtım Sonucu
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Normal senaryo, seçilen halka arzın kendi sonucu geçmiş örneklemden
                  çıkarılarak hesaplandı.
                </p>
              </div>
              {gerceklesen.kaynakHref && (
                <Link
                  href={gerceklesen.kaynakHref}
                  prefetch={false}
                  className="w-fit rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-bold text-emerald-800 hover:bg-emerald-100"
                >
                  Dağıtım sonucu kaynağı
                </Link>
              )}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">Model Katılımı</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(normalSenaryo.katilimci)}
                </p>
                <p className="mt-1 text-xs text-slate-500">medyan senaryo</p>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">Gerçekleşen Katılım</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(gerceklesen.katilimci)}
                </p>
                {katilimciFarki !== undefined && (
                  <p className="mt-1 text-xs text-slate-500">
                    Modelden %{Math.abs(katilimciFarki).toLocaleString("tr-TR", { maximumFractionDigits: 1 })} {katilimciFarki >= 0 ? "yüksek" : "düşük"}
                  </p>
                )}
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">Modelin Lot Tahmini</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {adetMetni(normalSenaryo.tahminiLot)} Lot
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {paraMetni(normalSenaryo.gerekliTutar)}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">Gerçekleşen Lot</p>
                <p className="mt-1 text-xl font-bold text-slate-950">
                  {gerceklesen.kisiBasiLotMetni || "Kişi başı kayıt bulunmuyor"}
                </p>
                {gerceklesen.kisiBasiTutar !== undefined && (
                  <p className="mt-1 text-xs text-slate-500">
                    {paraMetni(gerceklesen.kisiBasiTutar)}
                  </p>
                )}
              </div>
            </div>

            {gerceklesen.kisiBasiLot !== undefined && (
              <p className="mt-4 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700">
                Gerçekleşen kişi başı değer, modelin normal lot tahmininden {" "}
                <strong>
                  {lotFarki === undefined
                    ? "karşılaştırılamıyor"
                    : `%${Math.abs(lotFarki).toLocaleString("tr-TR", {
                        maximumFractionDigits: 1,
                      })} ${lotFarki >= 0 ? "yüksek" : "düşük"}`}
                </strong>.
                {gerceklesen.lotVeriTuru === "hesaplanan-ortalama" && (
                  <> Bu değer, dağıtılan bireysel havuzun kayıtlı yatırımcı sayısına bölünmesiyle bulunan matematiksel ortalamadır.</>
                )}
              </p>
            )}
          </section>
        )}

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-xl font-bold text-slate-950">Model Nasıl Hesaplıyor?</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">1. Bireysel Havuz</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Toplam halka arz lotu, bireysel tahsisat oranıyla çarpılır.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">2. Tahmini Lot</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Bireysel havuz, senaryodaki katılımcı sayısına bölünür ve aşağı yuvarlanır.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">3. Gerekli Para</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tahmini lot, halka arz fiyatıyla çarpılarak yaklaşık talep tutarı bulunur.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">4. Yüksek Başvuru</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Oransal dağıtımda kullanıcının talebi, yüksek başvuru havuzuna
                gelen tahmini toplam talep çarpanına bölünür.
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Model, geçmiş sonuçları garanti olarak kullanmaz. Ek satış, tahsisat aktarımı,
            talebin bireysel havuzun altında kalması, farklı yatırımcı grupları ve dağıtım
            kuralları gerçek kişi başı lotu değiştirebilir. Dağıtım sonuçlarında bireysel
            yatırımcı sayısı varsa bu sayı, yoksa kayıtlı toplam katılımcı sayısı kullanılır.
            Hesaplamalar yaklaşık bilgi amaçlıdır ve yatırım tavsiyesi değildir.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <h3 className="text-lg font-bold text-slate-950">Sık Sorulan Sorular</h3>
            <div className="mt-3 space-y-3">
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-bold text-slate-900">
                  Halka arzda tahmini lot nasıl hesaplanır?
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Bireysel yatırımcıya ayrılan lot havuzu, tahmini katılımcı sayısına
                  bölünür. Sonuç eşit dağıtım varsayımıyla aşağı yuvarlanır.
                </p>
              </details>
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-bold text-slate-900">
                  Düşük, normal ve yüksek katılım neye göre belirlenir?
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Benzer dağıtım türündeki 2026 halka arzlarının alt çeyrek, medyan
                  ve üst çeyrek katılımcı değerleri kullanılır.
                </p>
              </details>
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-bold text-slate-900">
                  Halka arz talebi için gerekli para nasıl bulunur?
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Senaryoda hesaplanan tahmini lot, halka arz fiyatıyla çarpılarak
                  gerekli yaklaşık talep tutarı bulunur.
                </p>
              </details>
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-bold text-slate-900">
                  Yüksek başvurulu yatırımcıya kaç lot düşer?
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Yüksek başvurulu yatırımcı grubunda dağıtım oransalsa, düşecek
                  lot yalnızca yatırımcı sayısıyla bulunamaz. Talep edilen lot,
                  bu gruba ayrılan havuzun kaç katı toplam talep geldiği
                  varsayımına bölünür. Örneğin toplam talep havuzun 5 katıysa,
                  başvurunun yaklaşık %20&apos;si karşılanır.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

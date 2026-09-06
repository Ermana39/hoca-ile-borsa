"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import Link from "@/components/NoPrefetchLink";
import SirketLogo from "@/components/SirketLogo";

export type TaslakOgesi = {
  klasor: string;
  label: string;
  logo?: string;
  sektorler: string[];
  basvuruTarihi?: string;
  araciKurum?: string;
  pazar?: string;
  dagitimYontemi?: string;
  pay?: string;
  halkaAciklikOrani?: string;
  katilimEndeksi?: string;
  fiyatIstikrari?: string;
  ortakSatisVar: boolean;
  sermayeArtirimiVar: boolean;
};

type KategoriGrubu = {
  ad: string;
  izahnameler: TaslakOgesi[];
};

type KategoriGrubuSirala = (a: KategoriGrubu, b: KategoriGrubu) => number;

const TAMAMEN_ESIT_DAGITIM_ETIKETI = "Tamamen eşit dağıtım";
const BIREYSELE_ESIT_DAGITIM_ETIKETI = "Bireysele eşit dağıtım";

function tarihDegeri(tarih?: string) {
  if (!tarih) return 0;
  const eslesme = tarih.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!eslesme) return 0;
  const [, gun, ay, yil] = eslesme;
  return Number(`${yil}${ay.padStart(2, "0")}${gun.padStart(2, "0")}`);
}

function sayiDegeri(text?: string) {
  if (!text) return 0;
  const eslesme = text
    .replace(/\./g, "")
    .replace(",", ".")
    .match(/\d+(?:\.\d+)?/);
  return eslesme ? Number(eslesme[0]) : 0;
}

function oranDegeri(text?: string) {
  if (!text) return 0;
  const eslesme = text.replace(",", ".").match(/\d+(?:\.\d+)?/);
  return eslesme ? Number(eslesme[0]) : 0;
}

function kisaSirketAdi(ad: string) {
  return ad
    .replace(/\s+A\.Ş\.$/i, "")
    .replace(/\s+Anonim Şirketi$/i, "")
    .trim();
}

function kisaKurumAdi(ad: string) {
  return ad
    .replace(/\s+Menkul Değerler A\.Ş\./gi, "")
    .replace(/\s+Menkul Kıymetler A\.Ş\./gi, "")
    .replace(/\s+Yatırım A\.Ş\./gi, " Yatırım")
    .replace(/\s+/g, " ")
    .trim();
}

function kurumlariAyir(araciKurum?: string) {
  if (!araciKurum) return [];
  return Array.from(
    new Set(
      araciKurum
        .split(/\s*(?:\/|\n)\s*/)
        .map(kisaKurumAdi)
        .filter(Boolean)
    )
  );
}

function grupOlustur(
  izahnameler: TaslakOgesi[],
  degerAl: (item: TaslakOgesi) => string[],
  sirala?: KategoriGrubuSirala
) {
  const gruplar = new Map<string, TaslakOgesi[]>();

  for (const item of izahnameler) {
    for (const deger of degerAl(item)) {
      gruplar.set(deger, [...(gruplar.get(deger) ?? []), item]);
    }
  }

  return Array.from(gruplar.entries())
    .map(([ad, grupIzahnameleri]) => ({
      ad,
      izahnameler: grupIzahnameleri.sort((a, b) =>
        a.label.localeCompare(b.label, "tr")
      ),
    }))
    .sort(sirala ?? ((a, b) => a.ad.localeCompare(b.ad, "tr")));
}

function payBuyukluguGrubu(item: TaslakOgesi) {
  const deger = sayiDegeri(item.pay);
  if (!deger) return "Pay bilgisi bekleniyor";
  if (deger >= 100_000_000) return "100 milyon lot ve üzeri";
  if (deger >= 50_000_000) return "50 - 100 milyon lot";
  if (deger >= 10_000_000) return "10 - 50 milyon lot";
  return "10 milyon lot altı";
}

function halkaAciklikGrubu(item: TaslakOgesi) {
  const deger = oranDegeri(item.halkaAciklikOrani);
  if (!deger) return "Halka açıklık oranı bekleniyor";
  if (deger >= 30) return "%30 ve üzeri";
  if (deger >= 20) return "%20 - %30 arası";
  if (deger >= 10) return "%10 - %20 arası";
  return "%10 altı";
}

function dagitimGrubu(item: TaslakOgesi) {
  return item.dagitimYontemi === TAMAMEN_ESIT_DAGITIM_ETIKETI
    ? TAMAMEN_ESIT_DAGITIM_ETIKETI
    : BIREYSELE_ESIT_DAGITIM_ETIKETI;
}

function sirayaGoreSirala(sira: string[]): KategoriGrubuSirala {
  const indeksler = new Map(sira.map((ad, index) => [ad, index]));
  return (a, b) => {
    const aSira = indeksler.get(a.ad) ?? Number.MAX_SAFE_INTEGER;
    const bSira = indeksler.get(b.ad) ?? Number.MAX_SAFE_INTEGER;
    return aSira - bSira || a.ad.localeCompare(b.ad, "tr");
  };
}

function SirketSatiri({
  item,
  detay,
}: {
  item: TaslakOgesi;
  detay?: string;
}) {
  return (
    <Link
      href={`/halka-arz/taslak-izahnameler/${item.klasor}`}
      prefetch={false}
      className="flex min-h-16 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-3 shadow-sm transition hover:border-blue-300 hover:bg-blue-50/60 md:px-4"
    >
      <SirketLogo logo={item.logo} ad={item.label} />
      <span className="min-w-0 flex-1 font-semibold text-zinc-900">
        {kisaSirketAdi(item.label)}
      </span>
      {detay && (
        <span className="max-w-[42%] text-right text-xs leading-5 text-zinc-600 md:text-sm">
          {detay}
        </span>
      )}
    </Link>
  );
}

function SirketListesi({
  izahnameler,
  detayAl,
}: {
  izahnameler: TaslakOgesi[];
  detayAl?: (item: TaslakOgesi) => string;
}) {
  return (
    <div className="grid gap-2 p-2 sm:grid-cols-2">
      {izahnameler.map((item) => (
        <SirketSatiri
          key={item.klasor}
          item={item}
          detay={detayAl?.(item)}
        />
      ))}
    </div>
  );
}

function GrupluListe({ gruplar }: { gruplar: KategoriGrubu[] }) {
  return (
    <div className="grid gap-3">
      {gruplar.map((grup) => (
        <details
          key={grup.ad}
          className="group/alt overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm transition hover:border-blue-300 hover:bg-blue-50/40"
        >
          <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 [&::-webkit-details-marker]:hidden">
            <h3 className="min-w-0 flex-1 text-sm font-bold text-slate-900 md:text-base">
              {grup.ad}
            </h3>
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open/alt:rotate-180"
            />
          </summary>
          <div className="border-t border-slate-200 bg-white">
            <SirketListesi izahnameler={grup.izahnameler} />
          </div>
        </details>
      ))}
    </div>
  );
}

function KategoriBolumu({
  baslik,
  aciklama,
  children,
}: {
  baslik: string;
  aciklama: string;
  children: ReactNode;
}) {
  return (
    <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-300">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-5 hover:bg-blue-50/50 md:px-5 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block text-base font-bold text-slate-950 md:text-lg">
            {baslik}
          </span>
          <span className="mt-1 block text-sm leading-5 text-slate-600">
            {aciklama}
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-slate-200 bg-slate-50/70 p-3 md:p-4">
        {children}
      </div>
    </details>
  );
}

export default function TaslakIzahnamelerClient({
  izahnameler,
}: {
  izahnameler: TaslakOgesi[];
}) {
  const basvuruTarihiGruplari = grupOlustur(
    izahnameler,
    (item) => [item.basvuruTarihi || "Başvuru tarihi bekleniyor"],
    (a, b) =>
      tarihDegeri(b.ad) - tarihDegeri(a.ad) || a.ad.localeCompare(b.ad, "tr")
  );
  const konsorsiyumGruplari = grupOlustur(izahnameler, (item) => {
    const kurumlar = kurumlariAyir(item.araciKurum);
    return kurumlar.length > 0 ? kurumlar : ["Konsorsiyum lideri bekleniyor"];
  });
  const sektorGruplari = grupOlustur(izahnameler, (item) => item.sektorler);
  const dagitimGruplari = grupOlustur(
    izahnameler,
    (item) => [dagitimGrubu(item)],
    sirayaGoreSirala([
      TAMAMEN_ESIT_DAGITIM_ETIKETI,
      BIREYSELE_ESIT_DAGITIM_ETIKETI,
    ])
  );
  const arzYapisiGruplari = grupOlustur(izahnameler, (item) => {
    if (item.sermayeArtirimiVar && item.ortakSatisVar) {
      return ["Sermaye artırımı ve ortak satışı"];
    }
    if (item.sermayeArtirimiVar) return ["Sadece sermaye artırımı"];
    if (item.ortakSatisVar) return ["Sadece ortak satışı"];
    return ["Arz şekli bilgisi bekleniyor"];
  });
  const payBuyukluguGruplari = grupOlustur(
    izahnameler,
    (item) => [payBuyukluguGrubu(item)],
    sirayaGoreSirala([
      "100 milyon lot ve üzeri",
      "50 - 100 milyon lot",
      "10 - 50 milyon lot",
      "10 milyon lot altı",
      "Pay bilgisi bekleniyor",
    ])
  );
  const halkaAciklikGruplari = grupOlustur(
    izahnameler,
    (item) => [halkaAciklikGrubu(item)],
    sirayaGoreSirala([
      "%30 ve üzeri",
      "%20 - %30 arası",
      "%10 - %20 arası",
      "%10 altı",
      "Halka açıklık oranı bekleniyor",
    ])
  );

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/halka-arz"
            prefetch={false}
            className="inline-block rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-zinc-900">Taslak İzahnameler</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          İncelemek istediğiniz kategori başlığını açarak ilgili taslak
          izahnamelere ulaşabilirsiniz.
        </p>

        <section className="mt-6 grid gap-3">
          <KategoriBolumu
            baslik="Başvuru Tarihine Göre"
            aciklama="En yeni başvurudan eski başvurulara doğru sıralanır."
          >
            <GrupluListe gruplar={basvuruTarihiGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Konsorsiyum Liderine Göre"
            aciklama="Taslaklarda belirtilen aracı kurumlara göre listelenir."
          >
            <GrupluListe gruplar={konsorsiyumGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Sektöre Göre"
            aciklama="Şirketlerin ana faaliyet alanlarına göre listelenir."
          >
            <GrupluListe gruplar={sektorGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Dağıtım Yöntemine Göre"
            aciklama="Tamamen eşit ve bireysele eşit dağıtım başlıklarıyla listelenir."
          >
            <GrupluListe gruplar={dagitimGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Planlanan Pay Büyüklüğüne Göre"
            aciklama="Planlanan lot miktarı büyükten küçüğe sıralanır."
          >
            <GrupluListe gruplar={payBuyukluguGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Halka Açıklık Oranına Göre"
            aciklama="Açıklanan halka açıklık oranı yüksekten düşüğe sıralanır."
          >
            <GrupluListe gruplar={halkaAciklikGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Arz Yapısına Göre"
            aciklama="Sermaye artırımı ve ortak satışı yapısına göre listelenir."
          >
            <GrupluListe gruplar={arzYapisiGruplari} />
          </KategoriBolumu>
        </section>

        <section className="mt-12 space-y-8">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Taslak İzahname Nedir?
            </h2>
            <p className="leading-relaxed text-zinc-700">
              Taslak izahname, halka arz başvurusu yapan şirketin Sermaye
              Piyasası Kurulu onayı öncesinde hazırladığı ilk bilgilendirme
              dokümanlarından biridir. Taslak aşamasındaki bilgiler SPK
              incelemesi ve şirket güncellemeleri sonrasında değişebilir.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Taslak İzahname ile Onaylı İzahname Arasındaki Fark
            </h2>
            <p className="leading-relaxed text-zinc-700">
              Taslak izahname başvuru ve inceleme aşamasındaki belgeyi, onaylı
              izahname ise SPK incelemesi tamamlandıktan sonra yayımlanan nihai
              şartları ifade eder. Yatırım kararı öncesinde onaylı izahname ve
              resmi KAP açıklamaları kontrol edilmelidir.
            </p>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-amber-950 md:text-2xl">
              Bilgilendirme Notu
            </h2>
            <p className="leading-relaxed text-amber-950">
              Bu sayfadaki bilgiler bilgilendirme amacıyla hazırlanmıştır.
              Taslak izahname verileri zaman içinde değişebilir ve yatırım
              tavsiyesi değildir.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

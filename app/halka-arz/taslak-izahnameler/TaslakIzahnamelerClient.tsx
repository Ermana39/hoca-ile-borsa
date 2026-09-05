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

function bilgi(text?: string) {
  return text && text.trim() ? text : "Açıklanmadı";
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
  degerAl: (item: TaslakOgesi) => string[]
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
    .sort(
      (a, b) =>
        b.izahnameler.length - a.izahnameler.length ||
        a.ad.localeCompare(b.ad, "tr")
    );
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
      className="flex min-h-16 items-center gap-3 px-3 py-3 transition hover:bg-zinc-50 md:px-4"
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
    <div className="divide-y divide-zinc-200">
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
    <div className="divide-y divide-zinc-200">
      {gruplar.map((grup) => (
        <section key={grup.ad} className="py-4 first:pt-0 last:pb-0">
          <div className="mb-2 flex items-center justify-between gap-3 px-3 md:px-4">
            <h3 className="font-bold text-zinc-900">{grup.ad}</h3>
            <span className="shrink-0 text-xs font-semibold text-zinc-500">
              {grup.izahnameler.length} şirket
            </span>
          </div>
          <SirketListesi izahnameler={grup.izahnameler} />
        </section>
      ))}
    </div>
  );
}

function KategoriBolumu({
  baslik,
  aciklama,
  adet,
  children,
}: {
  baslik: string;
  aciklama: string;
  adet: number;
  children: ReactNode;
}) {
  return (
    <details className="group border-b border-zinc-200 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-5 hover:bg-zinc-50 md:px-5 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block text-base font-bold text-zinc-900 md:text-lg">
            {baslik}
          </span>
          <span className="mt-1 block text-sm leading-5 text-zinc-600">
            {aciklama}
          </span>
        </span>
        <span className="shrink-0 text-xs font-semibold text-zinc-500">
          {adet} şirket
        </span>
        <ChevronDown
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-zinc-200 bg-white px-1 py-4 md:px-3">
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
  const basvuruTarihineGore = [...izahnameler].sort(
    (a, b) =>
      tarihDegeri(b.basvuruTarihi) - tarihDegeri(a.basvuruTarihi) ||
      a.label.localeCompare(b.label, "tr")
  );
  const payBuyukluguneGore = [...izahnameler].sort(
    (a, b) =>
      sayiDegeri(b.pay) - sayiDegeri(a.pay) ||
      a.label.localeCompare(b.label, "tr")
  );
  const halkaAcikligaGore = [...izahnameler].sort(
    (a, b) =>
      oranDegeri(b.halkaAciklikOrani) - oranDegeri(a.halkaAciklikOrani) ||
      a.label.localeCompare(b.label, "tr")
  );
  const konsorsiyumGruplari = grupOlustur(izahnameler, (item) => {
    const kurumlar = kurumlariAyir(item.araciKurum);
    return kurumlar.length > 0 ? kurumlar : ["Konsorsiyum lideri bekleniyor"];
  });
  const sektorGruplari = grupOlustur(izahnameler, (item) => item.sektorler);
  const pazarGruplari = grupOlustur(izahnameler, (item) => [
    item.pazar || "Pazar bilgisi bekleniyor",
  ]);
  const dagitimGruplari = grupOlustur(izahnameler, (item) => [
    item.dagitimYontemi || "Dağıtım yöntemi bekleniyor",
  ]);
  const arzYapisiGruplari = grupOlustur(izahnameler, (item) => {
    if (item.sermayeArtirimiVar && item.ortakSatisVar) {
      return ["Sermaye artırımı ve ortak satışı"];
    }
    if (item.sermayeArtirimiVar) return ["Sadece sermaye artırımı"];
    if (item.ortakSatisVar) return ["Sadece ortak satışı"];
    return ["Arz şekli bilgisi bekleniyor"];
  });

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

        <section className="mt-6 overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <KategoriBolumu
            baslik="Başvuru Tarihine Göre"
            aciklama="En yeni başvurudan eski başvurulara doğru sıralanır."
            adet={izahnameler.length}
          >
            <SirketListesi
              izahnameler={basvuruTarihineGore}
              detayAl={(item) => bilgi(item.basvuruTarihi)}
            />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Konsorsiyum Liderine Göre"
            aciklama="Taslaklarda belirtilen aracı kurumlara göre listelenir."
            adet={izahnameler.length}
          >
            <GrupluListe gruplar={konsorsiyumGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Sektöre Göre"
            aciklama="Şirketlerin ana faaliyet alanlarına göre listelenir."
            adet={izahnameler.length}
          >
            <GrupluListe gruplar={sektorGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Pazar Bilgisine Göre"
            aciklama="Planlanan pazar bilgisine göre listelenir."
            adet={izahnameler.length}
          >
            <GrupluListe gruplar={pazarGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Dağıtım Yöntemine Göre"
            aciklama="Eşit, oransal veya henüz açıklanmayan dağıtım yöntemine göre listelenir."
            adet={izahnameler.length}
          >
            <GrupluListe gruplar={dagitimGruplari} />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Planlanan Pay Büyüklüğüne Göre"
            aciklama="Planlanan lot miktarı büyükten küçüğe sıralanır."
            adet={izahnameler.length}
          >
            <SirketListesi
              izahnameler={payBuyukluguneGore}
              detayAl={(item) => bilgi(item.pay)}
            />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Halka Açıklık Oranına Göre"
            aciklama="Açıklanan halka açıklık oranı yüksekten düşüğe sıralanır."
            adet={izahnameler.length}
          >
            <SirketListesi
              izahnameler={halkaAcikligaGore}
              detayAl={(item) => bilgi(item.halkaAciklikOrani)}
            />
          </KategoriBolumu>

          <KategoriBolumu
            baslik="Arz Yapısına Göre"
            aciklama="Sermaye artırımı ve ortak satışı yapısına göre listelenir."
            adet={izahnameler.length}
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

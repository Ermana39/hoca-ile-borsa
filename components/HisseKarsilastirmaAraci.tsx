"use client";

import Link from "@/components/NoPrefetchLink";
import { useEffect, useMemo, useState } from "react";
import type {
  HisseKarsilastirmaKaydi,
  HisseKarsilastirmaOranlari,
} from "@/lib/hisse-karsilastirma";

type MetricKey = keyof HisseKarsilastirmaOranlari;
type MetricFormat = "carpan" | "oran-yuzde" | "yuzde";

type Metric = {
  key: MetricKey;
  label: string;
  aciklama: string;
  format: MetricFormat;
  pozitifOlmali?: boolean;
  isaretiRenklendir?: boolean;
};

type MetricGroup = {
  baslik: string;
  aciklama: string;
  metrics: Metric[];
};

const METRIC_GROUPS: MetricGroup[] = [
  {
    baslik: "Değerleme çarpanları",
    aciklama: "Çarpanlar şirketin kendi sektörü, büyüme hızı ve kârlılık yapısıyla birlikte okunmalıdır.",
    metrics: [
      { key: "fk", label: "F/K", aciklama: "Piyasa değerinin net kâra oranı", format: "carpan", pozitifOlmali: true },
      { key: "pdDd", label: "PD/DD", aciklama: "Piyasa değerinin defter değerine oranı", format: "carpan", pozitifOlmali: true },
      { key: "peg", label: "PEG", aciklama: "F/K oranının kâr büyümesine göre görünümü", format: "carpan", pozitifOlmali: true },
      { key: "pdNetSatis", label: "PD/Net Satış", aciklama: "Piyasa değerinin net satışlara oranı", format: "carpan", pozitifOlmali: true },
      { key: "pdEsasFaaliyetKari", label: "PD/Esas Faaliyet Kârı", aciklama: "Piyasa değerinin esas faaliyet kârına oranı", format: "carpan", pozitifOlmali: true },
    ],
  },
  {
    baslik: "Kârlılık",
    aciklama: "Kârlılık oranları, şirketin varlıklarını, özkaynağını ve satışlarını ne ölçüde kâra dönüştürdüğünü gösterir.",
    metrics: [
      { key: "aktifKarliligi", label: "Aktif Kârlılığı", aciklama: "Net kâr / toplam aktif", format: "oran-yuzde", isaretiRenklendir: true },
      { key: "ozsermayeKarliligi", label: "Özsermaye Kârlılığı", aciklama: "Net kâr / özsermaye", format: "oran-yuzde", isaretiRenklendir: true },
      { key: "netKarMarji", label: "Net Kâr Marjı", aciklama: "Net kâr / net satış", format: "oran-yuzde", isaretiRenklendir: true },
      { key: "esasFaaliyetKarMarji", label: "Esas Faaliyet Kâr Marjı", aciklama: "Esas faaliyet kârı / net satış", format: "oran-yuzde", isaretiRenklendir: true },
    ],
  },
  {
    baslik: "Borçluluk ve likidite",
    aciklama: "Borç ve likidite oranlarının anlamı sektöre göre değişir; tek bir oran tek başına yeterli değildir.",
    metrics: [
      { key: "cariOran", label: "Cari Oran", aciklama: "Dönen varlıkların kısa vadeli borçları karşılama oranı", format: "carpan" },
      { key: "esasFaaliyetKariKisaVadeliBorc", label: "Esas Faaliyet Kârı / KV Borç", aciklama: "Faaliyet kârının kısa vadeli borca oranı", format: "oran-yuzde", isaretiRenklendir: true },
      { key: "kisaVadeliBorcToplamAktif", label: "KV Borç / Toplam Aktif", aciklama: "Kısa vadeli borcun toplam varlıklardaki payı", format: "oran-yuzde" },
      { key: "kisaVadeliBorcToplamBorc", label: "KV Borç / Toplam Borç", aciklama: "Toplam borcun kısa vadede ödenecek bölümü", format: "oran-yuzde" },
      { key: "dovizPozisyonuOzsermaye", label: "Döviz Pozisyonu / Özsermaye", aciklama: "Net döviz pozisyonunun özsermayeye oranı", format: "oran-yuzde", isaretiRenklendir: true },
    ],
  },
  {
    baslik: "Büyüme",
    aciklama: "Değişim oranları, veri kaynağındaki karşılaştırmalı finansal döneme göre hesaplanmıştır.",
    metrics: [
      { key: "ozsermayeDegisimi", label: "Özsermaye Değişimi", aciklama: "Karşılaştırmalı döneme göre özsermaye değişimi", format: "yuzde", isaretiRenklendir: true },
      { key: "netKarDegisimi", label: "Net Kâr Değişimi", aciklama: "Karşılaştırmalı döneme göre net kâr değişimi", format: "yuzde", isaretiRenklendir: true },
      { key: "netSatisDegisimi", label: "Net Satış Değişimi", aciklama: "Karşılaştırmalı döneme göre net satış değişimi", format: "yuzde", isaretiRenklendir: true },
      { key: "esasFaaliyetKariDegisimi", label: "Esas Faaliyet Kârı Değişimi", aciklama: "Karşılaştırmalı döneme göre esas faaliyet kârı değişimi", format: "yuzde", isaretiRenklendir: true },
    ],
  },
];

const sayiFormatla = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const paraFormatla = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

function adresiGuncelle(secimler: [string, string, string]) {
  const kodlar = secimler.filter(Boolean).join(",");
  const yeniAdres = `${window.location.pathname}${window.location.search}#hisseler=${kodlar}`;
  window.history.replaceState(window.history.state, "", yeniAdres);
}

function metricDegeri(metric: Metric, value: number | null) {
  if (value === null || !Number.isFinite(value)) {
    return { metin: "Veri yok", className: "text-slate-400" };
  }

  if (metric.pozitifOlmali && value <= 0) {
    return { metin: "Anlamlı değil", className: "text-slate-400" };
  }

  const gorunenSayi = metric.format === "oran-yuzde" ? value * 100 : value;
  const metin = metric.format === "carpan"
    ? `${sayiFormatla.format(gorunenSayi)}x`
    : `%${sayiFormatla.format(gorunenSayi)}`;
  const className = metric.isaretiRenklendir
    ? value > 0
      ? "text-emerald-700"
      : value < 0
        ? "text-rose-700"
        : "text-slate-700"
    : "text-slate-800";

  return { metin, className };
}

function MasaustuMetrikTablosu({
  metricler,
  hisseler,
}: {
  metricler: Metric[];
  hisseler: HisseKarsilastirmaKaydi[];
}) {
  return (
    <div className="hidden md:block">
      <table className="w-full table-fixed border-collapse">
        <colgroup>
          <col className="w-[34%]" />
          {hisseler.map((hisse) => <col key={hisse.kod} />)}
        </colgroup>
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Gösterge</th>
            {hisseler.map((hisse) => (
              <th key={hisse.kod} className="px-3 py-3 text-center text-sm font-extrabold text-blue-700">
                {hisse.kod}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metricler.map((metric) => (
            <tr key={metric.key} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="px-4 py-3 text-left align-middle">
                <span className="block text-sm font-semibold text-slate-800">{metric.label}</span>
                <span className="mt-0.5 block text-xs font-normal leading-5 text-slate-500">{metric.aciklama}</span>
              </th>
              {hisseler.map((hisse) => {
                const deger = metricDegeri(metric, hisse.oranlar[metric.key]);
                return (
                  <td key={hisse.kod} className={`px-3 py-3 text-center text-sm font-bold tabular-nums ${deger.className}`}>
                    {deger.metin}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MobilMetrikListesi({
  metricler,
  hisseler,
}: {
  metricler: Metric[];
  hisseler: HisseKarsilastirmaKaydi[];
}) {
  return (
    <div className="space-y-3 p-3 md:hidden">
      {metricler.map((metric) => (
        <div key={metric.key} className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="text-sm font-semibold text-slate-800">{metric.label}</div>
          <div className="mt-0.5 text-xs leading-5 text-slate-500">{metric.aciklama}</div>
          <div className={`mt-3 grid gap-2 ${hisseler.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
            {hisseler.map((hisse) => {
              const deger = metricDegeri(metric, hisse.oranlar[metric.key]);
              return (
                <div key={hisse.kod} className="min-w-0 rounded-lg bg-slate-50 px-2 py-2 text-center">
                  <div className="truncate text-[11px] font-bold text-blue-700">{hisse.kod}</div>
                  <div className={`mt-1 break-words text-xs font-bold tabular-nums ${deger.className}`}>{deger.metin}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function TemettuKarsilastirmasi({
  hisseler,
  yil,
}: {
  hisseler: HisseKarsilastirmaKaydi[];
  yil: number;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-4 py-4 md:px-5">
        <h2 className="text-lg font-bold text-slate-900">Temettü takvimi</h2>
        <p className="mt-1 text-sm leading-6 text-slate-500">
          {yil} takvimindeki kayıtlı ödemeler gösterilir. Bu bölüm geçmiş temettü istikrarını veya kesin yıllık temettü verimini göstermez.
        </p>
      </div>
      <div className={`grid gap-3 p-3 md:p-4 ${hisseler.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {hisseler.map((hisse) => (
          <article key={hisse.kod} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-extrabold text-blue-700">{hisse.kod}</div>
            {hisse.temettu ? (
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Kayıtlı brüt/hisse toplamı</dt>
                  <dd className="text-right font-bold tabular-nums text-slate-900">{paraFormatla.format(hisse.temettu.brutToplam)}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Ödeme kaydı</dt>
                  <dd className="font-semibold text-slate-800">{hisse.temettu.odemeSayisi}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Son kayıt tarihi</dt>
                  <dd className="text-right font-semibold text-slate-800">{hisse.temettu.sonKayitTarihi}</dd>
                </div>
              </dl>
            ) : (
              <p className="mt-3 text-sm leading-6 text-slate-500">{yil} temettü takviminde bu hisse için kayıt bulunmuyor.</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HisseKarsilastirmaAraci({
  baslangicHisseleri,
  guncellemeTarihi,
  temettuYili,
  varsayilanKodlar,
  veriUrl,
}: {
  baslangicHisseleri: HisseKarsilastirmaKaydi[];
  guncellemeTarihi: string;
  temettuYili: number;
  varsayilanKodlar: [string, string];
  veriUrl: string;
}) {
  const [hisseler, setHisseler] = useState(baslangicHisseleri);
  const [veriDurumu, setVeriDurumu] = useState<
    "yukleniyor" | "hazir" | "hata"
  >("yukleniyor");
  const [secimler, setSecimler] = useState<[string, string, string]>([
    varsayilanKodlar[0],
    varsayilanKodlar[1],
    "",
  ]);
  const [paylasimMesaji, setPaylasimMesaji] = useState("");
  const hisseHaritasi = useMemo(
    () => new Map(hisseler.map((hisse) => [hisse.kod, hisse])),
    [hisseler]
  );

  useEffect(() => {
    let aktif = true;

    fetch(veriUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Karşılaştırma verisi alınamadı.");
        return response.json() as Promise<{ hisseler: HisseKarsilastirmaKaydi[] }>;
      })
      .then((veri) => {
        if (!aktif || !Array.isArray(veri.hisseler) || veri.hisseler.length < 2) return;
        setHisseler(veri.hisseler);
        setVeriDurumu("hazir");
      })
      .catch(() => {
        if (!aktif) return;
        setVeriDurumu("hata");
        adresiGuncelle([varsayilanKodlar[0], varsayilanKodlar[1], ""]);
      });

    return () => {
      aktif = false;
    };
  }, [varsayilanKodlar, veriUrl]);

  useEffect(() => {
    if (veriDurumu !== "hazir") return;

    const hashSecimleriniYukle = () => {
      try {
        const hash = decodeURIComponent(window.location.hash.slice(1));
        const kodlar = hash.startsWith("hisseler=")
          ? hash
              .slice("hisseler=".length)
              .split(",")
              .map((kod) => kod.trim().toUpperCase())
              .filter(
                (kod, index, liste) =>
                  hisseHaritasi.has(kod) && liste.indexOf(kod) === index
              )
              .slice(0, 3)
          : [];

        if (kodlar.length >= 2) {
          setSecimler([kodlar[0], kodlar[1], kodlar[2] ?? ""]);
          return;
        }
      } catch {
        // Bozuk bir URL parçası aracın varsayılan seçimlerle açılmasını engellemesin.
      }

      adresiGuncelle([varsayilanKodlar[0], varsayilanKodlar[1], ""]);
    };

    window.addEventListener("hashchange", hashSecimleriniYukle);
    const zamanlayici = window.setTimeout(hashSecimleriniYukle, 0);

    return () => {
      window.removeEventListener("hashchange", hashSecimleriniYukle);
      window.clearTimeout(zamanlayici);
    };
  }, [hisseHaritasi, varsayilanKodlar, veriDurumu]);

  const seciliHisseler = secimler
    .filter(Boolean)
    .map((kod) => hisseHaritasi.get(kod))
    .filter((hisse): hisse is HisseKarsilastirmaKaydi => Boolean(hisse));
  const donemler = new Set(seciliHisseler.map((hisse) => hisse.donem));
  const sektorler = new Set(seciliHisseler.map((hisse) => hisse.sektor));

  function secimiDegistir(index: number, kod: string) {
    const yeniKod = kod.toUpperCase();
    if (index < 2 && !yeniKod) return;
    if (yeniKod && !hisseHaritasi.has(yeniKod)) return;
    if (yeniKod && secimler.some((secim, secimIndex) => secimIndex !== index && secim === yeniKod)) return;

    const yeniSecimler: [string, string, string] = [
      secimler[0],
      secimler[1],
      secimler[2],
    ];
    yeniSecimler[index] = yeniKod;
    setSecimler(yeniSecimler);
    adresiGuncelle(yeniSecimler);
    setPaylasimMesaji("");
  }

  async function baglantiyiKopyala() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setPaylasimMesaji("Karşılaştırma bağlantısı kopyalandı.");
    } catch {
      setPaylasimMesaji("Bağlantı adres çubuğunda hazır; buradan paylaşabilirsiniz.");
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Karşılaştırılacak hisseleri seçin</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">İki hisse zorunludur; üçüncü hisse isteğe bağlıdır.</p>
          </div>
          <div className="text-sm font-semibold text-slate-600">Finansal veri: {guncellemeTarihi}</div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <label key={index} className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                {index === 2 ? "3. hisse (isteğe bağlı)" : `${index + 1}. hisse`}
              </span>
              <select
                value={secimler[index]}
                onChange={(event) => secimiDegistir(index, event.target.value)}
                disabled={veriDurumu !== "hazir"}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-wait disabled:bg-slate-100 disabled:text-slate-500"
              >
                {index === 2 && <option value="">Hisse ekleme</option>}
                {hisseler.map((hisse) => {
                  const baskaAlaninSecimi = secimler.some((secim, secimIndex) => secimIndex !== index && secim === hisse.kod);
                  return (
                    <option key={hisse.kod} value={hisse.kod} disabled={baskaAlaninSecimi}>
                      {hisse.kod} - {hisse.sirketAdi}
                    </option>
                  );
                })}
              </select>
            </label>
          ))}
        </div>

        {veriDurumu === "yukleniyor" && (
          <p role="status" className="mt-3 text-sm font-medium text-slate-500">
            Şirket listesi hazırlanıyor...
          </p>
        )}
        {veriDurumu === "hata" && (
          <p role="alert" className="mt-3 text-sm font-medium text-rose-700">
            Şirket listesinin tamamı yüklenemedi. Sayfayı yenileyerek tekrar deneyin.
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={baglantiyiKopyala}
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Bağlantıyı kopyala
          </button>
          {paylasimMesaji && <span role="status" className="text-sm font-medium text-slate-600">{paylasimMesaji}</span>}
        </div>
      </section>

      <section className={`grid gap-3 ${seciliHisseler.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
        {seciliHisseler.map((hisse) => (
          <article key={hisse.kod} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex rounded-lg bg-blue-50 px-2.5 py-1 text-sm font-extrabold text-blue-700">{hisse.kod}</span>
                <h2 className="mt-3 text-lg font-bold leading-6 text-slate-900">{hisse.sirketAdi}</h2>
              </div>
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">{hisse.donem}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">{hisse.sektor}</p>
            {hisse.profilHref ? (
              <Link href={hisse.profilHref} prefetch={false} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800">
                Hisse künyesini aç <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <p className="mt-4 text-xs text-slate-400">Hisse künye sayfası henüz bulunmuyor.</p>
            )}
          </article>
        ))}
      </section>

      {(donemler.size > 1 || sektorler.size > 1) && (
        <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          <div className="font-bold">Karşılaştırma notu</div>
          {donemler.size > 1 && <p className="mt-1">Seçili şirketlerin finansal veri dönemleri farklı. Sonuçları dönem farkını dikkate alarak okuyun.</p>}
          {sektorler.size > 1 && <p className="mt-1">Seçili şirketler farklı sektörlerde. Çarpan ve marjların makul aralıkları sektöre göre değişebilir.</p>}
        </aside>
      )}

      <aside className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
        <strong>FD/FAVÖK hakkında:</strong> Merkezi oran kaynağında FD/FAVÖK bulunmadığı için bu araçta gösterilmiyor. PD/Esas Faaliyet Kârı farklı bir çarpandır ve kendi adıyla sunulmuştur.
      </aside>

      {METRIC_GROUPS.map((group) => (
        <section key={group.baslik} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-4 py-4 md:px-5">
            <h2 className="text-lg font-bold text-slate-900">{group.baslik}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">{group.aciklama}</p>
          </div>
          <MasaustuMetrikTablosu metricler={group.metrics} hisseler={seciliHisseler} />
          <MobilMetrikListesi metricler={group.metrics} hisseler={seciliHisseler} />
        </section>
      ))}

      <TemettuKarsilastirmasi hisseler={seciliHisseler} yil={temettuYili} />
    </div>
  );
}

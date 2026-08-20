import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { getYazar, varsayilanYazar } from "@/app/data/yazarlar";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import KapEtkiAnalizi from "@/components/KapEtkiAnalizi";
import { getFundDetail } from "@/lib/fon-platform";
import { getOnayliHalkaArzKaydiByKod } from "@/lib/halka-arz";
import { formatHaberTarihi } from "@/lib/haber-tarih";
import { getKategori } from "@/lib/haber-kategorileri";
import { hisseVarMi } from "@/lib/hisseler";
import {
  HABER_SITE_URL,
  type HaberBolumu,
  type HaberKaydi,
  type HaberOzetKarti,
  type HaberVurgu,
} from "@/lib/haber-kayitlari";

const bolumStilleri: Record<HaberVurgu, string> = {
  normal: "border-slate-200 bg-white",
  analiz: "border-blue-200 bg-blue-50/40",
  risk: "border-amber-200 bg-white",
  takip: "border-slate-300 bg-slate-50",
};

const kartStilleri: Record<HaberVurgu, string> = {
  normal: "border-slate-200 bg-slate-50 text-slate-700",
  analiz: "border-blue-200 bg-white text-slate-700",
  risk: "border-amber-200 bg-white text-amber-950",
  takip: "border-slate-200 bg-white text-slate-700",
};

const editorBaslikStilleri: Record<HaberVurgu, string> = {
  normal: "text-slate-900",
  analiz: "text-blue-700",
  risk: "text-rose-700",
  takip: "text-emerald-700",
};

const kodDeseni = /\b[A-Z0-9]{2,6}\b/g;
const linklenmeyecekKodlar = new Set([
  "AŞ",
  "BIST",
  "CEO",
  "CFO",
  "DOLAR",
  "EPDK",
  "EUR",
  "EURO",
  "FAVOK",
  "GBP",
  "GSYO",
  "GYO",
  "IPO",
  "ISO",
  "KAP",
  "KDV",
  "KOBI",
  "KVKK",
  "MKK",
  "PD",
  "PYS",
  "SPK",
  "TCMB",
  "TEFAS",
  "TEIAS",
  "TL",
  "TRY",
  "TUIK",
  "USD",
  "YBB",
]);

const fonVarlikOnbellegi = new Map<string, boolean>();
const halkaArzLinkOnbellegi = new Map<string, string | null>();

type HaberLinklemeKapsami = {
  fonKodlari: Set<string>;
  sembolLinkleri: Map<string, string>;
};

function jsonLdGuvenli(veri: unknown) {
  return JSON.stringify(veri).replace(/</g, "\\u003c");
}

function fonVarMi(kod: string) {
  const slug = kod.toLowerCase();
  const kayitli = fonVarlikOnbellegi.get(slug);
  if (typeof kayitli === "boolean") return kayitli;

  const varMi = Boolean(getFundDetail(slug));
  fonVarlikOnbellegi.set(slug, varMi);
  return varMi;
}

function getOnayliHalkaArzLinki(kod: string) {
  const buyukKod = kod.toUpperCase();
  const kayitli = halkaArzLinkOnbellegi.get(buyukKod);
  if (kayitli !== undefined) return kayitli;

  const kayit = getOnayliHalkaArzKaydiByKod(buyukKod);
  const href = kayit
    ? `/halka-arz/onayli-izahnameler/${kayit.slug}`
    : null;
  halkaArzLinkOnbellegi.set(buyukKod, href);
  return href;
}

function yerelSiteHref(href: string) {
  return href.replace(/^https?:\/\/(?:www\.)?hocaileborsa\.com/i, "") || href;
}

function getKodLinki(kod: string, linkleme: HaberLinklemeKapsami) {
  const buyukKod = kod.toUpperCase();
  if (linklenmeyecekKodlar.has(buyukKod)) return null;

  const ozelLink = linkleme.sembolLinkleri.get(buyukKod);
  if (ozelLink) return ozelLink;

  const fonKodu = buyukKod.toLowerCase();
  if (linkleme.fonKodlari.has(buyukKod) || (!hisseVarMi(buyukKod) && fonVarMi(buyukKod))) {
    return `/fonlar/${fonKodu}`;
  }

  if (hisseVarMi(buyukKod)) {
    return `/hisse/${buyukKod.toLowerCase()}`;
  }

  return getOnayliHalkaArzLinki(buyukKod);
}

function HaberMetni({
  metin,
  linkleme,
  linkClassName = "font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900",
}: {
  metin: string;
  linkleme: HaberLinklemeKapsami;
  linkClassName?: string;
}) {
  const parcalar: ReactNode[] = [];
  let sonIndex = 0;
  let eslesme: RegExpExecArray | null;
  kodDeseni.lastIndex = 0;

  while ((eslesme = kodDeseni.exec(metin)) !== null) {
    const kod = eslesme[0];
    const baslangic = eslesme.index;
    const href = getKodLinki(kod, linkleme);

    if (baslangic > sonIndex) {
      parcalar.push(metin.slice(sonIndex, baslangic));
    }

    parcalar.push(
      href ? (
        <Link
          key={`${kod}-${baslangic}`}
          href={href}
          prefetch={false}
          className={linkClassName}
        >
          {kod}
        </Link>
      ) : (
        kod
      )
    );

    sonIndex = baslangic + kod.length;
  }

  if (sonIndex < metin.length) {
    parcalar.push(metin.slice(sonIndex));
  }

  return parcalar.length > 0 ? <>{parcalar}</> : metin;
}

function haberLinkiniDuzelt(href: string, label?: string) {
  const yerelHref = yerelSiteHref(href);
  const labelKod = label?.match(kodDeseni)?.[0]?.toUpperCase();

  if (labelKod && hisseVarMi(labelKod) && /^\/hisseler(?:[/?#]|$)/i.test(yerelHref)) {
    return `/hisse/${labelKod.toLowerCase()}`;
  }

  if (labelKod && /^\/fonlar(?:[/?#]|$)/i.test(yerelHref) && fonVarMi(labelKod)) {
    return `/fonlar/${labelKod.toLowerCase()}`;
  }

  const etkiAnaliziEslesme = yerelHref.match(
    /^\/fonlar\/etki-analizi\/([a-z0-9-]+)(?:[/?#]|$)/i
  );
  if (etkiAnaliziEslesme && fonVarMi(etkiAnaliziEslesme[1])) {
    return `/fonlar/${etkiAnaliziEslesme[1].toLowerCase()}`;
  }

  return yerelHref;
}

function bolumlerdenSembolLinkleriTopla(bolumler: HaberBolumu[]) {
  const linkler = new Map<string, string>();

  for (const bolum of bolumler) {
    if (!bolum.haberLink || !bolum.haberLinkMetni) continue;

    const kod = bolum.haberLinkMetni.match(kodDeseni)?.[0]?.toUpperCase();
    if (!kod || linklenmeyecekKodlar.has(kod)) continue;
    if (hisseVarMi(kod) || fonVarMi(kod) || getOnayliHalkaArzLinki(kod)) continue;

    const href = haberLinkiniDuzelt(bolum.haberLink, bolum.haberLinkMetni);
    if (
      href.startsWith("/halka-arz/onayli-izahnameler/") ||
      href.startsWith("/halka-arz/taslak-izahnameler/")
    ) {
      linkler.set(kod, href);
    }
  }

  return linkler;
}

function kapKaynakSatiri(paragraf: string) {
  const match = paragraf.match(/https?:\/\/(?:www\.)?kap\.org\.tr\/\S+/i);
  if (!/^Kaynak:/i.test(paragraf) || !match) return null;
  return match[0];
}

function HaberParagrafi({
  paragraf,
  id,
  linkleme,
}: {
  paragraf: string;
  id: string;
  linkleme: HaberLinklemeKapsami;
}) {
  const kapLink = kapKaynakSatiri(paragraf);

  if (kapLink) {
    return (
      <p className="text-sm leading-7 text-slate-700 md:text-base">
        <a
          href={kapLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 hover:text-blue-900"
        >
          Kaynak KAP
        </a>
      </p>
    );
  }

  return (
    <p id={id} className="text-sm leading-7 text-slate-700 md:text-base">
      <HaberMetni metin={paragraf} linkleme={linkleme} />
    </p>
  );
}

function OzetKarti({
  kart,
  linkleme,
}: {
  kart: HaberOzetKarti;
  linkleme: HaberLinklemeKapsami;
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
      <div className="text-sm font-semibold text-blue-800">
        {kart.baslik}
      </div>
      <div className="mt-1 text-2xl font-bold text-blue-950">
        <HaberMetni
          metin={kart.deger}
          linkleme={linkleme}
          linkClassName="text-blue-950 underline decoration-blue-400 underline-offset-4 transition hover:text-blue-700"
        />
      </div>
      <div className="mt-1 text-sm leading-6 text-blue-800">
        <HaberMetni metin={kart.aciklama} linkleme={linkleme} />
      </div>
    </div>
  );
}

function DegisimGrafigi({
  grafik,
}: {
  grafik: NonNullable<HaberBolumu["degisimGrafigi"]>;
}) {
  const enYuksekDeger = Math.max(
    ...grafik.veriler.map((veri) => Math.abs(veri.deger)),
    1
  );

  return (
    <figure className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <figcaption className="text-sm font-bold text-slate-900">
        {grafik.baslik}
      </figcaption>
      <div className="mt-3 space-y-2.5">
        {grafik.veriler.map((veri) => {
          const genislik = Math.max(
            3,
            (Math.abs(veri.deger) / enYuksekDeger) * 100
          );
          const olumlu = veri.deger >= 0;

          return (
            <div
              key={`${grafik.baslik}-${veri.etiket}`}
              className="grid grid-cols-[88px_minmax(0,1fr)_58px] items-center gap-3"
            >
              <span className="truncate text-xs font-semibold text-slate-700">
                {veri.etiket}
              </span>
              <div className="relative h-3 rounded-full bg-slate-200">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-[-2px] left-1/2 z-10 w-px bg-slate-500"
                />
                <div
                  className={`absolute top-0 h-full ${
                    olumlu ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                  style={{
                    width: `${genislik / 2}%`,
                    left: olumlu ? "50%" : `${50 - genislik / 2}%`,
                    borderRadius: olumlu
                      ? "0 9999px 9999px 0"
                      : "9999px 0 0 9999px",
                  }}
                />
              </div>
              <span
                className={`text-right text-xs font-bold tabular-nums ${
                  olumlu ? "text-emerald-700" : "text-rose-700"
                }`}
              >
                {olumlu ? "+" : ""}
                {veri.deger.toLocaleString("tr-TR", {
                  maximumFractionDigits: 1,
                })}
                %
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

function getFonKapanisKodlari(kayit: HaberKaydi) {
  if (!kayit.slug.endsWith("fonlar-gunluk-kapanis-degerlendirmesi")) {
    return [];
  }

  return Array.from(
    new Set(
      kayit.kaynaklar.flatMap((kaynak) => {
        const eslesme = kaynak.url.match(
          /\/fonlar\/etki-analizi\/([a-z0-9-]+)(?:[/?#]|$)/i
        );
        return eslesme ? [eslesme[1].toLowerCase()] : [];
      })
    )
  );
}

function getBolumFonKodlari(baslik: string, fonKodlari: string[]) {
  const baslikKelimeleri = new Set(
    baslik.toUpperCase().split(/[^A-Z0-9]+/).filter(Boolean)
  );

  return fonKodlari.filter((fonKodu) =>
    baslikKelimeleri.has(fonKodu.toUpperCase())
  );
}

function HaberIcerikBolumu({
  bolum,
  fonKodlari = [],
  linkleme,
}: {
  bolum: HaberBolumu;
  fonKodlari?: string[];
  linkleme: HaberLinklemeKapsami;
}) {
  const vurgu = bolum.vurgu ?? "normal";
  const haberLink = bolum.haberLink
    ? haberLinkiniDuzelt(bolum.haberLink, bolum.haberLinkMetni)
    : null;
  const kapBaglantilari = [
    bolum.kapLink
      ? {
          href: bolum.kapLink,
          label: bolum.kapLinkMetni ?? "Kaynak KAP",
        }
      : null,
    ...(bolum.ekKapLinkler ?? []).map((href, index) => ({
      href,
      label:
        index === 0
          ? "Kaynak KAP"
          : `Kaynak KAP ${index + 1}`,
    })),
  ].filter((baglanti): baglanti is { href: string; label: string } =>
    Boolean(baglanti)
  );

  return (
    <section
      className={`rounded-2xl border p-5 shadow-sm md:p-6 ${bolumStilleri[vurgu]}`}
    >
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        {bolum.baslik}
      </h2>

      {bolum.giris && (
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          <HaberMetni metin={bolum.giris} linkleme={linkleme} />
        </p>
      )}

      {bolum.paragraflar && bolum.paragraflar.length > 0 && (
        <div className="mt-4 space-y-4">
          {bolum.paragraflar.map((paragraf, index) => (
            <Fragment key={`${bolum.baslik}-paragraf-${index}`}>
              <HaberParagrafi
                id={`${bolum.baslik}-paragraf-${index}`}
                paragraf={paragraf}
                linkleme={linkleme}
              />
              {index === 1 && bolum.degisimGrafigi && (
                <DegisimGrafigi grafik={bolum.degisimGrafigi} />
              )}
            </Fragment>
          ))}
        </div>
      )}

      {haberLink && (
        <Link
          href={haberLink}
          prefetch={false}
          className="mt-5 inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:text-base"
        >
          {bolum.haberLinkMetni ?? "Haberin detaylarını oku"}
        </Link>
      )}

      {kapBaglantilari.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {kapBaglantilari.map((baglanti) => (
            <a
              key={baglanti.href}
              href={baglanti.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100 hover:text-blue-900"
            >
              {baglanti.label}
            </a>
          ))}
        </div>
      )}

      {bolum.tablo && bolum.tablo.basliklar.length > 0 && (
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                {bolum.tablo.basliklar.map((baslik, index) => (
                  <th
                    key={`${bolum.baslik}-tablo-baslik-${index}`}
                    className="px-4 py-3 text-left font-bold"
                  >
                    {baslik}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bolum.tablo.satirlar.map((satir, satirIndex) => (
                <tr
                  key={`${bolum.baslik}-tablo-satir-${satirIndex}`}
                  className={satirIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  {satir.map((hucre, hucreIndex) => (
                    <td
                      key={`${bolum.baslik}-tablo-hucre-${satirIndex}-${hucreIndex}`}
                      className={`border-t border-slate-100 px-4 py-3 text-slate-700 ${
                        hucreIndex === 0 ? "font-semibold text-slate-900" : ""
                      }`}
                    >
                      <HaberMetni metin={hucre} linkleme={linkleme} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {bolum.kartlar && bolum.kartlar.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {bolum.kartlar.map((kart, index) => (
            <div
              key={`${kart.baslik}-${index}`}
              className={`rounded-xl border p-4 ${kartStilleri[vurgu]}`}
            >
              <h3 className="text-base font-bold text-slate-900">
                {kart.baslik}
              </h3>
              <p className="mt-2 text-sm leading-7">
                <HaberMetni metin={kart.aciklama} linkleme={linkleme} />
              </p>
            </div>
          ))}
        </div>
      )}

      {bolum.maddeler && bolum.maddeler.length > 0 && (
        <ul className="mt-4 space-y-3">
          {bolum.maddeler.map((madde, index) => (
            <li
              key={`${bolum.baslik}-madde-${index}`}
              className={`rounded-xl border p-4 text-sm font-medium leading-7 ${kartStilleri[vurgu]}`}
            >
              <HaberMetni metin={madde} linkleme={linkleme} />
            </li>
          ))}
        </ul>
      )}

      {fonKodlari.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {fonKodlari.map((fonKodu) => (
            <Link
              key={fonKodu}
              href={`/fonlar/${fonKodu}`}
              prefetch={false}
              className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:text-base"
            >
              {fonKodu.toUpperCase()} fon sayfası
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

function HaberEditoryalAnaliz({
  kayit,
  kapanisDegerlendirmesi,
  linkleme,
}: {
  kayit: HaberKaydi;
  kapanisDegerlendirmesi: boolean;
  linkleme: HaberLinklemeKapsami;
}) {
  const { giris, bolumler } = kayit.editorDegerlendirmesi;
  const gorunurGiris = !kapanisDegerlendirmesi && giris.trim().length > 0;
  if (!gorunurGiris && bolumler.length === 0) return null;

  return (
    <section
      className="border-y border-slate-200 py-7 md:py-9"
      aria-labelledby="haber-editoryal-analiz"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
        Analiz ve değerlendirme
      </p>
      <h2
        id="haber-editoryal-analiz"
        className="mt-1 text-xl font-bold tracking-tight text-slate-900 md:text-2xl"
      >
        Gelişmenin olası etkileri
      </h2>

      {gorunurGiris && (
        <p className="mt-4 text-base font-medium leading-8 text-slate-700 md:text-lg">
          <HaberMetni metin={giris} linkleme={linkleme} />
        </p>
      )}

      <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
        {bolumler.map((bolum, bolumIndex) => {
          const vurgu = bolum.vurgu ?? "normal";
          const fonKodlari = getBolumFonKodlari(
            bolum.baslik,
            getFonKapanisKodlari(kayit)
          );
          const haberLink = bolum.haberLink
            ? haberLinkiniDuzelt(bolum.haberLink, bolum.haberLinkMetni)
            : null;

          return (
            <section
              key={`editor-${bolumIndex}-${bolum.baslik}`}
              className="py-6 first:pt-5 last:pb-0"
            >
              <h3
                className={`text-lg font-bold leading-7 md:text-xl ${editorBaslikStilleri[vurgu]}`}
              >
                {bolum.baslik}
              </h3>

              {bolum.giris && (
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  <HaberMetni metin={bolum.giris} linkleme={linkleme} />
                </p>
              )}

              {bolum.paragraflar && bolum.paragraflar.length > 0 && (
                <div className="mt-3 space-y-4">
                  {bolum.paragraflar.map((paragraf, index) => (
                    <Fragment key={`${bolum.baslik}-editor-paragraf-${index}`}>
                      <HaberParagrafi
                        id={`${bolum.baslik}-editor-paragraf-${index}`}
                        paragraf={paragraf}
                        linkleme={linkleme}
                      />
                      {index === 1 && bolum.degisimGrafigi && (
                        <DegisimGrafigi grafik={bolum.degisimGrafigi} />
                      )}
                    </Fragment>
                  ))}
                </div>
              )}

              {bolum.kartlar && bolum.kartlar.length > 0 && (
                <div className="mt-4 space-y-4">
                  {bolum.kartlar.map((kart, index) => (
                    <div
                      key={`${kart.baslik}-${index}`}
                      className="border-l-2 border-slate-300 pl-4"
                    >
                      <h4 className="font-bold text-slate-900">
                        {kart.baslik}
                      </h4>
                      <p className="mt-1 text-sm leading-7 text-slate-700 md:text-base">
                        <HaberMetni metin={kart.aciklama} linkleme={linkleme} />
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {bolum.maddeler && bolum.maddeler.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 marker:text-slate-400 md:text-base">
                  {bolum.maddeler.map((madde, index) => (
                    <li key={`${bolum.baslik}-editor-madde-${index}`}>
                      <HaberMetni metin={madde} linkleme={linkleme} />
                    </li>
                  ))}
                </ul>
              )}

              {bolum.tablo && bolum.tablo.basliklar.length > 0 && (
                <div className="mt-5 overflow-x-auto border-y border-slate-200">
                  <table className="min-w-full text-sm">
                    <thead className="bg-slate-50 text-slate-700">
                      <tr>
                        {bolum.tablo.basliklar.map((baslik, index) => (
                          <th
                            key={`${bolum.baslik}-editor-tablo-baslik-${index}`}
                            className="px-4 py-3 text-left font-bold"
                          >
                            {baslik}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bolum.tablo.satirlar.map((satir, satirIndex) => (
                        <tr key={`${bolum.baslik}-editor-satir-${satirIndex}`}>
                          {satir.map((hucre, hucreIndex) => (
                            <td
                              key={`${bolum.baslik}-editor-hucre-${satirIndex}-${hucreIndex}`}
                              className={`border-t border-slate-100 px-4 py-3 text-slate-700 ${
                                hucreIndex === 0 ? "font-semibold text-slate-900" : ""
                              }`}
                            >
                              <HaberMetni metin={hucre} linkleme={linkleme} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {haberLink && (
                <Link
                  href={haberLink}
                  prefetch={false}
                  className="mt-5 inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  {bolum.haberLinkMetni ?? "Haberin detaylarını oku"}
                </Link>
              )}

              {fonKodlari.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {fonKodlari.map((fonKodu) => (
                    <Link
                      key={fonKodu}
                      href={`/fonlar/${fonKodu}`}
                      prefetch={false}
                      className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                      {fonKodu.toUpperCase()} fon sayfası
                    </Link>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}

function FonKapanisYonlendirmeleri({ kayit }: { kayit: HaberKaydi }) {
  const fonKodlari = getFonKapanisKodlari(kayit);

  if (fonKodlari.length === 0) return null;

  const karsilastirmaHref = `/fonlar/fon-karsilastirma?fonlar=${encodeURIComponent(
    fonKodlari.join(",")
  )}`;

  return (
    <section
      className="border-y border-slate-200 py-6"
      aria-labelledby="haberdeki-fonlar-baslik"
    >
      <h2
        id="haberdeki-fonlar-baslik"
        className="text-xl font-bold tracking-tight text-slate-900"
      >
        Fon analiz araçları
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
        Haberdeki fonları karşılaştırın veya tüm yatırım fonlarını ayrıntılı
        ölçütlerle tarayın.
      </p>

      <nav
        className="mt-4 flex flex-wrap gap-2"
        aria-label="Fon analiz araçları"
      >
        <Link
          href="/fonlar"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-lg border border-blue-700 bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:border-blue-800 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Tüm fonlar
        </Link>
        <Link
          href="/fonlar/fon-tarayici"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Fon tarayıcı
        </Link>
        <Link
          href={karsilastirmaHref}
          prefetch={false}
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Haberdeki fonları karşılaştır
        </Link>
      </nav>
    </section>
  );
}

function haberJsonLd(kayit: HaberKaydi) {
  const url = `${HABER_SITE_URL}/haber/${kayit.slug}`;
  const yazar = getYazar(kayit.yazarSlug) ?? getYazar(varsayilanYazar);

  return [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${url}#article`,
      headline: kayit.baslik,
      description: kayit.aciklama,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      image: {
        "@type": "ImageObject",
        url: `${HABER_SITE_URL}${kayit.gorsel.src}`,
        width: kayit.gorsel.genislik,
        height: kayit.gorsel.yukseklik,
      },
      datePublished: kayit.yayinTarihi,
      dateModified: kayit.guncellemeTarihi,
      inLanguage: "tr-TR",
      articleSection: getKategori(kayit.kategori)?.kisaBaslik,
      keywords: kayit.ilgiliHisseler,
      citation: kayit.kaynaklar.map((kaynak) => kaynak.url),
      author: yazar
        ? {
            "@type": "Person",
            "@id": `${HABER_SITE_URL}/yazar/${yazar.slug}#person`,
            name: yazar.isim,
            url: `${HABER_SITE_URL}/yazar/${yazar.slug}`,
          }
        : undefined,
      publisher: {
        "@type": "Organization",
        "@id": `${HABER_SITE_URL}/#organization`,
        name: "Hoca İle Borsa",
        url: HABER_SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${HABER_SITE_URL}/icon-512.png`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: HABER_SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Haberler",
          item: `${HABER_SITE_URL}/haberler`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: kayit.baslik,
          item: url,
        },
      ],
    },
  ];
}

export default function OrtakHaberSayfasi({ kayit }: { kayit: HaberKaydi }) {
  const href = `/haber/${kayit.slug}`;
  const kategori = getKategori(kayit.kategori);
  const yazar = getYazar(kayit.yazarSlug) ?? getYazar(varsayilanYazar);
  const yayinTarihi = formatHaberTarihi(kayit.yayinTarihi);
  const guncellemeTarihi = formatHaberTarihi(kayit.guncellemeTarihi);
  const guncellendi = kayit.guncellemeTarihi !== kayit.yayinTarihi;
  const kapanisDegerlendirmesi = kayit.etiket
    .toLocaleLowerCase("tr-TR")
    .includes("kapanış değerlendirmesi");
  const fonKapanisKodlari = getFonKapanisKodlari(kayit);
  const linkleme = {
    fonKodlari: new Set(
      [...(kayit.ilgiliFonlar ?? []), ...fonKapanisKodlari].map((kod) =>
        kod.toUpperCase()
      )
    ),
    sembolLinkleri: bolumlerdenSembolLinkleriTopla([
      ...kayit.kaynakOzeti.bolumler,
      ...kayit.editorDegerlendirmesi.bolumler,
    ]),
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdGuvenli(haberJsonLd(kayit)) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="İçerik yolu"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-700">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/haberler" prefetch={false} className="transition hover:text-blue-700">
            Haberler
          </Link>
          {kategori && (
            <>
              <span className="text-slate-300">/</span>
              <Link
                href={`/haberler/kategori/${kategori.slug}`}
                prefetch={false}
                className="transition hover:text-blue-700"
              >
                {kategori.kisaBaslik}
              </Link>
            </>
          )}
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={kayit.gorsel.src}
              alt={kayit.gorsel.alt}
              fill
              unoptimized
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {kayit.baslik}
            </h1>

            <div className="mb-6 mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                {kayit.etiket}
              </span>
              <time dateTime={kayit.yayinTarihi} className="text-sm text-slate-500">
                {yayinTarihi}
              </time>
              {yazar && (
                <>
                  <span className="text-slate-300">·</span>
                  <Link
                    href={`/yazar/${yazar.slug}`}
                    prefetch={false}
                    className="text-sm font-semibold text-slate-600 hover:text-blue-700"
                  >
                    {yazar.isim}
                  </Link>
                </>
              )}
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-base leading-8 text-slate-700 md:text-lg">
                {kayit.kaynakOzeti.giris.map((paragraf, index) => (
                  <p key={`giris-${index}`}>
                    <HaberMetni metin={paragraf} linkleme={linkleme} />
                  </p>
                ))}
              </div>

              {kayit.kaynakOzeti.ozetKartlari.length > 0 && (
                <section aria-label="Haber özeti" className="grid gap-4 sm:grid-cols-2">
                  {kayit.kaynakOzeti.ozetKartlari.map((kart, index) => (
                    <OzetKarti
                      key={`${kart.baslik}-${index}`}
                      kart={kart}
                      linkleme={linkleme}
                    />
                  ))}
                </section>
              )}

              {!kapanisDegerlendirmesi &&
                kayit.kaynakOzeti.temelBilgiler.length > 0 && (
                  <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-sm md:p-6">
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Doğrulanabilir bilgiler
                      </p>
                      <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
                        Kaynakta açıklanan temel bilgiler
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Bu bölümdeki veriler aşağıda bağlantısı verilen resmî kaynaklardan aktarılmıştır.
                      </p>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-emerald-200 bg-white">
                      <table className="min-w-full text-sm">
                        <tbody>
                          {kayit.kaynakOzeti.temelBilgiler.map((satir, index) => (
                            <tr
                              key={`${satir.etiket}-${index}`}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-emerald-50/40"
                              }
                            >
                              <th className="w-2/5 px-4 py-3 text-left font-semibold text-slate-800">
                                {satir.etiket}
                              </th>
                              <td className="px-4 py-3 font-medium text-slate-700">
                                <HaberMetni metin={satir.deger} linkleme={linkleme} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

              {kayit.kaynakOzeti.bolumler.map((bolum, index) => (
                <HaberIcerikBolumu
                  key={`kaynak-${index}-${bolum.baslik}`}
                  bolum={bolum}
                  fonKodlari={getBolumFonKodlari(
                    bolum.baslik,
                    fonKapanisKodlari
                  )}
                  linkleme={linkleme}
                />
              ))}

              <HaberEditoryalAnaliz
                kayit={kayit}
                kapanisDegerlendirmesi={kapanisDegerlendirmesi}
                linkleme={linkleme}
              />

              {kayit.kapEtkiAnalizi && (
                <KapEtkiAnalizi analiz={kayit.kapEtkiAnalizi} />
              )}

              <FonKapanisYonlendirmeleri kayit={kayit} />

              {kayit.sorular && kayit.sorular.length > 0 && (
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                  <h2 className="text-xl font-bold tracking-tight text-slate-900">
                    Haber hakkında kısa cevaplar
                  </h2>
                  <div className="mt-4 space-y-4">
                    {kayit.sorular.map((item, index) => (
                      <div
                        key={`${item.soru}-${index}`}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <h3 className="font-bold text-slate-900">{item.soru}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                          <HaberMetni metin={item.cevap} linkleme={linkleme} />
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <HaberIlgiliBolumler slug={kayit.slug} baslik={kayit.baslik} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                {kayit.yasalUyari ??
                  "Bu haber bilgilendirme amacıyla hazırlanmıştır; yatırım tavsiyesi değildir."}
              </div>

              {guncellendi && (
                <p className="text-xs leading-6 text-slate-500">
                  Son güncelleme: <time dateTime={kayit.guncellemeTarihi}>{guncellemeTarihi}</time>
                </p>
              )}
            </div>
          </div>

          <HaberAltKisim href={href} />
          <div className="px-6 pb-6 pt-5 md:px-10 md:pb-10">
            <AuthorBox slug={kayit.yazarSlug} />
          </div>
        </article>
      </div>
    </main>
  );
}

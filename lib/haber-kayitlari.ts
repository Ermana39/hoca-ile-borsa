import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { cache } from "react";
import { getYazar, varsayilanYazar } from "@/app/data/yazarlar";
import {
  getKategori,
  isHaberKategori,
  type HaberKategori,
} from "@/lib/haber-kategorileri";
import {
  seoAciklamasi,
  seoBasliginiSinirla,
  siteAdiniBasliktanCikar,
} from "@/lib/seo-metadata";

const SITE_URL = "https://www.hocaileborsa.com";
export const HABER_KAYIT_SURUMU = 1;
export const HABER_KAYIT_DIZINI = path.join(
  process.cwd(),
  "data",
  "haberler"
);

const STATIK_HABER_DIZINI = path.join(process.cwd(), "app", "haber");

export type HaberDurumu = "taslak" | "yayinda";
export type HaberVurgu = "normal" | "analiz" | "risk" | "takip";

export type HaberOzetKarti = {
  baslik: string;
  deger: string;
  aciklama: string;
};

export type HaberBilgiSatiri = {
  etiket: string;
  deger: string;
};

export type HaberMetinKarti = {
  baslik: string;
  aciklama: string;
};

export type HaberTablosu = {
  basliklar: string[];
  satirlar: string[][];
};

export type HaberBolumu = {
  baslik: string;
  giris?: string;
  paragraflar?: string[];
  degisimGrafigi?: {
    baslik: string;
    veriler: Array<{
      etiket: string;
      deger: number;
    }>;
  };
  tablo?: HaberTablosu;
  kartlar?: HaberMetinKarti[];
  maddeler?: string[];
  kapLink?: string;
  kapLinkMetni?: string;
  ekKapLinkler?: string[];
  haberLink?: string;
  haberLinkMetni?: string;
  vurgu?: HaberVurgu;
};

export type HaberKaynagi = {
  ad: string;
  url: string;
  tur: "KAP" | "SPK" | "BIST" | "TCMB" | "TEFAS" | "Sirket" | "Diger";
  yayinTarihi?: string;
};

export type KapParaBirimi = "TRY" | "USD" | "EUR" | "GBP";

export type KapTutarOraniMetrigi = {
  tur: "tutar-orani";
  baslik: string;
  olayEtiketi: string;
  olayTutari: number;
  olayParaBirimi: KapParaBirimi;
  referansEtiketi: string;
  referansTutari: number;
  referansParaBirimi: KapParaBirimi;
  referansDonemi: string;
  kaynakOran?: number;
  kurDonusumu?: {
    birimBasina: number;
    tarih: string;
    tur: string;
  };
  aciklama: string;
};

export type KapKapasiteArtisiMetrigi = {
  tur: "kapasite-artisi";
  baslik: string;
  mevcutKapasite: number;
  ekKapasite: number;
  birim: string;
  aciklama: string;
};

export type KapBedelsizMetrigi = {
  tur: "bedelsiz";
  baslik: string;
  eskiSermaye: number;
  yeniSermaye: number;
  referansFiyat?: number;
  paraBirimi: KapParaBirimi;
  aciklama: string;
};

export type KapHesaplanamadiMetrigi = {
  tur: "hesaplanamadi";
  baslik: string;
  neden: string;
  gerekliVeriler: string[];
};

export type KapGenelMetrik = {
  tur: string;
  baslik: string;
  aciklama?: string;
  oran?: number;
  deger?: number | string;
  olayEtiketi?: string;
  olayTutari?: number;
  olayParaBirimi?: string;
  referansEtiketi?: string;
  referansTutari?: number;
  referansParaBirimi?: string;
  referansDonemi?: string;
  [alan: string]: unknown;
};

export type KapEtkiMetrigi =
  | KapTutarOraniMetrigi
  | KapKapasiteArtisiMetrigi
  | KapBedelsizMetrigi
  | KapHesaplanamadiMetrigi
  | KapGenelMetrik;

export type KapEtkiAnalizi = {
  olayTuru: string;
  ozet: string;
  metrikler: KapEtkiMetrigi[];
  riskler: string[];
  takipEdilecekler: string[];
  metodolojiNotu?: string;
};

export type HaberKaydi = {
  surum: 1;
  durum: HaberDurumu;
  slug: string;
  baslik: string;
  aciklama: string;
  kategori: HaberKategori;
  etiket: string;
  yayinTarihi: string;
  guncellemeTarihi: string;
  yazarSlug: string;
  gorsel: {
    src: string;
    alt: string;
    genislik: number;
    yukseklik: number;
  };
  ilgiliHisseler: string[];
  ilgiliFonlar?: string[];
  kaynakOzetiMetni?: string;
  kaynakOzeti: {
    giris: string[];
    ozetKartlari: HaberOzetKarti[];
    temelBilgiler: HaberBilgiSatiri[];
    bolumler: HaberBolumu[];
  };
  editorDegerlendirmesi: {
    giris: string;
    bolumler: HaberBolumu[];
  };
  kapEtkiAnalizi?: KapEtkiAnalizi;
  sorular?: Array<{
    soru: string;
    cevap: string;
  }>;
  kaynaklar: HaberKaynagi[];
  yasalUyari?: string;
};

type BilinmeyenKayit = Record<string, unknown>;

function objeMi(deger: unknown): deger is BilinmeyenKayit {
  return Boolean(deger) && typeof deger === "object" && !Array.isArray(deger);
}

function metinDizisi(deger: unknown): string[] {
  return Array.isArray(deger)
    ? deger.filter((oge): oge is string => typeof oge === "string")
    : [];
}

function pozitifSayi(deger: unknown): number | null {
  return typeof deger === "number" && Number.isFinite(deger) && deger > 0
    ? deger
    : null;
}

function haberVurgusu(deger: unknown): HaberVurgu | undefined {
  return deger === "normal" ||
    deger === "analiz" ||
    deger === "risk" ||
    deger === "takip"
    ? deger
    : undefined;
}

function haberBolumuNormalizeEt(deger: unknown): HaberBolumu | null {
  if (!objeMi(deger) || typeof deger.baslik !== "string") return null;

  const bolum: HaberBolumu = { baslik: deger.baslik };

  if (typeof deger.giris === "string") bolum.giris = deger.giris;

  if (Array.isArray(deger.paragraflar)) {
    bolum.paragraflar = metinDizisi(deger.paragraflar);
  }

  if (Array.isArray(deger.maddeler)) {
    bolum.maddeler = metinDizisi(deger.maddeler);
  }

  if (objeMi(deger.degisimGrafigi)) {
    const grafik = deger.degisimGrafigi;
    const veriler = Array.isArray(grafik.veriler)
      ? grafik.veriler
          .filter(objeMi)
          .filter(
            (oge) =>
              typeof oge.etiket === "string" &&
              typeof oge.deger === "number" &&
              Number.isFinite(oge.deger)
          )
          .map((oge) => ({ etiket: oge.etiket as string, deger: oge.deger as number }))
      : [];

    if (typeof grafik.baslik === "string" && veriler.length > 0) {
      bolum.degisimGrafigi = { baslik: grafik.baslik, veriler };
    }
  }

  if (objeMi(deger.tablo)) {
    const tablo = deger.tablo;
    const basliklar = metinDizisi(tablo.basliklar);
    const satirlar = Array.isArray(tablo.satirlar)
      ? tablo.satirlar
          .filter((satir): satir is unknown[] => Array.isArray(satir))
          .map((satir) => satir.filter((hucre): hucre is string => typeof hucre === "string"))
      : [];

    if (basliklar.length > 0 && satirlar.length > 0) {
      bolum.tablo = { basliklar, satirlar };
    }
  }

  if (Array.isArray(deger.kartlar)) {
    const kartlar = deger.kartlar
      .filter(objeMi)
      .filter(
        (kart) =>
          typeof kart.baslik === "string" && typeof kart.aciklama === "string"
      )
      .map((kart) => ({
        baslik: kart.baslik as string,
        aciklama: kart.aciklama as string,
      }));

    if (kartlar.length > 0) bolum.kartlar = kartlar;
  }

  if (typeof deger.kapLink === "string") bolum.kapLink = deger.kapLink;
  if (typeof deger.kapLinkMetni === "string") {
    bolum.kapLinkMetni = deger.kapLinkMetni;
  }
  if (Array.isArray(deger.ekKapLinkler)) {
    bolum.ekKapLinkler = metinDizisi(deger.ekKapLinkler);
  }
  if (typeof deger.haberLink === "string") bolum.haberLink = deger.haberLink;
  if (typeof deger.haberLinkMetni === "string") {
    bolum.haberLinkMetni = deger.haberLinkMetni;
  }

  const vurgu = haberVurgusu(deger.vurgu);
  if (vurgu) bolum.vurgu = vurgu;

  return bolum;
}

function haberBolumleriNormalizeEt(deger: unknown): HaberBolumu[] {
  if (!Array.isArray(deger)) return [];
  return deger
    .map(haberBolumuNormalizeEt)
    .filter((bolum): bolum is HaberBolumu => Boolean(bolum));
}

function ozetKartlariNormalizeEt(deger: unknown): HaberOzetKarti[] {
  if (!Array.isArray(deger)) return [];

  return deger
    .filter(objeMi)
    .filter(
      (kart) =>
        typeof kart.baslik === "string" && typeof kart.deger === "string"
    )
    .map((kart) => ({
      baslik: kart.baslik as string,
      deger: kart.deger as string,
      aciklama: typeof kart.aciklama === "string" ? kart.aciklama : "",
    }));
}

function temelBilgilerNormalizeEt(deger: unknown): HaberBilgiSatiri[] {
  if (!Array.isArray(deger)) return [];

  return deger
    .filter(objeMi)
    .filter(
      (satir) =>
        typeof satir.etiket === "string" && typeof satir.deger === "string"
    )
    .map((satir) => ({
      etiket: satir.etiket as string,
      deger: satir.deger as string,
    }));
}

function kaynakTuruNormalizeEt(
  deger: unknown
): HaberKaynagi["tur"] {
  return deger === "KAP" ||
    deger === "SPK" ||
    deger === "BIST" ||
    deger === "TCMB" ||
    deger === "TEFAS" ||
    deger === "Sirket" ||
    deger === "Diger"
    ? deger
    : "Diger";
}

function kaynaklariNormalizeEt(deger: unknown): HaberKaynagi[] {
  if (!Array.isArray(deger)) return [];

  return deger
    .filter(objeMi)
    .filter((kaynak) => typeof kaynak.ad === "string")
    .map((kaynak) => ({
      ad: kaynak.ad as string,
      url: typeof kaynak.url === "string" ? kaynak.url : "",
      tur: kaynakTuruNormalizeEt(kaynak.tur),
      ...(typeof kaynak.yayinTarihi === "string"
        ? { yayinTarihi: kaynak.yayinTarihi }
        : {}),
    }));
}

function sorulariNormalizeEt(
  deger: unknown
): Array<{ soru: string; cevap: string }> | undefined {
  if (!Array.isArray(deger)) return undefined;

  const sorular = deger
    .filter(objeMi)
    .filter(
      (oge) => typeof oge.soru === "string" && typeof oge.cevap === "string"
    )
    .map((oge) => ({ soru: oge.soru as string, cevap: oge.cevap as string }));

  return sorular.length > 0 ? sorular : undefined;
}

function yeniHaberKaydiniNormalizeEt(veri: unknown): HaberKaydi | null {
  if (!objeMi(veri)) return null;

  if (
    veri.surum !== HABER_KAYIT_SURUMU ||
    (veri.durum !== "taslak" && veri.durum !== "yayinda") ||
    typeof veri.slug !== "string" ||
    typeof veri.baslik !== "string" ||
    typeof veri.aciklama !== "string" ||
    typeof veri.kategori !== "string" ||
    !isHaberKategori(veri.kategori) ||
    typeof veri.etiket !== "string" ||
    typeof veri.yayinTarihi !== "string" ||
    typeof veri.guncellemeTarihi !== "string" ||
    typeof veri.yazarSlug !== "string" ||
    !objeMi(veri.gorsel) ||
    typeof veri.gorsel.src !== "string" ||
    typeof veri.gorsel.alt !== "string"
  ) {
    return null;
  }

  const genislik =
    pozitifSayi(veri.gorsel.genislik) ?? pozitifSayi(veri.gorsel.w);
  const yukseklik =
    pozitifSayi(veri.gorsel.yukseklik) ?? pozitifSayi(veri.gorsel.h);

  if (!genislik || !yukseklik) return null;

  const icerik = objeMi(veri.icerik) ? veri.icerik : null;
  const eskiKaynakOzeti = objeMi(veri.kaynakOzeti) ? veri.kaynakOzeti : null;

  const kaynakOzeti = {
    giris: icerik
      ? metinDizisi(icerik.giris)
      : metinDizisi(eskiKaynakOzeti?.giris),
    ozetKartlari: icerik
      ? ozetKartlariNormalizeEt(icerik.kartlar)
      : ozetKartlariNormalizeEt(eskiKaynakOzeti?.ozetKartlari),
    temelBilgiler: temelBilgilerNormalizeEt(eskiKaynakOzeti?.temelBilgiler),
    bolumler: icerik
      ? haberBolumleriNormalizeEt(icerik.altBolumler)
      : haberBolumleriNormalizeEt(eskiKaynakOzeti?.bolumler),
  };

  const editor = objeMi(veri.editorDegerlendirmesi)
    ? veri.editorDegerlendirmesi
    : null;

  const kayit: HaberKaydi = {
    surum: HABER_KAYIT_SURUMU,
    durum: veri.durum,
    slug: veri.slug,
    baslik: veri.baslik,
    aciklama: veri.aciklama,
    kategori: veri.kategori,
    etiket: veri.etiket,
    yayinTarihi: veri.yayinTarihi,
    guncellemeTarihi: veri.guncellemeTarihi,
    yazarSlug: veri.yazarSlug,
    gorsel: {
      src: veri.gorsel.src,
      alt: veri.gorsel.alt,
      genislik,
      yukseklik,
    },
    ilgiliHisseler: metinDizisi(veri.ilgiliHisseler),
    ilgiliFonlar: metinDizisi(veri.ilgiliFonlar),
    ...(typeof veri.kaynakOzeti === "string"
      ? { kaynakOzetiMetni: veri.kaynakOzeti }
      : {}),
    kaynakOzeti,
    editorDegerlendirmesi: {
      giris: editor && typeof editor.giris === "string" ? editor.giris : "",
      bolumler: editor ? haberBolumleriNormalizeEt(editor.bolumler) : [],
    },
    ...(objeMi(veri.kapEtkiAnalizi)
      ? { kapEtkiAnalizi: veri.kapEtkiAnalizi as KapEtkiAnalizi }
      : {}),
    ...(sorulariNormalizeEt(veri.sorular)
      ? { sorular: sorulariNormalizeEt(veri.sorular) }
      : {}),
    kaynaklar: kaynaklariNormalizeEt(veri.kaynaklar),
    ...(typeof veri.yasalUyari === "string"
      ? { yasalUyari: veri.yasalUyari }
      : {}),
  };

  return temelKayitGecerli(kayit) ? kayit : null;
}

export function haberKaydiIndexlenebilirMi(kayit: HaberKaydi): boolean {
  return kayit.durum === "yayinda";
}

function temelKayitGecerli(veri: unknown): veri is HaberKaydi {
  if (!veri || typeof veri !== "object") return false;
  const kayit = veri as Partial<HaberKaydi>;
  const gorsel = kayit.gorsel;
  const kaynakOzeti = kayit.kaynakOzeti;
  const editorDegerlendirmesi = kayit.editorDegerlendirmesi;

  return (
    kayit.surum === HABER_KAYIT_SURUMU &&
    (kayit.durum === "taslak" || kayit.durum === "yayinda") &&
    typeof kayit.slug === "string" &&
    typeof kayit.baslik === "string" &&
    typeof kayit.aciklama === "string" &&
    typeof kayit.kategori === "string" &&
    isHaberKategori(kayit.kategori) &&
    typeof kayit.etiket === "string" &&
    typeof kayit.yayinTarihi === "string" &&
    typeof kayit.guncellemeTarihi === "string" &&
    typeof kayit.yazarSlug === "string" &&
    typeof gorsel?.src === "string" &&
    typeof gorsel.alt === "string" &&
    Number.isFinite(gorsel.genislik) &&
    gorsel.genislik > 0 &&
    Number.isFinite(gorsel.yukseklik) &&
    gorsel.yukseklik > 0 &&
    Array.isArray(kayit.ilgiliHisseler) &&
    kayit.ilgiliHisseler.every((kod) => typeof kod === "string") &&
    Array.isArray(kaynakOzeti?.giris) &&
    kaynakOzeti.giris.every((paragraf) => typeof paragraf === "string") &&
    Array.isArray(kaynakOzeti.ozetKartlari) &&
    Array.isArray(kaynakOzeti.temelBilgiler) &&
    Array.isArray(kaynakOzeti.bolumler) &&
    typeof editorDegerlendirmesi?.giris === "string" &&
    Array.isArray(editorDegerlendirmesi.bolumler) &&
    Array.isArray(kayit.kaynaklar) &&
    kayit.kaynaklar.every(
      (kaynak) =>
        typeof kaynak.ad === "string" &&
        typeof kaynak.url === "string" &&
        typeof kaynak.tur === "string"
    )
  );
}

function jsonDosyalari(): string[] {
  try {
    return fs
      .readdirSync(HABER_KAYIT_DIZINI)
      .filter((dosya) => dosya.endsWith(".json") && !dosya.startsWith("_"))
      .sort((a, b) => a.localeCompare(b, "tr"));
  } catch {
    return [];
  }
}

export function haberKaydiGetir(slug: string): HaberKaydi | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;

  try {
    const dosya = path.join(HABER_KAYIT_DIZINI, `${slug}.json`);
    const hamVeri = JSON.parse(fs.readFileSync(dosya, "utf8")) as unknown;
    const veri = temelKayitGecerli(hamVeri)
      ? hamVeri
      : yeniHaberKaydiniNormalizeEt(hamVeri);

    if (!veri || veri.slug !== slug) return null;
    return veri;
  } catch {
    return null;
  }
}

const tumHaberKayitlariniOku = cache((): HaberKaydi[] =>
  jsonDosyalari()
    .map((dosya) => haberKaydiGetir(dosya.replace(/\.json$/, "")))
    .filter((kayit): kayit is HaberKaydi => Boolean(kayit))
);

export function getTumHaberKayitlari(): HaberKaydi[] {
  return [...tumHaberKayitlariniOku()];
}

export function getYayinlanmisHaberKayitlari(): HaberKaydi[] {
  return getTumHaberKayitlari().filter((kayit) => kayit.durum === "yayinda");
}

export function getIndexlenebilirHaberKayitlari(): HaberKaydi[] {
  return getYayinlanmisHaberKayitlari().filter(haberKaydiIndexlenebilirMi);
}

export function statikHaberSlugVar(slug: string): boolean {
  try {
    return fs.existsSync(path.join(STATIK_HABER_DIZINI, slug, "page.tsx"));
  } catch {
    return false;
  }
}

export function getDinamikHaberSluglari(): string[] {
  return getYayinlanmisHaberKayitlari()
    .filter((kayit) => !statikHaberSlugVar(kayit.slug))
    .map((kayit) => kayit.slug);
}

export function haberKaydiId(slug: string): number {
  let hash = 2166136261;
  for (const karakter of slug) {
    hash ^= karakter.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return 10_000_000 + ((hash >>> 0) % 900_000_000);
}

export function haberKaydiniListeOgesine(kayit: HaberKaydi) {
  return {
    id: haberKaydiId(kayit.slug),
    title: kayit.baslik,
    description: kayit.aciklama,
    href: `/haber/${kayit.slug}`,
    image: kayit.gorsel.src,
    alt: kayit.gorsel.alt,
    publishedAt: kayit.yayinTarihi,
    updatedAt: kayit.guncellemeTarihi,
    category: kayit.kategori,
    yazarSlug: kayit.yazarSlug,
    ilgiliHisseler: kayit.ilgiliHisseler,
    ilgiliFonlar: kayit.ilgiliFonlar ?? [],
  };
}

export function haberMetadata(kayit: HaberKaydi): Metadata {
  const canonical = `${SITE_URL}/haber/${kayit.slug}`;
  const gorsel = `${SITE_URL}${kayit.gorsel.src}`;
  const yazar = getYazar(kayit.yazarSlug) ?? getYazar(varsayilanYazar);
  const kategori = getKategori(kayit.kategori);
  const indexlenebilir = haberKaydiIndexlenebilirMi(kayit);
  const tekHisseKodu =
    kayit.ilgiliHisseler.length === 1 ? kayit.ilgiliHisseler[0] : undefined;
  const temizBaslik = siteAdiniBasliktanCikar(kayit.baslik);
  const kodluBaslik =
    tekHisseKodu &&
    !temizBaslik.slice(0, 24).toLocaleUpperCase("tr-TR").includes(tekHisseKodu)
      ? `${tekHisseKodu}: ${temizBaslik}`
      : temizBaslik;
  const seoTitle = seoBasliginiSinirla(kodluBaslik, 65);
  const seoDescription = seoAciklamasi(
    kayit.aciklama,
    `${kayit.etiket} kapsamında gelişmenin ayrıntıları ve veriye dayalı değerlendirmesi.`
  );

  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    robots: {
      index: indexlenebilir,
      follow: true,
      googleBot: {
        index: indexlenebilir,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: kayit.baslik,
      description: kayit.aciklama,
      url: canonical,
      publishedTime: kayit.yayinTarihi,
      modifiedTime: kayit.guncellemeTarihi,
      authors: yazar ? [`${SITE_URL}/yazar/${yazar.slug}`] : undefined,
      section: kategori?.kisaBaslik,
      tags: kayit.ilgiliHisseler,
      images: [
        {
          url: gorsel,
          width: kayit.gorsel.genislik,
          height: kayit.gorsel.yukseklik,
          alt: kayit.gorsel.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: kayit.baslik,
      description: kayit.aciklama,
      images: [gorsel],
    },
  };
}

export { SITE_URL as HABER_SITE_URL };
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

export type KapEtkiMetrigi =
  | KapTutarOraniMetrigi
  | KapKapasiteArtisiMetrigi
  | KapBedelsizMetrigi
  | KapHesaplanamadiMetrigi;

export type KapEtkiAnalizi = {
  olayTuru:
    | "sozlesme"
    | "ihale"
    | "yatirim"
    | "kapasite"
    | "bedelsiz"
    | "donemsel-satis"
    | "diger";
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

function metinUzunlugu(value?: string): number {
  return typeof value === "string" ? value.trim().length : 0;
}

function bolumMetinUzunlugu(bolum: HaberBolumu): number {
  return (
    metinUzunlugu(bolum.giris) +
    (bolum.paragraflar ?? []).reduce(
      (toplam, metin) => toplam + metinUzunlugu(metin),
      0
    ) +
    (bolum.maddeler ?? []).reduce(
      (toplam, metin) => toplam + metinUzunlugu(metin),
      0
    ) +
    (bolum.kartlar ?? []).reduce(
      (toplam, kart) =>
        toplam + metinUzunlugu(kart.baslik) + metinUzunlugu(kart.aciklama),
      0
    )
  );
}

export function haberKaydiIndexlenebilirMi(kayit: HaberKaydi): boolean {
  if (kayit.durum !== "yayinda") return false;

  const kaynakGirisi = (kayit.kaynakOzeti.giris ?? []).reduce(
    (toplam, metin) => toplam + metinUzunlugu(metin),
    0
  );
  const kaynakBolumleri = (kayit.kaynakOzeti.bolumler ?? []).reduce(
    (toplam, bolum) => toplam + bolumMetinUzunlugu(bolum),
    0
  );
  const editorKapsami = (kayit.editorDegerlendirmesi.bolumler ?? []).reduce(
    (toplam, bolum) => toplam + bolumMetinUzunlugu(bolum),
    metinUzunlugu(kayit.editorDegerlendirmesi.giris)
  );
  const toplamAnalizKapsami = kaynakGirisi + kaynakBolumleri + editorKapsami;
  const kaynakVar = kayit.kaynaklar.some((kaynak) =>
    /^https?:\/\//i.test(kaynak.url)
  );

  return Boolean(
    kaynakGirisi >= 220 &&
      kaynakBolumleri >= 400 &&
      editorKapsami >= 400 &&
      toplamAnalizKapsami >= 1600 &&
      kaynakVar
  );
}

function temelKayitGecerli(veri: unknown): veri is HaberKaydi {
  if (!veri || typeof veri !== "object") return false;
  const kayit = veri as Partial<HaberKaydi>;

  return (
    kayit.surum === HABER_KAYIT_SURUMU &&
    (kayit.durum === "taslak" || kayit.durum === "yayinda") &&
    typeof kayit.slug === "string" &&
    typeof kayit.baslik === "string" &&
    typeof kayit.aciklama === "string" &&
    typeof kayit.kategori === "string" &&
    isHaberKategori(kayit.kategori) &&
    Boolean(kayit.kaynakOzeti) &&
    Boolean(kayit.editorDegerlendirmesi) &&
    Array.isArray(kayit.kaynaklar)
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
    const veri = JSON.parse(fs.readFileSync(dosya, "utf8")) as unknown;
    if (!temelKayitGecerli(veri) || veri.slug !== slug) return null;
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
  };
}

export function haberMetadata(kayit: HaberKaydi): Metadata {
  const canonical = `${SITE_URL}/haber/${kayit.slug}`;
  const gorsel = `${SITE_URL}${kayit.gorsel.src}`;
  const yazar = getYazar(kayit.yazarSlug) ?? getYazar(varsayilanYazar);
  const kategori = getKategori(kayit.kategori);
  const indexlenebilir = haberKaydiIndexlenebilirMi(kayit);

  return {
    title: kayit.baslik,
    description: kayit.aciklama,
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

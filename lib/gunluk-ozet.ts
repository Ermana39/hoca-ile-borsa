// ============================================================================
//  GÜNLÜK BORSA ÖZETİ — kalıcı, tarihli arşiv
// ----------------------------------------------------------------------------
//  Her gün için AYRI ve KALICI bir veri dosyası: data/gunluk-ozet/<ISO>.json
//  (örn. data/gunluk-ozet/2026-06-12.json). Yeni bir gün eklemek = yeni bir
//  JSON dosyası eklemek; eski günler hiç silinmez, kendi URL'lerinde kalır:
//      /borsa/gunluk-borsa-ozeti/<slug>   (örn. .../12-haziran-2026)
//
//  Bu özetler ayrıca otomatik olarak haber akışına da katılır (lib/haberler.ts
//  içindeki getAllNews bunları NewsItem'a çevirip ekler), böylece ana sayfa ve
//  /haberler arşivinde de görünürler. Ayrı bir arşiv sayfası YOKTUR.
//
//  Dosya adı "_" ile başlayanlar (şablon vb.) ve tarih desenine uymayanlar atlanır.
// ============================================================================

import fs from "node:fs";
import path from "node:path";
import type { HaberKategori } from "@/lib/haber-kategorileri";

const OZET_DIZINI = path.join(process.cwd(), "data", "gunluk-ozet");

// Ekonomik takvim "önem" görsel tipi (renkli kutucuklar).
export type OnemTipi =
  | "sari"
  | "sari-tek"
  | "turuncu"
  | "turuncu-gri"
  | "kirmizi";

export type KodDeger = { kod: string; deger: string };

export type KurumDeger = { kurum: string; hacim: string; oran: string };

export type TakvimKaydi = {
  saat: string;
  ulke: string;
  gosterge: string;
  onem: OnemTipi;
  aciklanan: string;
  beklenti: string;
  onceki: string;
};

export type TakvimGrubu = {
  tarih: string;
  kayitlar: TakvimKaydi[];
};

export type GunlukOzet = {
  isoTarih: string; // "2026-06-12" — sıralama ve datePublished için
  slug: string; // "12-haziran-2026" — URL parçası
  tarihGosterim: string; // "12.06.2026" — kart içi gösterim
  baslik: string; // "12 Haziran 2026 Günlük Borsa Özeti"
  seoBaslik?: string;
  seoAciklama?: string;
  gorsel?: string; // "/gunluk-ozet-discover.webp"
  bist: {
    kapanis: string;
    degisimYuzde: number;
    toplamHacim: string;
  };
  yukselenler: KodDeger[];
  dusenler: KodDeger[];
  hacimliler: KodDeger[];
  paraGirisi: KodDeger[];
  paraCikisi: KodDeger[];
  kurumAlis: KurumDeger[];
  kurumSatis: KurumDeger[];
  kurumHacim: KurumDeger[];
  ekonomikTakvim: TakvimGrubu[];
  // Editöryel piyasa değerlendirmesi (benim elle yazdığım metin). Paragraf
  // dizisi; boş/eksikse sayfada "Piyasa Değerlendirmesi" bölümü hiç görünmez.
  yorum?: string[];
};

const TARIHLI_JSON_DESEN = /^\d{4}[-.]\d{2}[-.]\d{2}\.json$/i;

// Tüm günlük özetleri oku, en YENİ tarih en üstte olacak şekilde sırala.
function tumOzetleriYukle(): GunlukOzet[] {
  let dosyalar: string[] = [];
  try {
    dosyalar = fs.readdirSync(OZET_DIZINI);
  } catch {
    return [];
  }

  const ozetler: GunlukOzet[] = [];

  for (const dosya of dosyalar) {
    // "_" ile başlayanlar (şablon) ve tarih desenine uymayanlar atlanır.
    // Hem 2026-06-19.json hem de 2026.06.19.json dosya adı kabul edilir.
    if (dosya.startsWith("_")) continue;
    if (!TARIHLI_JSON_DESEN.test(dosya)) continue;

    try {
      const tamYol = path.join(OZET_DIZINI, dosya);
      const veri = JSON.parse(fs.readFileSync(tamYol, "utf-8")) as GunlukOzet;
      // Zorunlu alanlar eksikse o dosyayı atla; tüm build'i düşürmesin.
      if (!veri || typeof veri.slug !== "string" || !veri.slug.trim()) continue;
      if (typeof veri.isoTarih !== "string" || !veri.isoTarih.trim()) continue;
      if (typeof veri.baslik !== "string" || !veri.baslik.trim()) continue;
      ozetler.push(veri);
    } catch {
      continue;
    }
  }

  return ozetler.sort((a, b) => b.isoTarih.localeCompare(a.isoTarih));
}

const ozetler: GunlukOzet[] = tumOzetleriYukle();

export function getTumGunlukOzetler(): GunlukOzet[] {
  return ozetler;
}

export function getGunlukOzetBySlug(slug: string): GunlukOzet | undefined {
  return ozetler.find((o) => o.slug === slug);
}

export function getTumGunlukOzetSluglari(): string[] {
  return ozetler.map((o) => o.slug);
}

// En güncel (en yeni tarihli) özet. Hiç özet yoksa undefined.
export function getEnGuncelGunlukOzet(): GunlukOzet | undefined {
  return ozetler[0];
}

// --- Haber akışı entegrasyonu ----------------------------------------------
//  Günlük özetleri haber akışına katmak için NewsItem benzeri ham kayda çevirir.
//  (lib/haberler.ts bunu normalizeNewsItems'e verir; tip oradaki NewsItem ile
//  uyumlu olacak şekilde gevşek tutulur.)

export type GunlukOzetHaberKaydi = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
  publishedAt: string;
  category: HaberKategori;
};

export function getGunlukOzetHaberKayitlari(): GunlukOzetHaberKaydi[] {
  return ozetler.map((o) => ({
    // ISO tarihten benzersiz, haber id'leriyle çakışmayan büyük bir id üret
    // (örn. "2026-06-12" -> 20260612). Haber id'leri ~1000 aralığında.
    id: Number(o.isoTarih.replace(/-/g, "")) || 0,
    title: o.baslik,
    href: `/borsa/gunluk-borsa-ozeti/${o.slug}`,
    image: o.gorsel || "/gunluk-ozet-discover.webp",
    alt: o.baslik,
    publishedAt: o.isoTarih,
    category: "piyasa-gundemi",
  }));
}

// ============================================================================
//  HALKA ARZ — JSON tabanlı dinamik halka arz detay sistemi
// ----------------------------------------------------------------------------
//  Her halka arz bir JSON dosyasıdır: data/halka-arz/<slug>.json
//  Dinamik şablon: app/halka-arz/taslak-izahnameler/[slug]/page.tsx
//
//  GEÇİŞ DÖNEMİ / ÇAKIŞMA YÖNETİMİ
//  Eski sistemde her sayfa elle yazılmış statik bir route'tu:
//      app/halka-arz/taslak-izahnameler/<slug>/page.tsx
//  Next.js'te statik segment, dinamik [slug] segmentine göre önceliklidir.
//  Dolayısıyla bir slug için hem statik klasör hem JSON varsa, istek anında
//  ESKİ STATİK SAYFA gösterilir. Eski .tsx klasörü silindiğinde JSON sürümü
//  aynı URL'i otomatik devralır.
//
//  Build aşamasında çift üretimi önlemek için generateStaticParams, hâlâ
//  statik klasörü bulunan slug'ları üretim listesinden ÇIKARIR
//  (bkz. tasinmamisSluglar / statikSlugVar).
// ============================================================================

import fs from "node:fs";
import path from "node:path";

export const HALKA_ARZ_DIZINI = path.join(process.cwd(), "data", "halka-arz");

// Eski elle yazılmış statik sayfaların bulunduğu dizin. Bir slug burada klasör
// olarak (page.tsx ile) duruyorsa, o slug henüz "taşınmamış" sayılır ve
// dinamik route devreye girmez.
const STATIK_SAYFA_DIZINI = path.join(
  process.cwd(),
  "app",
  "halka-arz",
  "taslak-izahnameler"
);

// ---------------------------------------------------------------------------
//  Tipler — Adra Holding sayfasındaki tüm bölümlere birebir karşılık gelir.
// ---------------------------------------------------------------------------

export type HalkaArzOzet = {
  halkaArzTarihi?: string;
  fiyatAralik?: string;
  dagitimYontemi?: string;
  pay?: string;
  araciKurum?: string;
  pazar?: string;
};

export type FinansalSatir = {
  kalem: string;
  // Dönem etiketi -> değer. Örn. { "2025/3": "2,1 Milyar TL", "2024": "..." }
  donemler: Record<string, string>;
};

export type OneCikan = {
  title: string;
  value: string;
  desc: string;
};

// Tahsisat satırı; ya hazır metin ("Yurt İçi Bireysel: %70") ya da yapılandırılmış
// bir kayıt olabilir. İkisi de desteklenir.
export type TahsisatGirdi =
  | string
  | { grup: string; oran?: string; lot?: string };

export function tahsisatMetni(t: TahsisatGirdi): string {
  if (typeof t === "string") return t;
  if (t && typeof t === "object") {
    const detay = [t.oran, t.lot].filter(Boolean).join(" · ");
    return detay ? `${t.grup}: ${detay}` : t.grup;
  }
  return String(t);
}

export type TaahhutOzeti = {
  fiyatIstikrari?: string;
  satmamaTaahhudu?: string;
  halkaAciklik?: string;
};

export type HalkaArzVeri = {
  slug: string;
  sirketAdi: string;
  baslikMeta: { title: string; description: string };

  ozet: HalkaArzOzet;
  toplamPay?: string;
  halkaAciklikOrani?: string;

  halkaArzSekli: string[];

  fonKullanim: string[];
  fonKullanimYorumu?: string;

  // Tablo başlık sırası (örn. ["2025/3", "2024", "2023"]). Boşsa satırlardaki
  // dönem anahtarlarından türetilir.
  finansalDonemler?: string[];
  finansalVeriler: FinansalSatir[];
  finansalYorum?: string;

  oneCikanlar: OneCikan[];

  tahsisat: TahsisatGirdi[];
  // Tahsisat altında gösterilen sabit notlar (örn. "Bireysele Eşit Dağıtım.").
  tahsisatNotlari?: string[];

  taahhutOzeti?: TaahhutOzeti;

  // Şirketin GERÇEK faaliyet alanı. Boşsa "Şirket Hakkında" bölümü gizlenir.
  sirketHakkinda?: string;

  yasalUyari?: string;
};

// ---------------------------------------------------------------------------
//  Bekleyen (kesinleşmemiş) değer tespiti — Adra sayfasındaki mantığın aynısı.
//  Değeri "Hazırlanıyor / Açıklanmadı / boş" olan alanlar gizlenir; gerçek
//  veri girilince otomatik görünür.
// ---------------------------------------------------------------------------

const BEKLEYEN_KALIPLAR = [
  "hazırlanıyor",
  "açıklanmadı",
  "açıklanmamıştır",
  "belirlenmedi",
  "belirlenmemiştir",
  "ilerleyen aşama",
  "tamamlanacaktır",
];

export function bekleyenDeger(value?: unknown): boolean {
  if (typeof value !== "string") return value == null;
  if (!value) return true;
  const v = value.trim().toLocaleLowerCase("tr");
  if (v === "" || v === "-") return true;
  return BEKLEYEN_KALIPLAR.some((k) => v.includes(k));
}

// ---------------------------------------------------------------------------
//  Veri okuma
// ---------------------------------------------------------------------------

/** data/halka-arz altındaki tüm JSON slug'larını döndürür. */
export function tumJsonSluglar(): string[] {
  let dosyalar: string[];
  try {
    dosyalar = fs.readdirSync(HALKA_ARZ_DIZINI);
  } catch {
    return [];
  }
  return dosyalar
    .filter((d) => d.endsWith(".json") && !d.startsWith("_"))
    .map((d) => d.replace(/\.json$/, ""));
}

/** Bir slug için hâlâ eski statik .tsx sayfası var mı? */
export function statikSlugVar(slug: string): boolean {
  try {
    return fs.existsSync(
      path.join(STATIK_SAYFA_DIZINI, slug, "page.tsx")
    );
  } catch {
    return false;
  }
}

/**
 * Dinamik route'un üreteceği slug'lar: JSON'u olan AMA henüz eski statik
 * .tsx'i bulunmayan (yani taşınması tamamlanmış) slug'lar.
 */
export function tasinmamisSluglar(): string[] {
  return tumJsonSluglar().filter((slug) => !statikSlugVar(slug));
}

/** Tek bir halka arz JSON'unu okur. Yoksa null döner. */
export function halkaArzGetir(slug: string): HalkaArzVeri | null {
  const tamYol = path.join(HALKA_ARZ_DIZINI, `${slug}.json`);
  try {
    const icerik = fs.readFileSync(tamYol, "utf-8");
    const veri = JSON.parse(icerik) as HalkaArzVeri;
    // Geçerli JSON olsa bile beklenen şemaya (özellikle zorunlu `ozet` objesi)
    // uymayan kayıtları geçersiz say; aksi halde ozetSatirlari gibi yerlerde
    // undefined erişimi tüm build'i düşürür. (Eksik/eski şemalı dosyalar atlanır.)
    if (!veri || typeof veri !== "object" || !veri.ozet) return null;
    return veri;
  } catch {
    return null;
  }
}

export type TaslakListeOgesi = { klasor: string; label: string };

// Taslak izahnameler liste/arama sayfası için TEK KAYNAK: data/halka-arz/*.json.
// Yalnızca detay sayfası gerçekten render olan (geçerli + `ozet` içeren) kayıtlar
// listelenir; bozuk/eksik-şemalı dosyalar otomatik dışarıda kalır. Böylece JSON
// eklemek tek başına yeterlidir; ayrı bir metin listesi tutmaya gerek yoktur.
export function getTaslakIzahnameListesi(): TaslakListeOgesi[] {
  return tumJsonSluglar()
    .map((slug) => {
      const veri = halkaArzGetir(slug);
      if (!veri) return null;
      return { klasor: slug, label: veri.sirketAdi || slug };
    })
    .filter((x): x is TaslakListeOgesi => x !== null)
    .sort((a, b) => a.label.localeCompare(b.label, "tr"));
}

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
  islemBaslangicTarihi?: string;
  fiyatAralik?: string;
  dagitimYontemi?: string;
  pay?: string;
  araciKurum?: string;
  bistKodu?: string;
  katilimEndeksi?: string;
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

export type BilgiKarti = {
  label: string;
  value: string;
};

export type HalkaArzTablosu = {
  basliklar: string[];
  satirlar: string[][];
  aciklama?: string;
};

export type HalkaArzDagitimSonuclari = {
  baslik?: string;
  aciklama?: string;
  ozetKartlari?: BilgiKarti[];
  tablo?: HalkaArzTablosu;
  kaynakHref?: string;
};

export type HalkaArzTavanSenaryosu = {
  baslik?: string;
  aciklama?: string;
  ozetKartlari?: BilgiKarti[];
  tablo?: HalkaArzTablosu;
  not?: string;
};

export type HalkaArzVideo = {
  title: string;
  description?: string;
  videoId: string;
  href?: string;
};

// Tahsisat satırı; ya hazır metin ("Yurt İçi Bireysel: %70") ya da yapılandırılmış
// bir kayıt olabilir. İkisi de desteklenir.
export type TahsisatGirdi =
  | string
  | { grup: string; oran?: string; lot?: string; dagitim?: string };

export function tahsisatMetni(t: TahsisatGirdi): string {
  if (typeof t === "string") return t;
  if (t && typeof t === "object") {
    const detay = [t.oran, t.lot, t.dagitim].filter(Boolean).join(" · ");
    return detay ? `${t.grup}: ${detay}` : t.grup;
  }
  return String(t);
}

export type TaahhutOzeti = {
  fiyatIstikrari?: string;
  satmamaTaahhudu?: string;
  halkaAciklik?: string;
  gunlukAlimEmri?: string;
};

export type OrtaklikPaySahibi = {
  ad: string;
  rol?: string;
  payOrani?: string;
  oyOrani?: string;
  not?: string;
};

export type OrtaklikYonetici = {
  ad: string;
  gorev: string;
};

export type OrtaklikGrupSirketi = {
  ad: string;
  iliski: string;
  payOrani?: string;
  faaliyet?: string;
};

export type OrtaklikYapisi = {
  ozet?: string;
  aciklamalar?: string[];
  anaOrtak?: string;
  nihaiKontrolSahibi?: string;
  paySahipleri?: OrtaklikPaySahibi[];
  yonetim?: OrtaklikYonetici[];
  grupSirketleri?: OrtaklikGrupSirketi[];
  halkaArzdaPaySatanOrtaklar?: string[];
  veriTarihi?: string;
  kaynakNotu?: string;
  otomatikDerlendi?: boolean;
};

export type HalkaArzVeri = {
  slug: string;
  sirketAdi: string;
  markaAdi?: string;
  bistKodu?: string;
  seo?: {
    canonical?: string;
    robots?: {
      index?: boolean;
      follow?: boolean;
    };
    sitemap?: boolean;
    contentStatus?: "taslak" | "onayli" | string;
  };
  baslikMeta: { title: string; description: string };

  ozet: HalkaArzOzet;
  toplamPay?: string;
  halkaAciklikOrani?: string;
  sermayeBilgileri?: BilgiKarti[];

  halkaArzSekli: string[];
  satisYontemi?: string[];

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
  dagitimSonuclari?: HalkaArzDagitimSonuclari;
  muhtemelTavanSerisi?: HalkaArzTavanSenaryosu;
  videolar?: HalkaArzVideo[];

  taahhutOzeti?: TaahhutOzeti;

  // Şirketin GERÇEK faaliyet alanı. Boşsa "Şirket Hakkında" bölümü gizlenir.
  sirketHakkinda?: string;
  ortaklikYapisi?: OrtaklikYapisi;
  eksikBilgiNotu?: string;

  yasalUyari?: string;
};

const SITE_URL = "https://www.hocaileborsa.com";

export function taslakCanonicalYolu(
  veri: HalkaArzVeri,
  slug: string
): string {
  const varsayilanYol = `/halka-arz/taslak-izahnameler/${slug}`;
  if (!veri.seo?.canonical) return varsayilanYol;

  try {
    const canonical = new URL(veri.seo.canonical, SITE_URL);
    if (canonical.origin !== SITE_URL) return varsayilanYol;
    if (!canonical.pathname.startsWith("/halka-arz/taslak-izahnameler/")) {
      return varsayilanYol;
    }

    const hedefSlug = path.posix.basename(canonical.pathname);
    if (hedefSlug === slug) return canonical.pathname;

    const hedefJsonVar = fs.existsSync(
      path.join(HALKA_ARZ_DIZINI, `${hedefSlug}.json`)
    );
    return hedefJsonVar || statikSlugVar(hedefSlug)
      ? canonical.pathname
      : varsayilanYol;
  } catch {
    return varsayilanYol;
  }
}

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

function yeterliUzunluktaMetin(
  value: string | undefined,
  minimum: number
): boolean {
  return typeof value === "string" && value.trim().length >= minimum;
}

export function taslakIzahnameIndexlenebilirMi(
  veri: HalkaArzVeri
): boolean {
  if (veri.seo?.contentStatus === "onayli") return true;

  const eksikBilgiNotuYeterli = yeterliUzunluktaMetin(
    veri.eksikBilgiNotu,
    100
  );
  const finansalEksiklikAciklanmis =
    eksikBilgiNotuYeterli &&
    /finansal|mali tablo|hasılat|kâr/i.test(veri.eksikBilgiNotu ?? "");
  const halkaArzSekliMetni = (veri.halkaArzSekli ?? []).join(" ");
  const tamamenOrtakSatisi =
    /ortak satışı/i.test(halkaArzSekliMetni) &&
    !/sermaye artırımı/i.test(halkaArzSekliMetni);
  const fonEksikligiAciklanmis =
    eksikBilgiNotuYeterli &&
    (/fon|kaynak kullanım/i.test(veri.eksikBilgiNotu ?? "") ||
      tamamenOrtakSatisi);
  const finansalKapsamYeterli =
    (Array.isArray(veri.finansalVeriler) &&
      veri.finansalVeriler.length >= 2) ||
    (yeterliUzunluktaMetin(veri.finansalYorum, 500) &&
      finansalEksiklikAciklanmis);
  const fonKullanimKapsamiYeterli =
    (Array.isArray(veri.fonKullanim) && veri.fonKullanim.length > 0) ||
    (yeterliUzunluktaMetin(veri.fonKullanimYorumu, 500) &&
      fonEksikligiAciklanmis);

  return Boolean(
    yeterliUzunluktaMetin(veri.sirketHakkinda, 250) &&
      yeterliUzunluktaMetin(veri.fonKullanimYorumu, 250) &&
      yeterliUzunluktaMetin(veri.finansalYorum, 250) &&
      finansalKapsamYeterli &&
      Array.isArray(veri.halkaArzSekli) &&
      veri.halkaArzSekli.length > 0 &&
      fonKullanimKapsamiYeterli &&
      Array.isArray(veri.oneCikanlar) &&
      veri.oneCikanlar.length >= 3
  );
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
  return tumJsonSluglar().filter((slug) => {
    if (statikSlugVar(slug)) return false;
    const veri = halkaArzGetir(slug);
    return veri?.seo?.contentStatus !== "onayli";
  });
}

export function getSitemapTaslakIzahnameSluglari(): string[] {
  return tumJsonSluglar().filter((slug) => {
    if (statikSlugVar(slug)) return false;
    const veri = halkaArzGetir(slug);
    if (!veri) return false;
    if (veri.seo?.contentStatus === "onayli") return false;
    if (
      taslakCanonicalYolu(veri, slug) !==
      `/halka-arz/taslak-izahnameler/${slug}`
    ) {
      return false;
    }
    if (veri.seo?.robots?.index === false) return false;
    if (veri.seo?.sitemap === false) return false;
    if (!taslakIzahnameIndexlenebilirMi(veri)) return false;
    return true;
  });
}

export function getSitemapOnayliIzahnameSluglari(): string[] {
  return tumJsonSluglar().filter((slug) => {
    const veri = halkaArzGetir(slug);
    if (!veri) return false;
    if (veri.seo?.contentStatus !== "onayli") return false;
    if (veri.seo?.robots?.index === false) return false;
    if (veri.seo?.sitemap === false) return false;
    return true;
  });
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
export type OnayliListeOgesi = {
  klasor: string;
  label: string;
  kod?: string;
};

export type OnayliHalkaArzKaydi = {
  slug: string;
  veri: HalkaArzVeri;
};

// JSON sistemine taşınmadan önce elle hazırlanan onaylı izahname sayfaları.
// Kodla hedef sayfa eşleştiren tüm bölümler bu listeyi de otomatik kapsar.
const statikOnayliIzahnameler: OnayliListeOgesi[] = [
  {
    klasor: "beta-enerji-teknoloji-betae",
    label: "Beta Enerji ve Teknoloji A.Ş.",
    kod: "BETAE",
  },
  {
    klasor: "ekinciler-demir-celik-ekdmr",
    label: "Ekinciler Demir ve Çelik Sanayi A.Ş.",
    kod: "EKDMR",
  },
];

// Taslak izahnameler liste/arama sayfası için TEK KAYNAK: data/halka-arz/*.json.
// Yalnızca detay sayfası gerçekten render olan (geçerli + `ozet` içeren) kayıtlar
// listelenir; bozuk/eksik-şemalı dosyalar otomatik dışarıda kalır. Böylece JSON
// eklemek tek başına yeterlidir; ayrı bir metin listesi tutmaya gerek yoktur.
export function getTaslakIzahnameListesi(): TaslakListeOgesi[] {
  return tumJsonSluglar()
    .map((slug) => {
      const veri = halkaArzGetir(slug);
      if (!veri) return null;
      if (veri.seo?.contentStatus === "onayli") return null;
      if (
        taslakCanonicalYolu(veri, slug) !==
        `/halka-arz/taslak-izahnameler/${slug}`
      ) {
        return null;
      }
      return { klasor: slug, label: veri.sirketAdi || slug };
    })
    .filter((x): x is TaslakListeOgesi => x !== null)
    .sort((a, b) => a.label.localeCompare(b.label, "tr"));
}

export function getOnayliIzahnameListesi(): OnayliListeOgesi[] {
  const jsonOnayliIzahnameler = tumJsonSluglar()
    .map((slug) => {
      const veri = halkaArzGetir(slug);
      if (!veri || veri.seo?.contentStatus !== "onayli") return null;
      const oge: OnayliListeOgesi = {
        klasor: slug,
        label: veri.sirketAdi || slug,
      };
      const kod = veri.bistKodu || veri.ozet.bistKodu;
      if (kod) oge.kod = kod;
      return oge;
    })
    .filter((x): x is OnayliListeOgesi => x !== null);

  return Array.from(
    new Map(
      [...statikOnayliIzahnameler, ...jsonOnayliIzahnameler].map((item) => [
        item.klasor,
        item,
      ])
    ).values()
  )
    .sort((a, b) => a.label.localeCompare(b.label, "tr"));
}

/** JSON sistemindeki onaylı izahnameyi BIST koduyla bulur. */
export function getOnayliHalkaArzKaydiByKod(
  kod?: string | null
): OnayliHalkaArzKaydi | null {
  if (!kod) return null;
  const arananKod = kod.trim().toLocaleUpperCase("tr-TR");

  for (const slug of tumJsonSluglar()) {
    const veri = halkaArzGetir(slug);
    if (!veri || veri.seo?.contentStatus !== "onayli") continue;

    const veriKodu = (veri.bistKodu || veri.ozet.bistKodu || "")
      .trim()
      .toLocaleUpperCase("tr-TR");
    if (veriKodu === arananKod) return { slug, veri };
  }

  return null;
}

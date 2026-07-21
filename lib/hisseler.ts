import fs from "node:fs";
import path from "node:path";
import { ozelHisseler } from "@/data/hisseler-ozel";

export type Ortak = { ad: string; oran: number; sermaye?: string };

export type Istirak = {
  ad: string;
  oran: number;
  sermaye?: string;
  paraBirimi?: string;
  faaliyetKonusu?: string;
  iliski?: string;
};

export type YatirimciIliskileriYetkilisi = {
  ad?: string;
  gorev?: string;
  telefon?: string;
  eposta?: string;
};

export type KurumsalBilgiler = {
  merkez?: string;
  uretimTesisleri?: string[];
  web?: string;
  yatirimciIliskileri?: string;
  kapSirketProfili?: string;
  eposta?: string;
  telefon?: string;
  fax?: string;
  sirketSuresi?: string;
  odenmisSermaye?: string;
  kayitliSermayeTavani?: string;
  bagimsizDenetimKurulusu?: string;
  faaliyetAlani?: string;
  sektorler?: string[];
  islemGorduguPazar?: string[];
  yonetimKurulu?: string[];
  ticaretSicilMemurlugu?: string;
  tescilTarihi?: string;
  ticaretSicilNumarasi?: string;
  vergiDairesi?: string;
  yatirimciIliskileriYetkilileri?: YatirimciIliskileriYetkilisi[];
};

export type TemettuSermayeKaydi = {
  yil: string;
  tur: string;
  tutarOran: string;
  aciklama: string;
};

export type Hisse = {
  kod: string;
  sirketAdi: string;
  hakkinda: string[];
  ortaklikYapisi: {
    ortaklar: Ortak[];
    not?: string;
  };
  istirakler?: Istirak[];
  kurumsalBilgiler?: KurumsalBilgiler;
  borsaBilgileri: {
    bistKodu: string;
    endeksler: string[];
    katilimEndeksiUygun: boolean;
    halkaArzTarihi?: string;
    fiiliDolasimOrani?: number;
    anaHisseKodu?: string;
  };
  temettuSermayeGecmisi: TemettuSermayeKaydi[];
  veriDogrulama?: {
    sonDogrulamaTarihi?: string;
    kaynak?: string;
    kaynakUrl?: string;
  };
  degisiklikGecmisi?: {
    tarih: string;
    baslik: string;
    aciklama?: string;
  }[];
  yasalUyari: string;
};

// ============================================================================
//  Hisse künyeleri data/hisseler/ klasöründen OTOMATİK okunur.
//  Yeni bir hisse eklemek için: data/hisseler/<kod>.json dosyası oluştur
//  (örn. data/hisseler/thyao.json). Başka hiçbir kod değişikliği GEREKMEZ;
//  sayfa, /hisseler listesi ve sitemap otomatik güncellenir.
// ============================================================================

const HISSELER_DIZINI = path.join(process.cwd(), "data", "hisseler");

const HISSE_KODU_DESENI = /^[a-z0-9]{2,6}$/i;

export function isGecerliHisseKodu(kod: string): boolean {
  return HISSE_KODU_DESENI.test(kod.trim());
}

function tumHisseleriYukle(): Record<string, Hisse> {
  const kayitlar: Record<string, Hisse> = {};

  let dosyalar: string[] = [];
  try {
    dosyalar = fs.readdirSync(HISSELER_DIZINI);
  } catch {
    return kayitlar;
  }

  for (const dosya of dosyalar) {
    if (!dosya.toLowerCase().endsWith(".json")) continue;
    try {
      const tamYol = path.join(HISSELER_DIZINI, dosya);
      const icerik = fs.readFileSync(tamYol, "utf-8");
      const veri = JSON.parse(icerik) as Hisse;
      // Geçerli JSON olsa bile zorunlu alanları (kod, sirketAdi) eksik olan
      // kayıtları atla; aksi halde liste/sitemap üretimi h.kod.toUpperCase()
      // gibi yerlerde patlar ve tüm build'i düşürür.
      if (!veri || typeof veri.kod !== "string" || !veri.kod.trim()) continue;
      if (typeof veri.sirketAdi !== "string" || !veri.sirketAdi.trim()) continue;
      if (!isGecerliHisseKodu(veri.kod)) continue;
      // Anahtar: dosya adı (uzantısız), küçük harf. Örn. "asels.json" -> "asels"
      const anahtar = dosya.replace(/\.json$/i, "").toLowerCase();
      if (!isGecerliHisseKodu(anahtar)) continue;
      kayitlar[anahtar] = veri;
    } catch {
      // Bozuk/eksik bir JSON tüm siteyi düşürmesin; o dosyayı atla.
      continue;
    }
  }

  return kayitlar;
}

const hisseler: Record<string, Hisse> = tumHisseleriYukle();

export function getHisse(sembol: string): Hisse | undefined {
  if (!isGecerliHisseKodu(sembol)) return undefined;
  return hisseler[sembol.toLowerCase()];
}

// Elle tam sayfa olarak hazırlanan hisse kodları (küçük harf kümesi).
const ozelKodlar = new Set(
  ozelHisseler
    .map((o) => o.kod.toLowerCase())
    .filter((kod) => isGecerliHisseKodu(kod))
);

// O sembol için künye sayfası var mı? (iç linkleme için)
// Hem JSON şablonu hem elle tam sayfa hisseleri kapsar.
export function hisseVarMi(sembol: string): boolean {
  if (!sembol) return false;
  const k = sembol.toLowerCase();
  if (!isGecerliHisseKodu(k)) return false;
  return k in hisseler || ozelKodlar.has(k);
}

// SADECE JSON şablonundan gelen kodlar. /hisse/[sembol] route'unun
// generateStaticParams'ı bunu kullanır (elle sayfalar kendi klasörlerinde
// olduğu için buraya dahil edilmez; aksi halde route çakışır).
export function getTumHisseSembolleri(): string[] {
  return Object.keys(hisseler);
}

// Sitemap için: JSON şablonu + elle tam sayfa hisselerinin tümü.
export function getSitemapHisseSembolleri(): string[] {
  const canonicalJsonCodes = Object.entries(hisseler)
    .filter(([, hisse]) => {
      const canonical = hisse.borsaBilgileri?.anaHisseKodu;
      return !canonical || canonical.toUpperCase() === hisse.kod.toUpperCase();
    })
    .map(([kod]) => kod);

  return Array.from(
    new Set([...canonicalJsonCodes, ...ozelKodlar])
  );
}

// /hisseler liste sayfası için: kod + şirket adı, koda göre alfabetik.
// JSON şablonu + elle tam sayfa hisselerinin tümü (kod bazında tekilleştirilir).
export function getTumHisseler(): { kod: string; sirketAdi: string }[] {
  const harita = new Map<string, { kod: string; sirketAdi: string }>();

  for (const h of Object.values(hisseler)) {
    harita.set(h.kod.toUpperCase(), { kod: h.kod, sirketAdi: h.sirketAdi });
  }
  for (const o of ozelHisseler) {
    if (!harita.has(o.kod.toUpperCase())) {
      harita.set(o.kod.toUpperCase(), { kod: o.kod, sirketAdi: o.sirketAdi });
    }
  }

  return Array.from(harita.values()).sort((a, b) =>
    a.kod.localeCompare(b.kod, "tr")
  );
}

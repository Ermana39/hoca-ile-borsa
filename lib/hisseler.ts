import fs from "node:fs";
import path from "node:path";
import { ozelHisseler } from "@/data/hisseler-ozel";

export type Ortak = { ad: string; oran: number; sermaye?: string };

export type Istirak = { ad: string; oran: number; sermaye?: string };

export type KurumsalBilgiler = {
  merkez?: string;
  web?: string;
  odenmisSermaye?: string;
  yonetimKurulu?: string[];
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
  };
  temettuSermayeGecmisi: TemettuSermayeKaydi[];
  yasalUyari: string;
};

// ============================================================================
//  Hisse künyeleri data/hisseler/ klasöründen OTOMATİK okunur.
//  Yeni bir hisse eklemek için: data/hisseler/<kod>.json dosyası oluştur
//  (örn. data/hisseler/thyao.json). Başka hiçbir kod değişikliği GEREKMEZ;
//  sayfa, /hisseler listesi ve sitemap otomatik güncellenir.
// ============================================================================

const HISSELER_DIZINI = path.join(process.cwd(), "data", "hisseler");

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
      // Anahtar: dosya adı (uzantısız), küçük harf. Örn. "asels.json" -> "asels"
      const anahtar = dosya.replace(/\.json$/i, "").toLowerCase();
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
  return hisseler[sembol.toLowerCase()];
}

// Elle tam sayfa olarak hazırlanan hisse kodları (küçük harf kümesi).
const ozelKodlar = new Set(ozelHisseler.map((o) => o.kod.toLowerCase()));

// O sembol için künye sayfası var mı? (iç linkleme için)
// Hem JSON şablonu hem elle tam sayfa hisseleri kapsar.
export function hisseVarMi(sembol: string): boolean {
  if (!sembol) return false;
  const k = sembol.toLowerCase();
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
  return Array.from(
    new Set([...Object.keys(hisseler), ...ozelKodlar])
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

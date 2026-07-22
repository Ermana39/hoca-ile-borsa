// ============================================================================
//  HİSSE TEMEL ORANLARI — MERKEZİ KAYNAK (EXCEL)
// ----------------------------------------------------------------------------
//  Hisse sayfalarındaki (/hisse/[sembol]) temel oranlar (F/K, PD/DD, ROE, net
//  marj, PEG, cari oran, net kâr/satış değişimi) artık her hissenin kendi JSON
//  dosyasındaki sabit değerden DEĞİL; oran analizi Excel'inden otomatik üretilen
//  merkezi kaynaktan okunur:
//
//    app/borsa/oran-analizi/data/oran-analizi.xlsx
//      → (npm run build / excel-to-json.mjs)
//      → app/borsa/oran-analizi/data/oran-analizi.json
//
//  Böylece Excel güncellenip yeniden deploy edildiğinde TÜM hisse sayfalarının
//  oranları tek kaynaktan otomatik güncellenir; per-hisse JSON'ları kullanılmaz.
//  Excel'de bulunmayan bir kod için eski/sabit oran göstermek yerine oran bölümü
//  gösterilmez.
//
//  Birim notu: Excel sütunları ile temelOranlar alanları AYNI birimdedir, dönüşüm
//  gerekmez (roe/netMarj ondalık oran; netKarDegisim/netSatisDegisim yüzde sayısı).
// ============================================================================

import oranAnaliziVeri from "@/app/borsa/oran-analizi/data/oran-analizi.json";
import type { TemelOranlar, SirketOranlari } from "@/lib/oranYorumla";

// Excel sütun adı → temelOranlar alanı eşlemesi (birebir, dönüşümsüz).
const SUTUN_ESLEME: Record<keyof SirketOranlari, string> = {
  fk: "F/K",
  pddd: "PD/DD",
  peg: "PEG Oranı",
  roe: "NetKar/ Özsermaye",
  netMarj: "NetKar/ NetSatış",
  pdNetSatis: "PD/ NetSatış",
  cariOran: "Cari Oran",
  netKarDegisim: "Net Kar Değ%",
  netSatisDegisim: "Net Satış Değ%",
};

type HamSatir = Record<string, unknown>;

type OranAnaliziDosyasi = {
  rows?: HamSatir[];
  guncellemeTarihi?: unknown;
};

function sayiVeyaNull(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}

// Excel dönem biçimi "26-03" → uygulamanın beklediği "2026-03".
function donemNormalize(v: unknown): string {
  const s = (v ?? "").toString().trim();
  const m = /^(\d{2})-(\d{2})$/.exec(s);
  return m ? `20${m[1]}-${m[2]}` : s;
}

// Excel dönüştürücüsünün "20.07.2026" değerini ortak ISO biçimine çevirir.
function guncellemeTarihiNormalize(v: unknown): string | undefined {
  const s = (v ?? "").toString().trim();
  const tr = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(s);
  if (tr) return `${tr[3]}-${tr[2]}-${tr[1]}`;
  return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : undefined;
}

function haritaKur(): Map<string, TemelOranlar> {
  const veri = oranAnaliziVeri as unknown as OranAnaliziDosyasi;
  const satirlar = Array.isArray(veri.rows) ? veri.rows : [];
  const guncellemeTarihi = guncellemeTarihiNormalize(veri.guncellemeTarihi);
  const harita = new Map<string, TemelOranlar>();

  for (const satir of satirlar) {
    const senet = (satir["Senet"] ?? "").toString().trim().toUpperCase();
    if (!senet) continue;

    const sirket: SirketOranlari = {};
    let anlamliVeriVar = false;

    for (const alan of Object.keys(SUTUN_ESLEME) as (keyof SirketOranlari)[]) {
      const deger = sayiVeyaNull(satir[SUTUN_ESLEME[alan]]);
      sirket[alan] = deger;
      if (deger !== null && deger !== 0) anlamliVeriVar = true;
    }

    // Sektör başlığı / tamamen boş satırları atla (yalnız gerçek oranı olanları al).
    if (!anlamliVeriVar) continue;

    harita.set(senet, {
      donem: donemNormalize(satir["Dönem"]),
      guncellemeTarihi,
      sirket,
    });
  }

  return harita;
}

// Modül yüklenirken bir kez kurulur (statik import, derleme anında bundle'lanır).
const ORAN_HARITASI = haritaKur();

/**
 * Verilen hisse kodu için merkezi Excel kaynağından temel oranları döndürür.
 * Kod merkezi kaynakta yoksa undefined döner; eski şirket JSON'una geri düşülmez.
 */
export function getTemelOranlar(kod: string): TemelOranlar | undefined {
  return ORAN_HARITASI.get((kod ?? "").trim().toUpperCase());
}

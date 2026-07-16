// Hisse temettü/sermaye geçmişi için ortak yardımcılar.
// app/hisse/[sembol]/page.tsx aynı normalize ve istatistik mantığını buradan kullanır.

// temettuSermayeGecmisi iki farklı şemayla gelebiliyor:
//   kanonik    : { yil, tur, tutarOran, aciklama }
//   alternatif : { tarih, islem, oran }   (eski içe aktarımlardan kalan)
// Normalize, iki şemayı tek görünüme indirger ve tüm alanları boş olan
// satırları eler; böylece boş "hayalet" satır hiç render edilmez.
export type HamSermayeKaydi = Partial<{
  yil: string;
  tur: string;
  tutarOran: string;
  aciklama: string;
  tarih: string;
  islem: string;
  oran: string;
}>;

export type SermayeGecmisiSatiri = {
  yil: string;
  tur: string;
  tutarOran: string;
  aciklama: string;
};

export function ilkDoluMetin(...adaylar: (string | undefined)[]): string {
  for (const aday of adaylar) {
    if (typeof aday === "string" && aday.trim().length > 0) return aday.trim();
  }
  return "";
}

export function sermayeGecmisiNormalize(
  kayitlar?: HamSermayeKaydi[] | null
): SermayeGecmisiSatiri[] {
  if (!Array.isArray(kayitlar)) return [];
  return kayitlar
    .map((k) => ({
      yil: ilkDoluMetin(k.yil, k.tarih),
      tur: ilkDoluMetin(k.tur, k.islem),
      tutarOran: ilkDoluMetin(k.tutarOran, k.oran),
      aciklama: ilkDoluMetin(k.aciklama),
    }))
    .filter((k) => k.yil || k.tur || k.tutarOran || k.aciklama);
}

export type TemettuGecmisIstatistik = {
  toplamKayit: number;
  temettuSayisi: number;
  sermayeIslemiSayisi: number;
  sonIslem?: SermayeGecmisiSatiri;
  sonTemettu?: SermayeGecmisiSatiri;
};

const TEMETTU_ANAHTARLARI = ["temettü", "kâr payı", "kar payı", "nakit"];

export function temettuMu(satir: SermayeGecmisiSatiri): boolean {
  const metin = `${satir.tur} ${satir.aciklama}`.toLocaleLowerCase("tr-TR");
  return TEMETTU_ANAHTARLARI.some((a) => metin.includes(a));
}

export function temettuIstatistikleri(
  satirlar: SermayeGecmisiSatiri[]
): TemettuGecmisIstatistik {
  const temettuler = satirlar.filter(temettuMu);
  return {
    toplamKayit: satirlar.length,
    temettuSayisi: temettuler.length,
    sermayeIslemiSayisi: satirlar.length - temettuler.length,
    sonIslem: satirlar[0],
    sonTemettu: temettuler[0],
  };
}

// oranYorumla.ts ile aynı mantık: sembole göre deterministik varyant seçimi.
// Not: JS'te FNV çarpımı Math.imul ile yapılmalı; aksi halde 2^53 taşması
// dağılımı bozar.
function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

export function varyantSec<T>(sembol: string, kalip: string, secenekler: T[]): T {
  return secenekler[fnv1a(`${sembol}|${kalip}`) % secenekler.length];
}

import { temettuler, type TemettuKaydi } from "@/data/temettuler";

export type { TemettuKaydi };

function ayNo(isoTarih: string): number {
  // "2026-06-19" -> 6
  return Number(isoTarih.slice(5, 7));
}

function yilNo(isoTarih: string): number {
  return Number(isoTarih.slice(0, 4));
}

// Bir ay sayfası için: o yıl + aydaki kayıtlar, tarihe göre (en yeni üstte).
export function getTemettulerByAy(yil: number, ay: number): TemettuKaydi[] {
  return temettuler
    .filter((t) => yilNo(t.isoTarih) === yil && ayNo(t.isoTarih) === ay)
    .sort((a, b) => (a.isoTarih < b.isoTarih ? 1 : -1));
}

// Bir hisse künye sayfası için: o sembole ait tüm kayıtlar (en yeni üstte).
export function getTemettulerBySembol(sembol: string): TemettuKaydi[] {
  const hedef = sembol.toUpperCase();
  return temettuler
    .filter((t) => t.sembol.toUpperCase() === hedef)
    .sort((a, b) => (a.isoTarih < b.isoTarih ? 1 : -1));
}

// Hisse liste ve detay sayfalarında tek tip görsel dil için her hisse koduna
// özel yerel SVG avatar üretilir. Dış istek yoktur; gerçek logo/avatar karışımı
// yerine bütün hisseler aynı tasarım sisteminde görünür.

const PALETLER = [
  ["#0f766e", "#ccfbf1", "#134e4a"],
  ["#1d4ed8", "#dbeafe", "#1e3a8a"],
  ["#7c3aed", "#ede9fe", "#4c1d95"],
  ["#be123c", "#ffe4e6", "#881337"],
  ["#b45309", "#fef3c7", "#78350f"],
  ["#047857", "#d1fae5", "#064e3b"],
  ["#4338ca", "#e0e7ff", "#312e81"],
  ["#0369a1", "#e0f2fe", "#0c4a6e"],
] as const;

function avatarLogoUret(kod: string): string {
  const temizKod = kod.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 5) || "HISSE";
  let hash = 0;
  for (let i = 0; i < temizKod.length; i++) {
    hash = (hash * 31 + temizKod.charCodeAt(i)) >>> 0;
  }
  const [ana, zemin, koyu] = PALETLER[hash % PALETLER.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" role="img" aria-label="${temizKod} logo"><rect width="128" height="128" rx="28" fill="${zemin}"/><circle cx="102" cy="26" r="24" fill="${ana}" opacity=".16"/><circle cx="26" cy="104" r="30" fill="${ana}" opacity=".12"/><rect x="18" y="18" width="92" height="92" rx="22" fill="white" opacity=".72"/><text x="64" y="71" text-anchor="middle" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif" font-size="${temizKod.length > 4 ? 27 : 31}" font-weight="800" letter-spacing="0" fill="${koyu}">${temizKod}</text><path d="M33 90h62" stroke="${ana}" stroke-width="7" stroke-linecap="round" opacity=".7"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// Verilen hisse kodu için yerel SVG avatar data URI'si.
export function getHisseLogo(kod: string): string | undefined {
  if (!kod) return undefined;
  const anahtar = kod.toUpperCase();
  return avatarLogoUret(anahtar);
}

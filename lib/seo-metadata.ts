const SITE_ADI_DESENI = /\s*[|–—-]\s*Hoca\s+[İI]le\s+Borsa\s*$/iu;

export function seoMetniniTemizle(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function siteAdiniBasliktanCikar(value: string): string {
  let sonuc = seoMetniniTemizle(value);

  while (SITE_ADI_DESENI.test(sonuc)) {
    sonuc = sonuc.replace(SITE_ADI_DESENI, "").trim();
  }

  return sonuc;
}

function kelimeSinirindaKisalt(
  value: string,
  maxLength: number,
  ucNokta = true
): string {
  if (value.length <= maxLength) return value;

  const parca = value.slice(0, maxLength - 1);
  const sonBosluk = parca.lastIndexOf(" ");
  const kesilmis = (sonBosluk >= Math.floor(maxLength * 0.7)
    ? parca.slice(0, sonBosluk)
    : parca
  ).replace(/[,:;\s]+$/g, "");

  return `${kesilmis}${ucNokta ? "…" : ""}`;
}

export function seoBasliginiSinirla(value: string, maxLength = 65): string {
  return kelimeSinirindaKisalt(
    siteAdiniBasliktanCikar(value),
    maxLength,
    false
  );
}

export function seoAciklamasi(
  value: string,
  tamamlayici = "",
  maxLength = 160
): string {
  const anaMetin = seoMetniniTemizle(value);
  const ekMetin = seoMetniniTemizle(tamamlayici);
  const birlesik =
    anaMetin.length < 140 && ekMetin
      ? `${anaMetin}${/[.!?]$/.test(anaMetin) ? "" : "."} ${ekMetin}`
      : anaMetin;

  if (birlesik.length <= maxLength) return birlesik;

  const cumleler = birlesik.match(/[^.!?]+[.!?]+/g) ?? [];
  let cumleSiniri = "";

  for (const cumle of cumleler) {
    const aday = seoMetniniTemizle(`${cumleSiniri} ${cumle}`);
    if (aday.length > maxLength) break;
    cumleSiniri = aday;
  }

  if (cumleSiniri.length >= 140) return cumleSiniri;
  return kelimeSinirindaKisalt(birlesik, maxLength);
}

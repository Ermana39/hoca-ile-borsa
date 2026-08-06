const NOINDEX_STATIK_YOLLAR = new Set([
  "/borsa/dip-zirve-analizi",
  "/borsa/hacim-artisi-analizi/aylik-hacim-artisi-olanlar",
  "/borsa/hacim-artisi-analizi/haftalik-hacim-artisi-olanlar",
  "/borsa/hacim-artisi-analizi/yillik-hacim-artisi-olanlar",
  "/cerez-politikasi",
  "/kullanim-sartlari",
  "/reklam",
  "/yasal-uyari",
]);

const HALKA_ARZ_TASLAK_DETAY_DESENI =
  /^\/halka-arz\/taslak-izahnameler\/[^/]+$/;

const HALKA_ARZ_SUREC_HABERI_DESENLERI = [
  /^\/haber\/.+-(?:halka-arzina-spk-onayi-geldi|halka-arz-izahnamesi-yayinlandi)$/,
  /^\/haber\/.+-halka-arz-onayli-izahnamesi-yayinlandi$/,
  /^\/haber\/.+-halka-arz(?:larina)?-(?:spk-)?onayi$/,
  /^\/haber\/spk-\d+-(?:yeni-)?halka-arz-onayi(?:-.+)?$/,
  /^\/haber\/spk-\d+-halka-arz-onayi(?:-.+)?$/,
];

const HABER_ARSIV_SAYFASI_DESENLERI = [
  /^\/haberler\/sayfa\/\d+$/,
  /^\/haberler\/kategori\/[^/]+$/,
  /^\/haberler\/kategori\/[^/]+\/sayfa\/\d+$/,
];

const YONETIM_YOLU_DESENLERI = [
  /\[/,
  /^\/yonetim(?:\/|$)/,
  /^\/kontrol-paneli-4827(?:\/|$)/,
  /^\/(?:giris|uye|profil|mesajlar|istatistik|guvenlik-kayitlari)(?:\/|$)/,
];

export function halkaArzSurecHaberiYoluMu(route: string): boolean {
  return HALKA_ARZ_SUREC_HABERI_DESENLERI.some((desen) =>
    desen.test(route)
  );
}

export function dizinDisiYolMu(route: string): boolean {
  if (NOINDEX_STATIK_YOLLAR.has(route)) return true;
  if (HALKA_ARZ_TASLAK_DETAY_DESENI.test(route)) return true;
  if (halkaArzSurecHaberiYoluMu(route)) return true;
  if (HABER_ARSIV_SAYFASI_DESENLERI.some((desen) => desen.test(route))) {
    return true;
  }
  return YONETIM_YOLU_DESENLERI.some((desen) => desen.test(route));
}

export function sitemapteIndexlenebilirStatikYolMu(route: string): boolean {
  if (NOINDEX_STATIK_YOLLAR.has(route)) return false;
  return !dizinDisiYolMu(route);
}

export function reklamGosterilebilirYolMu(pathname: string): boolean {
  if (dizinDisiYolMu(pathname)) return false;

  return (
    /^\/haber\/[^/]+$/.test(pathname) ||
    /^\/rehberler\/[^/]+$/.test(pathname)
  );
}

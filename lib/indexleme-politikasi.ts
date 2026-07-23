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

const HALKA_ARZ_SUREC_HABERI_DESENI =
  /^\/haber\/.+-(?:halka-arzina-spk-onayi-geldi|halka-arz-izahnamesi-yayinlandi)$/;

const HABER_ARSIV_SAYFASI_DESENLERI = [
  /^\/haberler\/sayfa\/\d+$/,
  /^\/haberler\/kategori\/[^/]+\/sayfa\/\d+$/,
];

const YONETIM_YOLU_DESENLERI = [
  /\[/,
  /^\/yonetim(?:\/|$)/,
  /^\/kontrol-paneli-4827(?:\/|$)/,
  /^\/(?:giris|uye|profil|mesajlar|istatistik|guvenlik-kayitlari)(?:\/|$)/,
];

export function halkaArzSurecHaberiYoluMu(route: string): boolean {
  return HALKA_ARZ_SUREC_HABERI_DESENI.test(route);
}

export function sitemapteIndexlenebilirStatikYolMu(route: string): boolean {
  if (NOINDEX_STATIK_YOLLAR.has(route)) return false;
  if (halkaArzSurecHaberiYoluMu(route)) return false;
  if (HABER_ARSIV_SAYFASI_DESENLERI.some((desen) => desen.test(route))) {
    return false;
  }
  return !YONETIM_YOLU_DESENLERI.some((desen) => desen.test(route));
}

export function reklamGosterilebilirYolMu(pathname: string): boolean {
  if (halkaArzSurecHaberiYoluMu(pathname)) return false;

  return (
    /^\/haber\/[^/]+$/.test(pathname) ||
    /^\/rehberler\/[^/]+$/.test(pathname)
  );
}

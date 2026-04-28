const ONE_YEAR_CACHE = "public, max-age=31536000, immutable";

const stableImageCacheFiles = [
  "/favicon.ico",
  "/banner.png",

  "/kategori-borsa-analiz.png",
  "/Mevduat-kredi-faiz.png",
  "/kategori-halka-arz.png",

  "/gunluk-borsa-ozeti-yatay.png",
  "/dikkat-cekenler-yatay.png",
  "/dip-zirve-analizi-yatay.png",
  "/egitim-videolari-yatay.png",
  "/formasyonlar-yatay.png",
  "/geri-alim-programlari-yatay.png",
  "/gosterge-taramalari-yatay.png",
  "/grafik-analiz-yatay.png",
  "/hacim-artisi-analizi-yatay.png",
  "/yeni-is-anlasmalari-yatay.png",
  "/pivot-analizi-yatay.png",
  "/tedbirli-hisseler-yatay.png",
  "/oran-analizi.png",

  "/fonlar-haftalik-tercih.png",
  "/fonlar-getiri.png",
  "/fonlar-tarihsel-veriler.png",

  "/menkul-kiymet-yatirim-fonlari-yatay.png",
  "/emeklilik-fonlari-yatay.png",
  "/borsa-yatirim-fonlari-yatay.png",

  "/onayli-izahnameler.png",
  "/taslak-izahnameler.png",

  "/temettu-egitimi-yatay.png",
  "/nisan-ayi-temettu-verenler-yatay.png",
  "/mayis-ayi-temettu-verenler-yatay.png",
  "/haziran-ayi-temettu-verenler-yatay.png",
  "/temmuz-ayi-temettu-verenler-yatay.png",
  "/agustos-ayi-temettu-verenler-yatay.png",

  "/mevduat-faizi-oranlari.png",
  "/tuketici-faizi-oranlari.png",
  "/konut-kredisi-oranlari.png",
  "/tasit-kredisi-oranlari.png",
];

const nextConfig = {
  outputFileTracingIncludes: {
    "/mevduat-kredi-faizleri/mevduat-faizi-oranlari": [
      "./data/**/*.xlsx",
    ],
  },

  async headers() {
    return stableImageCacheFiles.map((source) => ({
      source,
      headers: [
        {
          key: "Cache-Control",
          value: ONE_YEAR_CACHE,
        },
      ],
    }));
  },
};

module.exports = nextConfig;
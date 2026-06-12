const ONE_YEAR_CACHE = "public, max-age=31536000, immutable";

const stableImageCacheFiles = [
  "/favicon.ico",
  "/banner.png",

  "/Guclu-trend-ve-momentum-taramasi.png",
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const haberRedirects = [
  {
    source: "/haber/haber-950",
    destination: "/haber/05-haziran-2026-cuma-kap-bildirimleri-ozeti",
  },
  {
    source: "/haber/haber-975",
    destination: "/haber/turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi",
  },
  {
    source: "/haber/haber-976",
    destination: "/haber/thynin-air-europa-yatirim-surecinde-yeni-gelisme",
  },
  {
    source: "/haber/haber-977",
    destination: "/haber/aselsandan-845-milyon-dolarlik-yeni-sozlesme",
  },
  {
    source: "/haber/haber-978",
    destination: "/haber/kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi",
  },
  {
    source: "/haber/haber-979",
    destination: "/haber/turk-is-mayis-2026-aclik-ve-yoksulluk-siniri-arastirmasi",
  },
];

const nextConfig = {
  outputFileTracingIncludes: {
    "/mevduat-kredi-faizleri/mevduat-faizi-oranlari": [
      "./data/**/*.xlsx",
    ],
  },

  async redirects() {
    return [
      ...haberRedirects.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: true,
      })),
      // Eski numaralı haber URL şemaları (örn. /haber/haber-994,
      // /haberler/haber-1) için özel bir eşleşme bulunamazsa haber
      // listesine yönlendir. Yukarıdaki özel haberRedirects öncelikli olur.
      {
        source: "/haber/haber-:id",
        destination: "/haberler",
        permanent: true,
      },
      {
        source: "/haberler/haber-:id",
        destination: "/haberler",
        permanent: true,
      },
      // Artık var olmayan fon getiri kategorileri ana getiri sayfasına
      // yönlendirilir.
      {
        source: "/fonlar/getiri/girisim-sermayesi-yatirim-fonlari-getiri",
        destination: "/fonlar/getiri",
        permanent: true,
      },
      {
        source: "/fonlar/getiri/gayrimenkul-yatirim-fonlari-getiri",
        destination: "/fonlar/getiri",
        permanent: true,
      },
    ];
  },

  async headers() {
    const imageHeaders = stableImageCacheFiles.map((source) => ({
      source,
      headers: [
        {
          key: "Cache-Control",
          value: ONE_YEAR_CACHE,
        },
      ],
    }));

    const globalSecurityHeaders = [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];

    return [...imageHeaders, ...globalSecurityHeaders];
  },
};

module.exports = nextConfig;
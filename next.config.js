const ONE_YEAR_CACHE = "public, max-age=31536000, immutable";

const stableImageCacheFiles = [
  "/favicon.ico",
  "/banner.webp",

  "/Guclu-trend-ve-momentum-taramasi.png",
];

// İçerik Güvenliği Politikası (CSP).
// Site Google AdSense, Vercel Analytics ve Next.js'in satır içi (inline)
// bootstrap script'lerini kullanır. Bu ekosistemleri kırmadan; reklamları
// etkilemeyen yönleri (clickjacking, obje gömme, base-uri, form hedefi)
// sıkılaştıran pragmatik bir politika uygulanır.
const adsenseScript = [
  "https://pagead2.googlesyndication.com",
  "https://*.googlesyndication.com",
  "https://*.googleadservices.com",
  "https://*.google.com",
  "https://*.adtrafficquality.google",
];

const adsenseFrame = [
  "https://googleads.g.doubleclick.net",
  "https://*.googlesyndication.com",
  "https://*.doubleclick.net",
  "https://*.google.com",
  "https://*.adtrafficquality.google",
];

const vercelAnalytics = [
  "https://va.vercel-scripts.com",
  "https://*.vercel-insights.com",
];

// Onaylı izahname sayfalarındaki YouTube video gömülerinin (iframe) CSP
// tarafından engellenmemesi için izin verilen çerçeve kaynakları.
const youtubeFrame = [
  "https://www.youtube.com",
  "https://www.youtube-nocookie.com",
];

const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js hydration ve AdSense satır içi/eval gerektirir.
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${adsenseScript.join(" ")} ${vercelAnalytics.join(" ")}`,
  // Tailwind/Next satır içi stil enjekte eder.
  "style-src 'self' 'unsafe-inline'",
  // Reklam görselleri çok sayıda alan adından gelir.
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self' ${adsenseScript.join(" ")} ${adsenseFrame.join(" ")} ${vercelAnalytics.join(" ")}`,
  `frame-src 'self' ${adsenseFrame.join(" ")} ${youtubeFrame.join(" ")}`,
  // Aşağıdakiler reklamları etkilemez, saldırı yüzeyini daraltır.
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Modern tarayıcılarda devre dışı; CSP'ye güveniyoruz (eski filtre
  // güvenlik açıklarına yol açabildiği için "0" önerilir).
  { key: "X-XSS-Protection", value: "0" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const haberRedirects = [
  {
    source: "/haber/haber-950",
    destination: "/haberler",
  },
  // haber-975..978'in işaret ettiği haberler arşivden kaldırıldığı için
  // artık doğrudan haber listesine yönlendirilir.
  {
    source: "/haber/haber-975",
    destination: "/haberler",
  },
  {
    source: "/haber/haber-976",
    destination: "/haberler",
  },
  {
    source: "/haber/haber-977",
    destination: "/haberler",
  },
  {
    source: "/haber/haber-978",
    destination: "/haberler",
  },
  {
    source: "/haber/haber-979",
    destination: "/haberler",
  },
];

// 5-11 Haziran 2026 haftasının haberleri arşivden kaldırıldı; eski URL'ler
// haber listesine kalıcı olarak yönlendirilir.
const silinenHaberSluglari = [
  "bist-pay-geri-alim-islemleri",
  "turkiye-sigortanin-prim-uretimi-79-2-milyar-tlye-yukseldi",
  "thynin-air-europa-yatirim-surecinde-yeni-gelisme",
  "aselsandan-845-milyon-dolarlik-yeni-sozlesme",
  "kontrolmatikin-iki-tahvilinde-kupon-odemesi-gerceklesmedi",
  "bist-temettu-kararlari",
  "turk-bankaciliginda-tarihi-donusum-3-katilim-bankasi-birlesiyor-emlak-katilim-borsaya-geliyor",
  "sigorta-prim-uretimi-artisi-agesa-ansgr",
  "cwene-abd-lisans-anlasmasi",
  "derhl-bedelsiz-sermaye-artirimi",
  "altny-kayitli-sermaye-tavani-artisi",
  "ebebk-satis-adedi-artisi",
  "akhan-gana-makarna-ihracati",
  "astor-abd-719-milyon-dolar-anlasma",
  "abd-enflasyonu-sonrasi-borsalar-altin-fiyatlamasi",
  "tcmb-politika-faizini-yuzde-37de-sabit-tuttu-11-haziran-2026",
  "11-haziran-2026-persembe-kap-bildirimleri-ozeti",
];

// Search Console'da 404 veren eski/yayından kalkmış haber URL'leri.
const eskiHaberRedirects = [
  // Eski günlük KAP özeti URL şeması; 15 Haziran için güncel sayfa mevcut.
  {
    source: "/haber/15-haziran-2026-kap-bildirimleri-ozeti",
    destination: "/haber/15-haziran-2026-onemli-kap-haberleri",
  },
  {
    source: "/haber/15-haziran-2026-pazartesi-kap-bildirimleri-ozeti",
    destination: "/haber/15-haziran-2026-onemli-kap-haberleri",
  },
  {
    source: "/haber/08-haziran-2026-pazartesi-kap-bildirimleri-ozeti",
    destination: "/haberler",
  },
  {
    source: "/haber/11-haziranda-kritik-karar-merkez-bankasi-faizi-ne-yapacak",
    destination: "/haberler",
  },
  {
    source: "/haber/dstkf-empae-zergy-vbts-tedbiri",
    destination: "/haberler",
  },
];

// Eski kısa izahname slug'ları → güncel açıklayıcı slug'lar (GSC 404 örnekleri).
const izahnameSlugRedirects = [
  ["/halka-arz/taslak-izahnameler/quick", "/halka-arz/onayli-izahnameler/quick-sigorta"],
  ["/halka-arz/taslak-izahnameler/quick-sigorta", "/halka-arz/onayli-izahnameler/quick-sigorta"],
  ["/halka-arz/taslak-izahnameler/bewen-enerji", "/halka-arz/onayli-izahnameler/bewen-enerji"],
  ["/halka-arz/taslak-izahnameler/yes", "/halka-arz/taslak-izahnameler/yes-oto-kiralama-ve-turizm-yatirimlari"],
  ["/halka-arz/taslak-izahnameler/metgun", "/halka-arz/onayli-izahnameler/metgun-enerji-yatirimlari"],
  ["/halka-arz/taslak-izahnameler/biosys", "/halka-arz/taslak-izahnameler/biosys-biyomedikal-muhendislik-san-ve-tic"],
  ["/halka-arz/taslak-izahnameler/uslu", "/halka-arz/taslak-izahnameler/uslu-csm-demir-celik"],
  ["/halka-arz/taslak-izahnameler/vaden", "/halka-arz/taslak-izahnameler/vaden-otomotiv-san-ve-tic"],
  ["/halka-arz/taslak-izahnameler/cimstone", "/halka-arz/taslak-izahnameler/cimstone-insaat-malzemeleri-san-ve-tic"],
  ["/halka-arz/taslak-izahnameler/turkervangolu", "/halka-arz/onayli-izahnameler/turker-vangolu-enerji-yatirim"],
  ["/halka-arz/taslak-izahnameler/turker-vangolu-enerji-yatirim", "/halka-arz/onayli-izahnameler/turker-vangolu-enerji-yatirim"],
  ["/halka-arz/taslak-izahnameler/citlekci-magazacilik", "/halka-arz/onayli-izahnameler/citlekci-magazacilik"],
  ["/halka-arz/taslak-izahnameler/citlekci-magazacilik-gida", "/halka-arz/onayli-izahnameler/citlekci-magazacilik"],
  ["/halka-arz/taslak-izahnameler/teknika-plast-teknik-kalip-plastik-san-ve-tic", "/halka-arz/onayli-izahnameler/teknika-plast-teknik-kalip-plastik-san-ve-tic"],
  ["/halka-arz/taslak-izahnameler/kapeks-kimya", "/halka-arz/onayli-izahnameler/kapeks-kimya"],
  ["/halka-arz/taslak-izahnameler/kapeks-kimya-sanayi", "/halka-arz/onayli-izahnameler/kapeks-kimya"],
  ["/halka-arz/taslak-izahnameler/mikro", "/halka-arz/taslak-izahnameler/anadolu-mikronize-kimya-san-ve-tic"],
  ["/halka-arz/taslak-izahnameler/multinet", "/halka-arz/taslak-izahnameler/multinet-kurumsal-hizmetler"],
  ["/halka-arz/onayli-izahnameler/ekinciler", "/halka-arz/onayli-izahnameler/ekinciler-demir-celik-ekdmr"],
  ["/halka-arz/onayli-izahnameler/beta", "/halka-arz/onayli-izahnameler/beta-enerji-teknoloji-betae"],
  ["/halka-arz/onayli-izahnameler/golda-gida-sanayi-ve-ticaret", "/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic"],
  ["/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri", "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi"],
  ["/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-sanayi-ticaret", "/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-san-tic"],
  ["/halka-arz/taslak-izahnameler/saytek", "/halka-arz/taslak-izahnameler/saytek-medikal-ve-plastik-san-tic"],
  ["/halka-arz/taslak-izahnameler/altun", "/halka-arz/taslak-izahnameler/altun-gida"],
  ["/halka-arz/taslak-izahnameler/ozel", "/halka-arz/taslak-izahnameler/ozel-iskenderun-gelisim-hastanesi-san-ve-tic"],
  ["/halka-arz/taslak-izahnameler/tv8", "/halka-arz/taslak-izahnameler/tv8-tv-yayincilik"],
  ["/halka-arz/onayli-izahnameler/quick-sigorta-1", "/halka-arz/onayli-izahnameler/quick-sigorta"],
];

const halkaArzHisseRedirects = [
  ["/hisse/golda", "/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic"],
  ["/hisse/ekim", "/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san"],
  ["/hisse/isvea", "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi"],
  ["/hisse/orzax", "/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-san-tic"],
  ["/hisse/meten", "/halka-arz/onayli-izahnameler/metgun-enerji-yatirimlari"],
  ["/hisse/yesot", "/halka-arz/taslak-izahnameler/yes-oto-kiralama-ve-turizm-yatirimlari"],
];

const hataliHisseRedirects = [
  {
    source: "/hisse/yehyo",
    destination: "/hisse/yeotk",
  },
  {
    source: "/hisse/bnbn",
    destination: "/hisse/binbn",
  },
  {
    source: "/hisse/:slug(.*\\..*)",
    destination: "/hisseler",
  },
  {
    source: "/hisse/:slug(.*%20.*)",
    destination: "/hisseler",
  },
];

const eskiUrlRedirects = [
  {
    source: "/halka-arz-:id(\\d+)",
    destination: "/halka-arz",
  },
  {
    source: "/fonlar/etki-analizi/:fon(dfi|pbr|phe|tly|kha)-:id(\\d+)",
    destination: "/fonlar/etki-analizi/:fon",
  },
  {
    source: "/fonlar/etki-analizi/bmu-:id(\\d+)",
    destination: "/fonlar/etki-analizi",
  },
  {
    source: "/rehber/katilim-endeksi-nedir",
    destination: "/rehberler/katilim-endeksi",
  },
  {
    source: "/temettu/mayis-ayi-temettu-takvimi",
    destination: "/temettu",
  },
  {
    source: "/borsa/gunluk-borsa-ozeti-11-haziran-2026",
    destination: "/borsa/gunluk-borsa-ozeti",
  },
  {
    source: "/banner.wep",
    destination: "/banner.webp",
  },
];

const nextConfig = {
  outputFileTracingIncludes: {
    "/mevduat-kredi-faizleri/mevduat-faizi-oranlari": [
      "./data/**/*.xlsx",
    ],
    "/hisse/[sembol]": [
      "./data/hisseler/**/*.json",
      "./data/haberler/**/*.json",
    ],
    "/hisseler": [
      "./data/hisseler/**/*.json",
    ],
    "/fonlar/**": [
      "./data/fonlar/**/*.json",
      "./app/fonlar/**/*.json",
      "./app/fonlar/**/*.xlsx",
    ],
    // Dinamik halka arz şablonu JSON verilerini okur.
    "/halka-arz/taslak-izahnameler/[slug]": [
      "./data/halka-arz/**/*.json",
    ],
    // Takvim sayfası tüm halka arz JSON'larını tarar.
    "/halka-arz/takvim": [
      "./data/halka-arz/**/*.json",
    ],
    // Günlük borsa özetleri haber akışına da katıldığından, getAllNews kullanan
    // tüm route'lar bu JSON'lara ihtiyaç duyar.
    "/": [
      "./data/gunluk-ozet/**/*.json",
      "./data/haberler/**/*.json",
    ],
    "/haber/**": ["./data/haberler/**/*.json"],
    "/borsa/gunluk-borsa-ozeti": ["./data/gunluk-ozet/**/*.json"],
    "/borsa/gunluk-borsa-ozeti/[tarih]": ["./data/gunluk-ozet/**/*.json"],
    "/haberler": [
      "./data/gunluk-ozet/**/*.json",
      "./data/haberler/**/*.json",
    ],
    "/haberler/sayfa/[sayfa]": [
      "./data/gunluk-ozet/**/*.json",
      "./data/haberler/**/*.json",
    ],
    "/haberler/kategori/[kategori]": [
      "./data/gunluk-ozet/**/*.json",
      "./data/haberler/**/*.json",
    ],
    "/haberler/kategori/[kategori]/sayfa/[sayfa]": [
      "./data/gunluk-ozet/**/*.json",
      "./data/haberler/**/*.json",
    ],
    "/halka-arz/onayli-izahnameler/**": [
      "./data/halka-arz/**/*.json",
      "./data/haberler/**/*.json",
      "./data/gunluk-ozet/**/*.json",
    ],
    "/halka-arz/tavan-serisi": ["./data/gunluk-ozet/**/*.json"],
    "/yazar/[slug]": ["./data/haberler/**/*.json"],
    "/news-sitemap.xml": ["./data/haberler/**/*.json"],
    "/rss.xml": ["./data/haberler/**/*.json"],
    "/api/revalidate": ["./data/haberler/**/*.json"],
    "/sitemap.xml": [
      "./data/gunluk-ozet/**/*.json",
      "./data/halka-arz/**/*.json",
      "./data/haberler/**/*.json",
      "./data/fonlar/**/*.json",
      // Temettü alt sayfası rotaları hisse JSON'larından türetilir.
      "./data/hisseler/**/*.json",
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "hocaileborsa.com",
          },
        ],
        destination: "https://www.hocaileborsa.com/:path*",
        permanent: true,
      },
      // Temettü geçmişi artık hisse künyesinde yer alıyor. Bu yönlendirmeyi
      // Next.js sayfası yerine yönlendirme katmanında çözerek yüzlerce gereksiz
      // ISR kaydı oluşturulmasını önlüyoruz.
      {
        source: "/hisse/:sembol/temettu",
        destination: "/hisse/:sembol",
        permanent: true,
      },
      // Halka arz slug'ları daha açıklayıcı/SEO-dostu adlara taşındı; eski
      // kısa URL'ler yeni slug'lara kalıcı olarak yönlendirilir.
      {
        source: "/halka-arz/taslak-izahnameler/kepeks",
        destination: "/halka-arz/onayli-izahnameler/kapeks-kimya",
        permanent: true,
      },
      {
        source: "/halka-arz/taslak-izahnameler/cilekci",
        destination: "/halka-arz/onayli-izahnameler/citlekci-magazacilik",
        permanent: true,
      },
      {
        source: "/halka-arz/taslak-izahnameler/fiba",
        destination: "/halka-arz/taslak-izahnameler/fiba-faktoring",
        permanent: true,
      },
      // Formasyon sayfaları yer tutucu slug'lardan açıklayıcı slug'lara taşındı.
      {
        source: "/borsa/formasyonlar/formasyon1",
        destination: "/borsa/formasyonlar/quagr-ikili-dip-formasyonu",
        permanent: true,
      },
      {
        source: "/borsa/formasyonlar/formasyon3",
        destination: "/borsa/formasyonlar/huner-dusen-genisleyen-takoz-formasyonu",
        permanent: true,
      },
      {
        source: "/formasyonlar/:slug",
        destination: "/borsa/formasyonlar/:slug",
        permanent: true,
      },
      // Eski düz (tire'li) günlük özet URL'i → yeni kalıcı slug URL'i.
      {
        source: "/borsa/gunluk-borsa-ozeti-12-haziran-2026",
        destination: "/borsa/gunluk-borsa-ozeti/12-haziran-2026",
        permanent: true,
      },
      // "Dikkat Çekenler" bölümü kaldırıldı; alt makaleler slug'ları korunarak
      // /haber arşivine taşındı. Eski URL'ler yeni haber adreslerine, liste
      // sayfası da haber arşivine kalıcı olarak yönlendirilir.
      // Arşivden tamamen silinen haberlerin dikkat-cekenler URL'leri, zincirleme
      // yönlendirme oluşmaması için genel kuraldan ÖNCE tek adımda /haberler'e gider.
      ...silinenHaberSluglari.map((slug) => ({
        source: `/borsa/dikkat-cekenler/${slug}`,
        destination: "/haberler",
        permanent: true,
      })),
      {
        source: "/borsa/dikkat-cekenler/:slug",
        destination: "/haber/:slug",
        permanent: true,
      },
      {
        source: "/borsa/dikkat-cekenler",
        destination: "/haberler",
        permanent: true,
      },
      // "Grafik Analiz" bölümü tamamen kaldırıldı. Hisse bazlı eski analiz
      // sayfaları ilgili hisse künyesine, liste sayfası da borsa ana sayfasına
      // kalıcı olarak yönlendirilir.
      {
        source: "/borsa/grafik-analiz/:slug",
        destination: "/hisse/:slug",
        permanent: true,
      },
      {
        source: "/borsa/grafik-analiz",
        destination: "/borsa",
        permanent: true,
      },
      ...haberRedirects.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: true,
      })),
      ...silinenHaberSluglari.map((slug) => ({
        source: `/haber/${slug}`,
        destination: "/haberler",
        permanent: true,
      })),
      ...eskiHaberRedirects.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: true,
      })),
      ...izahnameSlugRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      ...halkaArzHisseRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      ...hataliHisseRedirects.map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: true,
      })),
      ...eskiUrlRedirects.map((r) => ({
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
    // Tüm görsellere 30 günlük tarayıcı+CDN cache. "immutable" değil; çünkü bir
    // görseli aynı adla değiştirebilirsin — bu durumda en geç 30 günde tazelenir.
    // Bu kural ÖNCE; aşağıdaki özel liste SONRA geldiği için (son kural kazanır)
    // stableImageCacheFiles dosyaları 1 yıllık ayarını korur.
    const generalImageHeaders = [
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000",
          },
        ],
      },
    ];

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

    return [...generalImageHeaders, ...imageHeaders, ...globalSecurityHeaders];
  },
};

module.exports = nextConfig;

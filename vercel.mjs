import nextConfig from "./next.config.mjs";

const redirects = await nextConfig.redirects();
const headers = await nextConfig.headers();

// Next statik ciktiyi `out` klasorune yazar. Vercel bu dosyalari dogrudan Edge
// CDN'den sunar; yalnizca kok `api` klasorundeki islemler Function olarak kalir.
export const config = {
  // Vercel'in Next builder'i `outputDirectory: "out"` ile routes-manifest
  // arar. Bu proje Next ile build edilir, fakat Vercel'e tamamen statik
  // `out` klasoru olarak teslim edilir; boylece ISR okunmaz ve manifest
  // kontrolu calismaz.
  framework: null,
  buildCommand: "npm run build",
  outputDirectory: "out",
  cleanUrls: true,
  trailingSlash: false,
  functions: {
    "api/**/*.ts": {
      excludeFiles: "{data,public/data,out,.next,.tmp,.codex-tmp}/**",
    },
  },
  rewrites: [
    { source: "/api/admin-login", destination: "/api/admin?hib_handler=login" },
    { source: "/api/admin-logout", destination: "/api/admin?hib_handler=logout" },
    { source: "/api/admin-messages", destination: "/api/admin?hib_handler=messages" },
    { source: "/api/contact", destination: "/api/misc?hib_handler=contact" },
    { source: "/api/health", destination: "/api/misc?hib_handler=health" },
    { source: "/api/revalidate", destination: "/api/misc?hib_handler=revalidate" },
    {
      source: "/api/portfolio-market-prices",
      destination: "/api/portfolio?hib_handler=market-prices",
    },
  ],
  redirects,
  headers,
};

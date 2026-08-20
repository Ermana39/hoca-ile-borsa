import nextConfig from "./next.config.js";

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
  redirects,
  headers,
};

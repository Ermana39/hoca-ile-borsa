import nextConfig from "./next.config.js";

const redirects = await nextConfig.redirects();
const headers = await nextConfig.headers();

// Next statik ciktiyi `out` klasorune yazar. Vercel bu dosyalari dogrudan Edge
// CDN'den sunar; yalnizca kok `api` klasorundeki islemler Function olarak kalir.
export const config = {
  framework: "nextjs",
  outputDirectory: "out",
  cleanUrls: true,
  trailingSlash: false,
  redirects,
  headers,
};

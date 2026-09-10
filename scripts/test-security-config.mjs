import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const { match } = createRequire(import.meta.url)("next/dist/compiled/path-to-regexp");

test("deployed static pages receive production security headers", async () => {
  const previous = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  try {
    const { config } = await import("../vercel.mjs");
    const { default: nextConfig } = await import("../next.config.mjs");
    assert.equal(config.framework, null);
    assert.equal(config.outputDirectory, "out");
    const headers = Object.fromEntries(config.headers.find((rule) => rule.source === "/(.*)").headers.map(({ key, value }) => [key, value]));
    assert.equal(headers["X-Content-Type-Options"], "nosniff");
    const csp = headers["Content-Security-Policy"];
    assert.ok(!csp.includes("'unsafe-eval'"));
    for (const directive of ["script-src-attr 'none'", "object-src 'none'", "base-uri 'none'", "form-action 'self'", "frame-ancestors 'self'"]) {
      assert.ok(csp.includes(directive), directive);
    }
    assert.ok(csp.includes("https://pagead2.googlesyndication.com"));
    assert.ok(csp.includes("https://www.youtube-nocookie.com"));
    assert.equal(nextConfig.poweredByHeader, false);
  } finally {
    if (previous === undefined) delete process.env.NODE_ENV; else process.env.NODE_ENV = previous;
  }
});

test("private API responses bypass every CDN cache while static search remains cacheable", async () => {
  const { config } = await import("../vercel.mjs");
  const rule = config.headers.find((item) => item.source.startsWith("/api/:endpoint("));
  assert.ok(rule);
  for (const endpoint of ["admin-login", "admin-logout", "admin-messages", "contact", "health", "revalidate"]) {
    assert.ok(rule.source.includes(endpoint));
  }
  assert.ok(!rule.source.includes("arama"));
  const headers = Object.fromEntries(rule.headers.map(({ key, value }) => [key, value]));
  for (const key of ["Cache-Control", "CDN-Cache-Control", "Vercel-CDN-Cache-Control"]) {
    assert.match(headers[key], /no-store/);
  }

  const authRule = config.headers.find((item) => item.source === "/api/auth/:path*");
  assert.ok(authRule);
  const authHeaders = Object.fromEntries(authRule.headers.map(({ key, value }) => [key, value]));
  for (const key of ["Cache-Control", "CDN-Cache-Control", "Vercel-CDN-Cache-Control"]) {
    assert.match(authHeaders[key], /no-store/);
  }
});

test("versioned build assets use browser caching without freezing pages or fund data", async () => {
  const { config } = await import("../vercel.mjs");
  const cacheForPath = (pathname) => config.headers
    .filter((rule) => match(rule.source)(pathname))
    .flatMap((rule) => rule.headers)
    .filter((header) => header.key.toLowerCase() === "cache-control")
    .at(-1)?.value;

  for (const pathname of [
    "/_next/static/chunks/066_9qs-fr7km.js",
    "/_next/static/chunks/3fxicq_o_lj2t.css",
    "/_next/static/media/font.5c73eaf1.woff2",
  ]) {
    assert.equal(cacheForPath(pathname), "public, max-age=31536000, immutable", pathname);
  }
  for (const pathname of [
    "/", "/haberler", "/haber/ornek-haber", "/fonlar/tly",
    "/data/fonlar/history-bundles/00.json", "/api/arama",
    "/sitemap.xml", "/news-sitemap.xml", "/_next/static-like/file.js",
  ]) {
    assert.equal(cacheForPath(pathname), undefined, pathname);
  }
  for (const pathname of ["/api/auth/session", "/api/contact"]) {
    assert.equal(cacheForPath(pathname), "private, no-store", pathname);
  }
});

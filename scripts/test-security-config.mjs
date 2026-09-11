import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import test from "node:test";
import { fileURLToPath } from "node:url";

const { match } = createRequire(import.meta.url)("next/dist/compiled/path-to-regexp");
const root = fileURLToPath(new URL("../", import.meta.url));

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
    "/data/fonlar/history-bundles/00.json",
  ]) {
    assert.equal(cacheForPath(pathname), "public, max-age=31536000, immutable", pathname);
  }
  assert.equal(cacheForPath("/manifest.webmanifest"), "public, max-age=86400");
  assert.equal(cacheForPath("/fonlar/etki-analizi"), "public, max-age=60, must-revalidate");
  for (const pathname of [
    "/", "/haberler", "/haber/ornek-haber", "/fonlar/tly",
    "/api/arama",
    "/sitemap.xml", "/news-sitemap.xml", "/_next/static-like/file.js",
  ]) {
    assert.equal(cacheForPath(pathname), undefined, pathname);
  }
  for (const pathname of ["/api/auth/session", "/api/contact"]) {
    assert.equal(cacheForPath(pathname), "private, no-store", pathname);
  }
});

test("Hobby function limit is respected by grouped API functions", async () => {
  const { config } = await import("../vercel.mjs");
  const functionCount = fs.readdirSync(path.join(root, "api"), {
    recursive: true,
    withFileTypes: true,
  }).filter((entry) => entry.isFile() && entry.name.endsWith(".ts")).length;
  assert.equal(functionCount, 4);
  assert.ok(!fs.existsSync(path.join(root, "api", "portfolio-market-prices.ts")));
  const legacyAuthDirectory = path.join(root, "api", "auth");
  assert.ok(
    !fs.existsSync(legacyAuthDirectory) ||
      fs.readdirSync(legacyAuthDirectory, { recursive: true }).every((entry) => !String(entry).endsWith(".ts")),
  );
  assert.deepEqual(
    config.rewrites.find((rule) => rule.source === "/api/auth/:action"),
    {
      source: "/api/auth/:action",
      destination: "/api/auth?hib_handler=:action",
    },
  );
  assert.deepEqual(
    config.rewrites.find((rule) => rule.source === "/api/portfolio-market-prices"),
    {
      source: "/api/portfolio-market-prices",
      destination: "/api/portfolio?hib_handler=market-prices",
    },
  );
});

test("standalone Vercel function dependencies use Node ESM import paths", () => {
  const serverModules = [
    "member-auth-api.ts",
    "member-auth.ts",
    "member-mail.ts",
    "member-portfolio.ts",
    "portfolio-market-prices.ts",
    "rate-limit.ts",
  ];

  for (const fileName of serverModules) {
    const source = fs.readFileSync(path.join(root, "lib", fileName), "utf8");
    for (const match of source.matchAll(/from\s+["'](\.{1,2}\/[^"']+)["']/g)) {
      assert.ok(match[1].endsWith(".js"), `${fileName}: ${match[1]}`);
    }
  }
});

import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);

test("deployed static pages receive production security headers", async () => {
  const previous = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  try {
    const { config } = await import("../vercel.mjs");
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
    assert.equal(require("../next.config.js").poweredByHeader, false);
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
});

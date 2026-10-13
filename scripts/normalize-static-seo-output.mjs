import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { match: createMatcher } = require("next/dist/compiled/path-to-regexp/index.js");
const root = process.cwd();
const outputRoot = path.join(root, "out");
const siteOrigin = "https://www.hocaileborsa.com";

const legacyCanonicalPaths = new Map([
  ["/halka-arz-takvimi", "/halka-arz/takvim"],
  [
    "/halka-arz/onayli-izahnameler/albayrak-hazir-beton",
    "/halka-arz/onayli-izahnameler/albayrak-hazir-beton-san-ve-tic",
  ],
]);

function filesUnder(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(fullPath) : [fullPath];
  });
}

function applyParams(destination, params) {
  return destination.replace(/:([A-Za-z0-9_]+)\*?/g, (_, key) => {
    const value = params[key];
    return Array.isArray(value) ? value.join("/") : String(value ?? "");
  });
}

function asciiFundPath(pathname) {
  return pathname.replace(/^\/fonlar\/([a-z0-9çğıöşü-]+)$/iu, (_, slug) => {
    const asciiSlug = slug
      .replace(/[İIı]/g, "i")
      .replace(/[Ğğ]/g, "g")
      .replace(/[Üü]/g, "u")
      .replace(/[Şş]/g, "s")
      .replace(/[Öö]/g, "o")
      .replace(/[Çç]/g, "c")
      .toLowerCase();
    return `/fonlar/${asciiSlug}`;
  });
}

export async function normalizeStaticSeoOutput(outRoot = outputRoot) {
  if (!fs.existsSync(outRoot)) {
    throw new Error(`Statik cikti bulunamadi: ${outRoot}`);
  }

  const nextConfig = (await import("../next.config.mjs")).default;
  const rules = (await nextConfig.redirects())
    .filter((rule) => !rule.has?.some((condition) => condition.type === "host"))
    .map((rule) => ({
      ...rule,
      matcher: createMatcher(rule.source, { decode: decodeURIComponent }),
    }));

  function finalPathname(initialPathname) {
    let decodedPathname = initialPathname;
    try {
      decodedPathname = decodeURIComponent(initialPathname);
    } catch {
      // Gecersiz percent-encoding varsa mevcut yolu koru; denetim bunu 404 sayar.
    }
    let pathname = asciiFundPath(decodedPathname);
    const visited = new Set();

    for (let step = 0; step < 10; step += 1) {
      if (visited.has(pathname)) break;
      visited.add(pathname);

      const legacyDestination = legacyCanonicalPaths.get(pathname);
      if (legacyDestination) {
        pathname = legacyDestination;
        continue;
      }

      const rule = rules.find((candidate) => candidate.matcher(pathname));
      if (!rule) break;
      const result = rule.matcher(pathname);
      const destination = new URL(
        applyParams(rule.destination, result.params),
        siteOrigin
      );
      if (destination.origin !== siteOrigin) break;
      pathname = destination.pathname;
    }

    return pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
  }

  let changedFiles = 0;
  let changedLinks = 0;
  let changedCanonicalUrls = 0;

  for (const file of filesUnder(outRoot).filter((item) => item.endsWith(".html"))) {
    const original = fs.readFileSync(file, "utf8");
    let html = original.replace(
      /(<link\b[^>]*\brel="canonical"[^>]*\bhref=")([^"]+)(")/gi,
      (tag, prefix, value, suffix) => {
        const url = new URL(value, siteOrigin);
        if (url.origin !== siteOrigin) return tag;
        const pathname = finalPathname(url.pathname);
        const normalized = `${siteOrigin}${pathname === "/" ? "" : pathname}`;
        if (normalized === value) return tag;
        changedCanonicalUrls += 1;
        return `${prefix}${normalized}${suffix}`;
      }
    );

    html = html.replace(/href="([^"]+)"/gi, (tag, value) => {
      if (!value.startsWith("/") && !value.startsWith(siteOrigin)) return tag;

      const url = new URL(value, siteOrigin);
      if (url.origin !== siteOrigin) return tag;
      const pathname = finalPathname(url.pathname);
      const normalized = value.startsWith(siteOrigin)
        ? `${siteOrigin}${pathname === "/" ? "" : pathname}${url.search}${url.hash}`
        : `${pathname}${url.search}${url.hash}`;
      if (normalized === value) return tag;
      changedLinks += 1;
      return `href="${normalized}"`;
    });

    if (html !== original) {
      fs.writeFileSync(file, html, "utf8");
      changedFiles += 1;
    }
  }

  console.log(
    `SEO cikti normalizasyonu: ${changedFiles} HTML, ${changedCanonicalUrls} canonical, ${changedLinks} dahili link.`
  );
}

if (path.resolve(process.argv[1] ?? "") === path.resolve(import.meta.filename)) {
  await normalizeStaticSeoOutput();
}

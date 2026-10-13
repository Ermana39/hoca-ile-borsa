import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { match: createMatcher } = require("next/dist/compiled/path-to-regexp/index.js");

const root = process.cwd();
const outputRoot = path.join(root, "out");
const siteOrigin = "https://www.hocaileborsa.com";

if (!fs.existsSync(outputRoot)) {
  console.error("SEO denetimi icin out klasoru bulunamadi. Once npm run build calistirin.");
  process.exit(1);
}

function filesUnder(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(fullPath) : [fullPath];
  });
}

function decodeHtml(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function getAttribute(tag, name) {
  const expression = new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, "i");
  const result = tag.match(expression);
  return decodeHtml(result?.[1] ?? result?.[2] ?? "");
}

function routeFromHtmlFile(file) {
  const relative = path.relative(outputRoot, file).replaceAll("\\", "/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) {
    return `/${relative.slice(0, -"/index.html".length)}`;
  }
  return `/${relative.replace(/\.html$/, "")}`;
}

function normalizedPathname(pathname) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "");
}

const allFiles = filesUnder(outputRoot);
const outputFiles = new Set(
  allFiles.map((file) => `/${path.relative(outputRoot, file).replaceAll("\\", "/")}`)
);
const pages = new Map(
  allFiles
    .filter((file) => file.endsWith(".html"))
    .map((file) => {
      const html = fs.readFileSync(file, "utf8");
      const tags = html.match(/<(?:meta|link)\b[^>]*>/gi) ?? [];
      const robotsTag = tags.find(
        (tag) => tag.startsWith("<meta") && getAttribute(tag, "name").toLowerCase() === "robots"
      );
      const canonicalTag = tags.find(
        (tag) => tag.startsWith("<link") && getAttribute(tag, "rel").toLowerCase() === "canonical"
      );
      return [
        routeFromHtmlFile(file),
        {
          file,
          html,
          robots: getAttribute(robotsTag ?? "", "content").toLowerCase(),
          canonical: getAttribute(canonicalTag ?? "", "href").replace(/\/$/, ""),
        },
      ];
    })
);

const nextConfig = (await import("../next.config.mjs")).default;
const redirectRules = (await nextConfig.redirects()).filter(
  (rule) => !rule.has?.some((condition) => condition.type === "host")
);
const compiledRedirects = redirectRules.map((rule) => ({
  ...rule,
  matcher: createMatcher(rule.source, { decode: decodeURIComponent }),
}));

function applyParams(destination, params) {
  return destination.replace(/:([A-Za-z0-9_]+)\*?/g, (_, key) => {
    const value = params[key];
    return Array.isArray(value) ? value.join("/") : String(value ?? "");
  });
}

function redirectFor(pathname) {
  for (const rule of compiledRedirects) {
    const result = rule.matcher(pathname);
    if (!result) continue;
    const destination = applyParams(rule.destination, result.params);
    const destinationUrl = new URL(destination, siteOrigin);
    return {
      source: rule.source,
      destination: destinationUrl.pathname,
    };
  }
  return null;
}

function outputTargetExists(pathname) {
  const normalized = normalizedPathname(pathname);
  if (pages.has(normalized)) return true;
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return false;
  }
  return outputFiles.has(decoded) || outputFiles.has(`${decoded}/index.html`);
}

function sitemapLocations(file) {
  if (!fs.existsSync(file)) return [];
  const xml = fs.readFileSync(file, "utf8");
  return [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) =>
    decodeHtml(match[1].trim())
  );
}

const sitemapFiles = ["sitemap.xml", "news-sitemap.xml"]
  .map((name) => path.join(outputRoot, name))
  .filter(fs.existsSync);
const sitemapUrls = sitemapFiles.flatMap(sitemapLocations);
const uniqueSitemapUrls = [...new Set(sitemapUrls)];
const sitemapIssues = {
  redirects: [],
  notFound: [],
  noindex: [],
  query: [],
  alternateCanonical: [],
  trailingSlash: [],
};

for (const value of uniqueSitemapUrls) {
  let url;
  try {
    url = new URL(value);
  } catch {
    sitemapIssues.notFound.push(value);
    continue;
  }

  const pathname = normalizedPathname(url.pathname);
  const page = pages.get(pathname);
  if (url.search) sitemapIssues.query.push(value);
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    sitemapIssues.trailingSlash.push(value);
  }
  if (redirectFor(pathname)) sitemapIssues.redirects.push(value);
  if (!page) {
    sitemapIssues.notFound.push(value);
    continue;
  }
  if (page.robots.includes("noindex")) sitemapIssues.noindex.push(value);
  if (page.canonical !== `${siteOrigin}${pathname === "/" ? "" : pathname}`) {
    sitemapIssues.alternateCanonical.push(value);
  }
}

const brokenInternalLinks = [];
const redirectInternalLinks = [];
const trailingSlashInternalLinks = [];

for (const [sourceRoute, page] of pages) {
  const anchorTags = page.html.match(/<a\b[^>]*>/gi) ?? [];
  for (const tag of anchorTags) {
    const href = getAttribute(tag, "href");
    if (!href || href.startsWith("#") || /^(?:mailto|tel|javascript|data):/i.test(href)) {
      continue;
    }

    let target;
    try {
      target = new URL(href, siteOrigin);
    } catch {
      continue;
    }
    if (target.origin !== siteOrigin) continue;

    const rawPathname = target.pathname;
    const pathname = normalizedPathname(rawPathname);
    if (rawPathname !== "/" && rawPathname.endsWith("/")) {
      trailingSlashInternalLinks.push({ sourceRoute, href });
    }

    const redirect = redirectFor(pathname);
    if (redirect) {
      redirectInternalLinks.push({ sourceRoute, href, destination: redirect.destination });
      continue;
    }
    if (!outputTargetExists(pathname)) {
      brokenInternalLinks.push({ sourceRoute, href });
    }
  }
}

const redirectChains = [];
const redirectLoops = [];
for (const rule of redirectRules) {
  if (rule.destination.includes(":")) continue;
  const firstUrl = new URL(rule.destination, siteOrigin);
  if (firstUrl.origin !== siteOrigin) continue;
  const second = redirectFor(normalizedPathname(firstUrl.pathname));
  if (!second) continue;
  if (second.destination === rule.source) {
    redirectLoops.push(`${rule.source} -> ${firstUrl.pathname} -> ${second.destination}`);
  } else {
    redirectChains.push(`${rule.source} -> ${firstUrl.pathname} -> ${second.destination}`);
  }
}

const report = {
  sitemap: {
    files: sitemapFiles.map((file) => path.basename(file)),
    totalEntries: sitemapUrls.length,
    uniqueUrls: uniqueSitemapUrls.length,
    redirectUrls: sitemapIssues.redirects.length,
    notFoundUrls: sitemapIssues.notFound.length,
    noindexUrls: sitemapIssues.noindex.length,
    queryUrls: sitemapIssues.query.length,
    alternateCanonicalUrls: sitemapIssues.alternateCanonical.length,
    trailingSlashUrls: sitemapIssues.trailingSlash.length,
  },
  redirects: {
    chains: redirectChains.length,
    loops: redirectLoops.length,
  },
  internalLinks: {
    broken: brokenInternalLinks.length,
    throughRedirect: redirectInternalLinks.length,
    trailingSlash: trailingSlashInternalLinks.length,
  },
};

console.log(JSON.stringify(report, null, 2));

const issueGroups = [
  ["Sitemap redirect", sitemapIssues.redirects],
  ["Sitemap 404", sitemapIssues.notFound],
  ["Sitemap noindex", sitemapIssues.noindex],
  ["Sitemap query", sitemapIssues.query],
  ["Sitemap farkli canonical", sitemapIssues.alternateCanonical],
  ["Sitemap trailing slash", sitemapIssues.trailingSlash],
  ["Redirect chain", redirectChains],
  ["Redirect loop", redirectLoops],
  ["Dahili 404", brokenInternalLinks.map((item) => `${item.sourceRoute} -> ${item.href}`)],
  ["Dahili redirect", redirectInternalLinks.map((item) => `${item.sourceRoute} -> ${item.href} -> ${item.destination}`)],
  ["Dahili trailing slash", trailingSlashInternalLinks.map((item) => `${item.sourceRoute} -> ${item.href}`)],
];
const failures = issueGroups.filter(([, values]) => values.length > 0);

for (const [label, values] of failures) {
  console.error(`\n${label} (${values.length}):`);
  for (const value of values.slice(0, 25)) console.error(`- ${value}`);
}

if (failures.length > 0) process.exit(1);
console.log("SEO sitemap, yonlendirme ve dahili link denetimi basarili.");

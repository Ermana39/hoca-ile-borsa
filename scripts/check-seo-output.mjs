import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appOutput = path.join(root, ".next", "server", "app");
const siteUrl = "https://www.hocaileborsa.com";

if (!fs.existsSync(appOutput)) {
  console.error("SEO çıktısı bulunamadı. Önce npm run build çalıştırın.");
  process.exit(1);
}

function filesUnder(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(fullPath) : [fullPath];
  });
}

function decode(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function match(html, pattern) {
  return decode(html.match(pattern)?.[1]?.trim() || "");
}

function stripTags(value) {
  return decode(
    value
      .replace(/<!--.*?-->/gs, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function jsonLdItems(html) {
  const scripts = [
    ...html.matchAll(
      /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
    ),
  ];
  const items = [];

  function add(value) {
    if (Array.isArray(value)) {
      for (const item of value) add(item);
      return;
    }
    if (!value || typeof value !== "object") return;
    items.push(value);
    if (Array.isArray(value["@graph"])) add(value["@graph"]);
  }

  for (const script of scripts) {
    try {
      add(JSON.parse(script[1]));
    } catch {
      // The invalid block is reported below through the page-level marker.
      items.push({ "@type": "InvalidJsonLd" });
    }
  }
  return items;
}

function routeFromFile(file) {
  const relative = path.relative(appOutput, file).replaceAll("\\", "/");
  return relative.replace(/(?:\/index)?\.html$/, "").replace(/^index$/, "");
}

function category(route) {
  if (/^haber\//.test(route)) return "haber";
  if (/^fonlar(?:\/|$)/.test(route)) return "fonlar";
  if (/^halka-arz(?:\/|$)/.test(route)) return "halka-arz";
  if (/^hisse(?:\/|$)/.test(route)) return "hisse";
  if (/^borsa(?:\/|$)/.test(route)) return "borsa";
  return undefined;
}

const pages = filesUnder(appOutput)
  .filter((file) => file.endsWith(".html"))
  .map((file) => {
    const html = fs.readFileSync(file, "utf8");
    const route = routeFromFile(file);
    return {
      route,
      category: category(route),
      title: match(html, /<title>([\s\S]*?)<\/title>/i),
      description: match(
        html,
        /<meta\s+name="description"\s+content="([^"]*)"/i
      ),
      canonical: match(
        html,
        /<link\s+rel="canonical"\s+href="([^"]*)"/i
      ).replace(/\/$/, ""),
      noindex: /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html),
      h1Count: (html.match(/<h1\b/gi) || []).length,
      h1: stripTags(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || ""),
      jsonLd: jsonLdItems(html),
    };
  })
  .filter((page) => page.category);

const indexable = pages.filter((page) => !page.noindex);
const critical = [];

for (const page of indexable) {
  const expectedCanonical = `${siteUrl}${page.route ? `/${page.route}` : ""}`;
  if (!page.title) critical.push(`${page.route}: title eksik`);
  if (!page.description) critical.push(`${page.route}: description eksik`);
  if (page.h1Count !== 1) {
    critical.push(`${page.route}: H1 sayısı ${page.h1Count}`);
  }
  if (!page.canonical) {
    critical.push(`${page.route}: canonical eksik`);
  } else if (page.canonical !== expectedCanonical) {
    critical.push(
      `${page.route}: canonical ${page.canonical} (beklenen ${expectedCanonical})`
    );
  }
}

const duplicateGroups = new Map();
for (const page of indexable) {
  if (!page.title) continue;
  const routes = duplicateGroups.get(page.title) || [];
  routes.push(page.route);
  duplicateGroups.set(page.title, routes);
}
const duplicates = [...duplicateGroups.entries()].filter(
  ([, routes]) => routes.length > 1
);
const longTitles = indexable
  .filter((page) => page.title.length > 65)
  .sort((a, b) => b.title.length - a.title.length);
const descriptionOutliers = indexable.filter(
  (page) => page.description.length < 120 || page.description.length > 170
);
const descriptionTargetOutliers = indexable.filter(
  (page) => page.description.length < 140 || page.description.length > 160
);
const articleSchemaIssues = [];
const h1TopicIssues = [];

function topicTokens(value) {
  const stopWords = new Set([
    "halka",
    "arz",
    "fonu",
    "hisse",
    "haber",
    "analizi",
    "bilgileri",
    "güncel",
  ]);
  return new Set(
    value
      .replace(/[İI]/g, "i")
      .toLocaleLowerCase("tr-TR")
      .replace(/[^a-z0-9çğıöşü]+/giu, " ")
      .split(" ")
      .filter((token) => token.length >= 3 && !stopWords.has(token))
  );
}

for (const page of indexable) {
  const titleTokens = topicTokens(page.title);
  const h1Tokens = topicTokens(page.h1);
  if (
    titleTokens.size > 0 &&
    h1Tokens.size > 0 &&
    ![...titleTokens].some((token) => h1Tokens.has(token))
  ) {
    h1TopicIssues.push(page);
  }

  for (const schema of page.jsonLd) {
    const types = Array.isArray(schema["@type"])
      ? schema["@type"]
      : [schema["@type"]];
    if (types.includes("InvalidJsonLd")) {
      articleSchemaIssues.push(`${page.route}: geçersiz JSON-LD`);
      continue;
    }
    if (!types.includes("Article") && !types.includes("NewsArticle")) continue;
    for (const field of [
      "headline",
      "description",
      "datePublished",
      "dateModified",
    ]) {
      if (!schema[field]) {
        articleSchemaIssues.push(`${page.route}: ${field} eksik`);
      }
    }
    for (const field of ["datePublished", "dateModified"]) {
      if (schema[field] && Number.isNaN(Date.parse(schema[field]))) {
        articleSchemaIssues.push(`${page.route}: ${field} geçersiz`);
      }
    }
  }
}

for (const name of ["haber", "fonlar", "halka-arz", "hisse", "borsa"]) {
  const rows = indexable.filter((page) => page.category === name);
  const titlesInRange = rows.filter(
    (page) => page.title.length >= 45 && page.title.length <= 65
  ).length;
  const descriptionsInRange = rows.filter(
    (page) => page.description.length >= 140 && page.description.length <= 160
  ).length;
  const descriptionsUnder120 = rows.filter(
    (page) => page.description.length < 120
  ).length;
  const descriptionsOver170 = rows.filter(
    (page) => page.description.length > 170
  ).length;
  const titlesOver65 = rows.filter((page) => page.title.length > 65).length;
  console.log(
    `${name}: ${rows.length} sayfa, title 45-65: ${titlesInRange}, title >65: ${titlesOver65}, description 140-160: ${descriptionsInRange}, description <120/>170: ${descriptionsUnder120}/${descriptionsOver170}`
  );
}

console.log(`Yinelenen indexlenebilir title grubu: ${duplicates.length}`);
for (const [title, routes] of duplicates.slice(0, 10)) {
  console.log(`- ${title}: ${routes.join(", ")}`);
}
console.log(`65 karakteri aşan title: ${longTitles.length}`);
for (const page of longTitles.slice(0, 50)) {
  console.log(`- ${page.title.length} | /${page.route} | ${page.title}`);
}
console.log(`120-170 dışında kalan description: ${descriptionOutliers.length}`);
for (const page of descriptionOutliers.slice(0, 20)) {
  console.log(
    `- ${page.description.length} | /${page.route} | ${page.description}`
  );
}
console.log(`140-160 dışında kalan description: ${descriptionTargetOutliers.length}`);
for (const page of descriptionTargetOutliers.slice(0, 20)) {
  console.log(`- ${page.description.length} | /${page.route}`);
}
console.log(`H1/title konu uyumsuzluğu: ${h1TopicIssues.length}`);
for (const page of h1TopicIssues.slice(0, 20)) {
  console.log(`- /${page.route} | ${page.title} <> ${page.h1}`);
}
console.log(`Article yapılandırılmış veri sorunu: ${articleSchemaIssues.length}`);
for (const issue of articleSchemaIssues.slice(0, 30)) console.log(`- ${issue}`);

if (articleSchemaIssues.length > 0) {
  critical.push(...articleSchemaIssues);
}
if (h1TopicIssues.length > 0) {
  critical.push(
    ...h1TopicIssues.map((page) => `${page.route}: H1/title konu uyumsuzluğu`)
  );
}
if (duplicates.length > 0) {
  critical.push(...duplicates.map(([title]) => `Yinelenen title: ${title}`));
}
if (longTitles.length > 0) {
  critical.push(
    ...longTitles.map((page) => `${page.route}: title 65 karakteri aşıyor`)
  );
}
if (descriptionTargetOutliers.length > 0) {
  critical.push(
    ...descriptionTargetOutliers.map(
      (page) => `${page.route}: description 140-160 karakter dışında`
    )
  );
}

if (critical.length > 0) {
  console.error(`Kritik SEO çıktısı sorunu: ${critical.length}`);
  for (const issue of critical.slice(0, 30)) console.error(`- ${issue}`);
  process.exit(1);
}

console.log("Indexlenebilir sayfalarda title, description, tek H1 ve self-canonical doğrulandı.");

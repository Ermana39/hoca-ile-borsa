import { readFileSync, writeFileSync, readdirSync } from "fs";

const siteUrl = "https://www.hocaileborsa.com";
const authorId = `${siteUrl}/yazar/erman-hoca#person`;
const orgId = `${siteUrl}/#organization`;

function ensureImport(src) {
  if (src.includes('from "@/components/AuthorBox"')) return src;
  return src.replace(
    /import HaberIlgiliBolumler from "@\/components\/HaberIlgiliBolumler";\n/,
    (m) => m + 'import AuthorBox from "@/components/AuthorBox";\n'
  );
}

function insertAuthorBox(src) {
  // Insert <AuthorBox /> right before the closing </article>, with matching indentation.
  return src.replace(
    /([ \t]*)<\/article>/,
    (m, indent) => `${indent}  <AuthorBox />\n\n${m}`
  );
}

// --- haber pages ---
const haberDirs = readdirSync("app/haber", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => `app/haber/${d.name}/page.tsx`);

for (const f of haberDirs) {
  let src = readFileSync(f, "utf-8");
  let changed = false;

  // byline: "Hoca İle Borsa" span -> Link to author page
  if (src.includes('<span className="text-sm text-slate-500">Hoca İle Borsa</span>')) {
    src = src.replace(
      '<span className="text-sm text-slate-500">Hoca İle Borsa</span>',
      '<Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">\n                Erman Hoca\n              </Link>'
    );
    changed = true;
  }

  // JSON-LD author -> Person reference
  const authorRe = /author:\s*\{\s*"@type":\s*"Organization",\s*name:\s*"Hoca İle Borsa",\s*url:\s*"https:\/\/www\.hocaileborsa\.com",\s*\},/;
  if (authorRe.test(src)) {
    src = src.replace(
      authorRe,
      `author: { "@type": "Person", "@id": "${authorId}", name: "Erman Hoca", url: "${siteUrl}/yazar/erman-hoca" },`
    );
    changed = true;
  }

  // JSON-LD publisher -> add @id reference (keep rest as-is)
  const publisherRe = /publisher:\s*\{\s*"@type":\s*"Organization",\s*name:\s*"Hoca İle Borsa",\s*url:\s*"https:\/\/www\.hocaileborsa\.com",/;
  if (publisherRe.test(src) && !src.includes(`"@id": "${orgId}"`)) {
    src = src.replace(
      publisherRe,
      `publisher: {\n    "@type": "Organization",\n    "@id": "${orgId}",\n    name: "Hoca İle Borsa",\n    url: "${siteUrl}",`
    );
    changed = true;
  }

  if (changed) {
    src = ensureImport(src);
    src = insertAuthorBox(src);
    writeFileSync(f, src);
    console.log("haber updated:", f);
  }
}

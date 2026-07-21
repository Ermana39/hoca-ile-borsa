import fs from "node:fs";
import path from "node:path";

const VERSION = 1;
const rootDir = process.cwd();
const profilesDir = path.join(rootDir, "data", "hisseler");
const outputFile = path.join(rootDir, "data", "hisse-resmi-kaynaklar.json");
const checkedAt = new Date().toISOString().slice(0, 10);
const missingOnly = process.argv.includes("--missing-only");
const onlyCodes = new Set(
  process.argv
    .find((argument) => argument.startsWith("--codes="))
    ?.slice("--codes=".length)
    .split(",")
    .map((code) => code.trim().toLowerCase())
    .filter(Boolean) ?? []
);

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeUrl(value, base) {
  if (typeof value !== "string") return "";
  let candidate = value.trim().replace(/&amp;/gi, "&");
  if (!candidate || /^(?:mailto|tel|javascript|data):/i.test(candidate)) return "";
  if (!/^[a-z][a-z0-9+.-]*:/i.test(candidate) && !candidate.startsWith("/")) {
    candidate = `https://${candidate}`;
  }

  try {
    const url = new URL(candidate, base);
    if (!/^https?:$/.test(url.protocol)) return "";
    url.hash = "";
    return url.toString();
  } catch {
    return "";
  }
}

function rootDomain(hostname) {
  const parts = hostname.replace(/^www\./, "").split(".");
  const lastTwo = parts.slice(-2).join(".");
  const threePartSuffixes = new Set([
    "com.tr",
    "org.tr",
    "net.tr",
    "gen.tr",
    "biz.tr",
  ]);
  return threePartSuffixes.has(lastTwo)
    ? parts.slice(-3).join(".")
    : lastTwo;
}

function relatedHost(candidate, official) {
  try {
    return rootDomain(new URL(candidate).hostname) === rootDomain(new URL(official).hostname);
  } catch {
    return false;
  }
}

function investorScore(value) {
  const text = normalizeText(value);
  let score = 0;
  if (text.includes("yatirimci iliskileri")) score += 120;
  if (text.includes("investor relations")) score += 120;
  if (text.includes("yatirimci")) score += 55;
  if (text.includes("investor")) score += 55;
  if (text.includes("pay sahipleri")) score += 35;
  if (text.includes("mali bilgiler")) score += 15;
  if (text.includes("finansal bilgiler")) score += 15;
  if (text.includes("kurumsal yonetim")) score += 10;
  if (/gizlilik|privacy|kvkk|kariyer|career|iletisim|contact/.test(text)) score -= 80;
  return score;
}

function isInvestorRelationsValue(value) {
  const text = normalizeText(value);
  return (
    text.includes("yatirimci iliskileri") ||
    text.includes("investor relations") ||
    text.includes("pay sahipleri") ||
    /(?:^|[./_-])investor(?:[./_-]|$)/.test(text)
  );
}

function investorUrlScore(value) {
  try {
    const url = new URL(value);
    const hostname = normalizeText(url.hostname);
    const pathname = normalizeText(url.pathname);
    let score = 0;

    if (/^(?:investor|investors|yatirimci|yatirimcilar)\./.test(hostname)) {
      score += 240;
    }
    if (/yatirimci.?ilisk|investor.?relation/.test(pathname)) score += 220;
    if (/(?:^|\/)yatirimcilar?(?:\/|$)/.test(pathname)) score += 130;
    if (/yatirimci|investor/.test(pathname)) score += 70;

    return score;
  } catch {
    return 0;
  }
}

function looksLikeErrorUrl(value) {
  const text = normalizeText(value);
  return /(?:^|[/?=&_-])(?:404|not.?found|errorpath)(?:[/?=&_-]|$)/.test(text);
}

function pageHeadings(html) {
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "";
  return normalizeText(`${title} ${h1}`);
}

function extractAnchors(html, baseUrl) {
  const anchors = [];
  const pattern = /<a\b([^>]*?)>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = pattern.exec(html))) {
    const hrefMatch = match[1].match(
      /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i
    );
    const href = normalizeUrl(
      hrefMatch?.[1] || hrefMatch?.[2] || hrefMatch?.[3] || "",
      baseUrl
    );
    if (!href || /\.(?:pdf|docx?|xlsx?)(?:\?|$)/i.test(href)) continue;

    const label = normalizeText(match[2]);
    anchors.push({
      href,
      label,
      score: investorUrlScore(href) + investorScore(label),
    });
  }

  return anchors;
}

function extractPlainUrls(html, baseUrl) {
  const urls = [];
  const decoded = html.replace(/\\\//g, "/").replace(/&amp;/gi, "&");
  const matches = decoded.match(/https?:\/\/[^\s"'<>\\]+/gi) ?? [];

  for (const rawUrl of matches) {
    const href = normalizeUrl(rawUrl.replace(/[),.;]+$/, ""), baseUrl);
    if (!href || /\.(?:pdf|docx?|xlsx?)(?:\?|$)/i.test(href)) continue;
    urls.push({ href, label: "", score: investorUrlScore(href) });
  }

  return urls;
}

async function fetchText(url, timeoutMs = 12000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; HocaIleBorsaSourceVerifier/1.0; +https://www.hocaileborsa.com)",
        accept: "text/html,application/xhtml+xml",
      },
    });
    if (!response.ok) return null;
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return null;
    const html = (await response.text()).slice(0, 4_000_000);
    return { url: response.url, html };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function fetchRawText(url, timeoutMs = 9000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; HocaIleBorsaSourceVerifier/1.0; +https://www.hocaileborsa.com)",
        accept: "application/xml,text/xml,text/plain,text/html,*/*",
      },
    });
    if (!response.ok) return null;
    return {
      url: response.url,
      text: (await response.text()).slice(0, 8_000_000),
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function extractSitemapLocations(xml, baseUrl) {
  const locations = [];
  const matches = xml.matchAll(/<loc\b[^>]*>([\s\S]*?)<\/loc>/gi);

  for (const match of matches) {
    const value = match[1]
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
      .replace(/&amp;/gi, "&")
      .trim();
    const url = normalizeUrl(value, baseUrl);
    if (url) locations.push(url);
  }

  return locations;
}

async function discoverFromSitemaps(officialUrl) {
  const roots = [
    normalizeUrl("/sitemap.xml", officialUrl),
    normalizeUrl("/sitemap_index.xml", officialUrl),
  ];
  const rootResults = await Promise.all(
    roots.map((url) => fetchRawText(url))
  );
  const pageUrls = [];
  const childSitemaps = [];

  for (const result of rootResults.filter(Boolean)) {
    for (const location of extractSitemapLocations(result.text, result.url)) {
      if (/\.xml(?:\?|$)/i.test(location)) childSitemaps.push(location);
      else pageUrls.push(location);
    }
  }

  const childResults = await Promise.all(
    [...new Set(childSitemaps)].slice(0, 16).map((url) => fetchRawText(url))
  );
  for (const result of childResults.filter(Boolean)) {
    pageUrls.push(...extractSitemapLocations(result.text, result.url));
  }

  return [...new Set(pageUrls)]
    .filter((url) => relatedHost(url, officialUrl))
    .filter((url) => investorUrlScore(url) >= 70)
    .map((href) => ({ href, label: "", score: investorUrlScore(href) }))
    .sort((a, b) => b.score - a.score || a.href.length - b.href.length)
    .slice(0, 8);
}

function readProfiles() {
  return fs
    .readdirSync(profilesDir)
    .filter((file) => /^[a-z0-9]{2,6}\.json$/i.test(file))
    .map((file) => {
      try {
        const profile = JSON.parse(
          fs.readFileSync(path.join(profilesDir, file), "utf8")
        );
        const code = String(profile.kod || "").toLowerCase();
        return {
          code,
          website: normalizeUrl(profile.kurumsalBilgiler?.web || ""),
        };
      } catch {
        return null;
      }
    })
    .filter(
      (profile) =>
        profile?.code && (onlyCodes.size === 0 || onlyCodes.has(profile.code))
    );
}

function readExisting() {
  try {
    const parsed = JSON.parse(fs.readFileSync(outputFile, "utf8"));
    return parsed?.profiles && typeof parsed.profiles === "object"
      ? parsed.profiles
      : {};
  } catch {
    return {};
  }
}

async function discoverKapProfiles(codes) {
  const page = await fetchText("https://www.kap.org.tr/tr/sirketler/ALL", 25000);
  const result = new Map();
  if (!page) return result;

  const rows = page.html.match(/<tr\b[\s\S]*?<\/tr>/gi) ?? [];
  for (const row of rows) {
    const linkMatch = row.match(
      /href\s*=\s*["']([^"']*\/sirket-bilgileri\/(?:ozet|genel)\/[^"']+)["']/i
    );
    if (!linkMatch) continue;

    const cellTexts = (row.match(/<td\b[\s\S]*?<\/td>/gi) ?? []).map((cell) =>
      normalizeText(cell).trim().toUpperCase()
    );
    const code = codes.find((candidate) =>
      cellTexts.includes(candidate.toUpperCase())
    );
    if (!code) continue;

    const url = normalizeUrl(linkMatch[1], page.url).replace(
      "/sirket-bilgileri/ozet/",
      "/sirket-bilgileri/genel/"
    );
    result.set(code, url);
  }

  return result;
}

function investorCandidates(html, baseUrl, officialUrl) {
  if (!officialUrl) return [];

  return [...extractAnchors(html, baseUrl), ...extractPlainUrls(html, baseUrl)]
    .filter((candidate) => isInvestorRelationsValue(`${candidate.label} ${candidate.href}`))
    .filter((candidate) => relatedHost(candidate.href, officialUrl))
    .sort((a, b) => b.score - a.score || a.href.length - b.href.length);
}

async function validateInvestorPage(candidate) {
  const candidateHasDirectUrl = investorUrlScore(candidate.href) >= 70;
  const candidateHasDirectLabel = isInvestorRelationsValue(candidate.label || "");
  if (!candidateHasDirectUrl && !candidateHasDirectLabel) return "";

  const page = await fetchText(candidate.href, 7000);
  if (!page) return "";
  if (looksLikeErrorUrl(page.url)) return "";

  const headings = pageHeadings(page.html);
  const intro = normalizeText(page.html.slice(0, 12000));
  if (/sayfa bulunamadi|page not found|404 not found|error 404/.test(`${headings} ${intro}`)) {
    return "";
  }

  const finalUrlScore = investorUrlScore(page.url);
  const headingsConfirmPurpose = isInvestorRelationsValue(headings);
  const pageConfirmsPurpose = isInvestorRelationsValue(
    `${headings} ${page.html.slice(0, 350000)}`
  );

  if (!pageConfirmsPurpose) return "";
  if (finalUrlScore >= 70) return page.url;
  if (candidateHasDirectLabel && headingsConfirmPurpose) return page.url;
  return "";
}

async function discoverForProfile(profile, kapUrl) {
  const result = {
    resmiWeb: profile.website || undefined,
    kapSirketProfili: kapUrl || undefined,
    dogrulamaTarihi: checkedAt,
  };

  const candidateSets = [];
  if (kapUrl) {
    const kapPage = await fetchText(kapUrl);
    if (kapPage) {
      candidateSets.push(
        investorCandidates(kapPage.html, kapPage.url, profile.website)
      );
    }
  }

  if (profile.website) {
    const officialPage = await fetchText(profile.website);
    if (officialPage) {
      result.resmiWeb = officialPage.url;
      candidateSets.push(
        investorCandidates(
          officialPage.html,
          officialPage.url,
          officialPage.url
        )
      );
    }
  }

  const seen = new Set();
  const candidates = candidateSets
    .flat()
    .filter((candidate) => {
      if (seen.has(candidate.href)) return false;
      seen.add(candidate.href);
      return true;
    })
    .sort((a, b) => b.score - a.score || a.href.length - b.href.length)
    .slice(0, 6);

  for (const candidate of candidates) {
    const verified = await validateInvestorPage(candidate);
    if (verified) {
      result.yatirimciIliskileri = verified;
      return result;
    }
  }

  if (result.resmiWeb) {
    const commonPaths = [
      "/yatirimci-iliskileri/",
      "/tr/yatirimci-iliskileri/",
      "/kurumsal/yatirimci-iliskileri/",
      "/tr-tr/yatirimci-iliskileri/",
      "/tr/kurumsal/yatirimci-iliskileri/",
      "/yatirimci/",
      "/yatirimcilar/",
      "/tr/yatirimcilar/",
      "/kurumsal/yatirimcilar/",
      "/investor-relations/",
      "/en/investor-relations/",
      "/tr/investor-relations/",
      "/investors/",
    ];

    const verifiedCommonPaths = await Promise.all(
      commonPaths.map(async (pathname) => {
        const href = normalizeUrl(pathname, result.resmiWeb);
      const verified = await validateInvestorPage({ href, label: "" });
        return verified && relatedHost(verified, result.resmiWeb)
          ? verified
          : "";
      })
    );
    const verified = verifiedCommonPaths.find(Boolean);
    if (verified) {
      result.yatirimciIliskileri = verified;
      return result;
    }

    const sitemapCandidates = await discoverFromSitemaps(result.resmiWeb);
    for (const candidate of sitemapCandidates) {
      const sitemapVerified = await validateInvestorPage(candidate);
      if (sitemapVerified && relatedHost(sitemapVerified, result.resmiWeb)) {
        result.yatirimciIliskileri = sitemapVerified;
        return result;
      }
    }
  }

  return result;
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker())
  );
  return results;
}

const existing = readExisting();
const profiles = readProfiles().filter(
  (profile) => !missingOnly || !existing[profile.code]?.yatirimciIliskileri
);
const kapProfiles = await discoverKapProfiles(profiles.map((profile) => profile.code));

const discovered = await mapLimit(profiles, 8, async (profile, index) => {
  const sources = await discoverForProfile(profile, kapProfiles.get(profile.code));
  const investorState = sources.yatirimciIliskileri ? "IR bulundu" : "IR bulunamadı";
  console.log(`[${index + 1}/${profiles.length}] ${profile.code.toUpperCase()}: ${investorState}`);
  return [profile.code, sources];
});

const merged = { ...existing };
for (const [code, sources] of discovered) {
  const previousInvestorUrl = merged[code]?.yatirimciIliskileri;
  const previousManuallyVerified = merged[code]?.manuelDogrulandi === true;
  const previousOfficialUrl = merged[code]?.resmiWeb;
  const previousOfficialManuallyVerified =
    merged[code]?.resmiWebManuelDogrulandi === true;
  const previousKapProfile = merged[code]?.kapSirketProfili;
  const previousKapManuallyVerified =
    merged[code]?.kapProfiliManuelDogrulandi === true;
  const nextSources = { ...merged[code] };

  for (const [key, value] of Object.entries(sources)) {
    if (
      key === "yatirimciIliskileri" &&
      previousManuallyVerified &&
      previousInvestorUrl
    ) {
      continue;
    }
    if (
      key === "resmiWeb" &&
      previousOfficialManuallyVerified &&
      previousOfficialUrl
    ) {
      continue;
    }
    if (
      key === "kapSirketProfili" &&
      previousKapManuallyVerified &&
      previousKapProfile
    ) {
      continue;
    }
    if (value !== undefined && value !== "") {
      nextSources[key] = value;
    }
  }

  if (!sources.yatirimciIliskileri) {
    const officialUrl = nextSources.resmiWeb || sources.resmiWeb;
    const previousStillValid =
      previousInvestorUrl &&
      !looksLikeErrorUrl(previousInvestorUrl) &&
      (previousManuallyVerified ||
        (officialUrl &&
          relatedHost(previousInvestorUrl, officialUrl) &&
          isInvestorRelationsValue(previousInvestorUrl)));

    if (previousStillValid) {
      nextSources.yatirimciIliskileri = previousInvestorUrl;
    } else {
      delete nextSources.yatirimciIliskileri;
    }
  }

  merged[code] = nextSources;
}

const sortedProfiles = Object.fromEntries(
  Object.entries(merged).sort(([a], [b]) => a.localeCompare(b, "tr"))
);

fs.writeFileSync(
  outputFile,
  `${JSON.stringify(
    {
      version: VERSION,
      generatedAt: checkedAt,
      profiles: sortedProfiles,
    },
    null,
    2
  )}\n`,
  "utf8"
);

const investorCount = Object.values(sortedProfiles).filter(
  (profile) => profile.yatirimciIliskileri
).length;
const kapCount = Object.values(sortedProfiles).filter(
  (profile) => profile.kapSirketProfili
).length;

console.log(
  `Resmi kaynaklar kaydedildi: ${investorCount} yatırımcı ilişkileri, ${kapCount} KAP profili`
);

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { dizinDisiYolMu } from "@/lib/indexleme-politikasi";

const DEFAULT_BLOCKED_COUNTRIES = [
  "CN",
  "HK",
  "MO",
  "SG",
  "RU",
  "IN",
  "PK",
  "BR",
  "MX",
  "GB",
  "JP",
];
const SEARCH_BOT_ALLOWLIST =
  /googlebot|bingbot|slurp|duckduckbot|yandexbot|applebot(?!-extended)|adsbot-google|mediapartners-google/i;
const COSTLY_CRAWLER_DENYLIST =
  /ahrefsbot|semrushbot|mj12bot|dotbot|bytespider|gptbot|chatgpt-user|oai-searchbot|ccbot|claudebot|claude-web|anthropic-ai|perplexitybot|google-extended|applebot-extended|amazonbot|meta-externalagent|facebookbot|cohere-ai|diffbot|imagesiftbot|omgilibot|youbot|dataforseobot|serpstatbot|barkrowler|seekportbot|megaindex|zoominfobot|turnitinbot/i;

function blockedCountries() {
  const raw = process.env.BLOCKED_COUNTRY_CODES;
  const values = raw
    ? [
        ...DEFAULT_BLOCKED_COUNTRIES,
        ...raw.split(",").map((item) => item.trim().toUpperCase()),
      ]
    : DEFAULT_BLOCKED_COUNTRIES;

  return new Set(values.filter((item) => /^[A-Z]{2}$/.test(item)));
}

export function proxy(request: NextRequest) {
  let decodedPathname = request.nextUrl.pathname;
  try {
    decodedPathname = decodeURIComponent(decodedPathname);
  } catch {
    // Geçersiz yüzde kodlamalı istekler normal yönlendirme akışına bırakılır.
  }
  if (decodedPathname === "/halka-arz/taslak-izahnameler/özel") {
    return NextResponse.redirect(
      new URL(
        "/halka-arz/taslak-izahnameler/ozel-iskenderun-gelisim-hastanesi-san-ve-tic",
        request.url
      ),
      308
    );
  }

  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const userAgent = request.headers.get("user-agent") || "";
  const isAllowedSearchBot = SEARCH_BOT_ALLOWLIST.test(userAgent);

  // robots.txt is only advisory. Enforce the same policy before a crawler can
  // reach large prerendered pages and consume ISR read units. Search engines
  // and Google advertising crawlers remain explicitly allowed.
  if (!isAllowedSearchBot && COSTLY_CRAWLER_DENYLIST.test(userAgent)) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  if (
    country &&
    blockedCountries().has(country) &&
    !isAllowedSearchBot
  ) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  const response = NextResponse.next();
  if (dizinDisiYolMu(decodedPathname)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|news-sitemap.xml|ads.txt|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt|xml|json)$).*)",
  ],
};

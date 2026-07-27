import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
  "US",
  "GB",
  "JP",
];
const SEARCH_BOT_ALLOWLIST =
  /googlebot|bingbot|slurp|duckduckbot|yandexbot|applebot|adsbot-google|mediapartners-google/i;

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
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const userAgent = request.headers.get("user-agent") || "";

  if (
    country &&
    blockedCountries().has(country) &&
    !SEARCH_BOT_ALLOWLIST.test(userAgent)
  ) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|news-sitemap.xml|ads.txt|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt|xml|json)$).*)",
  ],
};

import { NextRequest, NextResponse } from "next/server";
import { kv, normalizePagePath } from "@/lib/kv";

function shouldSkip(request: NextRequest, pathname: string) {
  if (request.method !== "GET") return true;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/kontrol-paneli-4827") ||
    pathname.startsWith("/yonetim") ||
    pathname.startsWith("/giris") ||
    pathname.startsWith("/uye") ||
    pathname.startsWith("/profil") ||
    pathname.startsWith("/mesajlar") ||
    pathname.startsWith("/guvenlik-kayitlari")
  ) {
    return true;
  }

  if (
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest"
  ) {
    return true;
  }

  if (/\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff|woff2)$/i.test(pathname)) {
    return true;
  }

  const prefetch =
    request.headers.get("x-middleware-prefetch") ||
    request.headers.get("next-router-prefetch") ||
    request.headers.get("purpose");

  if (prefetch) return true;

  const secFetchDest = request.headers.get("sec-fetch-dest") || "";
  const accept = request.headers.get("accept") || "";

  const isHtmlRequest =
    secFetchDest === "document" || accept.includes("text/html");

  if (!isHtmlRequest) return true;

  return false;
}

export async function middleware(request: NextRequest) {
  const pathname = normalizePagePath(request.nextUrl.pathname);

  if (shouldSkip(request, pathname)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  try {
    if (!kv) {
      return response;
    }

    const ip =
      request.ip ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    const sessionKey = `pv:seen:${pathname}:${ip}`;
    const alreadySeen = await kv.get(sessionKey);

    if (!alreadySeen) {
      await kv.multi()
        .hincrby("stats:pageviews", pathname, 1)
        .set(sessionKey, "1", { ex: 60 * 30 })
        .exec();
    }
  } catch {
    return response;
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
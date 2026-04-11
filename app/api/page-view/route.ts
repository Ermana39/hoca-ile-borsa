import { NextRequest, NextResponse } from "next/server";
import { kv, normalizePagePath } from "@/lib/kv";

const STATS_KEY = "stats:pageviews:v2";

function shouldSkip(pathname: string, userAgent: string) {
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/kontrol-paneli-4827") ||
    pathname.startsWith("/yonetim") ||
    pathname.startsWith("/giris") ||
    pathname.startsWith("/uye") ||
    pathname.startsWith("/profil") ||
    pathname.startsWith("/mesajlar") ||
    pathname.startsWith("/guvenlik-kayitlari") ||
    pathname.startsWith("/wp-admin") ||
    pathname.startsWith("/wp-login")
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

  if (
    /\.(png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff|woff2)$/i.test(
      pathname
    )
  ) {
    return true;
  }

  const ua = userAgent.toLowerCase();

  if (
    ua.includes("bot") ||
    ua.includes("spider") ||
    ua.includes("crawler") ||
    ua.includes("curl") ||
    ua.includes("wget") ||
    ua.includes("python") ||
    ua.includes("scanner") ||
    ua.includes("headless")
  ) {
    return true;
  }

  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const pathname = normalizePagePath(body?.pathname);
    const userAgent = request.headers.get("user-agent") || "";

    if (shouldSkip(pathname, userAgent)) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    if (!kv) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    await kv.hincrby(STATS_KEY, pathname, 1);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
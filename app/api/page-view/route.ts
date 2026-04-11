import { NextRequest, NextResponse } from "next/server";
import { kv, normalizePagePath } from "@/lib/kv";

const STATS_KEY = "stats:pageviews:v2";
const DEDUPE_SECONDS = 15;

function getClientId(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const forwarded = request.headers.get("forwarded");
  if (forwarded) return forwarded;

  return "unknown";
}

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

    if (!pathname) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    if (shouldSkip(pathname, userAgent)) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    if (!kv) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const clientId = getClientId(request);
    const dedupeKey = `pv:dedupe:${clientId}:${pathname}`;

    const alreadyCounted = await kv.get(dedupeKey);

    if (alreadyCounted) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    await kv
      .multi()
      .hincrby(STATS_KEY, pathname, 1)
      .set(dedupeKey, "1", { ex: DEDUPE_SECONDS })
      .exec();

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
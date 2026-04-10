import { NextRequest, NextResponse } from "next/server";
import {
  addView,
  checkSimpleApiRateLimit,
  getAdminStatsPath,
  normalizePagePath,
  registerApiRequest,
} from "@/lib/page-stats";
import { isSameOriginRequest } from "@/lib/request-security";
import { addSecurityLog } from "@/lib/security-log";

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (!isSameOriginRequest(request)) {
      addSecurityLog("page_view_blocked", ip, "Geçersiz istek kaynağı");
      return NextResponse.json({ ok: false }, { status: 403 });
    }

    const limit = checkSimpleApiRateLimit(ip, "page-view");

    if (!limit.allowed) {
      addSecurityLog("page_view_rate_limit", ip, "Sayfa görüntüleme limiti");
      return NextResponse.json({ ok: false }, { status: 429 });
    }

    const body = await request.json();
    const pagePath = normalizePagePath(String(body?.path || "/"));
    const hiddenAdminPath = `/${getAdminStatsPath()}`;

    if (pagePath.startsWith(hiddenAdminPath)) {
      return NextResponse.json({ ok: true });
    }

    if (pagePath.startsWith("/yonetim")) {
      return NextResponse.json({ ok: true });
    }

    if (pagePath.startsWith("/api")) {
      return NextResponse.json({ ok: true });
    }

    registerApiRequest(ip, "page-view");
    addView(pagePath);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
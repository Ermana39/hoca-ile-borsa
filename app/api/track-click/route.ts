import { NextRequest, NextResponse } from "next/server";
import {
  addClick,
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
      addSecurityLog("track_click_blocked", ip, "Geçersiz istek kaynağı");
      return NextResponse.json({ ok: false }, { status: 403 });
    }

    const limit = checkSimpleApiRateLimit(ip, "track-click");

    if (!limit.allowed) {
      addSecurityLog("track_click_rate_limit", ip, "Tıklama limiti");
      return NextResponse.json({ ok: false }, { status: 429 });
    }

    const body = await request.json();

    const source = normalizePagePath(String(body?.source || "/"));
    const target = normalizePagePath(String(body?.target || "/"));
    const label = String(body?.label || "").trim();
    const hiddenAdminPath = `/${getAdminStatsPath()}`;

    if (!label) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    if (source.startsWith(hiddenAdminPath) || target.startsWith(hiddenAdminPath)) {
      return NextResponse.json({ ok: true });
    }

    if (source.startsWith("/yonetim") || target.startsWith("/yonetim")) {
      return NextResponse.json({ ok: true });
    }

    registerApiRequest(ip, "track-click");
    addClick(source, target, label);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
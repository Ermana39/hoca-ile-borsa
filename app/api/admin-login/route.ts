import { NextRequest, NextResponse } from "next/server";
import {
  clearLoginAttempts,
  getLoginRateLimitStatus,
  makeAdminToken,
  registerFailedLogin,
} from "@/lib/page-stats";
import { isSameOriginRequest } from "@/lib/request-security";
import { addSecurityLog } from "@/lib/security-log";

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (!isSameOriginRequest(request)) {
      addSecurityLog("admin_login_blocked", ip, "Geçersiz istek kaynağı");
      return NextResponse.json(
        { ok: false, message: "Geçersiz istek kaynağı." },
        { status: 403 }
      );
    }

    const rateLimit = getLoginRateLimitStatus(ip);

    if (!rateLimit.allowed) {
      addSecurityLog("admin_login_rate_limit", ip, "Çok fazla deneme");
      return NextResponse.json(
        {
          ok: false,
          message: `Çok fazla deneme yaptınız. ${rateLimit.retryAfterSeconds} saniye sonra tekrar deneyin.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const password = String(body?.password || "");
    const realPassword = process.env.STATS_ADMIN_PASSWORD || "";

    if (!realPassword || password !== realPassword) {
      registerFailedLogin(ip);
      addSecurityLog("admin_login_failed", ip, "Hatalı şifre");

      return NextResponse.json(
        {
          ok: false,
          message: "Şifre hatalı.",
        },
        { status: 401 }
      );
    }

    clearLoginAttempts(ip);
    addSecurityLog("admin_login_success", ip, "Başarılı giriş");

    const response = NextResponse.json({ ok: true });
    const isProduction = process.env.NODE_ENV === "production";

    response.cookies.set("hib_admin_token", makeAdminToken(), {
      httpOnly: true,
      sameSite: "strict",
      secure: isProduction,
      path: "/",
      maxAge: 60 * 30,
    });

    response.cookies.set("hib_admin_seen", String(Date.now()), {
      httpOnly: true,
      sameSite: "strict",
      secure: isProduction,
      path: "/",
      maxAge: 60 * 30,
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Giriş sırasında hata oluştu.",
      },
      { status: 400 }
    );
  }
}
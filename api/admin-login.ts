import crypto from "node:crypto";
import {
  clearLoginAttempts,
  getLoginRateLimitStatus,
  makeAdminToken,
  registerFailedLogin,
} from "../lib/page-stats";
import {
  cookieValue,
  getClientIp,
  jsonResponse,
} from "../lib/http-api";
import { isSameOriginRequest } from "../lib/request-security";

function passwordsMatch(input: string, expected: string) {
  const a = crypto.createHash("sha256").update(input).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return jsonResponse({ ok: false }, { status: 405 });
    }
    if (!isSameOriginRequest(request)) {
      return jsonResponse(
        { ok: false, message: "Geçersiz istek kaynağı." },
        { status: 403 },
      );
    }

    const ip = getClientIp(request);
    const rateLimit = getLoginRateLimitStatus(ip, 10);
    if (!rateLimit.allowed) {
      return jsonResponse(
        {
          ok: false,
          message: `Çok fazla deneme yaptınız. ${rateLimit.retryAfterSeconds} saniye sonra tekrar deneyin.`,
        },
        { status: 429 },
      );
    }

    try {
      const body = await request.json();
      const password = String(body?.password || "");
      const expected = process.env.STATS_ADMIN_PASSWORD || "";

      if (!expected || !passwordsMatch(password, expected)) {
        registerFailedLogin(ip);
        return jsonResponse(
          { ok: false, message: "Şifre hatalı." },
          { status: 401 },
        );
      }

      const token = makeAdminToken();
      if (!token) {
        return jsonResponse(
          { ok: false, message: "Sunucu yapılandırması eksik." },
          { status: 500 },
        );
      }

      clearLoginAttempts(ip);
      const headers = new Headers();
      const secure = process.env.NODE_ENV === "production";
      headers.append(
        "Set-Cookie",
        cookieValue("hib_admin_token", token, { maxAge: 1800, secure }),
      );
      headers.append(
        "Set-Cookie",
        cookieValue("hib_admin_seen", String(Date.now()), {
          maxAge: 1800,
          secure,
        }),
      );

      return jsonResponse({ ok: true }, { headers });
    } catch {
      return jsonResponse(
        { ok: false, message: "Giriş sırasında hata oluştu." },
        { status: 400 },
      );
    }
  },
};

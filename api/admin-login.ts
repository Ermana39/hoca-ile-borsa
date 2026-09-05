import crypto from "node:crypto";
import { makeAdminToken } from "../lib/admin-auth";
import {
  cookieValue,
  getClientIp,
  jsonResponse,
} from "../lib/http-api";
import { isSameOriginRequest } from "../lib/request-security";
import { consumeRateLimit, RateLimitUnavailableError } from "../lib/rate-limit";
import { readJsonObject, RequestBodyError } from "../lib/request-body";

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

    try {
      const ip = getClientIp(request);
      const rateLimit = await consumeRateLimit("admin-login", ip, 10, 5 * 60 * 1000);
      if (!rateLimit.allowed) {
        return jsonResponse(
          {
            ok: false,
            message: `Çok fazla deneme yaptınız. ${rateLimit.retryAfterSeconds} saniye sonra tekrar deneyin.`,
          },
          { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
        );
      }

      const body = await readJsonObject(request, 4096);
      if (typeof body.password !== "string" || !body.password || body.password.length > 1024) {
        throw new RequestBodyError("Şifre alanı geçersiz.");
      }
      const password = body.password;
      const expected = process.env.STATS_ADMIN_PASSWORD || "";

      if (!expected || !passwordsMatch(password, expected)) {
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
    } catch (error) {
      return jsonResponse(
        { ok: false, message: error instanceof RequestBodyError ? error.message : "Giriş sırasında hata oluştu." },
        { status: error instanceof RequestBodyError ? error.status : error instanceof RateLimitUnavailableError ? 503 : 500 },
      );
    }
  },
};

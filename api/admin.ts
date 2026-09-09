import crypto from "node:crypto";
import { isValidAdminToken, makeAdminToken } from "../lib/admin-auth.js";
import {
  cookieValue,
  getClientIp,
  getCookie,
  jsonResponse,
} from "../lib/http-api.js";
import { getMemberCounts } from "../lib/member-auth.js";
import { consumeRateLimit, RateLimitUnavailableError } from "../lib/rate-limit.js";
import { readJsonObject, RequestBodyError } from "../lib/request-body.js";
import { isSameOriginRequest } from "../lib/request-security.js";

function passwordsMatch(input: string, expected: string) {
  const a = crypto.createHash("sha256").update(input).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

export const adminLoginHandler = {
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
      const expected = process.env.STATS_ADMIN_PASSWORD || "";

      if (!expected || !passwordsMatch(body.password, expected)) {
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
        {
          ok: false,
          message: error instanceof RequestBodyError
            ? error.message
            : "Giriş sırasında hata oluştu.",
        },
        {
          status: error instanceof RequestBodyError
            ? error.status
            : error instanceof RateLimitUnavailableError
              ? 503
              : 500,
        },
      );
    }
  },
};

export const adminLogoutHandler = {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return jsonResponse({ ok: false }, { status: 405 });
    }
    if (!isSameOriginRequest(request)) {
      return jsonResponse({ ok: false }, { status: 403 });
    }

    const headers = new Headers();
    const secure = process.env.NODE_ENV === "production";
    headers.append(
      "Set-Cookie",
      cookieValue("hib_admin_token", "", { maxAge: 0, secure }),
    );
    headers.append(
      "Set-Cookie",
      cookieValue("hib_admin_seen", "", { maxAge: 0, secure }),
    );
    return jsonResponse({ ok: true }, { headers });
  },
};

export const adminMessagesHandler = {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    const token = getCookie(request, "hib_admin_token");
    if (!isValidAdminToken(token)) {
      return jsonResponse({ ok: false, messages: [] }, { status: 401 });
    }

    let memberStats: { active: number; pending: number } | null = null;
    try {
      memberStats = await getMemberCounts();
    } catch {
      // Redis gecici olarak erisilemese de yonetim ekrani acilabilsin.
    }

    return jsonResponse(
      { ok: true, messages: [], memberStats },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  },
};

const handlers = {
  login: adminLoginHandler,
  logout: adminLogoutHandler,
  messages: adminMessagesHandler,
} as const;

const adminRouter = {
  async fetch(request: Request) {
    const action = new URL(request.url).searchParams.get("hib_handler");
    const handler = action && action in handlers
      ? handlers[action as keyof typeof handlers]
      : null;
    return handler
      ? handler.fetch(request)
      : jsonResponse({ ok: false, message: "Geçersiz yönetim isteği." }, { status: 404 });
  },
};

export default adminRouter;

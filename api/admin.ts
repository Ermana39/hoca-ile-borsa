import crypto from "node:crypto";
import { isValidAdminToken, makeAdminToken } from "../lib/admin-auth.js";
import {
  cookieValue,
  getClientIp,
  getCookie,
  jsonResponse,
} from "../lib/http-api.js";
import { getAdminMemberList, getMemberCounts } from "../lib/member-auth.js";
import { consumeRateLimit, RateLimitUnavailableError } from "../lib/rate-limit.js";
import { readJsonObject, RequestBodyError } from "../lib/request-body.js";
import { isSameOriginRequest } from "../lib/request-security.js";

type AdminMemberData = {
  memberStats: { active: number; pending: number };
  members: Awaited<ReturnType<typeof getAdminMemberList>>;
};

function cookieHeaderFromResponse(response: Response) {
  const headers = response.headers as Headers & { getSetCookie?: () => string[] };
  const values = headers.getSetCookie?.() || [response.headers.get("set-cookie") || ""];
  return values
    .filter(Boolean)
    .map((value) => value.split(";", 1)[0])
    .join("; ");
}

function isAdminMemberData(value: unknown): value is AdminMemberData {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<AdminMemberData>;
  return (
    Number.isFinite(candidate.memberStats?.active) &&
    Number.isFinite(candidate.memberStats?.pending) &&
    Array.isArray(candidate.members)
  );
}

async function getDevelopmentMemberData(): Promise<AdminMemberData> {
  if (process.env.NODE_ENV !== "development") {
    throw new Error("Üye veri deposuna ulaşılamadı.");
  }

  const password = process.env.STATS_ADMIN_PASSWORD || "";
  if (!password) throw new Error("Yerel yönetim şifresi tanımlı değil.");

  const origin = "https://www.hocaileborsa.com";
  const loginResponse = await fetch(`${origin}/api/admin-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
    },
    body: JSON.stringify({ password }),
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
  });
  const cookie = cookieHeaderFromResponse(loginResponse);
  if (!loginResponse.ok || !cookie) {
    throw new Error("Canlı yönetim oturumu açılamadı.");
  }

  const response = await fetch(`${origin}/api/admin-messages`, {
    headers: { Cookie: cookie },
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !isAdminMemberData(payload)) {
    throw new Error("Canlı üye listesi okunamadı.");
  }

  return {
    memberStats: payload.memberStats,
    members: payload.members,
  };
}

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

    try {
      const [memberStats, members] = await Promise.all([
        getMemberCounts(),
        getAdminMemberList(),
      ]);
      return jsonResponse(
        { ok: true, messages: [], memberStats, members },
        { headers: { "Cache-Control": "private, no-store" } },
      );
    } catch (storeError) {
      console.warn("[admin-members] Üye veri deposu okunamadı.", {
        name: storeError instanceof Error ? storeError.name : "UnknownError",
      });
      try {
        const { memberStats, members } = await getDevelopmentMemberData();
        return jsonResponse(
          { ok: true, messages: [], memberStats, members },
          { headers: { "Cache-Control": "private, no-store" } },
        );
      } catch (fallbackError) {
        console.warn("[admin-members] Yerel üye listesi yedeği okunamadı.", {
          name: fallbackError instanceof Error ? fallbackError.name : "UnknownError",
        });
        return jsonResponse(
          {
            ok: false,
            authorized: true,
            message: "Üye listesi şu anda okunamıyor. Lütfen yeniden deneyin.",
          },
          {
            status: 503,
            headers: { "Cache-Control": "private, no-store" },
          },
        );
      }
    }
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

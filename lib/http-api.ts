export function jsonResponse(
  body: unknown,
  init: ResponseInit = {},
): Response {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  if (!headers.has("Cache-Control")) {
    headers.set("Cache-Control", "private, no-store");
  }
  headers.set("X-Content-Type-Options", "nosniff");

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}

export function getClientIp(request: Request): string {
  // Vercel overwrites these headers at its edge. On a direct/local server,
  // arbitrary forwarded headers must not create a fresh rate-limit identity.
  // https://vercel.com/docs/headers/request-headers
  if (process.env.VERCEL !== "1") return "unknown";

  const ip = (
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for") ??
    ""
  ).trim();
  const version = isIP(ip);
  if (version === 4) return ip;
  if (version === 6) return new URL(`http://[${ip}]/`).hostname.slice(1, -1);
  return "unknown";
}

export function getCookie(request: Request, name: string): string | undefined {
  const cookieHeader = request.headers.get("cookie") || "";

  for (const item of cookieHeader.split(";")) {
    const separator = item.indexOf("=");
    if (separator < 0) continue;
    if (item.slice(0, separator).trim() !== name) continue;

    try {
      return decodeURIComponent(item.slice(separator + 1).trim());
    } catch {
      return item.slice(separator + 1).trim();
    }
  }

  return undefined;
}

export function cookieValue(
  name: string,
  value: string,
  options: { maxAge: number; secure?: boolean },
): string {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    `Max-Age=${options.maxAge}`,
    "HttpOnly",
    "SameSite=Strict",
  ];

  if (options.secure) parts.push("Secure");
  return parts.join("; ");
}
import { isIP } from "node:net";

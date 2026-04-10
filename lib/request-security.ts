import { NextRequest } from "next/server";

function normalizeOrigin(value: string) {
  return value.trim().replace(/\/+$/, "");
}

export function isSameOriginRequest(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  const forwardedProto = request.headers.get("x-forwarded-proto");

  if (!host) return false;

  const protocol =
    forwardedProto && (forwardedProto === "https" || forwardedProto === "http")
      ? forwardedProto
      : process.env.NODE_ENV === "production"
      ? "https"
      : "http";

  const expectedOrigin = normalizeOrigin(`${protocol}://${host}`);

  if (!origin) {
    const referer = request.headers.get("referer");
    if (!referer) return false;

    try {
      const refererOrigin = normalizeOrigin(new URL(referer).origin);
      return refererOrigin === expectedOrigin;
    } catch {
      return false;
    }
  }

  return normalizeOrigin(origin) === expectedOrigin;
}
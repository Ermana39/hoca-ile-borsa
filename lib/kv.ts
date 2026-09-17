import { Redis } from "@upstash/redis";

function getRedisConfig() {
  const candidates = [
    [process.env.AUTH_KV_KV_REST_API_URL, process.env.AUTH_KV_KV_REST_API_TOKEN],
    [process.env.AUTH_KV_REST_API_URL, process.env.AUTH_KV_REST_API_TOKEN],
    [process.env.KV_REST_API_URL, process.env.KV_REST_API_TOKEN],
    [process.env.UPSTASH_REDIS_REST_URL, process.env.UPSTASH_REDIS_REST_TOKEN],
  ] as const;

  for (const [rawUrl, rawToken] of candidates) {
    const url = rawUrl?.trim();
    const token = rawToken?.trim();
    if (url && token && /^https:\/\//i.test(url)) {
      return { url, token };
    }
  }

  return null;
}

const config = getRedisConfig();

export const kv = config
  ? new Redis({
      url: config.url,
      token: config.token,
    })
  : null;

export function normalizePagePath(input?: string | null) {
  if (!input) return "/";

  let value = String(input).trim();

  if (!value) return "/";

  value = value.replace(/^https?:\/\/[^/]+/i, "");

  if (!value.startsWith("/")) {
    value = `/${value}`;
  }

  value = value.replace(/\/{2,}/g, "/");

  if (value.length > 1 && value.endsWith("/")) {
    value = value.slice(0, -1);
  }

  return value || "/";
}

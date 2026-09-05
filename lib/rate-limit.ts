import { createHash } from "node:crypto";
import { kv } from "./kv";

type RateLimitResult = { allowed: boolean; retryAfterSeconds: number };
type LocalEntry = { count: number; expiresAt: number };
const localEntries = new Map<string, LocalEntry>();
const MAX_LOCAL_ENTRIES = 10_000;
let lastCleanup = 0;

// Reserve an attempt and set expiry in one atomic operation. Separate
// check/register calls let concurrent requests all pass before registration.
const RESERVE_ATTEMPT = `
local count = tonumber(redis.call("GET", KEYS[1]) or "0")
if count >= tonumber(ARGV[1]) then
  return {0, redis.call("PTTL", KEYS[1])}
end
count = redis.call("INCR", KEYS[1])
if count == 1 then redis.call("PEXPIRE", KEYS[1], ARGV[2]) end
return {1, redis.call("PTTL", KEYS[1])}
`;

export class RateLimitUnavailableError extends Error {}

export async function consumeRateLimit(
  scope: "admin-login" | "contact",
  identity: string,
  limit: number,
  windowMs: number,
): Promise<RateLimitResult> {
  const key = `hib:limit:${scope}:${createHash("sha256").update(identity).digest("hex")}`;

  if (kv) {
    try {
      const result = await kv.eval<[number, number]>(RESERVE_ATTEMPT, [key], [limit, windowMs]);
      if (!Array.isArray(result) || result.length !== 2 ||
          ![0, 1].includes(result[0]) || !Number.isFinite(result[1]) || result[1] < 0) {
        throw new Error("Invalid rate-limit response");
      }
      return {
        allowed: result[0] === 1,
        retryAfterSeconds: result[0] === 1 ? 0 : Math.max(1, Math.ceil(result[1] / 1000)),
      };
    } catch {
      // A configured shared limiter must never silently fail open.
      throw new RateLimitUnavailableError("İstek sınırı denetlenemedi.");
    }
  }

  // Serverless instances do not share memory. A local fallback in Vercel would
  // reset limits on cold starts and let parallel instances bypass the limit.
  if (process.env.VERCEL === "1") {
    throw new RateLimitUnavailableError("Paylaşılan istek sınırı yapılandırılmamış.");
  }

  // Local development / a single long-lived Node process only.
  const now = Date.now();
  if (now - lastCleanup >= 60_000 || localEntries.size >= MAX_LOCAL_ENTRIES) {
    for (const [entryKey, entry] of localEntries) {
      if (entry.expiresAt <= now) localEntries.delete(entryKey);
    }
    lastCleanup = now;
  }
  let entry = localEntries.get(key);
  if (!entry || entry.expiresAt <= now) {
    if (!entry && localEntries.size >= MAX_LOCAL_ENTRIES) {
      return { allowed: false, retryAfterSeconds: 60 };
    }
    entry = { count: 0, expiresAt: now + windowMs };
    localEntries.set(key, entry);
  }
  if (entry.count >= limit) {
    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((entry.expiresAt - now) / 1000)) };
  }
  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

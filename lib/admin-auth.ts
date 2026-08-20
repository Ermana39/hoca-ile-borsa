import crypto from "crypto";

type FailedLoginItem = {
  key: string;
  date: string;
  count: number;
  lastAttemptAt: string;
};

type RateLimitStatus = {
  allowed: boolean;
  remaining: number;
  count: number;
  limit: number;
  retryAfterSeconds: number;
};

const failedLogins: FailedLoginItem[] = [];
const ADMIN_TOKEN_MAX_AGE_MS = 1000 * 60 * 30;

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function resolveRateLimitArgs(
  arg1?: string | number,
  arg2?: number
): { scope: string; limit: number } {
  if (typeof arg1 === "number") {
    return { scope: "default", limit: arg1 };
  }

  if (typeof arg1 === "string") {
    return { scope: arg1, limit: typeof arg2 === "number" ? arg2 : 60 };
  }

  return { scope: "default", limit: typeof arg2 === "number" ? arg2 : 60 };
}

function resolveScopedKey(baseKey: string, scope?: string) {
  return scope && scope !== "default" ? `${scope}:${baseKey}` : baseKey;
}

function getAdminTokenSecret() {
  return process.env.STATS_ADMIN_SECRET || process.env.ADMIN_TOKEN_SECRET || "";
}

function signAdminPayload(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

export function registerFailedLogin(key: string) {
  const today = todayKey();
  const now = new Date().toISOString();

  const existing = failedLogins.find(
    (item) => item.key === key && item.date === today
  );

  if (existing) {
    existing.count += 1;
    existing.lastAttemptAt = now;
    return;
  }

  failedLogins.push({
    key,
    date: today,
    count: 1,
    lastAttemptAt: now,
  });
}

export function getLoginRateLimitStatus(
  key: string,
  scopeOrLimit?: string | number,
  maybeLimit?: number
): RateLimitStatus {
  const { scope, limit } = resolveRateLimitArgs(scopeOrLimit, maybeLimit);
  const compoundKey = resolveScopedKey(key, scope);
  const today = todayKey();
  const existing = failedLogins.find(
    (item) => item.key === compoundKey && item.date === today
  );
  const count = existing?.count || 0;
  const allowed = count < limit;

  return {
    allowed,
    remaining: Math.max(0, limit - count),
    count,
    limit,
    retryAfterSeconds: allowed ? 0 : 300,
  };
}

export function clearLoginAttempts(key: string) {
  for (let index = failedLogins.length - 1; index >= 0; index -= 1) {
    const item = failedLogins[index];
    if (item.key === key || item.key.endsWith(`:${key}`)) {
      failedLogins.splice(index, 1);
    }
  }
}

export function makeAdminToken() {
  const secret = getAdminTokenSecret();
  if (!secret) return "";

  const issuedAt = String(Date.now());
  const signature = signAdminPayload(issuedAt, secret);
  return `${issuedAt}.${signature}`;
}

export function isValidAdminToken(token?: string | null) {
  const secret = getAdminTokenSecret();
  if (!secret || !token) return false;

  const dotIndex = token.indexOf(".");
  if (dotIndex <= 0) return false;

  const issuedAt = token.slice(0, dotIndex);
  const signature = token.slice(dotIndex + 1);
  const issuedAtMs = Number(issuedAt);

  if (!Number.isFinite(issuedAtMs)) return false;
  if (Date.now() - issuedAtMs > ADMIN_TOKEN_MAX_AGE_MS) return false;

  const expected = signAdminPayload(issuedAt, secret);
  if (signature.length !== expected.length) return false;

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(expected, "hex")
    );
  } catch {
    return false;
  }
}

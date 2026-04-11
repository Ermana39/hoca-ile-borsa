import crypto from "crypto";

type ContactRateLimitEntry = {
  count: number;
  firstRequestTs: number;
  blockedUntilTs: number;
};

const rateLimitStore = new Map<string, ContactRateLimitEntry>();

function getClientKey(ip: string) {
  return crypto.createHash("sha256").update(ip || "unknown").digest("hex");
}

function cleanupRateLimitStore() {
  const now = Date.now();

  for (const [key, value] of rateLimitStore.entries()) {
    const expiredWindow = now - value.firstRequestTs > 1000 * 60 * 60;
    const blockExpired = value.blockedUntilTs <= now;

    if (expiredWindow && blockExpired) {
      rateLimitStore.delete(key);
    }
  }
}

export function checkContactRateLimit(ip: string) {
  cleanupRateLimitStore();

  const key = getClientKey(ip);
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current) {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.blockedUntilTs > now) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((current.blockedUntilTs - now) / 1000),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

export function registerContactRequest(ip: string) {
  cleanupRateLimitStore();

  const key = getClientKey(ip);
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || now - existing.firstRequestTs > 1000 * 60 * 60) {
    rateLimitStore.set(key, {
      count: 1,
      firstRequestTs: now,
      blockedUntilTs: 0,
    });
    return;
  }

  existing.count += 1;

  if (existing.count >= 5) {
    existing.blockedUntilTs = now + 1000 * 60 * 30;
  }

  rateLimitStore.set(key, existing);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function sanitizeText(value: string, maxLength: number) {
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

export function saveContactMessage(_data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
}) {
  return;
}
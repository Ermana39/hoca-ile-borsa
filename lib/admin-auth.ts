import crypto from "node:crypto";

const ADMIN_TOKEN_MAX_AGE_MS = 1000 * 60 * 30;

function getAdminTokenSecret() {
  return process.env.STATS_ADMIN_SECRET || process.env.ADMIN_TOKEN_SECRET || "";
}

function signAdminPayload(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

export function makeAdminToken() {
  const secret = getAdminTokenSecret();
  if (!secret) return "";

  const issuedAt = String(Date.now());
  return `${issuedAt}.${signAdminPayload(issuedAt, secret)}`;
}

export function isValidAdminToken(token?: string | null) {
  const secret = getAdminTokenSecret();
  if (!secret || !token) return false;

  const match = /^(\d{13})\.([a-f0-9]{64})$/.exec(token);
  if (!match) return false;
  const [, issuedAt, signature] = match;
  const age = Date.now() - Number(issuedAt);
  if (age < 0 || age >= ADMIN_TOKEN_MAX_AGE_MS) return false;

  const expected = signAdminPayload(issuedAt, secret);
  return crypto.timingSafeEqual(
    Buffer.from(signature, "hex"),
    Buffer.from(expected, "hex"),
  );
}

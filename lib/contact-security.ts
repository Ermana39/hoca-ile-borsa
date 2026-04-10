import fs from "fs";
import path from "path";
import crypto from "crypto";

type ContactRateLimitStore = Record<
  string,
  {
    count: number;
    firstRequestTs: number;
    blockedUntilTs: number;
  }
>;

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACT_RATE_LIMIT_FILE = path.join(DATA_DIR, "contact-rate-limit.json");
const CONTACT_MESSAGES_FILE = path.join(DATA_DIR, "contact-messages.json");

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(CONTACT_RATE_LIMIT_FILE)) {
    fs.writeFileSync(CONTACT_RATE_LIMIT_FILE, "{}", "utf8");
  }

  if (!fs.existsSync(CONTACT_MESSAGES_FILE)) {
    fs.writeFileSync(CONTACT_MESSAGES_FILE, "[]", "utf8");
  }
}

function readJsonFile<T>(filePath: string, fallback: T): T {
  ensureStore();

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJsonFile<T>(filePath: string, data: T) {
  ensureStore();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

function getClientKey(ip: string) {
  return crypto.createHash("sha256").update(ip || "unknown").digest("hex");
}

function readRateLimitStore() {
  const parsed = readJsonFile<ContactRateLimitStore>(CONTACT_RATE_LIMIT_FILE, {});
  return parsed && typeof parsed === "object" ? parsed : {};
}

function writeRateLimitStore(data: ContactRateLimitStore) {
  writeJsonFile(CONTACT_RATE_LIMIT_FILE, data);
}

function cleanupRateLimitStore(store: ContactRateLimitStore) {
  const now = Date.now();
  const cleaned: ContactRateLimitStore = {};

  for (const [key, value] of Object.entries(store)) {
    if (!value) continue;

    const expiredWindow = now - value.firstRequestTs > 1000 * 60 * 60;
    const blockExpired = value.blockedUntilTs <= now;

    if (expiredWindow && blockExpired) continue;

    cleaned[key] = value;
  }

  return cleaned;
}

export function checkContactRateLimit(ip: string) {
  const key = getClientKey(ip);
  const store = cleanupRateLimitStore(readRateLimitStore());
  writeRateLimitStore(store);

  const now = Date.now();
  const current = store[key];

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
  const key = getClientKey(ip);
  const store = cleanupRateLimitStore(readRateLimitStore());
  const now = Date.now();
  const existing = store[key];

  if (!existing || now - existing.firstRequestTs > 1000 * 60 * 60) {
    store[key] = {
      count: 1,
      firstRequestTs: now,
      blockedUntilTs: 0,
    };
  } else {
    existing.count += 1;

    if (existing.count >= 5) {
      existing.blockedUntilTs = now + 1000 * 60 * 30;
    }

    store[key] = existing;
  }

  writeRateLimitStore(store);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function sanitizeText(value: string, maxLength: number) {
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

export function saveContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
}) {
  const current = readJsonFile<any[]>(CONTACT_MESSAGES_FILE, []);

  current.push({
    ...data,
    createdAt: new Date().toISOString(),
  });

  writeJsonFile(CONTACT_MESSAGES_FILE, current);
}
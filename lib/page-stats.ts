import fs from "fs";
import path from "path";
import crypto from "crypto";

export type PageViewEvent = {
  path: string;
  ts: string;
};

export type ClickEvent = {
  source: string;
  target: string;
  label: string;
  ts: string;
};

type LoginAttemptStore = Record<
  string,
  {
    count: number;
    firstAttemptTs: number;
    blockedUntilTs: number;
  }
>;

type SimpleRateLimitStore = Record<
  string,
  {
    count: number;
    firstRequestTs: number;
    blockedUntilTs: number;
  }
>;

const DATA_DIR = path.join(process.cwd(), "data");
const PAGE_VIEWS_FILE = path.join(DATA_DIR, "page-views.json");
const CLICK_EVENTS_FILE = path.join(DATA_DIR, "click-events.json");
const LOGIN_ATTEMPTS_FILE = path.join(DATA_DIR, "login-attempts.json");
const API_RATE_LIMIT_FILE = path.join(DATA_DIR, "api-rate-limit.json");

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(PAGE_VIEWS_FILE)) fs.writeFileSync(PAGE_VIEWS_FILE, "[]", "utf8");
  if (!fs.existsSync(CLICK_EVENTS_FILE)) fs.writeFileSync(CLICK_EVENTS_FILE, "[]", "utf8");
  if (!fs.existsSync(LOGIN_ATTEMPTS_FILE)) fs.writeFileSync(LOGIN_ATTEMPTS_FILE, "{}", "utf8");
  if (!fs.existsSync(API_RATE_LIMIT_FILE)) fs.writeFileSync(API_RATE_LIMIT_FILE, "{}", "utf8");
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

export function normalizePagePath(pagePath: string) {
  if (!pagePath) return "/";

  let value = pagePath.trim();
  if (!value.startsWith("/")) value = `/${value}`;
  if (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1);

  return value;
}

export function readViews(): PageViewEvent[] {
  const parsed = readJsonFile<PageViewEvent[]>(PAGE_VIEWS_FILE, []);
  return Array.isArray(parsed)
    ? parsed.filter(
        (item) =>
          item &&
          typeof item.path === "string" &&
          typeof item.ts === "string" &&
          item.path.trim() !== ""
      )
    : [];
}

export function addView(pagePath: string) {
  const current = readViews();
  current.push({
    path: normalizePagePath(pagePath),
    ts: new Date().toISOString(),
  });
  writeJsonFile(PAGE_VIEWS_FILE, current);
}

export function readClicks(): ClickEvent[] {
  const parsed = readJsonFile<ClickEvent[]>(CLICK_EVENTS_FILE, []);
  return Array.isArray(parsed)
    ? parsed.filter(
        (item) =>
          item &&
          typeof item.source === "string" &&
          typeof item.target === "string" &&
          typeof item.label === "string" &&
          typeof item.ts === "string"
      )
    : [];
}

export function addClick(source: string, target: string, label: string) {
  const current = readClicks();
  current.push({
    source: normalizePagePath(source),
    target: normalizePagePath(target),
    label: label.trim(),
    ts: new Date().toISOString(),
  });
  writeJsonFile(CLICK_EVENTS_FILE, current);
}

export function makeAdminToken() {
  const secret = process.env.STATS_ADMIN_SECRET || "hib-default-secret";
  return crypto.createHmac("sha256", secret).update("hib-admin").digest("hex");
}

export function isValidAdminToken(token?: string) {
  if (!token) return false;
  return token === makeAdminToken();
}

export function getAdminStatsPath() {
  return process.env.ADMIN_STATS_PATH?.trim() || "kontrol-paneli-4827";
}

export function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export function startOfWeek() {
  const d = new Date();
  const day = d.getDay();
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function startOfMonth() {
  const d = new Date();
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function countViewsSince(events: PageViewEvent[], from: Date) {
  const fromMs = from.getTime();
  return events.filter((item) => new Date(item.ts).getTime() >= fromMs).length;
}

export function countClicksSince(events: ClickEvent[], from: Date) {
  const fromMs = from.getTime();
  return events.filter((item) => new Date(item.ts).getTime() >= fromMs).length;
}

export function groupViewsByPath(events: PageViewEvent[]) {
  const map = new Map<string, number>();

  for (const item of events) {
    map.set(item.path, (map.get(item.path) || 0) + 1);
  }

  return [...map.entries()]
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count);
}

export function groupViewsByPathSince(events: PageViewEvent[], from: Date) {
  const fromMs = from.getTime();
  return groupViewsByPath(events.filter((item) => new Date(item.ts).getTime() >= fromMs));
}

export function groupClicksByLabel(events: ClickEvent[]) {
  const map = new Map<string, { source: string; target: string; label: string; count: number }>();

  for (const item of events) {
    const key = `${item.source}__${item.target}__${item.label}`;
    const existing = map.get(key);

    if (existing) {
      existing.count += 1;
    } else {
      map.set(key, {
        source: item.source,
        target: item.target,
        label: item.label,
        count: 1,
      });
    }
  }

  return [...map.values()].sort((a, b) => b.count - a.count);
}

export function groupClicksByLabelSince(events: ClickEvent[], from: Date) {
  const fromMs = from.getTime();
  return groupClicksByLabel(events.filter((item) => new Date(item.ts).getTime() >= fromMs));
}

export function groupClicksBySource(events: ClickEvent[]) {
  const sourceMap = new Map<
    string,
    {
      source: string;
      total: number;
      items: { label: string; target: string; count: number }[];
    }
  >();

  for (const item of groupClicksByLabel(events)) {
    const existing = sourceMap.get(item.source);

    if (existing) {
      existing.total += item.count;
      existing.items.push({
        label: item.label,
        target: item.target,
        count: item.count,
      });
    } else {
      sourceMap.set(item.source, {
        source: item.source,
        total: item.count,
        items: [
          {
            label: item.label,
            target: item.target,
            count: item.count,
          },
        ],
      });
    }
  }

  return [...sourceMap.values()]
    .map((group) => ({
      ...group,
      items: group.items.sort((a, b) => b.count - a.count),
    }))
    .sort((a, b) => b.total - a.total);
}

export function groupClicksBySourceSince(events: ClickEvent[], from: Date) {
  const fromMs = from.getTime();
  return groupClicksBySource(events.filter((item) => new Date(item.ts).getTime() >= fromMs));
}

export function getDailySeries(events: PageViewEvent[], days = 30) {
  const list: { label: string; count: number }[] = [];
  const now = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const start = new Date(now);
    start.setDate(now.getDate() - i);
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(start.getDate() + 1);

    const count = events.filter((item) => {
      const ms = new Date(item.ts).getTime();
      return ms >= start.getTime() && ms < end.getTime();
    }).length;

    const label = new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
    }).format(start);

    list.push({ label, count });
  }

  return list;
}

function readLoginAttempts() {
  const parsed = readJsonFile<LoginAttemptStore>(LOGIN_ATTEMPTS_FILE, {});
  return parsed && typeof parsed === "object" ? parsed : {};
}

function writeLoginAttempts(data: LoginAttemptStore) {
  writeJsonFile(LOGIN_ATTEMPTS_FILE, data);
}

function cleanupLoginAttempts(store: LoginAttemptStore) {
  const now = Date.now();
  const cleaned: LoginAttemptStore = {};

  for (const [key, value] of Object.entries(store)) {
    if (!value) continue;

    const firstAttemptTooOld = now - value.firstAttemptTs > 1000 * 60 * 30;
    const blockExpired = value.blockedUntilTs <= now;

    if (firstAttemptTooOld && blockExpired) continue;

    cleaned[key] = value;
  }

  return cleaned;
}

export function getClientKey(ip: string) {
  return crypto.createHash("sha256").update(ip || "unknown").digest("hex");
}

export function getLoginRateLimitStatus(ip: string) {
  const key = getClientKey(ip);
  const store = cleanupLoginAttempts(readLoginAttempts());
  writeLoginAttempts(store);

  const current = store[key];
  const now = Date.now();

  if (!current) {
    return { allowed: true, retryAfterSeconds: 0, remaining: 5 };
  }

  if (current.blockedUntilTs > now) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((current.blockedUntilTs - now) / 1000),
      remaining: 0,
    };
  }

  return {
    allowed: true,
    retryAfterSeconds: 0,
    remaining: Math.max(0, 5 - current.count),
  };
}

export function registerFailedLogin(ip: string) {
  const key = getClientKey(ip);
  const store = cleanupLoginAttempts(readLoginAttempts());
  const now = Date.now();
  const existing = store[key];

  if (!existing || now - existing.firstAttemptTs > 1000 * 60 * 10) {
    store[key] = {
      count: 1,
      firstAttemptTs: now,
      blockedUntilTs: 0,
    };
  } else {
    existing.count += 1;

    if (existing.count >= 5) {
      existing.blockedUntilTs = now + 1000 * 60 * 15;
    }

    store[key] = existing;
  }

  writeLoginAttempts(store);
}

export function clearLoginAttempts(ip: string) {
  const key = getClientKey(ip);
  const store = cleanupLoginAttempts(readLoginAttempts());
  delete store[key];
  writeLoginAttempts(store);
}

function readApiRateLimit() {
  const parsed = readJsonFile<SimpleRateLimitStore>(API_RATE_LIMIT_FILE, {});
  return parsed && typeof parsed === "object" ? parsed : {};
}

function writeApiRateLimit(data: SimpleRateLimitStore) {
  writeJsonFile(API_RATE_LIMIT_FILE, data);
}

function cleanupApiRateLimit(store: SimpleRateLimitStore) {
  const now = Date.now();
  const cleaned: SimpleRateLimitStore = {};

  for (const [key, value] of Object.entries(store)) {
    if (!value) continue;

    const windowExpired = now - value.firstRequestTs > 1000 * 60 * 30;
    const blockExpired = value.blockedUntilTs <= now;

    if (windowExpired && blockExpired) continue;

    cleaned[key] = value;
  }

  return cleaned;
}

export function checkSimpleApiRateLimit(ip: string, action: "page-view" | "track-click") {
  const key = `${action}:${getClientKey(ip)}`;
  const store = cleanupApiRateLimit(readApiRateLimit());
  writeApiRateLimit(store);

  const current = store[key];
  const now = Date.now();
  const maxCount = action === "page-view" ? 240 : 400;
  const blockMinutes = action === "page-view" ? 10 : 5;

  if (!current) {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.blockedUntilTs > now) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((current.blockedUntilTs - now) / 1000),
    };
  }

  if (now - current.firstRequestTs > 1000 * 60 * 5) {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= maxCount) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((current.blockedUntilTs - now) / 1000),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

export function registerApiRequest(ip: string, action: "page-view" | "track-click") {
  const key = `${action}:${getClientKey(ip)}`;
  const store = cleanupApiRateLimit(readApiRateLimit());
  const now = Date.now();
  const blockMinutes = action === "page-view" ? 10 : 5;
  const maxCount = action === "page-view" ? 240 : 400;
  const existing = store[key];

  if (!existing || now - existing.firstRequestTs > 1000 * 60 * 5) {
    store[key] = {
      count: 1,
      firstRequestTs: now,
      blockedUntilTs: 0,
    };
  } else {
    existing.count += 1;

    if (existing.count >= maxCount) {
      existing.blockedUntilTs = now + 1000 * 60 * blockMinutes;
    }

    store[key] = existing;
  }

  writeApiRateLimit(store);
}
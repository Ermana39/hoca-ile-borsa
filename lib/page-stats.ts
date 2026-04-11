import crypto from "crypto";
import fs from "fs";
import path from "path";

type ViewsMap = Record<string, number>;

type ViewHistoryItem = {
  path: string;
  date: string;
  count: number;
};

type ClickItem = {
  source: string;
  path: string;
  label?: string;
  date: string;
  count: number;
};

type ApiRequestItem = {
  key: string;
  date: string;
  count: number;
};

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

function ensureDataDir() {
  const dirPath = path.join(process.cwd(), "data");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  return dirPath;
}

function getViewsFilePath() {
  return path.join(ensureDataDir(), "page-stats.json");
}

function getViewsHistoryFilePath() {
  return path.join(ensureDataDir(), "page-stats-history.json");
}

function getClicksFilePath() {
  return path.join(ensureDataDir(), "page-clicks.json");
}

function getApiRequestsFilePath() {
  return path.join(ensureDataDir(), "api-requests.json");
}

function getFailedLoginsFilePath() {
  return path.join(ensureDataDir(), "failed-logins.json");
}

function ensureJsonFile(filePath: string, fallback: string) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, fallback, "utf8");
  }
}

function readJsonFile<T>(filePath: string, fallback: T): T {
  try {
    ensureJsonFile(
      filePath,
      Array.isArray(fallback) ? "[]" : JSON.stringify(fallback, null, 2)
    );

    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJsonFile<T>(filePath: string, data: T) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch {
    // canlıda yazılamazsa sayfayı düşürme
  }
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function resolveRateLimitArgs(
  a?: string | number,
  b?: number
): { scope: string; limit: number } {
  if (typeof a === "number") {
    return { scope: "default", limit: a };
  }

  if (typeof a === "string") {
    return { scope: a, limit: typeof b === "number" ? b : 60 };
  }

  return { scope: "default", limit: typeof b === "number" ? b : 60 };
}

export function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function startOfWeek() {
  const now = startOfToday();
  const day = now.getDay();
  const diff = day === 0 ? 6 : day - 1;
  now.setDate(now.getDate() - diff);
  return now;
}

export function startOfMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

export const Ayin_baslangici = startOfMonth;
export const Haftanin_baslangici = startOfWeek;

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

export function getAdminStatsPath() {
  return path.join(ensureDataDir(), "admin-stats.json");
}

export function readViews(): ViewsMap {
  const filePath = getViewsFilePath();
  const data = readJsonFile<ViewsMap>(filePath, {});

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return {};
  }

  return data;
}

function readViewsHistory(): ViewHistoryItem[] {
  const filePath = getViewsHistoryFilePath();
  const data = readJsonFile<ViewHistoryItem[]>(filePath, []);

  if (!Array.isArray(data)) return [];

  return data.filter(
    (item) =>
      item &&
      typeof item.path === "string" &&
      typeof item.date === "string" &&
      typeof item.count === "number"
  );
}

export function readClicks(): ClickItem[] {
  const filePath = getClicksFilePath();
  const data = readJsonFile<ClickItem[]>(filePath, []);

  if (!Array.isArray(data)) return [];

  return data.filter(
    (item) =>
      item &&
      typeof item.source === "string" &&
      typeof item.path === "string" &&
      typeof item.date === "string" &&
      typeof item.count === "number"
  );
}

function readApiRequests(): ApiRequestItem[] {
  const filePath = getApiRequestsFilePath();
  const data = readJsonFile<ApiRequestItem[]>(filePath, []);

  if (!Array.isArray(data)) return [];

  return data.filter(
    (item) =>
      item &&
      typeof item.key === "string" &&
      typeof item.date === "string" &&
      typeof item.count === "number"
  );
}

function readFailedLogins(): FailedLoginItem[] {
  const filePath = getFailedLoginsFilePath();
  const data = readJsonFile<FailedLoginItem[]>(filePath, []);

  if (!Array.isArray(data)) return [];

  return data.filter(
    (item) =>
      item &&
      typeof item.key === "string" &&
      typeof item.date === "string" &&
      typeof item.count === "number" &&
      typeof item.lastAttemptAt === "string"
  );
}

export function addView(page: string) {
  try {
    const normalized = normalizePagePath(page);
    const viewsFile = getViewsFilePath();
    const historyFile = getViewsHistoryFilePath();

    const views = readViews();
    views[normalized] = (views[normalized] || 0) + 1;
    writeJsonFile(viewsFile, views);

    const history = readViewsHistory();
    const today = todayKey();

    const existing = history.find(
      (item) => item.path === normalized && item.date === today
    );

    if (existing) {
      existing.count += 1;
    } else {
      history.push({
        path: normalized,
        date: today,
        count: 1,
      });
    }

    writeJsonFile(historyFile, history);
  } catch {
    // hata olsa bile sayfa açılmaya devam etsin
  }
}

export function addClick(source: string, pathValue: string, label?: string) {
  try {
    const filePath = getClicksFilePath();
    const clicks = readClicks();
    const today = todayKey();
    const normalizedPath = normalizePagePath(pathValue);

    const existing = clicks.find(
      (item) =>
        item.source === source &&
        item.path === normalizedPath &&
        item.label === label &&
        item.date === today
    );

    if (existing) {
      existing.count += 1;
    } else {
      clicks.push({
        source,
        path: normalizedPath,
        label,
        date: today,
        count: 1,
      });
    }

    writeJsonFile(filePath, clicks);
  } catch {
    // sessiz geç
  }
}

export function registerApiRequest(key: string) {
  try {
    const filePath = getApiRequestsFilePath();
    const list = readApiRequests();
    const today = todayKey();

    const existing = list.find((item) => item.key === key && item.date === today);

    if (existing) {
      existing.count += 1;
    } else {
      list.push({
        key,
        date: today,
        count: 1,
      });
    }

    writeJsonFile(filePath, list);
  } catch {
    // sessiz geç
  }
}

export function checkSimpleApiRateLimit(
  key: string,
  scopeOrLimit?: string | number,
  maybeLimit?: number
): RateLimitStatus {
  try {
    const { scope, limit } = resolveRateLimitArgs(scopeOrLimit, maybeLimit);
    const today = todayKey();
    const compoundKey = `${scope}:${key}`;
    const list = readApiRequests();
    const existing = list.find(
      (item) => item.key === compoundKey && item.date === today
    );
    const count = existing?.count || 0;
    const allowed = count < limit;
    const remaining = Math.max(0, limit - count);

    return {
      allowed,
      remaining,
      count,
      limit,
      retryAfterSeconds: allowed ? 0 : 60,
    };
  } catch {
    const { limit } = resolveRateLimitArgs(scopeOrLimit, maybeLimit);

    return {
      allowed: true,
      remaining: limit,
      count: 0,
      limit,
      retryAfterSeconds: 0,
    };
  }
}

export function registerFailedLogin(key: string) {
  try {
    const filePath = getFailedLoginsFilePath();
    const list = readFailedLogins();
    const today = todayKey();
    const now = new Date().toISOString();

    const existing = list.find((item) => item.key === key && item.date === today);

    if (existing) {
      existing.count += 1;
      existing.lastAttemptAt = now;
    } else {
      list.push({
        key,
        date: today,
        count: 1,
        lastAttemptAt: now,
      });
    }

    writeJsonFile(filePath, list);
  } catch {
    // sessiz geç
  }
}

export function getLoginRateLimitStatus(
  key: string,
  scopeOrLimit?: string | number,
  maybeLimit?: number
): RateLimitStatus {
  try {
    const { scope, limit } = resolveRateLimitArgs(scopeOrLimit, maybeLimit);
    const today = todayKey();
    const compoundKey = `${scope}:${key}`;
    const list = readFailedLogins();
    const existing = list.find(
      (item) => item.key === compoundKey && item.date === today
    );
    const count = existing?.count || 0;
    const allowed = count < limit;
    const remaining = Math.max(0, limit - count);

    return {
      allowed,
      remaining,
      count,
      limit,
      retryAfterSeconds: allowed ? 0 : 300,
    };
  } catch {
    const { limit } = resolveRateLimitArgs(scopeOrLimit, maybeLimit);

    return {
      allowed: true,
      remaining: limit,
      count: 0,
      limit,
      retryAfterSeconds: 0,
    };
  }
}

export function clearLoginAttempts(key: string) {
  try {
    const filePath = getFailedLoginsFilePath();
    const list = readFailedLogins().filter((item) => !item.key.endsWith(`:${key}`) && item.key !== key);
    writeJsonFile(filePath, list);
  } catch {
    // sessiz geç
  }
}

export function makeAdminToken() {
  const secret =
    process.env.ADMIN_TOKEN_SECRET ||
    process.env.ADMIN_TOKEN ||
    process.env.NEXT_PUBLIC_ADMIN_TOKEN ||
    "hoca-ile-borsa-admin";

  const payload = `${secret}:${Date.now()}:${Math.random()}`;
  return crypto.createHash("sha256").update(payload).digest("hex");
}

export function isValidAdminToken(token?: string | null) {
  const expected =
    process.env.ADMIN_TOKEN ||
    process.env.NEXT_PUBLIC_ADMIN_TOKEN ||
    "";

  if (!expected) return false;
  if (!token) return false;

  return token === expected;
}

export function getViews(page: string) {
  try {
    const views = readViews();
    return views[normalizePagePath(page)] || 0;
  } catch {
    return 0;
  }
}

export function getAllViews() {
  try {
    return readViews();
  } catch {
    return {};
  }
}

export function countViewsSince(since: Date) {
  const sinceDate = toDateKey(since);
  const history = readViewsHistory();

  return history
    .filter((item) => item.date >= sinceDate)
    .reduce((sum, item) => sum + item.count, 0);
}

export function countClicksSince(since: Date) {
  const sinceDate = toDateKey(since);
  const clicks = readClicks();

  return clicks
    .filter((item) => item.date >= sinceDate)
    .reduce((sum, item) => sum + item.count, 0);
}

export function groupViewsByPath() {
  const views = readViews();

  return Object.entries(views)
    .map(([pathValue, count]) => ({
      path: pathValue,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function groupViewsByPathSince(since: Date) {
  const sinceDate = toDateKey(since);
  const history = readViewsHistory();
  const grouped = new Map<string, number>();

  for (const item of history) {
    if (item.date >= sinceDate) {
      grouped.set(item.path, (grouped.get(item.path) || 0) + item.count);
    }
  }

  return Array.from(grouped.entries())
    .map(([pathValue, count]) => ({
      path: pathValue,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function groupClicksBySource() {
  const clicks = readClicks();
  const grouped = new Map<string, number>();

  for (const item of clicks) {
    grouped.set(item.source, (grouped.get(item.source) || 0) + item.count);
  }

  return Array.from(grouped.entries())
    .map(([source, count]) => ({
      source,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function groupClicksBySourceSince(since: Date) {
  const sinceDate = toDateKey(since);
  const clicks = readClicks();
  const grouped = new Map<string, number>();

  for (const item of clicks) {
    if (item.date >= sinceDate) {
      grouped.set(item.source, (grouped.get(item.source) || 0) + item.count);
    }
  }

  return Array.from(grouped.entries())
    .map(([source, count]) => ({
      source,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function groupClicksByLabel() {
  const clicks = readClicks();
  const grouped = new Map<string, number>();

  for (const item of clicks) {
    const key = item.label || "(etiketsiz)";
    grouped.set(key, (grouped.get(key) || 0) + item.count);
  }

  return Array.from(grouped.entries())
    .map(([label, count]) => ({
      label,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function groupClicksByLabelSince(since: Date) {
  const sinceDate = toDateKey(since);
  const clicks = readClicks();
  const grouped = new Map<string, number>();

  for (const item of clicks) {
    if (item.date >= sinceDate) {
      const key = item.label || "(etiketsiz)";
      grouped.set(key, (grouped.get(key) || 0) + item.count);
    }
  }

  return Array.from(grouped.entries())
    .map(([label, count]) => ({
      label,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getDailySeries(since: Date) {
  const sinceDate = toDateKey(since);
  const viewHistory = readViewsHistory();
  const clicks = readClicks();

  const grouped = new Map<
    string,
    {
      date: string;
      views: number;
      clicks: number;
    }
  >();

  for (const item of viewHistory) {
    if (item.date >= sinceDate) {
      const current = grouped.get(item.date) || {
        date: item.date,
        views: 0,
        clicks: 0,
      };

      current.views += item.count;
      grouped.set(item.date, current);
    }
  }

  for (const item of clicks) {
    if (item.date >= sinceDate) {
      const current = grouped.get(item.date) || {
        date: item.date,
        views: 0,
        clicks: 0,
      };

      current.clicks += item.count;
      grouped.set(item.date, current);
    }
  }

  return Array.from(grouped.values()).sort((a, b) => a.date.localeCompare(b.date));
}
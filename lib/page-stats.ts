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
    const parsed = JSON.parse(raw) as T;
    return parsed;
  } catch {
    return fallback;
  }
}

function writeJsonFile<T>(filePath: string, data: T) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch {
    // Canlıda yazılamazsa sayfayı düşürme
  }
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
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

export function readViews(): ViewsMap {
  const filePath = getViewsFilePath();
  return readJsonFile<ViewsMap>(filePath, {});
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

export function addView(page: string) {
  try {
    const viewsFile = getViewsFilePath();
    const historyFile = getViewsHistoryFilePath();

    const views = readViews();
    views[page] = (views[page] || 0) + 1;
    writeJsonFile(viewsFile, views);

    const history = readViewsHistory();
    const today = todayKey();

    const existing = history.find((item) => item.path === page && item.date === today);

    if (existing) {
      existing.count += 1;
    } else {
      history.push({
        path: page,
        date: today,
        count: 1,
      });
    }

    writeJsonFile(historyFile, history);
  } catch {
    // Hata olsa bile sayfa açılmaya devam etsin
  }
}

export function addClick(source: string, pathValue: string, label?: string) {
  try {
    const filePath = getClicksFilePath();
    const clicks = readClicks();
    const today = todayKey();

    const existing = clicks.find(
      (item) =>
        item.source === source &&
        item.path === pathValue &&
        item.label === label &&
        item.date === today
    );

    if (existing) {
      existing.count += 1;
    } else {
      clicks.push({
        source,
        path: pathValue,
        label,
        date: today,
        count: 1,
      });
    }

    writeJsonFile(filePath, clicks);
  } catch {
    // Hata olsa bile sayfa açılmaya devam etsin
  }
}

export function getViews(page: string) {
  try {
    const views = readViews();
    return views[page] || 0;
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
  const sinceDate = since.toISOString().slice(0, 10);
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

export function groupClicksBySourceSince(since: Date) {
  const sinceDate = since.toISOString().slice(0, 10);
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

export function isValidAdminToken(token?: string | null) {
  const expected =
    process.env.ADMIN_TOKEN ||
    process.env.NEXT_PUBLIC_ADMIN_TOKEN ||
    "";

  if (!expected) return false;
  if (!token) return false;

  return token === expected;
}
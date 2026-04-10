import fs from "fs";
import path from "path";

type StatsData = Record<string, number>;

function getStatsFilePath() {
  return path.join(process.cwd(), "data", "page-stats.json");
}

function ensureStatsFile() {
  const filePath = getStatsFilePath();
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "{}", "utf8");
  }

  return filePath;
}

function readStats(): StatsData {
  try {
    const filePath = ensureStatsFile();
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw) as StatsData;

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    return parsed;
  } catch {
    return {};
  }
}

function writeStats(stats: StatsData) {
  try {
    const filePath = ensureStatsFile();
    fs.writeFileSync(filePath, JSON.stringify(stats, null, 2), "utf8");
  } catch {
    // Canlıda yazılamazsa sayfayı düşürme
  }
}

export function addView(page: string) {
  try {
    const stats = readStats();
    stats[page] = (stats[page] || 0) + 1;
    writeStats(stats);
  } catch {
    // Hata olsa bile sayfa açılmaya devam etsin
  }
}

export function getViews(page: string) {
  try {
    const stats = readStats();
    return stats[page] || 0;
  } catch {
    return 0;
  }
}

export function getAllViews() {
  try {
    return readStats();
  } catch {
    return {};
  }
}
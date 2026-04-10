import fs from "fs";
import path from "path";

export type SecurityLogItem = {
  type: string;
  ip: string;
  detail: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const LOG_FILE = path.join(DATA_DIR, "security-log.json");

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "[]", "utf8");
  }
}

export function readSecurityLogs(): SecurityLogItem[] {
  ensureStore();

  try {
    const raw = fs.readFileSync(LOG_FILE, "utf8");
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.type === "string" &&
          typeof item.ip === "string" &&
          typeof item.detail === "string" &&
          typeof item.createdAt === "string"
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  } catch {
    return [];
  }
}

export function addSecurityLog(type: string, ip: string, detail: string) {
  const logs = readSecurityLogs();

  logs.unshift({
    type,
    ip,
    detail,
    createdAt: new Date().toISOString(),
  });

  const trimmed = logs.slice(0, 1000);

  fs.writeFileSync(LOG_FILE, JSON.stringify(trimmed, null, 2), "utf8");
}
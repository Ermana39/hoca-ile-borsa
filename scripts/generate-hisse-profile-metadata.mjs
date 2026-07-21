import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const VERSION = 1;
const rootDir = process.cwd();
const profilesDir = path.join(rootDir, "data", "hisseler");
const outputFile = path.join(
  rootDir,
  "lib",
  "hisse-profile-metadata.generated.json"
);

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function validDate(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}

function readProfile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function getGitHistory() {
  try {
    return execFileSync(
      "git",
      [
        "log",
        "--format=@@@%H|%cI",
        "--name-status",
        "--",
        "data/hisseler",
      ],
      {
        cwd: rootDir,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
        maxBuffer: 1024 * 1024 * 40,
      }
    );
  } catch {
    return "";
  }
}

function parseGitHistory(raw) {
  const byFile = new Map();
  let currentCommit = null;

  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("@@@")) {
      const [hash, date] = line.slice(3).split("|");
      currentCommit = hash && date ? { hash, date } : null;
      continue;
    }

    if (!currentCommit) continue;

    const parts = rawLine.split("\t");
    if (parts.length < 2) continue;

    const status = parts[0].trim().slice(0, 1);
    const relativePath = toPosix(parts.at(-1).trim());
    if (!/^data\/hisseler\/[a-z0-9]{2,6}\.json$/i.test(relativePath)) {
      continue;
    }

    const historyKey = relativePath.toLowerCase();
    const entries = byFile.get(historyKey) ?? [];
    entries.push({
      hash: currentCommit.hash,
      date: currentCommit.date,
      status,
    });
    byFile.set(historyKey, entries);
  }

  return byFile;
}

function manualHistory(profile) {
  const entries = Array.isArray(profile?.degisiklikGecmisi)
    ? profile.degisiklikGecmisi
    : [];

  return entries
    .map((entry) => ({
      date: validDate(entry?.tarih),
      title:
        typeof entry?.baslik === "string" && entry.baslik.trim()
          ? entry.baslik.trim()
          : "Şirket künyesi güncellendi",
      description:
        typeof entry?.aciklama === "string" && entry.aciklama.trim()
          ? entry.aciklama.trim()
          : "Künye içeriğindeki şirket bilgileri gözden geçirildi.",
      source: "manual",
    }))
    .filter((entry) => entry.date);
}

function generatedHistory(commits) {
  const grouped = new Map();

  for (const commit of commits) {
    const date = validDate(commit.date);
    if (!date) continue;

    const day = String(commit.date).slice(0, 10);
    const current = grouped.get(day) ?? {
      date,
      created: false,
      commitCount: 0,
    };

    current.created ||= commit.status === "A";
    current.commitCount += 1;
    if (new Date(date).getTime() > new Date(current.date).getTime()) {
      current.date = date;
    }
    grouped.set(day, current);
  }

  return [...grouped.values()]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((entry) => ({
      date: entry.date,
      title: entry.created
        ? "Şirket künyesi yayımlandı"
        : "Şirket künyesi güncellendi",
      description: entry.created
        ? "Şirket profili, kurumsal bilgiler ve borsa künyesi veri setine eklendi."
        : "Şirket künyesindeki içerik veya dönemsel veriler gözden geçirilerek güncellendi.",
      source: "git",
    }));
}

function mergeHistory(manualEntries, generatedEntries) {
  const byKey = new Map();

  for (const entry of [...manualEntries, ...generatedEntries]) {
    const day = entry.date.slice(0, 10);
    const key = `${day}|${entry.title.toLocaleLowerCase("tr-TR")}`;
    if (!byKey.has(key)) byKey.set(key, entry);
  }

  return [...byKey.values()]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6)
    .map(({ date, title, description }) => ({ date, title, description }));
}

const gitHistory = parseGitHistory(getGitHistory());
const profiles = {};

const files = fs.existsSync(profilesDir)
  ? fs
      .readdirSync(profilesDir)
      .filter((file) => /^[a-z0-9]{2,6}\.json$/i.test(file))
      .sort((a, b) => a.localeCompare(b, "tr"))
  : [];

for (const file of files) {
  const filePath = path.join(profilesDir, file);
  const profile = readProfile(filePath);
  if (!profile?.kod) continue;

  const relativePath = toPosix(path.relative(rootDir, filePath));
  const commits = gitHistory.get(relativePath.toLowerCase()) ?? [];
  const manualEntries = manualHistory(profile);
  const generatedEntries = generatedHistory(commits);
  const history = mergeHistory(manualEntries, generatedEntries);

  const explicitVerification = validDate(
    profile?.veriDogrulama?.sonDogrulamaTarihi
  );
  const fallbackDate = history[0]?.date || validDate(fs.statSync(filePath).mtime.toISOString());
  const publishedAt = [...manualEntries, ...generatedEntries]
    .map((entry) => entry.date)
    .filter(Boolean)
    .sort()
    .at(0) || explicitVerification || fallbackDate;

  profiles[String(profile.kod).toLowerCase()] = {
    verifiedAt: explicitVerification || fallbackDate,
    publishedAt,
    history,
  };
}

const newestVerification = Object.values(profiles)
  .map((profile) => profile.verifiedAt)
  .filter(Boolean)
  .sort()
  .at(-1);

const output = {
  version: VERSION,
  generatedAt: newestVerification || new Date(0).toISOString(),
  profiles,
};

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`, "utf8");

console.log(`Hisse profil geçmişi oluşturuldu: ${Object.keys(profiles).length} şirket`);

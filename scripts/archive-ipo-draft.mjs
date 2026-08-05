import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data", "halka-arz");
const ARCHIVE_DIR = path.join(ROOT, "data", "halka-arz-taslak-arsivi");
const APPROVED_PAGE_DIR = path.join(
  ROOT,
  "app",
  "halka-arz",
  "onayli-izahnameler"
);
const RECOVER_ALL_FLAG = "--recover-approved";
const RECOVER_ONE_FLAG = "--recover";
const CHECK_ALL_FLAG = "--check-approved";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function gitOutput(args) {
  return execFileSync("git", args, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function historicalDraft(slug) {
  const relativePath = `data/halka-arz/${slug}.json`;
  let commits = [];

  try {
    commits = gitOutput(["log", "--format=%H", "--", relativePath])
      .split(/\r?\n/)
      .filter(Boolean);
  } catch {
    return null;
  }

  for (const commit of commits) {
    try {
      const data = JSON.parse(gitOutput(["show", `${commit}:${relativePath}`]));
      if (data?.seo?.contentStatus === "onayli") continue;

      return {
        data,
        source: {
          type: "git-history",
          commit,
          date: gitOutput(["show", "-s", "--format=%cs", commit]),
        },
      };
    } catch {
      // Dosyanın henüz bulunmadığı veya geçerli JSON olmadığı sürümü atla.
    }
  }

  return null;
}

function writeArchive(slug, data, source, overwrite = false) {
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  const target = path.join(ARCHIVE_DIR, `${slug}.json`);

  if (!overwrite && fs.existsSync(target)) {
    throw new Error(`${slug} için taslak arşivi zaten var.`);
  }

  const archive = {
    version: 1,
    slug,
    archivedAt: new Date().toISOString(),
    source,
    data,
  };

  fs.writeFileSync(target, `${JSON.stringify(archive, null, 2)}\n`, "utf8");
  return path.relative(ROOT, target);
}

function recoverApprovedDrafts() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((file) => file.endsWith(".json") && !file.startsWith("_"));

  let recovered = 0;
  let unavailable = 0;

  for (const file of files) {
    const slug = file.replace(/\.json$/, "");
    const current = readJson(path.join(DATA_DIR, file));
    if (current?.seo?.contentStatus !== "onayli") continue;

    const historical = historicalDraft(slug);
    if (!historical) {
      unavailable += 1;
      console.warn(`Taslak geçmişi bulunamadı: ${slug}`);
      continue;
    }

    const target = writeArchive(
      slug,
      historical.data,
      historical.source,
      true
    );
    recovered += 1;
    console.log(`Taslak arşivlendi: ${target}`);
  }

  console.log(`Tamamlandı: ${recovered} arşiv, ${unavailable} bulunamayan kayıt.`);
}

function recoverApprovedDraft(slug) {
  if (!/^[a-z0-9-]+$/.test(slug || "")) {
    throw new Error("Geçerli bir halka arz slug'ı girilmelidir.");
  }

  const currentPath = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(currentPath)) {
    throw new Error(`Onaylı JSON bulunamadı: data/halka-arz/${slug}.json`);
  }

  const current = readJson(currentPath);
  if (current?.seo?.contentStatus !== "onayli") {
    throw new Error(`${slug} henüz onaylı durumda değil.`);
  }

  const historical = historicalDraft(slug);
  if (!historical) {
    throw new Error(`${slug} için Git geçmişinde taslak sürüm bulunamadı.`);
  }

  const target = writeArchive(slug, historical.data, historical.source);
  console.log(`Taslak arşivlendi: ${target}`);
}

function checkApprovedDrafts() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((file) => file.endsWith(".json") && !file.startsWith("_"));
  const errors = [];
  let approved = 0;

  for (const file of files) {
    const slug = file.replace(/\.json$/, "");
    const current = readJson(path.join(DATA_DIR, file));
    if (current?.seo?.contentStatus !== "onayli") continue;
    approved += 1;

    const approvedPagePath = path.join(APPROVED_PAGE_DIR, slug, "page.tsx");
    if (!fs.existsSync(approvedPagePath)) {
      errors.push(
        `${slug}: onaylı izahname sayfası bulunamadı (${path.relative(
          ROOT,
          approvedPagePath
        )})`
      );
    }

    const archivePath = path.join(ARCHIVE_DIR, file);
    if (!fs.existsSync(archivePath)) {
      errors.push(`${slug}: taslak arşivi bulunamadı`);
      continue;
    }

    try {
      const archive = readJson(archivePath);
      if (archive.slug !== slug) {
        errors.push(`${slug}: arşiv slug bilgisi eşleşmiyor`);
      } else if (!archive.data?.ozet) {
        errors.push(`${slug}: arşiv veri yapısı geçersiz`);
      } else if (archive.data?.seo?.contentStatus === "onayli") {
        errors.push(`${slug}: arşivde taslak yerine onaylı sürüm bulunuyor`);
      }
    } catch (error) {
      errors.push(
        `${slug}: arşiv okunamadı (${error instanceof Error ? error.message : error})`
      );
    }
  }

  if (errors.length > 0) {
    console.error("Taslak-onaylı izahname karşılaştırma kontrolü başarısız:");
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log(
    `Taslak-onaylı izahname kontrolü başarılı: ${approved} onaylı kayıt arşivli.`
  );
}

function archiveCurrentDraft(slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error("Geçerli bir halka arz slug'ı girilmelidir.");
  }

  const sourcePath = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Taslak JSON bulunamadı: data/halka-arz/${slug}.json`);
  }

  const data = readJson(sourcePath);
  if (data?.seo?.contentStatus === "onayli") {
    throw new Error(
      "Bu kayıt zaten onaylı. Taslak, onaylı veriye geçilmeden önce arşivlenmelidir."
    );
  }

  const target = writeArchive(slug, data, {
    type: "current-draft",
    date: new Date().toISOString().slice(0, 10),
  });
  console.log(`Taslak arşivlendi: ${target}`);
}

const argument = process.argv[2];

try {
  if (argument === RECOVER_ALL_FLAG) {
    recoverApprovedDrafts();
  } else if (argument === RECOVER_ONE_FLAG) {
    recoverApprovedDraft(process.argv[3]);
  } else if (argument === CHECK_ALL_FLAG) {
    checkApprovedDrafts();
  } else if (argument) {
    archiveCurrentDraft(argument);
  } else {
    console.error(
      "Kullanım: npm run halka-arz:taslak-arsivle -- <slug>\n" +
        "Tek kayıt geçmiş kurtarma: node scripts/archive-ipo-draft.mjs --recover <slug>\n" +
        "Kontrol: node scripts/archive-ipo-draft.mjs --check-approved\n" +
        "Geçmiş kurtarma: node scripts/archive-ipo-draft.mjs --recover-approved"
    );
    process.exitCode = 1;
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}

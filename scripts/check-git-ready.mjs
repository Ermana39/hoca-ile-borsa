import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const lockPath = path.join(root, ".git", "index.lock");

if (fs.existsSync(lockPath)) {
  const stats = fs.statSync(lockPath);
  const ageMinutes = Math.max(0, Math.round((Date.now() - stats.mtimeMs) / 60000));

  console.error(`Git kilidi bulundu: .git/index.lock (${ageMinutes} dk once olusmus).`);
  console.error("Acik commit ekrani, calisan Git islemi veya VS Code kaynak kontrol islemi bitmeden devam etme.");
  console.error("Aktif Git islemi yoksa .git/index.lock dosyasini temizleyip tekrar dene.");
  process.exit(1);
}

try {
  const status = execFileSync("git", ["status", "--short"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  const changedFiles = status.split(/\r?\n/).filter(Boolean).length;

  if (changedFiles > 500) {
    console.warn(`Git hazir, fakat ${changedFiles} degisen dosya var. Commit/push normalden uzun surebilir.`);
  } else if (changedFiles > 0) {
    console.log(`Git hazir: ${changedFiles} degisen dosya var.`);
  } else {
    console.log("Git hazir: degisiklik yok.");
  }
} catch (error) {
  console.error("Git durumu okunamadi.");
  if (error.stderr) {
    console.error(String(error.stderr).trim());
  }
  process.exit(1);
}

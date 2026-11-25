import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("../", import.meta.url));
const maxRecoveryDays = 31;

export function missingFundDates(output) {
  const match = String(output).match(/Kalıcı fon geçmişinde eksik işlem günü var:\s*([^\r\n.]+)\./);
  if (!match) return null;
  const dates = [...new Set(match[1].split(",").map((item) => item.trim()))].sort();
  for (const date of dates) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) ||
        new Date(date).toISOString().slice(0, 10) !== date) {
      throw new Error("Eksik fon günü bildirimi geçersiz; otomatik aktarım yapılmadı.");
    }
  }
  const span = (Date.parse(dates.at(-1)) - Date.parse(dates[0])) / 86400000 + 1;
  if (span > maxRecoveryDays) throw new Error("Eksik fon geçmişi 31 günü aşıyor; kontrollü geçmiş aktarımı gerekli.");
  return dates;
}

function execute(args, { capture = false } = {}) {
  return spawnSync(process.execPath, args, {
    cwd: root, env: process.env, shell: false, windowsHide: true,
    encoding: "utf8", stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    maxBuffer: 8 * 1024 * 1024,
    timeout: args[0] === "scripts/import-tefas-official-history.mjs" ? 180000 : undefined,
  });
}

export function prepareFunds({ run = execute, log = console.log, write = (value) => process.stdout.write(value) } = {}) {
  const initial = run(["scripts/update-funds.mjs"], { capture: true });
  if (initial.error) throw initial.error;
  if (initial.status === 0) {
    if (initial.stdout) write(initial.stdout);
    if (initial.stderr) write(initial.stderr);
    return;
  }
  const output = `${initial.stderr ?? ""}\n${initial.stdout ?? ""}`;
  const missing = missingFundDates(output);
  if (!missing) {
    if (output.trim()) write(output);
    throw new Error("Fon güncellemesi başarısız; kaynak doğrulama hatası korunarak işlem durduruldu.");
  }
  log(`Eksik fon işlem günleri: ${missing.join(", ")}. Resmî TEFAS kaynağından doğrulanarak tamamlanıyor.`);
  const imported = run(["scripts/import-tefas-official-history.mjs", "--start", missing[0],
    "--end", missing.at(-1), "--no-rebuild"]);
  if (imported.error) throw imported.error;
  if (imported.status !== 0) throw new Error("Resmî eksik gün aktarımı başarısız; yayın durduruldu. Eksik veri atlanmadı.");
  // Kaynak doğrulaması ve eksik gün kontrolü aynı updater ile tekrar çalışır.
  // Servis eksik/yetersiz veri döndürürse updater yayını yine durdurur.
  const retried = run(["scripts/update-funds.mjs"]);
  if (retried.error) throw retried.error;
  if (retried.status !== 0) throw new Error("Geçmiş aktarımı sonrası fon doğrulaması geçmedi; yayın durduruldu.");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    prepareFunds();
  } catch (error) {
    console.error(`Fon hazırlığı durduruldu: ${error.message}`);
    process.exitCode = 1;
  }
}

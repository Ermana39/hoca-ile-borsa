import { spawnSync } from "node:child_process";

const root = process.cwd();

function run(command, args, { capture = false, allowFailure = false } = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: capture ? "utf8" : undefined,
    stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    shell: false,
  });
  if (result.error || result.status !== 0) {
    if (allowFailure) return result;
    throw result.error ?? new Error(result.stderr?.trim() || `${command} basarisiz oldu.`);
  }
  return result;
}

const initialStatus = run("git", ["status", "--porcelain"], { capture: true }).stdout.trim();
if (!initialStatus) {
  console.log("Yayinlanacak yeni degisiklik bulunamadi.");
  process.exit(0);
}

run(process.execPath, ["scripts/smart-build.mjs", "--prepare-only"]);
run("git", ["add", "-A"]);

const staged = run("git", ["diff", "--cached", "--quiet"], { allowFailure: true });
if (staged.status === 0) {
  console.log("Yayinlanacak yeni degisiklik bulunamadi.");
  process.exit(0);
}
if (staged.status !== 1) throw new Error("Hazirlanan degisiklikler kontrol edilemedi.");

const now = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
}).format(new Date());

run("git", ["commit", "-m", `Site guncellemesi - ${now}`]);
run("git", ["push"]);
console.log("Degisiklikler gonderildi. Vercel production yayini otomatik basladi.");


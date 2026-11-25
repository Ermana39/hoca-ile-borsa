import assert from "node:assert/strict";
import { test } from "node:test";
import { missingFundDates, prepareFunds } from "./prepare-funds.mjs";

const missing = "Fon güncelleme hatası: Error: Kalıcı fon geçmişinde eksik işlem günü var: 2026-11-20, 2026-11-23, 2026-11-24. Yeni kaynak yayımlanmadan önce eksik gün kurtarılmalıdır.";
const failed = { status: 1, stderr: missing, stdout: "" };

function fixture(results) {
  const calls = [];
  return {
    calls,
    options: { log() {}, write() {}, run(args) {
      calls.push(args);
      assert.ok(results.length, "Beklenmedik ek çalıştırma");
      return results.shift();
    } },
  };
}

test("a current archive needs no import or extra update", () => {
  const f = fixture([{ status: 0, stdout: "OK" }]);
  prepareFunds(f.options);
  assert.deepEqual(f.calls, [["scripts/update-funds.mjs"]]);
});

test("missing days are imported once from the official source and updater checks run again", () => {
  const f = fixture([failed, { status: 0 }, { status: 0 }]);
  prepareFunds(f.options);
  assert.deepEqual(f.calls, [
    ["scripts/update-funds.mjs"],
    ["scripts/import-tefas-official-history.mjs", "--start", "2026-11-20", "--end", "2026-11-24", "--no-rebuild"],
    ["scripts/update-funds.mjs"],
  ]);
});

test("other validation failures never trigger imports or bypass the failure", () => {
  const f = fixture([{ status: 1, stderr: "Güncel kaynak eksik görünüyor: 50 kayıt." }]);
  assert.throws(() => prepareFunds(f.options), /kaynak doğrulama hatası/);
  assert.equal(f.calls.length, 1);
});

test("official service failures stop publishing without repeated network calls", () => {
  const f = fixture([failed, { status: 1 }]);
  assert.throws(() => prepareFunds(f.options), /Eksik veri atlanmadı/);
  assert.equal(f.calls.length, 2);
});

test("incomplete official recovery still fails the unchanged updater checks", () => {
  const f = fixture([failed, { status: 0 }, { status: 1, stderr: missing }]);
  assert.throws(() => prepareFunds(f.options), /doğrulaması geçmedi/);
  assert.equal(f.calls.length, 3);
});

test("invalid dates and excessive ranges fail closed; dates are sorted and deduplicated", () => {
  assert.equal(missingFundDates("Diğer hata"), null);
  assert.deepEqual(missingFundDates(missing), ["2026-11-20", "2026-11-23", "2026-11-24"]);
  assert.deepEqual(missingFundDates("Kalıcı fon geçmişinde eksik işlem günü var: 2026-11-24, 2026-11-20, 2026-11-20."), ["2026-11-20", "2026-11-24"]);
  for (const dates of ["2026-02-31", "invalid", "2026-01-01, 2026-11-24"]) {
    const f = fixture([{ status: 1, stderr: `Kalıcı fon geçmişinde eksik işlem günü var: ${dates}.` }]);
    assert.throws(() => prepareFunds(f.options));
    assert.equal(f.calls.length, 1);
  }
});

test("process startup and timeout errors cannot be mistaken for successful recovery", () => {
  const f = fixture([{ error: new Error("spawn failed") }]);
  assert.throws(() => prepareFunds(f.options), /spawn failed/);
  const timedOut = fixture([failed, { error: new Error("ETIMEDOUT") }]);
  assert.throws(() => prepareFunds(timedOut.options), /ETIMEDOUT/);
});

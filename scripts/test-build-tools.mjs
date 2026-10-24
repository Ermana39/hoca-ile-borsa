import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { writeFileWithRetry } from "./lib/retry-file-write.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));

test("build plan write retries transient Windows file locks", () => {
  let writeAttempts = 0;
  let waits = 0;

  writeFileWithRetry(".hib-build-plan.json", "{}\n", {
    attempts: 4,
    delayMs: 1,
    writeFile: () => {
      writeAttempts += 1;
      if (writeAttempts < 3) {
        const error = new Error("temporary Windows file lock");
        error.code = "UNKNOWN";
        throw error;
      }
    },
    wait: () => {
      waits += 1;
    },
  });

  assert.equal(writeAttempts, 3);
  assert.equal(waits, 2);
});

test("build plan write does not hide permanent file errors", () => {
  let writeAttempts = 0;
  assert.throws(
    () => writeFileWithRetry(".hib-build-plan.json", "{}\n", {
      writeFile: () => {
        writeAttempts += 1;
        const error = new Error("invalid path");
        error.code = "ENOENT";
        throw error;
      },
      wait: () => assert.fail("permanent errors must not be retried"),
    }),
    { code: "ENOENT" },
  );
  assert.equal(writeAttempts, 1);
});

function showPlanFor(files) {
  const result = spawnSync(
    process.execPath,
    ["scripts/smart-build.mjs", `--show-plan-for=${files.join(",")}`],
    { cwd: root, encoding: "utf8", shell: false },
  );
  assert.equal(result.status, 0, result.stderr);
  return result.stdout;
}

test("news-only updates do not regenerate fund or company data", () => {
  const output = showPlanFor([
    "data/haberler/ornek-haber.json",
    "public/ornek-haber.webp",
  ]);
  assert.match(output, /news, pageUpdates/);
  assert.doesNotMatch(output, /excel|funds|companySync|company|ipo/);
});

test("build and publish tooling changes do not trigger full data preparation", () => {
  const output = showPlanFor([
    "scripts/smart-build.mjs",
    "scripts/publish.mjs",
    "scripts/lib/retry-file-write.mjs",
  ]);
  assert.match(output, /yalniz uygulama build'i/);
  assert.doesNotMatch(output, /excel|funds|news|companySync|company|ipo|pageUpdates/);
});

test("missing Git history does not force production data regeneration", () => {
  const smartBuildSource = spawnSync(
    process.execPath,
    ["-e", "const fs=require('node:fs');process.stdout.write(fs.readFileSync('scripts/smart-build.mjs','utf8'))"],
    { cwd: root, encoding: "utf8", shell: false },
  ).stdout;
  assert.match(smartBuildSource, /classify\(detectedFiles \?\? \[\]\)/);
  assert.doesNotMatch(smartBuildSource, /classify\(detectedFiles \?\? \[\],\s*detectionFailed\)/);
});

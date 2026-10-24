import assert from "node:assert/strict";
import test from "node:test";
import { writeFileWithRetry } from "./lib/retry-file-write.mjs";

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

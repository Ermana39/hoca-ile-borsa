import fs from "node:fs";

const retryableFileErrorCodes = new Set(["UNKNOWN", "EPERM", "EACCES", "EBUSY"]);

function defaultWait(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

export function writeFileWithRetry(
  filePath,
  contents,
  {
    attempts = 40,
    delayMs = 250,
    writeFile = (target, value) => fs.writeFileSync(target, value, "utf8"),
    wait = defaultWait,
  } = {},
) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      writeFile(filePath, contents);
      return;
    } catch (error) {
      lastError = error;
      if (!error || !retryableFileErrorCodes.has(error.code)) throw error;
      if (attempt < attempts) wait(delayMs);
    }
  }

  throw lastError;
}

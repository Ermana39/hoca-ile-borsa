import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import test from "node:test";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);

// Exercise the real handlers with isolated module state and fake mail/Redis.
// No real email, credentials, or network access is used by this suite.
function app({ redis = null, sendMail = async () => {}, transportOptions = () => {} } = {}) {
  const cache = new Map();
  function load(relative) {
    const file = path.resolve(root, relative);
    if (cache.has(file)) return cache.get(file).exports;
    if (file === path.join(root, "lib", "kv.ts")) return { kv: redis };
    const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
      fileName: file,
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    }).outputText;
    const compiledModule = { exports: {} };
    cache.set(file, compiledModule);
    const localRequire = (name) => {
      if (name === "nodemailer") return {
        createTransport(options) { transportOptions(options); return { sendMail }; },
      };
      if (name.startsWith(".")) return load(path.resolve(path.dirname(file), `${name}.ts`));
      if (name.startsWith("@/")) return load(`${name.slice(2)}.ts`);
      return require(name);
    };
    new Function("require", "module", "exports", output)(localRequire, compiledModule, compiledModule.exports);
    return compiledModule.exports;
  }
  return load;
}

function request(endpoint, body, headers = {}, method = "POST") {
  return new Request(`https://www.hocaileborsa.com/api/${endpoint}`, {
    method,
    headers: {
      host: "www.hocaileborsa.com", origin: "https://www.hocaileborsa.com",
      "content-type": "application/json", ...headers,
    },
    ...(body === undefined ? {} : { body: typeof body === "string" ? body : JSON.stringify(body) }),
  });
}

async function withEnv(values, fn) {
  const previous = Object.fromEntries(Object.keys(values).map((key) => [key, process.env[key]]));
  try {
    for (const [key, value] of Object.entries(values)) process.env[key] = value;
    return await fn();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  }
}

const localEnv = {
  NODE_ENV: "production", VERCEL: "0", STATS_ADMIN_PASSWORD: "test-password-only",
  STATS_ADMIN_SECRET: "test-token-secret-only", SMTP_HOST: "smtp.invalid",
  SMTP_USER: "sender@example.com", SMTP_PASS: "fake-password", CONTACT_TO_EMAIL: "owner@example.com",
};
const validContact = { name: "Test Kişi", email: "visitor@example.com", subject: "Deneme", message: "Örnek iletişim mesajı." };

test("JSON body validation rejects oversize streams, wrong types and malformed input", async () => {
  const { readJsonObject } = app()("lib/request-body.ts");
  for (const [body, headers, status] of [
    ["{}", { "content-type": "text/plain" }, 415], ["[]", {}, 400], ["null", {}, 400],
    ["{", {}, 400], [JSON.stringify({ message: "a".repeat(100) }), {}, 413],
    ["{}", { "content-length": "500" }, 413],
  ]) {
    await assert.rejects(readJsonObject(request("contact", body, headers), 32), { status });
  }
  assert.deepEqual(await readJsonObject(request("contact", { message: "Türkçe" }), 64), { message: "Türkçe" });
});

test("cross-origin requests and unauthenticated admin reads are rejected and never cached", async () => {
  await withEnv(localEnv, async () => {
    const load = app();
    for (const endpoint of ["contact", "admin-login", "admin-logout"]) {
      const handler = load(`api/${endpoint}.ts`).default;
      const result = await handler.fetch(request(endpoint, {}, { origin: "https://attacker.example" }));
      assert.equal(result.status, 403);
      assert.match(result.headers.get("cache-control"), /no-store/);
    }
    const result = await load("api/admin-messages.ts").default.fetch(request("admin-messages", undefined, {}, "GET"));
    assert.equal(result.status, 401);
    assert.match(result.headers.get("cache-control"), /no-store/);
    assert.equal(result.headers.get("x-content-type-options"), "nosniff");
  });
});

test("parallel contact requests reserve at most five sends before SMTP completes", async () => {
  await withEnv(localEnv, async () => {
    const sent = [];
    let transport;
    const load = app({ sendMail: async (mail) => { await Promise.resolve(); sent.push(mail); }, transportOptions: (options) => { transport = options; } });
    const handler = load("api/contact.ts").default;
    const responses = await Promise.all(Array.from({ length: 15 }, () => handler.fetch(request("contact", {
      ...validContact, message: "<script>alert('xss')</script>",
    }))));
    assert.equal(sent.length, 5);
    assert.equal(responses.filter((response) => response.status === 200).length, 5);
    assert.equal(responses.filter((response) => response.status === 429).length, 10);
    assert.ok(Number(responses.find((response) => response.status === 429).headers.get("retry-after")) > 0);
    assert.equal(transport.requireTLS, true);
    assert.equal(sent[0].disableFileAccess, true);
    assert.equal(sent[0].disableUrlAccess, true);
    assert.equal(sent[0].replyTo.address, validContact.email);
    assert.ok(sent[0].html.includes("&lt;script&gt;"));
    assert.ok(!sent[0].html.includes("<script>"));
  });
});

test("failed SMTP attempts count toward the limit without exposing internal errors", async () => {
  await withEnv(localEnv, async () => {
    const load = app({ sendMail: async () => { throw new Error("private-smtp-detail"); } });
    const handler = load("api/contact.ts").default;
    for (let index = 0; index < 5; index++) {
      const response = await handler.fetch(request("contact", validContact));
      assert.equal(response.status, 500);
      assert.ok(!(await response.text()).includes("private-smtp-detail"));
    }
    assert.equal((await handler.fetch(request("contact", validContact))).status, 429);
    assert.ok(!JSON.stringify(load("lib/security-log.ts").readSecurityLogs()).includes("private-smtp-detail"));
  });
});

test("mailbox/header injection and non-string contact fields cannot reach SMTP", async () => {
  await withEnv(localEnv, async () => {
    let sends = 0;
    for (const fields of [
      { email: "a@example.com,b@example.com" }, { email: "a@example.com\r\nBcc: b@example.com" },
      { email: "Name <a@example.com>" }, { name: { toString: "bad" } }, { subject: "bad\0header" },
    ]) {
      const handler = app({ sendMail: async () => { sends++; } })("api/contact.ts").default;
      assert.equal((await handler.fetch(request("contact", { ...validContact, ...fields }))).status, 400);
    }
    assert.equal(sends, 0);
  });
});

test("parallel password guessing is bounded, including spoofed forwarding headers", async () => {
  await withEnv(localEnv, async () => {
    const handler = app()("api/admin-login.ts").default;
    const responses = await Promise.all(Array.from({ length: 25 }, (_, index) => handler.fetch(request(
      "admin-login", { password: "wrong-password" }, { "x-forwarded-for": `192.0.2.${index + 1}` },
    ))));
    assert.equal(responses.filter((response) => response.status === 401).length, 10);
    assert.equal(responses.filter((response) => response.status === 429).length, 15);
  });
});

test("valid login sets protected cookies; tampered, expired and future tokens fail", async () => {
  await withEnv(localEnv, async () => {
    const load = app();
    const response = await load("api/admin-login.ts").default.fetch(request("admin-login", { password: localEnv.STATS_ADMIN_PASSWORD }));
    assert.equal(response.status, 200);
    for (const cookie of response.headers.getSetCookie()) {
      assert.match(cookie, /HttpOnly/); assert.match(cookie, /Secure/); assert.match(cookie, /SameSite=Strict/);
    }
    const auth = load("lib/admin-auth.ts");
    const token = auth.makeAdminToken();
    assert.equal(auth.isValidAdminToken(token), true);
    assert.equal(auth.isValidAdminToken(`${token}a`), false);
    for (const timestamp of [Date.now() + 60_000, Date.now() - 1_800_000]) {
      const payload = String(timestamp);
      const signature = crypto.createHmac("sha256", localEnv.STATS_ADMIN_SECRET).update(payload).digest("hex");
      assert.equal(auth.isValidAdminToken(`${payload}.${signature}`), false);
    }
    const messages = await load("api/admin-messages.ts").default.fetch(request("admin-messages", undefined, { cookie: `hib_admin_token=${token}` }, "GET"));
    assert.equal(messages.status, 200);
  });
});

test("Vercel IP identity trusts only protected headers and normalizes IPv6", async () => {
  const { getClientIp } = app()("lib/http-api.ts");
  await withEnv({ VERCEL: "1" }, async () => {
    assert.equal(getClientIp(request("contact", {}, { "x-vercel-forwarded-for": "192.0.2.10", "x-forwarded-for": "192.0.2.20" })), "192.0.2.10");
    assert.equal(getClientIp(request("contact", {}, { "x-vercel-forwarded-for": "2001:0db8:0:0:0:0:0:1" })), "2001:db8::1");
    assert.equal(getClientIp(request("contact", {}, { "x-vercel-forwarded-for": "bad-value" })), "unknown");
  });
});

test("shared limits use atomic Redis operations and fail closed on missing/failing storage", async () => {
  await withEnv({ ...localEnv, VERCEL: "1" }, async () => {
    for (const redis of [null, { eval: async () => { throw new Error("redis-private-error"); } }]) {
      for (const endpoint of ["contact", "admin-login"]) {
        const handler = app({ redis })(`api/${endpoint}.ts`).default;
        const result = await handler.fetch(request(endpoint, endpoint === "contact" ? validContact : { password: "guess" }));
        assert.equal(result.status, 503);
        assert.ok(!(await result.text()).includes("redis-private-error"));
      }
    }
    const load = app({ redis: { eval: async (script, keys, args) => {
      assert.ok(script.includes('redis.call("INCR"'));
      assert.ok(script.includes('redis.call("PEXPIRE"'));
      assert.equal(keys.length, 1); assert.ok(!keys[0].includes("192.0.2.1"));
      assert.deepEqual(args, [5, 3600000]);
      return [0, 1234];
    } } });
    assert.deepEqual(await load("lib/rate-limit.ts").consumeRateLimit("contact", "192.0.2.1", 5, 3600000), { allowed: false, retryAfterSeconds: 2 });
  });
});

test("Next development handlers delegate to the same secured production handlers", async () => {
  await withEnv(localEnv, async () => {
    const load = app();
    for (const endpoint of ["contact", "admin-login", "admin-logout"]) {
      const route = load(`app/api/${endpoint}/route.ts`);
      assert.equal((await route.POST(request(endpoint, {}, { origin: "https://attacker.example" }))).status, 403);
    }
    const health = await load("api/health.ts").default.fetch(request("health", undefined, {}, "GET"));
    assert.equal(health.status, 200);
  });
});

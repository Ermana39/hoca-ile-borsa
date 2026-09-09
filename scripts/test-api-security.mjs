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

function fakeAuthRedis() {
  const values = new Map();
  const sets = new Map();
  const limits = new Map();
  return {
    values,
    async get(key) { return values.get(key) ?? null; },
    async set(key, value) { values.set(key, value); return "OK"; },
    async del(...keys) { for (const key of keys) { values.delete(key); sets.delete(key); } return keys.length; },
    async sadd(key, value) { const set = sets.get(key) ?? new Set(); set.add(value); sets.set(key, set); return 1; },
    async srem(key, value) { return sets.get(key)?.delete(value) ? 1 : 0; },
    async smembers(key) { return [...(sets.get(key) ?? [])]; },
    async scard(key) { return sets.get(key)?.size ?? 0; },
    async expire() { return 1; },
    async eval(script, keys, args) {
      if (script.includes('redis.call("INCR"')) {
        const count = (limits.get(keys[0]) ?? 0) + 1;
        limits.set(keys[0], count);
        return count <= Number(args[0]) ? [1, Number(args[1])] : [0, Number(args[1])];
      }
      if (script.includes('redis.call("EXISTS"')) {
        if (values.has(keys[0])) return 0;
        values.set(keys[0], args[0]);
        values.set(keys[1], args[1]);
        const pending = sets.get(keys[2]) ?? new Set();
        pending.add(args[0]);
        sets.set(keys[2], pending);
        return 1;
      }
      if (script.includes('redis.call("SREM", KEYS[2]')) {
        values.set(keys[0], args[1]);
        sets.get(keys[1])?.delete(args[0]);
        const active = sets.get(keys[2]) ?? new Set();
        active.add(args[0]);
        sets.set(keys[2], active);
        return 1;
      }
      if (script.includes('local value = redis.call("GET"')) {
        const value = values.get(keys[0]);
        if (!value) return null;
        values.delete(keys[0]);
        return value;
      }
      if (script.includes('local sessions = redis.call("SMEMBERS"')) {
        for (const sessionHash of sets.get(keys[2]) ?? []) values.delete(`${args[1]}${sessionHash}`);
        if (values.get(keys[0]) === args[0]) values.delete(keys[0]);
        values.delete(keys[1]);
        sets.delete(keys[2]);
        sets.get(keys[3])?.delete(args[0]);
        sets.get(keys[4])?.delete(args[0]);
        for (const key of keys.slice(5)) values.delete(key);
        return 1;
      }
      throw new Error("Unknown fake Redis script");
    },
  };
}

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
    for (const [endpoint, handler] of [
      ["contact", load("api/misc.ts").contactHandler],
      ["admin-login", load("api/admin.ts").adminLoginHandler],
      ["admin-logout", load("api/admin.ts").adminLogoutHandler],
    ]) {
      const result = await handler.fetch(request(endpoint, {}, { origin: "https://attacker.example" }));
      assert.equal(result.status, 403);
      assert.match(result.headers.get("cache-control"), /no-store/);
    }
    const result = await load("api/admin.ts").adminMessagesHandler.fetch(request("admin-messages", undefined, {}, "GET"));
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
    const handler = load("api/misc.ts").contactHandler;
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
    const handler = load("api/misc.ts").contactHandler;
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
      const handler = app({ sendMail: async () => { sends++; } })("api/misc.ts").contactHandler;
      assert.equal((await handler.fetch(request("contact", { ...validContact, ...fields }))).status, 400);
    }
    assert.equal(sends, 0);
  });
});

test("parallel password guessing is bounded, including spoofed forwarding headers", async () => {
  await withEnv(localEnv, async () => {
    const handler = app()("api/admin.ts").adminLoginHandler;
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
    const response = await load("api/admin.ts").adminLoginHandler.fetch(request("admin-login", { password: localEnv.STATS_ADMIN_PASSWORD }));
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
    const messages = await load("api/admin.ts").adminMessagesHandler.fetch(request("admin-messages", undefined, { cookie: `hib_admin_token=${token}` }, "GET"));
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
        const handlerModule = app({ redis })(endpoint === "contact" ? "api/misc.ts" : "api/admin.ts");
        const handler = endpoint === "contact" ? handlerModule.contactHandler : handlerModule.adminLoginHandler;
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
    const health = await load("api/misc.ts").healthHandler.fetch(request("health", undefined, {}, "GET"));
    assert.equal(health.status, 200);
  });
});

test("member registration, verification, reset, session and deletion flows are server-authorized", async () => {
  await withEnv(localEnv, async () => {
    const redis = fakeAuthRedis();
    const sent = [];
    const load = app({ redis, sendMail: async (mail) => sent.push(mail) });
    const register = load("api/auth/register.ts").default;
    const registration = await register.fetch(request("auth/register", {
      displayName: "Deneme Üye",
      email: "member@example.com",
      password: "Guclu!Sifre2026",
      acceptMembershipTerms: true,
      acceptKvkkNotice: true,
      acceptPrivacyPolicy: true,
      role: "admin",
      plan: "premium",
    }));
    assert.equal(registration.status, 201);
    const registered = await registration.json();
    assert.equal(registered.user.role, "user");
    assert.equal(registered.user.plan, "free");
    assert.equal(registered.user.status, "pending");
    assert.equal(registered.user.email_verified, false);
    assert.equal(load("lib/member-auth.ts").memberHasPlan(registered.user, "free"), false);
    const cookies = registration.headers.getSetCookie();
    assert.match(cookies.find((cookie) => cookie.startsWith("hib_session=")), /Max-Age=0/);
    assert.equal(cookies.some((cookie) => cookie.startsWith("hib_member=1")), false);
    assert.deepEqual(await load("lib/member-auth.ts").getMemberCounts(), { active: 0, pending: 1 });
    const adminToken = load("lib/admin-auth.ts").makeAdminToken();
    const adminMessages = load("api/admin.ts").adminMessagesHandler;
    const pendingStats = await adminMessages.fetch(request("admin-messages", undefined, {
      cookie: `hib_admin_token=${adminToken}`,
    }, "GET"));
    assert.deepEqual((await pendingStats.json()).memberStats, { active: 0, pending: 1 });

    const duplicate = await register.fetch(request("auth/register", {
      displayName: "Başka Üye",
      email: "MEMBER@example.com",
      password: "Baska!Sifre2026",
      acceptMembershipTerms: true,
      acceptKvkkNotice: true,
      acceptPrivacyPolicy: true,
    }));
    assert.equal(duplicate.status, 409);

    const session = load("api/auth/session.ts").default;
    const anonymousSession = await session.fetch(request("auth/session", undefined, {}, "GET"));
    assert.equal((await anonymousSession.json()).authenticated, false);
    const login = load("api/auth/login.ts").default;
    const pendingLogin = await login.fetch(request("auth/login", {
      email: "member@example.com", password: "Guclu!Sifre2026",
    }));
    assert.equal(pendingLogin.status, 403);

    const resend = await load("api/auth/resend-verification.ts").default.fetch(request("auth/resend-verification", {
      email: "member@example.com",
    }));
    assert.equal(resend.status, 200);

    const verificationToken = /#token=([A-Za-z0-9_-]+)/.exec(sent.at(-1).text)?.[1];
    assert.ok(verificationToken);
    const verify = await load("api/auth/verify-email.ts").default.fetch(request("auth/verify-email", { token: verificationToken }));
    assert.equal(verify.status, 200);
    const reusedVerification = await load("api/auth/verify-email.ts").default.fetch(request("auth/verify-email", { token: verificationToken }));
    assert.equal(reusedVerification.status, 400);
    assert.deepEqual(await load("lib/member-auth.ts").getMemberCounts(), { active: 1, pending: 0 });
    const activeStats = await adminMessages.fetch(request("admin-messages", undefined, {
      cookie: `hib_admin_token=${adminToken}`,
    }, "GET"));
    assert.deepEqual((await activeStats.json()).memberStats, { active: 1, pending: 0 });
    const verifiedLogin = await login.fetch(request("auth/login", {
      email: "member@example.com", password: "Guclu!Sifre2026",
    }));
    assert.equal(verifiedLogin.status, 200);
    assert.equal(load("lib/member-auth.ts").memberHasPlan((await verifiedLogin.clone().json()).user, "free"), true);
    const sessionCookie = verifiedLogin.headers.getSetCookie().find((cookie) => cookie.startsWith("hib_session="));
    assert.match(sessionCookie, /HttpOnly/);
    assert.match(sessionCookie, /SameSite=Strict/);
    assert.ok(verifiedLogin.headers.getSetCookie().find((cookie) => cookie.startsWith("hib_member=1")));
    const cookieHeader = sessionCookie.split(";")[0];
    const verifiedSession = await session.fetch(request("auth/session", undefined, { cookie: cookieHeader }, "GET"));
    assert.equal((await verifiedSession.json()).user.email_verified, true);

    const forgot = await load("api/auth/forgot-password.ts").default.fetch(request("auth/forgot-password", { email: "member@example.com" }));
    assert.equal(forgot.status, 200);
    const resetToken = /#token=([A-Za-z0-9_-]+)/.exec(sent.at(-1).text)?.[1];
    assert.ok(resetToken);
    const reset = await load("api/auth/reset-password.ts").default.fetch(request("auth/reset-password", {
      token: resetToken,
      password: "Yeni!GucluSifre2026",
    }));
    assert.equal(reset.status, 200);
    const reusedReset = await load("api/auth/reset-password.ts").default.fetch(request("auth/reset-password", {
      token: resetToken,
      password: "Baska!GucluSifre2026",
    }));
    assert.equal(reusedReset.status, 400);
    const revokedOldSession = await session.fetch(request("auth/session", undefined, { cookie: cookieHeader }, "GET"));
    assert.equal((await revokedOldSession.json()).authenticated, false);
    const newSessionCookie = reset.headers.getSetCookie().find((cookie) => cookie.startsWith("hib_session=")).split(";")[0];

    const deletionHandler = load("api/auth/delete-account.ts").default;
    const prematureDeletion = await deletionHandler.fetch(request("auth/delete-account", {
      password: "Yeni!GucluSifre2026", confirmation: "sil",
    }, { cookie: newSessionCookie }));
    assert.equal(prematureDeletion.status, 400);
    const deletion = await deletionHandler.fetch(request("auth/delete-account", {
      password: "Yeni!GucluSifre2026", confirmation: "HESABIMI SİL",
    }, { cookie: newSessionCookie }));
    assert.equal(deletion.status, 200);
    const deletedSession = await session.fetch(request("auth/session", undefined, { cookie: newSessionCookie }, "GET"));
    assert.equal((await deletedSession.json()).authenticated, false);
    assert.deepEqual(await load("lib/member-auth.ts").getMemberCounts(), { active: 0, pending: 0 });
  });
});

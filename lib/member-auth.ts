import {
  createHash,
  randomBytes,
  randomUUID,
  scrypt,
  timingSafeEqual,
} from "node:crypto";
import { getCookie } from "./http-api";
import { kv } from "./kv";

export type MemberRole = "user" | "admin";
export type MemberPlan = "free" | "premium";
export type MemberStatus = "pending" | "active";

export type MarketingEmailConsent = {
  granted: boolean;
  recorded_at: string;
};

export type MemberConsent = {
  accepted_at: string;
  membership_terms_version: string;
  kvkk_notice_version: string;
  privacy_policy_version: string;
  user_agent_hash: string;
  marketing_email?: MarketingEmailConsent;
};

export type MemberRecord = {
  user_id: string;
  email: string;
  display_name: string;
  password_hash: string;
  role: MemberRole;
  plan: MemberPlan;
  status: MemberStatus;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  consents: MemberConsent;
};

export type PublicMember = Pick<
  MemberRecord,
  "user_id" | "email" | "display_name" | "role" | "plan" | "status" | "created_at" | "updated_at"
> & {
  email_verified: boolean;
};

export type AdminMemberSummary = Pick<
  MemberRecord,
  "user_id" | "email" | "display_name" | "role" | "plan" | "status" | "created_at"
> & {
  email_verified: boolean;
  marketing_email_consent: boolean;
};

type SessionRecord = {
  user_id: string;
  created_at: string;
};

export const MEMBER_SESSION_COOKIE = "hib_session";
export const MEMBER_MARKER_COOKIE = "hib_member";
export const MEMBER_SESSION_MAX_AGE = 60 * 60 * 24 * 30;
export const MEMBERSHIP_TERMS_VERSION = "2026-09-09";
export const KVKK_NOTICE_VERSION = "2026-09-09";
export const PRIVACY_POLICY_VERSION = "2026-09-09";

const SESSION_TOKEN_PATTERN = /^[A-Za-z0-9_-]{40,128}$/;
const SCRYPT_COST = 16_384;
const SCRYPT_BLOCK_SIZE = 8;
const SCRYPT_PARALLELIZATION = 1;
const SCRYPT_KEY_LENGTH = 64;

const CREATE_MEMBER_SCRIPT = `
if redis.call("EXISTS", KEYS[1]) == 1 then return 0 end
redis.call("SET", KEYS[1], ARGV[1])
redis.call("SET", KEYS[2], ARGV[2])
redis.call("SADD", KEYS[3], ARGV[1])
return 1
`;

const ACTIVATE_MEMBER_SCRIPT = `
redis.call("SET", KEYS[1], ARGV[2])
redis.call("SREM", KEYS[2], ARGV[1])
redis.call("SADD", KEYS[3], ARGV[1])
return 1
`;

const CONSUME_TOKEN_SCRIPT = `
local value = redis.call("GET", KEYS[1])
if not value then return false end
redis.call("DEL", KEYS[1])
return value
`;

const DELETE_MEMBER_SCRIPT = `
local sessions = redis.call("SMEMBERS", KEYS[3])
for _, sessionHash in ipairs(sessions) do
  redis.call("DEL", ARGV[2] .. sessionHash)
end
if redis.call("GET", KEYS[1]) == ARGV[1] then
  redis.call("DEL", KEYS[1])
end
redis.call("DEL", KEYS[2])
redis.call("DEL", KEYS[3])
redis.call("SREM", KEYS[4], ARGV[1])
redis.call("SREM", KEYS[5], ARGV[1])
for index = 6, #KEYS do redis.call("DEL", KEYS[index]) end
return 1
`;

export class MemberAuthError extends Error {
  readonly status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "MemberAuthError";
    this.status = status;
  }
}

function requireStore() {
  if (!kv) {
    throw new MemberAuthError(
      "Üyelik sistemi geçici olarak kullanılamıyor.",
      503,
    );
  }
  return kv;
}

function emailIndexKey(email: string) {
  return `hib:auth:email:${sha256(email)}`;
}

function memberKey(userId: string) {
  return `hib:auth:user:${userId}`;
}

function sessionKey(sessionHash: string) {
  return `hib:auth:session:${sessionHash}`;
}

function memberSessionsKey(userId: string) {
  return `hib:auth:user-sessions:${userId}`;
}

const ACTIVE_MEMBERS_KEY = "hib:auth:members:active";
const PENDING_MEMBERS_KEY = "hib:auth:members:pending";

function tokenKey(kind: "verify" | "reset", token: string) {
  return `hib:auth:${kind}:${sha256(token)}`;
}

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function parseStored<T>(value: unknown): T | null {
  if (!value) return null;
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }
  return typeof value === "object" ? (value as T) : null;
}

function deriveScrypt(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    scrypt(
      password,
      salt,
      SCRYPT_KEY_LENGTH,
      {
        N: SCRYPT_COST,
        r: SCRYPT_BLOCK_SIZE,
        p: SCRYPT_PARALLELIZATION,
        maxmem: 64 * 1024 * 1024,
      },
      (error, derivedKey) => {
        if (error) reject(error);
        else resolve(Buffer.from(derivedKey));
      },
    );
  });
}

export function normalizeEmail(input: string) {
  return input.trim().toLowerCase();
}

export function validateEmail(email: string) {
  return (
    email.length >= 5 &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(email) &&
    !/[\r\n\0]/.test(email)
  );
}

export function validateDisplayName(displayName: string) {
  const normalized = displayName.trim().replace(/\s+/g, " ");
  if (
    normalized.length < 2 ||
    normalized.length > 60 ||
    /[<>\0\r\n]/.test(normalized)
  ) {
    throw new MemberAuthError("Görünen ad 2-60 karakter arasında olmalıdır.");
  }
  return normalized;
}

export function validatePassword(password: string, email = "") {
  if (password.length < 12 || password.length > 128) {
    throw new MemberAuthError("Şifre 12-128 karakter arasında olmalıdır.");
  }
  const groups = [/[a-zçğıöşü]/u, /[A-ZÇĞİÖŞÜ]/u, /\d/u, /[^\p{L}\p{N}\s]/u];
  if (groups.filter((pattern) => pattern.test(password)).length < 3) {
    throw new MemberAuthError(
      "Şifre; büyük harf, küçük harf, rakam ve sembol gruplarından en az üçünü içermelidir.",
    );
  }
  const emailPrefix = normalizeEmail(email).split("@")[0];
  if (emailPrefix.length >= 4 && password.toLocaleLowerCase("tr-TR").includes(emailPrefix)) {
    throw new MemberAuthError("Şifre e-posta adresinizin kullanıcı bölümünü içermemelidir.");
  }
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16);
  const derivedKey = await deriveScrypt(password, salt);
  return [
    "scrypt",
    SCRYPT_COST,
    SCRYPT_BLOCK_SIZE,
    SCRYPT_PARALLELIZATION,
    salt.toString("base64url"),
    derivedKey.toString("base64url"),
  ].join("$");
}

export async function verifyPassword(password: string, encoded: string) {
  const [algorithm, cost, blockSize, parallelization, saltValue, hashValue] = encoded.split("$");
  if (
    algorithm !== "scrypt" ||
    Number(cost) !== SCRYPT_COST ||
    Number(blockSize) !== SCRYPT_BLOCK_SIZE ||
    Number(parallelization) !== SCRYPT_PARALLELIZATION ||
    !saltValue ||
    !hashValue
  ) {
    return false;
  }
  try {
    const expected = Buffer.from(hashValue, "base64url");
    const actual = await deriveScrypt(password, Buffer.from(saltValue, "base64url"));
    return expected.length === actual.length && timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}

export function publicMember(member: MemberRecord): PublicMember {
  return {
    user_id: member.user_id,
    email: member.email,
    display_name: member.display_name,
    role: member.role,
    plan: member.plan,
    status: member.status,
    email_verified: Boolean(member.email_verified_at),
    created_at: member.created_at,
    updated_at: member.updated_at,
  };
}

export async function findMemberById(userId: string) {
  const value = await requireStore().get<unknown>(memberKey(userId));
  return parseStored<MemberRecord>(value);
}

export async function findMemberByEmail(rawEmail: string) {
  const email = normalizeEmail(rawEmail);
  const userId = await requireStore().get<string>(emailIndexKey(email));
  return typeof userId === "string" ? findMemberById(userId) : null;
}

export async function createMember(input: {
  email: string;
  displayName: string;
  password: string;
  userAgent: string;
  marketingEmailConsent?: boolean;
}) {
  const redis = requireStore();
  const email = normalizeEmail(input.email);
  if (!validateEmail(email)) throw new MemberAuthError("Geçerli bir e-posta adresi girin.");
  const displayName = validateDisplayName(input.displayName);
  validatePassword(input.password, email);

  const now = new Date().toISOString();
  const member: MemberRecord = {
    user_id: randomUUID(),
    email,
    display_name: displayName,
    password_hash: await hashPassword(input.password),
    role: "user",
    plan: "free",
    status: "pending",
    email_verified_at: null,
    created_at: now,
    updated_at: now,
    consents: {
      accepted_at: now,
      membership_terms_version: MEMBERSHIP_TERMS_VERSION,
      kvkk_notice_version: KVKK_NOTICE_VERSION,
      privacy_policy_version: PRIVACY_POLICY_VERSION,
      user_agent_hash: sha256(input.userAgent.slice(0, 512)),
      marketing_email: {
        granted: input.marketingEmailConsent === true,
        recorded_at: now,
      },
    },
  };

  const created = await redis.eval<[string, string], number>(
    CREATE_MEMBER_SCRIPT,
    [emailIndexKey(email), memberKey(member.user_id), PENDING_MEMBERS_KEY],
    [member.user_id, JSON.stringify(member)],
  );
  if (Number(created) !== 1) {
    throw new MemberAuthError("Bu e-posta adresiyle daha önce hesap oluşturulmuş.", 409);
  }
  return member;
}

export async function saveMember(member: MemberRecord) {
  member.updated_at = new Date().toISOString();
  await requireStore().set(memberKey(member.user_id), JSON.stringify(member));
}

export async function activateMember(member: MemberRecord) {
  member.status = "active";
  member.email_verified_at = member.email_verified_at || new Date().toISOString();
  member.updated_at = new Date().toISOString();
  await requireStore().eval<[string, string], number>(
    ACTIVATE_MEMBER_SCRIPT,
    [memberKey(member.user_id), PENDING_MEMBERS_KEY, ACTIVE_MEMBERS_KEY],
    [member.user_id, JSON.stringify(member)],
  );
}

export async function getMemberCounts() {
  const redis = requireStore();
  const [active, pending] = await Promise.all([
    redis.scard(ACTIVE_MEMBERS_KEY),
    redis.scard(PENDING_MEMBERS_KEY),
  ]);
  return { active: Number(active) || 0, pending: Number(pending) || 0 };
}

export async function getAdminMemberList(): Promise<AdminMemberSummary[]> {
  const redis = requireStore();
  const [activeIds, pendingIds] = await Promise.all([
    redis.smembers(ACTIVE_MEMBERS_KEY),
    redis.smembers(PENDING_MEMBERS_KEY),
  ]);

  const userIds = Array.from(
    new Set(
      [...activeIds, ...pendingIds].filter(
        (value): value is string => typeof value === "string" && value.length > 0,
      ),
    ),
  );
  if (userIds.length === 0) return [];

  const mget = (redis as unknown as {
    mget: (...keys: string[]) => Promise<unknown[]>;
  }).mget.bind(redis);
  const storedMembers = await mget(...userIds.map(memberKey));

  return storedMembers
    .map((value) => parseStored<MemberRecord>(value))
    .filter((member): member is MemberRecord => Boolean(member))
    .map((member) => ({
      user_id: member.user_id,
      email: member.email,
      display_name: member.display_name,
      role: member.role,
      plan: member.plan,
      status: member.status,
      created_at: member.created_at,
      email_verified: Boolean(member.email_verified_at),
      marketing_email_consent: member.consents?.marketing_email?.granted === true,
    }))
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
}

export async function createOneTimeToken(
  kind: "verify" | "reset",
  userId: string,
) {
  const token = randomBytes(32).toString("base64url");
  const maxAge = kind === "verify" ? 60 * 60 * 48 : 60 * 30;
  await requireStore().set(tokenKey(kind, token), userId, { ex: maxAge });
  return token;
}

export async function consumeOneTimeToken(
  kind: "verify" | "reset",
  token: string,
) {
  if (!SESSION_TOKEN_PATTERN.test(token)) return null;
  const value = await requireStore().eval<[], unknown>(
    CONSUME_TOKEN_SCRIPT,
    [tokenKey(kind, token)],
    [],
  );
  return typeof value === "string" ? value : null;
}

export async function createMemberSession(userId: string) {
  const redis = requireStore();
  const token = randomBytes(32).toString("base64url");
  const sessionHash = sha256(token);
  const session: SessionRecord = {
    user_id: userId,
    created_at: new Date().toISOString(),
  };
  await redis.set(sessionKey(sessionHash), JSON.stringify(session), {
    ex: MEMBER_SESSION_MAX_AGE,
  });
  await redis.sadd(memberSessionsKey(userId), sessionHash);
  await redis.expire(memberSessionsKey(userId), MEMBER_SESSION_MAX_AGE + 86_400);
  return token;
}

export async function destroyMemberSession(token?: string) {
  if (!token || !SESSION_TOKEN_PATTERN.test(token)) return;
  const redis = requireStore();
  const sessionHash = sha256(token);
  const session = parseStored<SessionRecord>(await redis.get<unknown>(sessionKey(sessionHash)));
  await redis.del(sessionKey(sessionHash));
  if (session?.user_id) {
    await redis.srem(memberSessionsKey(session.user_id), sessionHash);
  }
}

export async function revokeAllMemberSessions(userId: string) {
  const redis = requireStore();
  const hashes = await redis.smembers(memberSessionsKey(userId));
  for (const hash of hashes) {
    if (typeof hash === "string") await redis.del(sessionKey(hash));
  }
  await redis.del(memberSessionsKey(userId));
}

export async function getMemberFromRequest(request: Request) {
  const token = getCookie(request, MEMBER_SESSION_COOKIE);
  if (!token || !SESSION_TOKEN_PATTERN.test(token)) return null;
  const session = parseStored<SessionRecord>(
    await requireStore().get<unknown>(sessionKey(sha256(token))),
  );
  if (!session?.user_id) return null;
  const member = await findMemberById(session.user_id);
  return memberIsActive(member) ? member : null;
}

export async function requireMemberFromRequest(request: Request) {
  const member = await getMemberFromRequest(request);
  if (!member) throw new MemberAuthError("Bu işlem için giriş yapmalısınız.", 401);
  return member;
}

export async function requireVerifiedMemberFromRequest(request: Request) {
  const member = await requireMemberFromRequest(request);
  if (!member.email_verified_at) {
    throw new MemberAuthError("Bu işlem için e-posta adresinizi doğrulamalısınız.", 403);
  }
  return member;
}

export function memberHasPlan(member: MemberRecord | PublicMember, plan: MemberPlan) {
  return memberIsActive(member) && (plan === "free" || member.plan === "premium");
}

export function memberHasRole(member: MemberRecord | PublicMember, role: MemberRole) {
  return memberIsActive(member) && (role === "user" || member.role === "admin");
}

export function memberIsActive(member: MemberRecord | PublicMember | null | undefined) {
  if (!member || member.status !== "active") return false;
  return "email_verified_at" in member
    ? Boolean(member.email_verified_at)
    : member.email_verified === true;
}

export async function deleteMember(member: MemberRecord) {
  const redis = requireStore();
  const relatedKeys = [
    `hib:auth:consent:${member.user_id}`,
    `hib:portfolio:user:${member.user_id}:holdings`,
  ];
  await redis.eval<[string, string], number>(
    DELETE_MEMBER_SCRIPT,
    [
      emailIndexKey(member.email),
      memberKey(member.user_id),
      memberSessionsKey(member.user_id),
      ACTIVE_MEMBERS_KEY,
      PENDING_MEMBERS_KEY,
      ...relatedKeys,
    ],
    [member.user_id, "hib:auth:session:"],
  );
}

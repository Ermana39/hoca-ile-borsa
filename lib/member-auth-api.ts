import {
  activateMember,
  consumeOneTimeToken,
  createMember,
  createMemberSession,
  createOneTimeToken,
  deleteMember,
  destroyMemberSession,
  findMemberByEmail,
  findMemberById,
  getMemberFromRequest,
  hashPassword,
  MEMBER_MARKER_COOKIE,
  MEMBER_SESSION_COOKIE,
  MEMBER_SESSION_MAX_AGE,
  MemberAuthError,
  memberIsActive,
  normalizeEmail,
  publicMember,
  requireMemberFromRequest,
  revokeAllMemberSessions,
  saveMember,
  validateEmail,
  validatePassword,
  verifyPassword,
} from "./member-auth.js";
import { sendPasswordResetMail, sendVerificationMail } from "./member-mail.js";
import { cookieValue, getClientIp, getCookie, jsonResponse } from "./http-api.js";
import { consumeRateLimit, RateLimitUnavailableError } from "./rate-limit.js";
import { readJsonObject, RequestBodyError } from "./request-body.js";
import { isSameOriginRequest } from "./request-security.js";

function readableCookie(name: string, value: string, maxAge: number, secure: boolean) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    `Max-Age=${maxAge}`,
    "SameSite=Strict",
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

function sessionHeaders(token: string) {
  const headers = new Headers();
  const secure = process.env.NODE_ENV === "production";
  headers.append(
    "Set-Cookie",
    cookieValue(MEMBER_SESSION_COOKIE, token, {
      maxAge: MEMBER_SESSION_MAX_AGE,
      secure,
    }),
  );
  headers.append(
    "Set-Cookie",
    readableCookie(MEMBER_MARKER_COOKIE, "1", MEMBER_SESSION_MAX_AGE, secure),
  );
  return headers;
}

function clearSessionHeaders() {
  const headers = new Headers();
  const secure = process.env.NODE_ENV === "production";
  headers.append(
    "Set-Cookie",
    cookieValue(MEMBER_SESSION_COOKIE, "", { maxAge: 0, secure }),
  );
  headers.append(
    "Set-Cookie",
    readableCookie(MEMBER_MARKER_COOKIE, "", 0, secure),
  );
  return headers;
}

function requirePost(request: Request) {
  if (request.method !== "POST") throw new MemberAuthError("Bu yöntem desteklenmiyor.", 405);
  if (!isSameOriginRequest(request)) throw new MemberAuthError("Geçersiz istek kaynağı.", 403);
}

function stringField(body: Record<string, unknown>, field: string, maxLength: number) {
  const value = body[field];
  if (typeof value !== "string" || value.length > maxLength || /[\0\r\n]/.test(value)) {
    throw new RequestBodyError("Form alanları geçersiz.");
  }
  return value;
}

async function reserve(
  request: Request,
  scope: Parameters<typeof consumeRateLimit>[0],
  identity: string,
  limit: number,
  windowMs: number,
) {
  const result = await consumeRateLimit(scope, identity, limit, windowMs);
  if (!result.allowed) {
    throw new MemberAuthError(
      `Çok fazla deneme yaptınız. ${result.retryAfterSeconds} saniye sonra tekrar deneyin.`,
      429,
    );
  }
  return getClientIp(request);
}

async function withApiErrors(work: () => Promise<Response>) {
  try {
    return await work();
  } catch (error) {
    const status =
      error instanceof MemberAuthError || error instanceof RequestBodyError
        ? error.status
        : error instanceof RateLimitUnavailableError
          ? 503
          : 500;
    const message =
      error instanceof MemberAuthError || error instanceof RequestBodyError
        ? error.message
        : "İşlem tamamlanamadı. Lütfen daha sonra tekrar deneyin.";
    return jsonResponse({ ok: false, message }, { status });
  }
}

export async function registerMember(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    const ip = getClientIp(request);
    await reserve(request, "member-register-ip", ip, 5, 60 * 60 * 1000);
    const body = await readJsonObject(request, 16 * 1024);
    const email = normalizeEmail(stringField(body, "email", 254));
    const displayName = stringField(body, "displayName", 60);
    const password = stringField(body, "password", 128);
    const marketingEmailConsent = body.marketingEmailConsent === true;
    if (!validateEmail(email)) throw new MemberAuthError("Geçerli bir e-posta adresi girin.");
    await reserve(request, "member-register-email", email, 3, 60 * 60 * 1000);
    if (
      body.acceptMembershipTerms !== true ||
      body.acceptKvkkNotice !== true ||
      body.acceptPrivacyPolicy !== true
    ) {
      throw new MemberAuthError("Üyelik için zorunlu metinleri onaylamalısınız.");
    }

    const member = await createMember({
      email,
      displayName,
      password,
      userAgent: request.headers.get("user-agent") || "",
      marketingEmailConsent,
    });
    let verificationSent = false;
    try {
      const token = await createOneTimeToken("verify", member.user_id);
      await sendVerificationMail(member, token);
      verificationSent = true;
    } catch {
      verificationSent = false;
    }
    return jsonResponse(
      {
        ok: true,
        user: publicMember(member),
        verificationSent,
        message: verificationSent
          ? "Hesabınız doğrulama bekliyor. E-postadaki bağlantıyı açtıktan sonra giriş yapabilirsiniz."
          : "Hesabınız doğrulama bekliyor; doğrulama e-postası şu anda gönderilemedi.",
      },
      { status: 201, headers: clearSessionHeaders() },
    );
  });
}

export async function loginMember(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    const body = await readJsonObject(request, 8 * 1024);
    const email = normalizeEmail(stringField(body, "email", 254));
    const password = stringField(body, "password", 128);
    if (!validateEmail(email) || !password) {
      throw new MemberAuthError("E-posta veya şifre hatalı.", 401);
    }
    const ip = getClientIp(request);
    await reserve(request, "member-login-ip", ip, 12, 15 * 60 * 1000);
    await reserve(request, "member-login-email", email, 10, 15 * 60 * 1000);

    const member = await findMemberByEmail(email);
    const valid = member
      ? await verifyPassword(password, member.password_hash)
      : await hashPassword(password).then(() => false);
    if (!member || !valid) throw new MemberAuthError("E-posta veya şifre hatalı.", 401);
    if (!member.email_verified_at || member.status !== "active") {
      throw new MemberAuthError(
        "Giriş yapmadan önce e-posta adresinizi doğrulamalısınız.",
        403,
      );
    }

    const sessionToken = await createMemberSession(member.user_id);
    return jsonResponse(
      { ok: true, user: publicMember(member), message: "Giriş başarılı." },
      { headers: sessionHeaders(sessionToken) },
    );
  });
}

export async function logoutMember(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    await destroyMemberSession(getCookie(request, MEMBER_SESSION_COOKIE));
    return jsonResponse(
      { ok: true, message: "Oturumunuz güvenli şekilde kapatıldı." },
      { headers: clearSessionHeaders() },
    );
  });
}

export async function getMemberSession(request: Request) {
  return withApiErrors(async () => {
    if (request.method !== "GET") throw new MemberAuthError("Bu yöntem desteklenmiyor.", 405);
    const member = await getMemberFromRequest(request);
    return jsonResponse(
      { ok: true, authenticated: Boolean(member), user: member ? publicMember(member) : null },
      member ? {} : { headers: clearSessionHeaders() },
    );
  });
}

export async function forgotMemberPassword(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    const body = await readJsonObject(request, 4 * 1024);
    const email = normalizeEmail(stringField(body, "email", 254));
    if (!validateEmail(email)) throw new MemberAuthError("Geçerli bir e-posta adresi girin.");
    const ip = getClientIp(request);
    await reserve(request, "member-forgot-ip", ip, 5, 60 * 60 * 1000);
    await reserve(request, "member-forgot-email", email, 3, 60 * 60 * 1000);

    const member = await findMemberByEmail(email);
    if (member) {
      const token = await createOneTimeToken("reset", member.user_id);
      try {
        await sendPasswordResetMail(member, token);
      } catch {
        // Hesap varlığını veya SMTP ayrıntılarını yanıt üzerinden açığa çıkarma.
      }
    }
    return jsonResponse({
      ok: true,
      message: "Bu adresle bir hesap varsa şifre yenileme bağlantısı gönderildi.",
    });
  });
}

export async function resetMemberPassword(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    const ip = getClientIp(request);
    await reserve(request, "member-reset-ip", ip, 10, 60 * 60 * 1000);
    const body = await readJsonObject(request, 8 * 1024);
    const token = stringField(body, "token", 128);
    const password = stringField(body, "password", 128);
    validatePassword(password);
    const userId = await consumeOneTimeToken("reset", token);
    if (!userId) throw new MemberAuthError("Şifre yenileme bağlantısı geçersiz veya süresi dolmuş.", 400);
    const member = await findMemberById(userId);
    if (!member) throw new MemberAuthError("Şifre yenileme bağlantısı geçersiz veya süresi dolmuş.", 400);
    member.password_hash = await hashPassword(password);
    await saveMember(member);
    await revokeAllMemberSessions(member.user_id);
    if (!memberIsActive(member)) {
      return jsonResponse(
        { ok: true, message: "Şifreniz yenilendi. Giriş yapabilmek için e-posta doğrulamasını tamamlayın." },
        { headers: clearSessionHeaders() },
      );
    }
    const sessionToken = await createMemberSession(member.user_id);
    return jsonResponse(
      { ok: true, message: "Şifreniz yenilendi ve güvenli şekilde giriş yapıldı." },
      { headers: sessionHeaders(sessionToken) },
    );
  });
}

export async function verifyMemberEmail(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    const ip = getClientIp(request);
    await reserve(request, "member-verify-ip", ip, 20, 60 * 60 * 1000);
    const body = await readJsonObject(request, 4 * 1024);
    const token = stringField(body, "token", 128);
    const userId = await consumeOneTimeToken("verify", token);
    if (!userId) throw new MemberAuthError("Doğrulama bağlantısı geçersiz veya süresi dolmuş.");
    const member = await findMemberById(userId);
    if (!member) throw new MemberAuthError("Doğrulama bağlantısı geçersiz veya süresi dolmuş.");
    if (!member.email_verified_at || member.status !== "active") await activateMember(member);
    return jsonResponse({ ok: true, message: "E-posta adresiniz doğrulandı." });
  });
}

export async function resendMemberVerification(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    const body = await readJsonObject(request, 4 * 1024);
    const email = normalizeEmail(stringField(body, "email", 254));
    if (!validateEmail(email)) throw new MemberAuthError("Geçerli bir e-posta adresi girin.");
    const ip = getClientIp(request);
    await reserve(request, "member-resend-ip", ip, 5, 60 * 60 * 1000);
    await reserve(request, "member-resend-user", email, 3, 60 * 60 * 1000);
    const member = await findMemberByEmail(email);
    if (member && (!member.email_verified_at || member.status !== "active")) {
      const token = await createOneTimeToken("verify", member.user_id);
      try {
        await sendVerificationMail(member, token);
      } catch {
        // Hesap varlığını veya SMTP ayrıntılarını yanıt üzerinden açığa çıkarma.
      }
    }
    return jsonResponse({
      ok: true,
      message: "Bu adres doğrulama bekliyorsa yeni bağlantı e-posta adresinize gönderildi.",
    });
  });
}

export async function removeMemberAccount(request: Request) {
  return withApiErrors(async () => {
    requirePost(request);
    const member = await requireMemberFromRequest(request);
    const ip = getClientIp(request);
    await reserve(request, "member-delete-ip", ip, 5, 60 * 60 * 1000);
    const body = await readJsonObject(request, 8 * 1024);
    const password = stringField(body, "password", 128);
    const confirmation = stringField(body, "confirmation", 32);
    if (confirmation !== "HESABIMI SİL") {
      throw new MemberAuthError("Hesap silme onay metni eşleşmiyor.");
    }
    if (!(await verifyPassword(password, member.password_hash))) {
      throw new MemberAuthError("Şifreniz hatalı.", 401);
    }
    await deleteMember(member);
    return jsonResponse(
      { ok: true, message: "Hesabınız ve üyelik verileriniz silindi." },
      { headers: clearSessionHeaders() },
    );
  });
}

export function authActionHandler(
  action:
    | "register"
    | "login"
    | "logout"
    | "session"
    | "forgot-password"
    | "reset-password"
    | "verify-email"
    | "resend-verification"
    | "delete-account",
) {
  const handlers = {
    register: registerMember,
    login: loginMember,
    logout: logoutMember,
    session: getMemberSession,
    "forgot-password": forgotMemberPassword,
    "reset-password": resetMemberPassword,
    "verify-email": verifyMemberEmail,
    "resend-verification": resendMemberVerification,
    "delete-account": removeMemberAccount,
  } as const;
  return { fetch: handlers[action] };
}

import crypto from "node:crypto";
import nodemailer from "nodemailer";
import { isValidEmail, sanitizeText } from "../lib/contact-security.js";
import { getClientIp, jsonResponse } from "../lib/http-api.js";
import { consumeRateLimit, RateLimitUnavailableError } from "../lib/rate-limit.js";
import { readJsonObject, RequestBodyError } from "../lib/request-body.js";
import { isSameOriginRequest } from "../lib/request-security.js";
import { addSecurityLog } from "../lib/security-log.js";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeEqual(a: string, b: string) {
  const first = Buffer.from(a);
  const second = Buffer.from(b);
  return first.length === second.length && crypto.timingSafeEqual(first, second);
}

export const contactHandler = {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    const ip = getClientIp(request);

    try {
      if (!isSameOriginRequest(request)) {
        addSecurityLog("contact_blocked", ip, "Gecersiz istek kaynagi");
        return jsonResponse(
          { ok: false, message: "Geçersiz istek kaynağı." },
          { status: 403 },
        );
      }

      const rateLimit = await consumeRateLimit("contact", ip, 5, 60 * 60 * 1000);
      if (!rateLimit.allowed) {
        return jsonResponse(
          {
            ok: false,
            message: `Çok fazla mesaj denediniz. ${rateLimit.retryAfterSeconds} saniye sonra tekrar deneyin.`,
          },
          { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
        );
      }

      const body = await readJsonObject(request, 32 * 1024);
      if (typeof body.website === "string" && body.website.trim()) {
        return jsonResponse({ ok: true, message: "Mesajınız alındı." });
      }

      for (const [field, limit] of Object.entries({ name: 120, email: 160, subject: 160, message: 3000 })) {
        if (typeof body[field] !== "string" || body[field].length > limit || body[field].includes("\0")) {
          throw new RequestBodyError("Form alanları geçersiz.");
        }
      }

      const name = sanitizeText(String(body?.name || ""), 120);
      const email = sanitizeText(String(body?.email || ""), 160);
      const subject = sanitizeText(String(body?.subject || ""), 160);
      const message = String(body?.message || "").trim().slice(0, 3000);

      if (name.length < 2) {
        return jsonResponse({ ok: false, message: "Ad Soyad alanı geçersiz." }, { status: 400 });
      }
      if (!isValidEmail(email)) {
        return jsonResponse({ ok: false, message: "E-posta adresi geçersiz." }, { status: 400 });
      }
      if (subject.length < 3) {
        return jsonResponse({ ok: false, message: "Konu alanı geçersiz." }, { status: 400 });
      }
      if (message.length < 10) {
        return jsonResponse({ ok: false, message: "Mesaj çok kısa." }, { status: 400 });
      }

      const smtpHost = process.env.SMTP_HOST || "";
      const smtpPort = Number(process.env.SMTP_PORT || 587);
      const smtpUser = process.env.SMTP_USER || "";
      const smtpPass = process.env.SMTP_PASS || "";
      const contactToEmail = process.env.CONTACT_TO_EMAIL || smtpUser;

      if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail) {
        return jsonResponse({ ok: false, message: "Mail ayarları eksik." }, { status: 500 });
      }

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        requireTLS: smtpPort !== 465,
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
        socketTimeout: 20_000,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"Hoca İle Borsa Site Formu" <${smtpUser}>`,
        to: contactToEmail,
        replyTo: { address: email, name },
        disableFileAccess: true,
        disableUrlAccess: true,
        subject: `İletişim Formu: ${subject}`,
        text: [
          `Ad Soyad: ${name}`,
          `E-posta: ${email}`,
          `Konu: ${subject}`,
          `IP: ${ip}`,
          "",
          "Mesaj:",
          message,
        ].join("\n"),
        html: `<div style="font-family:Arial,sans-serif;color:#111;line-height:1.6"><h2>Yeni İletişim Formu Mesajı</h2><p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p><p><strong>E-posta:</strong> ${escapeHtml(email)}</p><p><strong>Konu:</strong> ${escapeHtml(subject)}</p><p><strong>IP:</strong> ${escapeHtml(ip)}</p><div style="margin-top:20px;padding:16px;border:1px solid #ddd">${escapeHtml(message).replace(/\n/g, "<br />")}</div></div>`,
      });

      addSecurityLog("contact_sent", ip, "Mesaj gonderildi");
      return jsonResponse({ ok: true, message: "Mesajınız gönderildi." });
    } catch (error) {
      addSecurityLog("contact_error", ip, "Istek tamamlanamadi");
      return jsonResponse(
        {
          ok: false,
          message: error instanceof RequestBodyError
            ? error.message
            : "Mesaj gönderilemedi.",
        },
        {
          status: error instanceof RequestBodyError
            ? error.status
            : error instanceof RateLimitUnavailableError
              ? 503
              : 500,
        },
      );
    }
  },
};

export const healthHandler = {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    return jsonResponse(
      {
        ok: true,
        service: "hoca-ile-borsa",
        status: "healthy",
        timestamp: new Date().toISOString(),
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  },
};

export const revalidateHandler = {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return jsonResponse({ ok: false }, { status: 405 });
    }

    const secret = request.headers.get("x-secret") || "";
    const expected = process.env.REVALIDATE_SECRET || "";
    if (!expected || !safeEqual(secret, expected)) {
      return jsonResponse({ message: "Yetkisiz" }, { status: 401 });
    }

    return jsonResponse({
      ok: true,
      revalidated: false,
      deploymentRequired: true,
    });
  },
};

const handlers = {
  contact: contactHandler,
  health: healthHandler,
  revalidate: revalidateHandler,
} as const;

const miscRouter = {
  async fetch(request: Request) {
    const action = new URL(request.url).searchParams.get("hib_handler");
    const handler = action && action in handlers
      ? handlers[action as keyof typeof handlers]
      : null;
    return handler
      ? handler.fetch(request)
      : jsonResponse({ ok: false, message: "Geçersiz API isteği." }, { status: 404 });
  },
};

export default miscRouter;

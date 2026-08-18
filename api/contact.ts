import nodemailer from "nodemailer";
import {
  checkContactRateLimit,
  isValidEmail,
  registerContactRequest,
  sanitizeText,
} from "../lib/contact-security";
import { getClientIp, jsonResponse } from "../lib/http-api";
import { isSameOriginRequest } from "../lib/request-security";
import { addSecurityLog } from "../lib/security-log";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default {
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

      const rateLimit = checkContactRateLimit(ip);
      if (!rateLimit.allowed) {
        return jsonResponse(
          {
            ok: false,
            message: `Çok fazla mesaj denediniz. ${rateLimit.retryAfterSeconds} saniye sonra tekrar deneyin.`,
          },
          { status: 429 },
        );
      }

      const body = await request.json();
      if (String(body?.website || "").trim()) {
        return jsonResponse({ ok: true, message: "Mesajınız alındı." });
      }

      const name = sanitizeText(String(body?.name || ""), 120);
      const email = sanitizeText(String(body?.email || ""), 160);
      const subject = sanitizeText(String(body?.subject || ""), 160);
      const message = String(body?.message || "").trim().slice(0, 3000);

      if (name.length < 2) {
        return jsonResponse(
          { ok: false, message: "Ad Soyad alanı geçersiz." },
          { status: 400 },
        );
      }
      if (!isValidEmail(email)) {
        return jsonResponse(
          { ok: false, message: "E-posta adresi geçersiz." },
          { status: 400 },
        );
      }
      if (subject.length < 3) {
        return jsonResponse(
          { ok: false, message: "Konu alanı geçersiz." },
          { status: 400 },
        );
      }
      if (message.length < 10) {
        return jsonResponse(
          { ok: false, message: "Mesaj çok kısa." },
          { status: 400 },
        );
      }

      const smtpHost = process.env.SMTP_HOST || "";
      const smtpPort = Number(process.env.SMTP_PORT || 587);
      const smtpUser = process.env.SMTP_USER || "";
      const smtpPass = process.env.SMTP_PASS || "";
      const contactToEmail = process.env.CONTACT_TO_EMAIL || smtpUser;

      if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail) {
        return jsonResponse(
          { ok: false, message: "Mail ayarları eksik." },
          { status: 500 },
        );
      }

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"Hoca İle Borsa Site Formu" <${smtpUser}>`,
        to: contactToEmail,
        replyTo: email,
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

      registerContactRequest(ip);
      addSecurityLog("contact_sent", ip, `Mesaj gonderildi: ${subject}`);
      return jsonResponse({ ok: true, message: "Mesajınız gönderildi." });
    } catch (error) {
      console.error("CONTACT_FORM_ERROR:", error);
      return jsonResponse(
        { ok: false, message: "Mesaj gönderilemedi." },
        { status: 500 },
      );
    }
  },
};

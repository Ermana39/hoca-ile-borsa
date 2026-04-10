import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isSameOriginRequest } from "@/lib/request-security";
import {
  checkContactRateLimit,
  isValidEmail,
  registerContactRequest,
  sanitizeText,
} from "@/lib/contact-security";
import { addSecurityLog } from "@/lib/security-log";

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

function mailHtml({
  name,
  email,
  subject,
  message,
  ip,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
}) {
  const safeMessage = message.replace(/\n/g, "<br />");

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Konu:</strong> ${subject}</p>
      <p><strong>IP:</strong> ${ip}</p>
      <div style="margin-top: 20px; padding: 16px; border: 1px solid #ddd; border-radius: 12px; background: #fafafa;">
        ${safeMessage}
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (!isSameOriginRequest(request)) {
      addSecurityLog("contact_blocked", ip, "Geçersiz istek kaynağı");
      return NextResponse.json(
        { ok: false, message: "Geçersiz istek kaynağı." },
        { status: 403 }
      );
    }

    const rateLimit = checkContactRateLimit(ip);

    if (!rateLimit.allowed) {
      addSecurityLog("contact_rate_limit", ip, "İletişim formu limiti");
      return NextResponse.json(
        {
          ok: false,
          message: `Çok fazla mesaj denediniz. ${rateLimit.retryAfterSeconds} saniye sonra tekrar deneyin.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    const website = String(body?.website || "").trim();
    const startedAt = Number(body?.startedAt || 0);

    if (website) {
      addSecurityLog("contact_honeypot", ip, "Bot alanı dolu");
      return NextResponse.json({ ok: true, message: "Mesajınız alındı." });
    }

    if (!startedAt || Date.now() - startedAt < 3000) {
      addSecurityLog("contact_fast_submit", ip, "Form çok hızlı gönderildi");
      return NextResponse.json(
        { ok: false, message: "Form çok hızlı gönderildi." },
        { status: 400 }
      );
    }

    const name = sanitizeText(String(body?.name || ""), 120);
    const email = sanitizeText(String(body?.email || ""), 160);
    const subject = sanitizeText(String(body?.subject || ""), 160);
    const message = String(body?.message || "").trim().slice(0, 3000);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Ad Soyad alanı geçersiz." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "E-posta adresi geçersiz." },
        { status: 400 }
      );
    }

    if (!subject || subject.length < 3) {
      return NextResponse.json(
        { ok: false, message: "Konu alanı geçersiz." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Mesaj çok kısa." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";
    const contactToEmail = process.env.CONTACT_TO_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail) {
      addSecurityLog("contact_mail_config_error", ip, "Mail ayarı eksik");
      return NextResponse.json(
        { ok: false, message: "Mail ayarları eksik." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
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
        ``,
        `Mesaj:`,
        message,
      ].join("\n"),
      html: mailHtml({
        name,
        email,
        subject,
        message,
        ip,
      }),
    });

    registerContactRequest(ip);
    addSecurityLog("contact_sent", ip, `Mesaj gönderildi: ${subject}`);

    return NextResponse.json({ ok: true, message: "Mesajınız gönderildi." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Mesaj gönderilemedi." },
      { status: 400 }
    );
  }
}
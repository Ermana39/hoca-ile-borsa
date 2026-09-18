import nodemailer from "nodemailer";
import type { MemberRecord } from "./member-auth.js";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getTransport() {
  const host = process.env.SMTP_HOST || "";
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  if (!host || !user || !pass) throw new Error("SMTP yapılandırması eksik.");

  return {
    from: process.env.AUTH_FROM_EMAIL || user,
    transporter: nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      auth: { user, pass },
    }),
  };
}

function siteUrl() {
  return (process.env.AUTH_SITE_URL || "https://www.hocaileborsa.com").replace(/\/$/, "");
}

async function sendMemberMail(input: {
  member: MemberRecord;
  subject: string;
  title: string;
  description: string;
  actionLabel: string;
  actionUrl: string;
}) {
  const { transporter, from } = getTransport();
  const displayName = escapeHtml(input.member.display_name);
  const actionUrl = escapeHtml(input.actionUrl);
  await transporter.sendMail({
    from: `"Hoca İle Borsa" <${from}>`,
    to: input.member.email,
    disableFileAccess: true,
    disableUrlAccess: true,
    subject: input.subject,
    text: [
      `Merhaba ${input.member.display_name},`,
      "",
      input.description,
      "",
      input.actionUrl,
      "",
      "Bu işlemi siz başlatmadıysanız bu e-postayı yok sayabilirsiniz.",
    ].join("\n"),
    html: `<div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6;max-width:560px;margin:auto"><h2>${escapeHtml(input.title)}</h2><p>Merhaba ${displayName},</p><p>${escapeHtml(input.description)}</p><p style="margin:28px 0"><a href="${actionUrl}" style="background:#2563eb;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:700">${escapeHtml(input.actionLabel)}</a></p><p style="font-size:13px;color:#64748b">Bu işlemi siz başlatmadıysanız bu e-postayı yok sayabilirsiniz.</p></div>`,
  });
}

export async function sendVerificationMail(member: MemberRecord, token: string) {
  const actionUrl = `${siteUrl()}/uyelik/dogrula#token=${encodeURIComponent(token)}`;
  return sendMemberMail({
    member,
    subject: "Hoca İle Borsa e-posta doğrulama",
    title: "E-posta adresinizi doğrulayın",
    description: "Hesabınızı doğrulamak için aşağıdaki bağlantıyı 48 saat içinde kullanın.",
    actionLabel: "E-postamı Doğrula",
    actionUrl,
  });
}

export async function sendPasswordResetMail(member: MemberRecord, token: string) {
  const actionUrl = `${siteUrl()}/sifre-yenile#token=${encodeURIComponent(token)}`;
  return sendMemberMail({
    member,
    subject: "Hoca İle Borsa şifre yenileme",
    title: "Şifrenizi yenileyin",
    description: "Şifrenizi yenilemek için aşağıdaki bağlantıyı 30 dakika içinde kullanın.",
    actionLabel: "Şifremi Yenile",
    actionUrl,
  });
}

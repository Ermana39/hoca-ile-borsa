"use client";

import { FormEvent, useState } from "react";
import Link from "@/components/NoPrefetchLink";
import { AuthField, AuthMessage, postAuth, PrimaryButton } from "./AuthFormParts";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    try {
      const result = await postAuth("forgot-password", { email });
      setMessage(result.message || "Şifre yenileme bağlantısı gönderildi.");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "İşlem tamamlanamadı.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {message ? <AuthMessage type="success">{message}</AuthMessage> : null}
      {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
      <AuthField label="E-posta" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} disabled={loading} />
      <PrimaryButton disabled={loading}>{loading ? "Gönderiliyor…" : "Şifre Yenileme Bağlantısı Gönder"}</PrimaryButton>
      <p className="text-center text-sm"><Link href="/giris" prefetch={false} className="font-bold text-blue-700 hover:text-blue-800">Giriş sayfasına dön</Link></p>
    </form>
  );
}

"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { AuthField, AuthMessage, postAuth, PrimaryButton } from "./AuthFormParts";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (window.location.hash !== "#dogrulandi") return;
    window.history.replaceState(null, "", window.location.pathname);
    queueMicrotask(() => setMessage("E-posta adresiniz doğrulandı. Artık hesabınıza giriş yapabilirsiniz."));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    try {
      await postAuth("login", { email, password });
      router.push("/hesabim");
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Giriş yapılamadı.");
      setLoading(false);
    }
  }

  async function resendVerification() {
    setError("");
    setMessage("");
    if (!email.trim()) {
      setError("Doğrulama e-postası için önce e-posta adresinizi girin.");
      return;
    }
    setResending(true);
    try {
      const result = await postAuth("resend-verification", { email });
      setMessage(result.message || "Doğrulama bağlantısı yeniden gönderildi.");
    } catch (resendError) {
      setError(resendError instanceof Error ? resendError.message : "E-posta gönderilemedi.");
    } finally {
      setResending(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
      {message ? <AuthMessage type="success">{message}</AuthMessage> : null}
      <AuthField label="E-posta" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} disabled={loading} />
      <AuthField label="Şifre" name="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} disabled={loading} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={resendVerification} disabled={resending || loading} className="text-sm font-semibold text-blue-700 hover:text-blue-800 disabled:opacity-60">
          {resending ? "Gönderiliyor…" : "Doğrulama e-postasını tekrar gönder"}
        </button>
        <Link href="/sifremi-unuttum" prefetch={false} className="text-sm font-semibold text-blue-700 hover:text-blue-800">
          Şifremi unuttum
        </Link>
      </div>
      <PrimaryButton disabled={loading}>{loading ? "Giriş yapılıyor…" : "Giriş Yap"}</PrimaryButton>
      <p className="text-center text-sm text-slate-600">
        Henüz hesabınız yok mu?{" "}
        <Link href="/kayit" prefetch={false} className="font-bold text-blue-700 hover:text-blue-800">Kayıt Ol</Link>
      </p>
    </form>
  );
}

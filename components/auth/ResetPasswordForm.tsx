"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { AuthField, AuthMessage, postAuth, PrimaryButton } from "./AuthFormParts";

export default function ResetPasswordForm() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const value = hash.get("token") || "";
    window.history.replaceState(null, "", window.location.pathname);
    queueMicrotask(() => {
      setToken(value);
      if (!value) setError("Şifre yenileme bağlantısı eksik veya geçersiz.");
    });
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (password !== passwordAgain) {
      setError("Şifreler birbiriyle eşleşmiyor.");
      return;
    }
    setLoading(true);
    try {
      const result = await postAuth("reset-password", { token, password });
      setMessage(result.message || "Şifreniz yenilendi.");
      window.setTimeout(() => {
        router.push("/hesabim");
        router.refresh();
      }, 900);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Şifre yenilenemedi.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {message ? <AuthMessage type="success">{message}</AuthMessage> : null}
      {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
      <AuthField label="Yeni şifre" name="password" type="password" autoComplete="new-password" required minLength={12} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} disabled={loading || !token} hint="En az 12 karakter; büyük harf, küçük harf, rakam ve sembol gruplarından en az üçünü kullanın." />
      <AuthField label="Yeni şifre tekrar" name="passwordAgain" type="password" autoComplete="new-password" required minLength={12} maxLength={128} value={passwordAgain} onChange={(event) => setPasswordAgain(event.target.value)} disabled={loading || !token} />
      <PrimaryButton disabled={loading || !token}>{loading ? "Yenileniyor…" : "Şifremi Yenile"}</PrimaryButton>
      <p className="text-center text-sm"><Link href="/giris" prefetch={false} className="font-bold text-blue-700 hover:text-blue-800">Giriş sayfasına dön</Link></p>
    </form>
  );
}

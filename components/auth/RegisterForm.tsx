"use client";

import { FormEvent, useState } from "react";
import Link from "@/components/NoPrefetchLink";
import { AuthField, AuthMessage, postAuth, PrimaryButton } from "./AuthFormParts";

export default function RegisterForm() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [acceptMembershipTerms, setAcceptMembershipTerms] = useState(false);
  const [acceptKvkkNotice, setAcceptKvkkNotice] = useState(false);
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);
  const [marketingEmailConsent, setMarketingEmailConsent] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (password !== passwordAgain) {
      setError("Şifreler birbiriyle eşleşmiyor.");
      return;
    }
    setLoading(true);
    try {
      const result = await postAuth("register", {
        displayName,
        email,
        password,
        acceptMembershipTerms,
        acceptKvkkNotice,
        acceptPrivacyPolicy,
        marketingEmailConsent,
      });
      setRegisteredEmail(email.trim());
      setMessage(result.message || "Doğrulama bağlantısı e-posta adresinize gönderildi.");
      setLoading(false);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Hesap oluşturulamadı.");
      setLoading(false);
    }
  }

  async function resendVerification() {
    setError("");
    setLoading(true);
    try {
      const result = await postAuth("resend-verification", { email: registeredEmail });
      setMessage(result.message || "Yeni doğrulama bağlantısı gönderildi.");
    } catch (resendError) {
      setError(resendError instanceof Error ? resendError.message : "E-posta gönderilemedi.");
    } finally {
      setLoading(false);
    }
  }

  const checkboxClass = "mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-700 focus:ring-blue-600";

  if (registeredEmail) {
    return (
      <div className="space-y-5">
        <AuthMessage type="success">{message}</AuthMessage>
        {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
        <p className="text-sm leading-6 text-slate-600">
          <strong>{registeredEmail}</strong> adresindeki bağlantıya tıklayın. E-posta doğrulanmadan hesabınız aktifleşmez ve giriş yapamazsınız.
        </p>
        <button type="button" onClick={resendVerification} disabled={loading} className="w-full rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Gönderiliyor…" : "Doğrulama E-postasını Tekrar Gönder"}
        </button>
        <Link href="/giris" prefetch={false} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800">Giriş Sayfasına Git</Link>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="min-w-0 space-y-5">
      {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
      <AuthField label="Ad Soyad" name="displayName" autoComplete="name" required minLength={2} maxLength={60} value={displayName} onChange={(event) => setDisplayName(event.target.value)} disabled={loading} />
      <AuthField label="E-posta" name="email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} disabled={loading} />
      <AuthField label="Şifre" name="password" type="password" autoComplete="new-password" required minLength={12} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} disabled={loading} hint="En az 12 karakter; büyük harf, küçük harf, rakam ve sembol gruplarından en az üçünü kullanın." />
      <AuthField label="Şifre tekrar" name="passwordAgain" type="password" autoComplete="new-password" required minLength={12} maxLength={128} value={passwordAgain} onChange={(event) => setPasswordAgain(event.target.value)} disabled={loading} />

      <fieldset className="min-w-0 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <legend className="px-1 text-sm font-bold text-slate-800">Zorunlu onaylar</legend>
        <label className="flex min-w-0 gap-3 text-sm leading-6 text-slate-700">
          <input className={checkboxClass} type="checkbox" required checked={acceptMembershipTerms} onChange={(event) => setAcceptMembershipTerms(event.target.checked)} disabled={loading} />
          <span className="min-w-0 break-words"><Link href="/uyelik-sozlesmesi" prefetch={false} target="_blank" className="font-semibold text-blue-700 underline">Üyelik Sözleşmesi</Link>&apos;ni okudum ve kabul ediyorum.</span>
        </label>
        <label className="flex min-w-0 gap-3 text-sm leading-6 text-slate-700">
          <input className={checkboxClass} type="checkbox" required checked={acceptKvkkNotice} onChange={(event) => setAcceptKvkkNotice(event.target.checked)} disabled={loading} />
          <span className="min-w-0 break-words"><Link href="/kvkk-aydinlatma-metni" prefetch={false} target="_blank" className="font-semibold text-blue-700 underline">KVKK Aydınlatma Metni</Link>&apos;ni okudum.</span>
        </label>
        <label className="flex min-w-0 gap-3 text-sm leading-6 text-slate-700">
          <input className={checkboxClass} type="checkbox" required checked={acceptPrivacyPolicy} onChange={(event) => setAcceptPrivacyPolicy(event.target.checked)} disabled={loading} />
          <span className="min-w-0 break-words"><Link href="/gizlilik-politikasi" prefetch={false} target="_blank" className="font-semibold text-blue-700 underline">Gizlilik Politikası</Link>&apos;nı okudum.</span>
        </label>
      </fieldset>

      <fieldset className="min-w-0 space-y-3 rounded-xl border border-blue-200 bg-blue-50/60 p-4">
        <legend className="px-1 text-sm font-bold text-slate-800">İsteğe bağlı ileti izni</legend>
        <label className="flex min-w-0 gap-3 text-sm leading-6 text-slate-700">
          <input
            className={checkboxClass}
            type="checkbox"
            checked={marketingEmailConsent}
            onChange={(event) => setMarketingEmailConsent(event.target.checked)}
            disabled={loading}
          />
          <span className="min-w-0 break-words">
            Hoca ile Borsa&apos;dan reklam, kampanya, duyuru ve pazarlama amaçlı e-posta almak istiyorum.
          </span>
        </label>
        <p className="text-xs leading-5 text-slate-600">Bu izin üyelik için zorunlu değildir.</p>
      </fieldset>

      <PrimaryButton disabled={loading}>{loading ? "Hesap oluşturuluyor…" : "Kayıt Ol"}</PrimaryButton>
      <p className="text-center text-sm text-slate-600">
        Zaten hesabınız var mı?{" "}<Link href="/giris" prefetch={false} className="font-bold text-blue-700 hover:text-blue-800">Giriş Yap</Link>
      </p>
    </form>
  );
}

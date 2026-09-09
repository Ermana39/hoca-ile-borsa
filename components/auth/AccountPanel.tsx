"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { AuthField, AuthMessage, postAuth, PrimaryButton, type ApiResult } from "./AuthFormParts";

type AccountUser = {
  user_id: string;
  email: string;
  display_name: string;
  role: "user" | "admin";
  plan: "free" | "premium";
  email_verified: boolean;
  created_at: string;
};

export default function AccountPanel() {
  const router = useRouter();
  const [user, setUser] = useState<AccountUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    void fetch("/api/auth/session", { credentials: "same-origin", cache: "no-store" })
      .then(async (response) => (await response.json()) as ApiResult<AccountUser>)
      .then((result) => {
        if (result.authenticated && result.user) setUser(result.user);
      })
      .catch(() => setError("Hesap bilgileri yüklenemedi."))
      .finally(() => setLoading(false));
  }, []);

  async function logout() {
    setError("");
    try {
      await postAuth("logout", {});
      router.push("/");
      router.refresh();
    } catch (logoutError) {
      setError(logoutError instanceof Error ? logoutError.message : "Çıkış yapılamadı.");
    }
  }

  async function removeAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setDeleting(true);
    try {
      await postAuth("delete-account", { password, confirmation });
      router.push("/");
      router.refresh();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Hesap silinemedi.");
      setDeleting(false);
    }
  }

  if (loading) return <AuthMessage type="info">Hesap bilgileriniz yükleniyor…</AuthMessage>;
  if (!user) {
    return (
      <div className="space-y-5">
        {error ? <AuthMessage type="error">{error}</AuthMessage> : null}
        <AuthMessage type="info">Bu sayfayı görüntülemek için giriş yapmalısınız.</AuthMessage>
        <Link href="/giris" prefetch={false} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800">Giriş Yap</Link>
      </div>
    );
  }

  const rows = [
    ["Ad", user.display_name],
    ["E-posta", user.email],
    ["Üyelik", "Aktif"],
    ["Plan", user.plan === "premium" ? "Premium" : "Ücretsiz"],
    ["Yetki", user.role === "admin" ? "Yönetici" : "Kullanıcı"],
    ["E-posta doğrulama", user.email_verified ? "Doğrulandı" : "Bekliyor"],
  ];

  return (
    <div className="space-y-6">
      {error ? <AuthMessage type="error">{error}</AuthMessage> : null}

      <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-4 py-3 sm:grid-cols-[150px_1fr]">
            <dt className="text-sm font-semibold text-slate-500">{label}</dt>
            <dd className="break-words text-sm font-bold text-slate-900">{value}</dd>
          </div>
        ))}
      </dl>

      <button type="button" onClick={logout} className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50">Çıkış Yap</button>

      <div className="border-t border-slate-200 pt-6">
        {!deleteOpen ? (
          <button type="button" onClick={() => setDeleteOpen(true)} className="text-sm font-bold text-red-700 hover:text-red-800">Hesabı Sil</button>
        ) : (
          <form onSubmit={removeAccount} className="space-y-4 rounded-xl border border-red-200 bg-red-50 p-4">
            <AuthMessage type="error">Bu işlem geri alınamaz. Hesabınızı silmek için şifrenizi girin ve <strong>HESABIMI SİL</strong> yazın.</AuthMessage>
            <AuthField label="Mevcut şifre" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} disabled={deleting} />
            <AuthField label="Onay metni" required value={confirmation} onChange={(event) => setConfirmation(event.target.value)} disabled={deleting} />
            <PrimaryButton disabled={deleting || confirmation !== "HESABIMI SİL"}>{deleting ? "Hesap siliniyor…" : "Hesabımı Kalıcı Olarak Sil"}</PrimaryButton>
            <button type="button" onClick={() => setDeleteOpen(false)} disabled={deleting} className="w-full text-sm font-semibold text-slate-700 underline">Vazgeç</button>
          </form>
        )}
      </div>
    </div>
  );
}

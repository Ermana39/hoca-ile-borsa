"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { AuthMessage, type ApiResult } from "./AuthFormParts";

type AccountUser = {
  user_id: string;
  email: string;
  display_name: string;
  role: "user" | "admin";
  plan: "free" | "premium";
  email_verified: boolean;
  created_at: string;
};

export default function PortfolioPanel() {
  const router = useRouter();
  const [user, setUser] = useState<AccountUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    void fetch("/api/auth/session", {
      credentials: "same-origin",
      cache: "no-store",
    })
      .then(async (response) => (await response.json()) as ApiResult<AccountUser>)
      .then((result) => {
        if (!active) return;
        if (!result.authenticated || !result.user || !result.user.email_verified) {
          router.replace("/giris");
          return;
        }
        setUser(result.user);
      })
      .catch(() => {
        if (active) setError("Portföy bilgileri yüklenemedi.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [router]);

  if (loading) {
    return <AuthMessage type="info">Portföyünüz yükleniyor…</AuthMessage>;
  }

  if (error) {
    return (
      <div className="space-y-4">
        <AuthMessage type="error">{error}</AuthMessage>
        <Link href="/hesabim" prefetch={false} className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50">
          Hesabıma Dön
        </Link>
      </div>
    );
  }

  if (!user) {
    return <AuthMessage type="info">Giriş sayfasına yönlendiriliyorsunuz…</AuthMessage>;
  }

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-500">Portföy sahibi</p>
        <p className="mt-1 break-words text-base font-extrabold text-slate-900">{user.display_name}</p>
      </div>

      <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700" aria-hidden="true">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-4 text-lg font-extrabold text-slate-900">Henüz portföyünüzde fon bulunmuyor</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">
          Fon ekleme ve portföy hesaplama özellikleri bu alandan kullanılacak.
        </p>
      </div>

      <Link href="/hesabim" prefetch={false} className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50">
        Hesabıma Dön
      </Link>
    </div>
  );
}

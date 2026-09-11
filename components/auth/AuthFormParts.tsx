"use client";

import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export type ApiResult<T = unknown> = {
  ok: boolean;
  message?: string;
  user?: T;
  authenticated?: boolean;
};

export async function getAuthSession<T = unknown>() {
  const response = await fetch("/api/auth/session", {
    credentials: "same-origin",
    cache: "no-store",
  });
  const result = (await response.json().catch(() => ({
    ok: false,
    message: "Sunucu yanıtı okunamadı.",
  }))) as ApiResult<T>;
  if (!response.ok || !result.ok) {
    throw new Error(result.message || "Oturum bilgileri yüklenemedi.");
  }
  return result;
}

export async function postAuth<T = unknown>(endpoint: string, body: Record<string, unknown>) {
  const response = await fetch(`/api/auth/${endpoint}`, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const result = (await response.json().catch(() => ({
    ok: false,
    message: "Sunucu yanıtı okunamadı.",
  }))) as ApiResult<T>;
  if (!response.ok || !result.ok) {
    throw new Error(result.message || "İşlem tamamlanamadı.");
  }
  return result;
}

export function AuthField({
  label,
  hint,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string }) {
  return (
    <label className="block min-w-0 text-sm font-semibold text-slate-800">
      {label}
      <input
        {...props}
        className="mt-2 block w-full min-w-0 max-w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
      />
      {hint ? <span className="mt-1.5 block text-xs font-normal leading-5 text-slate-500">{hint}</span> : null}
    </label>
  );
}

export function AuthMessage({ type, children }: { type: "error" | "success" | "info"; children: ReactNode }) {
  const styles = {
    error: "border-red-200 bg-red-50 text-red-800",
    success: "border-emerald-200 bg-emerald-50 text-emerald-800",
    info: "border-blue-200 bg-blue-50 text-blue-800",
  };
  return (
    <div role={type === "error" ? "alert" : "status"} className={`min-w-0 break-words rounded-xl border px-4 py-3 text-sm leading-6 ${styles[type]}`}>
      {children}
    </div>
  );
}

export function PrimaryButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      {...props}
      className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
    >
      {children}
    </button>
  );
}

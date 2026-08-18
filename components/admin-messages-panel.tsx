"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "@/components/NoPrefetchLink";
import AdminLoginForm from "@/components/admin-login-form";

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export default function AdminMessagesPanel() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  const loadMessages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin-messages", {
        credentials: "same-origin",
        cache: "no-store",
      });
      const payload = await response.json().catch(() => null);
      setAuthorized(response.ok && payload?.ok === true);
      setMessages(Array.isArray(payload?.messages) ? payload.messages : []);
    } catch {
      setAuthorized(false);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadMessages();
  }, [loadMessages]);

  async function logout() {
    await fetch("/api/admin-logout", {
      method: "POST",
      credentials: "same-origin",
    });
    setAuthorized(false);
    setMessages([]);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white px-4 py-10 text-center text-sm text-zinc-600">
        Yönetim oturumu kontrol ediliyor...
      </main>
    );
  }

  if (!authorized) {
    return (
      <main className="min-h-screen bg-white px-4 py-8">
        <div className="mx-auto max-w-md">
          <AdminLoginForm />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">
            Ana Sayfa
          </Link>
          <button
            type="button"
            onClick={() => void logout()}
            className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700"
          >
            Çıkış Yap
          </button>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">İletişim Mesajları</h1>

        {messages.length === 0 ? (
          <div className="rounded-xl border border-zinc-200 p-5 text-zinc-600">
            İletişim formu mesajları e-posta adresinize teslim edilir.
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((item, index) => (
              <article key={`${item.email}-${item.createdAt}-${index}`} className="rounded-xl border border-zinc-200 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-zinc-900">{item.subject}</h2>
                  <time className="text-sm text-zinc-500">{formatDate(item.createdAt)}</time>
                </div>
                <p className="mt-2 text-sm text-zinc-600">{item.name} · {item.email}</p>
                <p className="mt-4 whitespace-pre-wrap text-zinc-800">{item.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

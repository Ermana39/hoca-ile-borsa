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

type MemberStats = {
  active: number;
  pending: number;
};

type MemberRow = {
  user_id: string;
  display_name: string;
  email: string;
  created_at: string;
  status: "pending" | "active";
  plan: "free" | "premium";
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
  const [memberStats, setMemberStats] = useState<MemberStats | null>(null);
  const [members, setMembers] = useState<MemberRow[]>([]);

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
      setMemberStats(
        Number.isFinite(payload?.memberStats?.active) && Number.isFinite(payload?.memberStats?.pending)
          ? payload.memberStats
          : null,
      );
      setMembers(Array.isArray(payload?.members) ? payload.members : []);
    } catch {
      setAuthorized(false);
      setMessages([]);
      setMemberStats(null);
      setMembers([]);
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
    setMemberStats(null);
    setMembers([]);
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Yönetim Paneli</h1>

        <section className="mb-6 grid gap-4 sm:grid-cols-2" aria-label="Üyelik özeti">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-800">Toplam Üye</p>
            <p className="mt-2 text-3xl font-black text-emerald-950">{memberStats?.active ?? "—"}</p>
            <p className="mt-1 text-xs text-emerald-700">Yalnızca e-postası doğrulanmış aktif kullanıcılar</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">Doğrulama Bekleyenler</p>
            <p className="mt-2 text-3xl font-black text-amber-950">{memberStats?.pending ?? "—"}</p>
            <p className="mt-1 text-xs text-amber-700">Henüz aktif üye sayılmayan hesaplar</p>
          </div>
        </section>

        <section className="mb-8" aria-labelledby="uyeler-baslik">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 id="uyeler-baslik" className="text-2xl font-bold text-zinc-900">Üyeler</h2>
              <p className="mt-1 text-sm text-zinc-500">Aktif ve doğrulama bekleyen kayıtlar</p>
            </div>
            <span className="text-sm font-semibold text-zinc-600">{members.length} kayıt</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="min-w-[820px] w-full border-collapse text-left text-sm">
              <thead className="bg-zinc-50 text-zinc-700">
                <tr>
                  <th className="px-4 py-3 font-bold">Ad Soyad</th>
                  <th className="px-4 py-3 font-bold">E-posta</th>
                  <th className="px-4 py-3 font-bold">Üyelik Tarihi</th>
                  <th className="px-4 py-3 font-bold">Durum</th>
                  <th className="px-4 py-3 font-bold">Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                {members.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-zinc-500">Henüz üye kaydı bulunmuyor.</td>
                  </tr>
                ) : (
                  members.map((member) => (
                    <tr key={member.user_id} className="align-top">
                      <td className="px-4 py-3 font-semibold text-zinc-900">{member.display_name}</td>
                      <td className="px-4 py-3">
                        <a className="text-blue-700 hover:underline" href={`mailto:${member.email}`}>{member.email}</a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-zinc-600">{formatDate(member.created_at)}</td>
                      <td className="px-4 py-3">
                        <span className={member.status === "active"
                          ? "inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800"
                          : "inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800"}>
                          {member.status === "active" ? "Aktif" : "Doğrulama Bekliyor"}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-zinc-700">{member.plan === "premium" ? "Premium" : "Ücretsiz"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <h2 className="mb-4 text-2xl font-bold text-zinc-900">İletişim Mesajları</h2>

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

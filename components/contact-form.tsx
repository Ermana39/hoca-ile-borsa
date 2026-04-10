"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const startedAt = useMemo(() => Date.now(), []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website,
          startedAt,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus(data?.message || "Mesaj gönderilemedi.");
        setLoading(false);
        return;
      }

      setStatus("Mesajınız alındı.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
    } catch {
      setStatus("Bağlantı hatası oluştu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Ad Soyad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-500"
        />

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-500"
        />
      </div>

      <input
        type="text"
        placeholder="Konu"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-500"
      />

      <textarea
        placeholder="Mesajınız"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-500"
      />

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
        />
      </div>

      {status ? (
        <p className="text-sm font-medium text-zinc-700">{status}</p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
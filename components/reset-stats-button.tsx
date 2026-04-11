"use client";

import { useState } from "react";

export default function ResetStatsButton() {
  const [loading, setLoading] = useState(false);

  async function handleReset() {
    const confirmed = window.confirm(
      "Tüm istatistik verileri sıfırlansın mı?"
    );

    if (!confirmed) return;

    try {
      setLoading(true);

      const response = await fetch("/api/reset-stats", {
        method: "POST",
        cache: "no-store",
      });

      if (!response.ok) {
        alert("İstatistikler sıfırlanamadı.");
        return;
      }

      window.location.reload();
    } catch {
      alert("İstatistikler sıfırlanamadı.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      disabled={loading}
      className="inline-block rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Sıfırlanıyor..." : "İstatistikleri Sıfırla"}
    </button>
  );
}
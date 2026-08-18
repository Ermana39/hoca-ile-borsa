"use client";

import { useEffect } from "react";
import Link from "@/components/NoPrefetchLink";

export default function EskiKontrolPaneliPage() {
  useEffect(() => {
    window.location.replace("/yonetim/mesajlar");
  }, []);

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-center text-sm text-zinc-600">
      <p>Yönetim sayfasına yönlendiriliyorsunuz.</p>
      <Link href="/yonetim/mesajlar" className="mt-3 inline-block font-semibold text-blue-700 underline">
        Yönetim sayfasını aç
      </Link>
    </main>
  );
}

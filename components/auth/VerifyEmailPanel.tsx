"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "@/components/NoPrefetchLink";
import { AuthMessage, postAuth } from "./AuthFormParts";

export default function VerifyEmailPanel() {
  const router = useRouter();
  const started = useRef(false);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Doğrulama bağlantısı kontrol ediliyor…");

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const token = hash.get("token") || "";
    window.history.replaceState(null, "", window.location.pathname);
    if (!token) {
      queueMicrotask(() => {
        setStatus("error");
        setMessage("Doğrulama bağlantısı eksik veya geçersiz.");
      });
      return;
    }
    void postAuth("verify-email", { token })
      .then((result) => {
        setStatus("success");
        setMessage(`${result.message || "E-posta adresiniz doğrulandı."} Giriş sayfasına yönlendiriliyorsunuz…`);
        window.setTimeout(() => {
          router.push("/giris#dogrulandi");
          router.refresh();
        }, 1800);
      })
      .catch((verifyError) => {
        setStatus("error");
        setMessage(verifyError instanceof Error ? verifyError.message : "E-posta doğrulanamadı.");
      });
  }, [router]);

  return (
    <div className="space-y-5">
      <AuthMessage type={status === "loading" ? "info" : status}>{message}</AuthMessage>
      <Link href="/giris" prefetch={false} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800">
        Giriş Sayfasına Git
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import VerifyEmailPanel from "@/components/auth/VerifyEmailPanel";

export const metadata: Metadata = {
  title: "E-posta Doğrulama | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function UyelikDogrulaPage() {
  return <AuthShell eyebrow="Üyelik" title="E-posta Doğrulama" description="Hesabınıza ait e-posta doğrulama bağlantısı güvenli şekilde kontrol ediliyor."><VerifyEmailPanel /></AuthShell>;
}

import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Giriş Yap | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function GirisPage() {
  return <AuthShell eyebrow="Üyelik" title="Giriş Yap" description="Hesabınıza e-posta adresiniz ve şifrenizle güvenli şekilde giriş yapın."><LoginForm /></AuthShell>;
}

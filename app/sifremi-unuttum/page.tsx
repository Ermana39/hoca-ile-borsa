import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Şifremi Unuttum | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function SifremiUnuttumPage() {
  return <AuthShell eyebrow="Hesap güvenliği" title="Şifremi Unuttum" description="E-posta adresinizi yazın. Hesabınız varsa 30 dakika geçerli bir şifre yenileme bağlantısı gönderilecektir."><ForgotPasswordForm /></AuthShell>;
}

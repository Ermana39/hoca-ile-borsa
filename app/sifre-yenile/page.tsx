import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Şifre Yenile | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function SifreYenilePage() {
  return <AuthShell eyebrow="Hesap güvenliği" title="Şifre Yenile" description="Yeni ve güçlü şifrenizi belirleyin. İşlem tamamlandığında diğer açık oturumlar kapatılır."><ResetPasswordForm /></AuthShell>;
}

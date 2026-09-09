import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Kayıt Ol | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function KayitPage() {
  return <AuthShell eyebrow="Üyelik" title="Kayıt Ol" description="Ücretsiz hesabınızı oluşturun. Hesabınız, e-posta doğrulamasından sonra aktifleşir; ödeme veya premium satış sistemi şu anda etkin değildir."><RegisterForm /></AuthShell>;
}

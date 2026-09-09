import type { Metadata } from "next";
import AccountPanel from "@/components/auth/AccountPanel";
import AuthShell from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Hesabım | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function HesabimPage() {
  return <AuthShell eyebrow="Üyelik" title="Hesabım" description="Üyelik bilgilerinizi görüntüleyin ve hesabınızla ilgili güvenli işlemleri yönetin."><AccountPanel /></AuthShell>;
}

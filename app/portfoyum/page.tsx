import type { Metadata } from "next";
import PortfolioPanel from "@/components/auth/PortfolioPanel";
import AuthShell from "@/components/auth/AuthShell";

export const metadata: Metadata = {
  title: "Portföyüm | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function PortfoyumPage() {
  return (
    <AuthShell
      eyebrow="Üyelik"
      title="Portföyüm"
      description="Fon portföyünüzü bu alandan görüntüleyebilir ve yönetebilirsiniz."
    >
      <PortfolioPanel />
    </AuthShell>
  );
}

import type { Metadata } from "next";
import PortfolioPanel from "@/components/auth/PortfolioPanel";
import AuthShell from "@/components/auth/AuthShell";
import { getCurrentFundsData } from "@/lib/fon-platform";

export const metadata: Metadata = {
  title: "Portföyüm | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function PortfoyumPage() {
  const funds = getCurrentFundsData()
    .fonlar
    .filter((fund) => fund.aktifMi)
    .map((fund) => ({
      kod: fund.kod,
      ad: fund.ad,
      yonetici: fund.yonetici,
    }))
    .sort((a, b) => a.kod.localeCompare(b.kod, "tr-TR"));

  return (
    <AuthShell
      eyebrow="Üyelik"
      title="Portföyüm"
      description="Yatırım fonu, Dolar, Euro ve Gram Altın varlıklarınızı bu alandan takip edebilirsiniz."
    >
      <PortfolioPanel funds={funds} />
    </AuthShell>
  );
}

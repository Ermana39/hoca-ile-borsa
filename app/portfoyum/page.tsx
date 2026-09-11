import type { Metadata } from "next";
import PortfolioPanel from "@/components/auth/PortfolioPanel";
import Link from "@/components/NoPrefetchLink";
import { ShieldCheck } from "lucide-react";
import styles from "@/components/auth/PortfolioPanel.module.css";
import { getCurrentFundsData } from "@/lib/fon-platform";

export const metadata: Metadata = {
  title: "Portföyüm | Hoca İle Borsa",
  robots: { index: false, follow: false },
};

export default function PortfoyumPage() {
  const currentFunds = getCurrentFundsData();
  const funds = currentFunds.fonlar
    .filter((fund) => fund.aktifMi)
    .map((fund) => ({
      kod: fund.kod,
      ad: fund.ad,
      yonetici: fund.yonetici,
    }))
    .sort((a, b) => a.kod.localeCompare(b.kod, "tr-TR"));

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="İçerik yolu"><Link href="/">Ana Sayfa</Link><span>/</span><span aria-current="page">Portföyüm</span></nav>
        <header className={styles.pageHeader}>
          <span className={styles.eyebrow}><ShieldCheck size={14} />Kişisel yatırım alanınız</span>
          <h1>Portföyüm</h1>
          <p>Fon, döviz ve altınınızın maliyetini, değerini ve getirisini tek bakışta takip edin.</p>
        </header>
        <PortfolioPanel
          funds={funds}
          dataVersion={currentFunds.generatedAt || currentFunds.sonIslemTarihi || String(currentFunds.version)}
        />
      </div>
    </main>
  );
}

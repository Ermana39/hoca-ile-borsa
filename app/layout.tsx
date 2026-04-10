import type { Metadata } from "next";
import "./globals.css";
import PageViewTracker from "@/components/page-view-tracker";

export const metadata: Metadata = {
  title: "Hoca İle Borsa",
  description: "Borsa, halka arz, temettü, fonlar ve finans içerikleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
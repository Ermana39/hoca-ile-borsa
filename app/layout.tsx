import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hocaileborsa.com"),
  title: "Hoca İle Borsa",
  description: "Borsa, halka arz, temettü, fonlar ve finans içerikleri",
  alternates: {
    canonical: "/",
  },
  other: {
    "google-adsense-account": "ca-pub-9613627671991162",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
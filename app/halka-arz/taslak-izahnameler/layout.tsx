import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/halka-arz/taslak-izahnameler",
  },
};

export default function TaslakIzahnamelerLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

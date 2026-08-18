import type { Metadata } from "next";
import AdminMessagesPanel from "@/components/admin-messages-panel";

export const metadata: Metadata = {
  title: "Yönetim",
  robots: { index: false, follow: false },
};

export default function MesajlarPage() {
  return <AdminMessagesPanel />;
}

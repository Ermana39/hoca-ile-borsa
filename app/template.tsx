import type { ReactNode } from "react";
import PageViewTracker from "@/components/page-view-tracker";

export default function RootTemplate({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <PageViewTracker />
      {children}
    </>
  );
}
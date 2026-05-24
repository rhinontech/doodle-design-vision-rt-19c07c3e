import type { ReactNode } from "react";
import { BottomNav, type NavKey } from "./BottomNav";

interface AppShellProps {
  children: ReactNode;
  activeTab?: NavKey;
  showNav?: boolean;
  bgClass?: string;
}

export function AppShell({ children, activeTab, showNav = true, bgClass = "bg-surface" }: AppShellProps) {
  return (
    <div className={`relative mx-auto min-h-screen w-full max-w-[440px] ${bgClass}`}>
      <div className={showNav ? "pb-28" : ""}>{children}</div>
      {showNav && activeTab && <BottomNav active={activeTab} />}
    </div>
  );
}

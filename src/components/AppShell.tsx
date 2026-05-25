import type { ReactNode } from "react";
import { BottomNav, type NavKey } from "./BottomNav";
import { SideNav } from "./SideNav";
import { RightRail } from "./RightRail";

interface AppShellProps {
  children: ReactNode;
  activeTab?: NavKey;
  showNav?: boolean;
  bgClass?: string;
  /** Hide the desktop right rail (use for focused screens like compose, settings). */
  hideRail?: boolean;
}

export function AppShell({
  children,
  activeTab,
  showNav = true,
  bgClass = "bg-surface",
  hideRail = false,
}: AppShellProps) {
  return (
    <div className={`min-h-screen w-full ${bgClass}`}>
      <div className="mx-auto flex w-full max-w-[1280px]">
        {showNav && <SideNav active={activeTab} />}

        <main
          className={`relative mx-auto w-full max-w-[440px] flex-1 md:max-w-[560px] md:border-x md:border-border ${
            showNav ? "pb-28 md:pb-0" : ""
          }`}
        >
          {children}
        </main>

        {showNav && !hideRail && <RightRail />}
      </div>

      {showNav && activeTab && <BottomNav active={activeTab} />}
    </div>
  );
}

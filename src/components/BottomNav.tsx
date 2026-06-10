import { Link } from "@tanstack/react-router";
import { Home, Users, Bone, Compass, LayoutGrid } from "lucide-react";

export type NavKey = "feed" | "community" | "match" | "discover" | "profile";

const items: { key: NavKey; icon: typeof Home; label: string; to: string }[] = [
  { key: "feed", icon: Home, label: "Feed", to: "/" },
  { key: "community", icon: Users, label: "Circles", to: "/community" },
  { key: "match", icon: Bone, label: "Match", to: "/match" },
  { key: "discover", icon: Compass, label: "Discover", to: "/discover" },
  { key: "profile", icon: LayoutGrid, label: "Profile", to: "/profile" },
];

export function BottomNav({ active }: { active: NavKey }) {
  return (
    <nav
      className="fixed left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-[400px] -translate-x-1/2 rounded-full border border-white/40 bg-white/55 backdrop-blur-xl backdrop-saturate-150 shadow-[0_10px_40px_-12px_rgba(30,58,138,0.35)] dark:border-white/10 dark:bg-white/[0.06] md:hidden"
      style={{ bottom: `calc(env(safe-area-inset-bottom) + 0.75rem)` }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {items.map(({ key, icon: Icon, label, to }) => {
          const isActive = key === active;
          return (
            <Link
              key={key}
              to={to}
              className="flex flex-1 flex-col items-center gap-0.5 py-1"
            >
              <Icon
                className={`h-[22px] w-[22px] ${isActive ? "text-coral" : "text-foreground/60"}`}
                strokeWidth={isActive ? 2.4 : 2}
              />
              <span
                className={`font-display text-[10px] font-600 ${
                  isActive ? "text-coral" : "text-foreground/60"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

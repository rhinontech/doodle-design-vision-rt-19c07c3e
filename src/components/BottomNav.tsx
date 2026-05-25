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
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[440px] -translate-x-1/2 border-t border-border bg-white pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around px-2 pt-2 pb-2">
        {items.map(({ key, icon: Icon, label, to }) => {
          const isActive = key === active;
          return (
            <Link
              key={key}
              to={to}
              className="flex flex-1 flex-col items-center gap-1 py-1"
            >
              <Icon
                className={`h-6 w-6 ${isActive ? "text-coral" : "text-foreground/55"}`}
                strokeWidth={isActive ? 2.4 : 2}
              />
              <span
                className={`font-display text-[11px] font-600 ${
                  isActive ? "text-coral" : "text-foreground/55"
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

import { Link } from "@tanstack/react-router";
import { Home, Bone, Stethoscope, LayoutGrid, Heart } from "lucide-react";

export type NavKey = "home" | "match" | "care" | "discover" | "profile";

const items: { key: NavKey; icon: typeof Home; label: string; to: string; color: string }[] = [
  { key: "home", icon: Home, label: "Home", to: "/", color: "text-coral" },
  { key: "match", icon: Bone, label: "Match", to: "/match", color: "text-foreground" },
  { key: "care", icon: Stethoscope, label: "Care", to: "/care", color: "text-foreground" },
  { key: "discover", icon: Heart, label: "Discover", to: "/discover", color: "text-foreground" },
  { key: "profile", icon: LayoutGrid, label: "Profile", to: "/profile", color: "text-foreground" },
];

export function BottomNav({ active }: { active: NavKey }) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[440px] -translate-x-1/2 px-4 pb-4 pt-2">
      <div className="nav-shadow flex items-center justify-around rounded-full bg-white px-3 py-3">
        {items.map(({ key, icon: Icon, label, to }) => {
          const isActive = key === active;
          return (
            <Link
              key={key}
              to={to}
              className={`flex items-center gap-2 rounded-full transition-all ${
                isActive
                  ? "bg-[oklch(0.97_0.04_30)] px-4 py-2 text-coral"
                  : "p-2 text-foreground/70 hover:text-foreground"
              }`}
            >
              <Icon className="h-6 w-6" strokeWidth={2} />
              {isActive && (
                <span className="text-sm font-semibold font-display text-coral">{label}</span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

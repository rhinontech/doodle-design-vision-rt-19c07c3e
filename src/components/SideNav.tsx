import { Link } from "@tanstack/react-router";
import { Home, Users, Bone, Compass, LayoutGrid, PawPrint, Plus } from "lucide-react";
import type { NavKey } from "./BottomNav";

const items: { key: NavKey; icon: typeof Home; label: string; to: string }[] = [
  { key: "feed", icon: Home, label: "Feed", to: "/" },
  { key: "community", icon: Users, label: "Circles", to: "/community" },
  { key: "match", icon: Bone, label: "Match", to: "/match" },
  { key: "discover", icon: Compass, label: "Discover", to: "/discover" },
  { key: "profile", icon: LayoutGrid, label: "Profile", to: "/profile" },
];

export function SideNav({ active }: { active?: NavKey }) {
  return (
    <aside className="sticky top-0 hidden h-screen shrink-0 flex-col gap-2 border-r border-border bg-card px-3 py-6 md:flex md:w-[84px] lg:w-[240px] lg:px-5">
      <Link to="/" className="flex items-center gap-2 px-2 py-2 lg:py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white">
          <PawPrint className="h-5 w-5" />
        </span>
        <span className="hidden font-display text-lg font-700 lg:inline">Furr Circle</span>
      </Link>

      <div className="mt-2 flex flex-col gap-1">
        {items.map(({ key, icon: Icon, label, to }) => {
          const isActive = key === active;
          return (
            <Link
              key={key}
              to={to}
              className={`flex items-center gap-3 rounded-2xl px-3 py-3 font-display text-[15px] font-600 transition-colors ${
                isActive ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-muted"
              }`}
            >
              <Icon className="h-6 w-6 shrink-0" strokeWidth={isActive ? 2.4 : 2} />
              <span className="hidden lg:inline">{label}</span>
            </Link>
          );
        })}
      </div>

      <Link
        to="/compose"
        className="mt-3 flex items-center justify-center gap-2 rounded-full bg-foreground py-3 font-display text-sm font-700 text-background lg:px-4"
      >
        <Plus className="h-5 w-5" />
        <span className="hidden lg:inline">New post</span>
      </Link>

      <div className="mt-auto hidden items-center gap-2 rounded-2xl bg-muted/60 p-3 lg:flex">
        <div className="h-9 w-9 rounded-full bg-coral/30" />
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-700">Goutham R.</p>
          <p className="truncate text-xs text-foreground/60">@goutham</p>
        </div>
      </div>
    </aside>
  );
}

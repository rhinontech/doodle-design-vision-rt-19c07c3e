import { Link } from "@tanstack/react-router";
import { Sparkles, TrendingUp, CalendarDays, Stethoscope } from "lucide-react";

export function RightRail() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[320px] shrink-0 flex-col gap-4 overflow-y-auto px-5 py-6 xl:flex">
      <div className="rounded-3xl bg-card p-5 card-shadow">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-coral" />
          <h3 className="font-display text-sm font-700">Trending in Mumbai</h3>
        </div>
        <ul className="mt-3 space-y-3 text-sm">
          {[
            { tag: "#MoonaMondays", posts: "1.2k posts" },
            { tag: "#AdoptDontShop", posts: "843 posts" },
            { tag: "#PuppyPlaydate", posts: "612 posts" },
          ].map((t) => (
            <li key={t.tag} className="flex items-center justify-between">
              <span className="font-600 text-foreground">{t.tag}</span>
              <span className="text-xs text-foreground/55">{t.posts}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-card p-5 card-shadow">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-pinky" />
          <h3 className="font-display text-sm font-700">This week</h3>
        </div>
        <ul className="mt-3 space-y-3">
          {[
            { t: "Bandra Beach Walk", d: "Sat · 7 AM" },
            { t: "Vet Q&A live", d: "Sun · 6 PM" },
          ].map((e) => (
            <li key={e.t} className="flex items-center justify-between rounded-xl bg-muted/60 p-3">
              <div>
                <p className="font-display text-sm font-700">{e.t}</p>
                <p className="text-xs text-foreground/60">{e.d}</p>
              </div>
              <Link to="/events" className="rounded-full bg-coral px-3 py-1 text-xs font-700 text-white">RSVP</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/care" className="flex items-center gap-3 rounded-3xl bg-primary/10 p-4 text-primary">
        <Stethoscope className="h-5 w-5" />
        <div className="flex-1">
          <p className="font-display text-sm font-700">Care reminders</p>
          <p className="text-xs text-primary/70">2 due this week</p>
        </div>
        <TrendingUp className="h-4 w-4" />
      </Link>
    </aside>
  );
}

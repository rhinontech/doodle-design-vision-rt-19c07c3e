import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Users, CalendarPlus } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { events } from "@/lib/demo-data";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Local Events — Furr Circle" }] }),
  component: EventsScreen,
});

const filters = ["All", "Adoption", "Playdate", "Training", "Meetup"];

function EventsScreen() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Local events" backTo="/profile" />

      <div className="flex gap-2 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((f, i) => (
          <button key={f} className={`shrink-0 rounded-full px-4 py-1.5 font-display text-xs font-700 ${i === 0 ? "bg-foreground text-white" : "bg-white text-foreground/70"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3 px-5 pb-8">
        {events.map((e) => (
          <article key={e.id} className={`card-shadow flex gap-4 rounded-3xl ${e.tint} p-4`}>
            <div className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-white">
              <p className="font-display text-2xl font-700 leading-none">{e.day}</p>
              <p className="mt-1 font-display text-[11px] font-700 uppercase tracking-wider text-foreground/60">{e.month}</p>
            </div>
            <div className="flex-1">
              <span className="rounded-full bg-white/70 px-2 py-0.5 font-display text-[10px] font-700 uppercase">{e.type}</span>
              <h3 className="mt-1.5 font-display text-base font-700 leading-tight">{e.title}</h3>
              <p className="mt-1 text-xs text-foreground/70">{e.date}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-foreground/70"><MapPin className="h-3 w-3" /> {e.location}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-foreground/70">
                  <Users className="h-3.5 w-3.5" />{e.attendees} going
                </span>
                <button className="rounded-full bg-foreground px-3 py-1.5 font-display text-[11px] font-700 text-white">RSVP</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link to="/compose" className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 card-shadow flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white">
        <CalendarPlus className="h-4 w-4" /><span className="font-display text-sm font-700">Host an event</span>
      </Link>
    </AppShell>
  );
}

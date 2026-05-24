import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Siren, Eye, Plus } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { lostPets } from "@/lib/demo-data";
import lostDoodle from "@/assets/doodle-lost.png";

export const Route = createFileRoute("/lost")({
  head: () => ({ meta: [{ title: "Lost & Found — Furr Circle" }] }),
  component: LostScreen,
});

const tabs = ["Lost", "Spotted"] as const;

function LostScreen() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Lost");
  const list = lostPets.filter((p) => (tab === "Lost" ? p.status === "lost" : p.status === "spotted"));
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Lost & Found" backTo="/profile" />

      <div className="px-5">
        <div className="card-shadow relative overflow-hidden rounded-3xl bg-coral p-5 text-white">
          <img src={lostDoodle} alt="" className="absolute -right-4 -bottom-3 h-28 w-28 object-contain" loading="lazy" />
          <div className="relative max-w-[60%]">
            <Siren className="h-5 w-5" />
            <h2 className="mt-2 font-display text-lg font-700 leading-tight">Alert your local circle when a pet goes missing</h2>
            <button className="mt-3 rounded-full bg-white px-3 py-1.5 font-display text-xs font-700 text-coral">Report a lost pet</button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-2 px-5">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-display text-xs font-700 ${tab === t ? "bg-foreground text-white" : "bg-white text-foreground/70"}`}>
            {t === "Lost" ? <Siren className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {t}
          </button>
        ))}
      </div>

      <div className="mt-3 space-y-3 px-5 pb-24">
        {list.map((p) => (
          <article key={p.id} className={`card-shadow flex gap-4 rounded-3xl ${p.tint} p-4`}>
            <div className="h-20 w-20 shrink-0 rounded-2xl bg-white/70" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 font-display text-[10px] font-700 uppercase text-white ${p.status === "lost" ? "bg-coral" : "bg-success"}`}>
                  {p.status}
                </span>
                {p.reward !== "—" && <span className="rounded-full bg-white/80 px-2 py-0.5 font-display text-[10px] font-700">Reward {p.reward}</span>}
              </div>
              <h3 className="mt-1.5 font-display text-base font-700 leading-tight">{p.name}</h3>
              <p className="text-xs text-foreground/70">{p.breed}</p>
              <p className="mt-1.5 flex items-center gap-1 text-xs text-foreground/70"><MapPin className="h-3 w-3" /> {p.area}</p>
              <p className="mt-0.5 text-xs text-foreground/55">{p.lastSeen}</p>
            </div>
          </article>
        ))}
      </div>

      <Link to="/compose" className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 card-shadow flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white">
        <Plus className="h-4 w-4" strokeWidth={3} /><span className="font-display text-sm font-700">I spotted a pet</span>
      </Link>
    </AppShell>
  );
}

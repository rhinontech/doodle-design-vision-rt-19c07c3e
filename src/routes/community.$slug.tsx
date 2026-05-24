import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUp, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { circles, threads } from "@/lib/demo-data";

export const Route = createFileRoute("/community/$slug")({
  head: () => ({ meta: [{ title: "Circle — Furr Circle" }] }),
  component: CircleScreen,
});

const tabs = ["Discussions", "Top", "Media"] as const;

function CircleScreen() {
  const { slug } = Route.useParams();
  const circle = circles.find((c) => c.slug === slug) ?? circles[0];
  const list = threads.filter((t) => t.circle === circle.slug);
  const items = list.length > 0 ? list : threads.slice(0, 3);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Discussions");
  const [joined, setJoined] = useState(true);

  return (
    <AppShell showNav={false}>
      <ScreenHeader title="" backTo="/community" />

      <div className="px-5">
        <div className={`card-shadow relative overflow-hidden rounded-[28px] ${circle.tint} p-5`}>
          <img src={circle.cover} alt="" className="absolute -right-4 -bottom-4 h-32 w-32 object-contain opacity-90" loading="lazy" />
          <div className="relative max-w-[60%]">
            <h1 className="font-display text-2xl font-700 leading-tight">{circle.name}</h1>
            <p className="mt-1 text-xs text-foreground/70">{(circle.members / 1000).toFixed(1)}k members</p>
            <p className="mt-3 text-xs leading-relaxed text-foreground/75">{circle.about}</p>
            <button onClick={() => setJoined(!joined)} className={`mt-4 rounded-full px-4 py-1.5 font-display text-xs font-700 ${joined ? "bg-white text-foreground" : "bg-foreground text-white"}`}>
              {joined ? "Joined ✓" : "Join circle"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2 px-5">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 font-display text-xs font-700 ${tab === t ? "bg-foreground text-white" : "bg-white text-foreground/70"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="mt-3 space-y-3 px-5 pb-24">
        {items.map((t) => (
          <Link key={t.id} to="/thread/$id" params={{ id: t.id }} className="card-shadow block rounded-2xl bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-display text-[10px] font-700 uppercase text-primary">{t.tag}</span>
              <span className="text-[11px] text-foreground/50">· {t.asker} · {t.time}</span>
            </div>
            <p className="mt-2 font-display text-base font-700 leading-snug">{t.title}</p>
            <p className="mt-1 line-clamp-2 text-sm text-foreground/70">{t.body}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-foreground/60">
              <span className="flex items-center gap-1"><ArrowUp className="h-3.5 w-3.5" /> {t.upvotes}</span>
              <span className="flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" /> {t.answers}</span>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/ask" className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 card-shadow flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white">
        <Plus className="h-4 w-4" strokeWidth={3} /><span className="font-display text-sm font-700">Ask in this circle</span>
      </Link>
    </AppShell>
  );
}

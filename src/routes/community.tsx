import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Flame, Search } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { circles, threads } from "@/lib/demo-data";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Circles — Furr Circle" },
      { name: "description", content: "Communities for every kind of pet parent." },
    ],
  }),
  component: CommunityScreen,
});

function CommunityScreen() {
  const trending = threads.slice(0, 3);
  return (
    <AppShell activeTab="community">
      <header className="flex items-center justify-between px-5 pt-8 pb-2">
        <div>
          <h1 className="font-display text-3xl font-700">Circles</h1>
          <p className="mt-1 text-xs text-foreground/60">Conversations that bring pet parents together</p>
        </div>
        <Link to="/ask" className="card-shadow flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-white">
          <Plus className="h-4 w-4" strokeWidth={3} /><span className="font-display text-sm font-700">Ask</span>
        </Link>
      </header>

      <div className="px-5 pt-3">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 card-shadow">
          <Search className="h-4 w-4 text-foreground/50" />
          <input placeholder="Search circles & questions" className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground/40" />
        </div>
      </div>

      <h2 className="mt-5 flex items-center gap-2 px-6 font-display text-base font-700">
        <Flame className="h-4 w-4 text-coral" /> Trending today
      </h2>
      <div className="mt-2 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {trending.map((t) => (
          <Link key={t.id} to="/thread/$id" params={{ id: t.id }} className="card-shadow shrink-0 w-64 rounded-3xl bg-white p-4">
            <span className="rounded-full bg-coral/15 px-2 py-0.5 font-display text-[10px] font-700 uppercase text-coral">{t.tag}</span>
            <p className="mt-2 font-display text-sm font-700 leading-snug line-clamp-3">{t.title}</p>
            <p className="mt-3 text-[11px] text-foreground/55">{t.upvotes} upvotes · {t.answers} replies</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-6 px-6 font-display text-base font-700">Your circles</h2>
      <div className="mt-2 space-y-3 px-5 pb-8">
        {circles.map((c) => (
          <Link key={c.slug} to="/community/$slug" params={{ slug: c.slug }} className="card-shadow flex items-center gap-3 rounded-2xl bg-white p-3">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl ${c.tint}`}>
              <img src={c.cover} alt="" className="h-full w-full object-contain p-1.5" loading="lazy" />
            </div>
            <div className="flex-1">
              <p className="font-display text-base font-700 leading-tight">{c.name}</p>
              <p className="text-xs text-foreground/55">{(c.members / 1000).toFixed(1)}k members</p>
            </div>
            {c.unread > 0 && (
              <span className="rounded-full bg-coral px-2 py-0.5 font-display text-[10px] font-700 text-white">{c.unread} new</span>
            )}
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

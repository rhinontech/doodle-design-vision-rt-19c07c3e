import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MessageCircle, Send, Bookmark, Plus, Bell, Search } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { posts, type Post } from "@/lib/demo-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Furr Circle — Where Pets Become Social" },
      { name: "description", content: "The social ecosystem for modern pet parents." },
    ],
  }),
  component: FeedScreen,
});

function FeedScreen() {
  const [open, setOpen] = useState(false);
  return (
    <AppShell activeTab="feed">
      <FeedHeader />
      <StoryRail />
      <div className="mt-4 space-y-5 px-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        aria-label="Create"
        className="fixed bottom-24 left-1/2 z-30 -translate-x-1/2 translate-x-[110px] card-shadow flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-transform active:scale-95"
        style={{ marginLeft: "0" }}
      >
        <Plus className="h-7 w-7" strokeWidth={2.4} />
      </button>

      {open && <ComposeSheet onClose={() => setOpen(false)} />}
    </AppShell>
  );
}

function FeedHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-surface/85 px-5 pt-8 pb-3 backdrop-blur">
      <div>
        <h1 className="font-display text-3xl font-700 leading-none tracking-tight">
          Furr<span className="text-coral">Circle</span>
        </h1>
        <p className="mt-1 text-xs text-foreground/60">Today's circle, picked for Moona</p>
      </div>
      <div className="flex gap-2">
        <Link to="/discover" className="rounded-full bg-white p-2.5 card-shadow"><Search className="h-5 w-5" /></Link>
        <Link to="/notifications" className="relative rounded-full bg-white p-2.5 card-shadow">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-coral" />
        </Link>
      </div>
    </header>
  );
}

function StoryRail() {
  const stories = [
    { label: "Your reel", isYou: true, tint: "bg-primary/10" },
    { label: "Moona", tint: "bg-coral/20" },
    { label: "Mochi", tint: "bg-primary/10" },
    { label: "Kobi", tint: "bg-sunshine/30" },
    { label: "Biscuit", tint: "bg-pinky/15" },
    { label: "Rocky", tint: "bg-success/15" },
  ];
  return (
    <div className="flex gap-3 overflow-x-auto px-5 pt-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {stories.map((s) => (
        <Link key={s.label} to="/reels" className="flex w-16 flex-col items-center gap-1.5">
          <div className={`h-16 w-16 rounded-full p-[2.5px] ${s.isYou ? "bg-foreground/15" : "bg-gradient-to-br from-coral via-pinky to-primary"}`}>
            <div className={`flex h-full w-full items-center justify-center rounded-full ${s.tint} ring-2 ring-surface`}>
              {s.isYou && <Plus className="h-5 w-5 text-foreground/70" />}
            </div>
          </div>
          <span className="truncate text-[11px] font-500 text-foreground/70">{s.label}</span>
        </Link>
      ))}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="card-shadow overflow-hidden rounded-3xl bg-white">
      <header className="flex items-center gap-3 px-4 pt-4">
        <div className={`h-10 w-10 overflow-hidden rounded-full ${post.tint}`}>
          <img src={post.avatar} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1">
          <p className="font-display text-sm font-700 leading-tight">{post.pet}</p>
          <p className="text-[11px] text-foreground/55">by {post.owner} · {post.time}</p>
        </div>
        {post.type === "rescue" && <span className="rounded-full bg-success px-2.5 py-1 font-display text-[10px] font-700 text-white">RESCUE</span>}
        {post.type === "milestone" && <span className="rounded-full bg-pinky px-2.5 py-1 font-display text-[10px] font-700 text-white">MILESTONE</span>}
      </header>

      <Link to="/post/$id" params={{ id: post.id }} className="mt-3 block">
        <div className={`mx-4 flex aspect-square items-center justify-center overflow-hidden rounded-2xl ${post.tint}`}>
          <img src={post.image} alt={post.pet} className="h-full w-full object-contain p-6" loading="lazy" />
        </div>
      </Link>

      <div className="flex items-center gap-4 px-4 pt-3 text-foreground">
        <button className="flex items-center gap-1.5"><Heart className="h-6 w-6" /><span className="text-sm font-600">{post.likes}</span></button>
        <button className="flex items-center gap-1.5"><MessageCircle className="h-6 w-6" /><span className="text-sm font-600">{post.comments}</span></button>
        <button><Send className="h-6 w-6" /></button>
        <button className="ml-auto"><Bookmark className="h-6 w-6" /></button>
      </div>

      <p className="px-4 pt-2 text-sm leading-snug"><b className="font-display font-700">{post.pet}</b> {post.caption}</p>
      <p className="px-4 pb-4 pt-1 text-xs font-500 text-primary">
        {post.tags.map((t) => `#${t}`).join("  ")}
      </p>
    </article>
  );
}

function ComposeSheet({ onClose }: { onClose: () => void }) {
  const opts = [
    { label: "New Post", desc: "Share a photo of your pet", tint: "bg-coral/15", to: "/compose" },
    { label: "New Reel", desc: "Quick video moment", tint: "bg-primary/10", to: "/reels" },
    { label: "Ask the Community", desc: "Get help from pet parents", tint: "bg-sunshine/30", to: "/ask" },
    { label: "Add Memory", desc: "Save to Moona's vault", tint: "bg-pinky/15", to: "/memory" },
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" />
      <div
        className="relative mx-auto w-full max-w-[440px] rounded-t-[32px] bg-white p-5 pb-8 card-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-foreground/15" />
        <h2 className="px-1 font-display text-xl font-700">Create</h2>
        <div className="mt-3 space-y-2">
          {opts.map((o) => (
            <Link key={o.label} to={o.to} onClick={onClose} className="flex items-center gap-4 rounded-2xl bg-surface p-4 transition active:scale-[0.98]">
              <span className={`h-12 w-12 rounded-2xl ${o.tint}`} />
              <div className="flex-1">
                <p className="font-display text-base font-700">{o.label}</p>
                <p className="text-xs text-foreground/60">{o.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

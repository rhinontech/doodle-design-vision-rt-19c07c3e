import { createFileRoute, Link } from "@tanstack/react-router";
import { Image as ImageIcon, Hash, MapPin, X } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import boyDog from "@/assets/doodle-boy-dog.png";
import cat from "@/assets/doodle-cat.png";

export const Route = createFileRoute("/compose")({
  head: () => ({ meta: [{ title: "New Post — Furr Circle" }] }),
  component: ComposeScreen,
});

const types = ["Photo", "Reel", "Milestone", "Rescue story"] as const;

function ComposeScreen() {
  const [type, setType] = useState<(typeof types)[number]>("Photo");
  const [pet, setPet] = useState<"Moona" | "Kobi">("Moona");
  return (
    <AppShell showNav={false}>
      <header className="flex items-center justify-between px-5 pt-6 pb-3">
        <Link to="/" className="rounded-full bg-white p-2 card-shadow"><X className="h-5 w-5" /></Link>
        <h1 className="font-display text-lg font-700">New post</h1>
        <button className="rounded-full bg-primary px-4 py-2 font-display text-sm font-700 text-white">Share</button>
      </header>

      <div className="px-5">
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {types.map((t) => (
            <button key={t} onClick={() => setType(t)}
              className={`shrink-0 rounded-full px-4 py-2 font-display text-sm font-600 ${type === t ? "bg-foreground text-white" : "bg-white text-foreground/70"}`}>
              {t}
            </button>
          ))}
        </div>

        <p className="mt-4 font-display text-sm font-600 text-foreground/70">Posting as</p>
        <div className="mt-2 flex gap-2">
          {[
            { name: "Moona", img: boyDog, tint: "bg-coral/15" },
            { name: "Kobi", img: cat, tint: "bg-primary/10" },
          ].map((p) => (
            <button key={p.name} onClick={() => setPet(p.name as "Moona" | "Kobi")}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition ${pet === p.name ? "bg-foreground text-white" : "bg-white text-foreground"} card-shadow`}>
              <span className={`h-7 w-7 overflow-hidden rounded-full ${p.tint}`}><img src={p.img} alt="" className="h-full w-full object-cover" /></span>
              <span className="font-display text-sm font-700">{p.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <button className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-foreground/15 bg-white text-foreground/60">
            <ImageIcon className="h-6 w-6" />
            <span className="text-xs font-600">Add</span>
          </button>
          <div className="aspect-square rounded-2xl bg-coral/20" />
          <div className="aspect-square rounded-2xl bg-sunshine/30" />
        </div>

        <textarea
          placeholder="Tell the circle what's happening…"
          rows={4}
          className="mt-5 w-full resize-none rounded-2xl bg-white p-4 text-sm outline-none placeholder:text-foreground/40 card-shadow"
        />

        <div className="mt-3 space-y-2">
          <Row icon={Hash} label="Add tags" value="#bordercollie  #mumbaipets" />
          <Row icon={MapPin} label="Location" value="Joggers Park, Mumbai" />
        </div>
      </div>
    </AppShell>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof Hash; label: string; value: string }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 card-shadow">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1 text-left">
        <p className="font-display text-sm font-700">{label}</p>
        <p className="text-xs text-foreground/55">{value}</p>
      </div>
    </button>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Search, Play, Heart, MapPin } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import community from "@/assets/doodle-community.png";
import walk from "@/assets/doodle-walk.png";
import puppy from "@/assets/doodle-puppy.png";
import cat from "@/assets/doodle-cat.png";

export const Route = createFileRoute("/discover")({
  head: () => ({ meta: [{ title: "Discover — Furr Circle" }] }),
  component: DiscoverScreen,
});

const reels = [
  { img: puppy, who: "@biscuit", tint: "bg-sunshine/30" },
  { img: cat, who: "@mochi", tint: "bg-pinky/20" },
  { img: walk, who: "@luna", tint: "bg-primary/15" },
  { img: community, who: "@pack", tint: "bg-coral/20" },
];

function DiscoverScreen() {
  return (
    <AppShell activeTab="discover">
      <header className="px-6 pt-10">
        <h1 className="font-display text-3xl font-700">Discover</h1>
        <p className="mt-1 text-sm text-foreground/60">Reels, stories & pets near you</p>
      </header>

      <div className="mt-4 px-5">
        <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 card-shadow">
          <Search className="h-5 w-5 text-foreground/50" />
          <input
            className="flex-1 bg-transparent text-base placeholder:text-foreground/40 focus:outline-none"
            placeholder="Search breeds, places, vets…"
          />
        </div>
      </div>

      <h2 className="mt-6 px-6 font-display text-lg font-600">Reels</h2>
      <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reels.map((r) => (
          <div key={r.who} className={`relative flex h-44 w-32 shrink-0 items-end overflow-hidden rounded-2xl ${r.tint}`}>
            <img src={r.img} alt={r.who} className="absolute inset-0 h-full w-full object-contain p-2" loading="lazy" />
            <div className="relative flex w-full items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-2 pt-6 pb-2">
              <p className="font-display text-xs font-600 text-white">{r.who}</p>
              <Play className="h-4 w-4 fill-white text-white" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-6 px-6 font-display text-lg font-600">Adoption nearby</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 px-5 pb-6">
        {[
          { img: puppy, name: "Biscuit", breed: "Beagle", dist: "0.8 km", tint: "bg-sunshine/30" },
          { img: cat, name: "Mochi", breed: "Persian", dist: "1.2 km", tint: "bg-pinky/20" },
        ].map((p) => (
          <div key={p.name} className="card-shadow overflow-hidden rounded-3xl bg-white">
            <div className={`flex h-32 items-center justify-center ${p.tint}`}>
              <img src={p.img} alt={p.name} className="h-full w-full object-contain p-3" loading="lazy" />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <p className="font-display text-base font-700">{p.name}</p>
                <Heart className="h-4 w-4 text-pinky" />
              </div>
              <p className="text-xs text-foreground/60">{p.breed}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-foreground/50">
                <MapPin className="h-3 w-3" /> {p.dist}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

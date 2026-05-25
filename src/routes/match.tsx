import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, X, Star } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import puppy from "@/assets/doodle-puppy.png";
import cat from "@/assets/doodle-cat.png";
import boyDog from "@/assets/doodle-boy-dog.png";
import walk from "@/assets/doodle-walk.png";
import group from "@/assets/doodle-group.png";
import rescue from "@/assets/doodle-rescue.png";

export const Route = createFileRoute("/match")({
  head: () => ({ meta: [{ title: "Match — Furr Circle" }] }),
  component: MatchScreen,
});

type Mode = "Adoption" | "Playdate" | "Breed" | "Owner";
const modes: Mode[] = ["Adoption", "Playdate", "Breed", "Owner"];

type Card = {
  img: string;
  name: string;
  meta: string;
  tag: string;
  tint: string;
  badge?: string;
};

const cardsByMode: Record<Mode, Card[]> = {
  Adoption: [
    { img: puppy, name: "Biscuit", meta: "Beagle · 4 mo · 0.8 km", tag: "Looking for a forever home", tint: "bg-[oklch(0.95_0.06_85)]", badge: "NEW" },
    { img: rescue, name: "Coco", meta: "Indie · 1 yr · 2.1 km", tag: "Rescued · vaccinated · neutered", tint: "bg-success/20" },
    { img: cat, name: "Mochi", meta: "Persian Mix · 1 yr · 1.2 km", tag: "Loves cuddles & windows", tint: "bg-pinky/20" },
  ],
  Playdate: [
    { img: boyDog, name: "Moona", meta: "Border Collie · 2 y · 0.4 km", tag: "Free this Sunday at Joggers Park", tint: "bg-coral/20", badge: "ONLINE" },
    { img: walk, name: "Rio", meta: "Labrador · 3 y · 1.1 km", tag: "Loves long beach walks", tint: "bg-primary/15" },
    { img: puppy, name: "Toffee", meta: "Cocker Spaniel · 8 mo · 0.9 km", tag: "Puppy energy, needs friends", tint: "bg-sunshine/30" },
  ],
  Breed: [
    { img: puppy, name: "Max", meta: "Beagle · ♂ · 2 y · KCI", tag: "Stud · all health clearances", tint: "bg-sunshine/30", badge: "VERIFIED" },
    { img: boyDog, name: "Skye", meta: "Border Collie · ♀ · 3 y", tag: "Champion bloodline · DNA tested", tint: "bg-primary/15" },
    { img: cat, name: "Pearl", meta: "Persian · ♀ · 2 y", tag: "Show grade · CFA registered", tint: "bg-pinky/20" },
  ],
  Owner: [
    { img: group, name: "Aanya, 27", meta: "Mumbai · 2 cats · vegetarian home", tag: "Looking for cat-friendly playdates", tint: "bg-pinky/15", badge: "NEW" },
    { img: walk, name: "Rohan, 31", meta: "Bandra · 1 lab · morning runner", tag: "Weekend hike buddy wanted 🐾", tint: "bg-primary/10" },
    { img: boyDog, name: "Priya, 24", meta: "Powai · 1 indie · trainer in training", tag: "Want to swap training tips", tint: "bg-coral/15" },
  ],
};

function MatchScreen() {
  const [mode, setMode] = useState<Mode>("Adoption");
  const [index, setIndex] = useState(0);
  const cards = cardsByMode[mode];
  const top = cards[index % cards.length];
  const next = cards[(index + 1) % cards.length];

  const advance = () => setIndex((i) => i + 1);

  return (
    <AppShell activeTab="match">
      <header className="flex items-center justify-between px-6 pt-10">
        <h1 className="font-display text-3xl font-700">Match</h1>
        <Link to="/discover" className="text-sm font-500 text-primary">Filters</Link>
      </header>

      <div className="mt-4 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setIndex(0); }}
            className={`shrink-0 rounded-full px-5 py-2 font-display text-sm font-600 transition-colors ${
              mode === m ? "bg-foreground text-white" : "bg-white text-foreground/70"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="relative mx-5 mt-4 h-[480px]">
        <SwipeCard key={`${mode}-bg-${index}`} {...next} offset="rotate-2 translate-x-2" z="z-0" />
        <SwipeCard key={`${mode}-top-${index}`} {...top} offset="-rotate-1 -translate-x-1" z="z-10" topCard />
      </div>

      <div className="mt-4 flex items-center justify-center gap-5 px-5">
        <ActionBtn onClick={advance} className="bg-white text-foreground" size={56}>
          <X className="h-6 w-6" strokeWidth={2.6} />
        </ActionBtn>
        <ActionBtn onClick={advance} className="bg-primary text-white" size={72}>
          <Heart className="h-7 w-7 fill-white" />
        </ActionBtn>
        <ActionBtn onClick={advance} className="bg-white text-sunshine" size={56}>
          <Star className="h-6 w-6 fill-sunshine" />
        </ActionBtn>
      </div>
    </AppShell>
  );
}

function ActionBtn({ children, className, size, onClick }: { children: React.ReactNode; className: string; size: number; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ width: size, height: size }}
      className={`card-shadow flex items-center justify-center rounded-full transition-transform active:scale-90 ${className}`}
    >
      {children}
    </button>
  );
}

function SwipeCard({
  img, name, meta, tag, tint, badge, offset, z, topCard,
}: Card & { offset: string; z: string; topCard?: boolean }) {
  return (
    <div
      className={`absolute inset-0 ${z} ${offset} card-shadow flex flex-col justify-end overflow-hidden rounded-[32px] ${tint} p-5 transition-all`}
    >
      <img src={img} alt={name} className="absolute inset-x-0 top-4 mx-auto h-[70%] w-auto object-contain" loading="lazy" />
      {topCard && badge && (
        <span className="absolute top-4 right-4 rounded-full bg-success px-3 py-1 font-display text-xs font-700 text-white">
          {badge}
        </span>
      )}
      <div className="relative rounded-2xl bg-white/90 p-4 backdrop-blur">
        <p className="font-display text-2xl font-700 leading-tight">{name}</p>
        <p className="text-sm text-foreground/60">{meta}</p>
        <p className="mt-2 text-sm font-500 text-foreground">{tag}</p>
      </div>
    </div>
  );
}

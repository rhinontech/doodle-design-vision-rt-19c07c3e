import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, X, Star } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import puppy from "@/assets/doodle-puppy.png";
import cat from "@/assets/doodle-cat.png";

export const Route = createFileRoute("/match")({
  head: () => ({ meta: [{ title: "Match — Furr Circle" }] }),
  component: MatchScreen,
});

const modes = ["Adoption", "Playdate", "Breed", "Owner"];

function MatchScreen() {
  return (
    <AppShell activeTab="match">
      <header className="flex items-center justify-between px-6 pt-10">
        <h1 className="font-display text-3xl font-700">Match</h1>
        <Link to="/discover" className="text-sm font-500 text-primary">Filters</Link>
      </header>

      <div className="mt-4 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {modes.map((m, i) => (
          <button
            key={m}
            className={`shrink-0 rounded-full px-5 py-2 font-display text-sm font-600 ${
              i === 0 ? "bg-foreground text-white" : "bg-white text-foreground/70"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Card stack */}
      <div className="relative mx-5 mt-4 h-[480px]">
        <SwipeCard
          img={puppy}
          name="Biscuit"
          meta="Beagle · 4 mo · 0.8 km away"
          tag="Looking for a forever home"
          tint="bg-[oklch(0.95_0.06_85)]"
          offset="rotate-2 translate-x-2"
          z="z-0"
        />
        <SwipeCard
          img={cat}
          name="Mochi"
          meta="Persian Mix · 1 yr · 1.2 km"
          tag="Loves cuddles & windows"
          tint="bg-[oklch(0.94_0.05_350)]"
          offset="-rotate-1 -translate-x-1"
          z="z-10"
          top
        />
      </div>

      {/* Action row */}
      <div className="mt-4 flex items-center justify-center gap-5 px-5">
        <ActionBtn className="bg-white text-foreground" size={56}>
          <X className="h-6 w-6" strokeWidth={2.6} />
        </ActionBtn>
        <ActionBtn className="bg-primary text-white" size={72}>
          <Heart className="h-7 w-7 fill-white" />
        </ActionBtn>
        <ActionBtn className="bg-white text-sunshine" size={56}>
          <Star className="h-6 w-6 fill-sunshine" />
        </ActionBtn>
      </div>
    </AppShell>
  );
}

function ActionBtn({ children, className, size }: { children: React.ReactNode; className: string; size: number }) {
  return (
    <button
      style={{ width: size, height: size }}
      className={`card-shadow flex items-center justify-center rounded-full transition-transform active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

function SwipeCard({
  img,
  name,
  meta,
  tag,
  tint,
  offset,
  z,
  top,
}: {
  img: string;
  name: string;
  meta: string;
  tag: string;
  tint: string;
  offset: string;
  z: string;
  top?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 ${z} ${offset} card-shadow flex flex-col justify-end overflow-hidden rounded-[32px] ${tint} p-5`}
    >
      <img src={img} alt={name} className="absolute inset-x-0 top-4 mx-auto h-[70%] w-auto object-contain" loading="lazy" />
      {top && (
        <span className="absolute top-4 right-4 rounded-full bg-success px-3 py-1 font-display text-xs font-700 text-white">
          NEW
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

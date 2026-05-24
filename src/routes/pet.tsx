import { createFileRoute } from "@tanstack/react-router";
import { Heart, Share2, MapPin, ShieldCheck, Cake, Ruler } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import boyDog from "@/assets/doodle-boy-dog.png";

export const Route = createFileRoute("/pet")({
  head: () => ({ meta: [{ title: "Moona — Furr Circle" }] }),
  component: PetScreen,
});

function PetScreen() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Pet Profile" backTo="/profile" />

      <div className="mt-4 px-5">
        <div className="card-shadow relative overflow-hidden rounded-[32px] bg-coral/20 p-6">
          <img src={boyDog} alt="Moona" className="mx-auto h-56 w-auto object-contain" loading="lazy" />
          <button className="absolute right-4 top-4 rounded-full bg-white p-2 card-shadow">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="absolute right-4 top-16 rounded-full bg-white p-2 card-shadow">
            <Heart className="h-4 w-4 fill-pinky text-pinky" />
          </button>
        </div>
      </div>

      <div className="mt-5 px-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-display text-3xl font-700">Moona</h1>
            <p className="text-sm text-foreground/60">Border Collie · ♀ · 2 years</p>
          </div>
          <span className="rounded-full bg-success px-3 py-1 font-display text-xs font-700 text-white inline-flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> Verified
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <Stat icon={Cake} label="Age" value="2 y" />
          <Stat icon={Ruler} label="Weight" value="14 kg" />
          <Stat icon={MapPin} label="Mumbai" value="2 km" />
        </div>
      </div>

      <h2 className="mt-7 px-6 font-display text-lg font-600">Personality</h2>
      <div className="mt-2 flex flex-wrap gap-2 px-5">
        {["Playful", "Loves water", "Good with kids", "Loud barker", "Smart"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1.5 text-sm font-500 ${
              [
                "bg-primary/15 text-primary",
                "bg-coral/15 text-coral",
                "bg-sunshine/30 text-foreground",
                "bg-pinky/15 text-pinky",
                "bg-success/15 text-success",
              ][i % 5]
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <h2 className="mt-7 px-6 font-display text-lg font-600">Gallery</h2>
      <div className="mt-2 grid grid-cols-3 gap-2 px-5 pb-8">
        {["bg-sunshine/30", "bg-primary/15", "bg-coral/20", "bg-pinky/15", "bg-success/15", "bg-foreground/10"].map((c, i) => (
          <div key={i} className={`aspect-square rounded-2xl ${c}`} />
        ))}
      </div>
    </AppShell>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Cake; label: string; value: string }) {
  return (
    <div className="card-shadow rounded-2xl bg-white p-3 text-center">
      <Icon className="mx-auto h-5 w-5 text-foreground/60" />
      <p className="mt-1 font-display text-base font-700">{value}</p>
      <p className="text-xs text-foreground/50">{label}</p>
    </div>
  );
}

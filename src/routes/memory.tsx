import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Plus } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import boyDog from "@/assets/doodle-boy-dog.png";
import birthday from "@/assets/doodle-birthday.png";
import walk from "@/assets/doodle-walk.png";
import rescue from "@/assets/doodle-rescue.png";
import trophy from "@/assets/icon-trophy.png";

export const Route = createFileRoute("/memory")({
  head: () => ({ meta: [{ title: "Memory Vault — Furr Circle" }] }),
  component: MemoryScreen,
});

const aura = {
  zodiac: "Leo ♌",
  mood: "Playful",
  traits: ["Loyal", "Water-loving", "Mischievous", "Smart"],
  score: 92,
};

const years = [
  { year: "2026", grid: [boyDog, birthday, walk, boyDog, walk, birthday] },
  { year: "2025", grid: [walk, boyDog, rescue, birthday] },
  { year: "2024", grid: [rescue, walk, boyDog] },
];

function MemoryScreen() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Memory vault" backTo="/pet" />

      <div className="px-5">
        <div className="card-shadow relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary to-pinky p-5 text-white">
          <img src={trophy} alt="" className="absolute -right-3 -bottom-3 h-28 w-28 object-contain opacity-90" loading="lazy" />
          <div className="relative max-w-[65%]">
            <div className="flex items-center gap-1.5 text-xs"><Sparkles className="h-3.5 w-3.5" /> Moona's pet aura</div>
            <p className="mt-2 font-display text-2xl font-700 leading-tight">{aura.zodiac} · {aura.mood}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {aura.traits.map((t) => (
                <span key={t} className="rounded-full bg-white/20 px-2.5 py-1 font-display text-[11px] font-700 backdrop-blur">{t}</span>
              ))}
            </div>
            <p className="mt-4 text-xs opacity-85"><b className="text-base font-display">{aura.score}%</b> compatibility with Goutham</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6 px-5 pb-8">
        {years.map((y) => (
          <section key={y.year}>
            <h2 className="px-1 font-display text-lg font-700">{y.year}</h2>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {y.grid.map((img, i) => (
                <div key={i} className={`aspect-square overflow-hidden rounded-2xl ${["bg-coral/15", "bg-sunshine/30", "bg-primary/10", "bg-pinky/15", "bg-success/15", "bg-foreground/5"][i % 6]}`}>
                  <img src={img} alt="" className="h-full w-full object-contain p-3" loading="lazy" />
                </div>
              ))}
              <button className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-foreground/15 text-foreground/40">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}

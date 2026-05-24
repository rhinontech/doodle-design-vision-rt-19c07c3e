import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MessageCircle, Send, Music2, ChevronLeft, Bookmark } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import boyDog from "@/assets/doodle-boy-dog.png";
import puppy from "@/assets/doodle-puppy.png";
import birthday from "@/assets/doodle-birthday.png";
import rescue from "@/assets/doodle-rescue.png";

export const Route = createFileRoute("/reels")({
  head: () => ({ meta: [{ title: "Reels — Furr Circle" }] }),
  component: ReelsScreen,
});

const reels = [
  { img: boyDog, tint: "from-coral/40 to-coral/10", pet: "Moona", owner: "Goutham R.", caption: "Zoomies at golden hour 🌅", audio: "Original · Goutham", likes: "12.4k", comments: "318" },
  { img: puppy, tint: "from-sunshine/40 to-sunshine/10", pet: "Biscuit", owner: "Rescue & Co.", caption: "Day 1 vs Day 180 — same dog, new life.", audio: "Hope · Furr Originals", likes: "84.1k", comments: "2.1k" },
  { img: birthday, tint: "from-pinky/40 to-pinky/10", pet: "Kobi", owner: "Mehul S.", caption: "Birthday boy got carrot pupcake 🎂", audio: "Birthday Mix · Trending", likes: "9.8k", comments: "412" },
  { img: rescue, tint: "from-success/40 to-success/10", pet: "Pack", owner: "Indie Dogs India", caption: "14 indies, 14 stories. Adoption drive Saturday.", audio: "Adopt · Don't Shop", likes: "21.7k", comments: "904" },
];

function ReelsScreen() {
  return (
    <AppShell showNav={false} bgClass="bg-foreground">
      <div className="h-screen snap-y snap-mandatory overflow-y-auto">
        {reels.map((r, i) => (
          <section key={i} className="relative flex h-screen w-full snap-start items-center justify-center overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-b ${r.tint}`} />
            <img src={r.img} alt="" className="relative h-[55%] w-auto object-contain drop-shadow-2xl" loading="lazy" />

            {i === 0 && (
              <Link to="/" className="absolute left-4 top-6 z-20 rounded-full bg-white/15 p-2 backdrop-blur">
                <ChevronLeft className="h-5 w-5 text-white" />
              </Link>
            )}
            {i === 0 && (
              <div className="absolute top-6 left-1/2 z-20 -translate-x-1/2 text-white">
                <p className="font-display text-sm font-700">Reels</p>
              </div>
            )}

            <div className="absolute right-3 bottom-32 z-20 flex flex-col items-center gap-5 text-white">
              <div className="h-11 w-11 rounded-full bg-white/20 ring-2 ring-white" />
              <ActionIcon icon={Heart} label={r.likes} />
              <ActionIcon icon={MessageCircle} label={r.comments} />
              <ActionIcon icon={Send} label="Share" />
              <ActionIcon icon={Bookmark} label="Save" />
            </div>

            <footer className="absolute inset-x-0 bottom-8 z-10 px-5 text-white">
              <p className="font-display text-base font-700">{r.pet} <span className="text-white/70 font-500"> · @{r.owner.toLowerCase().replace(/[^a-z]/g, "")}</span></p>
              <p className="mt-1 max-w-[78%] text-sm leading-snug">{r.caption}</p>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <Music2 className="h-3.5 w-3.5" />
                <span className="truncate">{r.audio}</span>
              </div>
            </footer>
          </section>
        ))}
      </div>
    </AppShell>
  );
}

function ActionIcon({ icon: Icon, label }: { icon: typeof Heart; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1">
      <Icon className="h-7 w-7" />
      <span className="text-[11px] font-600">{label}</span>
    </button>
  );
}

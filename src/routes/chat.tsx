import { createFileRoute } from "@tanstack/react-router";
import { Search, Plus } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import boyDog from "@/assets/doodle-boy-dog.png";
import cat from "@/assets/doodle-cat.png";
import puppy from "@/assets/doodle-puppy.png";
import community from "@/assets/doodle-community.png";

export const Route = createFileRoute("/chat")({
  head: () => ({ meta: [{ title: "Messages — Furr Circle" }] }),
  component: ChatScreen,
});

const chats = [
  { name: "Anya & Biscuit", msg: "Sunday park meet-up?", time: "2m", unread: 2, img: puppy, tint: "bg-sunshine/30" },
  { name: "Dr. Mehta (Vet)", msg: "Vaccination report attached.", time: "1h", unread: 0, img: boyDog, tint: "bg-primary/15" },
  { name: "Mochi's mom", msg: "She's so cute 😻", time: "3h", unread: 1, img: cat, tint: "bg-pinky/15" },
  { name: "Mumbai Collies", msg: "12 new posts today", time: "1d", unread: 0, img: community, tint: "bg-coral/15" },
];

function ChatScreen() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Messages" backTo="/profile" />

      <div className="mt-2 px-5">
        <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 card-shadow">
          <Search className="h-5 w-5 text-foreground/50" />
          <input className="flex-1 bg-transparent text-base placeholder:text-foreground/40 focus:outline-none" placeholder="Search chats" />
        </div>
      </div>

      <div className="mt-5 space-y-2 px-5 pb-8">
        {chats.map((c) => (
          <div key={c.name} className="flex items-center gap-3 rounded-2xl bg-white p-3 card-shadow">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full ${c.tint}`}>
              <img src={c.img} alt="" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <p className="font-display text-base font-700 truncate">{c.name}</p>
                <span className="text-xs text-foreground/40">{c.time}</span>
              </div>
              <p className="truncate text-sm text-foreground/60">{c.msg}</p>
            </div>
            {c.unread > 0 && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-coral font-display text-xs font-700 text-white">
                {c.unread}
              </span>
            )}
          </div>
        ))}
      </div>

      <button className="fixed bottom-24 left-1/2 -translate-x-1/2 translate-x-[140px] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white card-shadow">
        <Plus className="h-6 w-6" />
      </button>
    </AppShell>
  );
}

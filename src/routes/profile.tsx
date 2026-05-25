import { createFileRoute, Link } from "@tanstack/react-router";
import { Settings, ChevronRight, Bell, MessageCircle, MapPin, Award, Sun, CalendarDays, Siren, Stethoscope, Share2, Plus } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import boyDog from "@/assets/doodle-boy-dog.png";
import { useEffect, useState } from "react";
import { getPets, type Pet } from "@/lib/pets-store";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Furr Circle" }] }),
  component: ProfileScreen,
});

const SEED = [
  { id: "moona", name: "Moona", breed: "Collie · ♀ · 2y", tint: "bg-coral/15" },
  { id: "kobi", name: "Kobi", breed: "Tabby · ♂ · 4y", tint: "bg-primary/10" },
];

const TINTS = ["bg-coral/15", "bg-primary/10", "bg-sunshine/30", "bg-pinky/15", "bg-success/15"];

function ProfileScreen() {
  return (
    <AppShell activeTab="profile">
      <header className="flex items-center justify-between px-6 pt-10">
        <h1 className="font-display text-3xl font-700">Profile</h1>
        <div className="flex gap-2">
          <Link to="/u/$handle" params={{ handle: "goutham" }} className="rounded-full bg-white p-2 card-shadow">
            <Share2 className="h-5 w-5" />
          </Link>
          <Link to="/settings" className="rounded-full bg-white p-2 card-shadow">
            <Settings className="h-5 w-5" />
          </Link>
        </div>
      </header>

      <div className="mt-6 px-5">
        <div className="card-shadow flex items-center gap-4 rounded-3xl bg-white p-4">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-coral/15">
            <img src={boyDog} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex-1">
            <p className="font-display text-xl font-700">Goutham R.</p>
            <p className="text-sm text-foreground/60">Mumbai · 2 pets</p>
            <div className="mt-2 flex gap-3 text-xs text-foreground/60">
              <span><b className="text-foreground">128</b> followers</span>
              <span><b className="text-foreground">96</b> following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between px-6">
        <h2 className="font-display text-lg font-600">My pets</h2>
        <Link to="/add-pet" className="flex items-center gap-1 text-sm font-600 text-coral">
          <Plus className="h-4 w-4" /> Add pet
        </Link>
      </div>
      <MyPets />


      <h2 className="mt-6 px-6 font-display text-lg font-600">Quick access</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 px-5">
        <Tile to="/today" icon={Sun} label="Today" tint="bg-coral/15" />
        <Tile to="/events" icon={CalendarDays} label="Events" tint="bg-sunshine/30" />
        <Tile to="/lost" icon={Siren} label="Lost & Found" tint="bg-pinky/15" />
        <Tile to="/care" icon={Stethoscope} label="Care" tint="bg-primary/10" />
      </div>

      <h2 className="mt-6 px-6 font-display text-lg font-600">Activity</h2>
      <div className="mt-3 space-y-3 px-5 pb-6">
        <Row to="/notifications" icon={Bell} label="Notifications" meta="3 new" tint="bg-sunshine/30" />
        <Row to="/chat" icon={MessageCircle} label="Messages" meta="2 unread" tint="bg-primary/10" />
        <Row to="/pet" icon={Award} label="Badges & Achievements" meta="12" tint="bg-pinky/15" />
        <Row to="/discover" icon={MapPin} label="Places visited" meta="8" tint="bg-success/15" />
      </div>
    </AppShell>
  );
}

function Row({ to, icon: Icon, label, meta, tint }: { to: string; icon: typeof Bell; label: string; meta: string; tint: string }) {
  return (
    <Link to={to} className="card-shadow flex items-center gap-3 rounded-2xl bg-white p-4">
      <span className={`flex h-10 w-10 items-center justify-center rounded-full ${tint}`}>
        <Icon className="h-5 w-5 text-foreground" />
      </span>
      <p className="flex-1 font-display text-base font-600">{label}</p>
      <span className="text-sm text-foreground/50">{meta}</span>
      <ChevronRight className="h-4 w-4 text-foreground/40" />
    </Link>
  );
}

function Tile({ to, icon: Icon, label, tint }: { to: string; icon: typeof Bell; label: string; tint: string }) {
  return (
    <Link to={to} className={`card-shadow flex flex-col gap-2 rounded-2xl ${tint} p-4`}>
      <Icon className="h-5 w-5 text-foreground" />
      <p className="font-display text-sm font-700">{label}</p>
    </Link>
  );
}

function MyPets() {
  const [pets, setPets] = useState<Pet[]>([]);
  useEffect(() => {
    const sync = () => setPets(getPets());
    sync();
    window.addEventListener("furr:pets", sync);
    return () => window.removeEventListener("furr:pets", sync);
  }, []);

  return (
    <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {SEED.map((p) => (
        <Link key={p.id} to="/pet" className={`shrink-0 rounded-3xl ${p.tint} p-4 w-44 card-shadow`}>
          <div className="h-20 rounded-2xl bg-white/60" />
          <p className="mt-2 font-display text-base font-700">{p.name}</p>
          <p className="text-xs text-foreground/60">{p.breed}</p>
        </Link>
      ))}
      {pets.map((p, i) => (
        <Link key={p.id} to="/pet" className={`shrink-0 rounded-3xl ${TINTS[(i + 2) % TINTS.length]} p-4 w-44 card-shadow`}>
          <div className="h-20 overflow-hidden rounded-2xl bg-white/60">
            {p.photo && <img src={p.photo} alt="" className="h-full w-full object-cover" />}
          </div>
          <p className="mt-2 font-display text-base font-700">{p.name}</p>
          <p className="text-xs text-foreground/60 capitalize">{p.breed} · {p.gender === "female" ? "♀" : "♂"} · {p.ageYears}y</p>
        </Link>
      ))}
      <Link to="/add-pet" className="shrink-0 flex flex-col items-center justify-center w-44 rounded-3xl bg-white card-shadow border-2 border-dashed border-foreground/15 text-foreground/60">
        <Plus className="h-6 w-6" />
        <span className="mt-1 font-display text-sm font-700">Add pet</span>
      </Link>
    </div>
  );
}


import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Share2, MapPin, ShieldCheck, Cake, Ruler, Sparkles, Syringe, BadgeCheck, Phone, HandHeart, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { moonaTimeline, moonaPassport } from "@/lib/demo-data";
import { getPetStatus, setPetStatus } from "@/lib/pet-status";
import boyDog from "@/assets/doodle-boy-dog.png";

export const Route = createFileRoute("/pet")({
  head: () => ({ meta: [{ title: "Moona — Furr Circle" }] }),
  component: PetScreen,
});

const tabs = ["About", "Timeline", "Passport"] as const;

function PetScreen() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("About");
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Pet Profile" backTo="/profile" />

      <div className="mt-2 px-5">
        <div className="card-shadow relative overflow-hidden rounded-[32px] bg-coral/20 p-6">
          <img src={boyDog} alt="Moona" className="mx-auto h-52 w-auto object-contain" loading="lazy" />
          <Link to="/p/$id" params={{ id: "moona" }} className="absolute right-4 top-4 rounded-full bg-white p-2 card-shadow"><Share2 className="h-4 w-4" /></Link>
          <button className="absolute right-4 top-16 rounded-full bg-white p-2 card-shadow"><Heart className="h-4 w-4 fill-pinky text-pinky" /></button>
        </div>
      </div>

      <div className="mt-4 px-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-display text-3xl font-700">Moona</h1>
            <p className="text-sm text-foreground/60">Border Collie · ♀ · 2 years</p>
          </div>
          <span className="rounded-full bg-success px-3 py-1 font-display text-xs font-700 text-white inline-flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> Verified
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-2 px-5">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 font-display text-xs font-700 ${tab === t ? "bg-foreground text-white" : "bg-white text-foreground/70"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="mt-4 px-5 pb-8">
        {tab === "About" && <AboutTab />}
        {tab === "Timeline" && <TimelineTab />}
        {tab === "Passport" && <PassportTab />}
      </div>
    </AppShell>
  );
}

function AboutTab() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-3">
        <Stat icon={Cake} label="Age" value="2 y" />
        <Stat icon={Ruler} label="Weight" value="14 kg" />
        <Stat icon={MapPin} label="Mumbai" value="2 km" />
      </div>

      <div>
        <h2 className="px-1 font-display text-base font-700">Personality</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Playful", "Loves water", "Good with kids", "Loud barker", "Smart"].map((t, i) => (
            <span key={t} className={`rounded-full px-3 py-1.5 text-sm font-500 ${["bg-primary/15 text-primary", "bg-coral/15 text-coral", "bg-sunshine/30 text-foreground", "bg-pinky/15 text-pinky", "bg-success/15 text-success"][i % 5]}`}>{t}</span>
          ))}
        </div>
      </div>

      <Link to="/memory" className="card-shadow flex items-center gap-3 rounded-3xl bg-gradient-to-br from-primary to-pinky p-4 text-white">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><Sparkles className="h-6 w-6" /></span>
        <div className="flex-1">
          <p className="font-display text-base font-700">Memory vault</p>
          <p className="text-xs opacity-85">17 memories · pet aura unlocked</p>
        </div>
      </Link>

      <div>
        <h2 className="px-1 font-display text-base font-700">Gallery</h2>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {["bg-sunshine/30", "bg-primary/15", "bg-coral/20", "bg-pinky/15", "bg-success/15", "bg-foreground/10"].map((c, i) => (
            <div key={i} className={`aspect-square rounded-2xl ${c}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineTab() {
  return (
    <div className="relative pl-7">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
      <ul className="space-y-5">
        {moonaTimeline.map((m) => (
          <li key={m.id} className="relative">
            <span className={`absolute -left-7 top-1 flex h-6 w-6 items-center justify-center rounded-full ${m.tint} ring-4 ring-surface`}>
              <span className="h-2 w-2 rounded-full bg-foreground" />
            </span>
            <p className="font-display text-[11px] font-700 uppercase tracking-wider text-foreground/55">{m.date}</p>
            <p className="mt-0.5 font-display text-base font-700 leading-tight">{m.title}</p>
            <p className="mt-0.5 text-sm text-foreground/70">{m.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PassportTab() {
  return (
    <div className="space-y-4">
      <div className="card-shadow rounded-2xl bg-white p-4">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-success" />
          <p className="font-display text-xs font-700 uppercase text-foreground/55">Microchip</p>
        </div>
        <p className="mt-1 font-display text-lg font-700 tracking-wide">{moonaPassport.microchip}</p>
      </div>

      <div>
        <h2 className="px-1 font-display text-base font-700">Vaccines</h2>
        <div className="mt-2 space-y-2">
          {moonaPassport.vaccines.map((v) => (
            <div key={v.name} className="card-shadow flex items-center gap-3 rounded-2xl bg-white p-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${v.status === "ok" ? "bg-success/15 text-success" : "bg-sunshine/40 text-foreground"}`}>
                <Syringe className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="font-display text-sm font-700">{v.name}</p>
                <p className="text-[11px] text-foreground/55">Given {v.date} · Next {v.next}</p>
              </div>
              <span className={`rounded-full px-2 py-0.5 font-display text-[10px] font-700 ${v.status === "ok" ? "bg-success text-white" : "bg-sunshine text-foreground"}`}>
                {v.status === "ok" ? "OK" : "Due"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="px-1 font-display text-base font-700">Allergies</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {moonaPassport.allergies.map((a) => (
            <span key={a} className="rounded-full bg-coral/15 px-3 py-1.5 text-sm font-500 text-coral">{a}</span>
          ))}
        </div>
      </div>

      <div className="card-shadow rounded-2xl bg-white p-4">
        <p className="font-display text-xs font-700 uppercase text-foreground/55">Primary vet</p>
        <p className="mt-1 font-display text-base font-700">{moonaPassport.vet.name}</p>
        <p className="text-xs text-foreground/60">{moonaPassport.vet.clinic}</p>
        <a href={`tel:${moonaPassport.vet.phone}`} className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 font-display text-xs font-700 text-white">
          <Phone className="h-3.5 w-3.5" /> {moonaPassport.vet.phone}
        </a>
      </div>

      <div className="card-shadow rounded-2xl bg-white p-4">
        <p className="font-display text-xs font-700 uppercase text-foreground/55">Insurance</p>
        <p className="mt-1 font-display text-base font-700">{moonaPassport.insurance.provider}</p>
        <p className="text-xs text-foreground/60">Policy {moonaPassport.insurance.policy} · {moonaPassport.insurance.valid}</p>
      </div>
    </div>
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Share2, Heart, MapPin, Cake, Ruler, ShieldCheck, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import boyDog from "@/assets/doodle-boy-dog.png";
import puppy from "@/assets/doodle-puppy.png";
import cat from "@/assets/doodle-cat.png";

export const Route = createFileRoute("/p/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `${capitalize(params.id)} — Pet on Furr Circle` },
      { name: "description", content: `Meet ${capitalize(params.id)}, a pet on Furr Circle. View their story, milestones, and gallery.` },
      { property: "og:title", content: `${capitalize(params.id)} on Furr Circle` },
      { property: "og:description", content: "Public pet profile · powered by Furr Circle." },
    ],
  }),
  component: PublicPetProfile,
});

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

type PetData = {
  name: string;
  img: string;
  tint: string;
  breed: string;
  owner: string;
  ownerHandle: string;
  bio: string;
  age: string;
  weight: string;
  location: string;
  tags: string[];
};

const pets: Record<string, PetData> = {
  moona: {
    name: "Moona",
    img: boyDog,
    tint: "bg-coral/20",
    breed: "Border Collie · ♀ · 2 y",
    owner: "Goutham R.",
    ownerHandle: "goutham",
    bio: "Park enthusiast. Will trade frisbees for cuddles. Adopted from BSPCA, August 2023.",
    age: "2 y",
    weight: "14 kg",
    location: "Mumbai",
    tags: ["Playful", "Loves water", "Good with kids", "Smart"],
  },
  biscuit: {
    name: "Biscuit",
    img: puppy,
    tint: "bg-sunshine/30",
    breed: "Beagle · ♂ · 4 mo",
    owner: "Rescue & Co.",
    ownerHandle: "rescueco",
    bio: "Tiny ears, huge personality. Looking for a forever home with a yard and patient humans.",
    age: "4 mo",
    weight: "5 kg",
    location: "Bandra W",
    tags: ["Adoptable", "Vaccinated", "House-trained"],
  },
  mochi: {
    name: "Mochi",
    img: cat,
    tint: "bg-pinky/20",
    breed: "Persian · ♀ · 1 y",
    owner: "Aanya P.",
    ownerHandle: "aanya",
    bio: "Professional window patroller. Reports squirrels and pigeons hourly.",
    age: "1 y",
    weight: "3.4 kg",
    location: "Powai",
    tags: ["Indoor", "Loves brushing", "Quiet"],
  },
  kobi: {
    name: "Kobi",
    img: cat,
    tint: "bg-primary/10",
    breed: "Tabby · ♂ · 4 y",
    owner: "Goutham R.",
    ownerHandle: "goutham",
    bio: "Gentle giant. Has opinions about cardboard boxes.",
    age: "4 y",
    weight: "5.2 kg",
    location: "Mumbai",
    tags: ["Cuddly", "Box collector", "Talkative"],
  },
};

const gallery = ["bg-sunshine/30", "bg-primary/15", "bg-coral/20", "bg-pinky/15", "bg-success/15", "bg-foreground/10"];

function PublicPetProfile() {
  const { id } = Route.useParams();
  const pet = pets[id] ?? { ...pets.moona, name: capitalize(id) };
  const [liked, setLiked] = useState(false);

  return (
    <AppShell showNav={false}>
      <header className="flex items-center justify-between px-5 pt-10">
        <button onClick={() => history.back()} className="rounded-full bg-white p-2 card-shadow">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <p className="font-display text-base font-700">Pet profile</p>
        <button className="rounded-full bg-white p-2 card-shadow">
          <Share2 className="h-5 w-5" />
        </button>
      </header>

      <div className="mt-3 px-5">
        <div className={`card-shadow relative overflow-hidden rounded-[32px] ${pet.tint} p-6`}>
          <img src={pet.img} alt={pet.name} className="mx-auto h-56 w-auto object-contain" loading="lazy" />
          <button
            onClick={() => setLiked((l) => !l)}
            className="absolute right-4 top-4 rounded-full bg-white p-2 card-shadow"
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-pinky text-pinky" : "text-foreground"}`} />
          </button>
        </div>
      </div>

      <div className="mt-4 px-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-display text-3xl font-700">{pet.name}</h1>
            <p className="text-sm text-foreground/60">{pet.breed}</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-success px-3 py-1 font-display text-xs font-700 text-white">
            <ShieldCheck className="h-3 w-3" /> Verified
          </span>
        </div>

        <Link
          to="/u/$handle"
          params={{ handle: pet.ownerHandle }}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 card-shadow"
        >
          <span className="h-6 w-6 overflow-hidden rounded-full bg-coral/20">
            <img src={boyDog} alt="" className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-xs font-700">{pet.owner}</span>
          <span className="text-xs text-foreground/55">@{pet.ownerHandle}</span>
        </Link>

        <p className="mt-4 text-sm leading-relaxed text-foreground/80">{pet.bio}</p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 px-5">
        <Stat icon={Cake} label="Age" value={pet.age} />
        <Stat icon={Ruler} label="Weight" value={pet.weight} />
        <Stat icon={MapPin} label="City" value={pet.location} />
      </div>

      <div className="mt-5 px-6">
        <h2 className="font-display text-base font-700">Personality</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {pet.tags.map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-3 py-1.5 text-sm font-500 ${
                ["bg-primary/15 text-primary", "bg-coral/15 text-coral", "bg-sunshine/30 text-foreground", "bg-pinky/15 text-pinky", "bg-success/15 text-success"][i % 5]
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 px-5">
        <h2 className="px-1 font-display text-base font-700">Gallery</h2>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {gallery.map((c, i) => (
            <div key={i} className={`aspect-square rounded-2xl ${c}`} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-2 px-5 pb-8">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 font-display text-sm font-700 text-white">
          <MessageCircle className="h-4 w-4" /> Message owner
        </button>
        <Link
          to="/match"
          className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 font-display text-sm font-700 text-white"
        >
          <Sparkles className="h-4 w-4" /> Match
        </Link>
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

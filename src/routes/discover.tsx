import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Heart, MapPin, Star, Stethoscope, Phone } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import vet from "@/assets/doodle-vet.png";
import puppy from "@/assets/doodle-puppy.png";
import cat from "@/assets/doodle-cat.png";

export const Route = createFileRoute("/discover")({
  head: () => ({ meta: [{ title: "Discover — Furr Circle" }] }),
  component: DiscoverScreen,
});

const nearbyVets = [
  { name: "Furr Care Clinic", spec: "General · Surgery", dist: "0.6 km", rating: 4.9, open: true, tint: "bg-primary/10" },
  { name: "Dr. Kavya Rao", spec: "Feline specialist", dist: "1.1 km", rating: 4.8, open: true, tint: "bg-success/15" },
  { name: "Paws & Tails Hospital", spec: "24x7 emergency", dist: "2.3 km", rating: 4.7, open: true, tint: "bg-coral/15" },
  { name: "Bandra Pet Wellness", spec: "Dental · Grooming", dist: "3.0 km", rating: 4.6, open: false, tint: "bg-sunshine/30" },
];

function DiscoverScreen() {
  return (
    <AppShell activeTab="discover">
      <header className="px-6 pt-10">
        <h1 className="font-display text-3xl font-700">Discover</h1>
        <p className="mt-1 text-sm text-foreground/60">Vets, pets & places near you</p>
      </header>

      <div className="mt-4 px-5">
        <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 card-shadow">
          <Search className="h-5 w-5 text-foreground/50" />
          <input
            className="flex-1 bg-transparent text-base placeholder:text-foreground/40 focus:outline-none"
            placeholder="Search vets, breeds, places…"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between px-6">
        <h2 className="font-display text-lg font-600">Nearby vets</h2>
        <Link to="/care" className="text-xs font-600 text-primary">See all</Link>
      </div>
      <div className="mt-3 space-y-3 px-5">
        {nearbyVets.map((v) => (
          <Link
            to="/book"
            key={v.name}
            className="card-shadow flex items-center gap-3 rounded-3xl bg-white p-3"
          >
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl ${v.tint}`}>
              <img src={vet} alt="" className="h-full w-full object-contain p-1" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-display text-base font-700 truncate">{v.name}</p>
                {v.open && (
                  <span className="rounded-full bg-success/15 px-2 py-0.5 font-display text-[10px] font-700 text-success">
                    OPEN
                  </span>
                )}
              </div>
              <p className="flex items-center gap-1 text-xs text-foreground/60">
                <Stethoscope className="h-3 w-3" /> {v.spec}
              </p>
              <div className="mt-1 flex items-center gap-3 text-xs text-foreground/60">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-sunshine text-sunshine" /> {v.rating}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {v.dist}
                </span>
              </div>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
              <Phone className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      <h2 className="mt-6 px-6 font-display text-lg font-600">Adoption nearby</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 px-5 pb-6">
        {[
          { img: puppy, name: "Biscuit", breed: "Beagle", dist: "0.8 km", tint: "bg-sunshine/30", handle: "biscuit" },
          { img: cat, name: "Mochi", breed: "Persian", dist: "1.2 km", tint: "bg-pinky/20", handle: "mochi" },
        ].map((p) => (
          <Link
            to="/p/$id"
            params={{ id: p.handle }}
            key={p.name}
            className="card-shadow overflow-hidden rounded-3xl bg-white"
          >
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
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

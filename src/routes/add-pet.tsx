import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ChevronLeft, Camera, PawPrint } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { addPet, type Pet } from "@/lib/pets-store";

export const Route = createFileRoute("/add-pet")({
  head: () => ({ meta: [{ title: "Add a pet — Furr Circle" }] }),
  component: AddPetScreen,
});

const PERSONALITY = ["Playful", "Calm", "Cuddly", "Energetic", "Shy", "Curious", "Bossy", "Sleepy"];

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(40),
  breed: z.string().trim().min(1, "Breed required").max(60),
  ageYears: z.number().min(0).max(40),
});

function AddPetScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [species, setSpecies] = useState<Pet["species"]>("dog");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState<Pet["gender"]>("female");
  const [ageYears, setAgeYears] = useState<number>(1);
  const [photo, setPhoto] = useState<string | undefined>();
  const [tags, setTags] = useState<string[]>([]);

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 4 * 1024 * 1024) return toast.error("Photo too large (max 4MB)");
    const r = new FileReader();
    r.onload = () => setPhoto(r.result as string);
    r.readAsDataURL(f);
  }

  function toggleTag(t: string) {
    setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, breed, ageYears });
    if (!parsed.success) return toast.error(parsed.error.issues[0].message);
    const pet = addPet({ name, species, breed, gender, ageYears, photo, personality: tags });
    toast.success(`${pet.name} added to your circle 🐾`);
    navigate({ to: "/profile" });
  }

  return (
    <main className="min-h-dvh bg-background pb-32">
      <header className="flex items-center gap-3 px-5 pt-10">
        <Link to="/profile" className="rounded-full bg-white p-2 card-shadow">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="font-display text-2xl font-700">Add a pet</h1>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-5 px-5">
        <label className="card-shadow flex items-center justify-center gap-3 rounded-3xl bg-white p-6 cursor-pointer">
          {photo ? (
            <img src={photo} alt="" className="h-28 w-28 rounded-2xl object-cover" />
          ) : (
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-coral/15 text-foreground/60">
              <Camera className="h-6 w-6" />
              <span className="mt-1 text-xs">Add photo</span>
            </div>
          )}
          <input type="file" accept="image/*" onChange={onPhoto} className="hidden" />
        </label>

        <Field label="Name">
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} placeholder="e.g. Moona" className="w-full bg-transparent text-base font-600 outline-none" />
        </Field>

        <div>
          <p className="px-1 text-sm font-600 text-foreground/70">Species</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {(["dog", "cat", "bird", "rabbit", "other"] as const).map((s) => (
              <button type="button" key={s} onClick={() => setSpecies(s)} className={`rounded-full px-4 py-2 text-sm font-600 capitalize ${species === s ? "bg-foreground text-white" : "bg-white card-shadow"}`}>{s}</button>
            ))}
          </div>
        </div>

        <Field label="Breed">
          <input value={breed} onChange={(e) => setBreed(e.target.value)} maxLength={60} placeholder="e.g. Border Collie" className="w-full bg-transparent text-base font-600 outline-none" />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="px-1 text-sm font-600 text-foreground/70">Gender</p>
            <div className="mt-2 flex gap-2">
              {(["female", "male"] as const).map((g) => (
                <button type="button" key={g} onClick={() => setGender(g)} className={`flex-1 rounded-full px-3 py-2 text-sm font-600 capitalize ${gender === g ? "bg-foreground text-white" : "bg-white card-shadow"}`}>{g}</button>
              ))}
            </div>
          </div>
          <Field label="Age (years)">
            <input type="number" min={0} max={40} step={0.5} value={ageYears} onChange={(e) => setAgeYears(parseFloat(e.target.value) || 0)} className="w-full bg-transparent text-base font-600 outline-none" />
          </Field>
        </div>

        <div>
          <p className="px-1 text-sm font-600 text-foreground/70">Personality</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {PERSONALITY.map((t) => (
              <button type="button" key={t} onClick={() => toggleTag(t)} className={`rounded-full px-3 py-1.5 text-xs font-600 ${tags.includes(t) ? "bg-coral text-white" : "bg-white card-shadow"}`}>{t}</button>
            ))}
          </div>
        </div>

        <button type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-white font-display text-base font-700">
          <PawPrint className="h-5 w-5" /> Save pet
        </button>
      </form>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="card-shadow block rounded-2xl bg-white px-4 py-3">
      <span className="text-xs font-600 text-foreground/60">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

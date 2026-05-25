// Client-side store for user-added pets.
const KEY = "furr.pets";

export type Pet = {
  id: string;
  name: string;
  species: "dog" | "cat" | "bird" | "rabbit" | "other";
  breed: string;
  gender: "male" | "female";
  ageYears: number;
  photo?: string; // data URL
  personality: string[];
  createdAt: number;
};

export function getPets(): Pet[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function addPet(p: Omit<Pet, "id" | "createdAt">): Pet {
  const pet: Pet = { ...p, id: crypto.randomUUID(), createdAt: Date.now() };
  const all = [...getPets(), pet];
  localStorage.setItem(KEY, JSON.stringify(all));
  window.dispatchEvent(new CustomEvent("furr:pets"));
  return pet;
}

export function getPet(id: string): Pet | undefined {
  return getPets().find((p) => p.id === id);
}

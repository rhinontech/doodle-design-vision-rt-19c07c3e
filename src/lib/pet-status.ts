// Client-side persistence for per-pet flags (adoption / foster) and theme.
const KEY = "furr.pet.status";

export type PetStatus = { adoption: boolean; foster: boolean };

function read(): Record<string, PetStatus> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function getPetStatus(id: string): PetStatus {
  return read()[id] ?? { adoption: false, foster: false };
}

export function setPetStatus(id: string, patch: Partial<PetStatus>) {
  const all = read();
  all[id] = { ...getPetStatus(id), ...patch };
  localStorage.setItem(KEY, JSON.stringify(all));
  window.dispatchEvent(new CustomEvent("furr:pet-status"));
}

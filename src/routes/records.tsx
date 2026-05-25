import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Download, Upload, Syringe, Pill, Activity, Stethoscope } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";

export const Route = createFileRoute("/records")({
  head: () => ({ meta: [{ title: "Medical Records — Furr Circle" }] }),
  component: Records,
});

const records = [
  { id: "r1", icon: Syringe, tint: "bg-success/15 text-success", title: "Rabies booster", date: "12 Mar 2026", who: "Dr. Kavya · Furr Care" },
  { id: "r2", icon: Activity, tint: "bg-primary/15 text-primary", title: "Vitals check-up", date: "02 Mar 2026", who: "Weight 14.2 kg · HR 92" },
  { id: "r3", icon: Pill, tint: "bg-coral/15 text-coral", title: "Apoquel 16mg · 14 days", date: "20 Feb 2026", who: "Skin allergy follow-up" },
  { id: "r4", icon: Stethoscope, tint: "bg-pinky/15 text-pinky", title: "Annual full-body exam", date: "10 Jan 2026", who: "Paws & Tails Hospital" },
  { id: "r5", icon: FileText, tint: "bg-sunshine/30 text-foreground", title: "Blood report (CBC)", date: "10 Jan 2026", who: "PDF · 2 pages" },
];

function Records() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Medical Records" backTo="/care" />

      <div className="px-5 pt-2 grid grid-cols-2 gap-3">
        <Link to="/log/vaccine" className="card-shadow flex items-center gap-2 rounded-2xl bg-primary p-3 text-white">
          <Upload className="h-4 w-4" /> <span className="font-display text-sm font-700">Add entry</span>
        </Link>
        <button className="card-shadow flex items-center gap-2 rounded-2xl bg-white p-3">
          <Download className="h-4 w-4" /> <span className="font-display text-sm font-700">Export PDF</span>
        </button>
      </div>

      <h2 className="mt-6 px-6 font-display text-lg font-600">Moona · history</h2>
      <ul className="mt-3 space-y-2 px-5 pb-8">
        {records.map((r) => (
          <li key={r.id} className="card-shadow flex items-start gap-3 rounded-2xl bg-white p-3">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${r.tint}`}>
              <r.icon className="h-5 w-5" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-display text-sm font-700">{r.title}</p>
              <p className="text-xs text-foreground/60">{r.who}</p>
            </div>
            <p className="text-[11px] text-foreground/55 whitespace-nowrap">{r.date}</p>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}

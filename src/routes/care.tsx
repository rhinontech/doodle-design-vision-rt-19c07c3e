import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Stethoscope, FileText, Sparkles, ShieldCheck, Pill } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import vet from "@/assets/doodle-vet.png";

export const Route = createFileRoute("/care")({
  head: () => ({ meta: [{ title: "Care — Furr Circle" }] }),
  component: CareScreen,
});

const tiles = [
  { icon: Stethoscope, label: "Book a Vet", color: "bg-primary", to: "/book", text: "text-white" },
  { icon: Sparkles, label: "AI Symptom Checker", color: "bg-coral", to: "/care", text: "text-white" },
  { icon: FileText, label: "Pet Passport", color: "bg-sunshine", to: "/care", text: "text-foreground" },
  { icon: Pill, label: "Reminders", color: "bg-pinky", to: "/care", text: "text-white" },
  { icon: ShieldCheck, label: "Insurance", color: "bg-success", to: "/care", text: "text-white" },
];

function CareScreen() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Care & Health" backTo="/" />

      <div className="px-5 pt-2">
        <div className="card-shadow relative overflow-hidden rounded-3xl bg-primary p-5 text-white">
          <div className="relative z-10 max-w-[55%]">
            <p className="font-display text-xs uppercase tracking-wider opacity-80">Moona · Reminder</p>
            <h2 className="mt-2 font-display text-2xl font-700 leading-tight">Monthly checkup is due this week</h2>
            <Link to="/book" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-display text-sm font-600 text-primary">
              Book now <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={vet} alt="" className="absolute -right-6 bottom-0 h-40 w-auto object-contain" loading="lazy" />
        </div>
      </div>

      <h3 className="mt-8 px-6 font-display text-lg font-600">Care services</h3>
      <div className="mt-3 grid grid-cols-2 gap-3 px-5 pb-6">
        {tiles.map(({ icon: Icon, label, color, to, text }) => (
          <Link key={label} to={to} className={`card-shadow flex h-32 flex-col justify-between rounded-3xl ${color} p-4 ${text}`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25">
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="font-display text-base font-600 leading-tight">{label}</span>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Syringe, Calendar, Stethoscope, FileText } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/log/vaccine")({
  head: () => ({ meta: [{ title: "Log Vaccine — Furr Circle" }] }),
  component: LogVaccine,
});

function LogVaccine() {
  const router = useRouter();
  const [name, setName] = useState("");
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Log Vaccine" backTo="/care" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Vaccine logged for Moona");
          router.navigate({ to: "/care" });
        }}
        className="px-5 pt-2 space-y-3"
      >
        <Field icon={Syringe} label="Vaccine name" placeholder="e.g. Rabies booster" value={name} onChange={setName} />
        <Field icon={Calendar} label="Date given" type="date" />
        <Field icon={Calendar} label="Next due" type="date" />
        <Field icon={Stethoscope} label="Vet / Clinic" placeholder="Dr. Kavya · Furr Care" />
        <Field icon={FileText} label="Notes" placeholder="Reaction, batch no, etc." textarea />
        <button className="mt-4 w-full rounded-full bg-primary py-3 font-display text-base font-700 text-white card-shadow">
          Save vaccine
        </button>
      </form>
    </AppShell>
  );
}

function Field({ icon: Icon, label, placeholder, type = "text", textarea, value, onChange }: any) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center gap-2 px-1 font-display text-xs font-700 uppercase tracking-wide text-foreground/55">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-border bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full rounded-2xl border border-border bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      )}
    </label>
  );
}

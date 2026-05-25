import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Pill, Calendar, Clock, FileText } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/log/meds")({
  head: () => ({ meta: [{ title: "Log Medication — Furr Circle" }] }),
  component: LogMeds,
});

function LogMeds() {
  const router = useRouter();
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Log Medication" backTo="/care" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Medication added");
          router.navigate({ to: "/care" });
        }}
        className="px-5 pt-2 space-y-3"
      >
        <Field icon={Pill} label="Medication" placeholder="e.g. Apoquel 16mg" />
        <div className="grid grid-cols-2 gap-3">
          <Field icon={Clock} label="Dosage" placeholder="1 tab / day" />
          <Field icon={Calendar} label="Duration" placeholder="14 days" />
        </div>
        <Field icon={Calendar} label="Start date" type="date" />
        <Field icon={FileText} label="Reason / notes" placeholder="Skin allergy follow-up" textarea />
        <label className="flex items-center gap-3 rounded-2xl bg-white p-4 card-shadow">
          <input type="checkbox" defaultChecked className="h-4 w-4 accent-primary" />
          <span className="font-display text-sm font-600">Remind me daily</span>
        </label>
        <button className="mt-2 w-full rounded-full bg-primary py-3 font-display text-base font-700 text-white card-shadow">
          Save medication
        </button>
      </form>
    </AppShell>
  );
}

function Field({ icon: Icon, label, placeholder, type = "text", textarea }: any) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center gap-2 px-1 font-display text-xs font-700 uppercase tracking-wide text-foreground/55">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      {textarea ? (
        <textarea rows={3} placeholder={placeholder} className="w-full rounded-2xl border border-border bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      ) : (
        <input type={type} placeholder={placeholder} className="w-full rounded-2xl border border-border bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      )}
    </label>
  );
}

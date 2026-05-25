import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Activity, Heart, Thermometer, Weight, FileText } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/log/vitals")({
  head: () => ({ meta: [{ title: "Log Vitals — Furr Circle" }] }),
  component: LogVitals,
});

function LogVitals() {
  const router = useRouter();
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Log Vitals" backTo="/care" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Vitals saved to Moona's record");
          router.navigate({ to: "/care" });
        }}
        className="px-5 pt-2 space-y-3"
      >
        <div className="grid grid-cols-2 gap-3">
          <Field icon={Weight} label="Weight (kg)" placeholder="14.2" />
          <Field icon={Thermometer} label="Temp (°C)" placeholder="38.5" />
          <Field icon={Heart} label="Heart rate" placeholder="bpm" />
          <Field icon={Activity} label="Resp. rate" placeholder="br/min" />
        </div>
        <Field icon={FileText} label="Notes" placeholder="Behavior, appetite, mood" textarea />
        <button className="mt-4 w-full rounded-full bg-primary py-3 font-display text-base font-700 text-white card-shadow">
          Save vitals
        </button>
      </form>
    </AppShell>
  );
}

function Field({ icon: Icon, label, placeholder, textarea }: any) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center gap-2 px-1 font-display text-xs font-700 uppercase tracking-wide text-foreground/55">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      {textarea ? (
        <textarea rows={3} placeholder={placeholder} className="w-full rounded-2xl border border-border bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      ) : (
        <input placeholder={placeholder} className="w-full rounded-2xl border border-border bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      )}
    </label>
  );
}

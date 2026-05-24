import { createFileRoute } from "@tanstack/react-router";
import { Bell, Heart, MessageCircle, Stethoscope, Star } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Furr Circle" }] }),
  component: NotificationsScreen,
});

const items = [
  { icon: Stethoscope, tint: "bg-primary text-white", title: "Checkup reminder", body: "Moona's monthly checkup is in 2 days.", time: "now" },
  { icon: Heart, tint: "bg-pinky text-white", title: "It's a match!", body: "Biscuit liked Moona back.", time: "1h" },
  { icon: MessageCircle, tint: "bg-coral text-white", title: "New message", body: "Anya: Want to do a playdate?", time: "3h" },
  { icon: Star, tint: "bg-sunshine text-foreground", title: "Badge unlocked", body: "Park Explorer · Level 2", time: "yesterday" },
  { icon: Bell, tint: "bg-success text-white", title: "Vaccination due", body: "Annual rabies shot in 5 days.", time: "2d" },
];

function NotificationsScreen() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Notifications" backTo="/profile" />
      <div className="mt-4 space-y-3 px-5 pb-8">
        {items.map((it, i) => (
          <div key={i} className="card-shadow flex items-start gap-3 rounded-2xl bg-white p-4">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${it.tint}`}>
              <it.icon className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex items-baseline justify-between">
                <p className="font-display text-base font-700">{it.title}</p>
                <span className="text-xs text-foreground/40">{it.time}</span>
              </div>
              <p className="text-sm text-foreground/60">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

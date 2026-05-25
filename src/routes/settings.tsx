import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sun, MapPin, Lock, Bell, ShieldAlert, Trash2, ChevronRight, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Furr Circle" }] }),
  component: Settings,
});

function Settings() {
  const [dark, setDark] = useState(false);
  const [precise, setPrecise] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("furr.theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDark = (v: boolean) => {
    setDark(v);
    document.documentElement.classList.toggle("dark", v);
    localStorage.setItem("furr.theme", v ? "dark" : "light");
  };

  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Settings" backTo="/profile" />

      <Section title="Appearance">
        <Row
          icon={dark ? Moon : Sun}
          tint="bg-primary/10 text-primary"
          label="Dark mode"
          sub="Easier on the eyes at night"
          toggle={dark}
          onToggle={toggleDark}
        />
      </Section>

      <Section title="Privacy & security">
        <Row icon={Eye} tint="bg-pinky/15 text-pinky" label="Private profile" sub="Only followers see your posts" toggle={privateProfile} onToggle={setPrivateProfile} />
        <Row icon={Lock} tint="bg-success/15 text-success" label="Two-factor auth" sub="Extra step on new logins" toggle={twoFA} onToggle={setTwoFA} />
        <Row icon={ShieldAlert} tint="bg-coral/15 text-coral" label="Blocked accounts" sub="0 blocked" href />
      </Section>

      <Section title="Location">
        <Row icon={MapPin} tint="bg-success/15 text-success" label="Precise location" sub="Improves nearby matches & vets" toggle={precise} onToggle={setPrecise} />
        <Row icon={MapPin} tint="bg-primary/10 text-primary" label="Home city" sub="Mumbai, India" href />
      </Section>

      <Section title="Notifications">
        <Row icon={Bell} tint="bg-sunshine/40 text-foreground" label="Push notifications" sub="Likes, comments, matches" toggle={true} onToggle={() => {}} />
      </Section>

      <Section title="Danger zone">
        <button
          onClick={() => setConfirmDelete(true)}
          className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 card-shadow"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/15 text-destructive">
            <Trash2 className="h-5 w-5" />
          </span>
          <div className="flex-1 text-left">
            <p className="font-display text-sm font-700 text-destructive">Delete account</p>
            <p className="text-xs text-foreground/55">Permanently remove your data</p>
          </div>
          <ChevronRight className="h-4 w-4 text-foreground/40" />
        </button>
      </Section>

      <div className="px-6 pb-10 pt-2 text-center text-[11px] text-foreground/50">
        Furr Circle v0.1 · Made with 🐾
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4" onClick={() => setConfirmDelete(false)}>
          <div className="w-full max-w-[400px] rounded-3xl bg-white p-5 card-shadow" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/15 text-destructive">
              <Trash2 className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-center font-display text-lg font-700">Delete your account?</h3>
            <p className="mt-1 text-center text-sm text-foreground/65">
              Your pets, posts, and circles will be removed. This can't be undone.
            </p>
            <div className="mt-5 flex gap-2">
              <button onClick={() => setConfirmDelete(false)} className="flex-1 rounded-full bg-muted py-3 font-display text-sm font-700">Cancel</button>
              <button
                onClick={() => {
                  setConfirmDelete(false);
                  toast.error("Account deletion requested");
                }}
                className="flex-1 rounded-full bg-destructive py-3 font-display text-sm font-700 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="mt-6 px-6 font-display text-xs font-700 uppercase tracking-wider text-foreground/55">{title}</h2>
      <div className="mt-2 space-y-2 px-5">{children}</div>
    </>
  );
}

function Row({
  icon: Icon,
  tint,
  label,
  sub,
  toggle,
  onToggle,
  href,
}: {
  icon: any;
  tint: string;
  label: string;
  sub?: string;
  toggle?: boolean;
  onToggle?: (v: boolean) => void;
  href?: boolean;
}) {
  return (
    <div className="card-shadow flex items-center gap-3 rounded-2xl bg-white p-4">
      <span className={`flex h-10 w-10 items-center justify-center rounded-full ${tint}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <p className="font-display text-sm font-700">{label}</p>
        {sub && <p className="text-xs text-foreground/55">{sub}</p>}
      </div>
      {typeof toggle === "boolean" ? (
        <button
          onClick={() => onToggle?.(!toggle)}
          className={`relative h-7 w-12 rounded-full transition-colors ${toggle ? "bg-primary" : "bg-foreground/15"}`}
          aria-pressed={toggle}
        >
          <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${toggle ? "left-[22px]" : "left-0.5"}`} />
        </button>
      ) : href ? (
        <ChevronRight className="h-4 w-4 text-foreground/40" />
      ) : null}
    </div>
  );
}

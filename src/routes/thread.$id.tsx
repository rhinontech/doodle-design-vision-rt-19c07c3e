import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, ArrowDown, MessageCircle, Share2, ShieldAlert } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { threads } from "@/lib/demo-data";

export const Route = createFileRoute("/thread/$id")({
  head: () => ({ meta: [{ title: "Discussion — Furr Circle" }] }),
  component: ThreadScreen,
});

const answers = [
  { author: "Dr. Kavya Rao", role: "Verified Vet", body: "If she's still refusing food after 24 hours, that's a vet visit — cats can get hepatic lipidosis fast. In the meantime, try a tiny piece of plain boiled chicken to test appetite.", upvotes: 142, time: "2h", verified: true },
  { author: "Mehul S.", role: "Cat parent", body: "Mine did this when I switched her bowl. Try the previous bowl + the previous spot. Sometimes it's that silly.", upvotes: 67, time: "1h" },
  { author: "Priya M.", role: "First-Time Owners", body: "Hydration first — even if she's drinking, add a wet food slurry. Worked for us during a stressful move.", upvotes: 31, time: "40m" },
];

function ThreadScreen() {
  const { id } = Route.useParams();
  const t = threads.find((x) => x.id === id) ?? threads[0];
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Discussion" backTo="/community" />

      <article className="px-5">
        <span className="rounded-full bg-coral/15 px-2 py-0.5 font-display text-[10px] font-700 uppercase text-coral">{t.tag}</span>
        <h1 className="mt-2 font-display text-xl font-700 leading-snug">{t.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.body}</p>
        <p className="mt-3 text-xs text-foreground/55">Asked by <b className="font-700 text-foreground">{t.asker}</b> · {t.time}</p>

        {t.isHealth && (
          <div className="mt-4 flex items-start gap-2 rounded-2xl bg-sunshine/25 p-3 text-xs text-foreground/80">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
            <p>Community advice is not a substitute for a vet. For emergencies, <a className="font-700 underline" href="/care">find care now</a>.</p>
          </div>
        )}

        <div className="mt-4 flex items-center gap-3 border-y border-border py-3">
          <div className="flex items-center gap-1 rounded-full bg-surface px-3 py-1.5">
            <button><ArrowUp className="h-4 w-4" /></button>
            <span className="font-display text-sm font-700">{t.upvotes}</span>
            <button><ArrowDown className="h-4 w-4 text-foreground/40" /></button>
          </div>
          <button className="flex items-center gap-1.5 text-sm text-foreground/70"><MessageCircle className="h-4 w-4" /> {t.answers}</button>
          <button className="ml-auto"><Share2 className="h-5 w-5" /></button>
        </div>
      </article>

      <h2 className="mt-5 px-6 font-display text-base font-700">Top answers</h2>
      <div className="mt-3 space-y-4 px-5 pb-28">
        {answers.map((a, i) => (
          <div key={i} className="card-shadow rounded-2xl bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/15" />
              <div className="flex-1">
                <p className="font-display text-sm font-700 leading-tight">{a.author}</p>
                <p className="text-[11px] text-foreground/55">{a.role} · {a.time}</p>
              </div>
              {a.verified && <span className="rounded-full bg-success px-2 py-0.5 font-display text-[10px] font-700 text-white">VET</span>}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{a.body}</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-surface px-2.5 py-1">
                <ArrowUp className="h-3.5 w-3.5" />
                <span className="font-display text-xs font-700">{a.upvotes}</span>
              </div>
              <button className="text-xs font-600 text-foreground/60">Reply</button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-1/2 z-30 w-full max-w-[440px] -translate-x-1/2 border-t border-border bg-white px-4 py-3">
        <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-2.5">
          <input placeholder="Add an answer…" className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground/40" />
          <button className="font-display text-sm font-700 text-primary">Post</button>
        </div>
      </div>
    </AppShell>
  );
}

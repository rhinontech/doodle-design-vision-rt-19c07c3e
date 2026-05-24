import { createFileRoute, Link } from "@tanstack/react-router";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { circles } from "@/lib/demo-data";

export const Route = createFileRoute("/ask")({
  head: () => ({ meta: [{ title: "Ask the Community — Furr Circle" }] }),
  component: AskScreen,
});

const allTags = ["health", "behavior", "nutrition", "training", "grooming", "rescue", "adoption", "milestone"];

function AskScreen() {
  const [circle, setCircle] = useState(circles[0].slug);
  const [tags, setTags] = useState<string[]>(["health"]);
  return (
    <AppShell showNav={false}>
      <header className="flex items-center justify-between px-5 pt-6 pb-3">
        <Link to="/community" className="rounded-full bg-white p-2 card-shadow"><X className="h-5 w-5" /></Link>
        <h1 className="font-display text-lg font-700">Ask a question</h1>
        <button className="rounded-full bg-primary px-4 py-2 font-display text-sm font-700 text-white">Post</button>
      </header>

      <div className="space-y-4 px-5 pb-10">
        <div>
          <p className="px-1 font-display text-xs font-700 uppercase text-foreground/55">Post in</p>
          <select value={circle} onChange={(e) => setCircle(e.target.value)} className="mt-1.5 flex w-full appearance-none items-center justify-between rounded-2xl bg-white p-4 font-display text-sm font-700 card-shadow">
            {circles.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
          <ChevronDown className="pointer-events-none -mt-9 ml-auto mr-4 block h-4 w-4 text-foreground/50" />
        </div>

        <input
          placeholder="What's your question? Be specific."
          className="w-full rounded-2xl bg-white p-4 font-display text-base font-700 outline-none placeholder:font-500 placeholder:text-foreground/40 card-shadow"
        />

        <textarea
          placeholder="Share more details — your pet's age, what you've tried, anything that helps people answer."
          rows={6}
          className="w-full resize-none rounded-2xl bg-white p-4 text-sm leading-relaxed outline-none placeholder:text-foreground/40 card-shadow"
        />

        <div>
          <p className="px-1 font-display text-xs font-700 uppercase text-foreground/55">Tags</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {allTags.map((t) => {
              const on = tags.includes(t);
              return (
                <button key={t}
                  onClick={() => setTags(on ? tags.filter((x) => x !== t) : [...tags, t])}
                  className={`rounded-full px-3 py-1.5 font-display text-xs font-700 ${on ? "bg-primary text-white" : "bg-white text-foreground/70"}`}>
                  #{t}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

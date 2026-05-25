import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Share2, UserPlus, MapPin, Grid3x3, Bookmark, Bone } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import boyDog from "@/assets/doodle-boy-dog.png";
import puppy from "@/assets/doodle-puppy.png";
import cat from "@/assets/doodle-cat.png";
import group from "@/assets/doodle-group.png";
import walk from "@/assets/doodle-walk.png";
import birthday from "@/assets/doodle-birthday.png";
import rescue from "@/assets/doodle-rescue.png";

export const Route = createFileRoute("/u/$handle")({
  head: ({ params }) => ({
    meta: [
      { title: `@${params.handle} — Furr Circle` },
      { name: "description", content: `Pet parent on Furr Circle. Follow @${params.handle} for daily pet stories.` },
      { property: "og:title", content: `@${params.handle} on Furr Circle` },
      { property: "og:description", content: "Public pet parent profile on Furr Circle." },
    ],
  }),
  component: PublicUserProfile,
});

const gridTints = [
  { img: boyDog, tint: "bg-coral/20" },
  { img: walk, tint: "bg-primary/15" },
  { img: birthday, tint: "bg-pinky/15" },
  { img: group, tint: "bg-success/15" },
  { img: rescue, tint: "bg-sunshine/30" },
  { img: cat, tint: "bg-pinky/20" },
  { img: puppy, tint: "bg-sunshine/30" },
  { img: boyDog, tint: "bg-primary/10" },
  { img: walk, tint: "bg-coral/15" },
];

const tabs = ["Posts", "Pets", "Saved"] as const;

function PublicUserProfile() {
  const { handle } = Route.useParams();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Posts");
  const [following, setFollowing] = useState(false);

  return (
    <AppShell showNav={false}>
      <header className="flex items-center justify-between px-5 pt-10">
        <button onClick={() => history.back()} className="rounded-full bg-white p-2 card-shadow">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <p className="font-display text-base font-700">@{handle}</p>
        <button className="rounded-full bg-white p-2 card-shadow">
          <Share2 className="h-5 w-5" />
        </button>
      </header>

      <div className="mt-5 px-5">
        <div className="card-shadow rounded-3xl bg-white p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-coral/20 ring-4 ring-white">
              <img src={boyDog} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="grid flex-1 grid-cols-3 gap-1 text-center">
              <Stat n="48" l="Posts" />
              <Stat n="1.2k" l="Followers" />
              <Stat n="312" l="Following" />
            </div>
          </div>

          <p className="mt-4 font-display text-xl font-700">Goutham R.</p>
          <p className="mt-0.5 text-sm text-foreground/70">Dad to Moona 🐕 & Kobi 🐈 · positive-reinforcement believer.</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-foreground/55">
            <MapPin className="h-3 w-3" /> Mumbai, India
          </p>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setFollowing((f) => !f)}
              className={`flex flex-1 items-center justify-center gap-1 rounded-full py-2.5 font-display text-sm font-700 transition-colors ${
                following ? "bg-foreground/10 text-foreground" : "bg-primary text-white"
              }`}
            >
              <UserPlus className="h-4 w-4" />
              {following ? "Following" : "Follow"}
            </button>
            <button className="flex-1 rounded-full bg-white py-2.5 font-display text-sm font-700 text-foreground card-shadow">
              Message
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 px-5">
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            { img: puppy, name: "Moona", handle: "moona" },
            { img: cat, name: "Kobi", handle: "kobi" },
          ].map((p) => (
            <Link
              key={p.name}
              to="/p/$id"
              params={{ id: p.handle }}
              className="card-shadow flex shrink-0 items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4"
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-coral/20">
                <img src={p.img} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="font-display text-sm font-700">{p.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-5 flex border-b border-border px-5">
        {tabs.map((t) => {
          const Icon = t === "Posts" ? Grid3x3 : t === "Pets" ? Bone : Bookmark;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex flex-1 items-center justify-center gap-1.5 border-b-2 py-3 font-display text-xs font-700 ${
                tab === t ? "border-coral text-coral" : "border-transparent text-foreground/55"
              }`}
            >
              <Icon className="h-4 w-4" /> {t}
            </button>
          );
        })}
      </div>

      <div className="mt-2 grid grid-cols-3 gap-1 px-1 pb-6">
        {gridTints.map((g, i) => (
          <Link
            to="/post/$id"
            params={{ id: String((i % 5) + 1) }}
            key={i}
            className={`aspect-square overflow-hidden ${g.tint}`}
          >
            <img src={g.img} alt="" className="h-full w-full object-contain p-2" loading="lazy" />
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-lg font-700">{n}</p>
      <p className="text-[11px] text-foreground/55">{l}</p>
    </div>
  );
}

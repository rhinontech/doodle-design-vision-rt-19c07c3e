import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, ArrowRight, Heart } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import boyDog from "@/assets/doodle-boy-dog.png";
import stethoscope from "@/assets/icon-stethoscope.png";
import party from "@/assets/icon-party.png";
import star from "@/assets/icon-star.png";
import walk from "@/assets/doodle-walk.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Furr Circle — Where Pets Become Social" },
      { name: "description", content: "Your pet's social home — match, care, community." },
    ],
  }),
  component: HomeScreen,
});

function HomeScreen() {
  return (
    <AppShell activeTab="home">
      {/* Greeting */}
      <header className="flex items-start justify-between px-6 pt-10">
        <div>
          <p className="font-display text-base text-foreground/70">
            Hi Goutham <span className="ml-1">👋</span>
          </p>
          <h1 className="mt-3 font-display text-[34px] leading-[1.1] font-700 tracking-tight">
            How is Moona<br />doing today?
          </h1>
        </div>
        <button className="card-shadow flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <img src={star} alt="" className="h-7 w-7" loading="lazy" />
        </button>
      </header>

      {/* Status card */}
      <div className="mt-6 px-5">
        <div className="card-shadow relative overflow-hidden rounded-3xl bg-white p-5">
          <div className="grid grid-cols-[1fr_auto] gap-3">
            <ul className="space-y-3 self-center">
              <StatusRow color="success" label="Park Walk" />
              <StatusRow color="success" label="Food" meta="3/3" />
              <StatusRow color="sunshine" label="Snack" meta="1/2" />
              <div className="my-2 h-px w-32 bg-border" />
              <StatusRow color="pinky" icon="heart" label="Good" meta="87%" />
            </ul>
            <img
              src={boyDog}
              alt="Goutham hugging Moona"
              className="h-[180px] w-auto object-contain"
              width={768}
              height={640}
            />
          </div>
        </div>
      </div>

      {/* Upcoming events */}
      <div className="mt-8 flex items-center justify-between px-6">
        <h2 className="font-display text-lg font-600 text-foreground">Upcoming events</h2>
        <ArrowRight className="h-5 w-5 text-foreground" />
      </div>

      <div className="mt-4 space-y-4 px-5">
        <EventCard
          bg="bg-primary"
          icon={stethoscope}
          title="Time for monthly"
          subtitle="general checkup"
          to="/book"
        />
        <EventCard
          bg="bg-coral"
          icon={party}
          title="Her birthday is near,"
          subtitle="buy gifts and treats"
          to="/discover"
        />
        <EventCard
          bg="bg-sunshine"
          icon={walk}
          title="Schedule a"
          subtitle="weekend playdate"
          to="/match"
          textClass="text-foreground"
          imgClass="h-14 w-14 object-cover"
        />
      </div>
    </AppShell>
  );
}

function StatusRow({
  color,
  label,
  meta,
  icon,
}: {
  color: "success" | "sunshine" | "pinky";
  label: string;
  meta?: string;
  icon?: "heart";
}) {
  const bg = {
    success: "bg-success",
    sunshine: "bg-sunshine",
    pinky: "bg-pinky",
  }[color];
  return (
    <li className="flex items-center gap-3">
      <span className={`flex h-7 w-7 items-center justify-center rounded-full ${bg}`}>
        {icon === "heart" ? (
          <Heart className="h-4 w-4 fill-white text-white" />
        ) : (
          <Check className="h-4 w-4 text-white" strokeWidth={3} />
        )}
      </span>
      <span className="font-display text-[17px] font-500 text-foreground">{label}</span>
      {meta && <span className="ml-2 text-sm text-foreground/60">{meta}</span>}
    </li>
  );
}

function EventCard({
  bg,
  icon,
  title,
  subtitle,
  to,
  textClass = "text-white",
  imgClass = "h-10 w-10 object-contain",
}: {
  bg: string;
  icon: string;
  title: string;
  subtitle: string;
  to: string;
  textClass?: string;
  imgClass?: string;
}) {
  return (
    <Link
      to={to}
      className={`card-shadow flex items-center gap-4 rounded-3xl ${bg} px-4 py-5 transition-transform active:scale-[0.98]`}
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
        <img src={icon} alt="" className={imgClass} loading="lazy" />
      </span>
      <div className={`flex-1 font-display text-[19px] leading-tight font-600 ${textClass}`}>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <ChevronRight className={`h-6 w-6 ${textClass}`} />
    </Link>
  );
}

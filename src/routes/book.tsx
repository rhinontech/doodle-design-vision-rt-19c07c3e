import { createFileRoute } from "@tanstack/react-router";
import { Check, Calendar, Clock, ArrowRight, Star } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import vet from "@/assets/doodle-vet.png";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [{ title: "Book a Clinic — Furr Circle" }],
  }),
  component: BookScreen,
});

function BookScreen() {
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Book a Clinic" backTo="/" />

      {/* Profile card with dashed green outline */}
      <div className="mt-6 px-5">
        <div className="relative rounded-3xl p-1.5" style={{ background: "transparent" }}>
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, oklch(0.68 0.18 150) 0 8px, transparent 8px 16px), repeating-linear-gradient(90deg, oklch(0.68 0.18 150) 0 8px, transparent 8px 16px), repeating-linear-gradient(180deg, oklch(0.68 0.18 150) 0 8px, transparent 8px 16px), repeating-linear-gradient(270deg, oklch(0.68 0.18 150) 0 8px, transparent 8px 16px)",
              backgroundSize: "2px 100%, 100% 2px, 2px 100%, 100% 2px",
              backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="card-shadow relative grid grid-cols-[120px_1fr] gap-3 overflow-hidden rounded-3xl bg-white p-4">
            <div className="flex items-center justify-center rounded-2xl bg-[oklch(0.95_0.03_230)]">
              <img src={vet} alt="vet" className="h-24 w-auto object-contain" loading="lazy" width={768} height={640} />
            </div>
            <div className="self-center">
              <p className="font-display text-[17px] leading-tight font-600 text-foreground">
                Moona's full profile<br />included for the<br />check-up{" "}
                <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-success align-middle">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
              </p>
              <p className="mt-2 text-right text-sm text-foreground/50">view</p>
            </div>
          </div>
        </div>
      </div>

      {/* Date + Time pills */}
      <div className="mt-6 grid grid-cols-2 gap-3 px-5">
        <PillButton icon={<Calendar className="h-5 w-5 text-foreground/80" />} label="01/07/2022" />
        <PillButton icon={<Clock className="h-5 w-5 text-foreground/80" />} label="10am - 4pm" />
      </div>

      {/* Available clinics */}
      <div className="mt-8 flex items-center justify-between px-6">
        <h2 className="font-display text-xl font-700 text-foreground">Available clinics</h2>
        <ArrowRight className="h-5 w-5" />
      </div>

      <div className="mt-4 flex gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ClinicCard
          name="Om Animal Care"
          meta="visited last month"
          rating="4.3"
          selected
          img="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=480&q=80"
        />
        <ClinicCard
          name="Universal Pet"
          meta="visited three months ago"
          rating="4.0"
          img="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=480&q=80"
        />
        <ClinicCard
          name="Happy Tails Vet"
          meta="new clinic"
          rating="4.7"
          img="https://images.unsplash.com/photo-1581888227599-779811939961?w=480&q=80"
        />
      </div>

      {/* Fee */}
      <div className="mt-4 px-5">
        <div className="dashed-success relative rounded-2xl bg-white p-1.5">
          <div className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
              <span className="font-display text-xs font-700">
                <span className="text-[#4285F4]">G</span>
                <span className="text-foreground"> Pay</span>
              </span>
            </div>
            <div className="flex-1">
              <p className="font-display text-base leading-tight font-500 text-foreground/80">General<br />Check-Up fee</p>
            </div>
            <p className="font-display text-2xl font-700 text-foreground">₹ 200</p>
          </div>
        </div>
      </div>

      {/* Pay & Book */}
      <div className="mt-6 px-5 pb-8">
        <button className="card-shadow w-full rounded-full bg-primary py-5 font-display text-lg font-700 text-primary-foreground transition-transform active:scale-[0.98]">
          Pay and Book
        </button>
      </div>
    </AppShell>
  );
}

function PillButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3"
      style={{ border: "1.5px solid oklch(0.68 0.18 150)" }}
    >
      {icon}
      <span className="font-display text-base font-500 text-foreground">{label}</span>
    </button>
  );
}

function ClinicCard({
  name,
  meta,
  rating,
  img,
  selected,
}: {
  name: string;
  meta: string;
  rating: string;
  img: string;
  selected?: boolean;
}) {
  return (
    <div className="relative shrink-0">
      {selected && (
        <span className="absolute -top-2 -right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-success ring-4 ring-surface">
          <Check className="h-5 w-5 text-white" strokeWidth={3} />
        </span>
      )}
      <div
        className={`relative h-[230px] w-[180px] overflow-hidden rounded-3xl ${selected ? "" : ""}`}
        style={selected ? { boxShadow: "0 0 0 2px oklch(0.68 0.18 150), 0 8px 30px -10px rgba(0,0,0,0.2)" } : { boxShadow: "0 8px 24px -10px rgba(0,0,0,0.15)" }}
      >
        <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow">
          <span className="font-display text-sm font-700 text-foreground">{rating}</span>
          <Star className="h-3.5 w-3.5 fill-success text-success" />
        </div>
        <div className="absolute bottom-2 left-2 right-2 rounded-2xl bg-white px-3 py-2 shadow">
          <p className="font-display text-base font-700 leading-tight text-foreground">{name}</p>
          <p className="text-xs text-foreground/50">{meta}</p>
        </div>
      </div>
    </div>
  );
}

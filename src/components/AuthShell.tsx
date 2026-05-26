import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import doodlePuppy from "@/assets/doodle-puppy.png";
import doodleCat from "@/assets/doodle-cat.png";
import doodleWalk from "@/assets/doodle-walk.png";
import doodleCommunity from "@/assets/doodle-community.png";
import iconStar from "@/assets/icon-star.png";
import iconParty from "@/assets/icon-party.png";

interface AuthShellProps {
  title: string;
  subtitle: string;
  badge: string; // little pill label e.g. "Welcome back" / "Join the pack"
  children: ReactNode;
  footer: ReactNode;
}

export function AuthShell({ title, subtitle, badge, children, footer }: AuthShellProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-surface text-foreground">
      {/* Doodle backdrop — playful scattered stickers */}
      <DoodleBackdrop />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-5 pb-10 pt-8 md:max-w-6xl md:flex-row md:items-stretch md:gap-10 md:px-10 md:py-12 lg:gap-16 lg:px-16">
        {/* Brand panel */}
        <div className="md:flex md:flex-1 md:flex-col md:justify-center">
          {/* Logo row */}
          <Link to="/onboarding" className="flex items-center gap-3">
            <div className="card-shadow flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
              <span className="text-2xl">🐾</span>
            </div>
            <span className="font-display text-2xl font-800 tracking-tight">
              Furr<span className="text-coral">Circle</span>
            </span>
          </Link>

          {/* Mobile: compact hero with sticker */}
          <div className="mt-6 flex items-center gap-4 md:hidden">
            <div className="card-shadow flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-sunshine/40">
              <img src={doodlePuppy} alt="" className="h-16 w-16 object-contain" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-800 leading-tight">
                Where pets become social.
              </h1>
              <p className="mt-1 text-xs text-foreground/60">
                Care · share · meet · play
              </p>
            </div>
          </div>

          {/* Desktop hero */}
          <div className="mt-10 hidden md:block">
            <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-xs font-700 text-coral-foreground card-shadow">
              <img src={iconStar} alt="" className="h-4 w-4" /> Pet parents' favorite
            </span>
            <h1 className="mt-5 font-display text-5xl font-800 leading-[1.05] lg:text-6xl">
              Where pets<br />
              <span className="text-coral">become</span> social.
            </h1>
            <p className="mt-4 max-w-md text-foreground/70">
              Track care, share moments, find friends — all in one playful circle for your furry family.
            </p>

            <div className="mt-10 flex items-end gap-4">
              <div className="card-shadow flex h-44 w-44 items-center justify-center rounded-[36px] bg-sunshine/40 lg:h-52 lg:w-52">
                <img src={doodleCommunity} alt="" className="h-36 w-36 object-contain lg:h-44 lg:w-44" />
              </div>
              <div className="space-y-3">
                <div className="card-shadow flex items-center gap-2 rounded-2xl bg-card px-3 py-2">
                  <img src={iconParty} alt="" className="h-6 w-6" />
                  <span className="text-sm font-600">12k+ happy pets</span>
                </div>
                <div className="card-shadow flex items-center gap-2 rounded-2xl bg-pinky/30 px-3 py-2">
                  <img src={doodleCat} alt="" className="h-7 w-7 object-contain" />
                  <span className="text-sm font-600">Care reminders</span>
                </div>
                <div className="card-shadow flex items-center gap-2 rounded-2xl bg-primary/10 px-3 py-2">
                  <img src={doodleWalk} alt="" className="h-7 w-7 object-contain" />
                  <span className="text-sm font-600">Walk buddies near you</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="mt-8 md:mt-0 md:flex md:flex-1 md:items-center md:justify-end">
          <div className="card-shadow relative w-full rounded-[32px] bg-card p-6 md:max-w-md md:p-8 lg:p-10">
            {/* Sticker peeking from corner */}
            <div className="absolute -top-5 -right-3 hidden h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-coral text-2xl card-shadow md:flex">
              🐾
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-sunshine/40 px-3 py-1 text-[11px] font-700 uppercase tracking-wide text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              {badge}
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 leading-tight lg:text-[2rem]">
              {title}
            </h2>
            <p className="mt-1.5 text-sm text-foreground/60">{subtitle}</p>

            <div className="mt-6">{children}</div>

            <div className="mt-6 border-t border-border/60 pt-4 text-center text-sm text-foreground/70">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoodleBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft color blobs */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-sunshine/25 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-pinky/20 blur-3xl" />

      {/* Floating doodle stickers — mobile keeps a couple, desktop adds more */}
      <img src={doodleCat} alt="" className="absolute right-4 top-24 h-14 w-14 rotate-12 opacity-90 md:h-20 md:w-20 md:right-[42%] md:top-6" />
      <img src={doodleWalk} alt="" className="absolute left-2 bottom-32 h-14 w-14 -rotate-6 opacity-90 md:hidden" />
      <img src={iconStar} alt="" className="absolute left-6 top-40 h-7 w-7 opacity-80 md:left-[44%] md:top-32 md:h-10 md:w-10" />
      <img src={iconParty} alt="" className="absolute right-8 bottom-10 h-8 w-8 opacity-80 md:hidden" />

      {/* Desktop extras */}
      <img src={doodlePuppy} alt="" className="absolute hidden md:block md:left-8 md:bottom-10 md:h-24 md:w-24 md:-rotate-6 opacity-90" />
      <img src={doodleCommunity} alt="" className="absolute hidden lg:block lg:right-[44%] lg:bottom-16 lg:h-20 lg:w-20 opacity-80" />
    </div>
  );
}

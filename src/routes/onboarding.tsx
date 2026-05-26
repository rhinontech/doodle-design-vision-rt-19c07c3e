import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import community from "@/assets/doodle-community.png";
import doodleCat from "@/assets/doodle-cat.png";
import doodlePuppy from "@/assets/doodle-puppy.png";
import doodleWalk from "@/assets/doodle-walk.png";
import iconStar from "@/assets/icon-star.png";
import iconParty from "@/assets/icon-party.png";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome to Furr Circle" }] }),
  component: OnboardingScreen,
});

function OnboardingScreen() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-primary text-white">
      {/* Doodle backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 h-80 w-80 rounded-full bg-sunshine/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-pinky/20 blur-3xl" />

        <img src={doodleCat} alt="" className="absolute right-5 top-16 h-16 w-16 rotate-12 opacity-90 md:right-[44%] md:top-10 md:h-24 md:w-24" />
        <img src={doodlePuppy} alt="" className="absolute left-3 bottom-40 h-16 w-16 -rotate-6 opacity-90 md:left-6 md:bottom-12 md:h-28 md:w-28" />
        <img src={doodleWalk} alt="" className="absolute hidden md:block md:right-[44%] md:bottom-20 md:h-20 md:w-20 opacity-80" />
        <img src={iconStar} alt="" className="absolute left-8 top-32 h-7 w-7 opacity-90 md:left-[42%] md:top-32 md:h-10 md:w-10" />
        <img src={iconParty} alt="" className="absolute right-10 bottom-44 h-8 w-8 opacity-90 md:hidden" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[440px] flex-col md:max-w-6xl md:flex-row md:items-stretch md:gap-10 md:px-10 lg:gap-16 lg:px-16">
        {/* Brand / illustration */}
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center md:items-start md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-700 backdrop-blur">
            <img src={iconStar} alt="" className="h-4 w-4" /> Pet parents' favorite
          </span>

          <div className="mt-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur md:h-28 md:w-28">
            <span className="text-5xl md:text-6xl">🐾</span>
          </div>
          <h1 className="mt-6 font-display text-5xl font-800 leading-[1.05] md:text-7xl lg:text-8xl">
            Furr<br />
            <span className="text-sunshine">Circle</span>
          </h1>
          <p className="mt-4 font-display text-lg text-white/85 md:text-xl">
            Where Pets Become Social.
          </p>

          <div className="card-shadow mt-10 rounded-[36px] bg-white/15 p-6 backdrop-blur md:mt-12 md:p-8">
            <img
              src={community}
              alt=""
              className="h-44 w-auto object-contain md:h-56 lg:h-64"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA panel */}
        <div className="px-6 pb-10 pt-2 md:flex md:flex-1 md:flex-col md:items-stretch md:justify-center md:px-0 md:pb-0 md:pt-0">
          <div className="card-shadow md:w-full md:max-w-sm md:rounded-3xl md:bg-white/10 md:p-8 md:backdrop-blur lg:max-w-md lg:p-10">
            <h2 className="hidden font-display text-3xl font-800 md:block lg:text-4xl">
              Join the pack 🐾
            </h2>
            <p className="hidden text-white/80 md:mt-2 md:block">
              Care for your pets, meet new friends, share moments.
            </p>

            <Link
              to="/signup"
              className="card-shadow flex w-full items-center justify-center gap-2 rounded-full bg-coral py-5 font-display text-lg font-700 text-coral-foreground md:mt-6"
            >
              Get Started <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="mt-3 flex w-full items-center justify-center rounded-full border-2 border-white/30 bg-white/10 py-4 font-display text-base font-700 text-white backdrop-blur"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

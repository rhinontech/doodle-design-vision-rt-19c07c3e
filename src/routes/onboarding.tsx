import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import community from "@/assets/doodle-community.png";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome to Furr Circle" }] }),
  component: OnboardingScreen,
});

function OnboardingScreen() {
  return (
    <div className="relative min-h-screen w-full bg-primary text-white">
      {/* Mobile: single column; md+: 2-col split */}
      <div className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col md:max-w-6xl md:flex-row md:items-stretch md:gap-10 md:px-10 lg:gap-16 lg:px-16">
        {/* Brand / illustration */}
        <div className="flex flex-1 flex-col items-center justify-center px-8 text-center md:items-start md:text-left">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur md:h-28 md:w-28">
            <span className="text-5xl md:text-6xl">🐾</span>
          </div>
          <h1 className="mt-8 font-display text-5xl font-800 leading-[1.05] md:text-7xl lg:text-8xl">
            Furr<br />Circle
          </h1>
          <p className="mt-4 font-display text-lg text-white/80 md:text-xl">
            Where Pets Become Social.
          </p>

          <div className="mt-10 rounded-[36px] bg-white/10 p-6 backdrop-blur md:mt-12 md:p-8">
            <img
              src={community}
              alt=""
              className="h-44 w-auto object-contain md:h-56 lg:h-64"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA panel */}
        <div className="px-6 pb-10 md:flex md:flex-1 md:flex-col md:items-stretch md:justify-center md:px-0 md:pb-0">
          <div className="md:w-full md:max-w-sm md:rounded-3xl md:bg-white/10 md:p-8 md:backdrop-blur lg:max-w-md lg:p-10">
            <h2 className="hidden font-display text-3xl font-800 md:block lg:text-4xl">
              Join the pack.
            </h2>
            <p className="hidden text-white/80 md:mt-2 md:block">
              Care for your pets, meet new friends, share moments.
            </p>

            <Link
              to="/signup"
              className="card-shadow mt-0 flex w-full items-center justify-center gap-2 rounded-full bg-white py-5 font-display text-lg font-700 text-primary md:mt-6"
            >
              Get Started <ChevronRight className="h-5 w-5" />
            </Link>
            <p className="mt-4 text-center text-sm text-white/70">
              Already have an account?{" "}
              <Link to="/login" className="font-600 underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

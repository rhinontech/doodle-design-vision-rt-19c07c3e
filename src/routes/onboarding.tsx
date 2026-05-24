import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import community from "@/assets/doodle-community.png";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome to Furr Circle" }] }),
  component: OnboardingScreen,
});

function OnboardingScreen() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col bg-primary text-white">
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
          <span className="text-5xl">🐾</span>
        </div>
        <h1 className="mt-8 font-display text-5xl font-800 leading-[1.05]">
          Furr<br />Circle
        </h1>
        <p className="mt-4 font-display text-lg text-white/80">Where Pets Become Social.</p>

        <div className="mt-10 rounded-[36px] bg-white/10 p-6 backdrop-blur">
          <img src={community} alt="" className="h-44 w-auto object-contain" loading="lazy" />
        </div>
      </div>

      <div className="px-6 pb-10">
        <Link
          to="/"
          className="card-shadow flex w-full items-center justify-center gap-2 rounded-full bg-white py-5 font-display text-lg font-700 text-primary"
        >
          Get Started <ChevronRight className="h-5 w-5" />
        </Link>
        <p className="mt-4 text-center text-sm text-white/70">
          Already have an account? <span className="font-600 underline">Log In</span>
        </p>
      </div>
    </div>
  );
}

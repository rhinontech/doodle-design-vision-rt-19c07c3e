import { Link } from "@tanstack/react-router";
import community from "@/assets/doodle-community.png";
import { ReactNode } from "react";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="relative min-h-screen w-full bg-primary text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[440px] flex-col md:max-w-6xl md:flex-row md:items-stretch md:gap-10 md:px-10 lg:gap-16 lg:px-16">
        {/* Brand panel — visible on md+ */}
        <div className="hidden flex-1 flex-col items-start justify-center px-0 md:flex">
          <Link to="/onboarding" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <span className="text-2xl">🐾</span>
            </div>
            <span className="font-display text-2xl font-800">Furr Circle</span>
          </Link>
          <h1 className="mt-8 font-display text-5xl font-800 leading-[1.05] lg:text-6xl">
            Where pets<br />become social.
          </h1>
          <p className="mt-4 max-w-md text-white/80">
            Track care, share moments, and find friends for your furry companions.
          </p>
          <div className="mt-10 rounded-[36px] bg-white/10 p-6 backdrop-blur">
            <img src={community} alt="" className="h-52 w-auto object-contain lg:h-60" loading="lazy" />
          </div>
        </div>

        {/* Form panel */}
        <div className="flex flex-1 flex-col px-6 pb-10 pt-10 md:items-stretch md:justify-center md:px-0 md:pb-0 md:pt-0">
          {/* Mobile brand mark */}
          <div className="flex flex-col items-center text-center md:hidden">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
              <span className="text-4xl">🐾</span>
            </div>
            <h1 className="mt-6 font-display text-3xl font-800">Furr Circle</h1>
          </div>

          <div className="mt-8 w-full rounded-3xl bg-card p-6 text-card-foreground card-shadow md:mt-0 md:max-w-md md:p-8 lg:p-10">
            <h2 className="font-display text-2xl font-800 lg:text-3xl">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-6">{children}</div>
            <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

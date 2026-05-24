import { Link } from "@tanstack/react-router";
import { ArrowLeft, MoreVertical } from "lucide-react";

export function ScreenHeader({ title, backTo = "/", showMore = true }: { title: string; backTo?: string; showMore?: boolean }) {
  return (
    <div className="flex items-center justify-between px-5 pt-6 pb-2">
      <Link to={backTo} className="rounded-full p-1 hover:bg-black/5">
        <ArrowLeft className="h-6 w-6 text-foreground" strokeWidth={2.2} />
      </Link>
      <h1 className="font-display text-xl font-700 text-foreground">{title}</h1>
      {showMore ? (
        <button className="rounded-full p-1 hover:bg-black/5">
          <MoreVertical className="h-6 w-6 text-foreground" strokeWidth={2.2} />
        </button>
      ) : (
        <div className="h-8 w-8" />
      )}
    </div>
  );
}

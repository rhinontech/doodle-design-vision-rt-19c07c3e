import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MessageCircle, Send, Bookmark, Smile } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ScreenHeader } from "@/components/ScreenHeader";
import { posts, sampleComments } from "@/lib/demo-data";

export const Route = createFileRoute("/post/$id")({
  head: () => ({ meta: [{ title: "Post — Furr Circle" }] }),
  component: PostScreen,
});

function PostScreen() {
  const { id } = Route.useParams();
  const post = posts.find((p) => p.id === id) ?? posts[0];
  return (
    <AppShell showNav={false}>
      <ScreenHeader title="Post" backTo="/" />

      <article className="px-4">
        <header className="flex items-center gap-3 pt-2">
          <div className={`h-11 w-11 overflow-hidden rounded-full ${post.tint}`}>
            <img src={post.avatar} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-700 leading-tight">{post.pet}</p>
            <p className="text-[11px] text-foreground/55">by {post.owner} · {post.time}</p>
          </div>
          <Link to="/pet" className="rounded-full bg-primary px-3 py-1.5 text-xs font-display font-700 text-white">Follow</Link>
        </header>

        <div className={`mt-3 flex aspect-square items-center justify-center overflow-hidden rounded-3xl ${post.tint}`}>
          <img src={post.image} alt={post.pet} className="h-full w-full object-contain p-6" />
        </div>

        <div className="flex items-center gap-4 pt-3">
          <button className="flex items-center gap-1.5"><Heart className="h-6 w-6 fill-pinky text-pinky" /><span className="text-sm font-600">{post.likes + 1}</span></button>
          <button className="flex items-center gap-1.5"><MessageCircle className="h-6 w-6" /><span className="text-sm font-600">{post.comments}</span></button>
          <button><Send className="h-6 w-6" /></button>
          <button className="ml-auto"><Bookmark className="h-6 w-6" /></button>
        </div>

        <p className="pt-2 text-sm leading-snug"><b className="font-display font-700">{post.pet}</b> {post.caption}</p>
        <p className="pb-3 pt-1 text-xs font-500 text-primary">{post.tags.map((t) => `#${t}`).join("  ")}</p>
      </article>

      <div className="mt-2 border-t border-border px-4 pt-4">
        <h2 className="font-display text-base font-700">Comments</h2>
        <div className="mt-3 space-y-4 pb-28">
          {sampleComments.map((c) => (
            <div key={c.id} className="flex gap-3">
              <div className="h-9 w-9 shrink-0 rounded-full bg-primary/15" />
              <div className="flex-1">
                <p className="text-sm"><b className="font-display font-700">{c.author}</b> <span className="text-foreground/80">{c.body}</span></p>
                <p className="mt-1 flex gap-3 text-[11px] text-foreground/50">
                  <span>{c.time}</span><span>{c.likes} likes</span><button className="font-600 text-foreground/70">Reply</button>
                </p>
              </div>
              <Heart className="mt-2 h-4 w-4 text-foreground/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 z-30 w-full max-w-[440px] -translate-x-1/2 border-t border-border bg-white px-4 py-3">
        <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-2.5">
          <Smile className="h-5 w-5 text-foreground/50" />
          <input placeholder="Add a comment…" className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground/40" />
          <button className="font-display text-sm font-700 text-primary">Post</button>
        </div>
      </div>
    </AppShell>
  );
}

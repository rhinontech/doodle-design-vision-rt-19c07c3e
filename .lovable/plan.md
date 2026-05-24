# Furr Circle — Phase 1 Completion Plan

Phase 1 thesis from the research doc: **build the emotional social + community layer first**. Vet ecosystem is parked for Phase 2 (current `/book` + `/care` stay as visual placeholders, no deepening).

## What already exists

Home, Match (swipe), Discover, Profile, Pet profile, Notifications, Chat list, Onboarding, plus Care/Book (Phase 2 placeholders). Design system (Poppins/Inter, indigo/coral/sunshine/green/pink, doodle illustrations, floating pill nav) is locked.

## What Phase 1 still needs

Grouped by the three retention pillars: **Feed**, **Community**, **Pet Identity**.

### 1. Social Feed (daily engagement engine)
- `/feed` — vertical scroll of post cards: doodle avatar, pet name + owner, image/video placeholder, caption, like / comment / share / save row, hashtag chips. Mix of photo posts, rescue before/after cards, milestone cards (birthday, gotcha day).
- `/reels` — full-bleed vertical reel viewer (snap scroll), right-rail action stack (heart, comment, share, profile), bottom caption + audio strip. Static thumbnails as stand-ins for video.
- `/post/$id` — post detail with full caption, comment thread, reply input.
- `/compose` — create-post sheet: pick pet, add photo (placeholder tiles), caption, hashtags, post-type toggle (Photo / Reel / Milestone / Rescue story).
- Promote Feed to the **Home tab**; current `/` (status + events) moves to `/today` and becomes a secondary "Today" screen reachable from profile.

### 2. Community Layer (Reddit/Quora-style)
- `/community` — list of joined Circles (Golden Retriever Club, Indie Dogs India, First-Time Owners, Rescue Stories, Persian Cat Lovers, Training, Health) with member counts and unread dots. "Discover circles" row at top.
- `/community/$slug` — single Circle: cover banner, about, join button, tabs **Discussions / Top / Media**, list of question cards (title, snippet, upvotes, replies, tag).
- `/thread/$id` — discussion detail: question header, asker chip, body, vote arrows, threaded answers (top-voted first), reply input. Medical-disclaimer banner on health threads.
- `/ask` — ask-a-question composer: title, body, circle picker, tag chips.

### 3. Pet Identity & Emotional Hooks
- Extend `/pet` with **Timeline** tab (chronological milestones: adopted, first vet visit, birthday, vaccine, weight log) and **Passport** tab (vaccine list, microchip, allergies, vet contact) — read-only Phase 1.
- `/pet/$id/memory` — Memory Vault: photo-grid scrapbook grouped by year, with a "Pet Aura" personality card at top (zodiac, mood, top traits) — highly shareable.
- `/events` — Local pet events / meetups list (adoption drives, playdates, training meets) with date, location, attendee avatars, RSVP pill.
- `/lost` — Lost & Found feed: alert cards (last seen, area, reward), "Report lost pet" CTA, "Spotted a pet" CTA. Geo-tag chips only (no real map).

### 4. Navigation refresh
Bottom nav becomes the canonical Phase 1 IA:

```
Feed   |   Community   |   Match   |   Discover   |   Profile
```

- Care, Book, Notifications, Chat, Today, Events, Lost & Found, Memory Vault, Compose, Ask are reached from headers, profile rows, or floating FABs — not the main nav.
- A `+` FAB on Feed opens an action sheet: New Post / New Reel / Ask Community / Add Memory.

### 5. Cross-cutting polish
- Reusable `PostCard`, `ReelCard`, `CircleCard`, `ThreadCard`, `MilestoneRow`, `EventCard`, `LostCard`, `CommentItem`, `VoteStack` components — all in the existing doodle/soft-shadow system.
- Add 4–5 more doodle assets via imagegen: rescue scene, birthday cake + dog, lost-pet poster, group of pets (community), trophy/badge.
- Static demo data only — no Lovable Cloud yet (matches Phase 1 "growth-only, no monetization, no backend" stance).

## Explicitly out of scope (Phase 2+)
Vet booking depth, telehealth, AI symptom checker, marketplace, creator monetization, premium membership, real auth, real media upload, push notifications, moderation tooling.

## Technical notes
- All new screens are TanStack Start file routes under `src/routes/` with `head()` metadata per route.
- Existing `AppShell` + `BottomNav` are reused; `BottomNav` updated to the new 5-tab IA (Feed/Community/Match/Discover/Profile) with a `NavKey` union update.
- No new dependencies expected beyond what's already installed (`lucide-react`, framer-motion).
- Files added: ~10 new route files, ~9 new components, ~5 new doodle PNGs in `src/assets/`.

## Suggested build order
1. Nav refactor + Feed (`/feed`, `/post/$id`, `/compose`) — biggest retention lever.
2. Community (`/community`, `/community/$slug`, `/thread/$id`, `/ask`).
3. Reels (`/reels`).
4. Pet Timeline + Passport tabs + Memory Vault.
5. Events + Lost & Found.
6. Doodle asset pass + final visual QA across all screens.

Approve and I'll build in that order.

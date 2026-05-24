# Furr Circle — Full Visual Design Build

Translate the two reference PDFs (Home + Book a Clinic) into a complete TanStack Start web app, styled as a phone-shell preview so all screens are viewable in browser. The doodle-illustration aesthetic from the PDFs drives the whole system.

## Visual language (locked from the PDFs)

- **Surface**: soft warm-gray page bg (#F2F3F5), white cards with 24px radius, subtle soft shadows
- **Typography**: Poppins (display/headings) + Inter (body) — matches wireframe spec
- **Color accents** (from PDFs, overriding the all-blue scheme in the spec):
  - Indigo `#5B6CFF` — primary action cards & buttons (checkup card, Pay & Book)
  - Coral `#FF7B5C` — secondary event cards & active nav pill
  - Sunshine `#FFC542` — tertiary cards
  - Green `#22C55E` — success/verified, dashed selection borders
  - Pink `#FF6B8B` — heart/like
- **Doodles**: hand-drawn flat illustrations (boy + dog scene, stethoscope, party popper, vet doodle, paw, bone) generated via imagegen, transparent PNGs
- **Bottom nav**: floating pill bar with icon + active pill label (Home / Bone / Stethoscope / Grid) matching PDF 1
- **Selection style**: dashed green outline + green check badge (matching PDF 2 clinic card)

## Screens to build (priority order)

Core flow first, secondary screens as polished placeholders within the same design system:

1. **Home** — exact recreation of PDF 1 (greeting, "How is Moona doing today?" status card with doodle, Upcoming events colored cards)
2. **Book a Clinic** — exact recreation of PDF 2 (pet profile chip, date/time pills, clinic cards w/ ratings, Pay & Book)
3. **Care Hub** — vet, symptom checker, passport tiles in doodle style
4. **Pet Profile (Public)** — Moona's profile with stats, badges, photo grid
5. **Community Feed** — post cards with doodle avatars
6. **Match Hub** — swipe-card stack (adoption mode)
7. **Discover** — search + reels row + adoption cards
8. **Owner Profile** — settings entry, pets list
9. **Onboarding** — splash + 3 slides + login (condensed into one route with steps)
10. **Notifications + Chat list** — utility screens

## Technical approach

- Single route `/` showing a phone-shell device frame (iPhone-ish, ~390×844) centered on a soft background, with a **screen switcher** sidebar (desktop) / scroll-snap carousel (mobile) so the user can preview every screen
- Each screen = its own route under `/app/*` rendered inside the phone shell via nested layout; deep-linkable
- Design tokens in `src/styles.css` (oklch) — replace defaults with the palette above
- Components: `PhoneShell`, `BottomNav`, `ScreenHeader`, `DoodleCard`, `EventCard`, `ClinicCard`, `StatusChecklist`
- Generate ~8 doodle illustrations with `imagegen` (transparent PNG, flat vector style matching PDFs): boy+dog, vet scene, party popper, stethoscope, paw mark, bone, cat doodle, community doodle
- Use `lucide-react` for UI icons (back, more, arrow, calendar, clock)
- No backend needed — static demo content
- Framer Motion for tab transitions and card hover

## Out of scope

- Real auth / backend (Lovable Cloud not required for a visual design build)
- Reels video playback (static placeholders)
- Lost & Found, Settings detail screens (linked but minimal)

Final deliverable: a browseable design prototype of Furr Circle with the 2 PDF screens pixel-faithful and the rest of the app extended in the same doodle visual language.

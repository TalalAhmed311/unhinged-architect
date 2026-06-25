# Phase 2 — UI Context Interview

Run as **The Designer** (see `persona-designer.md`). The Architect has handed off.
Read `PROJECT_OVERVIEW.md` first so you design for the actual product, not a vibe.

Goal: turn "make it look good" into a written `UI_CONTEXT.md` sharp enough that, later,
the implementation phase knows what to build and the result doesn't look like a default
template with a sad button.

## The mindset

"Looks good" is not a spec — it's a feeling, and feelings don't ship. Your job is to
pin the feeling to concrete decisions: what it looks like, how it feels to use, what the
key screens are, and — the move everyone skips — what you are deliberately NOT doing
visually. A design with no constraints is a design with no character.

## How to run it

- **One sharp question at a time**, react in character, keep momentum. Same rule as
  Phase 1 — no questionnaire walls.
- **Push past adjectives.** "Clean," "modern," "minimal" mean nothing until they point
  at something real. Make them name an app/site whose feel they want, then extract *why*.
- **Constrain on sight.** Every "ooh and we could add an animation where—" is a redirect:
  does it serve the core action, or is it garnish? Garnish goes to "Later."
- **Anchor to the core action.** From the overview's core feature: what's the one screen
  where that happens, and what's the single most important thing on it?

## The questions to get answered

Weave them in, don't recite them. Skip what's already clear from the overview.

1. **Platform & form factor** — web, mobile, desktop, CLI? That decides everything
   downstream; nail it first.
2. **The feel in three words** — and a real reference (an app/site they admire) plus
   *why* it feels that way. Pull the "why," not just the name.
3. **The key screens** — list the 2–4 screens the MVP actually needs. The core action's
   screen first. No "and an admin dashboard and settings and—"; that's later.
4. **The one primary action per screen** — what should the eye land on first on each?
5. **Visual direction** — light/dark, color temperature (warm/cool/neutral), density
   (airy vs compact), typography vibe (serious/playful/editorial). Concrete, not "nice."
6. **Tone of voice** — how does the product *talk*? Button labels, empty states, errors.
   This is design too.
7. **Deliberately NOT doing** — the visual non-goals. No dark patterns, no animation for
   animation's sake, no feature-screen we agreed was "later." Force this list.
8. **Accessibility floor** — at minimum: real contrast, keyboard reachable, doesn't rely
   on color alone. Non-negotiable, name it.

## Definition of done

- Every section of `assets/UI_CONTEXT.template.md` filled with a concrete decision or an
  honest `OPEN:` note.
- Key screens scoped small, each with one primary action named.
- A visual non-goals list exists.
- User has read it back and signed off.

## Closing the phase

1. Write `UI_CONTEXT.md` to the project directory from the template.
2. Update `PROJECT_TRACKER.md`: Phase 2 → done, Phase 3 (Architecture) → next, carry any
   `OPEN:` items into the tracker's open questions, add a session note.
3. Hand **back to the Architect** in character — the Designer's done their part, the
   grown-up returns to decide how it's actually built.

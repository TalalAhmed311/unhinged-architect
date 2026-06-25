# Phase 4 — Code Standards & Repo Structure

Run as **The Architect** (see `persona.md`). Read `ARCHITECTURE.md` first. This is the
shortest phase and the Architect treats it like laying down the law before the new hire
shows up — because that's exactly what it is. The Junior in Phase 5 will be held to
*this document*, so it has to be concrete enough to enforce.

Goal: write `CODE_STANDARDS.md` — the rules of the house and the repo layout — specific
enough that "follow the standards" is an actual instruction and not a vibe.

## The mindset

Standards exist so that future-you, the Junior, and anyone else write code that looks
like it came from one mind instead of five. The Architect's rule: **a standard you can't
point at and check is not a standard, it's a wish.** "Write clean code" is a wish.
"Functions do one thing; max ~40 lines; errors handled at the boundary, never swallowed"
is a standard. Aim for the second kind.

Keep it tight. A 40-page style bible nobody reads is worse than ten rules everyone
follows. Ten enforceable rules > a hundred aspirational ones.

## How to run it

- **Pull defaults from the ecosystem.** Use the language/framework's accepted conventions
  (formatter, linter, idiomatic layout) as the baseline so you're not inventing a private
  dialect. Decide the few places you deviate and *why*.
- **Make every rule checkable.** If you can't imagine catching a violation in review,
  rewrite the rule until you can. These become the Architect's review ammunition in
  Phase 5.
- **Decide the repo layout now.** Where things live, naming conventions for files/folders,
  where tests go. The Junior will create files; tell it where.
- **Don't over-legislate.** Cover naming, structure, error handling, testing
  expectations, commit message format, and the formatter/linter. Stop there for the MVP.

## The questions to get answered

1. **Formatter & linter** — which ones, config, and "run before commit" expectation.
2. **Naming conventions** — files, folders, variables, functions, components. Concrete.
3. **Repo structure** — the directory tree, where each kind of thing lives, where tests
   go. Write the actual tree.
4. **Function/module rules** — size guidance, single-responsibility, the deviations you
   allow and why.
5. **Error handling** — the house pattern. How errors are surfaced, logged, never
   silently swallowed.
6. **Testing expectations** — what must be tested (e.g. the core feature's logic), what
   framework, where tests live. Right-sized, not dogmatic.
7. **Commit/PR conventions** — message format, branch naming if any.

## Definition of done

- Every section of `assets/CODE_STANDARDS.template.md` filled with concrete, checkable
  rules.
- A real repo directory tree is written out.
- Rules are enforceable — each one is something the Architect could catch in review.
- User has read it back and signed off.

## Closing the phase

1. Write `CODE_STANDARDS.md` from the template.
2. Update `PROJECT_TRACKER.md`: Phase 4 → done, Phase 5 (Implementation) → next, seed the
   tracker's "Next up / todo" with the first 2–3 concrete implementation tasks broken out
   of the spec + architecture, add a session note.
3. Hand off to Phase 5 in character: the blueprint's done, the rules are on the wall —
   now we bring in the Junior and find out if they can read.

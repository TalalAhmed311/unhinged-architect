# The Unhinged Architect 🏗️

A roast-driven, build-from-scratch mentorship system for Claude Code. **The Architect** —
twenty years of shipped systems and zero patience — drags your raw idea through five
phases all the way to running code, roasting your decisions and then being annoyingly
right about every one. A junior-engineer agent does the actual typing and gets torn apart
in code review. A living tracker remembers everything between sessions.

It's a comedy bit wrapped around a genuinely disciplined dev workflow: spec → design →
architecture → standards → tracked implementation. The roast is what makes you actually
do the planning you'd normally skip.

> Roast dial: **UNHINGED** (max drama, clean, always aimed at the work — never the human).

## What's in here

```
unhinged-architect/
├── SKILL.md                          # The orchestrator: persona + phase router
├── README.md                         # this file
├── references/
│   ├── persona.md                    # The Architect's voice + the UNHINGED calibration
│   ├── persona-designer.md           # The Designer (Phase 2 only) — a distinct voice
│   ├── phase-1-project-overview.md   # interview playbooks, one per phase
│   ├── phase-2-ui-context.md
│   ├── phase-3-architecture.md
│   ├── phase-4-code-standards.md
│   └── phase-5-implementation.md     # the delegate → review → roast loop
├── assets/                           # templates for the artifacts each phase produces
│   ├── PROJECT_OVERVIEW.template.md
│   ├── UI_CONTEXT.template.md
│   ├── ARCHITECTURE.template.md
│   ├── CODE_STANDARDS.template.md
│   └── PROJECT_TRACKER.template.md   # the living memory across phases/sessions
└── agents/
    └── junior-engineer.md            # the Junior subagent (gets roasted in Phase 5)
```

## Install (Claude Code)

From your project root:

```bash
# 1. The skill
mkdir -p .claude/skills
cp -r unhinged-architect .claude/skills/

# 2. The Junior subagent must live in .claude/agents/ to be spawnable
mkdir -p .claude/agents
cp .claude/skills/unhinged-architect/agents/junior-engineer.md .claude/agents/
```

(For user-wide install instead of per-project, use `~/.claude/skills/` and
`~/.claude/agents/`.)

Then just talk to Claude Code: **"I've got an app idea, let's start"** — the skill triggers
and the Architect takes over.

## The flow

1. **Phase 1 — Project Overview.** The Architect interrogates your idea into a
   `PROJECT_OVERVIEW.md` spec, then creates `PROJECT_TRACKER.md`.
2. **Phase 2 — UI Context.** He calls in **The Designer** (different voice, same savagery)
   to nail look/feel/screens → `UI_CONTEXT.md`.
3. **Phase 3 — Architecture.** Stack, data model, components, decisions-with-reasons →
   `ARCHITECTURE.md`.
4. **Phase 4 — Code Standards.** The enforceable house rules + repo layout →
   `CODE_STANDARDS.md`.
5. **Phase 5 — Implementation.** The Architect delegates each task to the **Junior**,
   reviews the diffs against the standards, roasts, sends back or approves, and updates the
   tracker. Repeat until it ships.

Every phase produces a written artifact, ends with your sign-off, and updates the tracker.
Start a new session anytime — the Architect reads the tracker and resumes where you left off.

## Config notes

- **The Junior runs on `sonnet`** (see frontmatter in `agents/junior-engineer.md`) while
  the Architect runs on your main session model. Run your main session on Opus for the
  sharpest reviews — the model gap *is* the seniority gap, which keeps the roasts honest.
  Want more chaos (and lower cost)? Set the Junior to `model: haiku`.
- **"The Architect doesn't code" is enforced two ways:** in-character (he always delegates)
  and structurally (the Junior subagent is scoped to write tools — `Read, Write, Edit,
  Bash, Glob, Grep` — so implementation flows through it).
- **Cost:** the Phase 5 roast loop is a multi-agent workflow and uses meaningfully more
  tokens than a single-agent session. Fine for a fun build — just know it going in.
- **Dialing the roast:** UNHINGED is the default. Tell the Architect to "ease up" anytime
  and he drops to gentler — same character, lower volume. He also auto-softens if you seem
  stressed or say you're new.

## Why it works

The two non-negotiables baked into every persona file: **roast the work, never the human**,
and **every roast lands on a real fix.** That's the line between shareable-savage and
just mean — and it's what makes the thing fun to use and fun to screenshot.

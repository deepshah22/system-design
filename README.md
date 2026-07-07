# System Design Mastery

A 90-lesson system design course, built as a static site and released 3x/week (Mon/Wed/Fri),
designed to take a student from fundamentals to principal-engineer-level interview readiness.

**Live site:** https://deepshah22.github.io/system-design/

## What this is

Each lesson is a self-contained HTML page (~30 min read) built around a "Memorable Learning
Framework" instead of plain documentation — a hook, a visual memory anchor, a recurring cast of
characters (Database Dave, Cache Cathy, Queue Quinn…), an interactive simulation, a memory palace,
a connection graph back to prior lessons, active recall and Feynman-test prompts, real-world
engineering examples, and spaced-repetition flashcards saved to `localStorage`. Diagrams are
hand-drawn-style SVGs rendered client-side with [rough.js](https://roughjs.com/) (the same engine
Excalidraw uses).

See [`plan.md`](./plan.md) for the full 90-day curriculum, current publish status, the
"Memorable Learning Framework" spec in detail, and — most importantly — the **Session Runbook**,
which documents exactly how this project is meant to be continued (authoring the next lesson,
commit conventions, and a known local commit-signing limitation) so that doesn't need to be
re-derived from scratch each time.

## How it's built

- **Static HTML only** — no build step, no backend, served directly via GitHub Pages from `main`.
- **`index.html`** — homepage with the full 90-day curriculum grid and `localStorage`-based
  progress tracking.
- **`days/day-NN.html`** — published lessons, live on the site.
- **`staging/day-NN.html`** — the next lesson, authored ahead of time but not yet released.
- **`assets/`** — shared stylesheet, progress tracking, and the lesson interactivity library
  (active recall reveals, flashcard flips, Feynman-test checks).
- **`scripts/publish_next_day.py`** + **`.github/workflows/daily-publish.yml`** — a GitHub Actions
  cron job (Mon/Wed/Fri) that promotes exactly one staged lesson to `days/` per run, flips its
  homepage card live, and updates `plan.md` — so lessons release on a real cadence instead of all
  landing at once.

## Contributing a lesson

Lessons are authored into `staging/`, one at a time, following the structure of
`days/day-09.html` or `days/day-10.html` as a template. The release automation picks up whatever's
in `staging/` on its next scheduled run — see the Session Runbook in `plan.md` for the full
checklist.

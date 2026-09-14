# System Design Mastery — Course Plan

**Course URL (GitHub Pages):** https://deepshah22.github.io/system-design/  
**Scope:** 90 lessons total (~30 min each)  
**Publish cadence:** 3x/week (Mon, Wed, Fri) — not literally tied to a 3-month calendar window; at 3 lessons/week, 90 lessons takes ~30 weeks (~7 months) of real time, paced for actual retention rather than rushing daily.  
**Target:** Principal Engineer level interview preparation  
**Last Updated:** 2026-09-14

---

## Course Overview

A progressive, 90-lesson system design course that builds from fundamentals to principal-engineer-level mastery. One topic is published every Monday/Wednesday/Friday, each designed to take ~30 minutes to read. By the end of all 90 lessons, the student can confidently answer system design interview questions at top tech companies.

### Structure
- **Homepage:** `index.html` — tracks progress, navigates all 90 days
- **Lessons:** `days/day-NN.html` — self-contained HTML pages, released 3x/week
- **Diagrams:** Excalidraw-style SVGs rendered with `roughjs`, embedded inline
- **Progress:** Tracked in browser `localStorage`, no backend required

### Memorable Learning Framework (Day 5 onward)
Every lesson from Day 5 forward follows the same structure, designed for long-term retention
rather than passive reading. **As of 2026-07-07, "Learning Objectives," "The Hook," and "Feynman
Test" were removed from every lesson (past and future)** — the course opens directly with the
Visual Memory Anchor instead of a curiosity-trigger question or an upfront objectives list. Do not
add these three back into new lessons.

> **⚠️ Open discrepancy (2026-07-07, unresolved):** the list below was edited directly on GitHub
> (commits `8dc9393`/`3c42a6b`/`b488fdb`) to a much leaner 5-item structure — Introduction, Visual
> Memory Anchor, Concept Explanation, Memory Palace, Connection Graph, Real-World Engineering —
> dropping Story, Mental Model Card, Interactive Simulation, Active Recall, and
> Flashcards/Memory Test/Takeaway entirely. **That edit has not yet been applied to any actual
> lesson file** — Days 5–11 still contain Story, Mental Model Card, Interactive Simulation, Active
> Recall, and Flashcards. Do not silently rewrite every lesson to match the leaner list below
> without confirming that's actually the intent — it's a large, one-way content change across 7+
> published lessons. The list is preserved as-written pending that confirmation rather than
> reverted back to the fuller 9-part version.

1. **Introduction** - Proper introduction of the topic in simple words.
1. **Visual Memory Anchor** — one scene that represents the whole concept
2. **Concept Explanation** — Explanation represents the whole concept in detail.
3. **Memory Palace** — the running "Distributed Systems House" every concept lives in
4. **Connection Graph** — how today's concept links to concepts already learned
5. **Real-World Engineering** — how Netflix/Amazon/Uber/Google actually use it

Days 8–10 were also rewritten in-place (2026-07-07) for principal-engineer depth — see the
Progress Log — and now additionally include a "Common Mistakes & Misconceptions" table, which is
a good pattern to reuse for future lessons where a topic has genuine, common misconceptions.

Days 1–4 predate this framework and use an older, simpler structure (their own inline objectives
block was removed in the same 2026-07-07 pass, but they were not otherwise rewritten); they remain
published as-is and are candidates for a future full rewrite pass.

### Publish Automation (3x/week: Mon, Wed, Fri)
Lessons are authored ahead of time into `staging/day-NN.html` (so quality isn't rushed), but they
are only **released** on a Mon/Wed/Fri cadence — `staging/` is never linked from the live site. A
GitHub Actions workflow (`.github/workflows/daily-publish.yml`) runs on cron `0 13 * * 1,3,5`
(13:00 UTC on Mon/Wed/Fri), and `scripts/publish_next_day.py` publishes exactly **one lesson per
run**. The weekly cadence lives in the cron expression itself; `staging/.last_published` only
guards against publishing twice if a run is manually re-triggered the same day. When it runs, the
script:
- Moves the lowest-numbered staged file into `days/`
- Flips that day's card in `index.html` from "coming soon" to live
- Marks the day "✅ Published" in this file and appends a Progress Log row
- Commits and pushes directly to `main`

This guarantees real, paced lesson-by-lesson release (3 per week, not all 90 dumped at once)
without needing a live AI call (and therefore no API key, no runtime quality risk) — the work of
writing each lesson happens in advance, the *release* is what's metered. This automation only takes
effect once it lives on `main` (GitHub Actions schedules only fire off the default branch), which is
why everything is being pushed to `main` directly.

---

## Session Runbook (read this first, every session)

Any session picking up this project — scheduled, resumed, or freshly started — should follow this
checklist rather than re-deriving the process from scratch:

1. **Check reality before assuming state.** Local git history can lag or diverge from what's
   actually on GitHub. Fetch `origin/main` and compare — don't trust `plan.md`'s "Last Updated"
   date alone. If a GitHub MCP connection is available, cross-check `list_commits` on `main` and
   `actions_list` (workflow runs for `daily-publish.yml`) to confirm the publish automation is
   genuinely firing on schedule, not just locally simulated.
2. **Check `staging/` for an already-authored, not-yet-published lesson.** If one exists, there's
   nothing to write — just verify the automation is healthy and stop.
3. **If `staging/` is empty, author exactly one lesson** for the next unpublished day (see
   `days/day-09.html` or `days/day-10.html` as the reference template) using the full Memorable
   Learning Framework below. Do not write multiple days ahead in one sitting — staging holds at
   most one lesson at a time by convention, so the release cadence stays real. **Do not include a
   "Learning Objectives" block, a "The Hook" section, or a "Feynman Test" section** — these were
   deliberately removed from every lesson on 2026-07-07; the lesson should open directly with the
   Visual Memory Anchor.
4. **Match the file structure exactly:** `staging/day-NN.html`, using `days/day-09.html`/`day-10.html`
   as the literal template (same `<style>` block, same section IDs, same `page-nav` pattern with
   `coming-soon-link` on the "next" link, same footer/script includes). `index.html` already has a
   `coming-soon` card wired up for every day 1–90 — do not add new cards, just leave that day's card
   alone (the publish script flips it live automatically).
5. **Commit with the established identity:** `git config user.name` / `user.email` should already be
   `Claude` / `noreply@anthropic.com` — don't override it (see the Commit Signing note below for why).
   Follow the existing commit message convention: `Stage Day NN: <Title>` with a body describing which
   framework sections were used.
6. **Push directly to `main`, no PR** — this repo's owner has explicitly opted into direct-to-main
   pushes, and GitHub Actions scheduled workflows only fire from the default branch anyway, so a PR
   would silently break the automation.
7. **Update `plan.md`** in the same commit: add a Progress Log row and flip the relevant Completion
   Checklist line — mirror the exact pattern already used for Days 7–10.
8. **Notify the user** with the live GitHub Pages link after pushing (this project's owner asked to
   be notified of progress, not just have it happen silently).

### Commit Signing — known limitation, don't re-investigate

Commits in this repo will locally show `git log --show-signature` → "No signature" / `%G?` → `N`,
and a local stop-hook may flag them as "Unverified." This was investigated in depth (2026-07-01):
`/home/claude/.ssh/commit_signing_key.pub` is a **0-byte empty file** in this sandbox, even though
signing is enabled (`commit.gpgsign=true`) and every commit *does* get a real `gpgsig` block attached
(confirmed via `git cat-file -p`). Local verification fails only because there's no public key
material available to build a `gpg.ssh.allowedSignersFile` against — it is not evidence of a missing
or broken signature, and it is not fixable via `--amend`/`--reset-author`/rebase from within a
session. It affects every commit made by every session in this repo, not just new ones. **Do not**
change the committer email away from `noreply@anthropic.com` to try to fix it — that only breaks the
email-match half of the hook's check without fixing the signature-trust half, making things strictly
worse. If this ever needs a real fix, it requires provisioning a non-empty signing key file or
registering the correct public key with GitHub outside of any Claude session's access.

---

## Phase 1: Fundamentals (Days 1–30)

### Week 1: Core Concepts
| Day | Topic | Status |
|-----|-------|--------|
| 01 | System Design Interview Framework | ✅ Published |
| 02 | Horizontal vs Vertical Scaling | ✅ Published |
| 03 | Networking: TCP/IP, HTTP & DNS | ✅ Published |
| 04 | Content Delivery Networks (CDN) | ✅ Published |
| 05 | Load Balancing: Algorithms & Patterns | ✅ Published |
| 06 | Caching Strategies & Patterns | ✅ Published |
| 07 | Redis & Memcached Deep Dive | ✅ Published |

### Week 2: Storage Fundamentals
| Day | Topic | Status |
|-----|-------|--------|
| 08 | SQL vs NoSQL: When to Use What | ✅ Published |
| 09 | ACID Properties & Transactions | ✅ Published |
| 10 | CAP Theorem & PACELC | ✅ Published |
| 11 | Database Indexing Strategies | ✅ Published |
| 12 | Database Replication | ✅ Published |
| 13 | Data Partitioning & Sharding | ✅ Published |
| 14 | Consistent Hashing | ✅ Published |

### Week 3: Communication Patterns
| Day | Topic | Status |
|-----|-------|--------|
| 15 | REST API Design Best Practices | ✅ Published |
| 16 | GraphQL Architecture | ✅ Published |
| 17 | gRPC & Protocol Buffers | ✅ Published |
| 18 | Message Queues & Pub/Sub | ✅ Published |
| 19 | Apache Kafka Deep Dive | ✅ Published |
| 20 | WebSockets & Server-Sent Events | ✅ Published |
| 21 | Event-Driven Architecture | ✅ Published |

### Week 4: Reliability & Security
| Day | Topic | Status |
|-----|-------|--------|
| 22 | Fault Tolerance & High Availability | ✅ Published |
| 23 | Circuit Breaker Pattern | ✅ Published |
| 24 | Rate Limiting & Throttling | ✅ Published |
| 25 | Distributed System Failures | ⏳ Scheduled |
| 26 | Observability: Logs, Metrics & Traces | ⏳ Scheduled |
| 27 | API Gateway & Service Mesh | ⏳ Scheduled |
| 28 | Security Fundamentals | ⏳ Scheduled |
| 29 | Authentication: OAuth 2.0 & JWT | ⏳ Scheduled |
| 30 | Back-of-Envelope Estimation | ⏳ Scheduled |

---

## Phase 2: Intermediate Systems (Days 31–60)

### Week 5: Distributed Algorithms
| Day | Topic | Status |
|-----|-------|--------|
| 31 | Consensus: Paxos Algorithm | ⏳ Scheduled |
| 32 | Consensus: Raft Algorithm | ⏳ Scheduled |
| 33 | Distributed Transactions: 2PC & 3PC | ⏳ Scheduled |
| 34 | Saga Pattern | ⏳ Scheduled |
| 35 | Vector Clocks & Causality | ⏳ Scheduled |
| 36 | Bloom Filters & HyperLogLog | ⏳ Scheduled |
| 37 | Merkle Trees & Gossip Protocol | ⏳ Scheduled |

### Week 6: Classic System Designs (Part 1)
| Day | Topic | Status |
|-----|-------|--------|
| 38 | Design: URL Shortener | ⏳ Scheduled |
| 39 | Design: Key-Value Store | ⏳ Scheduled |
| 40 | Design: Distributed Cache | ⏳ Scheduled |
| 41 | Design: Web Crawler | ⏳ Scheduled |
| 42 | Design: Rate Limiter Service | ⏳ Scheduled |
| 43 | Design: Pastebin / Code Sharing | ⏳ Scheduled |
| 44 | Design: Type-Ahead Search | ⏳ Scheduled |

### Week 7: Classic System Designs (Part 2)
| Day | Topic | Status |
|-----|-------|--------|
| 45 | Design: Social Media Feed | ⏳ Scheduled |
| 46 | Design: Twitter-like System | ⏳ Scheduled |
| 47 | Design: WhatsApp / Chat System | ⏳ Scheduled |
| 48 | Design: YouTube / Video Platform | ⏳ Scheduled |
| 49 | Design: Dropbox / File Storage | ⏳ Scheduled |
| 50 | Design: Notification System | ⏳ Scheduled |
| 51 | Design: E-commerce Platform | ⏳ Scheduled |

### Week 8: Advanced Storage
| Day | Topic | Status |
|-----|-------|--------|
| 52 | Cassandra Deep Dive | ⏳ Scheduled |
| 53 | MongoDB Deep Dive | ⏳ Scheduled |
| 54 | Time Series Databases | ⏳ Scheduled |
| 55 | Elasticsearch Deep Dive | ⏳ Scheduled |
| 56 | Graph Databases: Neo4j | ⏳ Scheduled |
| 57 | Data Warehouses: Redshift & BigQuery | ⏳ Scheduled |
| 58 | OLAP vs OLTP Systems | ⏳ Scheduled |
| 59 | Stream Processing: Kafka Streams & Flink | ⏳ Scheduled |
| 60 | Batch Processing: MapReduce & Spark | ⏳ Scheduled |

---

## Phase 3: Principal Engineer Level (Days 61–90)

### Week 9: Infrastructure & Operations
| Day | Topic | Status |
|-----|-------|--------|
| 61 | Containerization & Docker | ⏳ Scheduled |
| 62 | Kubernetes Deep Dive | ⏳ Scheduled |
| 63 | Service Discovery & Config Management | ⏳ Scheduled |
| 64 | Multi-Region Architecture | ⏳ Scheduled |
| 65 | Disaster Recovery Strategies | ⏳ Scheduled |
| 66 | Zero-Downtime Deployments | ⏳ Scheduled |
| 67 | Chaos Engineering | ⏳ Scheduled |

### Week 10: Advanced System Design
| Day | Topic | Status |
|-----|-------|--------|
| 68 | Design: Distributed ID Generator (Snowflake) | ⏳ Scheduled |
| 69 | Design: Google Maps / Location Services | ⏳ Scheduled |
| 70 | Design: Uber / Ride-Sharing System | ⏳ Scheduled |
| 71 | Design: Payment Processing System | ⏳ Scheduled |
| 72 | Design: Distributed Job Scheduler | ⏳ Scheduled |
| 73 | Design: Metrics & Monitoring System | ⏳ Scheduled |
| 74 | Design: Recommendation Engine | ⏳ Scheduled |

### Week 11: Architecture Patterns
| Day | Topic | Status |
|-----|-------|--------|
| 75 | CQRS Pattern | ⏳ Scheduled |
| 76 | Event Sourcing | ⏳ Scheduled |
| 77 | Microservices vs Monolith | ⏳ Scheduled |
| 78 | Domain-Driven Design | ⏳ Scheduled |
| 79 | API Versioning & Evolution | ⏳ Scheduled |
| 80 | Data Migration Strategies | ⏳ Scheduled |
| 81 | Multi-Tenancy Patterns | ⏳ Scheduled |

### Week 12: Interview Mastery
| Day | Topic | Status |
|-----|-------|--------|
| 82 | Capacity Planning & Cost Optimization | ⏳ Scheduled |
| 83 | Technical Debt Management | ⏳ Scheduled |
| 84 | Architecture Decision Records (ADRs) | ⏳ Scheduled |
| 85 | Interview: Clarifying Questions | ⏳ Scheduled |
| 86 | Advanced Estimation Techniques | ⏳ Scheduled |
| 87 | Common Interview Mistakes | ⏳ Scheduled |
| 88 | Mock Interview: Social Media System | ⏳ Scheduled |
| 89 | Mock Interview: Financial System | ⏳ Scheduled |
| 90 | Final Review & Resources | ⏳ Scheduled |

---

## Technical Architecture

```
system-design/
├── index.html          # Homepage (GitHub Pages root)
├── plan.md             # This file — course overview & progress
├── assets/
│   ├── style.css       # Global dark-theme stylesheet
│   └── progress.js     # LocalStorage-based progress tracking
└── days/
    ├── day-01.html     # ✅ Published
    ├── day-04.html     # ✅ Published
    └── day-NN.html     # One file added per day
```

### Design Decisions
- **Static HTML only** — no build step, works as GitHub Pages
- **roughjs** for Excalidraw-style hand-drawn diagrams (same rendering engine)
- **localStorage** for progress tracking — no backend needed
- **Self-contained** day pages — each works offline and standalone
- **Inter font** from Google Fonts, **JetBrains Mono** for code
- **Dark theme** — easy on the eyes for long reading sessions

---

## Progress Log

| Date | Days Published | Notes |
|------|----------------|-------|
| 2026-09-14 | Day 24 | Day 24: Rate Limiting & Throttling — authored and published live to `days/day-24.html`, card flipped live on the homepage, Day 23's forward nav-link un-dimmed. Third lesson of Week 4 (Reliability & Security); the deliberate **mirror image** of Day 23 — where the circuit breaker guards your *outbound* calls to a failing dependency, the rate limiter guards your *inbound* calls so no single caller/bug/spike eats the capacity everyone shares. Full Memorable Learning Framework (opens on the Visual Memory Anchor): a **doorman with a bucket of entry tokens** anchor (a token drips in at a steady rate; take one to enter; a small saved-up burst pours in but a flood is metered to the drip and the overflow gets a polite "come back in a minute" = the token bucket, literally the most popular limiter algorithm), a story following "Throttle Tara" whose free weather API fell over when *one client's retry loop* fired thousands of req/s and starved every good developer → a naïve **fixed-window** counter that a client defeated with the **boundary burst** (100 at the end of one minute + 100 at the start of the next = ~200 in ~2s) → a **token bucket** that removed the seam (bursts welcome, sustained rate capped) → scaling to 10 servers where each kept its *own* bucket so a client got 10× the limit, fixed by moving the counter into a shared **Redis** store (a hop + a dependency = the fundamental trade). Interactive **rate-limiter simulator**: an algorithm toggle (Token Bucket / Leaky Bucket / Fixed Window) × allowed-rate (1–100/s), burst-capacity (1–200), and incoming-traffic (1–300/s) sliders → a live bucket/queue/quota meter (green→amber→red) and metrics Allowed / Rejected-429 / Burst-handling / Client-feels, teaching the algorithms' *different burst behavior* side by side — token bucket (≤B absorbed then capped at L, "burst then 429"), leaky bucket (no burst, output smoothed to L, excess "delayed/dropped"), fixed window ("⚠ up to 2× at edge" boundary burst). Two roughjs diagrams: an anchor diagram (LEFT no-limiter: one client floods → Service sized for normal load → 💥 overwhelmed, good users get errors, "one flood ruins it for all"; RIGHT limiter: clients → 🎟️ token-bucket limiter → steady stream to a healthy Service + 429 for excess, good users served, "party goes on") and a **token-bucket mechanism** close-up (refill drip → BUCKET with saved-up token dots → request spends 1 token → ✅ token available = ALLOW / 🚫 empty = 429 + Retry-After; "no clock boundary → no fixed-window seam"). A five-algorithm state-card grid (Fixed Window / Sliding Window Log / Sliding Window Counter / Token Bucket / Leaky Bucket, each with pro/con) + a ~15-line lazy-refill `TokenBucket.allow()` code panel. A "What to Return — the 429 contract" flow-box (429 vs 503/403, **Retry-After** as the single most important header, X-RateLimit-* for self-pacing, fail-open vs fail-closed per endpoint). A "Limiting Across a Fleet" section (local / centralized-Redis / sticky-routing / approximate-sync trade-off table + "reject at the edge — LB/API-gateway/CDN — so floods die before they cost your backend"). A "Traffic-Control Toolkit" family-grid (Rate limiting / Throttling / Quotas / Load shedding / Backpressure / Circuit breaker) driving home breaker=outbound vs limiter=inbound. A "hard parts" section (who-is-the-client keying: per-IP-vs-per-user/NAT/proxy; accuracy-vs-latency-vs-cost; fail-open-vs-fail-closed as a security decision; bad limits cause their own outages/retry-storms). The Doorman's-Door memory-palace room (continuing the house from the Fuse-Box Room, teasing Day 25 Distributed System Failures as a weather room). A 8-servers/60-per-min active-recall (boundary-burst cause + N×-limit cause + token-bucket & shared-Redis fixes + the new hop/dependency cost), a "Common Mistakes" table (fixed-window≠per-rolling-minute, don't-just-limit-per-IP, rate-limiting≠throttling, per-server≠global, 429-alone-isn't-enough, token≠leaky-bucket), 5 flashcards, a 7-item memory test, and real-world Stripe / Cloudflare-edge / GitHub-API-headers / Nginx-Envoy-Redis engineering. Connection graph ties Circuit Breaker (Day 23) → Rate Limiting → Distributed Failures (Day 25), with depends-on/leads-to links to Load Balancer (Day 6), Redis/Caching (Day 8), API Gateway (Day 27), Auth/API-keys (Day 29), Observability (Day 26). **Also fixed a latent site-wide bug:** `initDayPage()` was never called on any framework-era lesson (Days 5–23), so the "Mark as Complete" button, TOC scroll-spy, and per-page nav progress were dead on every one of them — added a single auto-init in `assets/progress.js` (URL-derived day number) plus an idempotency guard so the pages that *do* call it (Days 1–4) aren't double-bound; completion tracking now works on all 24 lessons. Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly (token 20/60/40 → allowed 20/s, rejected 40/s, "burst then 429", bad; token under → full/all-pass; leaky over → rejected 60/s, no-burst, overflowing; fixed over → "⚠ up to 2× at edge") and that "Mark as Complete" now persists to localStorage on Day 24 *and* the previously-broken Days 22/10/01, with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-09-09 | Day 23 | Day 23: The Circuit Breaker Pattern — authored and published live to `days/day-23.html`, card flipped live on the homepage, Day 22's forward nav-link un-dimmed. Second lesson of Week 4 (Reliability & Security); drills from Day 22's "contain the blast radius" toolkit into *the* mechanism for containing a **failing dependency** specifically. Full Memorable Learning Framework (opens on the Visual Memory Anchor): a household **fuse box** anchor (a shorting hairdryer that would burn the house down → its breaker trips open, killing one outlet while the fridge/lights/Wi-Fi keep running → you flip it half-back to test if the short is gone = the whole pattern in one image), a story following "Cascade Carlos" whose healthy 50-thread checkout went *completely down* when the trivial **recommendations** dependency merely got *slow* — every request holding a worker thread for the full 3s timeout until the pool exhausted and even the `pay` path (which never touches recommendations) couldn't get a thread = **thread-pool exhaustion / cascading failure**; his retry instinct made it a **retry storm**; the fix wraps the call in a breaker that trips OPEN, fails fast with an empty-list fallback, and half-opens every 30s to auto-recover. Interactive **Cascade-vs-Circuit-Breaker simulator**: a protection toggle (No breaker / Circuit breaker on) × failure-rate (0–100%), call-timeout (0.2–5s), and traffic (10–200 req/s) sliders → a live thread-pool meter (green→amber→red, needed-vs-50) and metrics Breaker-state / Caller-response / Threads-busy / Blast-radius. Teaches the punchlines together via Little's Law — no-breaker at 80% fail / 3s / 100rps → avg hold ≈ f·T+(1−f)·L = ~2.4s → ~240 threads of work chasing 50 → pool EXHAUSTED, caller "hang → 3.0 s", blast radius "Whole service"; breaker-on at ≥50% fail → OPEN → ~5 ms fast-fail fallback → ~0.5 threads → pool free, "One feature"; slide failure down through the 40–50% band → HALF-OPEN (probing) → below 40% → CLOSED and invisible (zero overhead when healthy). Two roughjs diagrams: an anchor diagram (LEFT no-breaker cascade: Users→Checkout with all-red stuck thread chips→Payment SLOW/3s-timeouts, threads-held, 💥 pool empty → even "pay" can't get a thread = total outage; RIGHT breaker: Users→healthy Checkout with free green chips→⚡BREAKER:OPEN→cut connection→Payment left alone, ✅ fail fast ~5ms + fallback, blast radius = one feature) and the canonical **three-state machine** (🟢 CLOSED —failure rate ≥ threshold TRIP→ 🔴 OPEN —cooldown expires→ 🟡 HALF-OPEN, with trial ✓ → CLOSE and trial ✗ → re-OPEN). A three-states state-card grid + a transitions flow-box + a 20-line `CircuitBreaker.call(fn, fallback)` code sketch (CLOSED/OPEN/HALF_OPEN, THRESHOLD=5, COOLDOWN=30s). A "Why fail fast wins" section (4-step cascade in slow motion + Little's Law "75× hold time = need 75× threads") with the **retry-storm** subsection (retries are gasoline on an overloaded dependency; breaker is the governor that says stop). A tuning table (failure threshold / rolling window + min calls / cooldown / **timeout is the unsung prerequisite**) + a fallbacks family-grid (stale cache / empty-default / queue-for-later / fast clean error). A "Resilience Toolkit" family-grid (Timeout → Retry+backoff+jitter → Circuit Breaker → Bulkhead → Load shedding → Graceful degradation) showing how they layer. A "hard parts" section (only helps for a failing *dependency* not your own bugs; every fallback is a product decision that can mask outages; tuning is hard with opposite failure modes — flapping vs never-tripping; an open breaker means you're silently degraded → alert on breaker state). The Fuse-Box-Room memory-palace room (continuing the house from the Fortress of the Three Towers, teasing Day 24 Rate Limiting as a bouncer with a clicker). A checkout-killed-by-slow-recommendations active-recall (exhaustion mechanism + all-3-states fix + why retries worsen it), a "Common Mistakes" table (don't-wrap-everything, timeout-is-prerequisite-not-replacement, open≠just-error, retries-aren't-always-better, tuning-isn't-set-and-forget, monitor-the-breaker), 5 flashcards, a 7-item memory test, and real-world Netflix-Hystrix / resilience4j / Envoy-Istio-outlier-detection / AWS-retry-storm-lessons engineering. Connection graph ties Fault Tolerance (Day 22) → Circuit Breaker → Rate Limiting (Day 24), with depends-on/leads-to links to Timeouts&Retries, Bulkheads (Day 22), Caching/Fallbacks (Day 8), Observability (Day 26), Service Mesh (Day 27). Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly (no-breaker 80%/3s/100rps → EXHAUSTED, "hang → 3.0 s", "Whole service"; breaker-on same inputs → OPEN, "~5 ms", pool free, "One feature"; 45% → HALF-OPEN; 10% → CLOSED/invisible; healthy no-breaker → pool mostly free) and both diagrams draw with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-09-04 | Day 22 | Day 22: Fault Tolerance & High Availability — authored and published live to `days/day-22.html`, card flipped live on the homepage, Day 21's forward nav-link un-dimmed. **Opens Week 4 (Reliability & Security)** and the reliability arc: having covered every way services *talk* (Weeks 1–3), we now ask how to keep them *standing*. Full Memorable Learning Framework (opens on the Visual Memory Anchor): a twin visual anchor (old series-wired Christmas lights = one dead bulb kills the whole string = SPOF; modern bypass-wired lights + a multi-engine jetliner that lands on the remaining engines = fault tolerance — with the twist that two engines only help if they don't share one empty fuel tank = independence), a story following "Downtime Dana" from a single-server 6-hour disk-death outage → a second server that turns 99% into 99.99% (feels invincible) → both servers in the *same data-center* dying together in one power cut (the correlated-failure gut-punch) → spreading across 3 AZs + health checks + standby failover + learning to think in MTBF/MTTR. Interactive **Redundancy & Independence simulator**: placement toggle (all-in-one-zone / spread-across-3-zones) × instances-N slider (1–6) × per-instance-availability slider (90–99.9%) → a live zone/chip visual and metrics System-availability / Downtime-per-year / Single-point-of-failure? / Servers-you-pay-for. Teaches the two punchlines together — redundancy drives availability to 1−(1−a)^N (N=2 @99% → 99.99%), BUT all-in-one-zone caps you at the zone's availability (~99.9%) no matter how many copies (the zone is a common-mode SPOF: `ZONE_A × (1−(1−a)^N)`), while spread-across-3-zones removes the shared cause (`(1−(1−a)^N) × (1−(1−ZONE_A)^min(N,3))`) → same money, real fault tolerance. Two roughjs diagrams: an anchor diagram (SPOF: Users→one Server with a red X = everyone down; vs fault-tolerant: Users→LB health-checks→3 servers across Zones A/B/C, Zone B crossed out, other two keep serving) and an active-passive failover diagram (NORMAL: primary serving + standby idle-in-sync watching a 💓 heartbeat over replication; AFTER FAILOVER: primary crashed, heartbeat silent → standby promoted to new primary, the detection+promotion gap labeled as *this is your MTTR*, with a split-brain/quorum-fencing warning → Day 32). A "The Nines" section with a full availability table (90%→99.999% mapped to days/hours/minutes of yearly downtime + "feels like") and an MTBF/MTTR flow-box (Availability = MTBF/(MTBF+MTTR); recover-fast usually beats fail-rarely). A Redundancy-&-SPOFs section with the 1−(1−a)^N math code-panel and the **independence trap** flow-box (same rack/zone/power, same bad deploy, same upstream dependency, same overload/thundering-herd). A Failover-&-Health-Checks section (health checks vs heartbeats, flapping-vs-slow-detection tuning, real-path checks) + an HA family-grid (Active-Passive / Active-Active / N+1 / Graceful degradation / Bulkheads / Fencing-quorum) + a health-check/failover code sketch. An "HA Toolkit" field-guide grid (eliminate SPOFs → spread across failure domains → detect fast → recover automatically → contain blast radius → degrade gracefully). A "hard parts" section (redundancy costs money + each nine ~10×, reliability machinery adds outage-causing complexity, split-brain from auto-failover, the correlated-failure blind spot). The Fortress-of-the-Three-Towers memory-palace room (continuing the house, teasing Day 23 Circuit Breaker as the fuse). A two-99.9%-servers-that-got-worse active-recall (redundancy math + why the shared-DC outage broke it + 3 fixes), a "Common Mistakes" table (added-a-second-server≠HA, reliability≠availability≠durability, MTBF-isn't-the-only-lever, auto-failover-needs-split-brain-protection, more-nines-isn't-always-better, health-check-200-isn't-enough), 5 flashcards, a 7-item memory test, and real-world AWS-AZs / Netflix-Chaos-Monkey / DB-primary-replica-failover / Amazon-graceful-degradation engineering. Connection graph ties Load Balancers (Day 6) + Replication (Days 8–9) → Fault Tolerance → Circuit Breaker (Day 23), with depends-on/leads-to links to CAP (Days 10–12), Observability (Day 26), Consensus/Raft (Day 32), Chaos Engineering (Day 67). Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly (N=1 → SPOF/99%; one-zone N=3 @99% → capped ~99.9% "the zone" SPOF; spread N=3 @99% → ~99.9999% "NO" SPOF; downtime + chip/zone visual track N & placement) with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-08-26 | Day 21 | Day 21: Event-Driven Architecture — authored and published live to `days/day-21.html`, card flipped live on the homepage, Day 20's forward nav-link un-dimmed. Seventh lesson and true finale of Week 3 (Communication Patterns): after synchronous request/response (REST/GraphQL/gRPC), buffered messaging (queues → Kafka), and live push (WebSockets/SSE), this is the *pattern* those last two days were the plumbing for — designing a whole system around announcing facts instead of issuing commands. Full Memorable Learning Framework (no Learning Objectives / Hook / Feynman Test, per the 2026-07-07 policy; opens on the Visual Memory Anchor): an office-bell visual anchor (request-driven = a manager phoning each department in turn and waiting, a busy line jams the order; event-driven = ringing one bell "OrderPlaced!" and walking away while every department reacts on its own), a story following "Coupling Omar" from a tidy-but-brittle synchronous checkout (a slow email provider = 8-second spinner; a crashed *loyalty* service takes *checkout* down because a non-critical dependency sat in the critical path; every new feature edits the sacred function) → publishing one `OrderPlaced` event and returning immediately, each side-effect an independent subscriber (slow email now irrelevant, loyalty crash now harmless/queued, fraud screening added as a NEW subscriber with checkout untouched) → then meeting the bill (eventual consistency, no single stack trace, a double-delivered event that double-charged until consumers were made idempotent). Interactive **Request-Driven-vs-Event-Driven simulator**: an architecture toggle (direct calls / events) × a scenario toggle (all healthy / one service down) × downstream-reactions and work-per-reaction sliders → live metrics Checkout-response / Failure-blast-radius / Producer-must-know / Add-a-new-reaction, teaching the two punchlines at once — request-driven response climbs with every added service (50 + N×w) and *fails outright* when a dependency is down (every service a single point of failure, producer must know all N, adding one edits the producer); event-driven response is *flat* (~56ms, one publish) regardless of N, *survives* a down consumer (its event just queues and retries), producer knows 0, adding a reaction is 0 producer changes. Two roughjs diagrams: an anchor diagram contrasting request-driven (Checkout → 4 direct arrows to Shipping/Billing/Email/Loyalty, "knows all 4 · waits for each") vs event-driven (Checkout → one publish → Event Bus → 4 independent subscribers, "knows none · new service = just subscribe"); and a choreography-cascade diagram (Checkout→OrderPlaced→Payment→PaymentCaptured→Shipping→Shipped→Notify, no orchestrator box, a t=0→later time axis for eventual consistency, and a note that the last hop pushes to the browser over the Day-20 WebSocket/SSE edge). A Commands-vs-Events + three-kinds-of-coupling (time/space/knowledge) flow-box with an Orchestration-vs-Choreography subsection and a before/after producer code panel (checkout stops calling, starts announcing; fraud added with zero producer changes). A "Three Flavors of EDA" family-grid (Event Notification / Event-Carried State Transfer / Event Sourcing) plus Orchestration / Choreography / vs-Request-Response cards. A "hard parts" section (eventual consistency as the new default, no single stack trace → tracing/correlation IDs/Day-26 observability, at-least-once → mandatory idempotency + ordering, the distributed-monolith trap). The Announcement-Hall memory-palace room (continuing the house from the Open Line Room, teasing Day 22 Fault Tolerance). A synchronous-checkout-fails active-recall (root cause + event-driven fix + the two new problems), a "Common Mistakes & Misconceptions" table (command≠event, async≠always-faster, "we-have-Kafka"≠event-driven, once-only delivery myth, global-ordering myth, choreography-isn't-always-better), 5 flashcards, a 7-item memory test, and real-world Amazon/Netflix/Uber/banks-event-sourcing engineering. Connection graph ties pub/sub (Day 18) + Kafka (Day 19) → EDA → eventual consistency (Days 10–12), WebSockets/SSE (Day 20), observability (Day 26), Saga (Day 34), and hands off to Day 22 opening Week 4. Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly (req/healthy N=4 w=80 → 370ms, "4 in critical path", knows 4, "edit producer"; req/down → "✕ error"/"Checkout DOWN"; evt/down → 56ms/"1 delayed (queued)"/knows 0/"0 changes"; evt/healthy N=8 → still 56ms flat/"0 — isolated") with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-08-24 | Day 20 | Day 20: WebSockets & Server-Sent Events — authored and published live to `days/day-20.html`, card flipped live on the homepage, Day 19's forward nav-link un-dimmed. Sixth and final lesson of Week 3 (Communication Patterns), closing the arc: after the synchronous trio (REST/GraphQL/gRPC — client asks first) and the async pivot (queues → Kafka), this is the piece that lets the *server speak first*. Full Memorable Learning Framework: a three-way visual anchor (polling = the back-seat kid asking "are we there yet?" over and over; WebSocket = a phone left off the hook, either side talks anytime; SSE = a radio the server broadcasts on while you only listen), a story following "Realtime Rhea" from 3-second polling that pounded the server with millions of mostly-empty "any news?" requests (fast *or* cheap, never both) → long-polling as a clumsy patch → splitting the problem: WebSockets for two-way chat, SSE for the one-way order-status feed, an interactive **Polling-vs-Push simulator** (mode toggle + poll-interval/server-event-rate/client-count sliders → live Requests-per-min / Wasted-empty-% / Avg-latency / Open-connections, teaching the lose-lose polling trade — poll fast = load explodes + 90% wasted; poll slow = latency = half the interval + missed updates; push = ~0 requests, 0 waste, ~instant, at the cost of one held connection per client), two roughjs diagrams (a three-lane polling/WebSocket/SSE comparison, and a two-servers-+-pub/sub-backplane scaling diagram where Alice on Server 1 reaches Bob on Server 2 only via Redis/Kafka fan-out), a WebSocket-handshake flow (GET Upgrade → 101 Switching Protocols → full-duplex frames → ping/pong heartbeats → close) + client code panel, an SSE section (text/event-stream, `data:`/`id:`/`event:`/`retry:`, auto-reconnect + `Last-Event-ID` resume, HTTP-friendly, text-only, ~6-conn HTTP/1.1 cap — plus the modern hook that streaming LLM tokens ride SSE), a Scaling-Problem section (stateful pinned connections → connection-aware/sticky LBs + C10K/C10M, and the classic "message on Server 1 never reaches Server 2's user" bug fixed by a pub/sub backplane), a "hard parts" trade-offs section (state is expensive/fragile, reconnection + missed messages + ordering, LB/proxy/firewall friction, wrong-tool-when-you-don't-need-push), a WebSockets-vs-field card grid (WebSocket/SSE/Long-Polling/Socket.IO/gRPC-streaming/WebTransport-HTTP3), the Open-Line-Room memory-palace room (continuing the house, teasing Day 21 Event-Driven Architecture), a 3-servers-round-robin-chat-drops-messages active-recall driving home backplane + sticky routing + WebSocket-vs-SSE choice, a "Common Mistakes & Misconceptions" table, and real-world Slack-Discord/Figma/ChatGPT-Claude-SSE/trading-and-live-scores engineering. Also hardened `scripts/publish_next_day.py` so the auto-publish path un-dims the previous day's forward nav-link atomically (previously a manual step the cron skipped). Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly (default 5s/6-per-min/100 → 1.2k req/min, 50% wasted, 2.5s latency; 1s interval → 6k req/min, 90% wasted, 500ms; 1s + 120/min events → 0 wasted; push → 100 connections, 0 wasted, ~instant) and both diagrams draw with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-08-21 | Day 19 | Day 19: Apache Kafka Deep Dive — authored and published live to `days/day-19.html`, card flipped live on the homepage, Day 18's forward nav-link un-dimmed. Fifth lesson of Week 3 (Communication Patterns) and the payoff of Day 18's cliffhanger: the pivot from a *queue that empties* to a *log that never forgets*. Full Memorable Learning Framework: a numbered-library-ledger visual anchor (events written on the next blank line, never erased; split into volumes/partitions; readers keep bookmarks/offsets and can rewind to replay all history), a story following "Streaming Sana" from a per-team-queue-copy nightmare where consumed events vanished (no replay for the data scientist) → one Kafka topic retained 7 days, every team a consumer group with its own offset, replay-by-resetting-offset for free, partitioned by `rider_id` for ordering, an interactive **partition→consumer-group assignment simulator** (partitions & consumers sliders → live partition-to-owner rows, consumer chips with per-consumer partition counts and 💤-idle state, and metrics: Partitions / Consumers / Effective parallelism = min(P,C) / Idle consumers, with a warning when C>P) that teaches the single hardest Kafka rule — parallelism is capped by partition count, extra consumers idle — two roughjs diagrams (a topic-as-append-only-log with three partitions of numbered offset cells + producer appending + a consumer group reading forward from its offset; and one topic → work-queue-inside-a-group vs pub/sub-across-groups with a 2-consumer "fraud" group splitting 4 partitions and a 1-consumer "analytics" group reading all 4 independently), a Core-Machinery flow (record/key, topic, partition, offset, broker/cluster) + a producer/consumer code panel, a Consumer-Groups section (work-queue inside / pub/sub across / rebalancing), a Replication-&-Durability section (leader/follower, ISR, `acks=0/1/all`, `min.insync.replicas`, a KRaft/Raft forward-link to Day 32), a Why-Kafka-Is-Fast section (sequential append-only disk I/O, zero-copy `sendfile`, batching+compression), a "hard parts" trade-offs section (heavyweight to operate, per-partition-only ordering + sticky partition count, at-least-once/exactly-once-is-narrow, wrong-tool cases), a Kafka-vs-field card grid (Kafka/RabbitMQ-SQS/Pulsar/Redpanda-Kinesis), the Records-Room memory-palace room (continuing the house, teasing Day 20 WebSockets), a 3-partitions-9-consumers-no-speedup + out-of-order-by-account active-recall driving home partition key + partition count, a "Common Mistakes & Misconceptions" table, and real-world LinkedIn/Uber/Netflix/banks engineering. Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly (4p/3c → parallelism 3, 0 idle; 4p/6c → parallelism 4, 2 idle with the correct capped-warning; 6p/3c → parallelism 3; partition rows track P, consumer chips track C) with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-08-19 | Day 18 | Day 18: Message Queues & Pub/Sub — authored and published live to `days/day-18.html`, card flipped live on the homepage, Day 17's forward nav-link un-dimmed. Fourth lesson of Week 3 (Communication Patterns) and the **hinge of the week**: the pivot from the synchronous arc (REST/GraphQL/gRPC — call and wait) into the asynchronous arc (drop a message and walk away). Full Memorable Learning Framework: a hotel-mailroom visual anchor (write a slip, drop it in a mailbox, walk away; laundry staff pull one slip each; rushes pile up harmlessly; a bulletin board copies a notice to every department = pub/sub), a story following "Checkout Chen" from a 6-step synchronous checkout that a slow email provider takes down (thread-pool exhaustion cascading to unrelated requests) → publishing one `OrderPlaced` event and returning in 200ms while decoupled workers react on their own time (survives the email outage and a Black Friday 10× spike), an interactive **producer→queue→consumers simulator** with a Work-Queue/Pub-Sub mode toggle and producer-rate/consumer-count/per-consumer-speed sliders — live Incoming vs Drain-capacity vs Queue-depth vs Est-wait metrics, an animated dot-queue and worker icons, and a keeping-up/backing-up status; the toggle teaches the core distinction in one slider (Work Queue capacity = workers×speed so adding workers drains the backlog; Pub/Sub capacity = per-subscriber only so adding subscribers doesn't help any of them keep up), two roughjs diagrams (producer→mailbox-queue→three competing workers + DLQ; and a side-by-side Work-Queue-one-consumer vs Pub/Sub-every-subscriber fan-out), a How-It-Works section (producer/message, broker/queue, consumer/pull + visibility timeout, ack/redelivery = delete-only-after-ack, dead-letter queue, backpressure/scaling by adding consumers), a Work-Queue-vs-Pub/Sub section with a comparison table, a Delivery-Guarantees section (at-most/at-least/exactly-once + the **at-least-once + idempotent consumers** punchline and the exactly-once myth, plus ordering under competing consumers), a "hard parts" trade-offs section (new critical broker dependency, eventual consistency + harder debugging, duplicates/ordering/poison messages, wrong tool for synchronous answers), a broker-landscape card grid (RabbitMQ/Kafka/SQS-SNS/Redis-NATS with the queue-deletes-vs-log-retains distinction teeing up Day 19), the Mailroom memory-palace room (continuing the house, teasing Day 19 Kafka as an ever-recording logbook), a redelivered-double-charge active-recall driving home idempotency keys, a "Common Mistakes & Misconceptions" table, and real-world Amazon-SQS/Uber-DoorDash/Instagram-Celery/Slack engineering. Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly (default 12/s vs 15/s cap = keeping up; prod 20 with 1 worker×5 = +15/s backlog; queue with 4 workers drains; pub/sub with 4 subscribers still explodes) with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-08-14 | Day 17 | Day 17: gRPC & Protocol Buffers — authored and published live to `days/day-17.html`, card flipped live on the homepage. Third lesson of Week 3 (Communication Patterns), the direct sequel to Day 16's GraphQL and the third node in the synchronous-communication arc (HTTP → REST → GraphQL → gRPC). Full Memorable Learning Framework: a pneumatic-tube visual anchor (staff-only binary capsules stamped with numbered slots — no field names — flying between back-of-house kitchens, built from the same `.proto` blueprint on both ends), a story following "Platform-team Priya" from a 5-service REST/JSON checkout (half the CPU spent parsing JSON, a silent `qty`→`quantity` rename bug, no enforced contract) → one `.proto` contract + `protoc` codegen (client stub feels like a local call, server skeleton with one method) → 1,100-byte JSON becoming ~250 bytes of binary over one multiplexed HTTP/2 connection, an interactive **JSON-vs-Protobuf wire-size widget** (tick Customer fields id/name/email/score/active/tags and watch live JSON bytes vs Protobuf bytes, a "smaller by %" metric, comparison bars, the actual JSON text, and the protobuf byte breakdown with hex tag bytes showing field numbers-not-names), a roughjs anchor diagram (one shared `pricing.proto` compiled via protoc to a client stub + server skeleton, capsules flying over a multiplexed HTTP/2 tube), a How-It-Works section (contract-first `.proto` → protoc codegen stubs/skeletons → Protocol Buffers over HTTP/2 with multiplexing/HPACK/bidi streaming), a Protobuf-wire section driving home field-numbers-not-names + varints + the unbreakable **never renumber/reuse a field number, `reserve` deleted ones** rule, a four-RPC-types table + `.proto` streaming example (unary/server/client/bidirectional), a "hard parts" trade-offs section (no direct browser support → grpc-web+Envoy, not human-readable → grpcurl/reflection, `.proto` as a schema you must share/version), a REST-vs-GraphQL-vs-gRPC card grid, the Pneumatic-Tube-Room memory-palace room (continuing the house, teasing Day 18 message queues), a reused-field-number active-recall, a "Common Mistakes & Misconceptions" table, and real-world Google-Stubby/Kubernetes-etcd-watches/Netflix-Uber/Cloudflare-CockroachDB engineering. Pushed directly to `main`; GitHub Pages serves it live. |
| 2026-08-07 | Day 16 | Day 16: GraphQL Architecture |
| 2026-08-05 | Day 16 (staged) | Day 16: GraphQL Architecture — authored into `staging/`, awaiting the next Mon/Wed/Fri auto-publish. Second lesson of Week 3 (Communication Patterns), the direct sequel to Day 15's REST. Full Memorable Learning Framework: a blank-order-slip / bento-box visual anchor (you *write* the exact shape you want at a single window and get back a box shaped compartment-for-compartment like your slip), a story following "Mobile-team Mina" from a REST profile-screen waterfall (38-field user object + N+1 comment/author round-trips on hotel Wi-Fi → the "add a bespoke endpoint per screen" sprawl → one `POST /graphql` where clients hold the pen), an interactive **query builder** (tick fields across user → posts[] → comments[] → author.name and watch the live GraphQL query + exact JSON response shape build, plus headline metrics: REST round-trips vs GraphQL's 1, and REST over-fetched-fields — selecting the commenter's name makes REST's trips jump to 8 = the N+1 under-fetch in numbers), a roughjs data-graph anchor diagram (User→Post→Comment→Author nodes with the query path highlighted, one `POST /graphql` pill, response shaped exactly like the query), a How-It-Works section (single endpoint + query-is-the-shape, the three operation types query/mutation/subscription, the three REST pains it targets), an SDL schema/type-system section (the typed graph as the contract + `@deprecate` as field-level versioning), a resolvers section that drives home the deepest idea — **GraphQL doesn't remove the N+1 problem, it relocates it server-side**, fixed by DataLoader batching (1+1) — a "hard parts" trade-offs section (lost HTTP caching → persisted queries/normalized client caches, arbitrarily-expensive queries → depth/cost limits + disabled introspection, fuzzier observability + partial 200-with-errors), a REST-vs-GraphQL-vs-gRPC card grid, the Concierge-Booth memory-palace room (continuing the house, teasing Day 17 gRPC as the pneumatic-tube back room), a 3am-melting-database active-recall on server-side N+1, a "Common Mistakes & Misconceptions" table, and real-world Meta/GitHub-v4/Shopify-query-cost/Netflix-Federation engineering. Verified via a headless-browser (Playwright/Chromium) render that the query builder computes correctly (default 2 trips/17 over-fetched, all-fields 8 trips/39 over-fetched, none = 0), the response shape updates, and there are no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). |
| 2026-07-29 | Day 15 | Day 15: REST API Design Best Practices |
| 2026-07-27 | Day 15 (staged) | Day 15: REST API Design Best Practices — authored into `staging/`, awaiting the next Mon/Wed/Fri auto-publish. First lesson of Week 3 (Communication Patterns), pivoting from storage internals to the system's front door. Full Memorable Learning Framework: a restaurant-menu visual anchor (nouns = dishes on a fixed menu, five bell-hop verbs GET/POST/PUT/PATCH/DELETE that each know one action, uniform interface = every guest already knows the rules), a story following "API Amara" from a 340-endpoint all-POST `/getUser`/`/updateUserName` mess → resources-as-nouns → free caching/idempotency/guessability, an interactive REST method explorer (click a verb → live safe/idempotent/cacheable/has-body property cards, a realistic request/response for `/carts/42`, and a "Send it twice" idempotency demo that shows POST duplicating a line item while PUT/DELETE stay safe), a roughjs anchor diagram (one `/carts/42` resource with five colored verb pills arrowing in), the four uniform-interface pillars (nouns vs verbs, safe, idempotent, stateless) with a method-property table, a good-vs-bad URL comparison grid + URL design rules, a status-code family legend (2xx/3xx/4xx/5xx with 4xx-vs-5xx and 401-vs-403), a pagination/versioning/error-body/ETag/rate-limit/OpenAPI "grown-up concerns" section, a REST-vs-cousins card grid (GraphQL/gRPC/WebSockets forward-linking Days 16/17/20), the Reception-Desk memory-palace room, a double-charge idempotency active-recall, a "Common Mistakes & Misconceptions" table, and real-world Stripe/GitHub/AWS-API-mandate/Twitter engineering. |
| 2026-07-17 | Day 14 | Day 14: Consistent Hashing |
| 2026-07-17 | Day 14 (staged) | Day 14: Consistent Hashing — authored into `staging/`, awaiting the next Mon/Wed/Fri auto-publish. Full Memorable Learning Framework: a clock-face visual anchor (machines pinned at 12/4/8 o'clock, a key walking clockwise, a new machine sliding in at 2 o'clock to steal just one arc), a story that continues Dave's 80%-reshuffle trauma → the ring → the lopsided-arc snag → virtual nodes as the fix, a live 2,000-key hash-ring simulator (machines slider + virtual-nodes slider driving a rendered ring of colored dots, per-machine load bars that flatten as vnodes rise and go red when hot, and a measured keys-moved-on-add metric shown right next to naive `mod N`'s ~(N-1)/N), a roughjs clock-ring anchor diagram, the three-step ring mechanic (circle the hash space → place machines → walk clockwise), the 1/N movement intuition, a dedicated Virtual Nodes section, a Variants card grid (classic ring+vnodes / rendezvous-HRW / jump hash / bounded-load), the "consistent ≠ CAP-consistent" and "ring doesn't fix hot keys" clarifications, a "Common Mistakes & Misconceptions" table, a cache-avalanche active-recall, and real-world Dynamo/Akamai/Discord/ketama engineering. Verified via a headless-browser (Playwright/Chromium) render that the simulator computes correctly across machines × virtual-nodes (balance 51%→28%→13% as vnodes rise; N=8 ring-move ~11% vs naive ~89%), bars match N, the ring renders, and there are no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and degrades gracefully). |
| 2026-07-13 | Day 13 | Day 13: Data Partitioning &amp; Sharding |
| 2026-07-10 | Day 13 (staged) | Day 13: Data Partitioning & Sharding — authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish (Monday, 2026-07-13). Full Memorable Learning Framework: a filing-cabinet-cut-in-three visual anchor (A–H / I–P / Q–Z with a clerk pausing at "which cabinet?" = routing), a story that walks Dave from "3 copies of too-big is still too-big" → sharding → the hot-shard fire → the rebalance nightmare, an interactive strategy simulator (range vs hash × shard-count × traffic-skew sliders showing hottest-shard load with live per-shard bars that turn red when hot, keys-moved-on-resize, and shards-touched-by-a-range-query), a roughjs diagram showing one dataset split into 3 shards each itself replicated (partitioning × replication as two axes), the replication-vs-partitioning distinction, the partition-key decision, the three routing locations, range/hash/directory strategies, the hot-key problem, the rebalancing problem (naive `mod N` ~80% reshuffle → fixed-partitions → consistent hashing as the Day 14 cure), a "Common Mistakes & Misconceptions" table, and real-world Vitess/MongoDB/Cassandra/Elasticsearch engineering. Verified via a headless-browser (Playwright) render that the simulator computes correctly across range/hash × skew × shard-count with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and whose draw code degrades gracefully). |
| 2026-07-10 | Day 12 | Day 12: Database Replication |
| 2026-07-08 | Day 12 (staged) | Day 12: Database Replication — authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish (Friday, 2026-07-10). Full Memorable Learning Framework: two-clerks/one-courier visual anchor, a story that walks a leader crash → read replica → the read-your-own-writes bug, an interactive sync-vs-async trade simulator (mode + one-way-latency + follower-count sliders showing write latency / data-loss window / follower staleness), roughjs leader→followers WAL-stream diagram, the replication-log/statement-vs-row/WAL depth section, three topologies (single-leader / multi-leader conflicts / leaderless quorum), the lag hazards (read-your-writes, monotonic reads, consistent prefix) with their fixes, a "Common Mistakes & Misconceptions" table, and real-world Postgres/MySQL/Cassandra/Spanner engineering. Verified via a headless-browser (Playwright) render that the sim computes correctly across all three modes with no page script errors. |
| 2026-07-08 | Day 11 | Day 11: Database Indexing Strategies |
| 2026-07-07 | — | User feedback: removed "Learning Objectives," "The Hook," and "Feynman Test" from every lesson (Days 1–11, published and staged) — lessons now open directly with the Visual Memory Anchor. Also reframed `index.html` away from "interview prep" positioning toward "system design learning": reworded the hero eyebrow/subtitle/footer/meta-description, and removed the Stats Row and Progress Widget sections entirely per an explicit request to trim the homepage down to course overview + roadmap (Phases section) + navigation to every lesson (Curriculum grid) and nothing else. Verified with a headless-browser render that all pages (old Day 1–4 template and new Day 5+ template) still load with zero script errors after the removals. |
| 2026-07-07 | Days 8–10 (rewritten) | Rewrote the published Days 8, 9, and 10 for principal-engineer depth (user feedback: too shallow). Day 8 gets single-table design, the hot-partition problem, GSI eventual-consistency, and a live read/write-amplification calculator. Day 9 gets write skew (with the on-call-doctors example), the 2PL-vs-MVCC mechanism, and concrete anomaly walkthroughs. Day 10 gets N/W/R quorum math with a live calculator, sloppy quorums/hinted handoff, and vector-clock conflict resolution. Each also gains a "Common Mistakes & Misconceptions" table matching Day 11's pattern. Verified via a headless-browser render (Playwright) that all new JS/sliders compute correctly with no script errors before pushing. |
| 2026-07-07 | — | Added the Session Runbook to `plan.md` and populated `README.md`, so future sessions have a documented routine instead of re-deriving it. Also investigated the local "commit unverified" stop-hook warning: root-caused to an empty `commit_signing_key.pub` in this sandbox (no public key material available for local signature verification) — real signatures are attached to every commit, this is a local-verification-only gap, and it is not fixable via `--amend`/`--reset-author`. Documented as a known limitation so it isn't re-investigated each session. |
| 2026-07-03 | Day 11 (staged) | Day 11: Database Indexing Strategies — authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish (Monday, 2026-07-06). Full Memorable Learning Framework: card-catalog story, interactive scan-vs-B-tree cost simulator (row slider + live speedup), roughjs B+tree lookup-path diagram, leftmost-prefix rule, write-amplification cost section, and LSM-tree real-world contrast. |
| 2026-07-03 | Day 10 | Day 10: CAP Theorem &amp; PACELC |
| 2026-07-01 | Day 10 (staged) | Day 10: CAP Theorem & PACELC — authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish (Friday, 2026-07-03). Confirmed via the GitHub API that the publish automation is genuinely healthy: workflow run #10 fired on schedule and published Day 9 for real. |
| 2026-07-01 | Day 9 | Day 9: ACID Properties &amp; Transactions |
| 2026-06-29 | Day 8 | Day 8: SQL vs NoSQL: When to Use What |
| 2026-06-29 | Day 9 (staged) | Day 9: ACID Properties & Transactions — authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish. Also found and fixed a bug: every single scheduled run of the publish workflow had been failing silently (`git push` rejected as non-fast-forward whenever a manual commit landed on `main` between checkout and push) — Days 1-8's "published" status was actually flipped by manual pushes, never by the cron. Fixed by adding fetch+rebase+retry to the workflow's push step. |
| 2026-06-26 | Day 8 (staged) | Day 8: SQL vs NoSQL: When to Use What — authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish. |
| 2026-06-26 | Day 7 | Day 7: Redis & Memcached Deep Dive |
| 2026-06-19 | Day 6 | Day 6: Caching Strategies & Patterns |
| 2026-06-18 | Day 5 | Day 5: Load Balancing — Algorithms & Patterns. Introduced the Memorable Learning Framework (hook, story, memory palace, active recall, Feynman test, flashcards) and the daily-publish automation. |
| 2026-06-14 | Day 1 | Initial course launch. Homepage, Day 1: Interview Framework |
| 2026-06-14 | Day 2 | Day 2: Horizontal vs Vertical Scaling |
| 2026-06-14 | Day 3 | Day 3: Networking — TCP/IP, HTTP & DNS |
| 2026-06-15 | Day 4 | Day 4: Content Delivery Networks (CDN) |

---

## Completion Checklist

- [x] Course structure designed (90 days across 3 phases)
- [x] Homepage (`index.html`) with full 90-day curriculum grid
- [x] Progress tracking system (localStorage)
- [x] Global stylesheet with dark theme
- [x] Days 1–4 published (Interview Framework, Scaling, Networking, CDN)
- [x] Memorable Learning Framework designed (hook → anchor → story → mental model → sim → memory palace → connection graph → active recall → Feynman test → real-world examples → flashcards/memory test/takeaway)
- [x] Day 5 published using the new framework: Load Balancing
- [x] Day 6 published using the new framework: Caching Strategies & Patterns
- [x] Publish automation: `scripts/publish_next_day.py` + `.github/workflows/daily-publish.yml` (cron `0 13 * * 1,3,5` — Mon/Wed/Fri, 3x/week cadence)
- [x] Course history consolidated onto `main` (was previously isolated on a feature branch, so the cron never actually ran — GitHub Actions schedules only fire from the default branch)
- [x] Course history merged onto `main` (was stuck on an unmerged feature branch — the live site and the publish cron only work from `main`, so this was the actual blocker, now resolved)
- [x] Day 7 (Redis & Memcached Deep Dive) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 8 (SQL vs NoSQL: When to Use What) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 9 (ACID Properties & Transactions) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Fixed publish workflow race condition (non-fast-forward push failures) by adding fetch+rebase+retry to `.github/workflows/daily-publish.yml` — every prior scheduled run had been failing
- [x] Day 10 (CAP Theorem & PACELC) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 11 (Database Indexing Strategies) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 12 (Database Replication) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 13 (Data Partitioning & Sharding) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 14 (Consistent Hashing) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 15 (REST API Design Best Practices) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 16 (GraphQL Architecture) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [x] Day 17 (gRPC & Protocol Buffers) authored and published live to `days/day-17.html`
- [x] Day 18 (Message Queues & Pub/Sub) authored and published live to `days/day-18.html`
- [x] Day 19 (Apache Kafka Deep Dive) authored and published live to `days/day-19.html`
- [x] Day 20 (WebSockets & Server-Sent Events) authored and published live to `days/day-20.html`
- [x] Day 21 (Event-Driven Architecture) authored and published live to `days/day-21.html` — closes Week 3 (Communication Patterns)
- [x] Day 22 (Fault Tolerance & High Availability) authored and published live to `days/day-22.html` — opens Week 4 (Reliability & Security)
- [x] Day 23 (Circuit Breaker Pattern) authored and published live to `days/day-23.html` — Week 4 (Reliability & Security)
- [x] Day 24 (Rate Limiting & Throttling) authored and published live to `days/day-24.html` — Week 4 (Reliability & Security)
- [x] Fixed site-wide dead "Mark as Complete" button (Days 5–23 never called `initDayPage()`) via a single auto-init + idempotency guard in `assets/progress.js` — completion tracking now works on every lesson
- [ ] Days 25–90: to be authored and published 3x/week (Mon/Wed/Fri)
- [x] GitHub Pages enabled on `main` branch — confirmed via the active `pages-build-deployment` Actions workflow on the repo

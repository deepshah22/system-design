# System Design Mastery — Course Plan

**Course URL (GitHub Pages):** https://deepshah22.github.io/system-design/  
**Scope:** 90 lessons total (~30 min each)  
**Publish cadence:** 3x/week (Mon, Wed, Fri) — not literally tied to a 3-month calendar window; at 3 lessons/week, 90 lessons takes ~30 weeks (~7 months) of real time, paced for actual retention rather than rushing daily.  
**Target:** Principal Engineer level interview preparation  
**Last Updated:** 2026-07-13

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
| 14 | Consistent Hashing | ⏳ Scheduled |

### Week 3: Communication Patterns
| Day | Topic | Status |
|-----|-------|--------|
| 15 | REST API Design Best Practices | ⏳ Scheduled |
| 16 | GraphQL Architecture | ⏳ Scheduled |
| 17 | gRPC & Protocol Buffers | ⏳ Scheduled |
| 18 | Message Queues & Pub/Sub | ⏳ Scheduled |
| 19 | Apache Kafka Deep Dive | ⏳ Scheduled |
| 20 | WebSockets & Server-Sent Events | ⏳ Scheduled |
| 21 | Event-Driven Architecture | ⏳ Scheduled |

### Week 4: Reliability & Security
| Day | Topic | Status |
|-----|-------|--------|
| 22 | Fault Tolerance & High Availability | ⏳ Scheduled |
| 23 | Circuit Breaker Pattern | ⏳ Scheduled |
| 24 | Rate Limiting & Throttling | ⏳ Scheduled |
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
| 2026-07-13 | Day 14 (staged) | Day 14: Consistent Hashing — authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish (Wednesday, 2026-07-15). Full Memorable Learning Framework: a clock-face/ring visual anchor ("each key belongs to the first machine clockwise"), a story that continues Dave from Day 13's `mod N` reshuffle disaster → the ring → the raw-ring balance snag → virtual nodes as the fix, an interactive ring simulator (physical-machines × virtual-nodes-per-machine sliders with live per-machine load bars that flatten as vnodes rise, plus honest before/after-diff metrics: hottest-machine load, keys-moved-when-adding-a-machine, and what plain `mod N` would move), a roughjs two-ring diagram (clockwise ownership on the left, adding M4 stealing one arc on the right), the ring/clockwise-lookup/`O(log N)`-binary-search depth, the 1/N-movement proof, a virtual-nodes section (balance / graceful failure / heterogeneous hardware), a limits section (hot keys, replication pairing, bounded loads, rendezvous/jump hashing), a "Common Mistakes & Misconceptions" table, and real-world DynamoDB/Cassandra/Discord/CDN engineering. Verified via a headless-browser (Playwright) render that the simulator computes correctly across machine-count × vnode sliders (hottest 47%→24%, keys-moved ~12–22% vs `mod N` 83%) with no page script errors (only the sandbox-blocked roughjs CDN, which loads fine on Pages and whose ring draw degrades gracefully). |
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
- [ ] Days 15–90: to be authored into `staging/` and auto-published 3x/week (Mon/Wed/Fri)
- [x] GitHub Pages enabled on `main` branch — confirmed via the active `pages-build-deployment` Actions workflow on the repo

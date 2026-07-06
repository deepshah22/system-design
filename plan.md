# System Design Mastery — Course Plan

**Course URL (GitHub Pages):** https://deepshah22.github.io/system-design/  
**Scope:** 90 lessons total (~30 min each)  
**Publish cadence:** 3x/week (Mon, Wed, Fri) — not literally tied to a 3-month calendar window; at 3 lessons/week, 90 lessons takes ~30 weeks (~7 months) of real time, paced for actual retention rather than rushing daily.  
**Target:** Principal Engineer level interview preparation  
**Last Updated:** 2026-07-06

---

## Course Overview

A progressive, 90-lesson system design course that builds from fundamentals to principal-engineer-level mastery. One topic is published every Monday/Wednesday/Friday, each designed to take ~30 minutes to read. By the end of all 90 lessons, the student can confidently answer system design interview questions at top tech companies.

### Structure
- **Homepage:** `index.html` — tracks progress, navigates all 90 days
- **Lessons:** `days/day-NN.html` — self-contained HTML pages, released 3x/week
- **Diagrams:** Excalidraw-style SVGs rendered with `roughjs`, embedded inline
- **Progress:** Tracked in browser `localStorage`, no backend required

### Memorable Learning Framework (Day 5 onward)
Every lesson from Day 5 forward follows the same 11-part structure designed for long-term
retention rather than passive reading:

1. **Hook** — a curiosity-trigger question, never a textbook intro
2. **Visual Memory Anchor** — one emoji + one scene that represents the whole concept
3. **Story** — recurring characters (LB Lola, Cache Cathy, Database Dave, Queue Quinn, API Alex…)
4. **Mental Model Card** — the one-sentence version to keep in your head
5. **Interactive Simulation** — sliders/live math you can manipulate, not just read
6. **Memory Palace** — the running "Distributed Systems House" every concept lives in
7. **Connection Graph** — how today's concept links to concepts already learned
8. **Active Recall** — a hidden-answer question you must attempt before revealing
9. **Feynman Test** — explain it simply yourself, then compare to a model answer
10. **Real-World Engineering** — how Netflix/Amazon/Uber/Google actually use it
11. **Flashcards + Memory Test + Takeaway** — spaced-repetition deck (saved to `localStorage`) and a one-line "if you only remember one thing"

Days 1–4 were written before this framework existed and use a more traditional structure; they
remain published as-is and are candidates for a future rewrite pass.

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
| 11 | Database Indexing Strategies | ⏳ Scheduled |
| 12 | Database Replication | 📝 Staged |
| 13 | Data Partitioning & Sharding | ⏳ Scheduled |
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
| 2026-07-06 | Day 12 (staged) | Day 12: Database Replication — authored into `staging/`, awaiting the next Mon/Wed/Fri auto-publish. Day 11 (Database Indexing) is already staged in open draft PR #2; this refills the pipeline behind it so the publish cron never runs dry. Full Memorable Learning Framework: fire/twin-ledger story (Database Dave + the runner), an interactive replication-mode simulator (async / sync-all / quorum × follower count → live write-latency, durability, staleness and write-availability metrics), a roughjs leader→followers diagram (solid=sync, dashed=async), the three topologies, the three replication-lag anomalies, and failover/split-brain seeding Raft/Paxos (Days 31–32). |
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
- [x] Day 11 (Database Indexing Strategies) authored into `staging/` (open draft PR #2), awaiting next Mon/Wed/Fri auto-publish
- [x] Day 12 (Database Replication) authored into `staging/`, awaiting next Mon/Wed/Fri auto-publish
- [ ] Days 13–90: to be authored into `staging/` and auto-published 3x/week (Mon/Wed/Fri)
- [x] GitHub Pages enabled on `main` branch — confirmed via the active `pages-build-deployment` Actions workflow on the repo

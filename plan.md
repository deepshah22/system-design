# System Design Mastery — Course Plan

**Course URL (GitHub Pages):** https://deepshah22.github.io/system-design/  
**Duration:** 90 days (~30 min/day)  
**Target:** Principal Engineer level interview preparation  
**Last Updated:** 2026-06-18

---

## Course Overview

A 3-month progressive system design course that builds from fundamentals to principal-engineer-level mastery. One topic is published each day, designed to take ~30 minutes to read. By day 90, the student can confidently answer any system design interview question at top tech companies.

### Structure
- **Homepage:** `index.html` — tracks progress, navigates all 90 days
- **Daily lessons:** `days/day-NN.html` — self-contained HTML pages
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

### Daily Publish Automation
Lessons are authored ahead of time into `staging/day-NN.html` (so quality isn't rushed), but they
are only **released** one per day — `staging/` is never linked from the live site. A GitHub Actions
workflow (`.github/workflows/daily-publish.yml`) checks in every day at 13:00 UTC, but
`scripts/publish_next_day.py` only actually publishes **every other day** — cadence is tracked in
`staging/.last_published` rather than the cron schedule itself, so it stays correct even if a run
is delayed or skipped. When it is due, the script:
- Moves the lowest-numbered staged file into `days/`
- Flips that day's card in `index.html` from "coming soon" to live
- Marks the day "✅ Published" in this file and appends a Progress Log row
- Commits and pushes directly to `main`

This guarantees real one-topic-per-day pacing without needing a live AI call (and therefore no API
key, no runtime quality risk) — the work of writing each lesson happens in advance, the *release*
is what's metered daily. Day 6 (Caching) is staged now and will auto-publish via this workflow.

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
| 06 | Caching Strategies & Patterns | 📦 Staged (auto-publishes next) |
| 07 | Redis & Memcached Deep Dive | ⏳ Scheduled |

### Week 2: Storage Fundamentals
| Day | Topic | Status |
|-----|-------|--------|
| 08 | SQL vs NoSQL: When to Use What | ⏳ Scheduled |
| 09 | ACID Properties & Transactions | ⏳ Scheduled |
| 10 | CAP Theorem & PACELC | ⏳ Scheduled |
| 11 | Database Indexing Strategies | ⏳ Scheduled |
| 12 | Database Replication | ⏳ Scheduled |
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
- [x] Day 6 staged in `staging/` for tomorrow's automated publish: Caching Strategies & Patterns
- [x] Daily publish automation: `scripts/publish_next_day.py` + `.github/workflows/daily-publish.yml` (cron 13:00 UTC)
- [ ] Days 7–90: to be authored into `staging/` and auto-published one per day
- [ ] GitHub Pages enabled on `main` branch (verify in repo Settings → Pages → source: `main` / root)

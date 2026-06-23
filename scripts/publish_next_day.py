#!/usr/bin/env python3
"""
Publishes the next staged lesson (lowest-numbered days/day-NN.html sitting in
staging/) into the live days/ folder, flips its index.html card from
"coming-soon" to live, and marks it Published in plan.md.

Run by .github/workflows/daily-publish.yml on a Mon/Wed/Fri cron check (3x a
week -- see the workflow's cron expression for the actual cadence). One
lesson is published per run; the state file (staging/.last_published) only
guards against publishing twice on the same calendar day if a run is
manually re-triggered, since the weekly cadence itself lives in the cron
schedule, not here.
Exits with status 1 (no-op) if staging/ is empty or it already published today.
"""
import re
import sys
import glob
import os
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STAGING = os.path.join(ROOT, "staging")
DAYS = os.path.join(ROOT, "days")
INDEX = os.path.join(ROOT, "index.html")
PLAN = os.path.join(ROOT, "plan.md")
STATE_FILE = os.path.join(STAGING, ".last_published")


def next_staged_file():
    files = sorted(glob.glob(os.path.join(STAGING, "day-*.html")))
    return files[0] if files else None


def due_to_publish():
    if not os.path.exists(STATE_FILE):
        return True
    with open(STATE_FILE, encoding="utf-8") as f:
        last = f.read().strip()
    try:
        last_date = date.fromisoformat(last)
    except ValueError:
        return True
    return last_date != date.today()


def mark_published_today():
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        f.write(date.today().isoformat())


def extract_title(html, day_num):
    m = re.search(r"<title>Day \d+:\s*(.*?)\s*\|", html)
    return m.group(1).strip() if m else f"Day {day_num}"


def publish(path):
    fname = os.path.basename(path)
    day_num = int(re.search(r"day-(\d+)\.html", fname).group(1))
    with open(path, encoding="utf-8") as f:
        html = f.read()

    title = extract_title(html, day_num)

    dest = os.path.join(DAYS, fname)
    with open(dest, "w", encoding="utf-8") as f:
        f.write(html)
    os.remove(path)

    # Flip the index.html card for this day from coming-soon to live.
    with open(INDEX, encoding="utf-8") as f:
        index_html = f.read()
    pattern = re.compile(
        r'(<a href="days/{}" class="day-card phase-\d-card)( coming-soon)?(" data-day="{}")'.format(
            re.escape(fname), day_num
        )
    )
    index_html, n = pattern.subn(r"\1\3", index_html)
    with open(INDEX, "w", encoding="utf-8") as f:
        f.write(index_html)

    # Mark Published + append a progress log row in plan.md.
    with open(PLAN, encoding="utf-8") as f:
        plan = f.read()
    plan = re.sub(
        r"(\|\s*0?{}\s*\|[^\n]*\|)\s*⏳ Scheduled\s*\|".format(day_num),
        r"\1 ✅ Published |",
        plan,
        count=1,
    )
    today = date.today().isoformat()
    plan = plan.replace(
        "## Progress Log\n\n| Date | Days Published | Notes |\n|------|----------------|-------|\n",
        "## Progress Log\n\n| Date | Days Published | Notes |\n|------|----------------|-------|\n"
        f"| {today} | Day {day_num} | Day {day_num}: {title} |\n",
    )
    with open(PLAN, "w", encoding="utf-8") as f:
        f.write(plan)

    print(f"Published day {day_num}: {title} (index rows updated: {n})")
    return day_num, title


if __name__ == "__main__":
    if not due_to_publish():
        print("Already published a lesson today. Skipping.")
        sys.exit(1)
    next_file = next_staged_file()
    if not next_file:
        print("No staged lessons waiting in staging/. Nothing to publish today.")
        sys.exit(1)
    day_num, title = publish(next_file)
    mark_published_today()
    # Emit for the GitHub Actions step to use in the commit message.
    gh_out = os.environ.get("GITHUB_OUTPUT")
    if gh_out:
        with open(gh_out, "a") as f:
            f.write(f"day_num={day_num}\n")
            f.write(f"title={title}\n")

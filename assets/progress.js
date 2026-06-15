/* ============================================================
   SYSTEM DESIGN COURSE — Progress Tracking
   ============================================================ */

const STORAGE_KEY = 'sdc_progress';
const TOTAL_DAYS = 90;

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function isCompleted(day) {
  return !!getProgress()[day];
}

function toggleDay(day) {
  const p = getProgress();
  if (p[day]) {
    delete p[day];
  } else {
    p[day] = Date.now();
  }
  saveProgress(p);
  return !!p[day];
}

function getCompletedCount() {
  return Object.keys(getProgress()).length;
}

function getCompletedDays() {
  return Object.keys(getProgress()).map(Number).sort((a, b) => a - b);
}

function getStreakInfo() {
  const days = getCompletedDays();
  if (!days.length) return { current: 0, longest: 0 };
  let longest = 1, current = 1;
  for (let i = 1; i < days.length; i++) {
    if (days[i] === days[i - 1] + 1) {
      current++;
      longest = Math.max(longest, current);
    } else { current = 1; }
  }
  return { current, longest };
}

function formatDate(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/* ─── INITIALIZE INDEX PAGE ───────────────────────────────── */
function initIndexPage() {
  const p = getProgress();
  const count = Object.keys(p).length;
  const pct = Math.round((count / TOTAL_DAYS) * 100);

  // Update nav progress bar
  const fill = document.querySelector('.nav-progress-fill');
  const label = document.querySelector('.nav-progress-label');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = count + '/' + TOTAL_DAYS + ' days';

  // Update hero stats
  const el = {
    completed: document.getElementById('stat-completed'),
    pct: document.getElementById('stat-pct'),
    streak: document.getElementById('stat-streak'),
  };
  if (el.completed) el.completed.textContent = count;
  if (el.pct) el.pct.textContent = pct + '%';
  const { current } = getStreakInfo();
  if (el.streak) el.streak.textContent = current;

  // Update progress ring
  updateProgressRing(pct);

  // Apply completion state to day cards
  document.querySelectorAll('.day-card[data-day]').forEach(card => {
    const day = Number(card.dataset.day);
    if (p[day]) {
      card.classList.add('completed');
      const check = card.querySelector('.day-check');
      if (check) {
        check.innerHTML = '✓';
        check.style.color = 'var(--success)';
      }
    }
  });

  // Wire up checkbox clicks on cards
  document.querySelectorAll('.day-checkbox').forEach(cb => {
    const day = Number(cb.dataset.day);
    cb.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const done = toggleDay(day);
      cb.classList.toggle('done', done);
      cb.textContent = done ? '✓' : '';
      const card = cb.closest('.day-card');
      if (card) card.classList.toggle('completed', done);
      initIndexPage();
    });
    if (p[day]) {
      cb.classList.add('done');
      cb.textContent = '✓';
    }
  });
}

function updateProgressRing(pct) {
  const ring = document.querySelector('.progress-ring-fill');
  if (!ring) return;
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  ring.style.strokeDasharray = circ;
  ring.style.strokeDashoffset = offset;
  const center = document.querySelector('.progress-center');
  if (center) center.textContent = pct + '%';
}

/* ─── INITIALIZE DAY PAGE ─────────────────────────────────── */
function initDayPage(dayNum) {
  const done = isCompleted(dayNum);
  const btn = document.getElementById('mark-complete-btn');
  if (!btn) return;

  updateMarkBtn(btn, done);

  btn.addEventListener('click', () => {
    const nowDone = toggleDay(dayNum);
    updateMarkBtn(btn, nowDone);
    // Update nav progress
    const count = getCompletedCount();
    const pct = Math.round((count / TOTAL_DAYS) * 100);
    const fill = document.querySelector('.nav-progress-fill');
    const label = document.querySelector('.nav-progress-label');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = count + '/90';
    // Flash feedback
    btn.classList.add('btn-flash');
    setTimeout(() => btn.classList.remove('btn-flash'), 300);
  });

  // TOC active section observer
  const headings = document.querySelectorAll('h2[id], h3[id]');
  const tocLinks = document.querySelectorAll('.toc a');
  if (headings.length && tocLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(l => l.classList.remove('active'));
          const link = document.querySelector('.toc a[href="#' + entry.target.id + '"]');
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -75% 0px' });
    headings.forEach(h => observer.observe(h));
  }

  // Update nav progress
  const count = getCompletedCount();
  const pct = Math.round((count / TOTAL_DAYS) * 100);
  const fill = document.querySelector('.nav-progress-fill');
  const label = document.querySelector('.nav-progress-label');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = count + '/90';
}

function updateMarkBtn(btn, done) {
  if (done) {
    btn.innerHTML = '<span>✓</span> Completed';
    btn.style.background = 'var(--success)';
    btn.style.borderColor = 'var(--success)';
    btn.style.color = 'white';
  } else {
    btn.innerHTML = 'Mark as Complete';
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }
}

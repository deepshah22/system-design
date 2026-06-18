/* ============================================================
   MEMORABLE LEARNING FRAMEWORK — interactive lesson behaviors
   Active recall reveals, Feynman self-check, flashcard flips,
   and a localStorage spaced-repetition flashcard deck.
   ============================================================ */

function initLessonInteractive() {
  // Active recall: click question to reveal answer
  document.querySelectorAll('.recall-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const answer = el.parentElement.querySelector('.recall-answer');
      if (answer) answer.classList.toggle('shown');
    });
  });

  // Feynman test: reveal model answer after the learner writes their own
  document.querySelectorAll('.feynman-reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.closest('.feynman-box');
      const model = box.querySelector('.feynman-model');
      const textarea = box.querySelector('textarea');
      if (textarea && textarea.value.trim().length < 5) {
        textarea.placeholder = 'Try writing your own explanation first — even a rough one helps it stick.';
        textarea.focus();
        return;
      }
      if (model) model.classList.add('shown');
      btn.disabled = true;
      btn.textContent = 'Compare your answer above ↑';
    });
  });

  // Flashcard flip
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.flashcard-save-btn')) return;
      card.classList.toggle('flipped');
    });
  });

  // Save flashcards to a localStorage spaced-repetition deck
  document.querySelectorAll('.flashcard-save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.flashcard');
      const q = card.querySelector('.fc-q')?.textContent.trim();
      const a = card.querySelector('.fc-a')?.textContent.trim();
      if (q && a) saveFlashcard(q, a);
      btn.textContent = 'Saved ✓';
      btn.disabled = true;
    });
  });
}

function saveFlashcard(question, answer) {
  const KEY = 'sdc_flashcards';
  let deck = [];
  try { deck = JSON.parse(localStorage.getItem(KEY)) || []; } catch { deck = []; }
  if (deck.some(c => c.q === question)) return;
  deck.push({ q: question, a: answer, added: Date.now(), reviews: 0 });
  localStorage.setItem(KEY, JSON.stringify(deck));
}

document.addEventListener('DOMContentLoaded', initLessonInteractive);

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-test-btn');
  const input = document.getElementById('typing-input');
  const promptText = document.getElementById('prompt-text').textContent;
  const wpmValue = document.getElementById('wpm-value');
  const accuracyValue = document.getElementById('accuracy-value');
  const progressValue = document.getElementById('progress-value');

  let startTime = null;

  startBtn?.addEventListener('click', () => {
    input.focus();
    if (!startTime) startTime = Date.now();
  });

  input?.addEventListener('input', () => {
    if (!startTime) startTime = Date.now();

    const typed = input.value;
    const elapsedMinutes = Math.max((Date.now() - startTime) / 60000, 1 / 60);
    const wordsTyped = typed.trim().length / 5;
    const wpm = Math.max(0, Math.round(wordsTyped / elapsedMinutes));

    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === promptText[i]) correctChars += 1;
    }

    const accuracy = typed.length ? Math.round((correctChars / typed.length) * 100) : 100;
    const progress = Math.min(100, Math.round((typed.length / promptText.length) * 100));

    wpmValue.textContent = String(wpm);
    accuracyValue.textContent = `${accuracy}%`;
    progressValue.textContent = `${progress}%`;
  });
});

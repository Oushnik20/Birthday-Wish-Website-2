document.addEventListener('DOMContentLoaded', () => {
  const bodyId = document.body.id;

  // Navigation logic per page
  if (bodyId === 'page1') {
    document.getElementById('toPage2').onclick = () => {
      window.location.href = 'page2.html';
    };
  }

  if (bodyId === 'page2') {
    const countdownEl = document.getElementById('countdown');
    const nextBtn = document.getElementById('toPage3');
    let count = 10;
    nextBtn.disabled = true;

    const timer = setInterval(() => {
      count--;
      countdownEl.textContent = count;
      if (count === 0) {
        clearInterval(timer);
        nextBtn.disabled = false;
        nextBtn.textContent = 'Next';
      }
    }, 1000);

    nextBtn.onclick = () => {
      if (!nextBtn.disabled) window.location.href = 'page3.html';
    };
  }

  if (bodyId === 'page3') {
    document.getElementById('toPage4').onclick = () => {
      window.location.href = 'page4.html';
    };
  }

  if (bodyId === 'page4') {
    const endBtn = document.getElementById('endButton');
    if (endBtn) {
      endBtn.onclick = () => alert('Celebration Complete! 🎉');
    }
  }

  // Create flying balloon hearts
  function createBalloon(index) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = (6 + Math.random() * 5) + 's';
    balloon.style.animationDelay = (index * 0.7) + 's';
    return balloon;
  }

  function addBalloons(count = 15) {
    const container = document.createElement('div');
    container.classList.add('balloons-container');
    for (let i = 0; i < count; i++) {
      container.appendChild(createBalloon(i));
    }
    document.body.appendChild(container);
  }

  // Confetti sprinklers creation
  function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
    confetti.style.animationDelay = (Math.random() * 2) + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    return confetti;
  }

  function sprinkleConfetti(amount = 40) {
    for (let i = 0; i < amount; i++) {
      const confetti = createConfettiPiece();
      document.body.appendChild(confetti);
      confetti.addEventListener('animationend', () => confetti.remove());
    }
  }

  addBalloons();
  sprinkleConfetti();
  setInterval(sprinkleConfetti, 2000);
});

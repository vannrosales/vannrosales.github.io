const phrases = [
    "I'm Giovanni Hanz Rosales.",
    "I'm a passionate Web App Developer.",
    "I love building things with code.",
    "Turning ideas into reality."
  ];

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenPhrases = 2000;

  let phraseIndex = 0;
  let charIndex = 0;
  const typingText = document.getElementById("typingText");

  function type() {
    if (charIndex < phrases[phraseIndex].length) {
      typingText.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenPhrases);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

  // Start the animation
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
  });

  // Toggle hamburger menu
  

  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('show');
  });
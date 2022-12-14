function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    setTimeout(()=>{key.classList.remove('playing')}, 150)
  }

  // const keys = Array.from(document.querySelectorAll('.key'));
  // keys.forEach(key => key.addEventListener('transitioned', removeTransition));
  window.addEventListener('keydown', playSound);
const kits = ["crash", "kick", "snare", "tom"];
const btnEls = document.querySelectorAll(".btn");
const containerEl = document.querySelector(".container");

kits.forEach((kit, index) => {
  const btn = btnEls[index];
  if (btn) {
    btn.style.backgroundImage = `url("./images/${kit}.png")`;
  }
  const audioEl = document.createElement("audio");
  audioEl.src = "./sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);

  btn.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      btn.style.transform = "scale(.9)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 100);
    }
  });
});

// I built a drum kit app that plays sounds when you click buttons or press keys, using dynamic audio elements and keyboard event handling for interactivity and animation.

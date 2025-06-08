const bodyEl = document.body;
const inputEl = document.getElementById("dark-mode");

function toggleBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  toggleBody();
});

toggleBody();

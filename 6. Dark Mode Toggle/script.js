const inputEl = document.getElementById("dark-mode");
const bodyEl = document.body;

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

toggleTheme();

function toggleTheme() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  toggleTheme();
});

function saveToLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

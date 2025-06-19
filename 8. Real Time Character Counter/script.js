const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounters();
});

function updateCounters() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText = textareaEl.maxLength - textareaEl.value.length;
}

updateCounters();

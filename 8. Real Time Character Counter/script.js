const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", updateCounter);

function updateCounter() {
  const keysTyped = textareaEl.value.length;
  const max = textareaEl.maxLength;
  totalCounterEl.innerText = keysTyped;
  remainingCounterEl.innerText = max - keysTyped;
}

updateCounter();

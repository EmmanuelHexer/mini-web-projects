const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  const keysTyped = textAreaEl.value.length;
  totalCounterEl.innerText = keysTyped;
  remainingCounterEl.innerText = textAreaEl.maxLength - keysTyped;
}

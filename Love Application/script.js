// tip calculator

let running = false;
let billAmount = 0;
let tip = 0;
let tipRate = 0;
let total = 0;

while (!running) {
  billAmount = Number(prompt("What is the bill amount"));
  tipRate = Number(prompt("What is the tip rate?"));
  if (billAmount > 0 && tipRate > 0) {
    tip = Math.ceil(billAmount * (tipRate / 100));
    total = billAmount + tip;
    console.log(`Tip: $${tip}`, `Total: $${total}`);
  } else {
    break;
  }
  break;
}

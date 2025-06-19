const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);
    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});

// This project animates profile statistics from 0 to a target number stored in a data-ceil attribute. We loop through each counter element and initialize it to 0. Inside the loop, a recursive incrementCounter() function calculates the step by dividing the target by 15. It updates the counter every 50 milliseconds using setTimeout, and stops once the value reaches or exceeds the target.

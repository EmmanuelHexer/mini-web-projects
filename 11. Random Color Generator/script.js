const containerEl = document.querySelector(".container");

for (let i = 0; i < 10; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.className = "color-container";
  containerEl.appendChild(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".color-container");

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    colorContainerEl.style.background = "#" + randomColors();
    colorContainerEl.innerText = "#" + randomColors();
  });
}

generateColors();

function randomColors() {
  let chars = "abcdef1234567890";
  let colorCode = "";

  for (let i = 0; i < 6; i++) {
    let randomNumbers = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumbers, randomNumbers + 1);
  }
  return colorCode;
}

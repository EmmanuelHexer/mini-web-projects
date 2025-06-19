const colorContainer = document.querySelector(".container");

for (let i = 0; i < 10; i++) {
  const color = document.createElement("div");
  color.className = "color-container";
  colorContainer.appendChild(color);
}

const colorContainerEls = document.querySelectorAll(".color-container");

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    colorContainerEl.innerHTML = "#" + randomColors();
    colorContainerEl.style.background = "#" + randomColors();
  });
}

generateColors();

function randomColors() {
  const chars = "0123456789abcdef";
  let colorCode = "";

  for (let i = 0; i < 6; i++) {
    const randomPick = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomPick];
    console.log(colorCode);
  }
  return colorCode;
}

randomColors();

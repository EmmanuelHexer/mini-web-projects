const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  spawnHearts(xPos, yPos);
});

function spawnHearts(x, y) {
  const loveIcon = document.createElement("img");
  const randomNumber = Math.floor(Math.random() * 100);
  loveIcon.src = "./loveIcon.png";
  loveIcon.className = "loveIcon";
  bodyEl.appendChild(loveIcon);

  loveIcon.style.left = x + "px";
  loveIcon.style.top = y + "px";
  loveIcon.style.width = randomNumber + "px";
  loveIcon.style.height = randomNumber + "px";

  setTimeout(() => {
    loveIcon.remove();
  }, 2000);
}

console.log("this is working");

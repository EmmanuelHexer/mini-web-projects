const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const imgEl = document.createElement("img");
  const randNum = Math.floor(Math.random() * 100);

  imgEl.src = "./loveIcon.png";
  imgEl.className = "loveIcon";
  bodyEl.appendChild(imgEl);

  imgEl.style.left = xPos + "px";
  imgEl.style.top = yPos + "px";
  imgEl.style.width = randNum + "px";
  imgEl.style.height = randNum + "px";

  setTimeout(() => {
    imgEl.remove();
  }, 1500);
});

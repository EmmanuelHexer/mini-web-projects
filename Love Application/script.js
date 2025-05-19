const bodyEl = document.body;

bodyEl.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  console.log(xPos, yPos);

  const loveIcon = document.createElement("img");
  loveIcon.src = "./loveIcon.png";
  loveIcon.className = "loveIcon";
  console.log(loveIcon);
  bodyEl.appendChild(loveIcon);

  loveIcon.style.left = xPos + "px";
  loveIcon.style.top = yPos + "px";
});

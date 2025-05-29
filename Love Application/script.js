const sectionEl = document.getElementById("section");
const bodyEl = document.body;

bodyEl.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const randomNumbers = Math.floor(Math.random() * 100);

  const imgEl = document.createElement("img");
  imgEl.src = "./loveIcon.png";
  imgEl.id = "loveIcon";
  sectionEl.appendChild(imgEl);

  imgEl.style.left = xPos + "px";
  imgEl.style.top = yPos + "px";

  imgEl.style.width = randomNumbers + "px";
  imgEl.style.height = randomNumbers + "px";

  setTimeout(() => {
    imgEl.remove();
  }, 1500);
});

const containerEl = document.getElementById("section");
const bodyEl = document.body;

bodyEl.addEventListener("mousemove", (e) => {
  trailsAnimation(e);
});

function trailsAnimation(e) {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const sizes = Math.floor(Math.random() * 100);
  const imgEl = document.createElement("img");
  imgEl.src = "https://cdn4.iconfinder.com/data/icons/set-1/32/__1-512.png";
  imgEl.id = "loveIcon";
  containerEl.appendChild(imgEl);

  console.log(xPos, yPos);

  imgEl.style.left = xPos + "px";
  imgEl.style.top = yPos + "px";

  imgEl.style.width = sizes + "px";
  imgEl.style.height = sizes + "px";

  setTimeout(() => {
    imgEl.remove();
  }, 1500);
}

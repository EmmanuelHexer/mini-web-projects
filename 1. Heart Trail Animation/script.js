const sectionEl = document.getElementById("section");
const bodyEl = document.body;

bodyEl.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const sizes = Math.floor(Math.random() * 100);

  const heartIcon = document.createElement("img");
  heartIcon.src = "https://cdn4.iconfinder.com/data/icons/set-1/32/__1-512.png";
  heartIcon.id = "loveIcon";
  sectionEl.appendChild(heartIcon);

  heartIcon.style.left = xPos + "px";
  heartIcon.style.top = yPos + "px";

  heartIcon.style.width = sizes + "px";
  heartIcon.style.height = sizes + "px";
  setTimeout(() => {
    heartIcon.remove();
  }, 1500);
});

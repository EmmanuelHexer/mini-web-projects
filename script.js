const bodyEl = document.body;

document.addEventListener("DOMContentLoaded", () => {
  bodyEl.onmousemove = (e) => {
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const randomNumbers = Math.floor(Math.random() * 100);

    const imgEl = document.createElement("img");
    imgEl.src = "https://cdn4.iconfinder.com/data/icons/set-1/32/__1-512.png";
    imgEl.alt = "love icon";
    imgEl.id = "loveIcon";
    bodyEl.appendChild(imgEl);

    imgEl.style.left = xPos + "px";
    imgEl.style.top = yPos + "px";

    imgEl.style.width = randomNumbers + "px";
    imgEl.style.height = randomNumbers + "px";

    setTimeout(() => {
      imgEl.remove();
    }, 1500);
  };
});

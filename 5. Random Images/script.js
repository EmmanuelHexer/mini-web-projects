const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

function addMoreImages() {
  for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * 1000);
    const imageEl = document.createElement("img");
    imageEl.src = `https://picsum.photos/300?random=${randomNumber}`;
    imageContainerEl.appendChild(imageEl);
  }
}

btnEl.addEventListener("click", () => {
  addMoreImages();
});

btnEl.addEventListener("mouseover", (e) => {
  const xPos = e.pageX - btnEl.offsetLeft;
  const yPos = e.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", xPos + "px");
  btnEl.style.setProperty("--yPos", yPos + "px");
});

const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  loadMoreImages();
});

btnEl.addEventListener("mouseover", (e) => {
  btnAnimation(e);
});

function loadMoreImages() {
  for (let i = 0; i < 3; i++) {
    const newImages = document.createElement("img");
    const randomImages = Math.floor(Math.random() * 997 - 3);
    newImages.src = `https://picsum.photos/300?random=${randomImages}`;
    imageContainerEl.appendChild(newImages);
  }
}

function btnAnimation(e) {
  const xPos = e.pageX - btnEl.offsetLeft;
  const yPos = e.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", xPos + "px");
  btnEl.style.setProperty("--yPos", yPos + "px");
}

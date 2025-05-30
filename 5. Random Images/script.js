const imageContainerEl = document.getElementById("image-container");
const btnEl = document.getElementById("btn");

const imageLimit = 3;

btnEl.addEventListener("click", addNewImages);

function addNewImages() {
  for (let i = 0; i < imageLimit; i++) {
    const images = document.createElement("img");
    const randomNum = Math.floor(Math.random() * 997) + 4;
    images.src = `https://picsum.photos/300?random=${randomNum}`;
    imageContainerEl.appendChild(images);
  }
}

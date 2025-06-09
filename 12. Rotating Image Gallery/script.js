const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let deg = 0;
let timer;

prevEl.addEventListener("click", () => {
  deg = deg + 45;
  clearTimeout(timer);
  changeImages();
});

nextEl.addEventListener("click", () => {
  deg = deg - 45;
  clearTimeout(timer);
  changeImages();
});

function changeImages() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${deg}deg) `;
  timer = setTimeout(() => {
    deg = deg - 45;
    changeImages();
  }, 3000);
}

changeImages();

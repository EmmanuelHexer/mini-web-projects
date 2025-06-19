const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

function addAnimations(element, className) {
  element.addEventListener("mouseover", () => {
    containerEl.classList.add(className);
  });

  element.addEventListener("mouseleave", () => {
    containerEl.classList.remove(className);
  });
}

addAnimations(leftEl, "active-left");
addAnimations(rightEl, "active-right");

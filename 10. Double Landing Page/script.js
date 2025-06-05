const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

function splitElements(element, className) {
  element.addEventListener("mouseover", () => {
    containerEl.classList.add(className);
  });

  element.addEventListener("mouseleave", () => {
    containerEl.classList.remove(className);
  });
}

splitElements(leftEl, "active-left");
splitElements(rightEl, "active-right");

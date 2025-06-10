const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});

console.log(magnifierEl, searchBarContainerEl);

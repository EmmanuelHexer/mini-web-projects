const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (e) => {
  const xPos = e.pageX - btnEl.offsetLeft;
  const yPos = e.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", xPos + "px");
  btnEl.style.setProperty("--yPos", yPos + "px");
});

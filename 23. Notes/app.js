const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function getStorage() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getStorage();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  const inputEl = document.createElement("p");
  inputEl.className = "input-box";
  inputEl.setAttribute("contenteditable", "true");
  notesContainer.appendChild(inputEl);
  const imgEl = document.createElement("img");
  imgEl.src = "images/delete.png";
  notesContainer.appendChild(inputEl).appendChild(imgEl);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = notesContainer.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeydown = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});

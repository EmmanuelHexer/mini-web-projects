const containerEl = document.querySelector(".container");

const careers = [
  "Programmer",
  "Software Engineer",
  "Pianist",
  "Gamer",
  "Musician",
];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
  <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;

  if (characterIndex === careers[careerIndex].length) {
    characterIndex = 0;
    careerIndex++;
  }

  if (careerIndex === careers.length) {
    characterIndex = 0;
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}

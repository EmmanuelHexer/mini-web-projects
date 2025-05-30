const containerEl = document.querySelector(".container");

const careers = ["Programmer", "Youtuber", "Philanthropist"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
  <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;
  setTimeout(() => {
    updateText();
  }, 400);

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
    characterIndex = 0;
  }
}

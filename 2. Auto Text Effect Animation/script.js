const containerEl = document.querySelector(".container");

const careers = ["Programmer", "Engineer", "Typist", "Pianist", "Actor"];
let careerIndex = 0;
let characterIndex = 0;

function updateCareers() {
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
  setTimeout(updateCareers, 400);
}

updateCareers();

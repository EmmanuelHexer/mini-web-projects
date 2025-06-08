const containerEl = document.querySelector(".container");

const careers = [
  "Tedua Hene",
  "Pharmacist",
  "Medicine Seller",
  "Programmer",
  "Producer",
];

let careerIndex = 0;
let characterIndex = 0;

function careerAnimation() {
  characterIndex++;
  containerEl.innerHTML = `
   <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
    characterIndex = 0;
  }

  setTimeout(careerAnimation, 400);
}

careerAnimation();

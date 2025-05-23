// RANDOM PASSWORD GENERATOR

let passwordValue = document.getElementById("passwordValue");
const errorMessage = document.getElementById("errorMessage");

const sliderValue = document.getElementById("sliderValue");
const sliderRange = document.getElementById("sliderRange");

const includeUppercase = document.getElementById("uppercase");
const includeLowerCase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const excludeDuplicate = document.getElementById("duplicate");

sliderRange.oninput = () => {
  sliderValue.innerHTML = sliderRange.value;

  if (sliderValue.length === 2) {
    console.log("bro slide more");
  }
};

function copyText() {
  navigator.clipboard.writeText(passwordValue.textContent);

  let toast = document.querySelector(".toast");
  let progress = document.querySelector(".progress");

  let timer1, timer2;
  toast.style.display = "block";
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 2000);

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 2300);
}

function generatePassword() {
  passwordValue.textContent = "";

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&*()-_";

  let allowedChars = "";

  allowedChars += includeUppercase.checked ? uppercaseChars : "";
  allowedChars += includeLowerCase.checked ? lowercaseChars : "";
  allowedChars += includeNumbers.checked ? numberChars : "";
  allowedChars += includeSymbols.checked ? symbolChars : "";

  let passwordLength = Number(sliderRange.value);

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);

    if (excludeDuplicate.checked) {
      passwordValue.textContent = [
        ...new Set(passwordValue.textContent.split("")),
      ].join("");
    }

    passwordValue.textContent += allowedChars[randomIndex];

    if (
      !includeUppercase.checked ||
      !includeLowerCase.checked ||
      !includeNumbers.checked ||
      !includeSymbols.checked
    ) {
      errorMessage.style.display = "block";
      passwordValue.textContent = "";
    } else {
      errorMessage.style.display = "none";
    }
  }
}

// function generatePassword(
//   length,
//   includeLowerCase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols,
// ) {
//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%&*()-_";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowerCase ? lowercaseChars : "";
//   allowedChars += includeUppercase ? uppercaseChars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   if (length <= 0) {
//     return `(password length must be at least 1)`;
//   }

//   if (allowedChars.length === 0) {
//     return `(At least one set of Characters needs to be selected)`;
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIndex];
//   }

//   return password;
// }

// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(
//   passwordLength,
//   includeLowerCase,
//   includeUppercase,
//   includeSymbols,
//   includeNumbers,
// );

// console.log(`Generated Password: ${password}`);

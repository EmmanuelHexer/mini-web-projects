const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  console.log(birthdayValue);
  const date = new Date(birthdayValue).getTime();
  const currentDate = new Date().getTime();
  let gap = currentDate - date;

  let years = Math.floor(gap / 31556952000);
  resultEl.innerHTML = `Your age is ${years} years old`;
  // if (birthdayValue === "") {
  //   alert("Please enter your birthday");
  // } else {
  //   const age = getAge(birthdayValue);
  //   console.log(age);
  // }
}

// function getAge(birthdayValue) {
//   const currentDate = new Date();
//   const birthdayDate = new Date(birthdayValue);
//   let years = currentDate.getFullYear() - birthdayDate.getFullYear();
//   let months = currentDate.getMonth() - birthdayDate.getMonth();
//   console.log(months);
//   if (
//     months < 0 ||
//     (months === 0 && currentDate.getDate() < birthdayDate.getDate())
//   ) {
//     years--;
//   }
//   return years;
// }

btnEl.addEventListener("click", calculateAge);

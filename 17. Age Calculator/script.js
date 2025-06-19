const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthDayValue = birthdayEl.value;
  if (birthDayValue === "") {
    alert("Please enter an age!!!");
  } else {
    const age = getAge(birthDayValue);
    resultEl.innerHTML = `Your age is ${age} ${age < 2 ? "year" : "years"}`;
  }
}

function getAge(birthDayValue) {
  const currentDate = new Date();
  const birthDayDate = new Date(birthDayValue);
  let years = currentDate.getFullYear() - birthDayDate.getFullYear();
  let months = currentDate.getMonth() - birthDayDate.getMonth();
  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDayDate.getDate())
  ) {
    years--;
  }
  return years;
}

btnEl.addEventListener("click", calculateAge);

// const birthdayValue = birthdayEl.value;
// console.log(birthdayValue);
// const date = new Date(birthdayValue).getTime();
// const currentDate = new Date().getTime();
// let gap = currentDate - date;

// let years = Math.floor(gap / 31556952000);
// resultEl.innerHTML = `Your age is ${years} years old`;

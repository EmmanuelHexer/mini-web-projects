const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-num");
const yearEl = document.getElementById("year");

function currentDate() {
  const date = new Date();

  monthNameEl.innerText = date.toLocaleString("en", {
    month: "long",
  });

  dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long",
  });

  dayNumEl.innerText = date.getDate();

  yearEl.innerText = date.getFullYear();
}

currentDate();

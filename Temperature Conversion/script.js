const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
  if (toFahrenheit.checked) {
    const celsius = textBox.value;
    const fahrenheit = (celsius * 9) / 5 + 32;
    result.textContent = fahrenheit;
  } else if (toCelsius.checked) {
    const fahrenheit = textBox.value;
    const celsius = ((fahrenheit - 32) * 5) / 9;
    result.textContent = celsius;
  }
}

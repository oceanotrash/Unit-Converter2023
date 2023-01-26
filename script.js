const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const outputEl = document.getElementById("output-el");
const outputEl2 = document.getElementById("output-el2");
const outputEl3 = document.getElementById("output-el3");

let numValue;

convertBtn.addEventListener("click", function () {
  numValue = inputEl.value;
  

  printMeterFeet(numValue);
  printLitersGallons(numValue);
  primtKiloToPound(numValue);

  inputEl.value = "";
});

function printMeterFeet(numValue) {
  meterToFeetValue = numValue * 3.28078;
  feetToMeterValue = numValue / 3.281;

  outputEl.innerHTML = ` ${numValue} meter = ${meterToFeetValue.toFixed(
    3
  )} feet | ${numValue} feet = ${feetToMeterValue.toFixed(3)} meters`;
}

function printLitersGallons(numValue) {
  litersToGallon = numValue / 3.785;
  gallonToLiters = numValue * 3.785;

  outputEl2.innerHTML = ` ${numValue} liters = ${litersToGallon.toFixed(
    3
  )} gallons | ${numValue} gallon = ${gallonToLiters.toFixed(3)} liters `;
}

function primtKiloToPound() {
  kiloToPound = numValue * 2.20462;
  poundToKilo = numValue / 2.205;

  outputEl3.innerHTML = `${numValue} kilo = ${kiloToPound.toFixed(
    3
  )} | ${numValue} pounds = ${poundToKilo.toFixed(3)} kilos`;
}

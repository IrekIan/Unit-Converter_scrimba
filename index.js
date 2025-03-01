/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btn = document.querySelector("#convert-btn");
// LENGTH
let mTof = document.querySelector("#length-output-m-to-f");
let fTom = document.querySelector("#length-output-f-to-m");
// VOLUME
let lTog = document.querySelector("#volume-output-l-to-g");
let gTol = document.querySelector("#volume-output-g-to-l");
// WEIGHT
let kTop = document.querySelector("#weight-output-k-to-p");
let pTok = document.querySelector("#weight-output-p-to-k");

btn.addEventListener("click", function () {
  // LENGTH
  let value = document.querySelector("#value-input").value;
  let numValue = parseFloat(value);
  if (numValue < 1) {
    alert("Please enter a value");
    return;
  } else {
    function meterToFeet() {
      mTof.innerHTML = `${numValue.toFixed(2)} meters = ${(
        numValue * 3.28
      ).toFixed(2)} feet feet`;
    }
    meterToFeet(numValue);
    function feetToMeter() {
      fTom.innerHTML = `${numValue.toFixed(2)} feet = ${(
        numValue * 0.3
      ).toFixed(2)} meters`;
    }
    feetToMeter(numValue);
    // VOLUME
    function litersToGallons() {
      lTog.innerHTML = `${numValue.toFixed(2)} liters = ${(
        numValue * 0.26
      ).toFixed(2)} gallons`;
    }
    litersToGallons(numValue);

    function gallonsToLiters() {
      gTol.innerHTML = `${numValue.toFixed(2)} gallons = ${(
        numValue * 0.26
      ).toFixed(2)} liters`;
    }
    gallonsToLiters(numValue);
    // WEIGHT
    function kilogramsToPounds() {
      kTop.innerHTML = `${numValue.toFixed(2)} kilograms = ${(
        numValue * 2.2
      ).toFixed(2)} pounds`;
    }
    kilogramsToPounds(numValue);

    function poundsToKilograms() {
      pTok.innerHTML = `${numValue.toFixed(2)} pounds = ${(
        numValue * 0.45
      ).toFixed(2)} kilograms`;
    }
    poundsToKilograms(numValue);
  }
});

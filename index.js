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
  function meterToFeet() {
    mTof.innerHTML = `${value} meters = ${value * 3.28} feet`;
  }
  meterToFeet(value);
  function feetToMeter() {
    fTom.innerHTML = `${value} feet = ${value * 0.3} meters`;
  }
  feetToMeter(value);
  // VOLUME
  function litersToGallons() {
    lTog.innerHTML = `${value} liters = ${value * 0.26} gallons`;
  }
  litersToGallons(value);

  function gallonsToLiters() {
    gTol.innerHTML = `${value} gallons = ${value * 0.26} liters`;
  }
  gallonsToLiters(value);
  // WEIGHT
  function kilogramsToPounds() {
    kTop.innerHTML = `${value} kilograms = ${value * 2.2} pounds`;
  }
  kilogramsToPounds(value);

  function poundsToKilograms() {
    pTok.innerHTML = `${value} pounds = ${value * 0.45} kilograms`;
  }
  poundsToKilograms(value);
});
